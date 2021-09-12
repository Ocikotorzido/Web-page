import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center border-top bg-dark">
            <p class="col-md-4 mb-0 text-white">© 2021 Company, Inc</p>
            <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
            </ul>
        </footer>
    )
}

export default Footer
