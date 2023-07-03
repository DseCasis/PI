
import { BsPaypal } from "react-icons/bs";
import {createSale} from "../../services/PrivateServices";
import {successSale} from "../../alerts";


export default function FormSale({cars}){
    let priceTotal;
    let priceDiscountTotal;
    let iva;
    let total;
    const carTotal=[];
    const carDiscountTotal=[];
    cars.forEach((value, index)=> {
        carTotal.push(parseFloat(value.product.price))
        carDiscountTotal.push(parseFloat(value.product.priceDiscount))

    })

    if(carTotal.length){
        priceTotal = carTotal.reduce((accumulator, current)=> accumulator + current)
        priceDiscountTotal = carDiscountTotal.reduce((accumulator, current)=> accumulator + current)
        iva= priceDiscountTotal * 0.12
        total= priceDiscountTotal + iva
    }

    const makePayment=()=>{
        createSale().then(response=>{
            console.log(response)
            successSale()
        })
    }


    return(
        <div className='p-4 space-y-3'>
            <p>RESUMEN DE COMPRA</p>
            <div className='flex justify-between'>
                <p>Precio</p>
                <p>USD ${priceTotal?.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
                <p>Precio con Descuento</p>
                <p>USD ${priceDiscountTotal?.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
                <p>Iva</p>
                <p>USD ${iva?.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
                <p>Precio Total</p>
                <p>USD ${total?.toFixed(2)}</p>
            </div>
            <button type='button' onClick={()=>makePayment()}
                    className='flex break-inside bg-azul text-white border-2 hover:border-orange-400  border-gray-700 rounded-3xl px-6 py-3 mb-4 w-full hover:bg-orange-600'>
                <div className='m-auto'>
                    <div className='flex items-center justify-start flex-1 space-x-4'>
                        <BsPaypal/>
                        <span className='font-medium mb-[-2px]'>Realizar pago</span>
                    </div>
                </div>
            </button>
        </div>
    )
}
