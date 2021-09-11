import React from 'react'
import "./Proyectos.css";
import prueba from "../../media/prueba.jpg";

const Proyectos = () => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-4 text-center">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <button type="button" className="btn btn-primary mt-2">Demo</button>
                </div>

                <div className=" col-lg-4 text-center">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <button type="button" className="btn btn-primary mt-2">Demo</button>
                </div>
                
                <div className="col-lg-4 text-center">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <button type="button" className="btn btn-primary mt-2">Demo</button>
                </div>
                <div className="col-lg-4 text-center mt-5"></div>
                <div className="col-lg-4 text-center mt-5">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <button type="button" className="btn btn-primary mt-2">Demo</button>
                </div>
                <div className="col-lg-4 text-center mt-5"></div>
            </div>
            
        </div>
    )
}

export default Proyectos
