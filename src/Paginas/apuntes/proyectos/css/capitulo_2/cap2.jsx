import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../componentes/volver/volver";
import "./cap2.css";

function Cap2ProyectoCss() {
  return (
    <>
      <MensajeModal texto={`¡Proyecto capitulo 3!
Hacer una pagina que muestre la utilidad de algunas tecnologias.

Recuerda aprendimos:

1. fondos.
2. propiedades de texto.
3. normalize.
4. cajas.
5. padding.
6. margin.
7. bordes.
8. sombras.
9. outline`}/>
      <Volver link={"../"}/>
      <div className="Page">
        <h1 className="pageElement titleCap4CssProyect">tecnologias</h1>
        <div className="contenedorCssProyectoCap2">
          <h2 className="pageElement titleCap4CssProyect__h2">html</h2>
          <p>
            Este lenguaje nos sirve para estructurar sitiow web es como si fuese el esqueleto de us ser humano o animal.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_1">
          <h2 className="pageElement titleCap4CssProyect__h2">css</h2>
          <p>
            Esta tegnologia nos sirve para estilizar la estructura de nuestro sitio web es como si fuese la skin de un personaje de videojuegos.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_3">
          <h2 className="pageElement titleCap4CssProyect__h2">javaScript</h2>
          <p>
            JavaScript es para dar funcionalidad a la estructura que se hizo con html es como si fuesen los organos de un ser vivo hacen que la estructura funcione y que los estilos/piel de animaciones.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_4">
          <h2 className="pageElement titleCap4CssProyect__h2">git</h2>
          <p>
            Git es para poder guardar nuestros proyectos de codificacion de forma local es demasiado sencillo de usar , este se puede conectar con servicios como github para poder guardar el codigo en la nuve.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_5">
          <h2 className="pageElement titleCap4CssProyect__h2">react</h2>
          <p>
            React junta html , css y javaScript para hacer una sola aplicacion esto es muy usado tanto para el desarrollo web como el desarrollo de aplicaciones moviles.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_6">
          <h2 className="pageElement titleCap4CssProyect__h2">python</h2>
          <p>
            Este lenguaje se usa para muchas cosas como el hacking , el backend , etc.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cap2ProyectoCss;