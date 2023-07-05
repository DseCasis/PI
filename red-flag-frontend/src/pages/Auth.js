import FormLogin from "../components/auth/FormLogin";
import FormRegister from "../components/auth/FormRegister";
import {useState} from "react";
import instalacion2 from "../assets/instalacion2.png";
import Alert from "../alerts/Alert";


export default function Auth({userLogin}){
    const [isLogin, setIsLogin]=useState(true);
    const [logged, setLogged ]= useState(false)

    const handleIsLogin=()=>{
        setIsLogin(!isLogin);
    }

    const handleErrorLogin =()=>{
        setLogged(!logged)
        setTimeout(()=>{
            setLogged(false)
        },5000)
    }

    return(
        <div className="h-screen flex">
            <div className="flex w-2/4 justify-around items-center">
                <img src={instalacion2} className="h-full w-full object-cover object-center lg:h-full lg:w-full" alt=""/>
            </div>
            <div className="flex w-3/4 justify-center items-center bg-white">
                { isLogin ?
                    <FormLogin handleIsLogin={handleIsLogin} userLogin={userLogin} handleErrorLogin={handleErrorLogin}/> :
                    <FormRegister handleIsLogin={handleIsLogin} isLogin={handleIsLogin}/>
                }
                {logged
                    && <Alert>
                        <p className="font-bold">Mensaje Informativo</p>
                        <p className="text-sm">Las credenciales no son validas</p>
                    </Alert>}

            </div>
        </div>)
}
