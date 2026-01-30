import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import image1 from "../../assets/fotobanner1.png";
import image2 from "../../assets/fotobanner2.png";
import image3 from "../../assets/fotobanner3.png";
import image4 from "../../assets/fotobanner4.png";
import image5 from "../../assets/fotobanner5.png";
import image6 from "../../assets/fotobanner6.png";
import image7 from "../../assets/fotobanner7.png";
import image8 from "../../assets/fotobanner8.png";
import image9 from "../../assets/fotobanner9.png";
import image10 from "../../assets/fotobanner10.png";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Añadido para dinamismo
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false, // Oculta flechas en móviles
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const images = [
    { src: image1, alt: "Captura de gestión de tareas" },
    { src: image2, alt: "Captura de recordatorios inteligentes" },
    { src: image3, alt: "Captura de colaboración en equipo" },
    { src: image4, alt: "Captura de compatibilidad móvil" },
    { src: image5, alt: "Captura de personalización" },
    { src: image6, alt: "Captura de interfaz de usuario" },
    { src: image7, alt: "Captura de notificaciones" },
    { src: image8, alt: "Captura de panel de control" },
    { src: image9, alt: "Captura de integración" },
    { src: image10, alt: "Captura de estadísticas" },
  ];

  return (
    <section className="carousel-container" id="carousel">
      <motion.h2
        className="carousel-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explora nuestra App
      </motion.h2>
      <Slider {...settings} aria-label="Carrusel de capturas de la aplicación">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="carousel-slide"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="carousel-image"
              loading="lazy"
            />
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}

export default Carousel;