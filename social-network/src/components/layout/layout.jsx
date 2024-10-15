import React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar'; 
import MainContent from './postInput';
import "../../assets/styles/components/layout/layout.css";



const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <MainContent />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
