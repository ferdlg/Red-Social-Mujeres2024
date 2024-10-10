import React from "react";

export const Bar = ({logo, slogan})=>{
    return(
        <nav className="navbar">
            <div className="navbar__logo-container">
                <img src={logo} alt="Logo Social Media" className="navbar__logo"/>
            </div>
            <div className="navbar__slogan-container">
                <h1>{slogan}</h1>
            </div>
        </nav>
    )
}