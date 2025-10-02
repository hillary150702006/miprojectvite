import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Fish } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ cartItems = [], onCartToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <header className="navbar-cabecera">
      <div className="navbar-contenedor">
        <div className="navbar-contenido">
          
          <a href="/" target="_blank" rel="noopener noreferrer" className="navbar-logo">
            <div className="logo-circulo">
              <Fish className="logo-icono" />
            </div>
            <h1 className="nombre-marca">Diamante Azul</h1>
          </a>

         
          <nav className="navbar-escritorio">
            <Link to="/" className="enlace-navegacion">
              inicio
            </Link>
            <Link to="/catalogo" className="enlace-navegacion">
              Catalogo
            </Link>
            <Link to="/perfil" className="enlace-navegacion">
              perfil
            </Link>
            <Link to="/login" className="enlace-navegacion">
              iniciar sesion
            </Link>
          
            <form className="barra-busqueda">
              <input
                type="text"
                placeholder="Buscar en catálogo..."
                className="entrada-busqueda"
              />
              <button type="submit" className="boton-busqueda">
                Buscar
              </button>
            </form>
          </nav>

          
          <div className="navbar-acciones">
            <button
              onClick={onCartToggle}
              className="boton-carrito"
            >
              <ShoppingCart className="icono-carrito" />
              {getTotalItems() > 0 && (
                <span className="insignia-carrito">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              className="boton-menu-movil"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="icono-menu" /> : <Menu className="icono-menu" />}
            </button>
          </div>
        </div>

        
        {mobileMenuOpen && (
          <nav className="navbar-movil">
            <div className="menu-movil">
              <Link
                to="/"
                className="enlace-movil"
                onClick={() => setMobileMenuOpen(false)}
              >
                inicio
              </Link>
              <Link
                to="/catalogo"
                className="enlace-movil"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catalogo
              </Link>
              <Link
                to="/perfil"
                className="enlace-movil"
                onClick={() => setMobileMenuOpen(false)}
              >
                perfil
              </Link>
              <Link
                to="/login"
                className="enlace-movil"
                onClick={() => setMobileMenuOpen(false)}
              >
                iniciar sesion
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;