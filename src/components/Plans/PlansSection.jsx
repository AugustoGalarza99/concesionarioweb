import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  PlusCircle,
  MinusCircle,
} from 'lucide-react';
import './PlansSection.css';

const PlansSection = () => {
  const [stockCount, setStockCount] = useState(1); // Cantidad de vehículos / tamaño del concesionario

  const plans = [
    {
      title: 'Básico',
      basePrice: 25000, // Ejemplo en ARS - ajustá según tu realidad
      features: [
        { name: 'Gestión de stock hasta 30 vehículos', included: true },
        { name: 'Publicación básica en Mercado Libre', included: true },
        { name: 'Documentos automáticos simples', included: true },
        { name: 'Soporte por email y WhatsApp', included: true },
        { name: 'Reportes básicos de ventas', included: true },
        { name: 'Integración ML TOP + optimización auto', included: false },
        { name: 'CRM avanzado con seguimiento de leads', included: false },
        { name: 'Firma digital y plantillas personalizadas', included: false },
        { name: 'Análisis de rentabilidad por vehículo', included: false },
        { name: 'Carga masiva y multi-sucursal', included: false },
      ],
      buttonText: 'Elegir Plan',
      highlighted: false,
    },
    {
      title: 'Profesional',
      basePrice: 45000,
      features: [
        { name: 'Gestión de stock hasta 100 vehículos', included: true },
        { name: 'Publicación básica en Mercado Libre', included: true },
        { name: 'Documentos automáticos simples', included: true },
        { name: 'Soporte por email y WhatsApp', included: true },
        { name: 'Reportes básicos de ventas', included: true },
        { name: 'Integración ML TOP + optimización auto', included: true },
        { name: 'CRM avanzado con seguimiento de leads', included: true },
        { name: 'Firma digital y plantillas personalizadas', included: true },
        { name: 'Análisis de rentabilidad por vehículo', included: false },
        { name: 'Carga masiva y multi-sucursal', included: false },
      ],
      buttonText: 'Elegir Plan',
      highlighted: true, // Recomendado
    },
    {
      title: 'Empresarial',
      basePrice: 80000,
      features: [
        { name: 'Stock ilimitado + multi-sucursal', included: true },
        { name: 'Publicación básica en Mercado Libre', included: true },
        { name: 'Documentos automáticos simples', included: true },
        { name: 'Soporte por email y WhatsApp', included: true },
        { name: 'Reportes básicos de ventas', included: true },
        { name: 'Integración ML TOP + optimización auto', included: true },
        { name: 'CRM avanzado con seguimiento de leads', included: true },
        { name: 'Firma digital y plantillas personalizadas', included: true },
        { name: 'Análisis de rentabilidad por vehículo', included: true },
        { name: 'Carga masiva y multi-sucursal', included: true },
      ],
      buttonText: 'Elegir Plan',
      highlighted: false,
    },
    {
      title: 'Personalizado',
      basePrice: null,
      features: [
        { name: 'Todo lo del Empresarial + módulos extras', included: true },
        { name: 'API personalizada e integraciones', included: true },
        { name: 'Training onsite y equipo dedicado', included: true },
        { name: 'SLA garantizado y soporte 24/7', included: true },
        { name: 'Reportes avanzados y custom', included: true },
        // Agregá más si querés
      ],
      buttonText: 'Contactar',
      highlighted: false,
    },
  ];

  const calculatePrice = (basePrice, count) => {
    if (basePrice === null) return 'Consultar precio';
    // Ejemplo: base + 60% por cada adicional (ajustá la lógica)
    const additional = (basePrice * 0.6) * (count - 1);
    const total = basePrice + additional;
    return `$${total.toLocaleString('es-AR')} / mes`;
  };

  const buildWhatsAppLink = (planTitle, count) => {
    const phone = '5493572674920'; // Tu número real
    const msg = `¡Hola! Quiero info del plan ${planTitle} para gestionar ${count} vehículo${count > 1 ? 's' : ''}.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="plans-section" id="precios">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Planes adaptados a tu concesionario
      </motion.h2>

      <motion.div
        className="plans-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.92 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
            }}
            whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
          >
            {plan.highlighted && (
              <div className="ribbon">Recomendado</div>
            )}

            <h3 className="plan-title">{plan.title}</h3>

            <div className="price-container">
              <p className="plan-price">{calculatePrice(plan.basePrice, stockCount)}</p>

              {plan.basePrice !== null && (
                <div className="counter">
                  <button
                    onClick={() => setStockCount(Math.max(1, stockCount - 1))}
                    aria-label="Reducir cantidad"
                  >
                    <MinusCircle size={24} />
                  </button>
                  <span>
                    {stockCount} vehículo{stockCount > 1 ? 's' : ''}
                  </span>
                  <button
                    onClick={() => setStockCount(stockCount + 1)}
                    aria-label="Aumentar cantidad"
                  >
                    <PlusCircle size={24} />
                  </button>
                </div>
              )}
            </div>

            <ul className="features-list">
              {plan.features.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {feat.included ? (
                    <CheckCircle className="included-icon" size={20} />
                  ) : (
                    <XCircle className="excluded-icon" size={20} />
                  )}
                  <span className={feat.included ? '' : 'excluded-text'}>
                    {feat.name}
                  </span>
                </motion.li>
              ))}
            </ul>

            <a
              href={buildWhatsAppLink(plan.title, stockCount)}
              target="_blank"
              rel="noopener noreferrer"
              className="plan-cta"
            >
              {plan.buttonText}
            </a>
          </motion.div>
        ))}
      </motion.div>

      <p className="note">
        ¿Necesitás algo diferente? Armamos planes a medida sin compromiso.
      </p>
    </section>
  );
};

export default PlansSection;