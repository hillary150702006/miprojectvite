import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Catalogo.css'
import { postData } from '../services/fetch'

function Catalogo() {
  const navigate = useNavigate();

  const productos = [
    {
      nombre: 'Salchicha de Atún',
      descripcion: 'Hecha con atún y especias naturales, baja en sodio.',
      precio: 5495,
      imagen: 'ruta/atun.jpg',
    },
    {
      nombre: 'Salchicha Mixta',
      descripcion: 'Combinación de mariscos y vegetales, sin conservantes.',
      precio: 3995,
      imagen: 'ruta/mixta.jpg',
    },
    {
      nombre: 'Salchicha Vegetal',
      descripcion: 'Ideal para vegetarianos, alta en proteína.',
      precio: 4495,
      imagen: 'ruta/vegetal.jpg',
    },
  ]

  const [carrito, setCarrito] = useState([])

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
  }

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0)

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
      alert('Pedido realizado con éxito. Regístrate para proceder al pago.');
      localStorage.setItem('carrito', JSON.stringify(carrito));
      setCarrito([]);
      localStorage.setItem('pendingOrder', 'true');
      navigate('/registro');
    } catch (error) {
      alert('Error al realizar el pedido: ' + error.message);
    }
  };

  const ProductCard = ({ nombre, descripcion, precio, imagen, onAgregar }) => (
    <div className="product-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>₡{precio.toFixed(0)}</p>
      <button onClick={onAgregar}>Agregar al Carrito</button>
    </div>
  )

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
              <span>{item.nombre} - ₡{item.precio.toFixed(0)}</span>
            </li>
          ))}
        </ul>
        <p>
          <strong>Total:</strong> ₡{total.toFixed(0)}
        </p>
        <button onClick={realizarPedido}>Realizar pedido</button>
      </div>
    </div>
  )
}

export default Catalogo
