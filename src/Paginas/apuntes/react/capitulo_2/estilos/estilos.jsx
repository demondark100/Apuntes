import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import ReactCode from "../../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./estilos.css";

import React , {useState} from "react";

function EstilosLinea(){

  return(
    <div style={{backgroundColor: "#0cff82"}}>
      <h1 style={{textAlign: "center",color: "#000"}}>estilizando</h1>
      <div style={{display: "flex",color: "#000",justifyContent: "space-between"}}>
        <p>elemento 1</p>
        <p>elemento 2</p>
      </div>
    </div>
  )
}



function OtroEjmLinea(){

  let contenedor = {
    backgroundColor: "#0cff82"
  }
  let titulo = {
    textAlign: "center",
    color: "#000"
  }
  let contenedor2 = {
    display: "flex",
    color: "#000",
    justifyContent: "space-between"
  }


  return(
    <div style={contenedor}>
      <h1 style={titulo}>estilizando</h1>
      <div style={contenedor2}>
        <p>elemento 1</p>
        <p>elemento 2</p>
      </div>
    </div>
  )
}

import moduleStyles from "./estilo.module.css";
import Terminal from "../../../../../componentes/lenguajes/Terminal";
import Scss from "../../../../../componentes/lenguajes/Scss";

function ModulosEstilos(){
  return(
    <div>
      <p className={moduleStyles.error}>esto es el color rojo</p>
      <p className={moduleStyles.exito}>esto es el color verde</p>
    </div>
  )
}


function EstilosReact() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Estilos</h1>
        <Conseptos texto={`Para dar estilos a un componente tenemos distintas formas de hacerlo.`}/>
        <h2>estilos en hoja distinta</h2>
        <Conseptos texto={`Para hacer esto es recomendable crear la nueva hoja en la misma carpeta donde esta el componente que queremos estilizar y ponerle el mismo nombre pero cambiando la extencion a css.
A diferencia de antes nosotros teniamos que llamar a css con la etiqueta "link" para poder entrelazar los estilos pero con react es un tanto distinto.`}/>
        <h2>lamando estilos</h2>
        <Sintaxis codigo={`import "./nombre del carchivo";
// de esta manera llamamos a la hoja de estilos con react.`}/>
        <ReactCode codigo={`import React , {useState} from "react";
import "./componentes.css"

function Estilos(){
  return(
    <div className="contenedor">
      <h1 className="titulo">estilizando</h1>
      <div className="elements_content">
        <p>elemento 1</p>
        <p>elemento 2</p>
      </div>
    </div>
  )
}


export default Estilos;`}/>
        <Css codigo={`.contenedor{
  background-color: #0cff82;
}
.titulo{
  text-align: center;
  color: #000;
}
.elements_content{
  display: flex;
  color: #000;
  justify-content: space-between;
}`}/>
        <ReactCode codigo={`import React from "react";
import Estilos from "./ruta";
export default function App(){
  return <Estilos />
}`}/>
        <div className="website">
          <div className="contenedorEstilosReact">
            <h1 className="tituloEstilosReact">estilizando</h1>
            <div className="elements_contentEstilosReact">
              <p>elemento 1</p>
              <p>elemento 2</p>
            </div>
          </div>
        </div>

        <h2>estilos en linea</h2>
        <Conseptos texto={`Aqui usaremos el atributo style para poder dar estilos , a diferencia de las hojas de estilo separadas aqui los estilos se trabajan con camelCase y se abrem dos llaves uno que sera para indicarle que sera codigo js y el otro para crear el objeto con los estilos.
{codigo javaScript { abrir objeto de estilos. } }`}/>
        <Sintaxis codigo={`<etiqueta
  style={{
    estilos de del componente
  }}
>
</etiqueta>`}/>
        <h2>ejemplo</h2>
        <ReactCode codigo={`import React , {useState} from "react";

function EstilosLinea(){

  return(
    <div style={{backgroundColor: "#0cff82"}}>
      <h1 style={{textAlign: "center",color: "#000"}}>estilizando</h1>
      <div style={{display: "flex",color: "#000",justifyContent: "space-between"}}>
        <p>elemento 1</p>
        <p>elemento 2</p>
      </div>
    </div>
  )
}
export default EstilosLinea;`}/>
        <ReactCode codigo={`import React from "react";
import EstilosLinea from "./ruta";
export default function App(){
  return <EstilosLinea />
}`}/>
        <div className="website">
          <EstilosLinea />
        </div>
        <h2>estilos en linea (otra forma de usarlas)</h2>
        <Conseptos texto={`Con esta forma creamos un objeto y le damos estilos , despues llamamos al objeto que creamos y lo ponemos en los estilos.`}/>
        <Sintaxis codigo={`let estilosParaContenedor = {
  estilos que quieras
}
let estilosParaParrafo = {
  estilos que quieras
}

<div style={estilosParaContenedor}>
  <p style={estilosParaParrafo>
    hola mundo
  </p>
</div>`}/>
        <h2>ejemplo de uso</h2>
        <ReactCode codigo={`import React , {useState} from "react";

function OtroEjmLinea(){

  let contenedor = {
    backgroundColor: "#0cff82"
  }
  let titulo = {
    textAlign: "center",
    color: "#000"
  }
  let contenedor2 = {
    display: "flex",
    color: "#000",
    justifyContent: "space-between"
  }


  return(
    <div style={contenedor}>
      <h1 style={titulo}>estilizando</h1>
      <div style={contenedor2}>
        <p>elemento 1</p>
        <p>elemento 2</p>
      </div>
    </div>
  )
}
export default OtroEjmLinea`}/>
        <ReactCode codigo={`import React from "react";
import OtroEjmLinea from "./ruta";
export default function App(){
  return <OtroEjmLinea />
}`}/>
        <div className="website">
          <OtroEjmLinea />
        </div>
        <h2>estilos por modulo</h2>
        <Conseptos texto={`Los estilos por modulo nos permite poner un estilo por defecto por asi decirlo por ejemplo uno que estilice el error y otro que estilice el exito.
para crear un estilo por modulo necesitamos crear una hoja de estilo aparte este debe llevar .modude.css para ser creado.
crear modulo de estilos:
nombre.module.css.
luego para importar un modilo de estilos necesitamos crear una variable que sera la que identificara a ese estilo de modulo.
ahora para usar un modilo necesitamos de la propiedad "className" pero en vez de las comillas "" debemos poner llaves {} y poner el estilo de modulo que queremos.`}/>
        <Sintaxis codigo={`import variable from "./ubicacion del archivo";

<p className={variable.a que estilo queremos acceder}>hola mundo</p>`}/>
        <h2>ejemplo de uso</h2>
        <ReactCode codigo={`import React , {useState} from "react";
import moduleStyles from "./estilo.module.css";

function ModulosEstilos(){
  return(
    <div>
      <p className={moduleStyles.error}>esto es el color rojo</p>
      <p className={moduleStyles.exito}>esto es el color verde</p>
    </div>
  )
}
export default ModulosEstilos;`}/>
        <Css codigo={`.error{
  background-color: #f00;
  color: #000;
}
.exito{
  background-color: #0f0;
  color: #000;
}`}/>
        <ReactCode codigo={`import React from "react";
import ModulosEstilos from "./ruta";
export default function App(){
  return <ModulosEstilos />
}`}/>
        <div className="website">
          <ModulosEstilos />
        </div>

        <h2>sass</h2>
        <Conseptos texto={`Para instalar "sass" necesitamos abrir una nueva terminal y poner:`}/>
        <Terminal codigo={`npm install node-sass.`}/>
        <Conseptos texto={`Para crear un archivo con sass necesitamos crear un estilo con la extencion scss.`}/>
        <Sintaxis codigo={`crear variable: $variable.
pseudoelementos: &:pseudoelemento{}

$colorAzul: #00f;
$colorRojo: #f00;

.elemento{
  background-color: $colorAzul;
  &:active{
    background-color: $colorRojo;
  }
}`}/>
        <h2>ejemplo de uso</h2>
        <ReactCode codigo={`import React from "react";
import "./estilos.scss";

function SassEjemplo(){
  return(
    <div>
      <h4 className="ejemplo">estilo con sass</h4>
    </div>
  )
}
export default SassEjemplo;`}/>
        <Scss codigo={`$colorVerde: #0f0;
$colorOpcaco: #00ff00a2;

.ejemplo{
  background-color: $colorVerde;
  color: #000;
  transition-duration: .5s;
  transition-timing-function: ease-in;
  &:hover{
    background-color: $colorOpcaco;
    cursor: ponter;
  }
}`}/>
        <ReactCode codigo={`import React from "react";
import SassEjemplo from "./ruta";
export default function App(){
  return <SassEjemplo />
}`}/>
        <div className="website">
          <h5 style={{backgroundColor: "#0f0"}} className="ejemplo">estilo con sass</h5>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default EstilosReact;