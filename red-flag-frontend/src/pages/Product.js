import ListProduct from "../components/productos/ListProduct";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function Product(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])

    return(
        <div>
            <ListProduct></ListProduct>
        </div>
    )
}
