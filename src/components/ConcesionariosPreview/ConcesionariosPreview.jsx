import React from 'react';
import { ExternalLink } from 'lucide-react';
import './ConcesionariosPreview.css';

const concesionarios = [
  {
    id: 1,
    title: 'Modelo Concesionario Claro',
    description: 'Diseño moderno y modificable al gusto de cada concesionario.',
    imageUrl: '/img/droxum.png', // ← Cambia por tu screenshot en /public/img/
    url: 'https://concesionario-a.tudominio.com', // ← URL real del sitio
    alt: 'Vista previa del concesionario modelo A',
  },
  {
    id: 2,
    title: 'Modelo Concesionario Oscuro',
    description: 'Estilo premium y modificable al gusto de cada concesionario.',
    imageUrl: '/img/droxum.png', // ← Cambia por tu screenshot
    url: 'https://concesionario-b.tudominio.com', // ← URL real
    alt: 'Vista previa del concesionario modelo B',
  },
];

const ConcesionariosPreview = () => {
  return (
    <section className="concesionarios-preview" id="concesionarios">
      <div className="container">
        <div className="section-header">
          <h2>Explorá nuestros modelos de concesionarios</h2>
          <p>Elegí el diseño que mejor se adapta a tu negocio y probá la experiencia completa.</p>
        </div>

        <div className="preview-grid">
          {concesionarios.map((concesionario) => (
            <a
              key={concesionario.id}
              href={concesionario.url}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-card"
              aria-label={`Ver ${concesionario.title}`}
            >
              <div className="preview-image-container">
                <img
                  src={concesionario.imageUrl}
                  alt={concesionario.alt}
                  className="preview-image"
                  loading="lazy"
                />
              </div>

              <div className="preview-content">
                <h3>{concesionario.title}</h3>
                <p>{concesionario.description}</p>

                <div className="preview-button">
                  Ver sitio <ExternalLink size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcesionariosPreview;