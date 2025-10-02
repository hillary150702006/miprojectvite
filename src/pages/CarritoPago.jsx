import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CarritoPago.css';

const CarritoPago = () => {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [metodoPago, setMetodoPago] = useState('');

  useEffect(() => {
   
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    } else {
      setCarrito([]);
    }
  }, []);

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  const confirmarPago = () => {
    if (!metodoPago) {
      alert('Por favor, selecciona un método de pago.');
      return;
    }
    alert(`Pago realizado con éxito usando ${metodoPago}. Gracias por su compra.`);
    localStorage.removeItem('carrito');
    localStorage.removeItem('pendingOrder');
    navigate('/inicio');
  };

  if (carrito.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-cart">
          <h2>Carrito vacío</h2>
          <p>No hay productos para pagar.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Confirmar Pago</h2>

      <div className="user-info">
        <p><strong>Usuario:</strong> {usuario ? usuario.nombreCompleto : 'No registrado'}</p>
      </div>

      <div className="product-list">
        {carrito.map((item, i) => (
          <div key={i} className="product-item">
            <img src={item.imagen} alt={item.nombre} className="product-image" />
            <div className="product-details">
              <div className="product-name">{item.nombre}</div>
              <div className="product-price">₡{item.precio.toFixed(0)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="payment-section">
        <label>Método de Pago:</label>
        <div className="payment-options">
          <label className="payment-option">
            <input
              type="radio"
              name="metodoPago"
              value="Transferencia Electrónica"
              checked={metodoPago === "Transferencia Electrónica"}
              onChange={(e) => setMetodoPago(e.target.value)}
            />
            <div className="option-content">
              <div className="option-icon transfer-icon">↗️</div>
              <div className="option-details">
                <div className="option-title">Transferencia Electrónica</div>
                <div className="option-desc">Transferencia bancaria segura</div>
              </div>
            </div>
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="metodoPago"
              value="Sinpe Móvil"
              checked={metodoPago === "Sinpe Móvil"}
              onChange={(e) => setMetodoPago(e.target.value)}
            />
            <div className="option-content">
              <div className="option-icon mobile-icon">📱</div>
              <div className="option-details">
                <div className="option-title">Sinpe Móvil</div>
                <div className="option-desc">Pago rápido con tu teléfono</div>
              </div>
            </div>
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="metodoPago"
              value="Tarjeta de Crédito/Débito"
              checked={metodoPago === "Tarjeta de Crédito/Débito"}
              onChange={(e) => setMetodoPago(e.target.value)}
            />
            <div className="option-content">
              <div className="option-icon card-icon">💳</div>
              <div className="option-details">
                <div className="option-title">Tarjeta de Crédito/Débito</div>
                <div className="option-desc">Pago con tarjeta Visa/Mastercard</div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="total-section">
        <p className="total-amount">Total: ₡{total.toFixed(0)}</p>
      </div>

      <button onClick={confirmarPago} className="confirm-button">
        Confirmar Pago
      </button>
    </div>
  );
};

export default CarritoPago;
