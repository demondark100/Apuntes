import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../componentes/showOptions/show";

function Cap4ProyecHtml() {
  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 4
Hacer una tienda web bien estructurada.

Recuerda que aprendimos:

1. nav.
2. section y article.
3. aside.
4. main.
5. header y footer.
6. tablas.
7. cosas extra.`}/>
      <ShowOptions 
        link={"../"}
        html={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Tienda</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a>otro</a></li>
          <li><a>contactos</a></li>
          <li><a>productos</a></li>
          <li><a>mas sobre nosotros</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Productos Dan</h1>
      <p>
        Aqui encontrar productos anime de calidad tanto figuras , ropa ,etc 
        todo tipo de articulos de anime.
      </p>
      <div>
        <img src="https://th.bing.com/th/id/OIP.FkzTm8oc1osRpK4lpXMJDgHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7" alt="atack on titan" />
        <p>posters de animes</p>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.mF8RqJQx-SvJDHxMhZrFBAHaED?w=336&h=184&c=7&r=0&o=5&pid=1.7" alt="dragon ball" />
      <p>ropa de animes</p>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.mF8RqJQx-SvJDHxMhZrFBAHaED?w=336&h=184&c=7&r=0&o=5&pid=1.7" alt="dragon ball" />
        <p>ropa de animes</p>
      </div>
      <aside>
        <section>
          <article>
            <h2>otros productos</h2>
            <nav>
              <ul>
                <li><a href="#">telefonos</a></li>
                <li><a href="#">atencion en softwere</a></li>
                <li><a href="#">atencion en hardwere</a></li>
              </ul>
            </nav>
          </article>
        </section>
      </aside>
      <footer>
        <h3>copuright</h3>
        <p>
          derechos reservados para empresasDan.
        </p>
      </footer>
    </main>
  </body>
</html>`}
      />
      <div className="Page">
        <div>
          <nav>
            <h4 className="pageElement">menu</h4>
            <ul>
              <li><a className="pageElement" href="#">otro</a></li>
              <li><a className="pageElement" href="#">contactanos</a></li>
              <li><a className="pageElement" href="#">productos</a></li>
              <li><a className="pageElement" href="#">mas sobre nosotros</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h1 className="pageElement">Productos Dan</h1>
          <p>Aqui encontrar <b>productos anime</b> de calidad tanto figuras , ropa ,etc todo tipo de articulos de anime.</p>
          <center>
            <img src="https://th.bing.com/th/id/OIP.FkzTm8oc1osRpK4lpXMJDgHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7" alt="atack on titan" />
            <p>posters de animes</p>
          </center>
          <center>
            <img src="https://th.bing.com/th/id/OIP.OMrNX_ssPa7iNMUksh43ugHaFP?w=263&h=186&c=7&r=0&o=5&pid=1.7" alt="kimetsu no yaiba" />
            <p>figuras anime</p>
          </center>
          <center>
            <img src="https://th.bing.com/th/id/OIP.mF8RqJQx-SvJDHxMhZrFBAHaED?w=336&h=184&c=7&r=0&o=5&pid=1.7" alt="dragon ball" />
            <p>ropa de animes</p>
          </center>
        </div>
        <div>
          <h3 className="pageElement">otros productos</h3>
          <ul>
            <li>telefonos</li>
            <li>atencion en softwere</li>
            <li>atencion en hardwere</li>
            <li>atencion en telefonos y pc</li>
            <li>venta de consolas</li>
          </ul>
        </div>
        <div>
          <h2 className="pageElement">copuright</h2>
          <p>derechos reservados para empresasDan.</p>
        </div>
      </div>
    </>
  );
}

export default Cap4ProyecHtml;