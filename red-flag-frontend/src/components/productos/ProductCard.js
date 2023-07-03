import {BsFillCartFill, BsFillHeartFill, BsSearch} from "react-icons/bs";

export default function ProductCard({products, handleFormModal,handleFastBuy, title, addWishes}){

    const productsOut = products.filter(value => value.stock <=0)
    const productsAvailable = products.filter(value => value.stock >0)

    return(
        <div>
            <p className='text-azul ml-10 mt-2 font-titan'>{title}</p>
            <div className="flex flex-col justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {productsAvailable?.map((value, index)=>{
                        return (
                            <div key={index} className="m-10">
                                <div
                                    className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                                    <div className="overflow-hidden relative h-80">
                                        <img className="w-full h-full transition duration-700 ease-in-out group-hover:opacity-60"
                                             src={`http://127.0.0.1:8000${value.image}`}
                                             alt=""/>
                                        <div className="flex justify-center">
                                            <div
                                                className="absolute bottom-2 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                                {/* Iconos de preferencia */}
                                                <div className='flex'>
                                                    <p onClick={()=>handleFastBuy(value.id)} className='bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out'>
                                                        <BsFillCartFill className='transition duration-300 ease-in-out flex justify-center items-center text-gray-100'></BsFillCartFill>
                                                    </p>
                                                    <p className='bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out'
                                                       onClick={()=>addWishes(value.id)}
                                                    >
                                                        <BsFillHeartFill className='transition duration-300 ease-in-out flex justify-center items-center text-gray-100'></BsFillHeartFill>
                                                    </p>
                                                    <p onClick={()=>handleFormModal(value.id)} className='bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out'>
                                                        <BsSearch className='transition duration-300 ease-in-out flex justify-center items-center text-gray-100'></BsSearch>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-white">
                                        <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                                            {value.name}</h1>
                                        <div className="flex py-2">
                                            <p className="mr-2 text-xs text-gray-600">USD ${value.priceDiscount}</p>
                                            <p className="mr-2 text-xs text-red-600 line-through">USD ${value.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                {
                    productsOut?.map((value,index)=>{
                                return (
                                    <div key={index} className="m-10">
                                        <div
                                            className="bg-red-400 shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-no-drop group">
                                            <h1 className="absolute text-5xl text-white rotate-45 text-6xl mt-16">Agotado</h1>
                                            <div className="overflow-hidden relative h-80">
                                                <img className="w-full h-full transition duration-700 ease-in-out group-hover:opacity-60 cursor-no-drop"
                                                     src={`http://127.0.0.1:8000${value.image}`}
                                                     alt=""/>
                                                <div className="flex justify-center">
                                                    <div
                                                        className="absolute bottom-2 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-white">
                                                <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                                                    {value.name}</h1>
                                                <div className="flex py-2">
                                                    <p className="mr-2 text-xs text-gray-600">USD ${value.priceDiscount}</p>
                                                    <p className="mr-2 text-xs text-red-600 line-through">USD ${value.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
