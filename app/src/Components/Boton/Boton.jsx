
import React from 'react';

import './Boton.css';

import { useNavigate } from 'react-router-dom';

const Boton = (props) => {

    const history = useNavigate(); //para cambiar de pagina

    const llevame =() =>{
        history(props.url);    //para indicar a que pagina quiere cambiar

    }

    return(
        <div className="designBoton" onClick={()=>llevame()}>{props.destino}</div>
    
    )
}

export default Boton;