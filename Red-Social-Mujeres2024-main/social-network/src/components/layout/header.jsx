import React from "react";
import "./../../assets/styles/layout/header.css";
import logo from "./../../assets/imagenes/logoxd.svg"; 
import { FaBell, FaUserCircle } from "react-icons/fa"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Friendo</h1>
      </div>
      <nav className="nav-icons">
        <FaBell className="icon" /> {/* Icono de campana */}
        <FaUserCircle className="icon" /> {/* Icono de perfil */}
      </nav>
    </header>
  );
};

export default Header;
