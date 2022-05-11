import React, { useEffect, useState } from 'react';
import '../../App.css'
import './Nosotros.css'
import { Get } from './../../Services/privateApiService';

/**
 * En esta seccion dispondremos el componente Nosotros, que se encontrara
 * bajo la ruta /Nosotros, el cual podremos ver informacion acerca de la ONG
 * Dicha informacion se renderizará de forma dinamica desde una API
 * @returns jsx para mostrar en pantalla
 */

const Nosotros = () => {

   const [ sobreNosotros , setSobreNosotros ] = useState({
        text:"",
        loaded:false
       })

    useEffect( async () => { 
        Get("organization").then(res => {
            setSobreNosotros({...sobreNosotros, loaded: true, text: res})
        })
    }, []);


    return (
        <>
            <div>
                <h2 class="centerText">Nosotros</h2>
                {/* El texto sobre nosotros debe obtenerse de una API */}
                {
                    sobreNosotros.loaded &&
                    (
                    <div dangerouslySetInnerHTML= {{__html: (sobreNosotros.text.data.data.long_description)}} />
                    )
                }
            </div>
        </>
    )
}


export default Nosotros