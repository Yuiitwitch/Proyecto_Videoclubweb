
import React from 'react';

import './Header.css';
import Boton from '../Boton/Boton'

const Header = () => {

    

    return(
        <div className="designHeader">
            <Boton destino="Home" url="/" />
            <Boton destino="Login" url="/Login"/>
            <Boton destino="Register" url="/Register" />
            <Boton destino="Profile" url="/Profile" />

        </div>
    )
}

export default Header;