import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/blockbusterlogo.jpg'
import './Login.css';


const Login = () => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ correo: '', clave: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logeame = async () => {

        let body = {
            correo: credentials.correo,
            clave: credentials.clave
        };

        try {

            let res = await axios.post("https://dashboard.heroku.com/apps/proyecto-basededatosf/usuarios/login", body);
            setmsgError(`Hola de nuevo ${res.data.usuario.nombre}....`);

            localStorage.setItem("datosLogin", JSON.stringify(res.data.usuario));

            setTimeout(() => {
                history("/profile");
            }, 4000);
        } catch (error) {
            setmsgError("Error al logearme");

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
            {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
            <div><strong>Welcome.</strong> Please login. </div>
            <input className="input" placeholder="email" type='email' name='correo' title='correo' onChange={manejadorInputs} lenght='30' ></input>
            <input className="input" placeholder="password" type='password' name='clave' title='clave' onChange={manejadorInputs} lenght='30' ></input>
            <div className="sendButton" onClick={() => logeame()}>Login</div>
            <div className="error">{msgError}</div>
        </div>
        </div> 
    )
};

export default Login;