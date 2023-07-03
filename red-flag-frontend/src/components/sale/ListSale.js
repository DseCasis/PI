import TableSale from "./TableSale";
import {useEffect, useState} from "react";
import {downloadSales, getSales} from "../../services/PrivateServices";

export default function ListSale(){
    const [sales, setSales]=useState();

    useEffect(()=>{
        getSales().then(response=>{
            setSales(response.data)
            console.log(response.data)
        })
    },[])

    const saleFile=(id)=>{
        downloadSales(id).then(response=>{
            console.log(response)
        })
    }

    return(
        <section>
        <div className="flex flex-col p-12">
            <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <div className="p-4">
                    <div className="overflow-x-auto">
                        <TableSale sales={sales} saleFile={saleFile}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
