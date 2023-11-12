import ShowOptions from "../../../../../../componentes/showOptions/show";
import "./cap7.css";
import React, { useEffect } from 'react';
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal"

function Cap7ProyJsV1() {
  useEffect(()=>{
    const btnIncrementar = document.querySelector(".btn-incrementarCap5Proy");
    const btnDecrementar = document.querySelector(".btn-decrementarCap5Proy");
    const contenedor = document.querySelector(".contenedorCap7ProyJsV3__contenedor");
    const numero = document.querySelectorAll(".numeroCap5Proy");
    
    let rotacion = 0;
    let numeroActual = 0;
    numero.forEach(i=>{
      i.textContent = numeroActual;
    })
    
    
    btnIncrementar.addEventListener("click",incrementar);
    btnDecrementar.addEventListener("click",decrementar);
    function incrementar() {
      rotacion = rotacion + 90;
      contenedor.style.transform = `rotateX(${rotacion}deg)`;
      numeroActual += 1
      setTimeout(()=>{
        numero.forEach(i=>{
          i.textContent = numeroActual;
        })
      },100)
    }
    
    
    
    function decrementar() {
      rotacion = rotacion - 90;
      contenedor.style.transform = `rotateX(${rotacion}deg)`
      numeroActual -= 1
      setTimeout(()=>{
        numero.forEach(i=>{
          i.textContent = numeroActual;
        })
      },100)
    }
    
  })


  return (  
    <>
      <ShowOptions 
        html={`<!DOCTYPE html>
<html>
  <head>
      <title>contador</title>
      <link rel="stylesheet" href="plantilla.css">
  </head>
  <body>

    <div>
      <div class="contenedor">
        <div class="cara__front numero"></div>
        <div class="cara__top numero"></div>
        <div class="cara__behind numero"></div>
        <div class="cara__bottom numero"></div>
      </div>
      <div class="contenedorBotones">
        <button class="btn-incrementar">+</button>
        <button class="btn-decrementar">-</button>
      </div>
    </div>

    <script src="plantilla.js"></script>
  </body>
</html>`}
        css={`body{
  background-color: #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  height: 100vh;
}
.contenedor{
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  transition-duration: .4s;
}

.cara__front,
.cara__behind,
.cara__top,
.cara__bottom{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  background-color: #0f0c0c;
}
.cara__behind{
  transform: translateZ(-75px) rotateX(180deg);
}
.cara__front{
  transform: translateZ(76px);
}
.cara__top{
  transform: translate(0px,0px) rotateX(90deg) translateZ(70px);
}
.cara__bottom{
  transform: translate(0px,0px) rotateX(270deg) translateZ(75px);
}


.contenedorBotones{
  display: block;
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap:15px;
}
.contenedorBotones button{
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 1000px;
  padding: 0;
  color: #fff;
  width: 35px;
  height: 35px;
  cursor: pointer;
  box-shadow: 0 5px 15px -5px #fefefe;
  transition-duration: .5s;
}
.contenedorBotones button:hover{
  background-color: #0f0c0c;
  box-shadow: 0 15px 15px -5px #fefefe;
  transition-duration: .5s;
}`}
        javaScript={`const btnIncrementar = document.querySelector(".btn-incrementarCap5Proy");
const btnDecrementar = document.querySelector(".btn-decrementarCap5Proy");
const contenedor = document.querySelector(".contenedorCap5ProyJsV3__contenedor");
const numero = document.querySelectorAll(".numeroCap5Proy");
    
let rotacion = 0;
let numeroActual = 0;
numero.forEach(i=>{
  i.textContent = numeroActual;
})
    
    
btnIncrementar.addEventListener("click",incrementar);
btnDecrementar.addEventListener("click",decrementar);
function incrementar() {
  rotacion = rotacion + 90;
  contenedor.style.transform = \`rotateX(${"${rotacion}"}deg)\`;
  numeroActual += 1
  setTimeout(()=>{
      numero.forEach(i=>{
      i.textContent = numeroActual;
    })
  },100)
}
    
    
    
function decrementar() {
  rotacion = rotacion - 90;
  contenedor.style.transform = \`rotateX(${"${rotacion}"}deg)\`
  numeroActual -= 1
  setTimeout(()=>{
    numero.forEach(i=>{
      i.textContent = numeroActual;
    })
  },100)
}`}
      />
      <MensajeModal texto={`¡Proyecto! capitulo 7

Hacer un simple contador.

Recuerda que aprendimos:

1. Eventos de escucha.
2. Flujo de eventos.
3. Mouse Events.
4. Eventos de teclado.
5. Evebtos de interfaz.
6. timers.`}/>
      
      <div className="Page">
        <div className="contenedorCap7ProyJsV3">
          <div className="contenedorCap7ProyJsV3__contenedor">
            <div className="cara__frontCap5Proy numeroCap5Proy"></div>
            <div className="cara__topCap5Proy numeroCap5Proy"></div>
            <div className="cara__behindCap5Proy numeroCap5Proy"></div>
            <div className="cara__bottomCap5Proy numeroCap5Proy"></div>
          </div>
          <div className="contenedorBotonesCap5Proy">
            <button className="btn-incrementarCap5Proy">+</button>
            <button className="btn-decrementarCap5Proy">-</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Cap7ProyJsV1;