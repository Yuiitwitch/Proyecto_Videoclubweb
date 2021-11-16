import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';
import logo from '../../assets/img/blockbusterlogo.jpg'

import './Login.css';
import { useNavigate } from 'react-router';


const Login = (props) => {

    const navigate = useNavigate();
    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ correo: '', contraseña: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logeame = async () => {

        let body = {
            correo: credentials.correo,
            contraseña: credentials.contraseña
        };
        console.log(body)
        try {

            let res = await axios.post("https://proyecto-basededatosf.herokuapp.com/usuarios/login", body);
            setmsgError(`Hola de nuevo ${res.data.usuario.nombre}....`);

            let datos = res.data;

            props.dispatch({type:LOGIN,payload:datos});
            navigate("/");

        } catch (error) {
            setmsgError("Wrong username or password");

        }

    }

    return (

        <div className="designbottoml">
        <div className="designheadl">
            <div className="desinglogol">
                <img className="logol" src={logo}/>
            </div>
        </div>
        <div className="designLogin">
            <div><strong>Welcome.</strong> Please login. </div>
            <input className="input" placeholder="correo" type='correo' name='correo' title='correo' onChange={manejadorInputs} lenght='30' ></input>
            <input className="input" placeholder="contraseña" type='contraseña' name='contraseña' title='clave' onChange={manejadorInputs} lenght='30' ></input>
            <div className="error">{msgError}</div>
            <div className="sendButton" onClick={() => logeame()}>Login</div>
        </div>
        </div>
    )
};

export default connect()(Login);