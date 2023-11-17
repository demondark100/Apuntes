import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../componentes/showOptions/show";

function Cap1ProyectoHtml() {
  return (
    <>
      <ShowOptions 
        link={"../"}
        html={`<!DOCTYPE html>
<html>
  <head>
    <title>Estructura</title>
  </head>
  <body>
    <main>
      <h1></Estructura de pagina webh1>
      <article>
        <section>
          <h2>estructurar</h2>
          <p>
            Aun no puedo estilizar estilos ahh demonios todo se ve feo pero 
            esta bien estoy limitado a solo estructurar es lo que conlleva el 
            capitulo 2 despues de todo no me puedo quejar.Esta es la estructura 
            de una pagina web usando lo aprendido en el capitulo 2 esto lleva 
            etiquetas como small o tambien etiquetas como italica en simples 
            palabras estoy aplicando lo aprendido en este sotio web.
          </p>
        </section>
        <section>
          <h3>estilos</h3>
          <p>
            Aun no puedo estilizar estilos ahh demonios todo se ve feo pero 
            esta bien estoy limitado a solo estructurar es lo que conlleva el 
            capitulo 2 despues de todo no me puedo quejar.
          </p>
        </section>
      </article>
    </main>
  </body>
<html/>`}
      />
      <MensajeModal texto={`¡Proyecto! capitulo 2
Hacer un sitio web que tenga la estructura basica de html.

Recuerda que aprendimos:

1. Estructura basica de html.
2. html semantico(aqui conocimos algunas etiquetas muy usadas en HTML).`}/>
      <div className="Page">
        <h1 className="pageElement">Estructura de pagina web</h1>
        <h2 className="pageElement">estructurar</h2>
        <p className="pageElement">Esta es la estructura de una <b>pagina web</b> usando lo aprendido en el capitulo 2 esto lleva etiquetas como <small>small</small> o tambien etiquetas como <i>italica</i> en simples palabras estoy aplicando lo aprendido en este sotio web. </p>
        <h3 className="pageElement">estilos</h3>
        <p>Aun no puedo estilizar <b>estilos</b> ahh demonios todo se ve feo pero esta bien estoy limitado a solo estructurar es lo que conlleva el capitulo 2 despues de todo no me puedo quejar.</p>
      </div>
    </>
  );
}

export default Cap1ProyectoHtml;