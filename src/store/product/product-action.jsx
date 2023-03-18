// import { PRODUCTS_ACTION_TYPES } from "./product-type"
// import { GetDataDocument } from "../../utils/firebase/firebase"

// export const Setproducts =(products)=>{
//     return {
//         type : PRODUCTS_ACTION_TYPES.SET_PRODUCTS ,
//         payload : products
//     }
// }

// export const FetchProductStart = ()=>{
//     return {
//         type : PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_START
//     }
// }

// export const FetchProductSuccess = (products)=>{
//     return {
//         type : PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_SUCCESS ,
//         payload : products
//     }
// }

// export const FetchProductFailed = (error)=>{
//     return {
//         type : PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_FAILED ,
//         payload : error
//     }
// }

// export const FetchProductasync = (collectionkey)=>async(dispatch)=>{
//     dispatch(FetchProductStart())
//     try{
//         const products = await GetDataDocument(collectionkey)
//         dispatch(FetchProductSuccess(products))
//     }catch(error){
//         dispatch(FetchProductFailed(error))
//     }
// }