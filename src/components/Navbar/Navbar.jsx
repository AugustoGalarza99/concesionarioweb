import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Detectar sección visible y actualizar link activo
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px', // Ajusta para que detecte antes de llegar al centro
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Scroll suave al hacer click
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'funcionalidades', label: 'Funcionalidades' },
    { id: 'modelos', label: 'Modelos' },
    { id: 'planes', label: 'Planes' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" onClick={closeMenu}>
            <img src="/img/dromux-blanco.png" alt="Dromux Motors" className="navbar-logo-img" />
          </a>
        </div>

        {/* Links desktop */}
        <ul className="navbar-links desktop">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5493572674920?text=Hola%2C%20quiero%20una%20demo"
          className="navbar-cta-button desktop"
        >
          Contacto
        </a>

        {/* Hamburguesa mobile */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'open' : ''} />
          <span className={isOpen ? 'open' : ''} />
          <span className={isOpen ? 'open' : ''} />
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="navbar-mobile-menu-content">
          <ul className="navbar-links mobile">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5493572674920?text=Hola%2C%20quiero%20una%20demo"
            className="navbar-cta-button navbar-mobile-cta"
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