export default function CarList({car,deleteCar}){

    return(
        <div className="m-auto w-full p-2 text-azul">
            <div
                className="flex flex-row space-y-2 items-center justify-center h-full p-4 bg-orange-600 rounded-xl space-x-10">
                <div className="w-1/6">
                    <img alt="" className="flex-1 h-full rounded-lg" src={`http://127.0.0.1:8000${car.product?.image}`}/>
                </div>
                <p className="w-1/6 text-2xl font-semibold">{car.product?.name}</p>
                <div className="w-2/3">
                    <p className="w-full pb-8 text-sm tracking-wide leading-tight">
                        {car.product?.description}
                    </p>
                </div>
                <div className="flex flex-col space-y-2  w-2/6">
                    <div className='flex space-x-16'>
                        <p className="w-1/6 text-2xl font-semibold">${car.totalPrice}</p>
                        <p className="w-1/6 font-semibold">x{car.amount}</p>
                    </div>
                    <div className="bg-azul rounded-lg px-4 text-center">
                        <button onClick={()=>deleteCar(car.id)} className='text-sm font-medium leading-normal text-center py-2 text-white'>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
