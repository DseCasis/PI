import Carrer from "../components/productos/Carrer";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function Home(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])
    return(
        <div>
            <Carrer></Carrer>
        </div>
    )
}
