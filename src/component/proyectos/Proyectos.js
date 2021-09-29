import React from 'react'
import "./Proyectos.css";
import git from "../../media/github.png";
import mecanica from "../../media/mecanica.jpg";
import reconocimiento from "../../media/reco.jpg";
import sequia from "../../media/sequia-a.jpg";



const Proyectos = () => {

    return (
        <div className="">
        <div className="text-center fs-1 text-dark altura d-flex justify-content-center align-items-center bg"><h1 className="">Proyectos</h1></div>
        <div class="card-group ">
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image"/>
            <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">Taller Mecanico</h5>
            <div className="d-flex justify-content-center">
                <a href="https://github.com/Ocikotorzido/congenial-funicular">
                <img className="logo img-fluid" src={git} alt="github"/>
                </a>
            </div>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={reconocimiento} alt="Card image 2"/>
            <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">Reconocimiento Facial</h5>
            <div className="d-flex justify-content-center">

               <img className="logo img-fluid" src={git} alt="github 1"/>

            </div>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={sequia} alt="Card image 3"/>
            <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">Water-Pot</h5>
            <div className="d-flex justify-content-center">
                <img className="logo img-fluid" src={git} alt="github 2"/>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Proyectos
