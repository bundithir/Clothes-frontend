import { useContext , useEffect } from "react"
import {ProductContext} from '../../context/products-context'
import { Route, Routes } from "react-router-dom"
import KidsDefault from "./kids-comp/kids-home"
import Shop from "../../components/Shop"

const Kids =()=>{
    const { Getdata } = useContext(ProductContext)

    useEffect(()=>{
        Getdata('kids')
    },[])

    return(
        <Routes>
            <Route index element={<KidsDefault/>}/>
            <Route path=':category' element={<Shop/>}/>
            
        </Routes>
    )
}

export default Kids;