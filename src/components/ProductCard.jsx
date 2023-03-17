import { useDispatch, useSelector } from "react-redux"
import { AddtoCart } from "../store/cart/cart-action"
import { CartItemsSelect } from "../store/cart/cart-selector"

const ProductCard = ({product}) =>{
    const { name , price , imageUrl} = product
    const Cartitems = useSelector(CartItemsSelect)
    const dispatch = useDispatch()
    const Add = () => dispatch(AddtoCart(Cartitems,product))
    return(
        <div className="rounded shadow-xl">
            <img src={imageUrl} alt={name} className ='h-[300px] w-full rounded-t'/>
            <p className="font-semibold text-lg px-2 h-[50px]">{name}</p>
            <p className="uppercase font-bold text-xl p-2">THB {price.toFixed(2)}</p>
            <button className="w-full bg-black text-white rounded p-1 uppercase font-semibold" onClick={Add}>add to cart</button>
        </div>
    )
}

export default ProductCard


