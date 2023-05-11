import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./position.css";
import Capitulos from "../../../../../componentes/capitulos/aside";

function PositionAbsolute() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>position-absolute</h1>
        <Conseptos texto={`Esta propiedad a diferencia de {positioRelative} no ocupa espacio real en el sitio web , tambien obtiene las mismas propiedades de position relative como:

top , right , bottom , left , z-index.`}
enlaces={{
  positioRelative: {text: "position relative",url: `../css/capitulo 3/position`}
}}
targetBlank={true}/>

        <h3>html</h3>
        <Html codigo={`<div class="position_1">
  caja 1
</div>
<div class="position_2">
  caja 2
</div>
<div class="position_3">
  caja 3
</div>
<div class="position_4">
  caja 4
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.position_1{
  background-color: green;
  width: 35%;
  height: 120px;
  position: relative;
}
.position_2{
  background-color: orange;
  width: 35%;
  height: 120px;
  position: relative;
}
.position_3{
  background-color: yellow;
  width: 35%;
  height: 120px;
  position: absolute;
}
.position_4{
  background-color: brown;
  width: 35%;
  height: 120px;
  position: relative;
}`}/>
        <div className="website">
          <div className="position_1">
              caja 1
          </div>
          <div className="position_2">
              caja 2
          </div>
          <div className="position_3">
              caja 3
          </div>
          <div className="position_4">
              caja 4
          </div>
        </div>
        <Conseptos texto={`Si te fijas parece que la caja 3 desaparecio pero no es asi recuerda que "position absolute" no ocupa espacio como tal en el sitio web osea que la caja 3 esta de bajo de caja 4 debido a que caja 4 tiene un position relative el cual si ocupa espacio real en el sitio web.`}/>
        
        <div className="siguiente__parte">
          <Link to={`z-index`}>z-index</Link>
        </div>


      </main>
      <Footer />
    </>
  );
}

export default PositionAbsolute;