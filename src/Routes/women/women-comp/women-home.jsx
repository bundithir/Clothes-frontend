import CatagoryCard from "../../../components/CategoryCard";
import HeroShop from "../../../components/hero-shop";
import { Link } from "react-router-dom";
import Features from "../../../components/app-features";

const WomenDefault = () =>{
    return(
        <div className="w-[90%] mx-auto">
            <HeroShop title='WOMEN' text1='craft of comfort' text2='Premium Linen' price='1490' btn='shop now' bg='bg-hero'/>
            <p className="text-center font-bold text-4xl my-[2rem] uppercase">SEARCH BY CATEGORY</p>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-[1rem] md:gap-[2rem] ">
                <Link to='/women/t-shirt'><CatagoryCard img={'./images/500x500.gif'} title={'t-shirt'}/></Link>
                <Link to='/women/shirt'><CatagoryCard img={'./images/500x500.gif'} title={'shirt'}/></Link>
                <Link to='/women/pants'><CatagoryCard img={'./images/500x500.gif'} title={'pants'}/></Link>
                <Link to='/women/jeans'><CatagoryCard img={'./images/500x500.gif'} title={'jeans'}/></Link>
            </div>
            <Features/>
        </div>
    )
}

export default WomenDefault;