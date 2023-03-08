import { useState , useEffect , useContext} from "react"
import { useParams  } from "react-router-dom"
import { ProductContext } from "../context/products-context"
import ProductCard from "./ProductCard"

const Shop = () =>{
    const { category } = useParams()    
    const { products } = useContext(ProductContext)
    const [Products , SetProducts] = useState(products[category])

    useEffect(()=>{
        SetProducts(products[category])
    },[category , products])
    

    return(
        <div>
            <p className="text-center pt-[2rem] uppercase font-bold text-4xl">{category}</p>
            <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mx-auto py-[2rem]">
                {Products &&
                    Products.map((Product) => <ProductCard key={Product.id} product ={Product}/>)
                }
            </div>
        </div>
        
    )
}

export default Shop;