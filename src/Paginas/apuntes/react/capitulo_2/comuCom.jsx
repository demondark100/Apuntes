import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import { Component } from "react";

class Comunicacion extends Component{
  state = {
    contador: 0
  }
  
  incrementar=()=>{
    this.setState({
      contador: this.state.contador + 1
    })
  }

  decrementar=(e)=>{
    this.setState({
      contador: this.state.contador - 1
    })
  }

  divdir=()=>{
    this.setState({
      contador: this.state.contador / 2
    })
  }

  multiplicar=()=>{
    this.setState({
      contador: this.state.contador * 2
    })
  }
  
  
  render(){
    return(
      <div>
        <h5>comunicacion</h5>
        <p>{this.state.contador}</p>
        <Hijo 
          funcion={this.incrementar} 
          nombre="sumar + 1"
          simbolo="+"
        />
        <Hijo 
          funcion={this.decrementar} 
          nombre="restar - 1"
          simbolo="-"
        />

        <Hijo 
          funcion={this.multiplicar} 
          nombre="multiplicar * 2"
          simbolo="x"
        />
        <Hijo 
          funcion={this.divdir} 
          nombre="dividir / 2"
          simbolo="/"
        />
      </div>
    )
  }
}

function Hijo(props) {
  return(
    <div>
      <p>{props.nombre}</p>
      <button onClick={props.funcion}>{props.simbolo}</button>
    </div>
  )
}





function ComuCompReact() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>comunicacion entre componentes</h1>
        <Conseptos texto={`Esto nos sirve para poder pasar informacion de un componente padre a un componente hijo ahora aremos una practica.`}/>
        <ReactCode codigo={`import React from "react";
import { Component } from "react";

class Comunicacion extends Component{
  state = {
    contador: 0
  }
  
  incrementar=()=>{
    this.setState({
      contador: this.state.contador + 1
    })
  }

  decrementar=(e)=>{
    this.setState({
      contador: this.state.contador - 1
    })
  }

  divdir=()=>{
    this.setState({
      contador: this.state.contador / 2
    })
  }

  multiplicar=()=>{
    this.setState({
      contador: this.state.contador * 2
    })
  }
  
  
  render(){
    return(
      <div>
        <h5>comunicacion</h5>
        <p>{this.state.contador}</p>
        <Hijo 
          funcion={this.incrementar} 
          nombre="sumar + 1"
          simbolo="+"
        />
        <Hijo 
          funcion={this.decrementar} 
          nombre="restar - 1"
          simbolo="-"
        />

        <Hijo 
          funcion={this.multiplicar} 
          nombre="multiplicar * 2"
          simbolo="x"
        />
        <Hijo 
          funcion={this.divdir} 
          nombre="dividir / 2"
          simbolo="/"
        />
      </div>
    )
  }
}

export {Comunicacion}

function Hijo(props) {
  return(
    <div>
      <p>{props.nombre}</p>
      <button onClick={props.funcion}>{props.simbolo}</button>
    </div>
  )
}`}/>
        <ReactCode codigo={`import React from "react";
import Comunicacion from "./ruta";
export default function App(){
  return <Comunicacion />
}`}/>
        <div className="website">
          <Comunicacion />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ComuCompReact;