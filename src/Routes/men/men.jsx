import {  useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import MenDefault from "./men-comp/men-home"
import Shop from "../../components/Shop"
import { useDispatch } from "react-redux"
import { FetchProductasync } from "../../store/product/product-action"



const Men =()=>{
    const dispacth = useDispatch()
    useEffect(()=>{
        dispacth(FetchProductasync('men'))
        
    },[])

    return(
        <Routes>
            <Route index element={<MenDefault/>}/>
            <Route path=':category' element={<Shop/>}/>
            
        </Routes>
    )
}

export default Men;