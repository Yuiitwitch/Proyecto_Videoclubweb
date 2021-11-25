
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import axios from 'axios';
import './Profile.css';
// import Header from '../../Components/Header/Header';

const Profile = (props) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState(props.credentials.usuario);
    const [pedidos, setPedidos] = useState([]);

    const manejaInputs = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const logOut = () => {
        //funcion para realizar el logout
        props.dispatch({ type: LOGOUT })

        navigate("/login")
    }

    useEffect(() => {
        recibePedidos();
        setUserData(props.credentials.usuario);
    }, [props.credentials]);

    //funcion para recibir los datos de pedidos en el perfil de usuario
    const recibePedidos = async () => {

        let res = await axios.get(`https://proyecto-basededatosf.herokuapp.com/pedidos/userid/${props.credentials.usuario.id}`);

        setPedidos(res.data)
    }
    const enviaDatosPerfil = async () => {

        props.dispatch({ type: UPDATE_USER, payload: userData });

        //Genración del body
        let body = {
            nombre: userData.nombre,
            apellidos: userData.apellidos,
            correo: userData.correo,
            direccion: userData.direccion,
            poblacion: userData.poblacion,
        }

        try {
            console.log(props.credentials.usuario)
            let res = await axios.put(`https://proyecto-basededatosf.herokuapp.com/usuarios/${props.credentials.usuario}`, body);

            //guardado de datos en redux

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <Header />
            <div className="profileUser">
                <div><h1>Profile User</h1></div>
                <div className="user"><input value={userData?.nombre || ""} placeholder="nombre" name="nombre" onChange={manejaInputs} /></div>
                <div className="user"><input value={userData?.apellidos || ""} placeholder="apellidos" name="apellidos" onChange={manejaInputs} /></div>
                <div className="user"><input value={userData?.correo || ""} placeholder="correo" name="correo" onChange={manejaInputs} /></div>
                <div className="user"><input value={userData?.direccion || ""} placeholder="direccion" name="direccion" onChange={manejaInputs} /></div>
                <div className="user"><input value={userData?.poblacion || ""} placeholder="poblacion" name="poblacion" onChange={manejaInputs} /></div>
                <div className="invisible"></div>
                <div className="update" onClick={() => enviaDatosPerfil()}>SAVE</div>
                <div className="unLog" onClick={() => logOut()}>LOGOUT</div>
            <div className="gpedidosUser">
            <h1>LISTA PEDIDOS</h1>
            {pedidos.map((pedido) => {
                //cuandro donde aparecen los pedidos en el perfil de usuario
                    return (
                        
                        <div className="pedidosUser" key={pedido.id}>
                            <p class="pedidoColor">id: {pedido.id}</p>
                            <p class="pedidoColor">Peliculaid: {pedido.peliculaId}</p>
                            <p class="pedidoColor">Usuarioid:{pedido.usuarioId}</p>
                            <p class="pedidoColor">Fecha A.:{pedido.fecha_alquiler}</p>
                            <p class="pedidoColor">Fecha D.:{pedido.fecha_devolucion}</p>
                        </div>
                    )

                })}

            </div>
            </div>
        </div>


    );
}

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);