import {useForm} from "react-hook-form";
import {registerUser} from "../../services/AuthService";
import { BsFillCameraFill } from "react-icons/bs";
import {successRegister} from "../../alerts";

export default function FormRegister({handleIsLogin, isLogin}){
    const { register, handleSubmit, formState:{errors} }=useForm();

    const onSubmit=(data)=>{
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('address', data.address);
        formData.append('password', data.password);
        formData.append('phone', data.phone);
        formData.append('photoProfile', data.photoProfile[0]);

        registerUser(formData).then(response=>{
            console.log(response)
            isLogin()
            successRegister()
        })
    }

    return(
        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-5xl font-extrabold">Registrarse.</h2>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                        <div className="flex pb-4">
                            <div className="w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                                {errors.name?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                                <input
                                    {...register('name',{
                                        required: true
                                    })}
                                    type="text"
                                    placeholder="Nombre"
                                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                                />
                            </div>
                            <div className="w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
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
                        </div>
                    <div className="flex pb-6">
                        <div className="w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                            {errors.address?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                            <input
                                {...register('address',{
                                    required: true
                                })}
                                type="text"
                                placeholder="Dirección"
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            />

                        </div>
                        <div className="w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                            {errors.phone?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                            <input
                                {...register('phone',{
                                    required: true
                                })}
                                type="text"
                                placeholder="Telefono"
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex pb-6">
                        <div className="w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
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
                        <div className="w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                            {errors.passwordR?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                            <input
                                {...register('passwordR',{
                                    required: true
                                })}
                                type="password"
                                placeholder="Repetir contraseña"
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-grey-lighter">
                        <label
                            className="hover:bg-gray-100 w-64 flex flex-col items-center px-2 py-3 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                            <BsFillCameraFill/>
                            <span className="mt-2 text-base leading-normal">Subir Foto</span>
                            <input type='file' className="hidden"
                                   {...register('photoProfile',{
                                       required: true
                                   })}
                            />
                            {errors.photoProfile?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                        </label>
                    </div>


                    <div className="mt-6">
                        <button
                            className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                            Crear cuenta
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <span onClick={()=>handleIsLogin()} className="hover:underline cursor-pointer hover:text-red-600">
                            ¿Ya tienes una cuenta? Inicia sesión
                    </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
