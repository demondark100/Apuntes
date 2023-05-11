import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function SectionArticle() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>section y article</h1>
        <Conseptos texto={`Con section y article estructuramos de mejor forma nuestro sitio web..`}/>
        <h2>sin section ni article</h2>
        <Conseptos texto={`De esta manera es la forma incorrecta ya que las cosas estan en el aire con lo cual el seo de la pagina esta mal.`}/>
        
        <Html codigo={`<h3>esta es una pagina basica</h3>
<p>
  aqui estamos dando un ejemplo del como no se debe estructurar una pagina web.
</p>
<p>
  bueno aqui pondremos cualquier cosa la cosa es rellenar todo xd.
</p>`}/>

        <div className="website">
          <h3>esta es una pagina basica</h3>
          <p>
            aqui estamos dando un ejemplo del como no se debe estructurar una pagina web.
          </p>
          <p>
            bueno aqui pondremos cualquier cosa la cosa es rellenar todo xd.
          </p>
        </div>

        <h2>article y section</h2>
        <Conseptos texto={`De esta forma es la correcta de estructurar una pagina.

En este caso el articulo solo tendra una sola seccion.`}/>

        <Html codigo={`<article>
  <section>
    <h3>esta es una pagina basica</h3>
    <p>
      aqui estamos dando un ejemplo del como no se debe estructurar una pagina web.
    </p>
    <p>
      bueno aqui pondremos cualquier cosa la cosa es rellenar todo xd.
    </p>
  </section>
</article>`}/>

        <div className="website">
        <article>
          <section>
            <h3>esta es una pagina basica</h3>
            <p>
              aqui estamos dando un ejemplo del como no se debe estructurar una pagina web.
            </p>
            <p>
              bueno aqui pondremos cualquier cosa la cosa es rellenar todo xd.
            </p>
          </section>
        </article>
        </div>

        <Conseptos texto={`Tambien se puede hacer con mas secciones.`}/>

        <Html codigo={`<article>
  <section>
    <h4>esta es la seccion numero 1</h4>
    <p>aqui pondremos lo que sea no se me ocurre nada para escribir.</p>
  </section>

  <section>
    <h4>esta es la seccion numero 2</h4>
    <p>podemos poner secciones infinitas la cosa es que la pagina este bien estructurada.</p>
  </section>
</article>`}/>

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
        </div>

      </main>
      <Footer />
    </>
  );
}

export default SectionArticle;