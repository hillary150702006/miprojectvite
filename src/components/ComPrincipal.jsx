import React from 'react'

function ComPrincipal() {
  return (
    <div className='menuprincipal'>
      <h1>Bienvenidos a Diamante Azul</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Comidas">Catálogo</Link></li>
        <li><Link to="/Recetas">Recetas</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        
      </ul>
      </div>

    
  )
}

export default ComPrincipal
