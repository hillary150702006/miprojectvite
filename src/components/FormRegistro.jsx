import { Link, useNavigate } from "react-router-dom"
import "../styles/Registro.css"
import React, { useEffect, useState } from 'react';
import { postData } from "../services/fetch";


function FormRegistro() {
  const [correoUsuario,setCorreoUsuario] = useState("")
  const [nombreCompleto,setNombreCompleto] = useState("")
  const [nombreUsuario,setNombreUsuario] = useState("")
  const [claveUsuario,setClave] = useState("")

  const navigate = useNavigate();

  async function agregarUsuario() {
      const objUsuario = {
        correo:correoUsuario,
        nombreCompleto:nombreCompleto,
        usuario:nombreUsuario,
        clave:claveUsuario
      }
      try {
        await postData("usuarios",objUsuario)
        if(localStorage.getItem('pendingOrder') === 'true' || localStorage.getItem('carrito')){
          localStorage.setItem('usuario', JSON.stringify(objUsuario));
          localStorage.removeItem('pendingOrder');
          navigate('/carrito-pago');
        } else {
          alert('Registro exitoso.');
        }
      } catch (error) {
        alert('Error en el registro: ' + error.message);
      }
  }

  return (
    <div className='divregistro'>
    
      <div className='registroUsuarios'>
        <h3 className="tituloh3">Registrate</h3>
        <input type="text" placeholder='teléfono o correo electrónico' onChange={(e)=>setCorreoUsuario(e.target.value)} /><label htmlFor="email"></ label>

        <input type="text" placeholder='Nombre Completo' onChange={(e)=>setNombreCompleto(e.target.value)} /> <label htmlFor="nombreCompleto"></label>

        <input type="text" placeholder='Nombre usuario' onChange={(e)=>setNombreUsuario(e.target.value)}/> <label htmlFor="nombreUsuario"></label>

        <input type="text" placeholder='contraseña' onChange={(e)=>setClave(e.target.value)}/> <label htmlFor="contraseña"></label>

        <button type='button' onClick={agregarUsuario}>Registrarse</button>
        <Link to="/login">iniciar sesión</Link>
      </div>
    </div>
  )
}

export default FormRegistro
