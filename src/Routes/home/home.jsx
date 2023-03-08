import Features from "../../components/app-features"
import HeroHome from "./home-comp/hero-home"
import Noctice from "./home-comp/noctice-home"
const Home = () =>{
    return (
        <div>
            <HeroHome text1={'Just arrived!'} text2={'Spring/Summer 2023 Collection'} btn={'more'} />
            <Noctice/>
            <div className="w-[90%] mx-auto">
                <Features/>
            </div>
            
        </div>
    )
}

export default Home