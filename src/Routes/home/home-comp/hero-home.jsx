const Hero = ()=>{
    return (
        <div className="bg-hero bg-center h-[500px] bg-no-repeat bg-cover mb-[3rem]">
            <div className="w-[90%] h-full mx-auto">
                <div className="w-[35%] flex flex-col justify-center h-full font-bold text-white">
                    <p className="text-2xl drop-shadow-lg mb-3">Just arrived!</p>
                    <p className="text-4xl drop-shadow-lg mb-5">Spring/Summer 2023 Collection</p>
                    <button className="text-black py-2 px-5 hover:bg-white/60 bg-white/80 border-black border uppercase w-fit">more</button>
                </div>
                    
            </div>
        </div>
    )
}
export default Hero