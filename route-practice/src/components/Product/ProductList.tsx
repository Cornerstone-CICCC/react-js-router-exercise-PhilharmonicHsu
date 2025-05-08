import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { BounceLoader } from 'react-spinners'

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
}

interface ProductResponse {
    products: Product[];
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=> {
        const fetchProducts = async () => {
            await fetch("https://dummyjson.com/products")
                .then((res) => {
                    return res.json();
                })
                .then((data: ProductResponse) => {
                    setProducts(data.products);
                })
                .catch((err) => {
                    console.error(err);
                }).finally(() => {
                    setIsLoading(false)
                });
        }

        fetchProducts()
    }, [])

    return <>
        <h1 className="text-3xl">Product List</h1>
        {
            isLoading 
            ? <div className="flex justify-center items-center flex-1">
                <BounceLoader />
            </div>
                
            : <div className="ml-10">
                <ul className="list-disc">
                    {
                        products.map(product => <li 
                            key={product.id}
                            className="cursor-pointer hover:text-amber-500"
                        >
                            <Link to={product.id.toString()}>{product.title}</Link>
                        </li>)
                    }
                </ul>
            </div>
        }
    </>
}