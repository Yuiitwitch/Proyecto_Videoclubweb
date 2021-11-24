import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { connect } from 'react-redux';

// import { loadMovies } from '../../redux/types'
import './Home.css'

const Home = (props) => {

    const [peliculas, setPeliculas] = useState([]);
    const [msgError, setmsgError] = useState("");
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        showMovies();
    }, [])

    const showMovies = async () => {
        let res = await axios.get("https://proyecto-basededatosf.herokuapp.com/peliculas")
        // props.dispatch({ type: loadMovies, payload: res.data })
        setPeliculas(res.data);



    }
    const alquilarPelicula = async (peliculas) =>{
        console.log(peliculas)
        const body = {
            peliculaId: peliculas.id,
            usuarioId: props.credentials.usuario.id,
            fecha_alquiler: new Date(),
            fecha_devolucion: new Date()

        }
        console.log(body)
            let res = await axios.post("https://proyecto-basededatosf.herokuapp.com/pedidos", body);
            navigate("/profile");
    }
    const filtrar=(peliculas)=>{
        if(query === ""){
            return peliculas;
        }else if (peliculas.titulo.toLowerCase().includes(query.toLowerCase())) {
            return peliculas;
        }
        // let Busqueda = peliculas.titulo.filter((peliculas)=>{
        //     if(peliculas.titulo.toString().toLowerCase().includes(peliculas.toLowerCase())){
        //         return peliculas;
        //     }
        // })
    }
    return (
        <div className="generalPeliculas">
            <Header />
            <h1 className="tituloPeliculas"><span>LIST OF MOVIES</span></h1>

            <input id="buscador" placeholder ="Buscador de peliculas" onChange={event => setQuery(event.target.value)}/>
            <button onClick={() => filtrar()}>Buscar</button>
            <div className="displayHome">
            
            {peliculas.map((pelicula) => {
                return( 
                    
                
                    <div className="designPeliculas" key={pelicula.id}>
                        <div className="displayPeliculas">
                            <p>ID movie: {pelicula.id}</p>
                            <p>Title:{pelicula.titulo}</p>
                            <p>Génre:{pelicula.genero}</p>
                            <p>Actor:{pelicula.actor}</p>
                            <div className="sendButton" onClick={() => alquilarPelicula(pelicula)}>Rent</div>
                        </div>
                    </div>
                    
                    
                )
            })}
        </div>
        </div >
    )


}

export default connect((state)=>({
    credentials: state.credentials,
}))(Home);