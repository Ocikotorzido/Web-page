import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => { 

    const up = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"});
    }
    
    return (
       <nav className="fijo navbar navbar-expand text-white bg-dark fs-3">
            <div className="container-fluid"><a onClick={up}>Ocikotorzido</a>
                
            </div>
        </nav>
    )
}

export default Navbar
