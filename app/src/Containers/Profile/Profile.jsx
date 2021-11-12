
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { LOGOUT } from '../../redux/types';
import './Profile.css';

const Profile = (props) => {

   const logOut = () => {
            //funcion para realizar el logout
        props.dispatch({type:LOGOUT})
   }
    if(props.credentials?.token !== ''){
    return (
        <div className="profilePelicula">
            <div className="profileinput">{props.credentials?.usuario?.nombre}</div>
                <div className="profileinput">{props.credentials?.usuario?.apellidos}</div>
                <div className="profileinput">{props.credentials?.usuario?.ciudad}</div>
                <div className="profileinput">{props.credentials?.usuario?.correo}</div>
                <div className="profileinput">{props.credentials?.usuario?.telefono}</div>
                <div className="profileinput">{props.credentials?.usuario?.direccion}</div>
                <button className="profileinput" onClick={()=>logOut()}>Logout</button>
        </div>
    )
}  else {
    <div className="NoUser">
        No se encuentra ningun usuario con esas credenciales
    </div>
}
}

export default connect((state)=>({
    credentials: state.credentials
}))(Profile);