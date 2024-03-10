import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function AlineacionGrid() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `grid tambien puede alinear elementos al igual que flex.`,
        lenguage: "Css",
        codigo: `/*alineacion horizontal -*/
justify-items: start; /*alinea los elementod de forma horizontal- al inicio*/
justify-items: center; /*alinea los elementod de forma horizontal- al centro*/
justify-items: end; /*alinea los elementod de forma horizontal- al final*/

/*alineacion vertical |*/
align-items: start; /*alinea los elementod de forma vertical | al inicio*/
align-items: center; /*alinea los elementod de forma vertical | al centro*/
align-items: end; /*alinea los elementod de forma vertical | al final*/

/*justify-content(alineacion horizontal -)*/
justify-content: start; /*alinea el contenedor al inicio*/
justify-content: center; /*alinea el contenedor al centro*/
justify-content: end; /*alinea el contenedor al final*/

/*align-content(alineacion vertical |)*/
align-content: start; /*alinea el contenedor al inicio*/
align-content: center; /*alinea el contenedor al centro*/
align-content: end; /*alinea el contenedor al final*/

/*justify-self(alineacion horizontal -)*/
justify-self: start; /*alinea un solo elemento al inicio*/
justify-self: center; /*alinea un solo elemento al centro*/
justify-self: end; /*alinea un solo elemento al final*/`
      }]}/>
      <main>
        <h1>alineacion en grid</h1>
        <Conseptos texto={`En grid tambien podemos alinear los elementos al igual que flex.

aqui en grid tenemos dos formas de alinear a los elementos.
1 alinear el contenido en general de las celdas.
2 alinear las filas y columnas.`}/>
        <h2>justify-items</h2>
        <Conseptos texto={`Esta propiedad mueve los elementos de forma horizontal _ .
start: posisiona las columnas al inicio.
center: posisiona las columnas al centro.
end: posisiona las columnas al final.`}/>
        <Html codigo={`<div class="justify_item">
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
        <Css codigo={`.justify_item{
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,120px);
    grid-template-rows: repeat(3,120px);

    justify-items: end;
}
.justify_item div{
    padding: 15px;
    background-color: #00000066;
    border: 2px solid #000;
    color: #fff;
}`}/>
        <div className="website">
          <div className="justify_item">
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

        <h2>align-item</h2>
        <Conseptos texto={`Esta propiedad mueve a los elementos de forma vertical | .
start: posisiona al elementos al inicio.
center: centrara a los elementos.
´ end: posisiona a los elementos al final.`}/>
        <Html codigo={`<div class="align_item">
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
        <Css codigo={`.align_item{
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,120px);
    grid-template-rows: repeat(3,120px);

    align-items: center;
}
.align_item div{
    padding: 15px;
    background-color: #00000066;
    border: 2px solid #000;
    color: #fff;
}`}/>
        <div className="website">
          <div className="align_item">
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
        <Conseptos texto={`Las propiedades de aqui abajo tienen los mismos parametros de flex como:
justify-content: space-araund;
y asi con todos puedes ir probando.`}/>
        <h2>justify-content</h2>
        <Conseptos texto={`Esta propiedad movera pero al elemento contenedor de forma horizontal _ .
start: posisiona´al inicio.
center: posisiona al centro.
end: posisiona al final.`}/>
        <Html codigo={`<div class="justify_content">
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
        <Css codigo={`.justify_content{
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,120px);
    grid-template-rows: repeat(3,120px);

    justify-content: center;
}
.justify_content div{
    padding: 15px;
    background-color: #00000066;
    border: 2px solid #000;
    color: #fff;
}`}/>
        <div className="website">
          <div className="justify_content">
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
        <Conseptos texto={`Como te das cuenta "justify-content" mueve a todo el contenido a la posisiona que le indiquemos , esto sucede igual con align-content.`}/>

        <h2>align-content</h2>
        <Conseptos texto={`Esta propiedad movera pero al elemento contenedor de forma vertical | .
start: posisiona´al inicio.
center: posisiona al centro.
end: posisiona al final.`}/>
        <Html codigo={`<div class="align_content">
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
        <Css codigo={`.align_content{
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,120px);
    grid-template-rows: repeat(3,120px);
    height: 100%;

    align-content: center;
}
.align_content div{
    padding: 15px;
    background-color: #00000066;
    border: 2px solid #000;
    color: #fff;
}`}/>
        <div className="website">
          <div className="align_content">
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

        <h2>justify-self</h2>
        <Conseptos texto={`Recuerdas que en flex self se usaba para controlar a solo un elemento en especifico bueno aqui en grid es igual.`}/>
        <Html codigo={`<div class="self">
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
        <Css codigo={`.self{
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    height: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
}
.self div{
    padding: 15px;
    background-color: #00000066;
    border: 2px solid #000;
    color: #fff;
}

.self div:nth-child(1){
    align-self: flex-start;
    justify-self: start;
}
.self div:nth-child(5){
    align-self: center;
    justify-self: end;
}
.self div:nth-child(6){
    align-self: center;
    justify-self: start;
}
.self div:nth-child(9){
    align-self: flex-end;
    justify-self: end;
}`}/>
        <div className="website">
          <div className="self">
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
        <Conseptos texto={`De forma original todos los elementos estan centrados pero con self controlamos unos cuantos elementos para que se comporten de distintas formas.`}/>

        <div className="siguiente__parte">
          <Link to="gridArea">grid area</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AlineacionGrid;