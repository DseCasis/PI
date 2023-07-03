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
                    {/* INICIO TALLAS */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="mt-4">
                            <div className="grid grid-cols-4 gap-4">
                                <label
                                    className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                    <input type="radio" name="size-choice" value="10" className="sr-only"
                                           aria-labelledby="size-choice-0-label"
                                           {...register('size')}
                                    />
                                    <span id="size-choice-0-label">XL</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md"
                                          aria-hidden="true"></span>
                                </label>
                                <label
                                    className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                    <input type="radio" name="size-choice" value="11" className="sr-only"
                                           aria-labelledby="size-choice-1-label"
                                           {...register('size')}
                                    />
                                    <span id="size-choice-1-label">S</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md"
                                          aria-hidden="true"></span>
                                </label>
                                <label
                                    className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                    <input type="radio" name="size-choice" value="12" className="sr-only"
                                           aria-labelledby="size-choice-2-label"
                                           {...register('size')}
                                    />
                                    <span id="size-choice-2-label">M</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md"
                                          aria-hidden="true"></span>
                                </label>
                                <label
                                    className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                    <input type="radio" name="size-choice" value="13" className="sr-only"
                                           aria-labelledby="size-choice-3-label"
                                           {...register('size')}
                                    />
                                    <span id="size-choice-3-label">L</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md"
                                          aria-hidden="true"></span>
                                </label>
                            </div>
                        </fieldset>
                        {/* FIN TALLAS */}
                        {/*INICIO COLOR*/}

                        <fieldset className="mt-4">
                            <span className="flex items-center space-x-3">
                                <label
                                    className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                    <input type="radio" name="color-choice" value="9" className="sr-only"
                                           aria-labelledby="color-choice-0-label"
                                           {...register('color')}
                                    />
                                    <span aria-hidden="true"
                                          className="h-8 w-8 bg-orange-600 border border-black border-opacity-10 rounded-full"></span>
                                </label>
                                <label
                                    className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                    <input type="radio" name="color-choice" value="8" className="sr-only"
                                 aria-labelledby="color-choice-0-label"
                                           {...register('color')}
                                    />
                                    <span aria-hidden="true"
                                className="h-8 w-8 bg-blue-900 border border-black border-opacity-10 rounded-full"></span>
                                </label>
                                <label
                                    className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input type="radio" name="color-choice" value="7" className="sr-only"
                                 aria-labelledby="color-choice-1-label"/>
                          <span id="color-choice-1-label" className="sr-only"> Gris </span>
                          <span aria-hidden="true"
                                className="h-8 w-8 bg-gray-400 border border-black border-opacity-10 rounded-full"></span>
                        </label>

                                <label
                                    className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                          <input type="radio" name="color-choice" value="6" className="sr-only"
                                 aria-labelledby="color-choice-2-label"
                                 {...register('color')}
                          />
                          <span id="color-choice-2-label" className="sr-only"> Negro </span>
                          <span aria-hidden="true"
                                className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                        </label>
                      </span>
                        </fieldset>
                        {/*FIN COLOR*/}
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
