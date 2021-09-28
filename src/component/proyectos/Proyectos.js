import React from 'react'
import "./Proyectos.css";
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
            <h5 class="card-title d-flex justify-content-center">Taller Mecanico</h5>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Info</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">Reconocimiento Facial</h5>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Info</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">Water-Pot</h5>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Info</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Proyectos
