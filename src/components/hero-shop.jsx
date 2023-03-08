const HeroShop = ({title , text1 , text2 ,price , btn ,bg})=>{
    return (
        <div>
            <p className="text-center font-bold text-4xl my-[1.5rem] uppercase">{title}</p>
            <div className={`mx-auto ${bg} bg-center h-[500px] md:h-[600px] bg-no-repeat bg-cover mb-[3rem] cursor-pointer`}>
                <div className="w-[90%] h-full mx-auto">
                    <div className="w-[50%] md:w-[35%] flex flex-col justify-center h-full font-bold text-white">
                        <p className="text-4xl drop-shadow-lg mb-6 uppercase">{text1}</p>
                        <p className="text-xl drop-shadow-lg mb-3 uppercase">{text2}</p>
                        <p className="text-3xl drop-shadow-lg mb-5 uppercase">{price} thb</p>
                        <button className="text-black py-2 px-5 hover:bg-white/60 bg-white/80 border-black border uppercase w-fit">{btn}</button>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}
export default HeroShop