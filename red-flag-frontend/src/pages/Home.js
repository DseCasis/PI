import Gender from "../components/productos/Gender";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function Home(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])
    return(
        <div>
            <Gender></Gender>
        </div>
    )
}
