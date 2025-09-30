import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CarritoPago = () => {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [metodoPago, setMetodoPago] = useState('');

  useEffect(() => {
    // Obtener carrito guardado en localStorage o iniciar vacío
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
      <div style={{ padding: '20px' }}>
        <h2>Carrito vacío</h2>
        <p>No hay productos para pagar.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Confirmar Pago</h2>
      <p><strong>Usuario:</strong> {usuario ? usuario.nombreCompleto : 'No registrado'}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {carrito.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={item.imagen} alt={item.nombre} style={{ width: '60px', height: '60px', marginRight: '15px', objectFit: 'cover', borderRadius: '5px' }} />
            <span>{item.nombre} - ₡{item.precio.toFixed(0)}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="metodoPago"><strong>Método de Pago:</strong></label>
        <select id="metodoPago" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }}>
          <option value="">Seleccionar método de pago</option>
          <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
          <option value="Simpe Móvil">Simpe Móvil</option>
        </select>
      </div>
      <p>
        <strong>Total a pagar:</strong> ₡{total.toFixed(0)}
      </p>
      <button onClick={confirmarPago} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Confirmar Pago
      </button>
    </div>
  );
};

export default CarritoPago;
