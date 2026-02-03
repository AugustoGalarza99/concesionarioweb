import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import './PlanesSection.css';

const plans = [
  {
    name: 'Básico',
    //subtitle: '1 mes de prueba gratuita',
    popular: false,
    features: [
      { name: 'Usuarios', value: 'Hasta 3', included: true },
      { name: 'Unidades publicadas', value: 'Hasta 20', included: true },
      { name: 'Branding', value: 'Básico', included: true },
      { name: 'Dashboards', value: 'Completo', included: true },
      { name: 'Soporte', value: 'WhatsApp', included: true },
      { name: 'Hosting incluido', value: '✓', included: true },
      { name: 'Dominio .com', value: '✓', included: true },
      { name: 'Gestión de stock', value: '✓', included: true },
      { name: 'Gestión de compras', value: '✓', included: true },
      { name: 'Gestión de ventas y leads', value: '✓', included: true },
      { name: 'Implementación', value: '(Bonificado)', included: true, highlight: true },
    ],
    ctaText: 'Consultar Precio',
    buttonVariant: 'primary',
  },
  {
    name: 'Intermedio',
    //subtitle: '1 mes de prueba gratuita',
    popular: true,
    features: [
      { name: 'Usuarios', value: 'Hasta 5', included: true },
      { name: 'Unidades publicadas', value: 'Hasta 50', included: true },
      { name: 'Branding', value: 'Intermedio', included: true },
      { name: 'Dashboards', value: 'Completo', included: true },
      { name: 'Soporte', value: 'WhatsApp', included: true },
      { name: 'Hosting incluido', value: '✓', included: true },
      { name: 'Dominio .com', value: '✓', included: true },
      { name: 'Gestión de stock', value: '✓', included: true },
      { name: 'Gestión de compras', value: '✓', included: true },
      { name: 'Gestión de ventas y leads', value: '✓', included: true },
      { name: 'Implementación', value: '(Bonificado)', included: true, highlight: true },
    ],
    ctaText: 'Elegir plan',
    buttonVariant: 'popular',
  },
  {
    name: 'Premium',
    //subtitle: '1 mes de prueba gratuita',
    popular: false,
    features: [
      { name: 'Usuarios', value: 'Hasta 8', included: true },
      { name: 'Unidades publicadas', value: 'Hasta 100', included: true },
      { name: 'Branding', value: 'Customizable', included: true },
      { name: 'Dashboards', value: 'Completo', included: true },
      { name: 'Soporte', value: 'WhatsApp con prioridad', included: true },
      { name: 'Hosting incluido', value: '✓', included: true },
      { name: 'Dominio .com', value: '✓', included: true },
      { name: 'Gestión de stock', value: '✓', included: true },
      { name: 'Gestión de compras', value: '✓', included: true },
      { name: 'Gestión de ventas y leads', value: '✓', included: true },
      { name: 'Implementación', value: '(Bonificado)', included: true, highlight: true },
    ],
    ctaText: 'Consultar Precio',
    buttonVariant: 'primary',
  },
];

const PlanesSection = () => {
  return (
    <section className="planes-section" id="precios">
      <div className="container">
        <div className="section-header">
          <h2>Elegí el plan perfecto para tu concesionario</h2>
          <p>Prueba gratuita de 1 mes en todos los planes. Implementación bonificada y sin contrato mínimo.</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)' }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>★ Más popular</span>
                </div>
              )}

              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>

              <ul className="plan-features">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className={`plan-feature ${feat.included ? 'included' : 'excluded'}`}
                  >
                    {feat.included ? (
                      <CheckCircle size={18} className="check-icon" />
                    ) : (
                      <XCircle size={18} className="cross-icon" />
                    )}

                    <span className="feat-label">{feat.name}:</span>

                    <span className={`feat-value ${feat.highlight ? 'highlight' : ''}`}>
                      {feat.value}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5493572674920?text=Hola%2C%20quiero%20consultar%20por%20el%20plan%20${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`plan-cta ${plan.buttonVariant}`}
              >
                {plan.ctaText}
              </a>
            </motion.div>
          ))}
        </div>

        {/*<p className="plans-note">
          Todos los planes incluyen 1 mes de prueba gratuita. Sin compromiso de permanencia ni costos ocultos.
        </p>*/}
      </div>
    </section>
  );
};

export default PlanesSection;