import React from "react"
import Image from "../images/react-js-icon.png"

function Navbar () {
    return (
        <nav className="nav-bar">        
            <img src={Image} alt="image" width={60} className="nav-logo"/>
            <h1 className="nav-title">React Facts</h1>
            <h2 className="nav-text">React Course - Project 1</h2>
        </nav>
    )
    
}

export default Navbar