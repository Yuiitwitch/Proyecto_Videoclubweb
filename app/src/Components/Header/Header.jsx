
import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import Boton from '../Boton/Boton'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/blockbusterlogo.jpg'
import { Navigate } from 'react-router';

const Header = (props) => {

    const navigate = useNavigate();

    const cambioPantalla = (from) =>{
        navigate(from)
    };
        console.log(props.credentials)
    if (props?.credentials?.usuario.rol == "usuario"){
    return (
        
        <div className="designHeader">
            <img className="logol" src={logo}/>
            <Boton destino="Home" url="/" />
            <Boton destino="Profile" url="/Profile" />

        </div>
    )
    }
    if (props?.credentials?.usuario.rol == "administrador"){
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
    return(
        <div>
            hola
        </div>
    )
}

export default connect((state)=>({
    credentials: state.credentials
}))(Header);