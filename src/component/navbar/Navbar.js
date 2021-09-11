import React from 'react'
import "./Navbar.css";

const Navbar = () => { 

    const up = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"});
    }

    return (
        <nav className="navbarr">
            <div className="navbar-logo" onClick={up}>Logo
            
            </div>
        </nav>
    )
}

export default Navbar
