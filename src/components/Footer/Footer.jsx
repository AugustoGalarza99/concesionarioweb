import React from 'react';
import './Footer.css';
import { Facebook, Instagram, MessageCircle, Mail, MapPin,} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        {/* Sección de marca / descripción */}
        <div className="footer-brand">
          <h3 className="footer-logo">Dromux</h3>
          <p className="footer-description">
            Dromux es un software para concesionarios en Argentina que te permite gestionar stock, ventas, clientes y rentabilidad desde un solo sistema.
          </p>
        </div>

        {/* Sección de contacto */}
        <div className="footer-contact">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin className="footer-icon" size={20} />
              <span>Oncativo, Córdoba, Argentina</span>
            </li>
            <li>
              <MessageCircle className="footer-icon" size={20} />
              <a
                href="https://wa.me/5493572674920"
                target="_blank"
                rel="noopener noreferrer"
              >
                +54 9 3572 674920
              </a>
            </li>
            <li>
              <Mail className="footer-icon" size={20} />
              <a href="mailto:tuemail@dominio.com">tuemail@dominio.com</a> {/* Cambiá por tu email real */}
            </li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="footer-social">
          <h4 className="footer-subtitle">Seguinos</h4>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/tu-perfil" // Cambiá por tu link real
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="social-icon" size={24} />
            </a>
            <a
              href="https://www.instagram.com/tu-usuario/" // Cambiá por tu link real
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="social-icon" size={24} />
            </a>
            <a
              href="https://wa.me/5493572674920"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="social-icon" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright y legal */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} Dromux. Software para concesionarios en Argentina.
        </p>
      </div>
    </footer>
  );
};

export default Footer;