import {AiOutlineClose} from "react-icons/ai";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {createCar, getProduct} from "../../services/PrivateServices";
import {successAddCar} from "../../alerts";

export default function FormCar({closeModal, carId}) {
    const [product, setProduct] = useState({})
    const {handleSubmit, register} = useForm({
        defaultValues: {
            product: carId,
            color: 6,
            amount: 1,
            size: 10,
        }
    })

    useEffect(() => {
        getProduct(carId).then(response => {
            console.log(response.data)
            setProduct(response.data)
        })
    }, [carId])

    const onSubmit = (data) => {
        createCar(data).then(response=>{
            console.log(response)
            successAddCar()
            closeModal()
        })
    }
    return (
        <div className="h-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-80 bg-cover">
                    <img className='w-full h-full transition duration-700 ease-in-out group-hover:opacity-60'
                         src={`http://127.0.0.1:8000${product.image}`} alt=""/>
                </div>

                <div className="w-2/3 p-4 m-8 flex flex-col items-center">
                    <h1 className="text-gray-900 font-bold text-2xl">{product.name}</h1>
                    <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center space-x-0 p-2">
                            <tex htmlFor="custom-input-number" className="text-gray-700 ">CANTIDAD
                            </tex>
                            <div className="pl-2 flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <input type="number"
                                       className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                       name="custom-input-number" min='1'
                                       {...register('amount')}
                                />
                            </div>
                        </div>
                        <div className="flex item-center justify-between mt-3 space-x-6">
                            <h1 className="text-gray-700 font-bold text-xl">${product.priceDiscount}</h1>
                            <button type='submit'
                                    className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                Agregar al Carro
                            </button>
                        </div>

                    </form>
                </div>
                <AiOutlineClose onClick={() => closeModal()} className='m-4 hover:opacity-50 cursor-pointer'/>
            </div>
        </div>
    )
}
