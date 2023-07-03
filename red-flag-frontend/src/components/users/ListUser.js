import TableUser from "./TableUser";
import {useEffect, useState} from "react";
import {getUsers, putUserRoleAdmin, putUserRoleClient} from "../../services/PrivateServices";
import {successRole} from "../../alerts";

export default function ListUser(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(response=>{
            setUsers(response.data)
        })
    },[])

    const assignRoleAdmin=(userId)=>{
        putUserRoleAdmin(userId).then(response=>{
            console.log(response.data)
            successRole()
        })
    }

    const revokeRoleAdmin=(userId)=>{
        putUserRoleClient(userId).then(response=>{
            console.log(response.data)
            successRole()
        })
    }

    return(
        <section>
            <div className="flex flex-col p-12">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <TableUser users={users} assignRoleAdmin={assignRoleAdmin} revokeRoleAdmin={revokeRoleAdmin}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
