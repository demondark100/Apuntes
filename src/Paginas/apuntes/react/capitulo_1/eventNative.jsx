import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";



import {Component} from "react";

export class MostarE extends Component {
 
 eventosReact=(e)=>{
  console.log(e);
  // con esto mostramos de forma automatica los eventos de react.
  
  console.log(e.target);
  // con esto mostramos la propiedad target de react.
 }

 eventosNativos=(e)=>{
  console.log(e.nativeEvent);
  // con esto mostraremos los eventos nativos de javaScript.
 
  console.log(e.nativeEvent.target);
  // con esto mostramos la propiedad target de los eventos nativos,
 }

 render() {
  return(
   <div>
    <h6>mostrar eventos de reat y nativos</h6>
    <nav>
     <button onClick={this.eventosReact}>eventos react</button>
     <button onClick={this.eventosNativos}>eventos nativos javaScript</button>
    </nav>
   </div>
  )
 }
}



function EventNativeReact() {
  return (  
    <>
      <main>
        <h1>Eventos Nativos, Sintéticos & Personalizados</h1>
        <Conseptos texto={`Nosotros podemos acceder a los eventos que react obtimizo para los navegadores pero tambien podemos acceder a los eventos nativos de javaScript.`}/>
        <h2>eventos react</h2>
        <Conseptos texto={`Con estos eventos mostraremos los eventos que implemento react.`}/>
        <Sintaxis codigo={`importar { componente } de "react";

exportar clase Ejemplo extender componente {
 ejemplo1=(e)=>{
  mostrar.consola(e)
 }
 // con esto veremos las propiedades del evento.
 
 ejemplo2=(e)=>{
  mostrar.consola(e.target)
 }
 // con esto mostramos la propiedad "target" del evento.

 renderizar() {
  retornar(
   <divisor>
    <boton click={este.ejemplo1}>ejemplo 1</boton>
    <boton click={este.ejemplo2}>ejemplo 1</boton>
   </divisor>
  )
 }
}`}/>
        <h2>eventos nativos javaScript</h2>
        <Conseptos texto={`para poder mostrar los eventos nativos necesitaremos de "nativeEvent".`}/>
        <Sintaxis codigo={`importar { componente } de "react";

exportar clase Ejemplo extender componente {
 ejemplo1=(e)=>{
  mostrar.consola(e.nativeEvent)
 }
 // con este evento accedemos a los eventos nativos de javaScript.
 
 ejemplo2=(e)=>{
  mostrar.consola(e.nativeEvent.target)
 }
 // con esto mostramos la propiedad "target" del evento nativo de javaScript.

 renderizar() {
  retornar(
   <divisor>
    <boton click={este.ejemplo1}>ejemplo 1</boton>
    <boton click={este.ejemplo2}>ejemplo 1</boton>
   </divisor>
  )
 }
}`}/>
        <h2>ejmplo real</h2>
        <ReactCode codigo={`import {Component} from "react";

export class MostarE extends Component {
 
 eventosReact=(e)=>{
  console.log(e);
  // con esto mostramos de forma automatica los eventos de react.
  
  console.log(e.target);
  // con esto mostramos la propiedad target de react.
 }

 eventosNativos=(e)=>{
  console.log(e.nativeEvent);
  // con esto mostraremos los eventos nativos de javaScript.
 
  console.log(e.nativeEvent.target);
  // con esto mostramos la propiedad target de los eventos nativos,
 }

 render() {
  return(
   <div>
    <h4>mostrar eventos de reat y nativos</h4>
    <nav>
     <button onClick={this.eventosReact}>eventos react</button>
     <button onClick={this.eventosNativos}>eventos nativos javaScript</button>
    </nav>
   </div>
  )
 }
}`}/>
        <div className="website">
          <MostarE />
        </div>

        <h2>eventos sintaticos</h2>
        <Conseptos texto={`Los eventos sintaticos nos permite agregar mas parametros a un metodo para poder poner un mensaje por ejemplo.
como sabemos a la hora de usar los eventos cuando ponermos un parametro lo toma por defecto como eventos.`}/>
        <Sintaxis codigo={`funcion1 = (event)=>{
 // el primer parametro siempre sera el evento del click.
}

funcion2 = (event , parametro personalizado)=>{
 // tomara al parametro evento pero ahora agregamos al parametro personalizado para usarlo como queramos.
}`}/>
        <Sintaxis codigo={`importar componente de "react";

exportar clase Ejemplo extender de componente {
 funcion(e,parametroPersonalizado){
  mostrar.consola(parametroPersonalizado);
 }

 renderizar(){
  retornar(
   <divisor>
    <boton click={(evento)=>{
     esta.funcion(
      e,
      // parametro 1 el evento por defecto.

      "este es el mensaje que se mostrara"
      // parametro 2 el evento que se modificara.
      )
    }}>
     saludar
    </boton>
   </divisor>
  )
 }
}`}/>
        <h2>hacer un evento que salude</h2>
        <ReactCode codigo={`import {Component} from "react";

export default class Ejercicio extends Component{
 saludar=(e,mensaje)=>{
  console.log(mensaje)
 }

 render(){
  return(
   <div>
    <button onClick={(e)=>this.saludar(e,"hola humano")}>
     saludar
    </button>
   </div>
  )
 }
}`}/>
        <ReactCode codigo={`import React from "react";
import Ejercicio from "./ruta";
export default function App(){
  return <Ejercicio />
}`}/>
        <div className="website">
          <button onClick={()=>console.log("hola humano")}>saludar</button>
        </div>
        <h2>evento personalizado</h2>
        <Conseptos texto={`Con esto podremos usar un componente para que funcione como un boton personalizado.`}/>
        <Sintaxis codigo={`importar {componente} de "react";

funcion Personalizado=(props)=>{
  retornar <boton cuandoHagaClick={props.parametroParaHacerClick}>saludar al humano</boton>
  // este sera el boton que recibira el metodo/funcion de "saludo" 

}

exportar clase Ejemplo extender componente {
  saludo=(eventos,mensaje)=>{
    mostrar.consola(mensaje)
  
    // cuando se haga click en el componente personalizado se ejecutara esta funcion/metodo.
  }

  renderizar(){
    retornar(
      <diviso>
        <Personalizado 
          parametroParaHacerClick={
            (e)=>{
              este.saludo(e,"hola humano")
            }
          }
        />
        // aqui llamamos al componente , luego creamos un atributo para ponerle el metodo/funcion
      </diviso>
    )
  }
}`}/>
        <ReactCode codigo={`import {Component} from "react";

function Boton({click}){
  return <button onClick={click}>saludar al humano</button>
}

export class Personalizar extends Component{
  saludar=(e,mensaje)=>{
    console.log(mensaje)
  }

  render(){
    return(
      <div>
        <Boton
          click={(e)=>this.saludar(e,"hola humano")}
        />
      </div>
    )
  }
}`}/>
        <ReactCode codigo={`import React from "react";
import Personalizar from "./ruta";
export default function App(){
  return <Personalizar />
}`}/>
        <div className="website">
          <button onClick={()=>console.log("hola humano")}>saludar al humano</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EventNativeReact;