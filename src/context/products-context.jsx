import { createContext, useState } from "react";
import PRODUCT from '../../shop-data.json'
export const ProductContext = createContext({
    products : [] ,
    Setproducts : () => []
})

export const Productprovider = ({children}) =>{
    const [products , Setproducts] = useState(PRODUCT)
    const value = {products , Setproducts}
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}