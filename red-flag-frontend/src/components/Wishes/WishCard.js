import {BsFillHeartFill} from "react-icons/bs";

export default function WishCard({products, deleteWish}){

    return(
        <div>
            <div className="flex flex-col justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {products?.map((value, index)=>{
                    return (
                        <div key={index} className="m-10">
                            <div
                                className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                                <div className="overflow-hidden relative h-80">
                                    <img className="w-full h-full transition duration-700 ease-in-out group-hover:opacity-60"
                                         src={`http://127.0.0.1:8000${value.product?.image}`}
                                         alt=""/>
                                    <div className="flex justify-center">
                                        <div
                                            className="absolute bottom-2 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                            {/* Iconos de preferencia */}
                                            <div className='flex'>
                                                <p className='bg-red-500 px-3 py-3 hover:bg-gray-700 transition duration-300 ease-in-out'
                                                   onClick={()=>deleteWish(value.id)}
                                                >
                                                    <BsFillHeartFill className='transition duration-300 ease-in-out flex justify-center items-center text-gray-100'></BsFillHeartFill>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-white">
                                    <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                                        {value.product?.name}</h1>
                                    <div className="flex py-2">
                                        <p className="mr-2 text-xs text-gray-600">{value.product?.priceDiscount}</p>
                                        <p className="mr-2 text-xs text-red-600 line-through">{value.product?.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
