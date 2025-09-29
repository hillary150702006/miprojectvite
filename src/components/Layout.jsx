import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Layout.css';

function Layout({ cartItems = [], onCartToggle }) {
  return (
    <div className="layout-container">
      <Navbar cartItems={cartItems} onCartToggle={onCartToggle} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
