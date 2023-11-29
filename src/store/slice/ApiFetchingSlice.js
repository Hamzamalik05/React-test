import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Statuses } from "../statuses";


let INITIAL_STATE ={
    product : [],
    status:Statuses

}
export const ApiFetchingSlice = createSlice({
    name:"GET_API",
    initialState:INITIAL_STATE,
    extraReducers:((builder)=>{
            builder.addCase(getApi.pending,(state,action)=>{
            state.status = Statuses.GET_PRODUCT
            })

            builder.addCase(getApi.fulfilled,(state,action)=>{
                state.status = Statuses.GET_SUCCESS
                state.product =action.payload
            })

            builder.addCase(getApi.rejected,(state,action)=>{
                state.status = Statuses.GET_FAILED
                
            })
            
    }),
})
const getApi = createAsyncThunk("fetch/api",async()=>{
    let response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    let data = response.data
    return data

})



const {reducer} = ApiFetchingSlice
export{
    getApi,
    reducer as getProductApi
}