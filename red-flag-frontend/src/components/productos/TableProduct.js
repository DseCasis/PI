import { HiOutlineTrash } from "react-icons/hi";

export default function TableProduct({products, deleteProduct,}){
    return(
        <table className="table-auto w-full">
            <thead className="font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">PRODUCTO</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">PRECIO</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">DESCUENTO</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">DISPONIBLE</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">OPCIONES</div>
                </th>
            </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
            {products.length > 0 && (
                products?.map((value, index)=>{
                    return(
                        <tr key={index}>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-lg text-center">{value.name}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-lg text-center">{`${value.price} $`}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-lg text-center">{`${value.discount} %`}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-lg text-center">{value.stock}</div>
                            </td>
                            <td className="text-lg text-center">
                                <button
                                    onClick={()=>deleteProduct(value.id)}
                                    className="bg-red-500 hover:bg-red-700 mx-2 text-white font-bold py-1 px-2 border border-red-500 rounded text-2xl">
                                    <HiOutlineTrash/>
                                </button>
                            </td>
                        </tr>
                    )
                })
            )}
            </tbody>
        </table>
    )
}
