import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header';
// import { loadMovies } from '../../redux/types'
import './Home.css'

const Home = () => {

    const [peliculas, setPeliculas] = useState([]);

    // const history = useNavigate(); //para cambiar de pagina

    useEffect(() => {

        showMovies();
    }, [])

    const showMovies = async () => {
        let res = await axios.get("https://proyecto-basededatosf.herokuapp.com/peliculas")
        // props.dispatch({ type: loadMovies, payload: res.data })
        setPeliculas(res.data);



    }

    return (
        <div className="generalPeliculas">
            <Header />
            <h1 className="tituloPeliculas"><span>LIST OF MOVIES</span></h1>
            <div className="displayHome">
            {peliculas.map((peli) => {
                return (
                    
                    <div className="designPeliculas" key={peli.id}>
                        <div className="displayPeliculas">
                            <p>ID movie: {peli.id}</p>
                            <p>Title:{peli.titulo}</p>
                            <p>Génre:{peli.genero}</p>
                            <p>Actor:{peli.actor}</p>
                        </div>
                    </div>
                    
                )
            })}
        </div>
        </div >
    )


}

export default Home;