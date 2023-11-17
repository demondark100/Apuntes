import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../../componentes/showOptions/show";
import "./cap7.css"

import React, { useState, useRef, useEffect } from 'react';

// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Cap7ProyJsV5() {
  const [showEditor, setShowEditor] = useState(false);
  const [fondo, setFondo] = useState("");
  const [pregunta, setPregunta] = useState("¿programar es lo mejor?");
  const [msgResolve, setMsgResolve] = useState("de acuerdo contigo.");
  const [msgReject, setMsgReject] = useState("esta bien no :c");

  const fondoContent = useRef(null);

  const moverBoton = useRef(null);
  const mover=()=>{
    let numeroTtd = Math.round(Math.random()*90);
    let numeroLtr = Math.round(Math.random()*90);
    moverBoton.current.style.position = "absolute";
    moverBoton.current.style.top = `${numeroTtd}%`
    moverBoton.current.style.left = `${numeroLtr}%`
    moverBoton.current.style.transitionDuration = 0
  }

  const [siONo, setSiONo] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const simon=()=>{
    setSiONo(true)
    setMostrarMensaje(true)
    setTimeout(() => {
      setMostrarMensaje(false)
    }, 10000);
  }
  const nomes=()=>{
    setSiONo(false)
    setMostrarMensaje(true)
    setTimeout(() => {
      setMostrarMensaje(false)
    }, 10000);
  }
  useEffect(()=>{
    fondoContent.current.style.backgroundImage = `url(${fondo})`
  })


  return (  
    <>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <title>pregunta</title>
    <link rel="stylesheet" href="pregunta.css">

  </head>
  <body>

    <div class="contenedor">
      <h1>¿Programar es lo mejor?</h1>
      <div class="contenedor__botones">
        <button id="botonSi">si</button>
        <button id="botonNo">no</button>
      </div>
      <p class="mensajePositivo">De acuerdo contigo</p>
      <p class="mensajeNegativo">Esta bien no :c</p>
    </div>


    <script src="pregunta.js"></script>
  </body>
</html>`}
        css={`body{
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
}
*{
  padding: 0;
  margin: 0;
}

body::before{
  content: "";
  position: absolute;
  background-image: url("https://th.bing.com/th/id/OIP.UFiwWGQ1sJ4Fg1C-Hnn_BQHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7");
  background-size: cover;
  filter: brightness(.5);
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}



.contenedor{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.contenedor__botones{
  display: flex;
  justify-content: space-around;
  width: 65%;
  margin-top: 35px;
}

.contenedor__botones button{
  cursor: pointer;
  border: none;
  background-color: #0000009c;
  color: white;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 1000px;
  box-shadow: 0 10px 15px -2px #fffdfd91;
  width: 45px;
}


.contenedor__botones button:before {
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #000, #00d5ffa4, #00ff00bb, #000, #00d5ff9c, #00ff00b7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  filter: brightness(.8);
}

.contenedor__botones button:hover:before {
  opacity: 1;
}
.contenedor p{
  padding: 4px;
  border-radius: 1000px;
  margin-top: 25px;
}

.mensajePositivo{
  background-color: #0f0;
  display: none;
}
.mensajeNegativo{
  background-color: #f00;
  display: none;
}`}
        javaScript={`const botonSi = document.getElementById('botonSi');
const botonNo = document.getElementById('botonNo');
const mensajePositivo = document.querySelector(".mensajePositivo");
const mensajeNegativo = document.querySelector(".mensajeNegativo");


botonSi.addEventListener("click",()=>{
  mensajePositivo.style.display = "block";
  setTimeout(()=>{
    mensajePositivo.style.display = "none";
  },4000)
})

botonNo.addEventListener("click",()=>{
  mensajeNegativo.style.display = "block";
  setTimeout(()=>{
    mensajeNegativo.style.display = "none";
  },4000)
})

botonNo.addEventListener("mouseover",()=>{
  let numero1 = Math.round(Math.random()*90);
  let numero2 = Math.round(Math.random()*90);
  botonNo.style.position = \`absolute\`;
  botonNo.style.top = \`${"${numero1}"}%\`;
  botonNo.style.left = \`${"${numero2}"}%\`;
})`}
      />
      <MensajeModal texto={`¡Proyecto! capitulo 4

Hacer una pregunta al usuario pero que no pueda decir que no.`}/>
      <div className="Page">

        <div ref={fondoContent} className="contenedorCap4ProyV2Js">
          <div className="contenedorCap4ProyV2JsPegunta">
            <h4>{pregunta}</h4>
            <div>
              <button onClick={simon}>si</button>
              <button onClick={nomes} ref={moverBoton} onMouseOver={mover}>no</button>
            </div>
          </div>
          <div className={mostrarMensaje ? "contenedorMensajeProuJsCap4V2":"contenedorMensajeProuJsCap4V2Hide"}>
            {
              siONo ?
                <p className="siCap4ProyJsV2">{msgResolve}</p>
                :
                <p className="noCap4ProyJsV2">{msgReject}</p>
            }
          </div>
        

          <div className="contenedorCap4ProyV2JsBtnEditar">
            <button onClick={()=>setShowEditor(!showEditor)}>{showEditor ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faEdit}/>}</button>
          </div>

          <div className={`contenedorCap4ProyV2JsEditar ${showEditor ? "":"contenedorCap4ProyV2JsEditarHide"}`}> 
            <input 
              type="text" 
              placeholder="link de imagen para el fondo"
              onChange={(e)=>setFondo(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="pregunta"
              onChange={(e)=>setPregunta(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="mensaje si"
              onChange={(e)=>setMsgResolve(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="mensaje no"
              onChange={(e)=>setMsgReject(e.target.value)}
            />
          </div>

        </div>

      </div>
    </>
  );
}

export default Cap7ProyJsV5;