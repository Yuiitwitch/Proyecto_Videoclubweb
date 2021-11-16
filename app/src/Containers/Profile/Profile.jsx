
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { LOGOUT , UPDATE_USER } from '../../redux/types';
import Header from '../../Components/Header/Header';
import axios from 'axios';
import './Profile.css';
// import Header from '../../Components/Header/Header';

const Profile = (props) => {

    const [userData, setUserData] = useState(props.credentials.usuario);

    const manejaInputs = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    
    const logOut = () => {
        //funcion para realizar el logout
        props.dispatch({ type: LOGOUT })
    }

    useEffect(() => {
        setUserData(props.credentials.usuario);
    }, [props.credentials]);

    const enviaDatosPerfil = async () => {
    
        props.dispatch({type: UPDATE_USER, payload:userData});

    //Genración del body
    let body = {
        nombre: userData.nombre,
        apellidos: userData.apellidos,
        correo: userData.correo,
        direccion: userData.direccion,
        poblacion: userData.poblacion,
        contraseña: userData.contraseña,
    }

    try{

    let res = await axios.put(`https://proyecto-basededatosf.herokuapp.com/usuarios/${props.credentials.usuario}`, body);

     //guardado de datos en redux

    }catch (error){
        console.log(error);     
    }

    }


        return (
            <div>
            <Header/>
            <div className="profileUser">
                <div><h1>Profile User</h1></div>
                {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
                <div className="user"><input value={userData?.nombre || false} placeholder="nombre"  name="nombre" onChange={manejaInputs}/></div>
                <div className="user"><input value={userData?.apellidos || false} placeholder="apellidos" name="apellidos" onChange={manejaInputs}/></div>
                <div className="user"><input value={userData?.correo || false} placeholder="correo" name="correo" onChange={manejaInputs}/></div>
                <div className="user"><input value={userData?.direccion || false} placeholder="direccion" name="direccion" onChange={manejaInputs}/></div>
                <div className="user"><input value={userData?.poblacion || false} placeholder="poblacion" name="poblacion" onChange={manejaInputs}/></div>
                <div className="user"><input value={userData?.contraseña || false} placeholder="contraseña" name="contraseña" onChange={manejaInputs}/></div>
                <div className="invisible"></div> 
                <div className="update" onClick={() => enviaDatosPerfil()}>SAVE</div>
                <div className="unLog" onClick={() => logOut()}>LOGOUT</div>
            </div>
            </div>
        
        );
}

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);