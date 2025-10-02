import React from 'react';
import { useNavigate } from 'react-router-dom';
import fondoInicio from '../assets/Images/fondo-inicio.png';

function Inicio() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/catalogo');
  };

  return (
    <div>
      <div className="seccion-bienvenida">
        <div 
          className="header-imagen"
          style={{ backgroundImage: `url(${fondoInicio})` }}
        />
        <div className="contenido-hero">
          <h1>Embutidos saludables que cuidan tu corazón</h1>
          <p>Descubre nuestra selección de productos naturales y nutritivos, perfectos para una dieta equilibrada y un estilo de vida saludable.</p>
          <button className="btn-explorar" onClick={handleExplore}>Explora el Catálogo</button>
        </div>
      </div>

    
      <section className="info-nutricional">
        <h2>Información Nutricional</h2>
        <div className="tabla-nutricional">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Calorías</th>
                <th>Proteínas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Salchicha de Atún</td>
                <td>120</td>
                <td>15g</td>
              </tr>
              <tr>
                <td>Salchicha Mixta</td>
                <td>180</td>
                <td>12g</td>
              </tr>
            </tbody>
          </table>
          <div className="notas-nutricionales">
            <span>Bajo en sodio</span>
            <span>Sin conservantes</span>
            <span>Alto en proteína</span>
          </div>
        </div>
      </section>

     
      <section className="blog-recetas">
        <h2>Desayunos</h2>
        <div className="recetas-grid">
          <div className="receta-card">
            <img src="https://i.pinimg.com/736x/44/7a/7b/447a7b0bc8c35eda15bbde781c90662d.jpg" alt="sandwich" />
            <h3>Croissant Sandwiches Recipe - cucina flavors</h3>
            <p>Un delicioso sándwich de atún para comenzar el día.</p>
            <button className="btn-leer-mas">Leer más</button>
          </div>
          <div className="receta-card">
            <img src="https://i.pinimg.com/736x/f0/ce/c6/f0cec64684ccd0eb51dbc7f3b20ffb00.jpg" alt="Almuerzo Delicioso" />
            <h3>Huevo con tocino y tostadas</h3>
            <p>dos tostadas doradas, un huevo frito con la yema intacta, sazonado con pimienta negra y decorado con cebollino picado, dos tiras de tocino crujiente y una porción de huevos revueltos..</p>
            <button className="btn-leer-mas">Leer más</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
