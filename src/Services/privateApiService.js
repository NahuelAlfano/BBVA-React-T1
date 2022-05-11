import axios from 'axios';

const API_BASE_URL = 'https://ongapi.alkemy.org/api/'
const access_token = ""

const config = {
    headers: {
        Group: 1,                //Aqui va el ID del equipo!!
        Authorization: `token ${access_token}`
    }
}

 export const Get = (endpoint, id = "") => {
    axios.get(`${API_BASE_URL}${endpoint}/${id}`, config)
    .then(res => res.data)
    .catch(err => err)
}

/** Método DELETE a los endpoints privados
 *    REQUISITOS:
 *     - route := ruta destino
 *     - id := identificador de usuario
 *    DEVUELVE: 
 *     - La promesa realizada por axios.delete() con la ruta destino, e id del obj a borrar en el servidor
 *    POST-REQUISITOS:
 *     - Manejar los posibles casos de la promesa devuelta.
 */

export const Delete = (route, id) => {
    return(axios.delete(`${API_BASE_URL}/${route}/${id}`, config.headers));
}


/**
 * Actualiza los datos de la ruta destino
 * @function
 * @param id Id del recurso a actualizar
 * @param route Ruta del recurso, se ingresa sin las barras, ej: route = "slides"
 * @param body Se pasa el objeto del recurso a actualizar
 * 
 * @returns Promesa de axios, se debe capturar los metodos then y catch en caso de error
 */
export const Put = (id, route, body) => {
    return axios.put(`${API_BASE_URL}${route}/${id}`,body,config)
}

