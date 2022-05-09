import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


/* Función estandard POST.
    REQUISITOS:
        - route :=  ruta destino.
        - bodyObj := objeto para enviar en el body. 
    EJECUCIÓN:
        - Realiza una promesa axios.post y se manejan los casos .then() y .catch()
*/
export const Post = (route, bodyObj) => {
    let postUrl = `${API_BASE_URL}/${route}}`;
    axios.post(postUrl, bodyObj, config)
    .then(res => console.log(res))
    .catch(err => console.err(err));
}

export default Get