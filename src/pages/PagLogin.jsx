import React from 'react';
import "../styles/Login.css";

function PagLogin() {
  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
    </div>
  );
}

export default PagLogin;
