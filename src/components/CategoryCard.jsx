const CatagoryCard = ({img , title}) =>{
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <img src={img} alt={title} />
            <p className="uppercase text-lg">{title}</p>
        </div>
    )
}

export default CatagoryCard