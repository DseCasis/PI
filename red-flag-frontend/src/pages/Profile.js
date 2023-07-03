import UserForm from "../components/users/UserForm";
import {useEffect} from "react";
import {setToken} from "../services/PrivateServices";

export default function Profile(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])
    return(
        <div>
            <UserForm></UserForm>
        </div>
    )
}
