import { createSlice } from "@reduxjs/toolkit"

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

export const INITIAL_STATE = {
    IsCartOpen : false , 
    CartItems : [] ,
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState : INITIAL_STATE ,
    reducers : {
        SetIsCartOpen : ( state , action ) => {
            state.IsCartOpen = action.payload
        } ,
        AddtoCart : ( state , action )=>{
            state.CartItems = Additems(state.CartItems , action.payload)
        } ,
        RemovefromCart : ( state , action )=>{
            state.CartItems = Removeitem(state.CartItems , action.payload)
        } ,
        DeleteItemfromCart : ( state , action )=>{
            state.CartItems = DeleteItem(state.CartItems , action.payload)
        } ,

    }
})

export const { SetIsCartOpen , AddtoCart , RemovefromCart ,DeleteItemfromCart} = cartSlice.actions

export const CartReducer = cartSlice.reducer

// export const CartReducerold= ( state = INITIAL_STATE, action)=>{
//     const { type , payload } = action
//     switch (type) {
//         case CART_ACTION_TYPES.SET_CART_ITEM:
//             return {
//                 ...state ,
//                 CartItems : payload
//             }
//         case CART_ACTION_TYPES.SET_CART_OPEN:
//             return {
//                 ...state ,
//                 IsCartOpen : payload
//             }
//         default:
//             return state
//     }
// }