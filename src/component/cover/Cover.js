import React from 'react'
import "./Cover.css";
import planeta from "../../media/planeta.mp4";
import Typed from 'react-typed';

const Cover = () => {
      
    return (
        <div className="cover-container text-center mt-5">
            <video className="video" src={planeta} autoPlay loop muted />
            <h1>Intelligence</h1>
            <Typed className="letras text-white d-flex justify-content-center"
                    strings={[
                        'GitHub: Ocikotorzido',
                        'Instagram: Tio_chokita']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop>
                </Typed>
            
        </div>
    )
}

export default Cover
