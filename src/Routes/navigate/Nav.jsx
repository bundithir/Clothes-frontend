import { useContext , useState } from "react";
import { Outlet , Link} from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { SignoutUser } from "../../utils/firebase/firebase";
import { CartIcon, HeartIcon, Logo , LoginIcon,LogoutIcon ,BurgerIcon ,XIcon} from "./nav-comp";
import { CartContext } from "../../context/cart-context";
import Foot from "../../components/footer";
import {NavLinkto} from './nav-style'
import { Cart_Dropdown } from "./Cart-dropdown";


const Nav =()=>{
    const { currentUser } = useContext(UserContext)
    const {IsCartOpen} = useContext(CartContext)
    const [sideOpen , SetsideOpen] = useState(false) 
    const Sidemenu = () => SetsideOpen(!sideOpen)
    const OnclickSidemenu = () => {
        if(sideOpen) SetsideOpen(false) 
    }
    return(
        <div className="min-h-screen z-0">
            <div className="border-b border-black sticky top-0 bg-white z-10">
                <nav className="w-[90%] flex justify-between mx-auto py-[1rem] relative">
                    <div className="flex gap-[1rem] md:gap-[3rem] items-center">
                        <button className="md:hidden" onClick={Sidemenu}><BurgerIcon/></button>
                        <Link to='/'>
                            <Logo/>
                        </Link>
                        <div className={`${sideOpen?'content':'hidden'} fixed h-screen w-[100%] top-0 bg-black/80 z-20 md:hidden`}  onClick={Sidemenu}></div>
                        <ul className={`${sideOpen?'translate-x-0':'-translate-x-full'} duration-300 md:translate-x-0 fixed pt-[8rem] z-30 h-screen gap-[3rem] flex flex-col items-center top-0 left-0 w-[80%] border-r bg-white md:static md:z-10 md:pt-0 md:h-auto md:flex-row md:border-0`}>
                            <li className="absolute top-10 right-10 md:hidden" onClick={Sidemenu}><button><XIcon/></button></li>
                            <li onClick={OnclickSidemenu}><Link to='/women' className={NavLinkto}>WOMEN</Link></li>
                            <li onClick={OnclickSidemenu}><Link to='/men' className={NavLinkto}>MEN</Link></li>
                            <li onClick={OnclickSidemenu}><Link to='/kids' className={NavLinkto}>KIDS</Link></li>
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