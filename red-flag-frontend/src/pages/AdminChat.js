import Chat from "../components/help/Chat";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function AdminChat(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])

    return(
        <div>
            <Chat/>
        </div>
    )
}
