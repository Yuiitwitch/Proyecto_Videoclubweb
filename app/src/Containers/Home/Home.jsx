import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import './Home.css'

const Home = () => {

    const history = useNavigate(); //para cambiar de pagina

    useEffect(()=> {
        const showMovies = async () =>{
            let res = await axios.get("")

        }

    })

    
        return (
            <div>
                <Header/>
            <div className="designHome">
            SOY HOME
            </div>
                
            </div>
        )

}  

export default Home;