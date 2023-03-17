import {CartItem} from './nav-comp'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CartItemsSelect } from '../../store/cart/cart-selector'

export const Cart_Dropdown = () =>{
    const CartItems = useSelector(CartItemsSelect)
    const navigate = useNavigate()
    const Checkoutpath = () => navigate('/checkout')
    return (
        <div className="absolute top-[6rem] w-[90%] h-[250px] right-1/2 transform translate-x-1/2 border rounded-xl bg-white p-5 shadow-2xl md:w-[300px] md:h-[300px] md:right-0 md:translate-x-0">
            <div className='flex justify-between flex-col h-full'>
                <div className='overflow-auto'>
                    {CartItems.map(item => (
                        <CartItem key={item.id} product={item}/>
                    ))}
                </div>
                <button className='uppercase text-white bg-black py-3 rounded-lg' onClick={Checkoutpath}>checkout</button>
            </div>
            
            
        </div>
    )
}