import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Carrito.css';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const cancelarOrden = () => {
    if (window.confirm('¿Estás seguro de que quieres cancelar toda la orden?')) {
      setCarrito([]);
      localStorage.removeItem('carrito');
      navigate('/catalogo');
    }
  };

  if (carrito.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Carrito de Compras</h2>
          <p>El carrito está vacío.</p>
          <button className="btn-primary" onClick={() => navigate('/catalogo')}>
            Ir al Catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul className="product-list">
        {carrito.map((item, i) => (
          <li key={i} className="product-item">
            <div className="product-details">
              <h4 className="product-name">{item.nombre}</h4>
              <p className="product-price">₡{item.precio.toFixed(0)}</p>
            </div>
            <button className="btn-delete" onClick={() => eliminarDelCarrito(i)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="total-section">
        <p className="total-amount">Total: ₡{total.toFixed(0)}</p>
      </div>
      <div className="action-buttons">
        <button className="btn-primary btn-pay" onClick={() => navigate('/carrito-pago')}>
          Ir a Pagar
        </button>
        <button className="btn-secondary btn-continue" onClick={() => navigate('/catalogo')}>
          Continuar Comprando
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="cancel-order-btn" onClick={cancelarOrden}>
          Cancelar Orden
        </button>
      </div>
    </div>
  );
};

export default Carrito;
