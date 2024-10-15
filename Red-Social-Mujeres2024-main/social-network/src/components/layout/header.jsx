import React from "react";
import "./../../assets/styles/layout/header.css";
import logo from "./../../assets/imagenes/logoxd.svg";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Encabezado = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logotipo" />
        <h1>Friendo</h1>
      </div>
      <nav className="nav-icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </nav>
    </header>
  );
};

export default Encabezado;
