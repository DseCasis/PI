import {useEffect, useState} from "react";
import {destroyWish, getProducts, getWishes, setToken} from "../services/PrivateServices";
import WishCard from "../components/Wishes/WishCard";

export default function Wishes(){
    const [products, setProducts]=useState([])

    useEffect(()=>{
        getWishes().then(response=>{
            setProducts(response.data)
        })
    },[])

    const deleteWish=(product)=>{
        destroyWish(product).then(response=>{
            console.log(response)
            setProducts(products.filter(value=> value.id !== product))
            }
        )
    }

    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])

    return (
        <div>
            <WishCard products={products} deleteWish={deleteWish}></WishCard>
        </div>
    )
}
