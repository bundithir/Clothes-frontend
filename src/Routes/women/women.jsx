import { useContext , useEffect } from "react"
import {ProductContext} from '../../context/products-context'
import { Route, Routes } from "react-router-dom"
import WomenDefault from "./women-comp/women-home"
import Shop from "../../components/Shop"

const Men =()=>{
    const { Getdata } = useContext(ProductContext)

    useEffect(()=>{
        Getdata('women')
    },[])

    return(
        <Routes>
            <Route index element={<WomenDefault/>}/>
            <Route path=':category' element={<Shop/>}/>
            
        </Routes>
    )
}

export default Men;