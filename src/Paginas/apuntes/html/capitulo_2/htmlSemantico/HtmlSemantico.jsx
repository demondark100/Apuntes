import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";

import Resumenes from "../../../../../componentes/resumenes/resumenes";

function HtmlSemantico() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Para los titulos solo se puede usar desde el h1 al h6.

Los parrafos se escriben con la etiqueta <p>.

Ahora veremos las etiquetas mas utiles.`,
        lenguage: "Html",
        codigo: `<body>
  <!-- titulos. -->
  <h1></h1>
  <h2></h2>
  <h3></h3>
  <h4></h4>
  <h5></h5>
  <h6></h6>
  <!-- parrafo. -->
  <p>aqui va el parrafo</p>
  <!-- etiquetas utiles y mas usadas. -->
  <b>texto en negrita</b>
  <i>texto en italico</i>
  <strike>texto tachado</strike>
  <small>letra pequeña</small>

  <!-- hay muchas mas etiquetas pero esas son las mas usadas. -->
</body>
`
      }]}/>
      <main>
        <h1>html semantico</h1>
        <Conseptos texto={`Aqui veremos algunas etiquetas de html para empezar con unos cuantos proyectos.`}/>
        <h2>titulos</h2>
        <Conseptos texto={`Estos se representan desde el h1 hasta h6 de esta manera`}/>

        <Html codigo={`<body>
  <h1>
    es el encabezado principal de la página y
    se utiliza para el título principal del contenido.
  </h1>

  <h2>
    se utiliza para los títulos de secciones
    importantes dentro del contenido.
  </h2>

  <h3>
    se utiliza para los títulos de 
    subsecciones dentro de una sección.
  </h3>

  <h4>
    se utiliza para títulos de 
    subsecciones dentro de una subsección.
  </h4>

  <h5>
    se utiliza para títulos de subsecciones
    dentro de una subsección de h4.
  </h5>

  <h6>
    se utiliza para títulos de subsecciones
    dentro de una subsección de h5.
  </h6>
</body>`}/>

        <div className="website">
          <h1>
            es el encabezado principal de la página y se utiliza para el título principal del contenido.
          </h1>
          <h2>
            se utiliza para los títulos de secciones importantes dentro del contenido.
          </h2>

          <h3>
            se utiliza para los títulos de subsecciones dentro de una sección.
          </h3>

          <h4>
            se utiliza para títulos de subsecciones dentro de una subsección.
          </h4>

          <h5>
            se utiliza para títulos de subsecciones dentro de una subsección de h4.
          </h5>

          <h6>
            se utiliza para títulos de subsecciones dentro de una subsección de h5.
          </h6>
        </div>
        
        <h2>Parrafos</h2>
        <Conseptos texto={`Los parrafos se representan con "<p>" y como su nombre lo dice nos sirve para poner parrafos en nuestro sitio web.`}/>
        <Html codigo={`<body>
  <p>aqui va el parrafo</p>
</body>`}/>
        <div className="website">
          <p>aqui va el parrafo</p>
        </div>

        <h2>Etiquetas extra</h2>
        <Html codigo={`<b>texto en negrita</b>
<i>texto en italico</i>
<strike>texto tachado</strike>
<small>letra pequeña</small>

<!-- hay muchas mas etiquetas pero esas son las mas usadas. -->`}/>
        <div className="website">
          <b>texto en negrita</b>
          <i>texto en italico</i>
          <strike>texto tachado</strike>
          <small>letra pequeña</small>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default HtmlSemantico;