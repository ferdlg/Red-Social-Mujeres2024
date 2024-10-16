import React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import "../../assets/styles/components/layout/layout.css";

const Layout = ({ children }) => {
    return (
      <div className="layout">
        <Header />
        <div className="layout__content">
          <Sidebar />
          <div className="layout__main">{children}</div>
        </div>
        <Footer />
      </div>
    );
};

export default Layout;