import React from 'react'
import "./Navbar.css";

const Navbar = () => { 

    const up = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"});
    }

    return (
        <nav className="navbarr bg-dark text-white fs-3">
            <div className="navbar-logo" onClick={up}>Logo
            
            </div>
        </nav>
    )
}

export default Navbar
