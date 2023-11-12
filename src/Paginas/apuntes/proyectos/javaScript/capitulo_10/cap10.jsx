import "./cap10.css";
import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../componentes/showOptions/show";
import React, { useState,useRef, useEffect } from 'react';

function Cap10ProyJsV1() {
  const [dato, setDato] = useState("");  // esto obtiene el numero para factorizar.
  const [resultado, setResultado] = useState(""); // esto almacenara el resultado de la factorial.
  const [ejemplo, setEjemplo] = useState([]); // esto guarda el ejemplo del como es que se resuelve la factorizacion.
  const [showLimpiar, setShowLimpiar] = useState(false); // esto es para mostrar la Z en el input..
  const [showEjemplo, setShowEjemplo] = useState(false);


  const factorizar=(e)=>{
    setShowLimpiar(true)
    setShowEjemplo(true)
    setDato(e.target.value);
    let fact = 1;
    let arr = [];
    for (let i = e.target.value;i > 0;i--) {
      fact = fact * i;
      arr.push(i);
      setResultado(fact); 
    }
    setEjemplo([arr.join(" x ")])
    if (e.target.value == "") {
      setResultado("")
      setShowLimpiar(false)
      setShowEjemplo(false)
    }
  }

  const limpiar=()=>{
    setDato("")
    setResultado("")
    setEjemplo([])
    setShowLimpiar(false)
    setShowEjemplo(false)
  }


  return (
    <>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="facturar.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>

    <h1>facturar numeros</h1>
    <input type="number" id="dato">
    <p id="resultado"></p>

    <script src="facturar.js"></script>
  </body>
</html>`}
        css={`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efe6e6;
  height: 100vh;
}
h1{
  text-align: center;
  color: #635f5f;
}
input{
  border-radius: 1000px;
  margin-top: 8px;
  border: none;
  outline: none;
  border: 2px solid #00f;
  font-size: 1.5em;
  width: 200px;
}
p{
  text-align: center;
  margin-top: 25px;
  font-size: 1.5em;
}`}
        javaScript={`"use strict";
const dato = document.getElementById("dato");
const resultado = document.getElementById("resultado");

dato.addEventListener("input",()=>{
  resultado.textContent = factorial(dato.value);
})

function factorial(numero = 4){
  if (numero === 1 || dato.value === \`\`) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}`}
      />
      <MensajeModal texto={`¡Proyecto! capitulo 10

Hacer un programa que haga factorizaciones

Recuerda que aprendimos:


1. prototipos
2. caracteristicas de prototipos
3. Strict Mode
4. funciones parte2 (la venganza :v)
5. this contextual
6. Recursividad
7. clausulas
8. parametros por defecto
9. parametro rest
10. operador ternario
11. operador spread`}/>

      <div className="Page">

        <div className="contProyJs10">

          <h4>Factorizar</h4>

          <div className="contProyJs10Input">
            <input 
              type="number"
              value={dato}
              onChange={(e)=>factorizar(e)}
            />
            {
              showLimpiar && <button onClick={limpiar}>X</button>
            }
          </div>

          <div className="contProyJs10ResContent">
            {
              showEjemplo && <div className="contProyJs10Ejemplo">
                {
                  ejemplo.map(i=><b key={i}>{i}</b>)
                }
              </div>
            }
            {
              showEjemplo && <p>= {resultado}</p>
            }
          </div>

        </div>

      </div>
    </>
  );
}

export default Cap10ProyJsV1;