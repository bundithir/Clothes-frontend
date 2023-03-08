import { useContext , useEffect } from "react"
import {ProductContext} from '../../context/products-context'
import { Route, Routes } from "react-router-dom"
import MenDefault from "./men-comp/men-home"
import Shop from "../../components/Shop"

const Men =()=>{
    const { Getdata } = useContext(ProductContext)

    useEffect(()=>{
        Getdata('men')
    },[])

    return(
        <Routes>
            <Route index element={<MenDefault/>}/>
            <Route path=':category' element={<Shop/>}/>
            
        </Routes>
    )
}

export default Men;