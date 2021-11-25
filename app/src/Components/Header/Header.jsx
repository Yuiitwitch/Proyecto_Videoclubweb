
import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import Boton from '../Boton/Boton'
// import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/blockbusterlogo.jpg'
// import { Navigate } from 'react-router';

const Header = (props) => {

    return(
    

            <div >
                {props?.credentials?.usuario.rol === "usuario"
                ?<div className="designHeader">
                <img className="logol" src={logo} />
                <Boton destino="Home" url="/" />
                <Boton destino="Profile" url="/Profile" />
                </div>
            :""}{props?.credentials?.usuario.rol === "administrador"
            ?<div className="designHeader">
                <img className="logol" src={logo} />
                <Boton destino="Home" url="/" />
                <Boton destino="Login" url="/Login" />
                <Boton destino="Register" url="/Register" />
                <Boton destino="Profile" url="/Profile" />
                <Boton destino="Admin" url="/Admin" />
            </div>:""}

            </div>
        )
}


export default connect((state) => ({
    credentials: state.credentials
}))(Header);