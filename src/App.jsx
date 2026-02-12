import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
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
        <title>Dromux | Software para Concesionarios en Argentina</title>
        <meta 
          name="description" 
          content="Dromux es el software para concesionarios que te permite gestionar stock de vehículos, ventas, clientes, gastos y rentabilidad desde un solo lugar. Pedí una demo." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dromux.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Dromux | Software para Concesionarios" />
        <meta property="og:description" content="Gestioná stock, ventas, clientes y rentabilidad con un solo sistema. Software profesional para concesionarios." />
        <meta property="og:url" content="https://dromux.com/" />
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
        <section id="funcionalidades">
          <FeaturesSection />
        </section>
        <section id="modelos">
          <ConcesionariosPreview />
        </section>
        <section className="features-highlights">
          <FeatureHighlight
            icon={<BarChart3 size={64} color="#00d4ff" />}
            title="Análisis y rentabilidad por vehículo"
            description="Controlá la rentabilidad real de tu concesionario con datos claros de ventas, gastos y márgenes por cada vehículo."
            benefits={[
              'Control de ingresos por vehículo vendido',
              'Seguimiento del estado de cada vehículo en stock',
              'Actualización automática de gastos asociados a cada unidad',
            ]}

            imageUrl="/img/gestionvehiculos.JPG" // ← Poné tu URL aquí
          />
          <FeatureHighlight
            icon={<LayoutDashboard size={64} color="#a78bfa" />}
            title="Dashboard de gestión para concesionarios"
            description="Visualizá en un solo panel todo tu concesionario: stock, ventas, gastos, rentabilidad y alertas clave en tiempo real."
            benefits={[
              'Rentabilidad por vehículo con ganancia neta automática',
              'Control de costos fijos y ganancias globales del concesionario',
              'Reportes mensuales claros y fáciles de entender',
              'Alertas inteligentes de baja rotación y costos elevados',
            ]}
            imageUrl="/img/dashboard.JPG" // ← Poné tu URL aquí
            reverse={true}// ← Esto invierte: imagen izquierda, texto derecha
          />
          {/* Agregá más bloques según necesites */}
        </section>
        <section id="planes">
          <PlanesSection />
        </section>
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