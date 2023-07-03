import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {login} from "../../services/AuthService";
import {setToken} from "../../services/PrivateServices";

export default function FormLogin({handleIsLogin, userLogin,handleErrorLogin}){
    const {register, formState:{errors}, handleSubmit}=useForm();
    const navigate = useNavigate();


    const onSubmit = (data) =>{
        login(data).then(response=>{
            window.localStorage.setItem('loggedUser', JSON.stringify(response.token))
            window.localStorage.setItem('roleUser', JSON.stringify(response.data.role[0]))
            window.localStorage.setItem('photoUser', JSON.stringify(response.data.photoProfile))
            setToken(response.token)
            redirect(response.data.role[0])
            userLogin()

        }).catch(error=> {
            console.log(error)
            handleErrorLogin()
        })
    }
    const redirect=(user)=>{
        if(user === 'user'){
            navigate('/home')
        }else{
            navigate('/products')
        }
    }

    return(
        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-16 text-center text-5xl font-extrabold">Bienvenido.</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="px-6 mb-4 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                        {errors.email?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                        <input
                            {...register('email',{
                                required: true
                            })}
                            type="text"
                            placeholder="Correo Electronico"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>
                    <div className="px-6 mt-6 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                        {errors.password?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                        <input
                            {...register('password',{
                                required: true
                            })}
                            type="password"
                            placeholder="Contraseña"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign
                            In
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <span onClick={()=>handleIsLogin()} className="hover:underline cursor-pointer hover:text-red-600">Regístrese para obtener una cuenta
                    </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
