import React from 'react'
import "./Contenido.css"
import imagen from "../../media/ociko.png"
import Typed from 'react-typed';

const Contenido = () => {
    return (
        <div className="container">
            <div className="fondo row">
            
                <div className="col-lg-4 d-flex justify-content-center">
                    <img className="img-fluid  imagen rounded-circle" src={imagen}></img>
                </div>
                <div className="col-lg-6">
                <Typed className="text-dark fs-2"
                    strings={[
                        'Hola, soy Fabian Astorga',
                        'Hi, I´m Fabian Astorga']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop>
                </Typed>                
                </div>
            </div>    
        </div>
    )
}

export default Contenido
