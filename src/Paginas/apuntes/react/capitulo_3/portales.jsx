import Conseptos from "../../../../componentes/conseptos/conseptos";
import Html from "../../../../componentes/lenguajes/Html";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import {useState} from "react";






function PortalesReact() {

  const [isOpen,setIsOpen] = useState(false);
  const abrir=()=>{
    setIsOpen(true);
  }
  const cerrar=()=>{
    setIsOpen(false);
  }

  return (  
    <>
      <main>
        <h1>Portales</h1>
        <Conseptos texto={`Los portales en React son una característica que permite renderizar componentes fuera del árbol de componentes principal, lo que puede ser útil para crear elementos superpuestos o modales.
Un ejemplo para que puede servir es para mostrar una ventanita pero que no este limitado por el tamaño de su componente esto es util para que el componente ocupe todo el tamaño del body y podamos centrar de forma correcta el modal/ventanita.`}/>
        <h2>como usar los portales</h2>
        <Sintaxis codigo={`renderizarREACT.crearPortal(
  componente cualquiera,
  seleccionar el div que queramos
)`}/>
        <h2>index.html</h2>
        <Conseptos texto={`Para empezar a usar los portales debemos saber esto.
crear un div cualquiera en ("public/index.html")

En una parte del codigo de index.html veras algo como esto.`}/>
        <Html codigo={`<body>
  <div id="root"></div>
</body>`}/>
        <Conseptos texto={`Para usar el portal debemos crear un div en el mismo archivo index.html`}/>
        <Html codigo={`<body>
  <div id="root"></div>
  <div id="nombreQueQueramos"></div>
</body>`}/>
        <Conseptos texto={`Probablemente te preguntes para que creamos ese div en index.html y es para poder ponerlo como parametro en crearPortal y que se renderice el componente que deseamos.`}/>
        <h2>usar portales</h2>
        <Conseptos texto={`Ahora para usar un portal debemos importar ReactDOM en el componente que nosotros queramos luego para crear el portal debemos usar ("ReactDom.createPortal").`}/>
        <Sintaxis codigo={`import ReactDom from "react-dom";
function Componente(){
  return(
    ReactDom.createPortal(
      <Componete que queramos /> ,
      div de index.html
    )
  )
}`}/>
        <Conseptos texto={`Ahora dare un ejemplo real del como usar los portales.`}/>
        <Html codigo={`<body>
  <div id="root"></div>
  <div id="modal"></div>
</body>`}/>
        <ReactCode codigo={`import React from "react";
export default function Modal({cerrar}){
  return(
    <article>
      <h2>este es el modal</h2>
      <p>
        recuerda que en el parametro de componentes puedes poner cualquier otro componente para renderizarlo en el div que creaste en index.html
      </p>
      <button onClick={cerrar}>cerrar modal</button>
    </article>
  )
}`}/>
        <ReactCode codigo={`import React from "react";
import {useState} from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function App(){
  const [isOpen,setIsOpen] = useState(false);
  const abrir=()=>{
    setIsOpen(true);
  }
  const cerrar=()=>{
    setIsOpen(false);
  }
  return(
    <h1>Aplicacion</h1>
    <button onClick={abrir}>abrir modal</button>
    {
      isOpen && ReactDOM.createPortal(
        <Modal cerrar={cerrar}/> ,
        document.getElementById("modal")
      )
    }
  )
}
export default App;`}/>
        <div className="website">
          <h6>Aplicacion</h6>
          <button onClick={abrir}>abrir modal</button>
          {
            isOpen && <div>
              <h2>este es el modal</h2>
              <p>
                recuerda que en el parametro de componentes puedes poner cualquier otro componente para renderizarlo en el div que creaste en index.html
              </p>
              <button onClick={cerrar}>cerrar modal</button>
            </div>
          }
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default PortalesReact;