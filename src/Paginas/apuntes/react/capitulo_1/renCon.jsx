import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function RenConReact() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Renderizado Condicional</h1>
        <Conseptos texto={`Con esto mostraremos un componente segun sea en la pantalla de hecho este tipo de estructura lo veras a menudo en proyectos react.
Para esto usaremos el operador ternario.`}/>
        <h2>ejercicio</h2>
        <ReactCode codigo={`import {Component} from "react";

function Login(){
  return(
    <div>
      <h3>logeado exitosamente</h3>
    </div>
  )
}

function Logout(){
    return(
      <div>
        <h3>no ha sido logeado</h3>
      </div>
    )
}

export class Condicional extends Component{
  constructor(props){
    super(props)
    this.state = {
      sesion: true
    }
  }
  render(){
    return(
      (this.state.sesion) ? <Login /> : <Logout />
    )
  }
}`}/>
        <h3>app.js</h3>
        <ReactCode codigo={`import React from "react";
import Condicional from "./ruta";
export default function App(){
  return <Condicional />
}`}/>
        <div className="website">
          <h5>logeado exitosamente</h5>
        </div>
        <h2>explicando el codigo</h2>
        <Conseptos texto={`1. creanis 2 componentes "Login" y otro "Logout" ambos retornan un simple texto.
2. creamos una clase y una variable "sesion" para que sea el valor para probar la condicional.
3. llamamos a los 2 componentes para que se muestren segun sea "true" o "false".`}/>
      </main>
      <Footer/>
    </>
  );
}

export default RenConReact;