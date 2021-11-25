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
        
    },[]);

    const recibePedidos = async () => {

        let res = await axios.get(`https://proyecto-basededatosf.herokuapp.com/pedidos/${props.credentials.usuario.id}`);
        console.log(res)
        setPedidos(res.data)
    }

    const recibeUsuarios = async () => {

        let res = await axios.get(`https://proyecto-basededatosf.herokuapp.com/usuarios/${props.credentials.usuario}`)
    }

    return(
        <div>
            <Header />
            <div className="profileUser">
            {usuarios.map((usuario) => {
                return(

                    <div className="unLog" onClick={() => logOut()}>LOGOUT</div>

                )

            }
            
            )}
            <div className="gpedidosUser">
            <h1>LISTA PEDIDOS</h1>
            {pedidos.map((pedido) => {
                //cuando donde aparecen los pedidos en el perfil de usuario
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
    )
}



export default connect((state) => ({
    credentials: state.credentials
}))(Admin);