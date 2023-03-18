import { combineReducers } from "@reduxjs/toolkit";
import { UserReducer } from "./user/user-reducer";
import { ProductReducer } from "./product/product-reducer";
import { CartReducer } from "./cart/cart-reducer";

export const rootReducer = combineReducers({
    user : UserReducer , 
    products : ProductReducer ,
    cart : CartReducer ,
})