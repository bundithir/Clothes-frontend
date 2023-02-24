import Features from "./home-comp/app-features"
import Hero from "./home-comp/hero-home"
import Noctice from "./home-comp/noctice-home"
const Home = () =>{
    return (
        <div>
            <Hero/>
            <Noctice/>
            <Features/>
        </div>
    )
}

export default Home