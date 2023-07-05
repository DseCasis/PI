import ProductCard from "../components/productos/ProductCard";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {createCar, createWish, getProducts, setToken} from "../services/PrivateServices";
import FormCar from "../components/car/FormCar";
import {successAddCar, successFavorite} from "../alerts";
import CarouselComponent from '../components/CarouselComponent'
import Footer from "../components/Footer";

export default function Shop(){
    let {gender}=useParams()
    const [carId,setCarId]=useState(null);
    const [isOpen,setIsOpen]=useState(false);
    const [shirts,setShirts]=useState([]);
    const [pants,setPants]=useState([]);
    const [coats,setCoats]=useState([]);
    const [products,setProducts]=useState([]);


    const handleFormModal=(carId)=>{
        setIsOpen(!isOpen)
        setCarId(carId)
    }

    const handleFastBuy=(carId)=>{
        const productBuy = {
            product: carId,
            color: 6,
            amount: 1,
            size: 10,}
        createCar(productBuy).then(response=>{
            console.log(response)
            successAddCar()
        })
    }


    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
        getProducts(gender).then(response=>{
            const products = response.data
            setShirts(products.filter(value=>value.category?.name === 'CAMISA'))
            setPants(products.filter(value=>value.category?.name === 'PANTALON'))
            setCoats(products.filter(value=>value.category?.name === 'ABRIGO'))
        })
    },[gender])

    const addWishes=(product)=>{
        const formData = new FormData();
        formData.append('product', product);

        createWish(formData).then(response=>{
            console.log(response)
            successFavorite()
        })
    }


    return(
        <div className=''>
            <CarouselComponent products={products}/>
            <ProductCard title={'Comida'} addWishes={addWishes} handleFastBuy={handleFastBuy} products={shirts} handleFormModal={handleFormModal}></ProductCard>
            <ProductCard title={'Manualidades'} addWishes={addWishes}  handleFastBuy={handleFastBuy} products={pants} handleFormModal={handleFormModal}></ProductCard>
            <ProductCard title={'Vestimenta'} addWishes={addWishes}   handleFastBuy={handleFastBuy} products={coats} handleFormModal={handleFormModal}></ProductCard>

            {isOpen && <FormCar carId={carId} closeModal={handleFormModal}/>}
            <Footer/>
        </div>
    )
}
