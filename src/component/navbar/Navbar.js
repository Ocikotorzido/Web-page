import React from 'react'
import "./Navbar.css";

const Navbar = () => { 

    const up = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"});
    }
    
    return (
       <nav className="fijo navbar navbar-expand text-white bg-dark fs-3">
            <div className="container-fluid"><a onClick={up}>Logo</a>
                <div class="collapse navbar-collapse  d-flex justify-content-end">
                    <ul className="navbar-nav px-2">
                        <li className="nav-item px-2 pointer rounded-3"><a href="" className="nav-link text-white fs-5">Inicio</a></li>
                        <li className="nav-item px-2 pointer rounded-3"><a href="" className="nav-link text-white fs-5">Sobre mi</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
