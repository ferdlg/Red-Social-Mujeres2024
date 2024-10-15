import React from "react";
import "./../../assets/styles/layout/sidebar.css";
import { FaHome, FaUsers, FaBookmark } from "react-icons/fa"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Card de navegación */}
      <div className="card">
        <div className="nav-item">
          <FaHome className="nav-icon" /> {/* Ícono de Home */}
          <span>Home</span>
        </div>
        <div className="nav-item">
          <FaUsers className="nav-icon" /> {/* Ícono de Friends */}
          <span>Friends</span>
        </div>
        <div className="nav-item">
          <FaBookmark className="nav-icon" /> {/* Ícono de Saved */}
          <span>Saved</span>
        </div>
      </div>

      {/* Sección de temas en tendencia */}
      <div className="trending-section">
        <h3>Trending Topics</h3>
        <ul>
          <li>#FriendoLife</li>
          <li>#ConnectMore</li>
          <li>#FriendlyVibes</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
