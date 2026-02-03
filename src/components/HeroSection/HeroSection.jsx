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
          Gestioná tu concesionario como nunca antes
        </motion.h1>

        <motion.p variants={itemVariants}>
          Software integral que automatiza ventas, inventario, documentos para maximizar ganancias.
        </motion.p>

        <motion.div className="hero-cta" variants={ctaVariants}>
          <motion.a
            href="https://wa.me/5493572674920?text=Quiero%20una%20demo"
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
          >
            Ver Funcionalidades
          </motion.a>
        </motion.div>

        {/* Features rápidas con stagger */}
        <motion.div
          className="hero-features"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            'Digitaliza tu concesionario',
            'Gestión de ventas',
            'Análisis de rentabilidad por vehículo',
            'CRM avanzado',
          ].map((text, index) => (
            <motion.div
              key={index}
              className="hero-feature-item"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0, 212, 255, 0.2)' }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;