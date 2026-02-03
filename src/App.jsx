import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import FloatingWhatsAppButton from "./components/Whatsapp/Whatsapp";
import FeaturesSection from "./components/FeaturesSection/FeatureSection";
import FaqSection from "./components/Faq/FaqSection";
import FeatureHighlight from "./components/FeatureHighlight/FeatureHighlight";
import { BarChart3, LayoutDashboard } from 'lucide-react';
import ConcesionariosPreview from "./components/ConcesionariosPreview/ConcesionariosPreview";
import PlanesSection from "./components/PlanesSection/PlanesSection";

function App() {
  return (
    <>
      {/* SEO base de la home */}
      <HelmetProvider>
        <Helmet>
          <title>Droxum | Software para concesionarios | Digitaliza tu concesionario</title>
          <meta name="description" content="Software integral para concesionarios: integra Mercado Libre, genera documentos automáticos, CRM, rentabilidad por vehículo y más. Demo gratis en Oncativo, Córdoba." />
          <meta name="keywords" content="software concesionarios, gestión stock autos, integración Mercado Libre concesionarios, software automotriz Argentina, CRM concesionarios, rentabilidad vehículos" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://tudominio.com/" />
          {/* Open Graph para redes */}
          <meta property="og:title" content="Software para Concesionarios - Maximiza Ganancias" />
          <meta property="og:description" content="..." />
          <meta property="og:image" content="https://tudominio.com/imagenes/og-image.jpg" />
          <meta property="og:url" content="https://tudominio.com/" />
          <meta property="og:type" content="website" />
        </Helmet>
      <a href="#main" className="skip-link">Saltar al contenido</a>

      <header>
        <Navbar />
      </header>
      <main id="main">
        <section id="home" >
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="modelos">
          <ConcesionariosPreview />
        </section>
        <section className="features-highlights">
          <FeatureHighlight
            icon={<BarChart3 size={64} color="#00d4ff" />}
            title="Análisis y Rentabilidad"
            description="Tomá decisiones basadas en números reales, no en intuición."
            benefits={[
              'Control de ingresos de vehiculos',
              'Control de estados del vehiculo para un mayor seguimiento',
              'Actualizacion de gastos realiados a cada vehiculo',           
            ]}
            imageUrl="/img/gestionvehiculos.JPG" // ← Poné tu URL aquí
          />
          <FeatureHighlight
            icon={<LayoutDashboard size={64} color="#a78bfa" />}
            title="Dashboard de Control Total"
            description="Todo el concesionario en un solo lugar, accesible desde cualquier dispositivo."
            benefits={[
              'Rentabilidad por vehículo (ganancia neta automática)',
              'Control de costos fijos y ganancias globales',
              'Reportes mensuales y dashboards claros',
              'Alertas inteligentes (baja rotación, costos altos)',
            ]}
            imageUrl="/img/dashboard.JPG" // ← Poné tu URL aquí
            reverse={true}// ← Esto invierte: imagen izquierda, texto derecha
          />
          {/* Agregá más bloques según necesites */}
        </section>
        <section id="planes">
          <PlanesSection />
        </section>
        {/*<section id="carousel">
          <Carousel />
        </section>*/}
        <section id="faq">
          <FaqSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      <FloatingWhatsAppButton />
      </HelmetProvider>
    </>
  );  
}

export default App;