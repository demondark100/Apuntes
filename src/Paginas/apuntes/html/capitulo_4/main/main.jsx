import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function Main() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>main</h1>
        <Conseptos texto={`La etiqueta <main> en HTML se utiliza para marcar el contenido principal de una página web.`}/>

        <Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>pagina con main</title>
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

  </body>
</html>`}/>

        <div className="website">
          <ul>
            <li>
              navegacion de un menu o algo para 
              el encabezado.
            </li>
          </ul>
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
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Main;