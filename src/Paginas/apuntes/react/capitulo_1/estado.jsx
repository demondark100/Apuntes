import { useEffect } from "react";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import { useState } from "react";




function EstadoReact() {

  const [contador, setContador] = useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setContador(contador + 1);
    }, 1000);
  })

  return (  
    <>
      <main>
        <h1>Estado</h1>
        <Conseptos texto={`el estado es el conjunto de variables que intervienenen en el componente

Este tiene 3 caracteristicas.
inmutable: cuando se modifica el estado se crea una copia de respaldo , despues se agrega lo nuevo a esa copia.
no se puede modificar directamente.
es aincrono: para eso es que react tiene un metodo el cual es "setState".

Al principio estos se aplicaban solamente a los objetos pero esto se fue modificando para que tambien se pueda en funciones.`}/>
        <Sintaxis codigo={`this.setState({
    propiedad: "valor"
})`}/>
        <Conseptos texto={`Ahora veremos como podemos usar los estados haciendo un contador que se ira actualizando.`}/>
        <h2>setState</h2>
        <ReactCode codigo={`import { Component } from "react";

export class Estado extends Component {
  constructor (props){
    super(props)
    this.state = {
      contador: 0
    }
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      })
    }, 1000);
  }

  render(){
    return(
      <div>
        <h1>Estado</h1>
        <p>{this.state.contador}</p>
      </div>
    )
  }
}`}/>
        <h3>app.js</h3>
        <ReactCode codigo={`import React from "react";
import Estado from "./ruta";
function App(){
  return(
    <Estado />
  )
}
export default App`}/>
        <div className="website">
          <h5>Estado</h5>
          <p>{contador}</p>
        </div>
        <h2>explicacion</h2>
        <Conseptos texto={`1. importamos el componente de react.
2. luego creamos y exportamos la clase Estado
3. creamos un constructor con props para modificarlo mas adelante y eso tambien lo eredaremos con super
4. creamos una variable llamada state que sera un objeto que almacenara un contador que inicia desde 0
5. usamos la funcion "setInterval" y dentro de esta usaremos "setState" el cual agarrara la variable contador para poder sacarle la copia y mostrarla ya modificada
6. por ultimo la mostramos en el componente`}/>
        <h2>un ejemplo mas</h2>
        <ReactCode codigo={`import { Component } from "react";

function ContadorHijo(props){
  return(
    <div>
      <p>{props.contar}</p>
    </div>
  )
}


export class Estado extends Component {
  constructor (props){
    super(props)
    this.state = {
      contador: 0
    }
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      })
    }, 1000);
  }
  
  render(){
    return(
      <div>
        <h1>Estado</h1>
        <p>{this.state.contador}</p>
        <ContadorHijo 
          contar={this.state.contador}
        />
      </div>
    )
  }
}`}/>
        <h3>app.js</h3>
        <ReactCode codigo={`import React from "react";
import Estado from "./ruta";
function App(){
  return(
    <Estado />
  )
}
export default App`}/>
        <div className="website">
          <h5>estado</h5>
          <p>{contador}</p>
          <p>{contador}</p>
        </div>

      </main>
      <Footer/>
    </>
  );
}

export default EstadoReact;