import { useContext } from "react";
import { DeleteIcon } from "../../components/Icon";
import { CartContext } from "../../context/cart-context";
const Checkout = () =>{
    const { CartItems , AddtoCart ,DeleteItemfromCart , RemovefromCart ,Total } = useContext(CartContext)
    return(
        <div className="w-[80%] mx-auto">
            <p className="text-center font-bold text-4xl uppercase my-[1.5rem]">checkout</p>
            {CartItems.map((item)=>{
            const { name , price , quantity ,imageUrl ,id} = item
            return(
                <div className="flex justify-between items-center py-[2rem] border-b" key={id}>
                    <div className="flex gap-[1rem] items-center">
                        <img src={imageUrl} alt={name} className='w-[125px] h-[125px] md:w-[150px] md:h-[150px]'/>
                        <div className="flex flex-col">
                            <p className="line-clamp-1">{name}</p>
                            <p className="uppercase md:hidden">thb {price.toFixed(2)}</p>
                            <div className="flex items-center justify-center border text-center md:hidden w-fit">
                                <p className="px-2 " onClick={()=> RemovefromCart(item)}>-</p>
                                <p className="w-[50px] text-center border-x px-2">{quantity}</p>
                                <p className="px-2" onClick={()=> AddtoCart(item)}>+</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center gap-[3rem]">
                        <p className="uppercase hidden md:block">thb {price.toFixed(2)}</p>
                        <div className="md:flex items-center justify-center border text-center hidden ">
                            <p className="px-2 " onClick={()=> RemovefromCart(item)}>-</p>
                            <p className="w-[30px] md:w-[50px] text-center border-x px-2">{quantity}</p>
                            <p className="px-2" onClick={()=> AddtoCart(item)}>+</p>
                        </div>
                        <button onClick={()=> DeleteItemfromCart(item)}><DeleteIcon/></button>
                    </div>
                </div>
            )})}
            <div className="my-[2rem]">
                <p className="text-right text-xl font-bold">Total : <span className="uppercase font-normal">thb {Total.toFixed(2)}</span></p>
            </div>
        </div>
    )
}
export default Checkout;