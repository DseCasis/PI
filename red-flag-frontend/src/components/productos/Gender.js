import hombre from './../../assets/hombre.jpg'
import mujer from './../../assets/mujer.jpg'
import { Link } from 'react-router-dom'


export default function Gender(){

    return(
        <div className="flex h-screen overflow-hidden transition duration-500 ease-in-out">

                <div className="blur-lg w-1/2 hover:blur-none">
                    <Link to='shop/male'>
                    <img className="w-full h-full object-cover object-center" src={hombre} alt=""/>
                    </Link>
                </div>

            <div className="blur-lg w-1/2 hover:blur-none transition duration-500 ease-in-out">
                <Link to='shop/female'>
                    <img className="w-full h-full object-cover object-center" src={mujer} alt=""/>
                </Link>
            </div>
        </div>
    )
}
