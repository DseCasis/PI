import ListSale from "../components/sale/ListSale";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function Sales(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])
    return(
        <div>
            <ListSale></ListSale>
        </div>
    )
}
