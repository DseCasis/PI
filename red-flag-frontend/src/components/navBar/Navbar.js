import {useNavigate} from "react-router-dom";
import OptionProfile from "./OptionProfile";
import {useEffect, useState} from "react";
import NavBarUser from "./NavBarUser";
import NavbarAdmin from "./NavbarAdmin";
import {logout, setToken} from "../../services/PrivateServices";

export default function Navbar({userLogout}){
    const [role, setRole]=useState('user');
    const [photo, setPhoto]=useState('');

    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
    },[])

    useEffect(()=>{
            const loggedUser = window.localStorage?.getItem('roleUser')
            const photoUser = window.localStorage?.getItem('photoUser')
            const urlPhoto = JSON.parse(photoUser)
            setPhoto(`http://127.0.0.1:8000${urlPhoto}`)
            setRole(JSON.parse(loggedUser))
    },[])

    const navigate = useNavigate()

    const handleLogout=()=>{
        logout().then(response=>{
            window.localStorage.clear();
            navigate('/auth')
            userLogout()
        })
    }

    const [optionProfile, setOptionProfile]=useState(false)

    const openOption=()=>{
        setOptionProfile(!optionProfile)
    }

    return(
        <nav>
            {
                role ==="user"
                    ?<NavBarUser openOption={openOption} photo={photo}/>
                    :<NavbarAdmin handleLogout={handleLogout}/>
            }
            {optionProfile && <OptionProfile handleLogout={handleLogout} openOption={openOption} />}
        </nav>
    )
}
