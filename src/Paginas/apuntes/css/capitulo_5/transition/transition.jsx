import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./transition.css";

function Transition() {
  return (  
    <>
      <main>
        <h1>transition</h1>
        <Conseptos texto={`Esto es para hacer trnasisiones en distintas cosas es como dar una animacion por ejemplo a los hover.
en simples palabras transition nos mostrara el proceso de un cambio a otro.`}/>
        <h2>ejemplo</h2>
        
        <Html codigo={`<div class="ejemplo1_tr">
    <p>
        hola.
    </p>
</div>`}/>
        
        <Css codigo={`.ejemplo1_tr{
    background-color: #000;
    color: #fff;

    transition-duration: .5s;
}
.ejemplo1_tr:hover{
    background-color: #0f0;
    color: #000;
}`}/>
        <div className="website">
          <div className="ejemplo1_tr">
              <p>
                  hola.
              </p>
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta al pasar el mouse sobre el elemento "p" se demora de pasar de un color a otro pasa como una transision.`}/>
        <h2>transition-property</h2>
        <Conseptos texto={`Con esto le indicaremos que propiedad queremos que se haga el cambio por ejemplo el background,color,font,etc.`}/>
        
        <Html codigo={`<div class="property_content">
    <div class="cajita1">

    </div>
</div>`}/>
        
        <Css codigo={`.property_content{
    background-color: #1815d1f8;
    height: 65%;
    padding: 10px;
}
.cajita1{
    width: 35%;
    height: 40%;
    background-color: #87d10f;

    transition-property: background;
    transition-duration: .5s;
}
.cajita1:hover{
    background-color: #2f87a1;
}`}></Css>
        <div className="website">
          <div className="property_content">
              <div className="property_content__cajita1">

              </div>
          </div>
        </div>
        <Conseptos texto={`En este caso le decimos que property haga la transision a el background siempre es necesario poner esta propiedad debido a que si no lo hacemos el sitio web consumira mas recursos por lo cual se comportara de forma mas lenta.`}/>
        <h2>transition-duration</h2>
        <Conseptos texto={`Esta propiedad es para dar cuanto tiempo va a durar la transision.
a estos les puedes poner segundos por ejemplo.
1s 2s 3s , etc.
y si queremos menos de un segundo se pone. 0.5s , 0.1s , 0.8s , etc.
pero podemos quitar el 0 y solo poner
.5s , .1s , .8s.
puedes ir jugando con los valores para que se adapten a tus gustos o estilos.`}/>
        
        <Html codigo={`<div class="duration_content">
    <div class="cajita2">

    </div>
</div>`}/>
        
        <Css codigo={`.duration_content{
    background-color: #000000f8;
    height: 65%;
    padding: 10px;
}
.cajita2{
    width: 35%;
    height: 40%;
    background-color: #ffffff;

    transition-property: background;
    transition-duration: 1s;
}
.cajita2:hover{
    background-color: #000000;
}`}/>
        <div className="website">
          <div className="duration_content">
              <div className="cajita2">

              </div>
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta la transision se hace en 1 segundo pero se puede cambiar ese tiempo por el que tu quieras.`}/>
        <h2>transition-delay</h2>
        <Conseptos texto={`Si queremos que la transision no se muestre al instante podemos hacer que se muestre dentro de un tiempo con transition-delay.`}/>
        
        <Html codigo={`<div class="delay_content">
    <div class="cajita3">
        
    </div>
</div>`}></Html>
        
        <Css codigo={`.delay_content{
    background-color: #000000f8;
    height: 65%;
    padding: 10px;
}
.cajita3{
    width: 35%;
    height: 40%;
    background-color: #ffffff;

    transition-property: background;
    transition-duration: 1s;
    transition-delay: 1s;
}
.cajita3:hover{
    background-color: #000000;
}`}></Css>
        <Conseptos texto={`mantenga el mouse en el cuadrado blanco por un segundo para que la transision se active`}></Conseptos>
        <div className="website">
          <div className="delay_content">
              <div className="cajita3">
                  
              </div>
          </div>
        </div>
        <h2>inherit</h2>
        <Conseptos texto={`esta propiedad ereda el color de su contenedor.`}></Conseptos>
        
        <Html codigo={`<div class="i_content">
    <div class="i_hijo">

    </div>
</div>`}></Html>
        
        <Css codigo={`.i_content{
    background-color: #2f87a1;
    width: 100%;
    height: 50%;
    padding: 15px;
}
.i_hijo{
    width: 35%;
    height: 35%;
    border: 2px solid #000;

    background-color: inherit;
}`}></Css>
        <div className="website">
          <div className="i_content">
              <div className="i_hijo">

              </div>
          </div>
        </div>
        <h2>transision-timing-function</h2>
        <Conseptos texto={`Esta propiedad es la curva del tiempo que se tardara en hacerse la animacion.`}></Conseptos>
        
        <Html codigo={`<div class="timing_content">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>`}></Html>
        
        <Css codigo={`.timing_content{
    padding: 25px;
    background-color: #2f87a1;
}

.timing_content div{
    border: 2px solid #000;
    margin: 15px;
    width: 25%;
    height: 50px;
    background-color: #000;
    transition-property: background left;
    transition-duration: 1s;
    position: relative;
    left: 0;
}

.timing_content:hover div{
    left: 50%;
    background-color: inherit;
}

.timing_content div:hover {
    background-color: inherit;
}
.timing_content div:nth-child(1){
    transition-timing-function: linear;
}
.timing_content div:nth-child(2){
    transition-timing-function: ease;
    /* "ease" es la propiedad que viene por defecto. */
}
.timing_content div:nth-child(3){
    transition-timing-function: ease-in;
}
.timing_content div:nth-child(4){
    transition-timing-function: ease-out;
}
.timing_content div:nth-child(5){
    transition-timing-function: ease-in-out;
}`}></Css>
        <div className="website">
          <div className="timing_content">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta las animaciones no van a la misma velocidad debido a que les cambiamos el timing , parece que unas llegan antes que otras pero en realidad llegan al mismo tiempo solo que la animacion hace una pequeña curva de tiempo , en simples palabras todas llegan en 1 segundo como nosotros le indicamos.`}></Conseptos>
        <h2>diferencia de tiempos</h2>
        <Conseptos texto={`Por ultimo en transition-property y transition-duration si queremos que el tiempo de las anicaciones sea una distinta de la otra se debe poner coma y siempre ira en orden.`}></Conseptos>
        <h2>pseudocodigo:</h2>
        <Css codigo={`transition-property: background , left;
transition-durantion: tiempo de background , tiempo de left;`}></Css>
        
        <Css codigo={`transition-property: background , left;
transition-durantion: tiempo de background , tiempo de left;`}></Css>
        
        <Html codigo={`<div class="diferencia_content">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>`}></Html>
        
        <Css codigo={`.diferencia_content{
    padding: 25px;
    background-color: #2f87a1;
}
.diferencia_content div{
    border: 2px solid #000;
    margin: 15px;
    width: 25%;
    height: 50px;
    background-color: #000;
    transition-property: background , left;
    transition-duration: .4s , 1.2s;
    position: relative;
    left: 0;
}
.diferencia_content:hover div{
    left: 50%;
    background-color: inherit;
}



.diferencia_content div:hover {
    background-color: inherit;
}
.diferencia_content div:nth-child(1){
    transition-timing-function: linear;
}
.diferencia_content div:nth-child(2){
    transition-timing-function: ease;
}
.diferencia_content div:nth-child(3){
    transition-timing-function: ease-in;
}
.diferencia_content div:nth-child(4){
    transition-timing-function: ease-out;
}
.diferencia_content div:nth-child(5){
    transition-timing-function: ease-in-out;
}`}></Css>
        <div className="website">
            <div className="diferencia_content">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <Conseptos texto={`Como te das cuenta el background hace su transision mas rapido que left.`}></Conseptos>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Transition;