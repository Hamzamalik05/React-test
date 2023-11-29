import { configureStore} from "@reduxjs/toolkit";
import { getProductApi } from "./slice/ApiFetchingSlice";
import { getAddToCart } from "./slice/CartSlice";
export const store = configureStore({
  reducer: {
    getProductApi:getProductApi,
    getAddToCart:getAddToCart
  },
})
