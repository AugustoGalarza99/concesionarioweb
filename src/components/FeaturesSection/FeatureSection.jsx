import React from 'react';
import { motion } from 'framer-motion'; // Opcional: si no lo tenés, quitá motion y usa CSS fade-in
import { Car, Database, Users, BarChart3, LayoutDashboard, Globe, AlertTriangle,} from 'lucide-react';
import './FeatureSection.css';

const features = [
  {
    icon: <Car size={48} />,
    title: 'Gestión Completa de Inventario',
    description: 'Cargá, controlá y mové tus vehículos con precisión total.',
    benefits: [
      'Carga rápida de vehículos con fotos y specs detallados',
      'Control de stock en tiempo real (ingreso/egreso automático)',
      'Registro de costos reales (compra + gastos extras)',
      'Alertas de rotación baja y capital inmovilizado',
    ],
  },
  {
    icon: <Database size={48} />,
    title: 'Web Personalizada y Visibilidad',
    description: 'Convertí tu stock en una vidriera online atractiva y actualizada automáticamente.',
    benefits: [
      'Publicación automática de vehículos en tu sitio web personalizado',
      'Personalización de banners y secciones destacadas',
      'Diseño responsive y moderno para atraer más clientes',
    ],
  },
  {
    icon: <Users size={48} />,
    title: 'CRM y Seguimiento de Leads',
    description: 'Capturá y convertí cada potencial cliente sin perder ninguno.',
    benefits: [
      'Registro detallado de leads con fuente y estado',
      'Seguimiento personalizado (notas, llamadas, WhatsApp)',
      'Alertas de oportunidades calientes',
      'Historial completo para mejorar cierres',
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section" id="funcionalidades">
      <div className="features-container">
        <motion.div
          className="features-section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>El software que transforma tu concesionario</h2>
          <p>
            Olvidate de planillas y procesos manuales. Gestioná todo de forma inteligente, aumentá tus ventas y maximizá ganancias con herramientas diseñadas para el mercado automotriz.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="features-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="features-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul className="features-benefits-list">
                {feature.benefits.map((benefit, i) => (
                  <li key={i}>
                    <span className="features-check">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="features-cta-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>¿Querés ver cómo se adapta a tu concesionario?</p>
          <a
            href="https://wa.me/5493572674920?text=Hola%2C%20quiero%20una%20demo%20personalizada%20del%20software%20para%20concesionarios"
            className="features-cta-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedí tu Demo Gratis ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;