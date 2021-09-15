import React from 'react'
import "./Proyectos.css";
import prueba from "../../media/prueba.jpg";
import git from "../../media/github.png";
import fonicular from "../../media/github.png";
import { Link, Redirect } from 'react-router-dom';


const Proyectos = () => {

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-4 text-center">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <a href="https://github.com/Ocikotorzido/Web-page">
                        <img className="img-fluid logo mt-2" src={fonicular}/>    
                    </a>                  
                </div>

                <div className=" col-lg-4 text-center">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <Link to="/Formulario">
                        <img className="img-fluid logo mt-2" src={git}/>    
                    </Link>           
                </div>
                    
                <div className="col-lg-4 text-center">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <Link to="">
                        <img className="img-fluid logo mt-2" src={git}/>    
                    </Link>                  
                </div>
                <div className="col-lg-4 text-center mt-5"></div>
                <div className="col-lg-4 text-center mt-5">
                    <h1>Titulo</h1>
                    <p>Hola</p>
                    <img className="img-fluid" src={prueba}/>
                    <Link to="">
                        <img className="img-fluid logo mt-2" src={git}/>    
                    </Link>       
                </div>
                <div className="col-lg-4 text-center mt-5"></div>
            </div>
        </div>
    )
}

export default Proyectos
