
import React from 'react';

import './Header.css';
import Boton from '../Boton/Boton'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/blockbusterlogo.jpg'
import { Navigate } from 'react-router';

const Header = () => {

    const navigate = useNavigate();

    const cambioPantalla = (from) =>{
        navigate(from)
    };
    
    // if (props.credentials === "usuario"){
    return (
        <div className="designHeader">
            <img className="logol" src={logo}/>
            <Boton destino="Home" url="/" />
            <Boton destino="Profile" url="/Profile" />

        </div>
    )
    // 
    // if (props.credentials === "administrador"){
        return(
        <div className="designHeader">
            <img className="logol" src={logo}/>
            <Boton destino="Home" url="/" />
            <Boton destino="Login" url="/Login"/>
            <Boton destino="Register" url="/Register" />
            <Boton destino="Profile" url="/Profile" />

        </div>
    )
// }
}

export default Header;