
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
        
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email) ) {
           setmsgError("Email Incorrecto");
           return;
        };

        //Generación del body
        let body = {
            name: user.name,
            surname: user.surname,
            dni: user.dni,
            email: user.email,
            address: user.address,
            city: user.city,
            cp: user.cp,
            password: user.password,
            password2: user.password2,
            phone: user.phone
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....",body);

        
        try {

            let res = await axios.post("https://dashboard.heroku.com/apps/proyecto-basededatosf/usuarios/registro", body);

            //Guardado de datos en localStorage
            

        } catch (error) {
            console.log(error)
        }

        

        setmsgError("Usuario registrado con éxito");
        
        setTimeout(()=>{
            history("/");
        },4000);
    };


    //Renderizado
    return (
        <div className="designBottonr">
        <div className="designRegister">
            <input className="inputRegister" type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Nombre' />
            <input className="inputRegister" type='text' name='surname' title='surname' onChange={userHandler} lenght='30' placeholder='Apellido' />
            <input className="inputRegister" type='text' name='dni' title='dni' onChange={userHandler} lenght='10' placeholder='DNI' />
            <input className="inputRegister" type='email' name='email' title='email' onChange={userHandler} lenght='30' placeholder='Email' />
            <input className="inputRegister" type='text' name='address' title='address' onChange={userHandler} lenght='30' placeholder='Direccion' />
            <input className="inputRegister" type='text' name='city' title='city' onChange={userHandler} lenght='30' placeholder='Ciudad' />
            <input className="inputRegister" type='number' name='cp' title='cp' onChange={userHandler} lenght='5' placeholder='C.Postal' />
            <input className="inputRegister" type='text' name='password' title='password' onChange={userHandler} lenght='30' placeholder='Password' />
            <input className="inputRegister" type='text' name='password2' title='password2' onChange={userHandler} lenght='30' placeholder='Repite Password' />
            <input className="inputRegister" type='text' name='phone' title='phone' onChange={userHandler} lenght='20' placeholder='Teléfono' />
            <div className="botonSend" onClick={() => enviaDatosRegistro()}>Registrame</div>
            <div>{msgError}</div>
        </div>
        </div>
    )
};

export default Register;