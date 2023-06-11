import { useRef } from "react";
import Conseptos from "../../../componentes/conseptos/conseptos";
import Html from "../../../componentes/lenguajes/Html";
import JavaScropt from "../../../componentes/lenguajes/JavaScript";
import Css from "../../../componentes/lenguajes/Css";
import "./calculadora.css";

function Calculadora() {
  const dato1 = useRef(null);
  const dato2 = useRef(null);
  const boton = useRef(null);
  const resultadoParrafo = useRef(null);


  
  const calcular = ()=>{
    let suma1 = parseInt(dato1.current.value);
    let suma2 = parseInt(dato2.current.value);
    let resultado = suma1 + suma2;
    resultadoParrafo.current.textContent = `El resultado de tu suma es: ${resultado}`
  }

  
  

  return (
    <>
      <main>
        <h1>una pinche calculadora</h1>
        <Conseptos texto={`Copia todo el pinche codigo.`}/>
        <Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="chanchitoFeliz.css">
    <title>una puta calculadora</title>
  </head>
  <body>
    <div id="contenedorCalculadora">
        <h1 id="titleCalc">calculadora</h1>
        <div id="inputsCalContent">
          <input type="number" id="dato1"/>
          <input type="number" id="dato2"/>
          <button id="sumarBoton">sumar</button>
          <p id="resultadoParrafo"></p>
        </div>
    </div>
    <script src="casita_feliz"/>
  </body>
</html>`}/>
      <Css codigo={`#contenedorCalculadora{
  background-color: #468be5;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#titleCalc{
  text-align: center;
}
#inputsCalContent{
  display: flex;
  flex-direction: column;
  width: 50%;
}
#inputsCalContent input{
  margin-bottom: 15px;
}`}/>
      <h2>version meme :v</h2>
      <JavaScropt codigo={`const dato1 = document.getElementById("dato1");
const dato2 = document.getElementById("dato2");
const sumarBoton = document.getElementById("sumarBoton");
const resultadoParrafo = document.getElementById("resultadoParrafo");
sumarBoton.addEventListener("click",()=>{
  let suma1 = dato1.value;
  let suma2 = dato2.value;
  let resultado = suma1 + suma2;
  resultadoParrafo.textContent = \`El resultado de tu suma es: ${"${resultado}"}\`
})`}/>
      <h2>version seria :v</h2>
      <JavaScropt codigo={`const dato1 = document.getElementById("dato1");
const dato2 = document.getElementById("dato2");
const sumarBoton = document.getElementById("sumarBoton");
const resultadoParrafo = document.getElementById("resultadoParrafo");
sumarBoton.addEventListener("click",()=>{
  let suma1 = parseInt(dato1.value);
  let suma2 = parseInt(dato2.value);
  let resultado = suma1 + suma2;
  resultadoParrafo.textContent = \`El resultado de tu suma es: ${"${resultado}"}\`
})`}/>


        <div className="website">
          <div id="contenedorCalculadora">
          <h1 id="titleCalc">calculadora</h1>
          <div id="inputsCalContent">
            <input type="number" ref={dato1}/>
            <input type="number" ref={dato2}/>
            <button onClick={calcular}>sumar</button>
            <p ref={resultadoParrafo}></p>
          </div>
        </div>
        </div>
        
      </main>
    </>
  );
}

export default Calculadora;