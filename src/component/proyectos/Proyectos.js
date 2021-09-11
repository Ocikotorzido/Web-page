import React from 'react'
import "./Proyectos.css";
import prueba from "../../media/prueba.jpg";

const Proyectos = () => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-4 bg-secondary">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>

                </div>

                <div className=" col-lg-4 bg-secondary">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                </div>
                
                <div className="col-lg-4 bg-secondary">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                </div>
            </div>
            
        </div>
    )
}

export default Proyectos
