import React from 'react';
import { ExternalLink } from 'lucide-react';
import './ConcesionariosPreview.css';

const concesionarios = [
  {
    id: 1,
    title: 'Ejemplo de página web para concesionario (diseño claro)',
    description: 'Diseño moderno y modificable al gusto de cada concesionario.',
    imageUrl: '/img/dromux.png', // ← Cambia por tu screenshot en /public/img/
    url: 'https://concesionario-a.tudominio.com', // ← URL real del sitio
    alt: 'Ejemplo de página web para concesionario con catálogo de vehículos creada con Dromux',
  },
  {
    id: 2,
    title: 'Ejemplo de página web para concesionario (diseño oscuro)',
    description: 'Estilo premium y modificable al gusto de cada concesionario.',
    imageUrl: '/img/dromux.png', // ← Cambia por tu screenshot
    url: 'https://concesionario-b.tudominio.com', // ← URL real
    alt: 'Ejemplo de página web para concesionario con catálogo de vehículos creada con Dromux',
  },
];

const ConcesionariosPreview = () => {
  return (
    <section className="concesionarios-preview" id="concesionarios">
      <div className="container">
        <div className="section-header">
          <h2>Ejemplos de páginas web para concesionarios con Dromux</h2>
          <p>
            Mirá ejemplos reales de sitios web de concesionarios con catálogo de vehículos online, diseñados y gestionados desde Dromux.
          </p>
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