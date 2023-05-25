import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import { useState , useRef } from "react";
import "./unidades.css";
import Rem from "./rem";

function Unidades() {
  const [showRem, setShowRem] = useState(false);
  const contentedor__Rem = useRef(null);
  const rem = () =>{
    setShowRem(true)
    contentedor__Rem.current.style.top = `${window.scrollY}px`;
    document.body.classList.add("modal-open");
    setTimeout(() => {
      setShowRem(false)
      document.body.classList.remove("modal-open")
    }, 5000);
  }

  return (  
    <>
      <Menu2 />
      <main>
        <h1>unidades</h1>
        <Conseptos texto={`Tenemos dos tipos de medidas.
relativas: 
son medidas que dependen de algo osea son variables.
fijas: 
estos no cambiaran de medida ya que son fijas :v.

Para continuar debemos entender que es la propìedad "font-size".`} />

        <h2>font-size</h2>
        <Conseptos texto={`"font-size" nos sirve para cambiar el tamaño de los textos.
en las medidas fijas tenemos:
px: Estos son medidas fijas que trabajan con pixeles.
cm: estas medidas son cm a escala real.
ml: esto tambien se manejan a milimetros reales.
pt: son medidas por puntos.
mayormente se suele usar px/pixeles pero puedes usar cualquiera.

Aqui un ejemplo del como se usa "font-size" en vez de px puedes poner cualquier medida. cm,pt,ml,etc.`}/>
        <h2>ejemplo</h2>
        <Html codigo={`<h6 class="subtitulo_1">
  este es un subtitulo feliz.
</h6>`}/>
        <Css codigo={`.subtitulo_1{
  font-size: 23px;
}`}/>
        <div className="website">
          <h6 class="fontSize1">
              este es un subtitulo feliz.
          </h6>
        </div>

        <h2>con medidas fijas.</h2>
        <Conseptos texto={`Al usar medidas fijas nos puede traer un problema el cual si queremos trabajar con resoluciones las medidas de las letras no cambiaran su tamaño.
si nos fijamos la cagita que esta adentro tiene una medida fija la cual mientras hagamos mas pequeña la resolucion la cagita que esta dentro se saldra de su contenedor y eso nos traera problemas
para poder hacer la resolucion mas pequeña hacer ctrl + la ruedita del mouse y si estas en movil veras que la cagita de adentro sobresale debido a que es una medida fija y no esta adaptado para moviles.`}/>

        <div className="medidas">
          <div className="medidas__caja">
            <div className="medidas__caja--hijo"></div>
          </div>
        </div>

        <h2>medidas relativas</h2>
        <Conseptos texto={`las medidas relativas si se adaptan a las resoluciones a medida que la resolucion se haga mas pequeña o grande.

en medidas relativas tenemos a Rem y a Em.

estas son como usar porcentajes cosa que veremos mas adelante pero en simples palabras las letras se adaptaran a la resolucion.`}/>
        <h2>Em</h2>
        <Conseptos texto={`las unidades "em" se ajustan al font-size de algun contenedor padre.
ejemplo`} />
        <Html codigo={`<div class="contenedor_padre">
  <p class="contenedor_hijo">
    esto se ajustara segun el padre.
  </p>
</div>`}/>
        <Css codigo={`.contenedor_padre{
  font-size: 18px;
}
.contenedor_hijo{
  font-size: 1em;
}`}/>
        <Conseptos texto={`En este caso "1em" es igual a 18 px pero si al contenedor le ponemos 20px "1em" sera igual a 20px puedes ir jugando con esas escalas si ponemos 2em sera 40px y asi sucesivamente.`}/>
        <div className="website">
          <p className="emParrafo">
            esto se ajustara segun el padre.
          </p>
        </div>

        <h2 onClick={rem} className="rem">Rem</h2>
        <div ref={contentedor__Rem} className={`remConent ${showRem ? "mostrarRem": ""}`}>
          {
            showRem && <Rem />
          }
        </div>

        <Conseptos texto={`Las unidades rem no toman el font-size del contenedor padre si no que toman el font-size del body.`}/>
        <Html codigo={`<p class="parrafo_rem">
  esto toma las medidas del body.
</p>`}/>
        <Css codigo={`.parrafo_rem{
  font-size: 1.50rem;
}`}/>
        <Conseptos texto={`Lo unico malo de rem esque tienes que andar calculando para tener las medidas que desees ya que rem toma como medidas a la raiz del documento html es mas facil trabajar con "em" (recomendado EM).`}/>
        <div className="website">
          <p className="parrafo_rem">
            esto toma las medidas del body.
          </p>
        </div>

        <Conseptos texto={`Para entender mejor la resolucion relativa aqui un grafico.
como te das cuenta el cuadradito de adentro se adapta asi es como funciona las medidas relativas tenlo en cuenta ya que estos graficos de medidas fijas/relativas tambien explican como funciona "responsive desing" el cual veremos mas adelante.`}/>
        <div className="relativa">
          <div className="relativa__hijo">
            <div className="relativa__hijo--caja"></div>
          </div>
        </div>

        <div className="siguiente__parte">
          <Link to={"unidades2"}>unidades parte 2</Link>
        </div>


      </main>
      <Footer />
    </>
  );
}

export default Unidades;