import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="contenedor-pie">
        <div className="seccion-contacto">
          <h3>Información de Contacto</h3>
          <p>Email: <a href="mailto:contacto@diamanteazul.com">contacto@diamanteazul.com</a></p>
          <p>Teléfono: +506 2230 2212</p>
        </div>
        
        <div className="seccion-enlaces">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/politica-privacidad">Política de Privacidad</a></li>
            <li><a href="/terminos-servicios">Términos de Servicios</a></li>
          </ul>
        </div>
        
        <div className="seccion-redes">
          <h3>Síguenos</h3>
          <div className="logos-redes">
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram className="icono-red" size={24} />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="icono-red" size={24} />
            </a>
            <a href="https://www.tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </div>
        </div>
        
        <div className="seccion-creditos">
          <p>Créditos del diseño por <strong>Diamante Azul Team</strong></p>
        </div>
      </div>
      
      <div className="derechos-autor">
        <p>&copy; 2025 Diamante Azul. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
