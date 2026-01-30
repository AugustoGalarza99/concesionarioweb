import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaCogs, FaChartLine, FaSmile, FaClock } from "react-icons/fa";
import "./InfoCards.css";

function InfoCards() {
  return (
    <motion.section
      className="info-cards"
      id="cards"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="info-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="info-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ¿Por qué elegir AgendaSmart?
        </motion.h2>
        <motion.p
          className="info-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Impulsamos tu éxito al siguiente nivel
        </motion.p>
      </motion.div>
      <motion.div
        className="cards-container"
        variants={containerVariants}
      >
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          tabIndex={0}
        >
          <h3 className="card-title">
            <motion.span className="icon-container" variants={iconVariants}>
              <FaCheckCircle aria-label="Simple" />
            </motion.span>
            Simple
          </h3>
          <p className="card-text">
            Diseñado para que cualquier usuario pueda gestionar sus tareas sin
            complicaciones. ¡Intuitivo desde el primer clic!
          </p>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          tabIndex={0}
        >
          <h3 className="card-title">
            <motion.span className="icon-container" variants={iconVariants}>
              <FaShieldAlt aria-label="Seguro" />
            </motion.span>
            Seguro
          </h3>
          <p className="card-text">
            Tus datos están protegidos con la última tecnología en seguridad.
            Prioridad total a tu privacidad.
          </p>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          tabIndex={0}
        >
          <h3 className="card-title">
            <motion.span className="icon-container" variants={iconVariants}>
              <FaCogs aria-label="Customizable" />
            </motion.span>
            Customizable
          </h3>
          <p className="card-text">
            Personaliza cada aspecto del sistema según tus necesidades. ¡Hazlo
            único y a tu medida!
          </p>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          tabIndex={0}
        >
          <h3 className="card-title">
            <motion.span className="icon-container" variants={iconVariants}>
              <FaChartLine aria-label="Mayor Productividad" />
            </motion.span>
            Mayor Productividad
          </h3>
          <p className="card-text">
            Automatizá la gestión de turnos y enfocate en lo importante.
          </p>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          tabIndex={0}
        >
          <h3 className="card-title">
            <motion.span className="icon-container" variants={iconVariants}>
              <FaSmile aria-label="Satisfacción del Cliente" />
            </motion.span>
            Satisfacción del Cliente
          </h3>
          <p className="card-text">
            Mejorá la experiencia con reservas fáciles y rápidas.
          </p>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          tabIndex={0}
        >
          <h3 className="card-title">
            <motion.span className="icon-container" variants={iconVariants}>
              <FaClock aria-label="Ahorro de Tiempo" />
            </motion.span>
            Ahorro de Tiempo
          </h3>
          <p className="card-text">
            Reducí el tiempo dedicado a la gestión administrativa.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

export default InfoCards;