import React from "react";
import Globe from "../images/globe-png-8.png";

export  default function Navbar(){
    return(
        <nav className="navbar">
            <img src={Globe} className="globe-png"/>
            <span className="nav-span">my travel journal</span>
        </nav>
    );
} 