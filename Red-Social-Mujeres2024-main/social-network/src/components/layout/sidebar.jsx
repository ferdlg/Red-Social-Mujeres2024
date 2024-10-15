import React from "react";
import "./../../assets/styles/layout/sidebar.css";
import { FaHome, FaUsers, FaBookmark } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="card">
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
