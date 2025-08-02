import React from 'react';
import { Instagram, MessageSquareHeart, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo-container">
              <a href="/">
                <img
                  width="240px"
                  height="auto"
                  src="./logo.png"
                  alt="Luzé Rugs Logo"
                  className="logo-image"
                />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Información</h4>
            <div className="footer-info">
              <div className="footer-info-item">
                <MapPin size={18} />
                <span>San Justo, Santa Fe</span>
              </div>
              <div className="footer-info-item">
                <Clock size={18} />
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="footer-links">
              <a
                href="https://wa.me/543498528087?text=Hola Luzé! me gustaría conocer más sobre sus alfombras artesanales."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <MessageSquareHeart size={18} />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/luze.rugs"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Luzé Alfombras Artesanales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;