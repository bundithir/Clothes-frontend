// import { createSelector } from "reselect";

// const SelectCart = (state)=>state.cart

export const CartOpenSelect = (state)=>state.cart.IsCartOpen

export const CartItemsSelect = (state)=>state.cart.CartItems

export const CartCountSelect = (state)=>state.cart.CartItems.reduce((acc , item) => acc + item.quantity , 0)

export const TotalSelect = (state)=>state.cart.CartItems.reduce((acc , item) => acc + (item.quantity * item.price) , 0)
