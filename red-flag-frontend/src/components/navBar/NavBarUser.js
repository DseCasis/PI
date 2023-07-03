import {BsFillCartFill} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavBarUser({openOption, photo}){

    const itemsNav= [{
        item: 'Inicio',
        path: '/home'
    },{
        item: 'Ayuda',
        path: '/help'
    }];

    return(
        <nav>
            <div>
                <ul className="flex py-2 px-16 bg-white justify-between items-center">

                    <li>
                        <Link to='home' className='font-titan text-3xl text-orange-500' >Red Flag</Link>
                    </li>
                    <ul className='w-28 h-full flex justify-between items-center'>
                        <li className='w-12'>
                            <Link to='cars'>
                                <BsFillCartFill className='text-2xl text-orange-500 hover:opacity-25'></BsFillCartFill>
                            </Link>
                        </li>
                        <li className='w-12 h-12 cursor-pointer' onClick={()=>openOption()}>
                            <img className="w-full h-full object-cover object-center rounded-full" src={photo} alt=""/>
                        </li>
                    </ul>
                </ul>
            </div>
            <div>
                <ul className="flex py-4 px-16 bg-azul justify-between items-center">
                    {itemsNav.map((value, index)=>{
                        return(
                            <li key={index} className="text-md text-orange-500 tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
                                <Link to={value.path}>
                                    {value.item}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
