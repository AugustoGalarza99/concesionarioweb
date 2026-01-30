import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import agendasmart from "../../assets/agendasmart.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      role="navigation"
    >
      <div className="navbar-container">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="logo"
          aria-label="Logo de AgendaSmart"
        >
          <motion.img
            className="navbar-logo"
            src={agendasmart}
            alt="AgendaSmart Logo"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        </Link>
        <motion.div
          className="menu-icon"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <FaTimes className="icon" />
          ) : (
            <FaBars className="icon" />
          )}
        </motion.div>
        <motion.ul
          className={`nav-menu ${isOpen ? "active" : ""}`}
          initial={isOpen ? { x: "100%" } : { x: 0 }}
          animate={isOpen ? { x: 0 } : { x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {[
            { to: "home", label: "Inicio" },
            { to: "features", label: "Características" },
            { to: "carousel", label: "Nuestra App" },
            { to: "faq", label: "Preguntas Frecuentes" },
            { to: "plans", label: "Planes" },
            { to: "footer", label: "Contacto" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="nav-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                activeClass="nav-menu-active"
                aria-current={item.to === "home" ? "page" : undefined}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.a
          href="https://wa.me/3572674920"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          aria-label="Contáctanos vía WhatsApp"
        >
          Contáctanos
        </motion.a>
      </div>
    </motion.nav>
  );
}

export default Navbar;