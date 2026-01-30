import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import "./Plans.css";

function Plans() {
  const [professionalCount, setProfessionalCount] = useState(1);

  const plans = [
    {
      title: "Plan Nivel 1",
      basePrice: 10000,
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuración de horarios", included: true },
        { name: "Recordatorios vía WhatsApp", included: true },
        { name: "Reprogramación de turnos", included: true },
        { name: "Link personalizado con el nombre de tu negocio", included: true },
        { name: "Soporte y mantenimiento de la APP", included: true },
        { name: "Consulta en tiempo real de la demora", included: false },
        { name: "Centro de control", included: false },
        { name: "Módulo de finanzas y turnos", included: false },
        { name: "Catálogo de productos", included: false },
        { name: "Consultoría profesional", included: false },
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Nivel 2",
      basePrice: 15000,
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuración de horarios", included: true },
        { name: "Recordatorios vía WhatsApp", included: true },
        { name: "Reprogramación de turnos", included: true },
        { name: "Link personalizado con el nombre de tu negocio", included: true },
        { name: "Soporte y mantenimiento de la APP", included: true },
        { name: "Consulta en tiempo real de la demora", included: true },
        { name: "Centro de control", included: false },
        { name: "Módulo de finanzas y turnos", included: false },
        { name: "Catálogo de productos", included: false },
        { name: "Consultoría profesional", included: false },
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Nivel 3",
      basePrice: 18000,
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuración de horarios", included: true },
        { name: "Recordatorios vía WhatsApp", included: true },
        { name: "Reprogramación de turnos", included: true },
        { name: "Link personalizado con el nombre de tu negocio", included: true },
        { name: "Soporte y mantenimiento de la APP", included: true },
        { name: "Consulta en tiempo real de la demora", included: true },
        { name: "Centro de control", included: true },
        { name: "Módulo de finanzas y turnos", included: true },
        { name: "Catálogo de productos", included: false },
        { name: "Consultoría profesional", included: false },
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Nivel 4",
      basePrice: null,
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuración de horarios", included: true },
        { name: "Recordatorios vía WhatsApp", included: true },
        { name: "Reprogramación de turnos", included: true },
        { name: "Link personalizado con el nombre de tu negocio", included: true },
        { name: "Soporte y mantenimiento de la APP", included: true },
        { name: "Consulta en tiempo real de la demora", included: true },
        { name: "Centro de control", included: true },
        { name: "Módulo de finanzas y turnos", included: true },
        { name: "Catálogo de productos", included: true },
        { name: "Consultoría profesional", included: true },
      ],
      buttonText: "Contactar",
      highlighted: true,
    },
  ];

  const calculateTotalPrice = (basePrice, count) => {
    if (basePrice === null) return "Consultar";
    const additionalCost = (basePrice * 0.7) * (count - 1); // 70% del basePrice por cada profesional adicional
    return `$${(basePrice + additionalCost).toLocaleString("es-AR", {
      minimumFractionDigits: 0,
    })} / mes`;
  };

  return (
    <section className="plans-container" id="plans">
      <motion.h2
        className="plans-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nuestros Planes
      </motion.h2>
      <motion.div
        className="plans-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`plan-card ${plan.highlighted ? "highlighted" : ""}`}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 15px rgba(0, 74, 173, 0.2)" }}
            tabIndex={0}
            aria-describedby={`plan-description-${index}`}
          >
            <div className="plan-header">
              <h3 className="plan-title">{plan.title}</h3>
              {/*{plan.highlighted && <span className="badge">Recomendado</span>}*/}
            </div>
            <div className="plan-price-container">
              <p className="plan-price">{calculateTotalPrice(plan.basePrice, professionalCount)}</p>
              {!plan.highlighted && (
                <div className="professional-counter">
                  <button
                    onClick={() => setProfessionalCount(Math.max(1, professionalCount - 1))}
                    aria-label="Disminuir cantidad de profesionales"
                  >
                    <FaMinus />
                  </button>
                  <span>{professionalCount} Profesional{professionalCount > 1 ? "es" : ""}</span>
                  <button
                    onClick={() => setProfessionalCount(professionalCount + 1)}
                    aria-label="Aumentar cantidad de profesionales"
                  >
                    <FaPlus />
                  </button>
                </div>
              )}
            </div>
            <motion.ul
              className="plan-features"
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {plan.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="plan-feature"
                  variants={featureVariants}
                >
                  <span className="icon-container">
                    {feature.included ? (
                      <FaCheck className="check-icon" aria-label="Característica incluida" />
                    ) : (
                      <FaTimes className="times-icon" aria-label="Característica no incluida" />
                    )}
                  </span>
                  <span className={feature.included ? "" : "strikethrough"}>
                    {feature.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              href={plan.highlighted ? "https://wa.me/3572674920" : "#"}
              target={plan.highlighted ? "_blank" : ""}
              rel={plan.highlighted ? "noopener noreferrer" : ""}
              className="plan-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              aria-label={`Elegir ${plan.title}`}
            >
              {plan.buttonText}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default Plans;