import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import KidsDefault from "./kids-comp/kids-home"
import Shop from "../../components/Shop"
import { useDispatch } from "react-redux"
import { FetchProductasync } from "../../store/product/product-reducer"
// import { GetDataDocument } from '../../utils/firebase/firebase'

const Kids =()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(FetchProductasync('kids'))
    },[])

    return(
        <Routes>
            <Route index element={<KidsDefault/>}/>
            <Route path=':category' element={<Shop/>}/>
            
        </Routes>
    )
}

export default Kids;