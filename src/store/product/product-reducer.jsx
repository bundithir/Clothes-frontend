import { PRODUCTS_ACTION_TYPES } from "./product-type"

export const INITIAL_STATE = {
    products : [],
    isLoading : false ,
    error : null
}

export const ProductReducer = (state = INITIAL_STATE, action)=>{
    const {type , payload} = action
    switch (type) {
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_START :
            return {
                ...state ,
                isLoading : true
            }
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_SUCCESS :
            return {
                ...state ,
                products : payload ,
                isLoading : false
            }
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_FAILED :
            return {
                ...state ,
                error : payload ,
                isLoading : false
            }
    
        default:
            return state
    }
}