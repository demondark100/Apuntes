import "./cap11.css";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../../componentes/showOptions/show";
import React, { useState,useEffect, useRef } from 'react';

// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


function Cap11ProyV2() {
  const [change, setChange] = useState(true); // esto es el valor que cambiara su valor de true a false para guardar.
  const [bolita, setBolita] = useState(false); // esto es para mover la nolita xd
  const [contentPrincipal, setContentPrincipal] = useState(false); // esto es el contenedor principal para cambiar de color entre claro y oscuro.
  const [texto, setTexto] = useState("claro"); // esto es para indicarle al usuario dia o noche.
  const [color, setColor] = useState(false); // esto es el color del texto.

  const botonRef = useRef(); // esto es el boton

  const cambiar=()=>{
    setChange(!change);
    if (change) {
      setBolita(false);
      setContentPrincipal(false);
      setTexto("claro");
      setColor(false)
    } else {
      setBolita(true);
      setContentPrincipal(true);
      setTexto("oscuro");
      setColor(true)
    }
    localStorage.setItem("diaNoche",change)
  }

  useEffect(() => {
    let cambioLocal = JSON.parse(localStorage.getItem("diaNoche"));
    if (!cambioLocal) {
      setBolita(true);
      setContentPrincipal(true);
      setTexto("oscuro");
      setColor(true)
    } else {
      botonRef.current.click();
    }
  },[botonRef]);



  return (  
    <>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="lightDark.css">
    <script src="https://kit.fontawesome.com/7e204a84d0.js" crossorigin="anonymous"></script>
  </head>
  <body>


    <button id="boton">
      <span class="spanDay"><i class="fa-solid fa-sun"></i></span>
      <span class="spanNight"><i class="fa-solid fa-moon"></i></span>
      <div class="bolita"></div>
    </button>



    <script src="lightDark.js"></script>
  </body>
</html>`}
        css={`body{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: .2s;
}
button{
  border-radius: 1000px;
  width: 55px;
  height: 30px;
  display: flex;
  padding: 0;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(90deg,#50a0dc,#093b62);
}
button span{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.spanDay{
  color: #fff;
}
.spanNight{
  color: #b5ff14;
}

.bolita{
  position: absolute;
  border-radius: 1000px;
  height: 26px;
  width: 30px;
  margin-left: -21px;
  background-color: #fff;
  transition-duration: .1s;
}
.moveBolita{
  margin-left: 21px;
}`}
        javaScript={`const boton = document.getElementById("boton");
const bolita = document.querySelector(".bolita");
let cambiar = false;

boton.addEventListener("click", () => {
  cambiar = !cambiar;
  if (cambiar) {
    bolita.classList.add("moveBolita");
    document.body.style.backgroundColor = "#000";
  } else {
    bolita.classList.remove("moveBolita");
    document.body.style.backgroundColor = "#fff";
  }
  localStorage.setItem("changeJs", cambiar);
});

window.addEventListener("load", () => {
  const change = localStorage.getItem("changeJs");
  if (change) {
    cambiar = JSON.parse(change);
    if (cambiar) {
      bolita.classList.add("moveBolita");
      document.body.style.backgroundColor = "#000";
    }
  }
});`}
      />
      <MensajeModal texto={`¡Proyecto! capitulo 11

Hacer un boton de claro y oscuro , el dato se debe guardar cuando el usuario vuelva a la pagina.

Api para usar localStorage.`}/>
      <div className="Page">
        
        <div className={`contentCap11PryJsV2 ${contentPrincipal ? 
          "contentCap11PryJsV2Dark":
          ""
        }`}>
          <button 
            ref={botonRef}
            className="contentCap11PryJsV2Boton"
            onClick={cambiar}
          >
            <span>
              <FontAwesomeIcon icon={faSun}/>
            </span>
            <span>
              <FontAwesomeIcon icon={faMoon}/>
            </span>
            <span 
              className={`contentCap11PryJsV2BotonSelect ${bolita ?
                "contentCap11PryJsV2BotonSelectMove1":
                "contentCap11PryJsV2BotonSelectMove2"
              }`}
            ></span>
          </button>
          <p className={`contentCap11PryJsV2Mensaje ${color ?
            "":
            "contentCap11PryJsV2MensajeDark"
          }`}>{texto}</p>
        </div>
      
      </div>
    </>
  );
}

export default Cap11ProyV2;