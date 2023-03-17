import {CART_ACTION_TYPES} from './cart-type'

export const INITIAL_STATE = {
    IsCartOpen : false , 
    CartItems : [] ,
}

export const CartReducer= ( state = INITIAL_STATE, action)=>{
    const { type , payload } = action
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEM:
            return {
                ...state ,
                CartItems : payload
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state ,
                IsCartOpen : payload
            }
        default:
            return state
    }
}