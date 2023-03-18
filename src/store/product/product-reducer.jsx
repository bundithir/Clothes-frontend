import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetDataDocument } from "../../utils/firebase/firebase"

export const INITIAL_STATE = {
    products : [],
    isLoading : false ,
    error : null
}

export const FetchProductasync = createAsyncThunk(
    'products/FetchProduct' ,
    async(collectionkey) => {
        try{
            const products = await GetDataDocument(collectionkey)
            return products
        }catch(error){
            return error
        }
        
    }
)

export const productSlice = createSlice({
    name : 'products' ,
    initialState : INITIAL_STATE ,
    reducers : {
        // Setproducts : (state , action ) => {
        //     state.products = action.payload
        // }
    },
    extraReducers : (builder)=>{
        builder.addCase(FetchProductasync.pending , (state)=>{
            state.isLoading = true
        })
        builder.addCase(FetchProductasync.fulfilled , (state , action)=>{
            state.products = action.payload
            state.isLoading = false
        })
        builder.addCase(FetchProductasync.rejected , (state , action)=>{
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const { Setproducts } = productSlice.actions

export const ProductReducer = productSlice.reducer

// export const ProductReducerold = (state = INITIAL_STATE, action)=>{
//     const {type , payload} = action
//     switch (type) {
//         case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_START :
//             return {
//                 ...state ,
//                 isLoading : true
//             }
//         case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_SUCCESS :
//             return {
//                 ...state ,
//                 products : payload ,
//                 isLoading : false
//             }
//         case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_FAILED :
//             return {
//                 ...state ,
//                 error : payload ,
//                 isLoading : false
//             }
    
//         default:
//             return state
//     }
// }