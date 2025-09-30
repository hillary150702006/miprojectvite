import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Layout.css';

function Layout() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('carrito');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    const handleStorageChange = () => {
      const updatedCart = localStorage.getItem('carrito');
      if (updatedCart) {
        setCart(JSON.parse(updatedCart));
      } else {
        setCart([]);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const onCartToggle = () => setShowCart(!showCart);

  const cartItems = cart.map(item => ({ ...item, quantity: 1 }));

  const total = cart.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div className="layout-container">
      <Navbar cartItems={cartItems} onCartToggle={onCartToggle} />
      <main>
        <Outlet />
      </main>
      <Footer />
      {showCart && (
        <div style={{
          position: 'fixed',
          top: '60px',
          right: '20px',
          background: 'white',
          border: '1px solid #ccc',
          padding: '10px',
          zIndex: 1000,
          maxWidth: '300px'
        }}>
          <h3>Carrito de Compras</h3>
          {cart.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {cart.map((item, i) => (
                  <li key={i} style={{ marginBottom: '5px' }}>
                    {item.nombre} - ₡{item.precio.toFixed(0)}
                  </li>
                ))}
              </ul>
              <p><strong>Total: ₡{total.toFixed(0)}</strong></p>
              <button onClick={() => { setShowCart(false); navigate('/carrito-pago'); }}>
                Ir a Pagar
              </button>
            </>
          )}
          <button onClick={() => setShowCart(false)} style={{ marginTop: '10px' }}>
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}

export default Layout;
