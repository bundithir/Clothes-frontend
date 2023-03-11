import { useEffect , useReducer ,createContext ,useState } from "react";

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

const DeleteItem = (CartItems , ItemDeleted) =>  CartItems.filter( item => item.id !== ItemDeleted.id)


const CART_ACTION_TYPES = {
    SET_CART_ITEMS : 'SET_CART_ITEMS' , 
    SET_CART_OPEN : 'SET_CART_OPEN'
}

export const CartReducer = (state , action) =>{
    const { type , payload } = action
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state ,
                ...payload
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state ,
                IsCartOpen : payload
            }
            
        default:
            throw new Error(`Unhandled this type ${type} in UserReducer`)
    }
}

const INITIAL_STATE = {
    IsCartOpen : false , 
    CartItems : [] ,
    CartCount : 0 ,
    Total : 0
}

export const CartProvider = ({children}) => {
    
    const [state , dispatch] = useReducer(CartReducer , INITIAL_STATE)
    const { IsCartOpen  , CartItems , CartCount , Total } = state

    const UpdateCartItems =(NewCartItems)=>{
        const TotalItems = NewCartItems.reduce((acc , item) => acc + item.quantity , 0)
        const Total = NewCartItems.reduce((acc , item) => acc + (item.quantity * item.price) , 0)
        dispatch({
            type : CART_ACTION_TYPES.SET_CART_ITEMS ,
            payload : {
                CartItems : NewCartItems,
                CartCount : TotalItems ,
                Total : Total
            }
        })
    }

    const AddtoCart = (itemAdded) => {
        const NewCartItems = Additems(CartItems , itemAdded)
        UpdateCartItems(NewCartItems)
    }
    const RemovefromCart =(ItemRemoved) =>{
        const NewCartItems = Removeitem(CartItems , ItemRemoved)
        UpdateCartItems(NewCartItems)
    }
    const DeleteItemfromCart = (ItemDeleted) => {
        const NewCartItems = DeleteItem(CartItems , ItemDeleted)
        UpdateCartItems(NewCartItems)
    }
    const SetIsCartOpen =(boolean)=> {
        dispatch({
            type : CART_ACTION_TYPES.SET_CART_OPEN,
            payload : boolean
        })
    }

    const value = {IsCartOpen , SetIsCartOpen , CartItems , AddtoCart , CartCount ,RemovefromCart ,DeleteItemfromCart ,Total}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
} 