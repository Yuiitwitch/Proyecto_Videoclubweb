
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import Header from '../../Components/Header/Header';
import axios from 'axios';
import './Admin.css'


const Admin = (props) => {

    const navigate = useNavigate();

    const [pedidos, setPedidos] = useState([]);
    const [usuarios, setUser] = useState([]);

    const logOut = () => {
        //funcion para realizar el logout
        props.dispatch({ type: LOGOUT })

        navigate("/login")
    }

    useEffect(() => {
        recibePedidos();
        recibeUsuarios();

    }, []);

    const recibePedidos = async () => {
        try {
            let res = await axios.get(`https://proyecto-basededatosf.herokuapp.com/pedidos`, {
                headers: {
                    'Authorization': `Bearer ${props.credentials.token}`
                }
            });
            setPedidos(res.data);
        } catch (error) {
            console.log(error);
        }


    }

    const recibeUsuarios = async () => {
        try {
            let res = await axios.get(`https://proyecto-basededatosf.herokuapp.com/usuarios`, {
                headers: {
                    'Authorization': `Bearer ${props.credentials.token}`
                }
            });

            setUser(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Header />
            <div className="profileAdmin">
                <div className="pedidosUser"><h1>LISTA DE USUARIOS REGISTRADOS</h1></div>
                {usuarios.map((usuario) => {
                    // donde aparecen los usuarios en la vista admin
                    return (

                        <div className="generalUsuarios">
                            <div className="subUsuarios" key={usuario.id}>
                                <p className="pedidoColor">id: {usuario.id}</p>
                                <p className="pedidoColor">Nombre: {usuario.nombre}</p>
                                <p className="pedidoColor">Apellidos:{usuario.apellidos}</p>
                                <p className="pedidoColor">Correo:{usuario.correo}</p>
                                <p className="pedidoColor">Direccion:{usuario.direccion}</p>
                            </div>
                        </div>

                    )

                }

                )}
                <div className="gpedidosUser">
                    <h1>LISTA TODOS LOS PEDIDOS</h1>
                    {pedidos.map((pedido) => {
                        // donde aparecen los pedidos en la vista admin
                        return (

                            <div className="pedidosUser" key={pedido.id}>
                                <p className="pedidoColor">id: {pedido.id}</p>
                                <p className="pedidoColor">Peliculaid: {pedido.peliculaId}</p>
                                <p className="pedidoColor">Usuarioid:{pedido.usuarioId}</p>
                                <p className="pedidoColor">Fecha A.:{pedido.fecha_alquiler}</p>
                                <p className="pedidoColor">Fecha D.:{pedido.fecha_devolucion}</p>


                            </div>

                        )

                    })}
                </div>
            </div>
            <div>
                <div className="unLog" onClick={() => logOut()}>LOGOUT</div>
            </div>
        </div>
    )
}


export default connect((state) => ({
    credentials: state.credentials,
    pedidos: state.pedidos
}))(Admin);