import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./position.css";
import Resumenes from "../../../../../componentes/resumenes/resumenes"

function Zindex() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Esto es para posisionar una caja encima de otra un ejemplo para ver los resumenes esta caja se posisiona encima de todo el contenido.`,
        lenguage: `Css`,
        codigo: `z-index: 2; /*posisionar una caja ensima de dos cajas*/
/*Miesntras mas alto sea el valor la caja se posisonara mas arriba*/
        `
      }]}/>
      <main>
        <h1>z-index</h1>
        <Conseptos texto={`z-index es para controlar las capas si te diste cuenta en position absolute y position relative habian cajas que se sobreponian en sima de otras pero eso podemos controlarlo con z-index.

Muy importante z-index inicia siempre desde la capa 0.`}/>
        
        <h2>z-index</h2>
        <Conseptos texto={`En este ejemplo solo lo mostraremos con position relative pero esto tambien se aplica para position-absolute.`}/>
        
        <Html codigo={`<div class="relative_1">
  caja 1
</div>
<div class="relative_2">
  caja 2
</div>
<div class="relative_3">
  caja 3
</div>`}/>
        <Css codigo={`.relative_1 , .relative_2 , .relative_3 {
  width: 25%;
  height: 125px;
  color: wheat;
  margin: auto;
}
.relative_1{
  background-color: red;
  position: relative;
}
.relative_2{
  background-color: blue;
  position: relative;
  top: 25px;
  z-index: 1;
}
.relative_3{
  background-color: green;
  position: relative;
}`}/>
        <div className="website">
          <div className="zrelative_1">
            caja 1
          </div>
          <div className="zrelative_2">
            caja 2
          </div>
          <div className="zrelative_3">
            caja 3
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta a la caja 2 le dijimos que se ponga en sima de la caja 3 con z-index y esa es la funcionalidad de z-index.`}/>

        <div className="siguiente__parte">
          <Link to={`position-fixed`}>position-fixed</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Zindex;