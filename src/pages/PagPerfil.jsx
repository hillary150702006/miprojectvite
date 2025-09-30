import React, { useState, useEffect } from 'react';

const PagPerfil = () => {
  const [usuario, setUsuario] = useState({
    nombreCompleto: '',
    usuario: '',
    correo: '',
    foto: null
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
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Mi Perfil</h2>
      {editando ? (
        <div>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            {usuario.foto ? (
              <img src={usuario.foto} alt="Foto de perfil" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            ) : (
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc', display: 'inline-block' }}></div>
            )}
          </div>
          <label>Foto de Perfil:</label>
          <input
            type="file"
            accept="image/*"
            onChange={manejarFoto}
            style={{ display: 'block', marginBottom: '10px' }}
          />
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombreCompleto"
            value={usuario.nombreCompleto}
            onChange={manejarCambio}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={usuario.usuario}
            onChange={manejarCambio}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={usuario.correo}
            onChange={manejarCambio}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <button onClick={guardarCambios} style={{ marginRight: '10px' }}>Guardar</button>
          <button onClick={() => setEditando(false)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            {usuario.foto ? (
              <img src={usuario.foto} alt="Foto de perfil" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            ) : (
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc', display: 'inline-block' }}></div>
            )}
          </div>
          <p><strong>Nombre Completo:</strong> {usuario.nombreCompleto}</p>
          <p><strong>Nombre de Usuario:</strong> {usuario.usuario}</p>
          <p><strong>Correo:</strong> {usuario.correo}</p>
          <button onClick={() => setEditando(true)}>Editar Perfil</button>
        </div>
      )}
    </div>
  );
};

export default PagPerfil;
