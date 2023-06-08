import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";

function FooterHtmlCurso() {
  return (  
    <>
      <main>
        <h1>footer</h1>
        <Conseptos texto={`La etiqueta <footer> en HTML se utiliza para marcar el pie de página de una página web.
Ahora la estructura.`}/>

        <Html codigo={`<footer>
  contenido del pie de pagina.
</footer>`} />

        <Conseptos texto={`Ahora como se implementa en un proyecto.`}/>

        <Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>pagina con footer</title>
  </head>
  <body>

    <header>
      <nav>
        <ul>
          <li>
            navegacion de un menu o algo para 
            el encabezado.
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <section>
          <h1>seccion 1</h1>
        </section>
        <section>
          <h2>seccion 2</h2>
        </section>
        <aside>
          <nav>
            <ul>
              <li>otra navegacion</li>
            </ul>
          </nav>
        </aside>
      </article>
    </main>

    <footer>
      <p>aqui todo el contenido del pie de pagina</p>
    </footer>

  </body>
</html>`}/>


      </main>
      <Footer />

    </>
  );
}

export default FooterHtmlCurso;