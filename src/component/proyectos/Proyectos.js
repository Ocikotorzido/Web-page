import React from 'react'
import "./Proyectos.css";
import prueba from "../../media/prueba.jpg";
import git from "../../media/github.png";
import mecanica from "../../media/mecanica.jpg";
import { Link, Redirect } from 'react-router-dom';


const Proyectos = () => {

    return (
        <>
        <div className="text-center bg-dark fs-1 text-white altura d-flex justify-content-center align-items-center">Proyectos</div>
        <div class="card-group p-5">
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Taller Mecanico</h5>
            <p class="card-text">Sistema de gestión y administración web del taller mecánico</p>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Primary</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Reconocimiento Facial</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Primary</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={mecanica} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Water-Pot</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Primary</button>
                <img className="logo img-fluid" src={git}/>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Proyectos
