import React, { useState, useEffect } from 'react';
import { postData } from '../services/fetch.js';

const Catalogo = () => {

  const productos = [
    { nombre: 'Salchicha Clásica', descripcion: 'Deliciosa salchicha tradicional', precio: 5.99, imagen: '/src/assets/Images/salchicha1.jpg' },
    { nombre: 'Salchicha Picante', descripcion: 'Salchicha con un toque picante', precio: 6.49, imagen: '/src/assets/Images/salchicha2.jpg' },
    { nombre: 'Salchicha Vegetariana', descripcion: 'Salchicha hecha con vegetales', precio: 7.99, imagen: '/src/assets/Images/salchicha3.jpg' },

  ];

  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  const realizarPedido = async () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de realizar el pedido.');
      return;
    }
    try {
      const pedido = {
        productos: carrito,
        total: total,
        fecha: new Date().toISOString()
      };
      const response = await postData('pedidos', pedido);
      alert('Pedido realizado con éxito');
      localStorage.removeItem('carrito');
      setCarrito([]);
    } catch (error) {
      alert('Error al realizar el pedido: ' + error.message);
    }
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const cancelarOrden = () => {
    if (window.confirm('¿Estás seguro de que quieres cancelar toda la orden?')) {
      setCarrito([]);
      localStorage.removeItem('carrito');
    }
  };

  const ProductCard = ({ nombre, descripcion, precio, imagen, onAgregar }) => (
    <div className="product-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${precio.toFixed(2)}</p>
      <button onClick={onAgregar}>Agregar al Carrito</button>
    </div>
  );

  return (
    <div className="catalogo-container">
      <h2>Catálogo de Salchichas</h2>
      <div className="product-grid">
        {productos.map((prod, index) => (
          <ProductCard
            key={index}
            {...prod}
            onAgregar={() => agregarAlCarrito(prod)}
          />
        ))}
      </div>

      <div className="carrito">
        <h3>Carrito de Compras</h3>
        <ul>
          {carrito.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={item.imagen} alt={item.nombre} style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover', borderRadius: '5px' }} />
              <span>{item.nombre} - ${item.precio.toFixed(2)}</span>
              <button
                className="btn-delete"
                style={{ marginLeft: 'auto' }}
                onClick={() => eliminarDelCarrito(i)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
        <button className="btn-realizar-pedido" onClick={realizarPedido}>Realizar pedido</button>
        <button className="cancel-order-btn" onClick={cancelarOrden}>
          Cancelar Orden
        </button>
      </div>
    </div>
  );
};

export default Catalogo;
