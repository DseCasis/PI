import {FiLogOut} from "react-icons/fi";
import {Link} from "react-router-dom";


export default function NavbarAdmin({handleLogout}){
    const itemsNav= [{
        item: 'Productos',
        path: '/products'
    },{
        item: 'Usuarios',
        path: '/users'
    },{
        item: 'Ventas',
        path: '/sales'
    },{
        item: 'Chat',
        path: '/chats'
    }
    ];


    return(
        <nav>
            <div>
                <ul className="flex py-2 px-16 bg-white justify-between items-center">

                    <li>
                        <Link to='home' className='font-titan text-3xl text-orange-500' >Red Flag</Link>
                    </li>
                    <ul onClick={()=>handleLogout()} className='text-azul hover:text-orange-600 cursor-pointer'>
                        <FiLogOut/>
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
