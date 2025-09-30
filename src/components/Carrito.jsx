import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  if (carrito.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Carrito de Compras</h2>
        <p>El carrito está vacío.</p>
        <button onClick={() => navigate('/catalogo')}>Ir al Catálogo</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Carrito de Compras</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {carrito.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <div>
              <h4>{item.nombre}</h4>
              <p>₡{item.precio.toFixed(0)}</p>
            </div>
            <button onClick={() => eliminarDelCarrito(i)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p><strong>Total: ₡{total.toFixed(0)}</strong></p>
      <button onClick={() => navigate('/carrito-pago')} style={{ background: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', marginRight: '10px' }}>
        Ir a Pagar
      </button>
      <button onClick={() => navigate('/catalogo')} style={{ background: 'blue', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
        Continuar Comprando
      </button>
    </div>
  );
};

export default Carrito;
