import axios from "axios";
const URL_PRODUCTS = 'http://127.0.0.1:8000/api/v1/private/products';
const URL_CATALOGUES = 'http://127.0.0.1:8000/api/v1/private/';
const URL_CARS = 'http://127.0.0.1:8000/api/v1/private/cars/';
const URL_SALES = 'http://127.0.0.1:8000/api/v1/private/sales';
const URL_USERS = 'http://127.0.0.1:8000/api/v1/private/users';
const URL_WISHES = 'http://127.0.0.1:8000/api/v1/private/favorites';



let token = null

export const setToken=(newToken)=>{
    token = `Bearer ${newToken}`
}


export const createMessage = async (message) =>{
    const { data } = await axios.post('http://127.0.0.1:8000/api/v1/private/messages', message,{
        headers:{
            Authorization: token
        }
    })
    return data
}

/*****************************************************************
***************         SERVICE PRODUCTS           *******************
******************************************************************/

export const getProduct =(id)=>{
    const request = axios(`${URL_PRODUCTS}/+${id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getProductAll =()=>{
    const request = axios(`${URL_PRODUCTS}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getProducts =(carrer)=>{
    const request = axios(`${URL_PRODUCTS}-${carrer}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createProduct =(data)=>{
    const request = axios.post(`${URL_PRODUCTS}`, data,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateProduct =(id, food)=>{
    const request = axios.put(`${URL_PRODUCTS + id}/`,food,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyProduct =(id)=>{
    const request =  axios.delete(`${URL_PRODUCTS}/`+ id,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         SERVICE CATALOGUES        *******************
 *****************************************************************/


export const getCarrers =()=>{
    const request = axios(`${URL_CATALOGUES}carrer-catalogues`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getCategories =()=>{
    const request = axios(`${URL_CATALOGUES}category-catalogues`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         SERVICE CAR        *******************
 *****************************************************************/

export const getCar =(id)=>{
    const request = axios(`${URL_CARS + id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getCars =()=>{
    const request = axios(`${URL_CARS}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createCar =(data)=>{
    const request = axios.post(`${URL_CARS}`, data,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateCar =(id, food)=>{
    const request = axios.put(`${URL_CARS + id}`,food,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyCar =(id)=>{
    const request =  axios.delete(URL_CARS+ id,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}
/*****************************************************************
 ***************         SERVICE SALE        *******************
 *****************************************************************/

export const downloadSales =(id)=>{
    return axios(`http://127.0.0.1:8000/api/v1/private/download-sales/${id}`,{
        responseType: 'blob',
    }).then(response=>{
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href= url
        link.setAttribute('download','factura.pdf')
        document.body.appendChild(link)
        link.click();
    }).catch(error=>{
        console.log(error);
    })
}

//************************************
export const getSales =()=>{
    const request = axios(`${URL_SALES}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}
export const getSalesByUser =()=>{
    const request = axios(`${URL_SALES}-user`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createSale =()=>{
    const request = axios(`${URL_SALES}-create`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         SERVICE USER        *******************
 *****************************************************************/

export const getUser =()=>{
    const request = axios(`${URL_USERS}-profile`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const putUserRoleAdmin =(user)=>{
    const request = axios.put(`${URL_USERS}-admin/${user}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const putUserRoleClient =(user)=>{
    const request = axios.put(`${URL_USERS}-client/${user}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getUsers =()=>{
    const request = axios(`${URL_USERS}/`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateUser =(user)=>{
    const request = axios.put(`${URL_USERS}-update`,user,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyUser =(id)=>{
    const request =  axios.delete(`${URL_USERS}/${id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         SERVICE WISHES        *******************
 *****************************************************************/

export const getWish =(id)=>{
    const request = axios(`${URL_WISHES}/${id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getWishes =()=>{
    const request = axios(`${URL_WISHES}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createWish =(data)=>{
    const request = axios.post(`${URL_WISHES}`, data,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyWish =(id)=>{
    const request =  axios.delete(`${URL_WISHES}/${id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}


/*****************************************************************
 ***************         LOGOUT        *******************
 *****************************************************************/
export const logout = ()=>{
    const request = axios(`http://127.0.0.1:8000/api/v1/private/logout`, {
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}
