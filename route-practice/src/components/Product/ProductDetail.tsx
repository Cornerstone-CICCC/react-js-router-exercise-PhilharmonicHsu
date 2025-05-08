import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { BounceLoader } from 'react-spinners'


interface Product {
    id: number;
    title: string;
    brand: string;
    price: number;
    description: string;
    thumbnail: string;
    images: string[]
}

export default function ProductDetail() {
    const [product, setProduct] = useState<Product>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const getProduct = async () => {
            await fetch(` https://dummyjson.com/products/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((data: Product) => {
                setProduct(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
        }

        getProduct()
    }, [])

    return <>
        <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-3xl">Product Detail</h1>
            <div>
                { 
                isLoading ? <div>
                    <BounceLoader />
                </div>
                : <>
                    <img className="w-[30rem]" src={product?.images[0]} />
                    <p>Title: {product?.title}</p>
                    <p>Brand: {product?.brand}</p>
                    <p>price: ${product?.price}</p>
                </>
                
            }
            </div>
            
            <button 
                onClick={() => navigate(-1)}
                className="cursor-pointer bg-amber-500 py-1 px-4 rounded-md hover:bg-amber-600"
            >
                Back To List
            </button>
        </div>
    </>
}