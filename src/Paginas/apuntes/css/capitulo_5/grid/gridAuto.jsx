import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function GridAuto() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>grid auto</h1>
        <Conseptos texto={`Con estas propiedades vamos a programar el {gridImplicito} , si te fijaste bien en los ejemplos del grid implicito se creaban filas de forma automatica.`}
        enlaces={{
          gridImplicito: {text:"grid implicito",url: "../css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx"}
        }}
        targetBlank={false}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`grid-auto-columns: solo se ponen las medidas;
grid-auto-rows: solo se ponen las medidas;`}/>
        <Conseptos texto={`Por si te preguntas en estas propiedades no funciona {repeat} ya que no es necesario en los parametros de estas propiedades solo se debe poner la medida que queremos que se apliquen a cada nueva columna que se cree.`}
        enlaces={{
          repeat: {text: "repeat",url:"../css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat"}
        }}/>
        <h2>sin grid auto</h2>
        
        <Html codigo={`<div class="sin_auto">
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
</div>`}/>
        
        <Css codigo={`.sin_auto{
    border: 5px  solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,120px);
}
.sin_auto div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="sin_auto">
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
        </div>
        </div>

        <h2>con grid auto</h2>
        
        <Html codigo={`<div class="con_auto">
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
</div>`}/>
        
        <Css codigo={`.con_auto{
    border: 5px  solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,120px);
    grid-auto-rows: 120px;
}
.con_auto div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="con_auto">
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
        </div>
        </div>
        <h2>grid-auto-flow</h2>
        <Conseptos texto={`Como te diste cuenta las nuevas celdas se crearon de forma automatica como filas pero podemos cambiar ese comportamiento con:`}/>
        <Css codigo={`grid-auto-flow: column / row;`}/>
        <h2>ejemplo</h2>
        
        <Html codigo={`<div class="grid_flow">
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
</div>`}/>
        
        <Css codigo={`.grid_flow{
    display: grid;
    grid-template-columns: repeat(3,120px);
    grid-template-rows: repeat(3,120px);
    grid-auto-flow: column;
    grid-auto-columns: 120px;
}
.grid_flow div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="grid_flow">
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
        </div>
        </div>
        <Conseptos texto={`Como te das cuenta ahora se crean como columnas y no como filas como antes.`}/>
        <h2>dense</h2>
        <Conseptos texto={`Esta propiedad se usa en caso de que haya un espacio sin usar esto detectara cual es ese campo sin rellenar y pondra la celda mas cercana para reemplazar ese espacio.`}/>
        
        <Html codigo={`<div class="grid_flow_dense">
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
</div>`}/>
        
        <Css codigo={`.grid_flow_dense{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    border: 4px solid #000;
    background-color: #4d635e;
    grid-auto-flow: dense;
}
.grid_flow_dense div{
    border: 2px solid #000;
    background-color: #211a1a88;
    color: #fff;
}
.grid_flow_dense div:nth-child(1){
    grid-column: 1/3;
    grid-row: 1/3;
}
.grid_flow_dense div:nth-child(2){
    grid-column: 4/5;
    grid-row: 4/5;
}
.grid_flow_dense div:nth-child(3){
    grid-column: 3/4;
    grid-row: 1/3;
}`}/>
        <div className="website">
          <div className="grid_flow_dense">
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
        </div>
        </div>
        <Conseptos texto={`En este caso no encontro ningun elemento que quepa en el espacio pero si ubiera lo pondria de forma automatica puedes jugar con grid para hacer que dense funcione.`}/>

        <div className="siguiente__parte">
          <Link to={"grid dinamico"}>grid dinamico</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default GridAuto;