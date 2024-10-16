import React from "react";
import "../../assets/styles/components/layout/sidebar.css";
import { FaHome, FaUsers, FaBookmark } from "react-icons/fa";
import { Card } from "../card/card"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Card>
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
      </Card>
      <Card>
        <div className="trending-section">
          <h3>Trending Topics</h3>
          <ul>
            <li>#FriendoLife</li>
            <li>#ConnectMore</li>
            <li>#FriendlyVibes</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
