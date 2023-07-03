import {useEffect, useState} from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";
import {destroyProduct, getProductAll} from "../../services/PrivateServices";

export default function ListProduct(){
    const [isOpen,setIsOpen]=useState(false)
    const [products,setProducts]=useState([])

    const handleFormModal=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        getProductAll().then(response=>{
            setProducts(response.data)
            console.log(response.data)
        })

    },[])

    const deleteProduct=(product)=>{
        destroyProduct(product).then(response=>{
            console.log(response.data)
            setProducts(products.filter(value=> value.id !== product))
        })
    }

    const addProduct=(product)=>{
        setProducts([...products,product])
    }

    return(
        <section>
            <div className="flex flex-col p-12">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <button onClick={()=>handleFormModal()}
                        className="bg-azul text-white p-2 mt-4 ml-4 rounded-md hover:bg-orange-600 hover:text-azul transition ease-in duration-200"
                    >AGREGAR
                    </button>
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <TableProduct products={products} deleteProduct={deleteProduct} />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <FormProduct addProduct={addProduct} closeModal={handleFormModal}></FormProduct>}
        </section>
    )
}
