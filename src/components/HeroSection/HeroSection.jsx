import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Gestioná tu concesionario como nunca antes</h1>
        <p>Software integral que automatiza ventas, inventario, documentos y Mercado Libre para maximizar ganancias.</p>
        <div className="hero-cta">
          <a href="https://wa.me/tunumero?text=Quiero%20una%20demo" className="hero-cta-primary">Solicitar Demo Gratis</a>
          <a href="#funcionalidades" className="hero-cta-secondary">Ver Funcionalidades</a>
        </div>
        {/* Características rápidas en hero */}
        <div className="hero-features">
          <div className="hero-feature-item">Integración Mercado Libre TOP</div>
          <div className="hero-feature-item">Documentos automáticos</div>
          <div className="hero-feature-item">Análisis de rentabilidad</div>
          <div className="hero-feature-item">CRM avanzado</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;