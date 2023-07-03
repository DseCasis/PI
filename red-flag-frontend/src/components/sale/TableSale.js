import { BsDownload } from "react-icons/bs";

export default function TableSale({sales, saleFile}){
    return(
        <table className="table-auto w-full">
            <thead className="font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">N° RECIBO</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">FECHA</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">CLIENTE</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">PAGO</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">TOTAL</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">OPCIONES</div>
                </th>
            </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
            {sales?.map(value=>{
                return(
                    <tr key={value.id}>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">{value.invoice}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">{value.date}</div>
                        </td>

                        <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">{value.car?.user?.name}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">Paypal</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">{value.total}</div>
                        </td>

                        <td className="text-lg text-center">
                            <button
                                onClick={()=>saleFile(value.id)}
                                className="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-1 px-2 border border-blue-500 rounded text-2xl">
                                <BsDownload/>
                            </button>
                        </td>
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    )
}
