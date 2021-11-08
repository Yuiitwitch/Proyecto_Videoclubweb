import React, {userState,useEffect} from 'react'
import axios from 'axios';
import pocima from '../../assets/img/pocima.gif'
import {useNavigate} from 'react-router-dom'
import './Home.css'

const Home = () => {

    let navigate = useNavigate();

    cont [peliculas,setPeliculas] = useState ([]);

    useEffect(()=>{

        setTimeout(()=>{

            traePeliculas();
        },2000)

    },[]);

    useEffect(()=>{

    });

    const traePeliculas = async () => {

        let res=await axios.get("https://proyecto-basededatosf.herokuapp.com/peliculas")

        setPeliculas(res.data.results);

    }
    const escogePelicula = (peliculaEscogida) => {
        localStorage.setItem("choosenFilm", JSON.stringify(peliculaEscogida));

        //redirigire a el perfil de la película....
        navigate("/profile");
    }

    if(peliculas[1]?.title){

        return (
            <div className="displayPeliculas">
                {
                    peliculas.map((peli) => {
                        return (
                            <div className="peli" key={peli.id}>
                    
                            </div>
                        )
                    })
                }

            </div>
        )

    } else {

        return (
            <div>
                <img className="loader" src={pocima}/>
            </div>
        )
    }

    
}

export default Home;