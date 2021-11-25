
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import Header from '../../Components/Header/Header';
import axios from 'axios';


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
            let res = await axios.get(`https://proyecto-basededatosf.herokuapp.com/usuarios`,{
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
            <div className="profileUser">
                {usuarios.map((usuario) => {
                    return (
                        <div key={usuario.id}>
                            <div className="pedidosUser"><h1>Lista de usuarios registrados</h1></div>
                            <p className="pedidoColor">id: {usuario.id}</p>
                            <p className="pedidoColor">Nombre: {usuario.nombre}</p>
                            <p className="pedidoColor">Apellidos:{usuario.apellidos}</p>
                            <p className="pedidoColor">Correo:{usuario.correo}</p>
                            <p className="pedidoColor">Direccion:{usuario.direccion}</p>
                        </div>
                    )

                }

                )}
                <div className="gpedidosUser">
                    <h1>LISTA PEDIDOS</h1>
                    {pedidos.map((pedido) => {
                        // donde aparecen los pedidos en el perfil de usuario
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