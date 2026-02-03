import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FaqSection.css';

const faqItems = [
  {
    question: '¿Cuánto cuesta el software por mes?',
    answer:
      '• El precio se adapta completamente según el tamaño del concesionario, cantidad de vehículos que manejás, cantidad de usuarios y módulos que necesites.\n\n' +
      '• Los valores parten desde $70.000 mensuales para concesionarios pequeños/medianos.\n' +
      '• Tambien tenemos la opcion de un pago unico inicial mas un mantenimiento mensual.\n' +
      '• Lo mejor es que charlemos 10 minutos para entender tu caso puntual y te pueda pasar un valor exacto y realista.',
  },
  {
    question: '¿Puedo tener mi propia página web de vehículos?',
    answer:
      'Sí, es una de las funcionalidades más valoradas.\n\n' +
      'El sistema genera y mantiene automáticamente una web personalizada con:\n' +
      '• Tu logo y colores\n' +
      '• Todos los vehículos publicados con fotos y ficha completa\n' +
      '• Banners personalizables\n' +
      'Y se actualiza en tiempo real cada vez que cargás/modificás un vehículo.',
  },
  {
    question: '¿Cuánto tiempo lleva implementar el sistema?',
    answer:
      '• Por lo general el software queda listo dentro de los 2 a 5 dias habiles.\n' +
      '• Carga inicial de vehículos y configuración → nosotros te ayudamos.\n' +
      '• Training para tu equipo → 1 o 2 sesiones (presencial o remoto).\n\n' +
      'La idea es que puedas estar operando con todo el sistema lo más rápido posible.',
  },
  {
    question: '¿Funciona en celular / tablet?',
    answer:
      '• Sí, 100% responsive.\n\n' +
      '• Todo el sistema (incluido el dashboard de administrador, carga de vehículos, consulta de stock, reportes, etc.) está optimizado para verse y usarse muy bien desde celular y tablet.\n' +
      '• Muchos titulares y vendedores usan el sistema diariamente desde el celular.',
  },
  {
    question: '¿Hay costo de implementación o de alta?',
    answer:
      '• En la gran mayoría de los casos no cobramos costo de implementación ni alta.\n\n' +
      '• Se cobrara el costo de implementacion si decide hacer el pago unico.\n\n' +
      '• Solo en casos muy particulares (migración de base de datos muy grande, personalizaciones muy específicas o training intensivo onsite) podríamos cobrar un monto aparte, pero siempre lo conversamos y acordamos antes.',
  },
  {
    question: '¿Me ayudan a cargar los vehículos la primera vez?',
    answer:
      'Sí, te acompañamos.\n\n' +
      'Podemos ayudarte a:\n' +
      '• Cargar la primera tanda de vehículos\n' +
      '• Enseñarte el proceso para que lo hagas rápido vos mismo\n',
  },
  {
    question: '¿Tienen soporte en Argentina? ¿En qué horario?',
    answer:
      'Sí, soporte 100% argentino.\n\n' +
      '• Horario habitual: Lunes a viernes 8 a 19 hs\n' +
      '• Canal principal: WhatsApp (respuesta muy rápida)\n' +
      '• También: llamadas, reuniones por Meet/Zoom y correo\n\n' +
      'Nos tomamos muy en serio que puedas trabajar tranquilo.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="preguntas">
      <div className="faq-container">
        <div className="faq-section-header">
          <h2>Preguntas frecuentes</h2>
          <p>Resolvemos las dudas más comunes antes de que nos hables</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              <div className="faq-answer">
                {item.answer.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>¿Tu duda no está aquí?</p>
          <a
            href="https://wa.me/5493572674920?text=Hola%21%20Tengo%20una%20consulta%20sobre%20el%20software%20para%20concesionarios..."
            target="_blank"
            rel="noopener noreferrer"
            className="faq-cta-button"
          >
            Hablá con nosotros ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;