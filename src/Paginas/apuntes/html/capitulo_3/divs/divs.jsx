import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function Divs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>divs</h1>
        <Conseptos texto={`Los divs nos sirven para agrupar los contenidos en distintas cajas es como decir una caja que guarda otras cajas esto es muy importante en especial a la hora de trabajar con css y javaScript`}/>
        <Html codigo={`<div>todo el contenido que queremos poner</div>`}/>
        <h2>ejercicio 1</h2>
        <Conseptos texto={`agrupar en dos divs y poner elementos html.`}/>
        <Html codigo={`<div>
  <h2>este es el div 1</h2>
  <p>
    aqui agrupremos los elementos que queramos.
  </p>
  <p>
    podemos poner imagenes lo que sea.
  </p>
</div>

<div>
  <h2>este es el div 2</h2>
  <p>
    aqui agrupremos los elementos que queramos.
  </p>
  <p>
    podemos poner imagenes lo que sea.
  </p>
</div>`}/>
        <div className="website">
          <div>
            <h2>este es el div 1</h2>
            <p>
              aqui agrupremos los elementos que queramos.
            </p>
            <p>
              podemos poner imagenes lo que sea.
            </p>
          </div>

          <div>
            <h2>este es el div 2</h2>
            <p>
              aqui agrupremos los elementos que queramos.
            </p>
            <p>
              podemos poner imagenes lo que sea.
            </p>
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
}

export default Divs;