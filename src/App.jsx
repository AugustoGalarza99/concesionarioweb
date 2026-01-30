import React from "react";
import { Helmet } from "react-helmet-async";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Carousel from "./components/Carousel/Carousel";
import Plans from "./components/Plans/PlansSection";
import AlbumDeFotos from "./components/AlbumDeFotos/AlbumDeFotos";
import Footer from "./components/Footer/Footer";
import FloatingWhatsAppButton from "./components/Whatsapp/Whatsapp";
import FeaturesSection from "./components/FeaturesSection/FeatureSection";
import FaqSection from "./components/Faq/FaqSection";
import FeatureHighlight from "./components/FeatureHighlight/FeatureHighlight";
import { Globe, FileText } from 'lucide-react';

function App() {
  return (
    <>
      {/* SEO base de la home */}
      <Helmet>
        <title>Agenda Smart | Turnos online | Administra tu negocio</title>
        <meta
          name="description"
          content="Agenda Smart: agenda online para gestionar turnos y reservas, enviar recordatorios por WhatsApp, administrar finanzas, catálogo de productos e integración con Mercado Pago."
        />
        {/* En SPA con anclas (#home, #plans, etc.) lo ideal es canonical a la home sin hash */}
        <link rel="canonical" href="https://www.agendasmartapp.com/" />
      </Helmet>

      <a href="#main" className="skip-link">Saltar al contenido</a>

      <header>
        <Navbar />
      </header>

      <main id="main">
        <section id="home" style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
          <HeroSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section className="features-highlights">
          <FeatureHighlight
            icon={<Globe size={64} color="#00d4ff" />}
            title="Integración Total con Mercado Libre"
            description="Sincroniza automáticamente tu inventario, optimiza tus publicaciones para aparecer siempre en los primeros resultados y gestiona todas tus ventas desde un solo lugar."
            benefits={[
              "Publicación automática con fotos profesionales",
              "Estrategias de posicionamiento inteligente",
              "+45% más visualizaciones promedio",
              "Gestión sin mostrar competidores",
            ]}
            imageUrl="https://tu-dominio.com/imagenes/captura-mercado-libre.png" // ← Poné tu URL aquí
          />

          <FeatureHighlight
            icon={<FileText size={64} color="#a78bfa" />}
            title="Automatización de Documentos"
            description="Olvidate del papeleo manual. Genera automáticamente todos los documentos legales necesarios con plantillas personalizables y firma digital integrada."
            benefits={[
              "Boletos de compra-venta automáticos",
              "Contratos personalizables",
              "Presupuestos instantáneos",
              "Generado en 3 segundos",
              "Firma electrónica incluida",
            ]}
            imageUrl="https://tu-dominio.com/imagenes/captura-documentos.png" // ← Poné tu URL aquí
            reverse={true}// ← Esto invierte: imagen izquierda, texto derecha
          />

          {/* Agregá más bloques según necesites */}
        </section>

        {/*<section id="carousel">
          <Carousel />
        </section>*/}

        <section id="faq">
          <FaqSection />
        </section>

        {/*<AlbumDeFotos />*/}
      </main>

      <footer>
        <Footer />
      </footer>

      <FloatingWhatsAppButton />
    </>
  );
}

export default App;
