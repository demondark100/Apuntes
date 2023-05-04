import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./position.css";

function Position() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>position-relative</h1>
        <Conseptos texto={`Esta propiedad nos permite posisionar elementos , al usar la propiedad position un elemento adquiere nuevas propiedades como:

top , right , bottom , left , z-index.`} />

        <h2>position: relative;</h2>
        <Conseptos texto={`Position relative hace que una caja conserve su espacio en el sitio web es como decir que la caja siga siendo solida.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="relative_1">
  caja 1
</div>
<div class="relative_2">
  caja 2
</div>
<div class="relative_3">
  caja 3
</div>`}/>
        <h3>css</h3>
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
}
.relative_3{
  background-color: green;
  position: relative;
}`}/>
        <div className="website">
          <div className="relative_1">
            caja 1
          </div>
          <div className="relative_2">
            caja 2
          </div>
          <div className="relative_3">
            caja 3
          </div>
        </div>

        <Conseptos texto={`A la hora de trabajar con position lo normal es trabajar solo con top y left ejemplo.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="mover_caja">
  cajita.
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.mover_caja{
  margin: auto;
  background-color: lightblue;
  color: black;
  width: 25%;
  height: 125px;
  position: relative;
  top: -10px;
  left: -85px;
}`}/>
        <div className="website">
          <div className="mover_caja">
            cajita.
          </div>
        </div>
        <Conseptos texto={`Si te fijas en vez de poner "right: 85px;" solo pusimos "left: -85px;" y que en vez de poner "bottom: 10px;" pusimos "top: -10px;" esto es debido a que top y left tienen una gerarquia mayor a bottom y right por asi decirlo.`}/>
        <h2>ejemplo</h2>
        <h3>html</h3>
        <Html codigo={`<div class="caja">
  caja.
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.caja{
  background-color: red;
  color: white;
  width: 25%;
  height: 150px;
  position: relative;
  bottom: 50px;
  top: 15px;
  left: 55px;
  right: 200px;
}`}/>
        <div className="website">
          <div className="caja__relative">
            caja.
          </div>
        </div>
        <Conseptos texto={`Si te das cuenta no hace caso a bottom y tampoco a right debido a que top y left son los mas importantes.`}/>

        <div className="siguiente__parte">
          <Link className="" to={"position absolute"}>position-absolute</Link>
        </div>



      </main>
      <Footer />
    </>
  );
}

export default Position;