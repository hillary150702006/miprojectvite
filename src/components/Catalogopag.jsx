import React from 'react'
import { useState } from 'react'
import '../styles/Catalogo.css'

function Catalogo() {
  const productos = [
    {
      nombre: 'Salchicha de Atún',
      descripcion: 'Hecha con atún y especias naturales, baja en sodio.',
      precio: 12.99,
      imagen: 'ruta/atun.jpg',
    },
    {
      nombre: 'Salchicha Mixta',
      descripcion: 'Combinación de mariscos y vegetales, sin conservantes.',
      precio: 15.99,
      imagen: 'ruta/mixta.jpg',
    },
    {
      nombre: 'Salchicha Vegetal',
      descripcion: 'Ideal para vegetarianos, alta en proteína.',
      precio: 14.99,
      imagen: 'ruta/vegetal.jpg',
    },
  ]

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0)

  const ProductCard = ({ nombre, descripcion, precio, imagen, onAgregar }) => (
    <div className="product-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${precio.toFixed(2)}</p>
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
            <li key={i}>
              {item.nombre} - ${item.precio.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
        <button>Realizar pedido</button>
      </div>
    </div>
  )
}

export default Catalogo
