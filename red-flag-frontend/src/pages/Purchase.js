import PurchaseList from "../components/PurchaseList";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function Purchase(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])
    return(
        <div className="flex flex-col m-auto pt-8">
            <h1 className="text-3xl font-semibold text-center" >Historial de Compra</h1>
            <PurchaseList/>
        </div>
    )
}
