import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";

function FlexWrap() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>flex wrap</h1>
        <Conseptos texto={`Esta propiedad nos permite que las cajas conserven el ancho exacto que nosotros indicamos ahora veras a lo que me refiero.`}/>
        <h2>sin wrap</h2>
        <div className="siguiente__parte">
          <Link to={"resultadoWrap1"}>sin-wrap</Link>
        </div>
        <Conseptos texto={`Como te das cuenta a medida que pongas la resolucion mas pequeña las cajas se iran haciendo mas pequeñas perdiendo la medida original que nosotros dimos.`}/>

        <h2>con wrap</h2>
        <div className="siguiente__parte">
          <Link to={`resultadoWrap2`}>con wrap</Link>
        </div>
        <Conseptos texto={`Ahora veras como es que las cajas se matienen con su misma medida por mas que la resolucion se haga mas pequeña.`}/>

        <h2>uso de wrap</h2>
        <Conseptos texto={`wrap tiene las siguientes propiedades.

flex-wrap: wrap; con esto decimos que se active esta propiedad
flex-wrap: nowrap; con esto decimos que se desactive esta propiedad.`}/>
        
        <h2>nowarp</h2>
        <Conseptos texto={`nowrap siempre viene por defecto a la hora de trabajar con flexbox.
flex-wrap: nowrap;`}/>
        <h3>html</h3>
        <Html codigo={`<div class="wrap_content1">
  <div>
    caja1.
  </div>
  <div>
    caja2.
  </div>
  <div>
    caja 3.
  </div>
  <div>
    caja 4.
  </div>
  <div>
    caja5.
  </div>
</div>`}/>
        <h3>css</h3>
        <Conseptos texto={`En un caso real no seria necesario poner "flex-wrap: nowrap;" debido a que esta propiedad esta por defecto.`}/>
        <Css codigo={`.wrap_content1{
  display: flex;
  flex-wrap: nowrap;
}
.wrap_content1 div{
  background-color: #3681e4;
  margin: 15px;
  width: 200px;
  height: 200px;
  color: #fff;
}`}/>
        <div className="website">
          <div className="wrap_content1">
            <div>
                caja1.
            </div>
            <div>
                caja2.
            </div>
            <div>
                caja 3.
            </div>
            <div>
                caja 4.
            </div>
            <div>
                caja5.
            </div>
        </div>
        </div>
        
        <h2>wrap</h2>
        <Conseptos texto={`"wrap" a diferencia de nowrap si se debe activar recuerda que es para que las cajas del contenedor mantengan las medidas que nosotros le dimos.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="content_wrap">
  <div>
    caja 1.
  </div>
  <div>
    caja 2.
  </div>
  <div>
    caja 3.
  </div>
  <div>
    caja 4.
  </div>
  <div>
    caja 5.
  </div>
  <div>
    caja 6.
  </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.content_wrap{
  display: flex;
  flex-wrap: wrap;
}

.content_wrap div{
  background-color: aqua;
  margin: 15px;
  width: 200px;
  height: 200px;
}`}/>
        <div className="website">
          <div className="content_wrap">
            <div>
                caja 1.
            </div>
            <div>
                caja 2.
            </div>
            <div>
                caja 3.
            </div>
            <div>
                caja 4.
            </div>
            <div>
                caja 5.
            </div>
            <div>
                caja 6.
            </div>
        </div>

        </div>

        <h2>flex-flow</h2>
        <Conseptos texto={`Tenemos una forma de abreviarlo en una sola linea de codigo.
"flex-flow: row nowrap;".
parametro 1 = fila/columna.
parametro 2 = wrap/ nowrap`}/>

        <h3>html</h3>
        <Html codigo={`<div class="flexFlowContent">
  <div>
    caja 1.
  </div>
  <div>
    caja 2.
  </div>
  <div>
    caja 3.
  </div>
  <div>
    caja 4.
  </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.flexFlowContent{
  display: flex;
  flex-flow: row-reverse wrap;
}
.flexFlowContent div{
  background-color: #000;
  color: #fff;
  width: 200px;
  height: 200px;
  margin: 15px;
}`}/>
        <div className="website">
          <div className="flexFlowContent">
            <div>
              caja 1.
            </div>
            <div>
              caja 2.
            </div>
            <div>
              caja 3.
            </div>
            <div>
              caja 4.
            </div>
          </div>
        </div>

        <h2>wrap-reverse</h2>
        <Conseptos texto={`Esta propiedad es igual que wrap pero en reversa osea que en vez de ir abajo a medida que las resoluciones se hagan pequeñas se iran para ariiba.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="wrap_reverse">
  <div>
    caja 1.
  </div>
  <div>
    caja 2.
  </div>
  <div>
    caja 3.
  </div>
  <div>
    caja 4.
  </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.wrap_reverse{
  display: flex;
  flex-wrap: wrap-reverse;
}
.wrap_reverse div{
  background-color: #233cca;
  width: 200px;
  height: 200px;
  margin: 15px;
}
.wrap_reverse div:nth-child(1){
  background-color: #ff2323;
}
.wrap_reverse div:nth-child(4){
  background-color: #40ffa6;
}`}/>
        <div className="website">
          <div className="wrap_reverse">
            <div>
              caja 1.
            </div>
            <div>
              caja 2.
            </div>
            <div>
              caja 3.
            </div>
            <div>
              caja 4.
            </div>
          </div>
        </div>

        <div className="siguiente__parte">
          <Link to={"alineacionFlex"}>alineacion flex</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default FlexWrap;