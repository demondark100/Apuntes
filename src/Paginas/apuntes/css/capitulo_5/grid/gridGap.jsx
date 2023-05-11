import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Capitulos from "../../../../../componentes/capitulos/aside";

function GridGap() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>grid-gap</h1>
        <Conseptos texto={`Esto es como un margin pero se aplican para todas las celdas/grishas y estos se separan entre las celdas mas no del contenedor.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`grid-column-gap: separar columnas;
grid-row-gap: separar filas;
grid-gap: separar filas y columnas;`}/>
        <h2>grid-column-gap</h2>
        <h3>html</h3>
        <Html codigo={`<div class="gap_column">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.gap_column{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    border: 5px solid #3ce4b1;
}
.gap_column div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="gap_column">
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
        </div>
        </div>
        <Conseptos texto={`Como te das cuenta deja 10 de espacio en cada celda en la parte de las columnas pero no se separan del contenedor.`}/>

        <h2>grid-row-gap</h2>
        <h2>html</h2>
        <Html codigo={`<div class="grid_row">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.grid_row{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    border: 5px solid #3ce4b1;
}
.grid_row div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="grid_row">
              <div>
                  a
              </div>
              <div>
                  a
              </div>
              <div>
                  a
              </div>
              <div>
                  a
              </div>
              <div>
                  a
              </div>
              <div>
                  a
              </div>
              <div>
                  a
              </div>
              <div>
                  a
              </div>
              <div>
                  a
              </div>
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta se separan las filas pero no se separan del borde del contenedor.`}/>
        
        <h2>grid-gap</h2>
        <h3>html</h3>
        <Html codigo={`<div class="grid_gap">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.grid_gap{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    border: 5px solid #3ce4b1;
}
.grid_gap div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="grid_gap">
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
        </div>
        </div>
        <Conseptos texto={`Como te das cuenta ahora se separan las filas y las columnas y  siempre las celdas se separan entre si pero nunca se separan del borde del contenedor.`}/>

        <div className="siguiente__parte">
          <Link to={"asignacion de espacios"}>asignacion de espacios</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default GridGap;