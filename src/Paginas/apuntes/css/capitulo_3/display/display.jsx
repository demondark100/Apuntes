import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./display.css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Display() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `display tiene otras propiedades a parte de "inline","inline-block".`,
        lenguage: "Css",
        codigo: `display: flex; /*la caja se comportara de forma flexible*/
display: grid; /*la caja crean celdas*/`
      }]}/>
      <main>
        <h1>display</h1>
        <Conseptos texto={`Bueno veremos las otras propiedades de display pero no profundizaremos.

aparte de:
display: block;
display: inline;
tenemos a:

display: flex;
display: grid;
como dije anteriormente estas propiedades modifican el comportamiento de las cajas.
para recordar...`}/>
          <h2>block</h2>
          
          <Html codigo={`<div class="recordar__block">
  todo el espacio
</div>`}/>
          
          <Css codigo={`.recordar__block{
  display: block;
  background-color: black;
  color: wheat;
}`}/>
          <Conseptos texto={`Eecuerda que display block ocupara todo el espacio por mas que el contenido sea demasiado poco.`}/>
          <div className="website">
            <div className="recordar__block">
              todo el espacio
            </div>
          </div>

          <h2>inline</h2>
          
          <Html codigo={`<div class="recordar__linea">
  linea
</div>`}/>
          
          <Css codigo={`.recordar__linea{
  display: inline;
  background-color: black;
  color: wheat;
}`}/>
          <div className="website">
            <div class="recordar__linea">
              linea
            </div>
          </div>
          <Conseptos texto={`Recuerda que display inline se adapta al espacio que ocupa no ocupara todo el espacio como display block.`}/>

          <h2>inline-block</h2>
          
          <Html codigo={`<div class="inlineBlock__recordar1">
  linea/bloque 1
</div>
<div class="inlineBlock__recordar2">
  linea/bloque 2
</div>`}/>
          
          <Css codigo={`.inlineBlock__recordar1{
  display: inline-block;
  background-color: black;
  color: wheat;
  width: 25%;
}
.inlineBlock__recordar2{
  display: inline-block;
  background-color: black;
  color: wheat;
  width: 25%;
}`}/>
          <Conseptos texto={`Recuerda que "inline block" se comporta como inline pero se puede modificar como si fuese display block pero al comportarse como inline un elemento se pone al lado del otro como en este ejemplo.`}/>
          <div className="website">
            <div class="inlineBlock__recordar1">
              linea/bloque 1
            </div>
            <div class="inlineBlock__recordar2">
              linea/bloque 2
            </div>
          </div>

          <Conseptos texto={`Las demas propiedades tendran su propia explicacion para mas adelante.`}/>







      </main>
      <Footer />
    </>
  );
}

export default Display;