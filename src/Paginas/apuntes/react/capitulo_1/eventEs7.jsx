import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import { useState } from "react";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function EventEs7React() {
  
  const [contador, setContador] = useState(0);

  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Esto es una forma mas sensilla de programar con POO en react porque se evita hacer "bin" a cada variable de estado, pero con hooks sigue siendo mas facil.`,
        "lenguage": "ReactCode",
        "codigo": `import { Component } from "react";

export default class Mejorar extends Component {
  state = {
    contador: 0
  }

  incrementar = () =>{
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return(
      <div>
        <h2>incremento</h2>
        <p>{this.state.contador}</p>
        <nav>
          <button onClick={this.incrementar}>+</button>
        </nav>
      </div>
    )
  }
}`
      }]}/>
      <main>
        <h1>eventos(ES7)</h1>
        <Conseptos texto={`Con la llegadade ES7 ya no es necesario usar "constructor" para poder definir this ya que podemos hacerlo en menos codigo , para eso usaremos las funciones flecha que simplificaran el bindeo.`}/>
        <Sintaxis codigo={`importar {componente} de "react";

exportar clase Ejemplo extiende componente {
  este.estado({
    valor: "contenido"
  })

  // como te das cuenta no es necesario el constructor.

  funcion = (evento) =>{
    mostrar.consola(este)
  }

  // ahora usamos la sintaxis de la funcion flecha para mejorar el codigo.

  render(){
    return(
      contenido
    )
  }
}`}/>
        <h2>mejorar el contador</h2>
        <ReactCode codigo={`import { Component } from "react";

export default class Mejorar extends Component {
  state = {
    contador: 0
  }

  incrementar = () =>{
    this.setState({
      contador: this.state.contador + 1
    })
  }

  decrementar = () =>{
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return(
      <div>
        <h2>contador :D</h2>
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
import Mejorar from "./ruta";
export default function App(){
  return <Mejorar />
}`}/>
        <div className="website">
          <h6>Contador :D</h6>
          <p>{contador}</p>
          <nav>
            <button onClick={()=>setContador(contador +1)}>+</button>
            <button onClick={()=>setContador(contador -1)}>+</button>
          </nav>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default EventEs7React;