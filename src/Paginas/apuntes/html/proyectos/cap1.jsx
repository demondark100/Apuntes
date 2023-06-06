import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../componentes/volver/volver";

function Cap1ProyectoHtml() {
  return (
    <>
      <MensajeModal texto={`Hacer un sitio web que tenga la estructura basica de html y ademas que lleve las etiquetas aprendidas en el capitulo 2.`}/>
      <div className="Page">
        <h1 className="pageElement">Estructura de pagina web</h1>
        <h2 className="pageElement">estructurar</h2>
        <p className="pageElement">Esta es la estructura de una <b>pagina web</b> usando lo aprendido en el capitulo 2 esto lleva etiquetas como <small>small</small> o tambien etiquetas como <i>italica</i> en simples palabras estoy aplicando lo aprendido en este sotio web. </p>
        <h3 className="pageElement">estilos</h3>
        <p>Aun no puedo estilizar <b>estilos</b> ahh demonios todo se ve feo pero esta bien estoy limitado a solo estructurar es lo que conlleva el capitulo 2 despues de todo no me puedo quejar.</p>
        <Volver link={`../`}/>
      </div>
    </>
  );
}

export default Cap1ProyectoHtml;