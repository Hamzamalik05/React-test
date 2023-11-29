import { createSlice } from "@reduxjs/toolkit"; 

let INIT_STATE={
    cart:[],
    quantity:0
}
export const CartSlice =createSlice({
     
    name:"CART",
    initialState:INIT_STATE,
    reducers:{
      addtocart:(state,action)=>{
        console.log("added")
         state.cart.push(action.payload)
         state.quantity = state.quantity+1
      },
      deletetocart:(state,action)=>{
         let remove = state.cart.findIndex(item=>item.id == action.payload)
         if(remove !== -1){
        state.cart.splice(remove ,1)
        state.quantity = state.quantity-1
         }
      }
    }

})
const {reducer} = CartSlice
const {addtocart,deletetocart} = CartSlice.actions
export{
  addtocart,
  deletetocart,
  reducer as getAddToCart

}
