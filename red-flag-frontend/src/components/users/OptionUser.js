import {Link} from "react-router-dom";

export default function OptionUser(){

    return(
        <div className="flex gap-y-4 gap-x-4 pt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 cursor-pointer">
            <Link to='/purchases'>
                <div className="rounded-[15px] bg-azul w-96 h-80 p-6 flex items-center hover:bg-blue-900">
                    <p className="text-[40px] font-titan text-center text-white">Ver mi historial de compras</p>
                </div>
            </Link>
            <Link to='/profiles'>
                <div className="rounded-[15px] bg-orange-600 w-96 h-80 p-6 flex items-center hover:bg-orange-500 cursor-pointer">
                    <p className="text-[40px] font-titan text-center text-white">Ver información personal</p>
                </div>
            </Link>
            <Link to='/wishes'>
                <div className="rounded-[15px] bg-azul w-96 h-80 p-6 flex items-center hover:bg-blue-900 cursor-pointer">
                    <p className="text-[40px] font-titan text-center text-white">Ver lista de deseos</p>
                </div>
            </Link>

        </div>
    )
}
