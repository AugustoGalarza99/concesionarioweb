import React, { useEffect, useState } from "react";
import "./Whatsapp.css";

const PHONE = "5493572674920"; // sin el "+"
const FIXED_TEXT = encodeURIComponent(
  "¡Hola! 👋 Me gustaría hacer una consulta sobre los planes y precios."
);

const FloatingWhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Tooltip: aparece una vez al cargar y luego se oculta
  useEffect(() => {
    const t1 = setTimeout(() => setShowTooltip(true), 1000);
    const t2 = setTimeout(() => setShowTooltip(false), 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const link = `https://wa.me/${PHONE}?text=${FIXED_TEXT}`;

  return (
    <div className="whatsapp-fab" role="complementary" aria-label="Contacto por WhatsApp">
      <a
        href={link}
        className="whatsapp-fab__button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt=""
          className="whatsapp-fab__icon"
          loading="lazy"
          decoding="async"
        />
        <span className="whatsapp-fab__pulse" aria-hidden="true" />
      </a>

      <div className={`whatsapp-fab__tooltip ${showTooltip ? "is-visible" : ""}`}>
        ¿Necesitás ayuda? <strong>¡Escribime por WhatsApp!</strong>
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;
