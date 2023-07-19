import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import "./cap4.css"

import React, { useState, useRef } from 'react';


function Cap4ProyJsV2() {

  const moverBoton = useRef(null);
  const mover=()=>{
    let numeroTtd = Math.round(Math.random()*90);
    let numeroLtr = Math.round(Math.random()*90);
    moverBoton.current.style.position = "absolute";
    moverBoton.current.style.top = `${numeroTtd}%`
    moverBoton.current.style.left = `${numeroLtr}%`
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

  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 4

Hacer una pregunta al usuario pero que no pueda decir que no.`}/>
      <CodigoFuenteSinInt codigo={<JavaScropt codigo={`// no se puede modificar la ventanita de prompt :v
// solo dire que se uso mucho Math.random para esto.`}/>}/>
      <Volver link={"../"}/>

      <div className="Page">

        <div className="contenedorCap4ProyV2Js">
          <div className="contenedorCap4ProyV2JsPegunta">
            <h4>¿programar es lo mejor?</h4>
            <div>
              <button onClick={simon}>si</button>
              <button onClick={nomes} ref={moverBoton} onMouseEnter={mover}>no</button>
            </div>
          </div>
          <div className={mostrarMensaje ? "contenedorMensajeProuJsCap4V2":"contenedorMensajeProuJsCap4V2Hide"}>
            {
              siONo ?
                <p className="siCap4ProyJsV2">de acuerdo contigo.</p>
                :
                <p className="noCap4ProyJsV2">esta bien no :c</p>
            }
          </div>
        </div>

      </div>
    </>
  );
}

export default Cap4ProyJsV2;