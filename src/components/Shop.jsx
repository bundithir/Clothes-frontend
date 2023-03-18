import { useState , useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams  } from "react-router-dom"
import ProductCard from "./ProductCard"
import { ProductSelector , SelectLoading} from "../store/product/product-selector"
import Spinner from "./Spinner"

const Shop = () =>{
    const { category } = useParams()    
    const products = useSelector(ProductSelector)
    const isLoading = useSelector(SelectLoading)
    const [Products , SetProducts] = useState(products[category])

    useEffect(()=>{
        SetProducts(products[category])
    },[category , products])
    

    return(
        <div>
            {isLoading ? <Spinner/>
            :
            <div>
                <p className="text-center pt-[2rem] uppercase font-bold text-4xl">{category}</p>
                    <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mx-auto py-[2rem]">
                        {Products &&
                            Products.map((Product) => <ProductCard key={Product.id} product ={Product}/>)
                        }
                    </div>
            </div>
            }
        </div>
        
    )
}

export default Shop;