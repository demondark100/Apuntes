import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Aside() {
  return (  
    <>
      <Resumenes contenido={[{
        mensje: `Aqui ponemos informacion secundaria.`,
        lenguage: `Html`,
        codigo: `<aside>contenido</aside>`
      }]}/>
      <main>
        <h1>aside</h1>
        <Conseptos texto={`Aside es como algo secundario que debe de ir a un costadito de la pagina.`}/>

        <h2>aside</h2>
        <Html codigo={`<aside>
  contenido extra o una navegacion secundaria.
</aside>
`}/>

        <div className="website">
          <div>
            contenido extra o una navegacion secundaria.
          </div>
        </div>

        <Conseptos texto={`Todo completo con lo anterior.`}/>

        <Html codigo={`<article>
  <section>
    <h4>esta es la seccion numero 1</h4>
    <p>aqui pondremos lo que sea no se me ocurre nada para escribir.</p>
  </section>

  <section>
    <h4>esta es la seccion numero 2</h4>
    <p>podemos poner secciones infinitas la cosa es que la pagina este bien estructurada.</p>
  </section>
</article>

<aside>
  contenido extra o navegacion secundaria
</aside>`} />

        <div className="website">
          <article>
            <section>
              <h4>esta es la seccion numero 1</h4>
              <p>aqui pondremos lo que sea no se me ocurre nada para escribir.</p>
            </section>
            <section>
              <h4>esta es la seccion numero 2</h4>
              <p>podemos poner secciones infinitas la cosa es que la pagina este bien estructurada.</p>
            </section>
          </article>
          <div>
            contenido extra o navegacion secundaria
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Aside;