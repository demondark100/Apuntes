import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function GridImEx() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Crea una fila o columna de forma implicita cuando hay un elemento de mas.`
      }]}/>
      <main>
        <h1>grid implicito</h1>
        <Conseptos texto={`Nosotros al crear un elemento de mas se creara una celda mas a eso se le llama grid implicito.
ejemplo:
Como te das cuanta solo creamos 3 columnas pero se agrego de forma automaticamente la cuarta columna.`}/>
        <h2>ejemplo implicito</h2>
        
        <Html codigo={`<div class="grid_impl">
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
</div>`}/>
        
        <Css codigo={`.grid_impl{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    border: 5px solid #2f87a1;
}
.grid_impl div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="grid_impl">
            <div>
                .
            </div>
            <div>
                .
            </div>
            <div>
                .
            </div>
            <div>
                .
            </div>
            <div>
                .
            </div>
            <div>
                .
            </div>
            <div>
                .
            </div>
            <div>
                .
            </div>
            <div>
                .
            </div>
            <div>
                .
            </div>
        </div>
        </div>
        <h2>ahora un ejemplo mas.</h2>
        
        <Html codigo={`<div class="grid_implicito">
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
    <div>
        :D
    </div>
</div>`}/>
        
        <Css codigo={`.grid_implicito{
    display: grid;
    grid-template-columns: repeat(3,120px);
    grid-template-rows: repeat(3,120px);
    border: 5px solid #2f87a1;
}
.grid_implicito div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="grid_implicito">
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
              <div>
                  :D
              </div>
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta solo creamos 3 filas/columnas y hay dos elementos de mas pero de igual forma se crearon de forma automatica , estos se crearon sin estilos pero existe una propiedad que esta para solucionar eso.`}/>
        <div className="siguiente__parte">
          <Link to={"grid auto"}>grid auto</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GridImEx;