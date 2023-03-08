import { createContext, useEffect, useState } from "react";
import { GetDataDocument } from "../utils/firebase/firebase";
// import {MEN , WOMEN ,KIDS} from '../../shop-data'
// import { AddCollectionAndDoc } from "../utils/firebase/firebase";
export const ProductContext = createContext({
    productsMen : {} ,
    productsKids : {} ,
    productsWomen : {} ,
    products : {} ,

})

export const Productprovider = ({children}) =>{
    // const [productsMen , SetproductsMen] = useState({})
    // const [productsKids , SetproductsKids] = useState({})
    // const [productsWomen , SetproductsWomen] = useState({})
    const [products , Setproducts] = useState({})
    // useEffect(()=> {
    //     AddCollectionAndDoc('men',MEN)
    //     AddCollectionAndDoc('women',WOMEN)
    //     AddCollectionAndDoc('kids',KIDS)
    
    // },[])
    // useEffect(()=>{
    //     const Getdata = async()=>{
    //         const M = await GetDataDocument('men')
    //         const K = await GetDataDocument('kids')
    //         const W = await GetDataDocument('women')
    //         SetproductsMen(M)
    //         SetproductsKids(K)
    //         SetproductsWomen(W)
    //     }
    //     Getdata()
    // },[])

    const Getdata = async(CollectionKey) =>{
        const data = await GetDataDocument(CollectionKey)
        Setproducts(data)
    }

    const value = {products ,Getdata}
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}