import { createSelector } from 'reselect'
 
const SelectproductsReducer = (state) => state.products

export const SelectProducts = createSelector(
    SelectproductsReducer ,
    (productSlice)=> {
        return productSlice.products
    }
)

export const SelectLoading = createSelector(SelectproductsReducer,(productSlice) => productSlice.isLoading)

export const ProductSelector = createSelector(
    SelectProducts,
    (products) => {
        return products.reduce((acc , data) => {
        const { title , items } = data
        acc[title.toLowerCase()] = items
        return acc
     } ,{})
    }
)