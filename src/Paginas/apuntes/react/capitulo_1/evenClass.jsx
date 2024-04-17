import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";
import { useState } from "react";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function EventClassReact() {

  const [contador, setContador] = useState(0);

  return (
    <>
      <Resumenes contenido={[{
        "mensaje": "Con esto daremos funcionalidad a una app con POO pero es recomendable leer todo para entender mejor, ademas con Hooks es mas facil."
      }]}/>
      <main>
        <h1>eventos(ES6)</h1>
        <Conseptos texto={`Los eventos de clase nos sirve para darle funcionalidad a un boton , trabajar con este tipo de eventos nos traera problemas con "this" para eso esque esta bind que es para que se pueda detectar los cambion de las funciones.`}/>
        <h2>bind</h2>
        <Conseptos texto={`".bind(this)" con esto reconoceremos el this de un metodo/funcion.`}/>
        <ReactCode codigo={`.bind(this)`}/>
        <h2>onClick</h2>
        <Conseptos texto={`Esto es igual al html solo que en vez de usar "" usaremos {} para hacerlo todo de forma dinamica.`}/>
        <ReactCode codigo={`objeto {
  constructor(){
    this.funcion = this.funcion.bind(this)
  }
}


  funcion(){
    //hacer algo.
  }

// aqui estamos bindeando this para que no quede vacio y corrijamos errores a futuro.

  render() {
    return(
      <button onClick={this.funcion}></button>
    )
  }

// para llamar a la funcion/metodo debemos usar this debido a que es programacion orientada  a objetos :v.`}/>
        <h2>hacer contador</h2>
        <ReactCode codigo={`import React from "react";
import {Component} from "react";

// primero importamos react y el componente para trabajar con programacion orientada a objetos.

export class Contador extends Component {
  constructor(props){
    super(props)
    this.state = {
      contador: 0
    }

    //aqui crearemos un estado con contador para que aumente o disminuya disminuya dinamicamente.
    
    this.incrementar = this.incrementar.bind(this)
    this.decrementar = this.decrementar.bind(this)

    // aqui estamos bindeando para que a la hora de usar this en los metodos no nos retorne "undefined" y por consecuente nos de error.
  }

  incrementar(){
    this.setState({
      contador: this.state.contador + 1
    })

    // aqui estamos creando un estado para que el contador se incremente.

  }

  decrementar() {
    this.setState({
      contador: this.state.contador - 1
    })

    // aqui estamos decrementando de uno a uno.
  }

  render(){
    return(
      <div>
        <h4>contador</h4>
        <p>{this.state.contador}</p>
        
        // en este "p" sera donde se hara el cambio dinamico osea estamos diciento que al principio sera 0 ya que en el constructor indicamos que el valor sera 0.

        <nav>
          <button onClick={this.incrementar}>+</button>
          <button onClick={this.decrementar}>-</button>
          
          // ahora estamos creando el evento llamando a las funciones correspondientes.
        
        </nav>
      </div>
    )
  }
}`}/>
        <h3>codigo sin comentarios</h3>
        <ReactCode codigo={`import { Component } from "react"


export class RenderE extends Component {
  constructor(props){
    super(props)
    this.state = {
      contador: 0
    }
    
    this.incrementar = this.incrementar.bind(this)
    this.decrementar = this.decrementar.bind(this)

  }

  incrementar(){
    this.setState({
      contador: this.state.contador + 1
    })
  }

  decrementar() {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render(){
    return(
      <div>
        <h4>contador</h4>
        <p>{this.state.contador}</p>
        

        <nav>
          <button onClick={this.incrementar}>+</button>
          <button onClick={this.decrementar}>-</button>
                  
        </nav>
      </div>
    )
  }
}`}/>
        <ReactCode codigo={`import React from "react";
import RenderE from "./ruta";
export default function App(){
  return <RenderE />
}`}/>
        <div className="website">
          <h6>contador</h6>
          <p>{contador}</p>
          <nav>
            <button onClick={()=>setContador(contador +1)}>+</button>
            <button onClick={()=>setContador(contador -1)}>-</button>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default EventClassReact;