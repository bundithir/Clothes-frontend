import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import WomenDefault from "./women-comp/women-home"
import Shop from "../../components/Shop"
import { useDispatch } from "react-redux"
import { FetchProductasync } from "../../store/product/product-action"




const Women =()=>{
    const dispacth = useDispatch()
    useEffect(()=>{
        dispacth(FetchProductasync('women')) 
    },[])

    return(
        <Routes>
            <Route index element={<WomenDefault/>}/>
            <Route path=':category' element={<Shop/>}/>
            
        </Routes>
    )
}

export default Women;