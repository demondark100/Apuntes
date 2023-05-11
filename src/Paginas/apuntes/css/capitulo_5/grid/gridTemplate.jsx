import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Capitulos from "../../../../../componentes/capitulos/aside";

function GridTemplate() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>grid-template</h1>
        <Conseptos texto={`Con esto podremos definir cuantas filas y columnas queremos , estos se aplican a los grid container.`}/>
        <h2>grid-template-rows</h2>
        <Conseptos texto={`Con esto diremos cuantas filas queremos en nuestro grid content.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`/* grid-template-rows: cuantas filas quieres y con que medida. */
/* ejemplo: */
grid-template-rows: 10px 10px 10px 10px 10px;`}/>
        <Conseptos texto={`En este caso creamos 5 filas con una medida de 10px cada una.

Si tienes menos cantidad de elementos hijos que la cantidad de gird que hayas declarado siempre se dibujaran los grids que declaraste , esto se aplica a las columnas tambien.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="rows_content">
    <div>
        caja 1
    </div>
    <div>
        caja 2
    </div>
    <div>
        caja 3
    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.rows_content{
    display: grid;
    grid-template-rows: 150px 150px 150px 150px;
}
.rows_content div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="rows_content">
              <div>
                  caja 1
              </div>
              <div>
                  caja 2
              </div>
              <div>
                  caja 3
              </div>
          </div>
        </div>
        <Conseptos texto={`Nosotros pusimos 3 elementos hijos/cajas pero puesimos 4 veces "grid-template-rows: 4 veces" y aun asi esta dibujado la ultima fila.`}/>

        <h2>grid-template-columns</h2>
        <Conseptos texto={`Esto es igual a rows solo que se aplican a las columnas.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="content_columns">
    <div>
        caja 1
    </div>
    <div>
        caja 2
    </div>
    <div>
        caja 3
    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.content_columns{
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
}
.content_columns div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="content_columns">
              <div>
                  caja 1
              </div>
              <div>
                  caja 2
              </div>
              <div>
                  caja 3
              </div>
          </div>
        </div>
        <Conseptos texto={`Aqui tambien estamos creando una columna de mas y siempre se creara por mas que no tengamos la misma cantidad de elementos.`}/>
        <Conseptos texto={"A estos tambien se le puede dar medidas con em rem % , etc."}/>
        <h2>fr</h2>
        <Conseptos texto={`Los grid tienen un tipo de medida propio uno de esos es fr que es para que los elementos se ajusten de forma automaticamente al tamaño de su contenedor.`}/>
        <h3>pseudocodigo</h3>
        <Css codigo={`/* estos se deben poner como medidas. */
grid-template-rown: 1fr 1fr;
grid-template-columns: 1fr 1fr:`}/>
        <h3>html</h3>
        <Html codigo={`<div class="fr_content">
    <div>
        caja 1
    </div>
    <div>
        caja 2
    </div>
    <div>
        caja 3
    </div>
    <div>
        caja 4
    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.fr_content{
    display: grid;
    height: 50%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
.fr_content div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="fr_content">
              <div>
                  caja 1
              </div>
              <div>
                  caja 2
              </div>
              <div>
                  caja 3
              </div>
              <div>
                  caja 4
              </div>
          </div>
        </div>

        <div className="siguiente__parte">
          <Link to={"grid-gap"}>grid-gap</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default GridTemplate;