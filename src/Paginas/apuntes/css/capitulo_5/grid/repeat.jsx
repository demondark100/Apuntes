import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function RepeatCss() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>repeat</h1>
        <Conseptos texto={`Esta propiedad nos ayudara a resumir el codigo para definir cuabtas filas y columnas queremos en nuestra grisha.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`grid-template-rows: repeat(cuantas veces , medidas);`}/>
        <h2>sin repeat</h2>
        <h3>html</h3>
        <Html codigo={`<div class="sin_repeat">
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
        <Css codigo={`.sin_repeat{
    border: 5px solid #87d10f;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.sin_repeat div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="sin_repeat">
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
        <h2>con repeat</h2>
        <h3>html</h3>
        <Html codigo={`<div class="con_repeat">
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
        <h1>css</h1>
        <Css codigo={`.con_repeat{
    border: 5px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
}
.con_repeat div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="con_repeat">
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

        <div className="siguiente__parte">
          <Link to={"gridImEx"}>grid implicito y grid explicito</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default RepeatCss;