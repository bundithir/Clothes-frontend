import { Outlet , Link} from "react-router-dom";
import { CartIcon, HeartIcon, Logo , Menu, LoginIcon,LogoutIcon} from "./nav-comp";

const Nav =()=>{
    return(
        <div>
            <div className="border-b border-black">
                <nav className="w-[90%] flex justify-between mx-auto py-[1rem]">
                    <div className="flex gap-[3rem] items-center">
                        <Logo/>
                        <Menu/>
                    </div>                   
                    <div className="flex gap-[2rem] items-center">
                        <Link to = '/signin'><LoginIcon/></Link>
                        <HeartIcon/>
                        <CartIcon/>
                    </div>
                </nav>
            </div>
            <Outlet/>
        </div>
    )
} 
export default Nav;