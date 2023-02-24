import { createContext, useState } from "react";

export const CartContext = createContext({
    IsCartOpen : false ,
    SetIsCartOpen : () => {} ,
    CartItems : [] ,
    AddtoCart : () => {}
})

const Additems = (CartItems , itemsAdded) => {

}

export const CartProvider = ({children}) => {
    const [IsCartOpen , SetIsCartOpen] = useState(false)
    const [CartItems , SetCartItems] = useState([])
    const AddtoCart = (itemsAdded) => {
        SetCartItems(CartItems , itemsAdded)
    }
    const value = {IsCartOpen , SetIsCartOpen}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
} 