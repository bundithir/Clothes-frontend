const HeroHome = ({text1 , text2 , btn })=>{
    return (
        <div className='bg-hero bg-center h-[500px] md:h-[600px] bg-no-repeat bg-cover mb-[3rem] cursor-pointer'>
            <div className="w-[90%] h-full mx-auto">
                <div className="w-[35%] flex flex-col justify-center h-full font-bold text-white">
                    <p className="text-2xl drop-shadow-lg mb-3">{text1}</p>
                    <p className="text-4xl drop-shadow-lg mb-5">{text2}</p>
                    <button className="text-black py-2 px-5 hover:bg-white/60 bg-white/80 border-black border uppercase w-fit">{btn}</button>
                </div>
                    
            </div>
        </div>
    )
}
export default HeroHome