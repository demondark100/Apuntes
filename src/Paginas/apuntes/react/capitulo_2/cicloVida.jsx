import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";
import { Component } from "react";


class Reloj extends Component {
  constructor(props){
    console.log("El componente se inicializa , aun no se inicializa en el DOM.")
    super(props)
    this.state = {
      hora: new Date().toLocaleString(),
      isVisible: false
    }
    this.temporizador = null
  }

  componentDidMount(){
    console.log("1. El componente ya se encuentra en el DOM")
    // aqui se deben hacer las peticiones de apis
    // o bases de datos eso recomienda react y un
    // primo lejano y yo le creo XD.
  }
  
  componentDidUpdate(preProsp,preState){
    console.log("2. El estado , las props han cambiado.");
    console.log(preProsp);
    console.log(preState)

    // Este recibe dos parametros preProps las props que pueden
    // cambiar y preState los estados que se estam cambiando.
  }
  componentWillUnmount(){
    console.log("3. El componente ha sido eliminado del DOM.")
  }
  tiktak=()=>{
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleString()
      })
    }, 1000);
  }

  iniciar=()=>{
    this.setState({
      isVisible: true
    })
    this.tiktak()
  }
  detener=()=>{
    this.setState({
      isVisible: false
    })
    clearInterval(this.temporizador)
  }

  render(){
    console.log("El componente se redibuja en el DOM.")
    return(
      <>
        <h6>reloj con ciclo de vida</h6>
        {
          this.state.isVisible && <p>{this.state.hora}</p>
        }
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    )
  }
}

function CicloVidaReact() {
  return (  
    <>
      <main>
        <h1>ciclo de vida</h1>
        <Conseptos texto={`El siclo de vida en un componente de clase tiene 3 fases.

Montaje: Es cuando se inserta nuestros componentes en el DOM.
Actualizacion: Cuando se debe renderizar de nuevo un componente porque se le cambiaron propiedades.
Desmontaje: Cuando no necesitamos un componente y desaparece.`}/>
        <h2>componentDidMount</h2>
        <Conseptos texto={`React recomienda hacer las peticiones a Apis aqui debido a que ya se esta pintando en el DOM con lo cual podemos manejar la data de la Api.`}/>
        <h2>componentDidUpdate</h2>
        <Conseptos texto={`Aqui es donde se actualizan los estados y los props , estos se iran pintando en el DOM con el nuevo cambio que haya sucesido.`}/>
        <h2>componentWillUnmount</h2>
        <Conseptos texto={`Esto se ejecuta cuando el componente se elimina del DOM.`}/>
        <h2>reloj dijital</h2>
        <Conseptos texto={`Para entender mejor cada parte del ciclo de vida de un componente hacermos un reloj digital.`}/>
        <h3>codigo con mensjaes</h3>
        <ReactCode codigo={`class Reloj extends Component {
  constructor(props){
    console.log("El componente se inicializa , aun no se inicializa en el DOM.")
    super(props)
    this.state = {
      hora: new Date().toLocaleString(),
      isVisible: false
    }
    this.temporizador = null
  }

  componentDidMount(){
    console.log("1. El componente ya se encuentra en el DOM")
    // aqui se deben hacer las peticiones de apis
    // o bases de datos eso recomienda react y un
    // primo lejano y yo le creo XD.
  }
  
  componentDidUpdate(preProsp,preState){
    console.log("2. El estado , las props han cambiado.");
    console.log(preProsp);
    console.log(preState)

    // Este recibe dos parametros preProps las props que pueden
    // cambiar y preState los estados que se estam cambiando.
  }
  componentWillUnmount(){
    console.log("3. El componente ha sido eliminado del DOM.")
  }
  tiktak=()=>{
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleString()
      })
    }, 1000);
  }

  iniciar=()=>{
    this.setState({
      isVisible: true
    })
    this.tiktak()
  }
  detener=()=>{
    this.setState({
      isVisible: false
    })
    clearInterval(this.temporizador)
  }

  render(){
    console.log("El componente se redibuja en el DOM.")
    return(
      <>
        <h6>reloj con ciclo de vida</h6>
        {
          this.state.isVisible && <p>{this.state.hora}</p>
        }
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    )
  }
}
export Reloj;`}/>
        <ReactCode codigo={`import { Reloj } from "./ruta";
export default function App(){
  return <Reloj />
}`}/>
        <div className="website">
          <Reloj />
        </div>
        <h3>codigo sin mensajes</h3>
        <ReactCode codigo={`import { Component } from "react";
class Reloj extends Component {
  constructor(props){
    super(props)
    this.state = {
      hora: new Date().toLocaleString(),
      isVisible: false
    }
    this.temporizador = null
  }

  tiktak=()=>{
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleString()
      })
    }, 1000);
  }

  iniciar=()=>{
    this.setState({
      isVisible: true
    })
    this.tiktak()
  }
  detener=()=>{
    this.setState({
      isVisible: false
    })
    clearInterval(this.temporizador)
  }

  render(){
    return(
      <>
        <h6>reloj con ciclo de vida</h6>
        {
          this.state.isVisible && <p>{this.state.hora}</p>
        }
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    )
  }
}
export Reloj;`}/>
        <ReactCode codigo={`import { Reloj } from "./ruta";
export default function App(){
  return <Reloj />
}`}/>
        <div className="website">
          <Reloj />
        </div>

      </main>
      <Footer/>
    </>
  );
}

export default CicloVidaReact;