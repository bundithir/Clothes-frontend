import { useContext , useState } from "react";
import { Outlet , Link} from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { SignoutUser } from "../../utils/firebase/firebase";
import { CartIcon, HeartIcon, Logo , LoginIcon,LogoutIcon, Cart_Dropdown} from "./nav-comp";
import { CartContext } from "../../context/cart-context";
import Foot from "../home/home-comp/footer";
import {NavLinkto} from './nav-style'


const Nav =()=>{
    const { currentUser } = useContext(UserContext)
    const {IsCartOpen} = useContext(CartContext)
    const [sideOpen , SetsideOpen] = useState(false) 
    const Sidemenu = () => SetsideOpen(!sideOpen)
    const OnclickSidemenu = () => {
        if(sideOpen) SetsideOpen(false) 
    }
    return(
        <div>
            <div className="border-b border-black sticky top-0 bg-white z-10">
                <nav className="w-[90%] flex justify-between mx-auto py-[1rem] relative">
                    <div className="flex gap-[1rem] md:gap-[3rem] items-center">
                        <button className="md:hidden" onClick={Sidemenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg></button>
                        <Logo/>
                        <div className={`${sideOpen?'content':'hidden'} fixed h-screen w-[100%] top-0 bg-black/80 z-20 md:hidden`}  onClick={Sidemenu}></div>
                        <ul className={`${sideOpen?'translate-x-0':'-translate-x-full'} duration-300 md:translate-x-0 overflow-visible fixed pt-[8rem] z-30 h-screen gap-[3rem] flex flex-col items-center top-0 left-0 w-[80%] border-r  bg-white md:static md:z-10 md:pt-0 md:h-auto md:flex-row md:border-0`}>
                            <li className="absolute top-10 right-10 md:hidden"  onClick={Sidemenu}><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button></li>
                            <li onClick={OnclickSidemenu}><Link to='/signup' className={NavLinkto}>WOMEN</Link></li>
                            <li onClick={OnclickSidemenu}><Link to='/men' className={NavLinkto}>MEN</Link></li>
                            <li onClick={OnclickSidemenu}><Link to='/kids' className={NavLinkto}>KIDS</Link></li>
                            <li onClick={OnclickSidemenu}><Link to='/baby' className={NavLinkto}>BABY</Link></li>
                        </ul>
                    </div>                   
                    <div className="flex gap-[2rem] items-center">
                        {currentUser?
                        <span onClick={SignoutUser}><LogoutIcon/></span>
                        :<Link to = '/signin'><LoginIcon/></Link>
                        }
                        <HeartIcon/>
                        <CartIcon/>
                    </div>
                    {IsCartOpen?<Cart_Dropdown/>:null}
                </nav>
            </div>
            <Outlet/>
            <Foot/>
        </div>
    )
} 
export default Nav;