import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './Home.css'

const Home = () => {

    let navigate = useNavigate();

    const [peliculas,setPeliculas] = useState ([]);

    useEffect(()=>{

        setTimeout(()=>{

            traePeliculas();
        },2000)

    },[]);

    useEffect(()=>{

    });

    const traePeliculas = async () => {

        let res=await axios.get("http://proyecto-basededatosf.herokuapp.com/peliculas")

        setPeliculas(peliculas);

    }
    const escogePelicula = (peliculaEscogida) => {
        localStorage.setItem("choosenFilm", JSON.stringify(peliculaEscogida));

        //redirigire a el perfil de la película....
        // navigate("/profile");
    }

    if(peliculas[1]?.title){

        return (
            <div className="displayPeliculas">
                {
                    peliculas.map((peli) => {
                        return (
                            <div className="peli" key={peli.id}>
                                <img alt={peli.id} className="cartel" onClick={()=>escogePelicula(peli)}/>
                            </div>
                        )
                    })
                }

            </div>
        )

    } else {

        return (
            <div>
                cargando...
            </div>
        )
    }

    
}

export default Home;