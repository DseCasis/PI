import mujer from './../../assets/mujer.jpg'
import { Link } from 'react-router-dom'
import comida from './../../assets/comida.jpg'


export default function Carrer(){

    return(
        <div className="flex h-screen overflow-hidden transition duration-500 ease-in-out">

                <div className="blur-lg w-1/2 hover:blur-none">
                    <Link to='shop/software'>
                    <img className="w-full h-full object-cover object-center" src={comida} alt=""/>
                    </Link>
                </div>

            <div className="blur-lg w-1/2 hover:blur-none transition duration-500 ease-in-out">
                <Link to='shop/marketing'>
                    <img className="w-full h-full object-cover object-center" src={mujer} alt=""/>
                </Link>
            </div>
        </div>
    )
}
