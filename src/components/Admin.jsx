import React from 'react';

function Admin() {

    return (
      <div>
    
      <h2>Diamante Azul</h2>
      <form>
        <label>
          Nombre:
          <input type="text" placeholder='nombre' onChange={(e)=>setnombre(e.target.value)}required />
        </label>
        <br />
        <label>
          Descripción:
          <textarea placeholder='descripcción'  onChange={(e)=>setdescripcción(e.target.value)}required/>
        </label>
        <br />
        <label>
          Precio:
          <input type="number" placeholder='precio' onChange={(e)=>setnombre(e.target.value)}required />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>

      <h3>Productos guardados</h3>
    
    </div>


)
}


export default Admin
