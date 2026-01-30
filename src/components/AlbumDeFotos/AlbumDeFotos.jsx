import { useState } from "react";
import "./AlbumDeFotos.css"; // Importar estilos

const AlbumDeFotos = () => {
  const [proyectos] = useState([
    {
      nombre: "",
      imagenes: 
      [ "/img/proyectos/modelo/fotobanner1.png",
        "/img/proyectos/modelo/fotobanner2.png",
        "/img/proyectos/modelo/fotobanner3.png",
        "/img/proyectos/modelo/fotobanner4.png",
        "/img/proyectos/modelo/fotobanner5.png",
        "/img/proyectos/modelo/fotobanner6.png",
        "/img/proyectos/modelo/fotobanner7.png",
        "/img/proyectos/modelo/fotobanner8.png",
        "/img/proyectos/modelo/fotobanner9.png",
        "/img/proyectos/modelo/fotobanner10.png"],
    },
    {
      nombre: "",
      imagenes: 
      [ "/img/proyectos/canchas/1.png",
        "/img/proyectos/canchas/2.png",
        "/img/proyectos/canchas/3.png",
        "/img/proyectos/canchas/4.png",
        "/img/proyectos/canchas/5.png",
        "/img/proyectos/canchas/6.png",
        "/img/proyectos/canchas/7.png",
        "/img/proyectos/canchas/8.png",
        "/img/proyectos/canchas/9.png"],
    },
    {
      nombre: "",
      imagenes: 
      [ "/img/proyectos/monterosvanesa/1.png",
        "/img/proyectos/monterosvanesa/2.png",
        "/img/proyectos/monterosvanesa/3.png",
        "/img/proyectos/monterosvanesa/4.png",
        "/img/proyectos/monterosvanesa/5.png",
        "/img/proyectos/monterosvanesa/6.png",
        "/img/proyectos/monterosvanesa/7.png"],
    },
  ]);

  const [proyectoActual, setProyectoActual] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);

  const abrirProyecto = (index) => {
    setProyectoActual(index);
    setImagenActual(0);
  };

  const cerrarVisor = () => setProyectoActual(null);

  const seleccionarImagen = (index) => setImagenActual(index);

  const imagenAnterior = () => {
    setImagenActual((prev) => (prev === 0 ? proyectos[proyectoActual].imagenes.length - 1 : prev - 1));
  };

  const imagenSiguiente = () => {
    setImagenActual((prev) => (prev === proyectos[proyectoActual].imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="album">
      <h2>Modelos y Proyectos</h2>
      <div className="lista-proyectos">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto" onClick={() => abrirProyecto(index)}>
            <h3>{proyecto.nombre}</h3>
            <img src={proyecto.imagenes[0]} alt={proyecto.nombre} />
          </div>
        ))}
      </div>

      {proyectoActual !== null && (
        <div className="visor">
          <span className="cerrar" onClick={cerrarVisor}>&times;</span>

          <button className="flecha izquierda" onClick={imagenAnterior}>&#9664;</button>
          <img src={proyectos[proyectoActual].imagenes[imagenActual]} alt="Ampliado" className="imagen-grande" />
          <button className="flecha derecha" onClick={imagenSiguiente}>&#9654;</button>

          <div className="miniaturas">
            {proyectos[proyectoActual].imagenes.map((img, idx) => (
              <img key={idx} src={img} alt="Miniatura" className={idx === imagenActual ? "activa" : ""}
                onClick={() => seleccionarImagen(idx)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumDeFotos;