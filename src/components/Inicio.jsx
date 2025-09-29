import React from 'react';
import { useNavigate } from 'react-router-dom';
import fondoInicio from '../assets/Images/fondo-inicio.png';

function Inicio() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/catalogo');
  };

  return (
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
  );
}

export default Inicio;
