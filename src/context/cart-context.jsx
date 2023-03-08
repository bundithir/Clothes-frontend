import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
    IsCartOpen : false ,
    SetIsCartOpen : () => {} ,
    CartItems : [] ,
    AddtoCart : () => {},
    CartCount : 0, 
    Total : 0 ,
    RemovefromCart : ()=>{} ,
    DeleteItemfromCart : () =>{}
})

const Additems = (CartItems , itemAdded) => {
    const ItemExist = CartItems.find(item => item.id === itemAdded.id)
    if(ItemExist){
        return CartItems.map(item => item.id === itemAdded.id?
            {...item,quantity:item.quantity+1}
            :
            item)
    }
    return [...CartItems,{...itemAdded , quantity : 1}]
}

const Removeitem = (CartItems , ItemRemoved) =>{
    const ItemExist = CartItems.find( item => item.id === ItemRemoved.id)
    
    if(ItemExist.quantity === 1){
        return CartItems.filter( item => item.id !== ItemRemoved.id)
    }
    return CartItems.map(item => item.id === ItemRemoved.id?
        {...item,quantity:item.quantity-1}
        :
        item)
}

const DeleteItem = (CartItems , ItemDeleted) => {return CartItems.filter( item => item.id !== ItemDeleted.id)}

export const CartProvider = ({children}) => {
    const [IsCartOpen , SetIsCartOpen] = useState(false)
    const [CartItems , SetCartItems] = useState([])
    const [CartCount , SetCartCount] = useState(0)
    const [Total , Settotal] = useState(0)

    useEffect(()=>{
        const TotalItems = CartItems.reduce((acc , item) => acc + item.quantity , 0)
        SetCartCount(TotalItems)
    },[CartItems])

    useEffect(()=>{
        const Total = CartItems.reduce((acc , item) => acc + (item.quantity * item.price) , 0)
        Settotal(Total)
    },[CartItems])

    const AddtoCart = (itemAdded) => {
        SetCartItems(Additems(CartItems , itemAdded))
        console.log(CartItems)
    }
    const RemovefromCart =(ItemRemoved) =>{
        SetCartItems(Removeitem(CartItems , ItemRemoved)) 
    }
    const DeleteItemfromCart = (ItemDeleted) => {
        SetCartItems(DeleteItem(CartItems , ItemDeleted))
    }
    const value = {IsCartOpen , SetIsCartOpen , CartItems , AddtoCart , CartCount ,RemovefromCart ,DeleteItemfromCart ,Total}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
} 