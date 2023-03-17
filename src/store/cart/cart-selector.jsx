import { createSelector } from "reselect";

const SelectCart = (state)=>state.cart

export const CartOpenSelect = createSelector(SelectCart,(cart)=>cart.IsCartOpen)

export const CartItemsSelect = createSelector(SelectCart,(cart)=>cart.CartItems)

export const CartCountSelect = createSelector(CartItemsSelect,(item)=>{
    return item.reduce((acc , item) => acc + item.quantity , 0)
})

export const TotalSelect = createSelector(CartItemsSelect ,(item)=>{
    return item.reduce((acc , item) => acc + (item.quantity * item.price) , 0)
})
