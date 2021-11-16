
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import fotofondo from '../../assets/img/fondoregister.jpg'
import './Register.css';

const Register = () => {

    let history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [user, setUser] = useState();

    //Manejadores o Handlers

    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //useEffect

    useEffect(() => {
        //UseEffect que se ejecuta sólo una vez al montarse. (1a vez).

    }, []);

    useEffect(() => {
        //UseEffect que se ejecutará CADA VEZ que se actualize el estado.(renderizando de nuevo).
    });

    //Funciones

    const enviaDatosRegistro = async () => {
        //Comprobación de errores en los datos

        if (! /[a-z]/gi.test(user.name) ) {
           setmsgError("Nombre Incorrecto");
           return;
        };
        
        // if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email) ) {
        //    setmsgError("Email Incorrecto");
        //    return;
        // };

        //Generación del body
        let body = {
            nombre: user.nombre,
            apellidos: user.apellidos,
            correo: user.correo,
            direccion: user.direccion,
            poblacion: user.poblacion,
            contraseña: user.contraseña,
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....",body);

        
        try {

            let res = await axios.post("https://proyecto-basededatosf.herokuapp.com/usuarios/registro", body);

            //Guardado de datos en redux
            

        } catch (error) {
            console.log(error)
        }

        

        setmsgError("Usuario registrado con éxito");
        
        setTimeout(()=>{
            history("/Login");
        },4000);
    };


    //Renderizado
    return (
        <div className="designBottonr">
        <div className="designRegister">
            <input className="inputRegister" type='text' name='nombre' title='nombre' onChange={userHandler} lenght='30' placeholder='Nombre' />
            <input className="inputRegister" type='text' name='apellidos' title='apellidos' onChange={userHandler} lenght='30' placeholder='Apellido' />
            <input className="inputRegister" type='text' name='correo' title='correo' onChange={userHandler} lenght='30' placeholder='Email' />
            <input className="inputRegister" type='text' name='direccion' title='direccion' onChange={userHandler} lenght='30' placeholder='Direccion' />
            <input className="inputRegister" type='text' name='poblacion' title='poblacion' onChange={userHandler} lenght='30' placeholder='Ciudad' />
            <input className="inputRegister" type='text' name='contraseña' title='contraseña' onChange={userHandler} lenght='30' placeholder='contraseña' />
            <div className="botonSend" onClick={() => enviaDatosRegistro()}>Registrame</div>
            <div>{msgError}</div>
        </div>
        </div>
    )
};

export default Register;