import ListUser from "../components/users/ListUser";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function User(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])
    return(
        <div>
            <ListUser></ListUser>
        </div>
    )
}
