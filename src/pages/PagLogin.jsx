import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";
import { getData } from '../services/fetch';

function PagLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Email input:", email);
      console.log("Password input:", password);
      const users = await getData('usuarios');
      console.log("Users fetched:", users);

      
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedPassword = password.trim();
      const user = users.find(u => u.correo.toLowerCase() === trimmedEmail && u.clave === trimmedPassword);
      if (user) {

        const userData = {
          nombreCompleto: user.nombreCompleto,
          usuario: user.usuario,
          correo: user.correo,
          foto: null
        };
        localStorage.setItem('usuario', JSON.stringify(userData));
        alert('Inicio de sesión exitoso.');
        navigate('/perfil');
      } else {
        alert('Correo o contraseña incorrectos.');
      }
    } catch (error) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
    </div>
  );
}

export default PagLogin;
