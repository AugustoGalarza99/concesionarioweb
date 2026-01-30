import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, BarChart3 } from 'lucide-react'; // Ejemplos de íconos - cambiá según necesites
import './FeatureHighlight.css';

// Ejemplo de uso - podés crear varios <FeatureHighlight /> en tu página
const FeatureHighlight = ({
  icon,
  title,
  description,
  benefits = [],
  imageUrl,
  reverse = false, // true para texto a la derecha, imagen a la izquierda
}) => {
  return (
    <motion.section
      className={`feature-highlight ${reverse ? 'reverse' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="feature-content">
        {/* Lado del texto */}
        <div className="feature-text">
          <div className="feature-icon-wrapper">{icon}</div>
          <h2 className="feature-title">{title}</h2>
          <p className="feature-description">{description}</p>

          {benefits.length > 0 && (
            <ul className="feature-benefits">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <span className="check">✓</span> {benefit}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Lado de la imagen */}
        <div className="feature-image-container">
          <motion.img
            src={imageUrl}
            alt={title}
            className="feature-image"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureHighlight;