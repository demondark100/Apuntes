import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import ReactCode from "../../../../componentes/lenguajes/React";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function SintaxisJsxReact() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Con jsx evitamos usar DOM para seleccionar elemento por elemento y hacemos que los datos puedan cambiar de forma dinamica a medida que se actualizar los datos.",
        "lenguage": "ReactCode",
        "codigo": `{/*Una pequeña representacion de como funciona jsx*/}
let nombre = "Chester";
<p>{nombre}</p>`
      }]}/>
      <main>
        <h1>Sintaxis jsx</h1>
        <Conseptos texto={`Eeact como tal es como poner html css y javaScript en un solo archivo por ejemplo si queremos mostrar un valor de una variable normalmente seleccionariamos a la variable para poder dibujarlo en el DOM pero con jsx de react se facilita de mejor forma esta tarea.`}/>
        <h2>jsx</h2>
        <Conseptos texto={`Para poder poner del valor de una variable es necesario usar {}`}/>
        <ReactCode codigo={`let musica = "Smells Like Teen Spirit";
<h2>{musica}</h2>`}/>
        <div className="website">
          <p>Smells Like Teen Spirit</p>
        </div>
        <Conseptos texto={`Eeact tiene dos formas de implementar la sintaxis de jsx que es por funcion o por objeto.

siempre que queramos poner mas de un elemento es necesario crear un contenedor div.`}/>
        <h2>funcion</h2>
        <ReactCode codigo={`funcion Sintaxis(){
  return(
    <div>
      <h1>hola mundo</h1>
      <p>esto es la sintaxis de jsx.</p>
    </div>
  )
}`}/>
        <div className="website">
          <p>hola mundo</p>
          <b>esta es la sintaxis de jsx.</b>
        </div>
        <h2>objeto</h2>
        <Conseptos texto={`Para usar la sintaxis de objeto es necesario importarlo con:`}/>
        <ReactCode codigo={`import { Component } from "react";`}/>
        <ReactCode codigo={`import { Component } from "react";

class Sintaxis extends Component {
  render(){
    return(
      <div>
        <h1>hola mundo</h1>
        <p>esta es la sintaxis pero con objetos.</p>
      </div>
    )
  }
}`}/>
        <div className="website">
          <h5>hola mundo</h5>
          <p>esta es la sintaxis pero con objetos.</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default SintaxisJsxReact;