import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Css from "../../../../../componentes/lenguajes/Css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function FlexGrow() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `"flex-grow" ajusta las al espacio que sobra en el contenedor , esto solo se usa en las cajas hijas.`,
        lenguage: "Css",
        codigo: `flex-grow: 1;`
      },
      {
        mensaje: `"text-align" alinea los textos`,
        lenguage: "Css",
        codigo: `text-align: start; /*alinea el texto al inicio de su contenedor*/
text-align: center; /*centra el texto en su contenedor*/
text-align: end; /*pone el texto al final de su contenedor*/`
      }]}/>
      <main>
        <h1>flex-grow</h1>
        <Conseptos texto={`Esta propiedad hace que las cajas se ajusten al espacio que sobra , "flex-grow" se debe aplicar en los elementos hijos no en los contnedores.`}/>
        
        <Html codigo={`<h4>sin grow</h4>
<div class="sin_grow">
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

<h4>con grow</h4>
<div class="con_grow">
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

        
        <Css codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h4{
  color: #08eb1a;
  text-shadow: 5px 5px 15px #08eb1a;
  text-align: center;
  font-size: 1.5em;
}
.sin_grow{
  display: flex;
  height: 40vh;
  border: 2px solid #08eb1a;
  padding: 15px;
}
.sin_grow div{
  border: 2px solid #08eb1a;
  color: #08eb1a;
}
.con_grow{
  display: flex;
  height: 40vh;
  border: 2px solid #08eb1a;
  padding: 15px;
}
.con_grow div{
  border: 2px solid #08eb1a;
  color: #08eb1a;
  flex-grow: 1;
}`}/>
        <div className="siguiente__parte">
          <Link to={"flexGrowResultado"}>resultado</Link>
        </div>
        <Conseptos texto={`Esta propiedad se puede dar a los elementos por individual como se vio en el ejemplo anterior a estos podemos indicarle que tanto espacio queremos que ocupe puedes ir jugando con esta propiedad.`}/>

        
        <Html codigo={`<div class="grow_ejemplo">
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
        
        <Css codigo={`.grow_ejemplo{
  display: flex;
  height: 40vh;
  padding: 15px;
  background-color: #000;
}
.grow_ejemplo div{
  color: #32a8a8;
  border: 2px solid #32a8a8;
}
.grow_ejemplo div:nth-child(1){
  flex-grow: 1;
}
.grow_ejemplo div:nth-child(3){
  flex-grow: 2;
}`}/>
        <div className="website">
          <div className="grow_ejemplo">
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

        <Conseptos texto={`por ultimo tenemos a {fkexBsis} y {flexShrink} que son similares a flex-grow pero con algunas diferencias puedes revisar la documentacion de css.`}
enlaces={{
  fkexBsis: {text: "flex-basis", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"},
  flexShrink: {text: "flex-Shrink", url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"}
}}
targetBlank={true}/>

        <h2>text-align</h2>
        <Conseptos texto={`Ahora veamos una prpiedad muy importante.
"text-align".

Con esto posisionaremos los textos que este en bloque como p , h1 , div , etc.
estos tienen como parametros.

start: posisionara el texto al principio.
center: posisionara el texto al centro.
end: posisionara el texto al final.`}/>
        
        <Html codigo={`<p class="text-start">
  esto estara al inicio.
</p>
<p class="text-center">
  esto estara centrado.
</p>
<p class="text-end">
  esto estara al final.
</p>`}/>
        
        <Css codigo={`.text-start{
  text-align: start;
  color: #9eb6ff;
  background-color: #000;
  margin-bottom: 3%;
}
.text-center{
  text-align: center;
  color: #9eb6ff;
  background-color: #000;
  margin-bottom: 3%;
}
.text-end{
  text-align: end;
  color: #9eb6ff;
  background-color: #000;
  margin-bottom: 3%;
}`}/>
        <div className="website">
          <p className="text-start">
            esto estara al inicio.
          </p>
          <p className="text-center">
            esto estara centrado.
          </p>
          <p className="text-end">
            esto estara al final.
          </p>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default FlexGrow;