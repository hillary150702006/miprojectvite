import React, { useState, useEffect } from 'react';
import '../styles/PagPerfil.css';
import defaultProfile from '../assets/Images/default-profile.png';

const PagPerfil = () => {
  const [usuario, setUsuario] = useState({
    nombreCompleto: '',
    usuario: '',
    correo: '',
    foto: null,
  });
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  const guardarCambios = () => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    setEditando(false);
    alert('Perfil actualizado.');
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setUsuario(prev => ({ ...prev, [name]: value }));
  };

  const manejarFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUsuario(prev => ({ ...prev, foto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-background"></div>
      <h2>Mi Perfil</h2>
      {editando ? (
        <div className="edit-mode">
          <div className="profile-pic-container">
            {usuario.foto ? (
              <img src={usuario.foto} alt="Foto de perfil" className="profile-pic" />
            ) : (
              <img src={defaultProfile} alt="Foto de perfil por defecto" className="profile-pic" />
            )}
            <label htmlFor="fotoPerfil" className="edit-icon" title="Cambiar foto">📷</label>
            <input
              id="fotoPerfil"
              type="file"
              accept="image/*"
              onChange={manejarFoto}
              style={{ display: 'none' }}
            />
          </div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombreCompleto"
            value={usuario.nombreCompleto}
            onChange={manejarCambio}
          />
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={usuario.usuario}
            onChange={manejarCambio}
          />
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={usuario.correo}
            onChange={manejarCambio}
          />
          <button className="save-btn" onClick={guardarCambios}>Guardar</button>
          <button className="cancel-btn" onClick={() => setEditando(false)}>Cancelar</button>
        </div>
      ) : (
        <div className="view-mode">
          <div className="profile-pic-container">
            {usuario.foto ? (
              <img src={usuario.foto} alt="Foto de perfil" className="profile-pic" />
            ) : (
              <img src={defaultProfile} alt="Foto de perfil por defecto" className="profile-pic" />
            )}
          </div>
          <div className="profile-info">
            <p><strong>Nombre Completo:</strong> {usuario.nombreCompleto}</p>
            <p><strong>Nombre de Usuario:</strong> {usuario.usuario}</p>
            <p><strong>Correo:</strong> {usuario.correo}</p>
          </div>
          <button className="save-btn" onClick={() => setEditando(true)}>Editar Perfil</button>
        </div>
      )}
    </div>
  );
};

export default PagPerfil;
