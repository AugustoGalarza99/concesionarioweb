import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  // Variantes para animaciones reutilizables
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre hijos
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Software de gestión para concesionarios
        </motion.h1>

        <motion.p variants={itemVariants}>
          Dromux es un software de gestión para concesionarios de autos que te permite controlar el stock de vehículos, las ventas, los clientes, los gastos y la rentabilidad en un solo sistema online, simple y pensado para el mercado automotriz.
        </motion.p>

        <motion.div className="hero-cta" variants={ctaVariants}>
          <motion.a
            href="https://wa.me/5493572674920?text=Hola%2C%20quiero%20informacion%20del%20software"
            className="hero-cta-primary"
            whileHover="hover"
            variants={ctaVariants}
          >
            Asesorate ahora
          </motion.a>

          <motion.a
            href="#funcionalidades"
            className="hero-cta-secondary"
            whileHover="hover"
            variants={ctaVariants}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("funcionalidades");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Ver Funcionalidades
          </motion.a>
        </motion.div>

        {/* Features rápidas con stagger */}

      </motion.div>
    </section>
  );
};

export default HeroSection;