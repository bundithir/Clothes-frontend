import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import MenDefault from "./men-comp/men-home"
import Shop from "../../components/Shop"
import { useDispatch } from "react-redux"
import { FetchProductasync } from "../../store/product/product-reducer"
// import { GetDataDocument } from '../../utils/firebase/firebase'



const Men =()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(FetchProductasync('men'))
        // console.log(import.meta.env.VITE__STRIPE_PUBLISHABLE_KEY)
    },[])

    return(
        <Routes>
            <Route index element={<MenDefault/>}/>
            <Route path=':category' element={<Shop/>}/>
            
        </Routes>
    )
}

export default Men;