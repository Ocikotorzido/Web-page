import React from 'react'
import "./Cover.css";
import planeta from "../../media/planeta.mp4";

const Cover = () => {
    return (
        <div className="cover-container text-center mt-5">
            <video className="video" src={planeta} autoPlay loop muted />
            <h1>Intelligence</h1>
            <p>Ocikotorzido</p>
        </div>
    )
}

export default Cover
