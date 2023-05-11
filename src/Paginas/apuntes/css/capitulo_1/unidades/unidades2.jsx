import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function Unidades2() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>unidades parte 2 <b>(la venganza :v)</b></h1>
        <Conseptos texto={`Ahora vamos a ver mas medidas relativas pero esta vez para las cagitas posdata todas las propiedades nuevas que veremos son medidas relativas no fijas.

para entender mejor debemos aprender la propiedad "background-color".
background-color: es una propiedad que sirve para darle color de fondo a una cagita ejemplo.`}/>
        <h2>background-color</h2>
        <h3>html</h3>
        <Html codigo={`<div id="cagita_roja">
  <p>
    la caja sera color roja.
  </p>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`#cagita_roja{
  background-color: red;
}
#cagita_roja p{
  color: white;
}`}/>
        <div className="website">
          <div id="cagita_roja">
            <p>
              la caja sera color roja.
            </p>
          </div>
        </div>

        <Conseptos texto={`Ahora que entendimos como funciona "background-color" continuaremos con las medidas relativas y empecemos con:

viewportHeight y viewportWidth:
viewportHeight: es todo el alto de la pantalla.
viewportWidth: es todo el ancho de la pantalla.
ahora para escribir los viewport en css debemos poner "vh" y "vw".
"vh" = viewportHeight.
"vw" = viewportWidth.

"width" es la propiedad que indica el ancho de la pantalla.
"height" es la propiedad que indica la altura de la panatalla.`}/>

        <h2>ejemplo de uso</h2>
        <h3>html</h3>
        <Html codigo={`<div>
  <p>
    este body ocupara toda la pantalla.
  </p>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`div{
  background-color: black;
  width: 100vw;
  height: 100vh;
}
div p{
  color: white;
}`}/>
        <Conseptos texto={`con "100vw" estamos diciendo que ocupe el ancho de toda la pantalla.
con "100vh" estamos diciendo que ocupe la altura de toda la panatalla.
tu puedes cambiar los valores para que ocupen la medida que desees y veras que se adapta a todas las resoluciones.`}/>
        <div className="website">
          <div className="viewport">
            <p className="viewport__hijo">
              este body ocupara toda la pantalla.
            </p>
          </div>
        </div>

        <h2>porcentajes</h2>
        <Conseptos texto={`Estos son similares al viewport pero estos solo llegaran al ancho del contenedor no de toda la pantalla.
ejemplo:`}/>
        <h3>html</h3>
        <Html codigo={`<div class="contenr_1">
  <div class="content_porcentaje">
  </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.contenr_1{
  width: 256px;
  height: 256px;
  background-color: black;
}
.content_porcentaje{
  width: 100%;
  height: 50%;
  background-color: greenyellow;
}`}/>
        <Conseptos texto={`al div "content_porcentaje" le pusimos que ocupe de ancho el 100% pero solo ocupo de su contenedor mas no de la pantalla al igual con el height solo ocupo el alto de su contenedor pero no de toda la pantalla como pasaba con "viewport"`}/>
        <div className="website">
          <div class="porcentaje">
            <div class="porcentaje__hijo">
            </div>
          </div>
        </div>



      </main>
      <Footer />
    </>
  );
}

export default Unidades2;