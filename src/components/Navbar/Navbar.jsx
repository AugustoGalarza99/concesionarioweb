import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/" onClick={closeMenu}>
            TuSoftware <span>Concesionarios</span>
          </a>
        </div>

        {/* Desktop links */}
        <ul className="nav-links desktop">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#funcionalidades">Funcionalidades</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#precios">Precios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* CTA desktop */}
        <a href="https://wa.me/tunumero?text=Hola%2C%20quiero%20una%20demo" className="cta-button desktop">
          Contacto
        </a>

        {/* Hamburguesa mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </div>
      </div>

      {/* Menú móvil overlay */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="nav-links mobile">
            <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#funcionalidades" onClick={closeMenu}>Funcionalidades</a></li>
            <li><a href="#clientes" onClick={closeMenu}>Clientes</a></li>
            <li><a href="#precios" onClick={closeMenu}>Precios</a></li>
            <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
          </ul>
          <a 
            href="https://wa.me/tunumero?text=Hola%2C%20quiero%20una%20demo" 
            className="cta-button mobile-cta"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;