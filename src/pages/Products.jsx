import {products} from "../data"
import {Link} from "react-router-dom"

export default function Products(){
    return (
        <div>
            <h1>products</h1>
            {
                products.map((p)=>(
                    <div key={p.id}> 
                    <Link to={`/products/${p.id}`}>
                    {p.id}
                    </Link>
                    </div>
                ))
            }
        </div>
    )
} 
// () -> return statemet nbh likhna hota