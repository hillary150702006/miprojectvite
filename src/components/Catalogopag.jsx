import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Catalogo.css'
import { postData } from '../services/fetch'

function Catalogo() {
  const navigate = useNavigate();

  const productos = [
    {
      nombre: 'Burrito hecho con salchichas de atún y especias',
      descripcion: 'Hecha con atún y especias naturales, baja en sodio.',
      precio: 5495,
      imagen: 'https://i.pinimg.com/736x/ce/0f/e5/ce0fe5d7b439916dd23f289570bd542a.jpg',
    },
    {
      nombre: 'Salchicha Mixta con vegetales',
      descripcion: 'Combinación de mariscos y vegetales, sin conservantes.',
      precio: 3995,
      imagen: 'https://i.pinimg.com/1200x/29/d1/c9/29d1c9a5052bd44d5f08e366b1355ff2.jpg',
    },
    {
      nombre: 'Salchicha Vegetal para veganos',
      descripcion: 'Ideal para vegetarianos, alta en proteína.',
      precio: 4495,
      imagen: 'https://i.pinimg.com/1200x/c7/96/f8/c796f80e8089595b2304c7c16ec51e09.jpg',
    },
    {
      nombre: 'Almuerzo Mariscos',
      descripcion: 'Deliciosa mezcla de mariscos frescos.',
      precio: 5995,
      imagen: 'https://i.pinimg.com/1200x/5e/f7/5c/5ef75cc2956143e57f282a90359cd7ee.jpg',
    },
    {
      nombre: 'Salchichas arregladas',
      descripcion: 'Atún de alta calidad con especias selectas.',
      precio: 6995,
      imagen: 'https://i.pinimg.com/736x/13/a8/5c/13a85c7fb2bff931d706ad44eb64d2f4.jpg',
    },

    {
      nombre: 'Arroz con pollo',
      descripcion: 'Un platillo de arroz con pollo y vegetales',
      precio: 5200,
      imagen: 'https://i.pinimg.com/1200x/3a/3a/82/3a3a8206a0eb3f5e3c7c029619ab866d.jpg',
    },
     {
      nombre: 'Desayuno Tico',
      descripcion: 'Nuestro platillo tico un delicioso pinto con huevo y plátano',
      precio: 2500,
      imagen: 'https://i.pinimg.com/1200x/25/35/53/25355361399bec9ea6217410eb1111d2.jpg',
    },

  {
      nombre: 'Empanadas Gluten Free',
      descripcion: 'Nuestras deliciosas empanadas libre de gluten, bajas en sodio son una opción saludable para vos',
      precio: 1500,
      imagen: 'https://i.pinimg.com/1200x/20/58/70/205870a01b9c36cf9fbb90a558ce5e0d.jpg',
    },
     {
      nombre: 'Pizza',
      descripcion: 'Tenemos opciones de pizza libres de gluten , bajas en sodio , libre de grasas trans al horno con ingredientes naturales y deliciosos',
      precio: 7500,
      imagen: 'https://i.pinimg.com/736x/11/72/9f/11729fd2095cb8b87209b0b4cb182684.jpg',
    },
     {
      nombre: 'Receta de Pizza Vegana Gourmet Crocante',
      descripcion: 'Pizza vegana ideal para personas que quieren disfrutar sin remordimientos , con un sabor delicioso hecha al horno , libre de gluten , grasas trans, hecha de harina de almendra 100% natural',
      precio: 6500,
      imagen: 'https://i.pinimg.com/1200x/5c/a6/43/5ca6431cb6e7194dcbc215f069353fb1.jpg',
    },
    {
      nombre: 'Hamburguesa con papas',
      descripcion: 'Hamburguesas libres de gluten , cocinadas con aceite de oliva y papas hechas al air friyer , altas en proteína opción de carne , pollo o filete de pescado',
      precio: 3500,
      imagen: 'https://i.pinimg.com/736x/dd/30/be/dd30be04b3e63bec8e13c758510df833.jpg',
    },
    {
      nombre: 'Burritos',
      descripcion: 'Tenemos burritos veganos y tradicionales hecho de atún , pollo, o filete de pescado ',
      precio: 2550,
      imagen: 'https://i.pinimg.com/1200x/7c/67/f0/7c67f09dcce66d5b62de4bc78db7742d.jpg',
    },
  ]

  const [carrito, setCarrito] = useState([]);
  const [pendingOrder, setPendingOrder] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productos);

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    const pending = localStorage.getItem('pendingOrder') === 'true';
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
    setPendingOrder(pending);
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
      setPendingOrder(true);
      navigate('/registro');
    } catch (error) {
      alert('Error al realizar el pedido: ' + error.message);
    }
  };

  const handleSearch = () => {
    const filtered = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
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
      <h2>Catálogo de Almuerzos y desayunos</h2>
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
          <div style={{ backgroundColor: '#fffae6', padding: '10px', marginBottom: '10px', borderRadius: '5px', color: '#665c00' }}>
            Tienes un pedido pendiente. Por favor completa el proceso de pago.
            <button
              style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
              onClick={() => {
                localStorage.removeItem('pendingOrder');
                setPendingOrder(false);
                setCarrito([]);
                localStorage.removeItem('carrito');
              }}
            >
              Cancelar pedido pendiente
            </button>
          </div>
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
