import React from "react";
import "../../assets/styles/components/layout/sidebar.css";
import { FaHome, FaUsers, FaBookmark } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="card nav-card"> {/* Añadido la clase nav-card */}
        <div className="nav-item">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <FaUsers className="nav-icon" />
          <span>Friends</span>
        </div>
        <div className="nav-item">
          <FaBookmark className="nav-icon" />
          <span>Guardado</span>
        </div>
      </div>
      <div className="card trending-card"> {/* Añadido la clase trending-card */}
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
