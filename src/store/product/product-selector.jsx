// import { createSelector } from 'reselect'
 
// const SelectproductsReducer = (state) => state.products

// export const SelectProducts = createSelector(
//     SelectproductsReducer ,
//     (productSlice)=> {
//         return productSlice.products
//     }
// )

export const SelectProducts = (state) => state.products.products

export const SelectLoading = (state) => state.products.isLoading

export const ProductSelector = (state) => state.products.products.reduce((acc , data) => {
    const { title , items } = data
    acc[title.toLowerCase()] = items
    return acc
 } ,{})

