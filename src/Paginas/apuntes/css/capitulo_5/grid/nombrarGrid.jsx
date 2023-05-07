import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function NombrarGrid() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>nombrar lineas grid</h1>
        <Conseptos texto={`sin nombrar lineas`}/>
        <h3>html</h3>
        <Html codigo={`<div class="sin_nombrar">
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
        <h3>css</h3>
        <Css codigo={`.sin_nombrar{
    background-color: #bb9d9d66;
    border: 2px solid #000;
    display: grid;
    grid-template-rows: repeat(3,120px);
    grid-template-columns: repeat(3,1fr);
}
.sin_nombrar div{
    border: 2px solid #000;
    background-color: #00000066;
    color: #ffff;
}
.sin_nombrar div:nth-child(1){
    grid-column: 1/span 2;
    grid-row: 1/span 2;
}`}/>
        <div className="website">
          <div className="sin_nombrar">
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
        <Conseptos texto={`Si queremos designar un area podemos ponerle nombres a las lineas para hacerlos "mas facil".`}/>

        <h2>con nombrar lineas</h2>
        <Conseptos texto={`Para poder nombrar lineas es necesario hacerlos desde el contenedor en cada medida que hagamos es necesario que los nombres esten dentro de [] y no deben llevar comillas.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`grid-template-columns:
[nombre de linea]
medida.
[nombre de linea]
medida
[nombre de linea]
medida
[nombre de linea];`}/>
        <h3>css</h3>
        <Css codigo={`grid-template-columns:
[nombre de linea]
medida.
[nombre de linea]
medida
[nombre de linea]
medida
[nombre de linea];`}/>
        <h2>ejemplo de uso</h2>
        <h3>html</h3>
        <Html codigo={`<div class="con_nombrar">
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
        <h3>css</h3>
        <Css codigo={`.con_nombrar{
    background-color: #000000;
    border: 2px solid #000;
    display: grid;
    grid-template-rows: 
        [linea_1]
        120px
        [linea_2]
        120px
        [linea_3]
        120px
        [linea_4]
    ;
    grid-template-columns: 
        [primera_linea]
        120px
        120px
        120px
        [ultima_linea]
    ;
}
.con_nombrar div{
    border: 2px solid #000;
    background-color: #8f7070;
}

.con_nombrar div:nth-child(1){
    grid-column: primera_linea/ ultina_linea;
    grid-row: linea_1/linea_3;
    background-color: #ff1111;
}`}/>
        <div className="website">
          <div className="con_nombrar">
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
      </main>
      <Footer />
    </>
  );
}

export default NombrarGrid;