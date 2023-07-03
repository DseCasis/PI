import OptionUser from "../components/users/OptionUser";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function Option(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])
    return(
        <div className="flex w-auto justify-center">
            <OptionUser></OptionUser>
        </div>
    )
}
