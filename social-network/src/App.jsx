import React from "react";
import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
import Footer from "./components/layout/footer";
import MainContent from "./components/layout/mainContent";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
