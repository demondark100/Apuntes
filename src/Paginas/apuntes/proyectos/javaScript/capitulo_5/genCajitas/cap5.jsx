import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Css from "../../../../../../componentes/lenguajes/Css";
import Html from "../../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import "./cap5.css";
import { useState,useRef } from "react";


function Prompt({
  setValor,
  showPrompt,
  generarCajas
}){
  return(
    <div className={`contenedorCap5ProyJsV1__prompt__content ${showPrompt ? "":"contenedorCap5ProyJsV1__prompt__contentHide"}`}>
      <div className="contenedorCap5ProyJsV1__prompt">
        <p>¿Cuantas cajas deseas generar?</p>
        <input 
          type="number" 
          onChange={(e)=>setValor(e.target.value)}
        />
        <button onClick={generarCajas}>ok</button>
      </div>
    </div>
  )
}


function Cap5ProyJsV1() {
  const [valor, setValor] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);
  const [cajas, setCajas] = useState([]);
  const generarCajas=()=>{
    
    if (valor == "" || valor == 0) {
      setShowPrompt(true)  
    } else {
      setShowPrompt(false)
      const nuevasCajas = [];
      for (let i = 0; i < parseInt(valor); i++) {
        nuevasCajas.push(<div key={i} className="cajaCreadaCap5V1Js"></div>);
      }
      setCajas(nuevasCajas);
    } 
  }
  

  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 5

Hacer un generador de cajitas , el usuario debe elejir cuantas cajitas desea generar.

Recuerda que aprendimos:

1. DOM.
2. Selectores de elementos.
3. Atributos.
4. Atributos globales.
5. Atributos de inputs.
6. clases y metodos.
7. Obtencion y modificacion de contenido.
8. Creacion de elementos.
9. Obtencion de childs.
10. propiedades de childs.
11. propiedades de parents.
12. propiedades de siblings.`}/>
      <CodigoFuenteSinInt codigo={<Html codigo={`<!DOCTYPE html>
<html>
  <head>
      <title>Generador de cajitas</title>
      <link rel="stylesheet" href="cajitas.css">
  </head>
  <body>

      <h1>generador de cajitas</h1>
      <div id="contenedor"></div>

      <script src="cajitas.js"></script>
  </body>
</html>`}/>}
        codigo2={<Css codigo={`body{
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1{
  color: #fff;
  text-align: center;

}

#contenedor{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  background-color: #121212;
}

.cajaCreada{
  width: 25px;
  height: 25px;
  box-shadow: 0 0 15px -5px #f0f2f0;
  margin: 15px;
  transition-duration: .5s;
}
.cajaCreada:hover{
  background-color: #0e1e2e;
  transition-duration: .5s;
}`}/>}
        codigo3={<JavaScropt codigo={`const contenedor = document.getElementById("contenedor")
let fragmento = document.createDocumentFragment();
let cantidadCajas = parseInt(prompt("¿Cuantas cajas deseas generar?"));
while(cantidadCajas == 0 || isNaN(cantidadCajas)){
  cantidadCajas = parseInt(prompt("¿Cuantas cajas deseas generar?"));
  alert("Ingrese un numero porfavor.");
}

for (var i = 0; i < parseInt(cantidadCajas); i++) {
  let div = document.createElement("DIV");
  div.classList.add("cajaCreada");
  fragmento.appendChild(div)
  contenedor.appendChild(fragmento)
}`}/>}/>
      <Volver link={"../"}/>

      <div className="Page">

        <div className="contenedorCap5ProyJsV1">
          <h4 className="contenedorCap5ProyJsV1__title">generador de cajitas</h4>
          <button 
            className="contenedorCap5ProyJsV1__cambiarCantidad"
            onClick={()=>setShowPrompt(true)}
          >cambiar cantidad</button>
          <Prompt 
            setValor={setValor}
            showPrompt={showPrompt}
            generarCajas={generarCajas}
          />

          <div className="contenedorCajasGeneradas">{cajas}</div>
        </div>

      </div>
    </>
  );
}

export default Cap5ProyJsV1;