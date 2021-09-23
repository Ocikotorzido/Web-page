import React from 'react'
import "./Proyectos.css";
import prueba from "../../media/prueba.jpg";
import git from "../../media/github.png";
import mecanica from "../../media/mecanica.jpg";
import { Link, Redirect } from 'react-router-dom';


const Proyectos = () => {

    return (
        <div className="">
        <div className="text-center bg-dark fs-1 text-white altura d-flex justify-content-center align-items-center">Proyectos</div>
        <div class="card-group p-5">
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Taller Mecanico</h5>
            <p class="card-text">Sistema de gestión y administración web del taller mecánico</p>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Info</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Reconocimiento Facial</h5>
            <p class="card-text">Software de reconocimiento facial </p>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Info</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Water-Pot</h5>
            <p class="card-text">Sitio web que permitirá adquirir un dispositivo para ahorrar agua en cosechas, además de incorporar un llamado a la acción.</p>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Info</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        </div>
        <div className="text-center bg-dark fs-1 text-white altura d-flex justify-content-center align-items-center">Proyectos en curso</div>
        <div class="card" >
        <img src={mecanica} class="card-img-top" alt="."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    )
}

export default Proyectos
