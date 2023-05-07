import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import { Link } from "react-router-dom";
import Capitulos from "../../../../../aside";

function AlineacionFlex() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>alineacion flex</h1>
        <h2>alineamiento horizontal(hechado _ )</h2>
        <Conseptos texto={`Nosotros podemos alinear a los elementos hijos desde el contenedor y es muy practico , esto se logra con "justify-content"

justify-content tiene distintas propiedades para poder ajustar a los elementos hijos de un contenedor.

center: esto es para centrar el contenido.
space-around: hace que las cajas tengan el mayor espacio posible.
space-between: les da un margin auto a todas las cajas.
space-evenly: hace que las cajas tenga un mismo margin.`}/>

        
        <h2>justify-content</h2>
        <h3>html</h3>
        <Html codigo={`<h2>center</h2>
<div class="center">
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

<h2>space around</h2>

<div class="space_around">
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

<h2>space between</h2>

<div class="space_between">
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

<h2>space evenly</h2>

<div class="space_evenly">
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
</div>`} />
          <h3>css</h3>
          <Css codigo={`body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #000;
}

h2{
    text-align: center;
    font-size: 1.8em;
    color: #32fff5;
    text-shadow: -2px -2px 15px #32fff5;
}


/* center */

.center{
    display: flex;
    justify-content: center;
}
.center div{
    color: #fff;
    width: 120px;
    height: 120px;
    border: 2px solid #57ff09;
}


/* space-around */

.space_around{
    display: flex;
    justify-content: space-around;
}
.space_around div{
    color: #fff;
    width: 120px;
    height: 120px;
    border: 2px solid #57ff09;
}


/* space-between */

.space_between{
    display: flex;
    justify-content: space-between;
}
.space_between div{
    color: #fff;
    width: 120px;
    height: 120px;
    border: 2px solid #fff;
}


/* space-evenly */

.space_evenly{
  display: flex;
  justify-content: space-evenly;
}
.space_evenly div{
  color: #fff;
  width: 120px;
  height: 120px;
  border: 2px solid #fff;
}`}/>
        <div className="siguiente__parte">
          <Link to={"alineacionFlx"}>resultado</Link>
        </div>

        <h2>alineamiento vertical(parado | )</h2>
        <Conseptos texto={`Esto tiene dos propiedades para alinear los elementos los cuales son:

align-items , align-content estos tiene como parametros a.

flex-start: que es para poner a los elementos al inicion.
center: que es para centrar a los elementos.
flex-end: que es para poner a los elementos al final.

"align-items" alineara solo una linea.
"align-content" alineara todas las lineas.`}/>

          <h2>align-items</h2>
          <h3>html</h3>
          <Html codigo={`<div class="content_items">
  <div class="start">
    <div>
      start.
    </div>
  </div>
  <div class="center">
    <div>
      center.
    </div>
  </div>
  <div class="end">
    <div>
      end
    </div>
  </div>
</div>`}/>
          <h3>css</h3>
          <Css codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content_items{
  margin-top: 15px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
}



.start{
  height: 100vh;
  display: flex;
  align-items: flex-start;
}
.start div{
  border: 2px solid #0df795;
  color: #0df795;
  font-size: 1.5em;
  width: 120px;
  height: 120px;
}


.center{
  height: 100vh;
  display: flex;
  align-items: center;
}
.center div{
  border: 2px solid #0df795;
  color: #0df795;
  font-size: 1.5em;
  width: 120px;
  height: 120px;
}


.end{
  height: 100vh;
  display: flex;
  align-items: flex-end;
}
.end div{
  border: 2px solid #0df795;
  color: #0df795;
  font-size: 1.5em;
  width: 120px;
  height: 120px;
}`}/>
          <div className="siguiente__parte">
            <Link to={"alineacionAlign"}>resultado</Link>
          </div>

          <h2>flex-start vs stretch</h2>
          <Conseptos texto={`"flex-start" no viene por defecto como probablemente creias , la propiedad que viene por defecto es stretch.`}/>
          <h3>html</h3>
          <Html codigo={`<h3>stretch</h3>
<div class="stretch">
  <div>
    stretch
  </div>
  <div>
    stretch
  </div>
</div>

<h3>flex-start</h3>
<div class="flex_start">
  <div>
    flex-start
  </div>
  <div>
    flex-start
  </div>
</div>`}/>
          <h3>css</h3>
          <Css codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.stretch{
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.stretch div{
  border: 2px solid #03cdff;
  color: #03cdff;
  margin: 15px;
}

.flex_start{
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.flex_start div{
  border: 2px solid #03cdff;
  color: #03cdff;
  margin: 15px;
}`}/>
          <div className="siguiente__parte">
            <Link to={"resultadoStart"}>resultado</Link>
          </div>
          <Conseptos texto={`Como te das cuenta "stretch" estira al contenedor cosa que flex-start no hace.`}/>

          <h2>align-content</h2>
          <h3>html</h3>
          <Html codigo={`<h3>sin align-content</h3>
<div class="align_content1">
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
</div>


<h3>con align-content</h3>
<div class="align_content2">
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
</div>`}/>
          <h3>css</h3>
          <Css codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h3{
  color: #03cdff;
  text-shadow: 5px 5px 15px #03cdff;
  font-size: 1.5em;
  text-align: center;
}


.align_content1{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid #03cdff;
  flex-wrap: wrap;
}
.align_content1 div{
  border: 2px solid #03cdff;
  color: #03cdff;
  margin: 15px;
}


.align_content2{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  border: 2px solid #03cdff;
  flex-wrap: wrap;
}
.align_content2 div{
  border: 2px solid #03cdff;
  color: #03cdff;
  margin: 15px;
}`}/>
          <div className="siguiente__parte">
            <Link to={"alignContent"}>resultado</Link>
          </div>
          <Conseptos texto={`Como te das cuenta al usar "align-items" solo se alinea una linea pero con align-content alineamos todas las lineas.`}/>

          <h2>align-self</h2>
          <Conseptos texto={`Tambien podemos alinear a solo una caja con align-self , esta obtendra los mismos parametros que los demas.`}/>
          <h3>html</h3>
          <Html codigo={`<h3>align-self</h3>
<div className="AlignSelfCajas">
  <div className="AlignSelfCajas__caja1">
    caja 1
  </div>
  <div className="AlignSelfCajas__caja2">
    caja 2
  </div>
  <div className="AlignSelfCajas__caja3">
    caja 3
  </div>
</div>`}/>
          <h3>css</h3>
          <Css codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h3{
  text-shadow: 5px 5px 15px #21fa74;
  color: #21fa74;
  font-size: 1.5em;
  text-align: center;
}

.AlignSelfCajas{
  height: 100vh;
  border: 2px solid #21fa74;
  display: flex;
  justify-content: center;
}
.AlignSelfCajas__caja1{
  align-self: flex-start;
  color: #21fa74;
  border: 2px solid #21fa74;
}
.AlignSelfCajas__caja2{
  align-self: center;
  color: #21fa74;
  border: 2px solid #21fa74;
}
.AlignSelfCajas__caja3{
  align-self: flex-end;
  color: #21fa74;
  border: 2px solid #21fa74;
}`}/>
          <div className="siguiente__parte">
            <Link to={"AlignSelf"}>resultado</Link>
          </div>
          <Conseptos texto={`"align-self" a diferencia de "align-items" y "align-content" se aplica para los elementos hijos del contenedor y esto sirve para alinear una caja en especifico.`}/>

          <div className="siguiente__parte">
            <Link to={"flex-grow"}>flex-grow</Link>
          </div>

      </main>
      <Footer />

    </>
  );
}

export default AlineacionFlex;