
import React from 'react';

import './Header.css';
import Boton from '../Boton/Boton'
import logo from '../../assets/img/blockbusterlogo.jpg'

const Header = () => {

    

    return(
        <div className="designHeader">
            <img className="logol" src={logo}/>
            <Boton destino="Home" url="/" />
            <Boton destino="Login" url="/Login"/>
            <Boton destino="Register" url="/Register" />
            <Boton destino="Profile" url="/Profile" />

        </div>
    )
}

export default Header;