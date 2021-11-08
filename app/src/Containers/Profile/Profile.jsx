
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {

    const [peli, setPeli] = useState(JSON.parse(localStorage.getItem("choosenFilm")));

    useEffect(() => {
        console.log(peli);
    }, []);

    const order = () => {
        console.log("la id de la peli que voy a pedir es......",peli.id);
    }

    return (
        <div className="profilePelicula">
            <div>{peli.titulo}</div>
            <div>{peli.genero}</div>
            <div>{peli.actor}</div>
            <button onClick={()=> order()}>ALQUILAR</button>
        </div>
    )
}

export default Profile;