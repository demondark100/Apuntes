import React, { useEffect } from 'react';
import "./cap5.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faUndo } from '@fortawesome/free-solid-svg-icons';

import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../../componentes/volver/volver";
import CodigoSinIn from "../../../../../../componentes/codigoFuente/code";
import Html from "../../../../../../componentes/lenguajes/Html";
import Css from "../../../../../../componentes/lenguajes/Css";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";


function Indefinido(){

  useEffect(()=>{
    //estos son los botones para cambiar de reloj a cronometro u biseversa.

    const btnReloj = document.getElementById("btn-reloj")
    const btnCronometro = document.getElementById("btn-cronometro");

    // esto selecciona el parrafo para mostrar la hora
    const hora = document.querySelector(".hora");
    // esto es el p que muestra el cronometro
    const cronometro = document.querySelector(".cronometro");

    // estos son los botones del cronometro
    const botonIniciar = document.getElementById("iniciar")
    const botonPausar = document.getElementById("pausar")
    const botonReiniciar = document.getElementById("reiniciar")


    class Reloj {
      constructor(){
        this.hora = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();
      }
      horaActual(){
        hora.textContent = `${this.hora} : ${this.minutes} : ${this.seconds}`
        setInterval(()=>{
          this.hora = new Date().getHours();
          this.minutes = new Date().getMinutes();
          this.seconds = new Date().getSeconds();
          hora.textContent = `${this.hora} : ${this.minutes} : ${this.seconds}`
        },1000)
      }

    }

    const reloj = new Reloj();
    reloj.horaActual();




    botonIniciar.addEventListener("click",iniciar);
    botonPausar.addEventListener("click",pausar);
    botonReiniciar.addEventListener("click",reiniciar);

    cronometro.textContent = "0 : 0 : 0";
    let segundosCronometro = 0;
    let minutosCronometro = 0;
    let horasCronometro = 0;
    let intervaloSegundos = null;
    let intervaloMinutos = null;
    let intervaloHoras = null;
    function iniciar() {
      intervaloSegundos = setInterval(()=>{
        segundosCronometro += 1;
        actualizar()
        if (segundosCronometro > 58) {segundosCronometro = 0}
      },1000)
      intervaloMinutos = setInterval(()=>{
        minutosCronometro += 1;
        if (minutosCronometro > 58) {segundosCronometro = 0}
      },60000)
      intervaloHoras = setInterval(()=>{
        horasCronometro += 1;
        if (horasCronometro > 58) {segundosCronometro = 0}
      },60 * 60 * 1000)
      botonPausar.style.visibility = "visible"
      botonPausar.style.position = "relative"
      botonIniciar.style.visibility = "hidden"
      botonIniciar.style.position = "absolute"
    }
    function pausar() {
      clearInterval(intervaloSegundos);
      clearInterval(intervaloMinutos);
      clearInterval(intervaloHoras);
      botonIniciar.style.visibility = "visible"
      botonIniciar.style.position = "relative"
      botonPausar.style.visibility = "hidden"
      botonPausar.style.position = "absolute"

    }
    function reiniciar() {
      clearInterval(intervaloSegundos);
      clearInterval(intervaloMinutos);
      clearInterval(intervaloHoras);
      segundosCronometro = 0;
      minutosCronometro = 0;
      horasCronometro = 0;
      actualizar();

      botonIniciar.style.visibility = "visible";
      botonPausar.style.visibility = "hidden";
    }

    function actualizar() {
      cronometro.textContent = `${"0"} : ${minutosCronometro} : ${segundosCronometro}`
    }




    const contenedorRelojProyJs = document.querySelector(".contenedorRelojProyJs")
    const box = document.getElementById('box');
    let prevX = 0;
    let prevY = 0;
    let rotationX = 0;
    let rotationY = 0;
    const sensitivity = 0.1;
    const maxRotation = 10; // Máximo ángulo de rotación permitido
    let followFront = true; // Variable para habilitar o deshabilitar el seguimiento del mouse en la cara "front"

    contenedorRelojProyJs.addEventListener('mousemove', (event) => {
      if (followFront) {
        const currX = event.clientX;
        const currY = event.clientY;

        const deltaX = currX - prevX;
        const deltaY = currY - prevY;

        rotationX -= deltaY * sensitivity;
        rotationY += deltaX * sensitivity;

        // Limitar los ángulos de rotación en función del máximo permitido
        rotationX = Math.max(-maxRotation, Math.min(maxRotation, rotationX));
        rotationY = Math.max(-maxRotation, Math.min(maxRotation, rotationY));

        box.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        prevX = currX;
        prevY = currY;
      }
    });

    // Para manejar eventos táctiles en dispositivos móviles
    contenedorRelojProyJs.addEventListener('touchmove', (event) => {
      if (followFront) {
        const currX = event.touches[0].clientX;
        const currY = event.touches[0].clientY;

        const deltaX = currX - prevX;
        const deltaY = currY - prevY;

        rotationX -= deltaY * sensitivity;
        rotationY += deltaX * sensitivity;

        // Limitar los ángulos de rotación en función del máximo permitido
        rotationX = Math.max(-maxRotation, Math.min(maxRotation, rotationX));
        rotationY = Math.max(-maxRotation, Math.min(maxRotation, rotationY));

        box.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        prevX = currX;
        prevY = currY;
      }
    });

    // Inicializar las posiciones previas en el centro de la caja
    const rect = box.getBoundingClientRect();
    prevX = rect.left + rect.width / 2;
    prevY = rect.top + rect.height / 2;

    btnReloj.addEventListener("click", () => {
      btnReloj.style.borderBottom = "4px solid #0f0";
      btnCronometro.style.borderBottom = "none";
      box.style.transform = "rotateY(0deg)";
      followFront = true; // Habilitar el seguimiento del mouse en la cara "front"
    });

    btnCronometro.addEventListener("click", () => {
      btnCronometro.style.borderBottom = "4px solid #0f0";
      btnReloj.style.borderBottom = "none";
      box.style.transform = "rotateY(180deg)";
      followFront = false; // Deshabilitar el seguimiento del mouse en la cara "front"
    });

  })


  return (
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 5

Hacer un reloj y tambien un cronometro.`}/>
      <CodigoSinIn codigo={<Html codigo={`<!DOCTYPE html>
<html>
<head>
    <title>Generador de Contraseñas</title>
    <link rel="stylesheet" href="reloj.css">
    <script src="https://kit.fontawesome.com/7e204a84d0.js" crossorigin="anonymous"></script>

</head>
<body>

	<div class="contenedor">
		<div class="contenedor__elejir--btn">
			<button id="btn-reloj">Reloj</button>
			<button id="btn-cronometro">cronometro</button>
		</div>

  		<div class="contenedorHora" id="box">
    		<div class="contenedorHora-front">
      			<p class="hora">12:00</p>
    		</div>
    		<div class="contenedor-left"></div>
    		<div class="contenedor-right"></div>
    		<div class="contenedor-top"></div>
			<div class="contenedor-bottom"></div>

    		<div class="contenedorHora-behind">
    			<div class="contenedorCronometro">
					<p class="cronometro"></p>
					<div class="contenedorCronometro__botones">
						<button id="iniciar"><i class="fas fa-play"></i></button>
						<button id="pausar"><i class="fas fa-pause"></i></button>
						<button id="reiniciar"><i class="fas fa-undo"></i></button>
					</div>

				</div>
    		</div>
  		</div>

	</div>


    <script src="reloj.js"></script>
</body>
</html>`}/>}
      codigo2={<Css codigo={`body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}

.contenedor{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("https://th.bing.com/th/id/OIP.6VJP3J4JM8V52kkXSYTbsQHaEo?w=303&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.contenedor__elejir--btn{
  width: 100%;
  position: relative;
  top: 0;
  display: flex;;
  justify-content: center;
  gap: 65px;
  padding: 8px;
  padding-bottom: 0;
}
.contenedor__elejir--btn button{
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding-bottom: 8px;
  cursor: pointer;
  font-size: 4em;
}
.contenedor__elejir--btn button:hover{
  color: #0f0;
}
#btn-reloj{
  border-bottom: 4px solid #0f0;
}



.contenedorHora {
  margin-top: 150px;
  width: 450px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.contenedorHora-front {
  background-color: #000;
  text-align: center;
  border: 15px solid #524c4c;
  transform: translateZ(224px);
}
.contenedorHora-behind {
  background-color: #000;
  text-align: center;
  border: 15px solid #524c4c !important;
  transform: translateZ(-224px) rotateY(180deg) !important;
}

.contenedorHora-front p {
  color: #fff !important;
  font-size: 4em;
  text-shadow: 0 0 15px #fff;
}

.contenedor-top,
.contenedor-bottom,
.contenedor-right,
.contenedor-left,
.contenedorHora-behind {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  border: 2px solid #000;
}
.contenedorHora-behind {
  transform: translateZ(-220px);
}
.contenedor-left{
  transform: translate(-200px,0px) rotateY(90deg) translateZ(-25px);
}
.contenedor-right{
  transform: translate(240px,0px) rotateY(90deg) translateZ(-25px);
}
.contenedor-top{
  transform: translate(0px,0px) rotateX(90deg) translateZ(-10px);
  height: 425px;
}
.contenedor-bottom{
  transform: translate(0px,0px) rotateX(90deg) translateZ(210px);
  height: 425px;
}




.contenedorCronometro{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.contenedorCronometro p{
  margin-top: -2px;
  font-size: 4em;
  color: #fff;
}

.contenedorCronometro button{
  padding: 0;
  font-size: 2em;
  margin: 20px;
  margin-top: -20px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
}
.contenedorCronometro button:hover{
  text-shadow: 0 0 45px #fff;
}
#pausar{
  visibility: hidden;
  position: absolute;
}`}/>}
        codigo3={<JavaScropt codigo={`//estos son los botones para cambiar de reloj a cronometro u biseversa.

const btnReloj = document.getElementById("btn-reloj")
const btnCronometro = document.getElementById("btn-cronometro");

// esto selecciona el parrafo para mostrar la hora
const hora = document.querySelector(".hora");
// esto es el p que muestra el cronometro
const cronometro = document.querySelector(".cronometro");

// estos son los botones del cronometro
const botonIniciar = document.getElementById("iniciar")
const botonPausar = document.getElementById("pausar")
const botonReiniciar = document.getElementById("reiniciar")


class Reloj {
	constructor(){
		this.hora = new Date().getHours();
		this.minutes = new Date().getMinutes();
		this.seconds = new Date().getSeconds();
	}
	horaActual(){
		hora.textContent = \`${"${this.hora}"} : ${"${this.minutes}"} : ${"${this.seconds}"}\`
		setInterval(()=>{
			this.hora = new Date().getHours();
			this.minutes = new Date().getMinutes();
			this.seconds = new Date().getSeconds();
			hora.textContent = \`${"${this.hora}"} : ${"${this.minutes}"} : ${"${this.seconds}"}\`
		},1000)
	}

}

const reloj = new Reloj();
reloj.horaActual();




botonIniciar.addEventListener("click",iniciar);
botonPausar.addEventListener("click",pausar);
botonReiniciar.addEventListener("click",reiniciar);

cronometro.textContent = "0 : 0 : 0";
let segundosCronometro = 0;
let minutosCronometro = 0;
let horasCronometro = 0;
let intervaloSegundos = null;
let intervaloMinutos = null;
let intervaloHoras = null;
function iniciar() {
	intervaloSegundos = setInterval(()=>{
		segundosCronometro += 1;
		actualizar()
		if (segundosCronometro > 58) {segundosCronometro = 0}
	},1000)
	intervaloMinutos = setInterval(()=>{
		minutosCronometro += 1;
		if (minutosCronometro > 58) {segundosCronometro = 0}
	},60000)
	intervaloHoras = setInterval(()=>{
		horasCronometro += 1;
		if (horasCronometro > 58) {segundosCronometro = 0}
	},60 * 60 * 1000)
	botonPausar.style.visibility = "visible"
	botonPausar.style.position = "relative"
	botonIniciar.style.visibility = "hidden"
	botonIniciar.style.position = "absolute"
}
function pausar() {
	clearInterval(intervaloSegundos);
	clearInterval(intervaloMinutos);
	clearInterval(intervaloHoras);
	botonIniciar.style.visibility = "visible"
	botonIniciar.style.position = "relative"
	botonPausar.style.visibility = "hidden"
	botonPausar.style.position = "absolute"

}
function reiniciar() {
	clearInterval(intervaloSegundos);
	clearInterval(intervaloMinutos);
	clearInterval(intervaloHoras);
	segundosCronometro = 0;
	minutosCronometro = 0;
	horasCronometro = 0;
	actualizar();

	botonIniciar.style.visibility = "visible";
	botonPausar.style.visibility = "hidden";
}

function actualizar() {
	cronometro.textContent = \`${"${\"0\"}"} : ${"${minutosCronometro}}"} : ${"${segundosCronometro}"}\`
}





const box = document.getElementById('box');
let prevX = 0;
let prevY = 0;
let rotationX = 0;
let rotationY = 0;
const sensitivity = 0.1;
const maxRotation = 10; 
let followFront = true;

document.addEventListener('mousemove', (event) => {
  if (followFront) {
    const currX = event.clientX;
    const currY = event.clientY;

    const deltaX = currX - prevX;
    const deltaY = currY - prevY;

    rotationX -= deltaY * sensitivity;
    rotationY += deltaX * sensitivity;

    // Limitar los ángulos de rotación en función del máximo permitido
    rotationX = Math.max(-maxRotation, Math.min(maxRotation, rotationX));
    rotationY = Math.max(-maxRotation, Math.min(maxRotation, rotationY));

    box.style.transform = \`rotateX(${"${rotationX}"}deg) rotateY(${"${rotationY}"}deg)\`;

    prevX = currX;
    prevY = currY;
  }
});

// Para manejar eventos táctiles en dispositivos móviles
document.addEventListener('touchmove', (event) => {
  if (followFront) {
    const currX = event.touches[0].clientX;
    const currY = event.touches[0].clientY;

    const deltaX = currX - prevX;
    const deltaY = currY - prevY;

    rotationX -= deltaY * sensitivity;
    rotationY += deltaX * sensitivity;

    // Limitar los ángulos de rotación en función del máximo permitido
    rotationX = Math.max(-maxRotation, Math.min(maxRotation, rotationX));
    rotationY = Math.max(-maxRotation, Math.min(maxRotation, rotationY));

    box.style.transform = \`rotateX(${"${rotationX}"}deg) rotateY(${"${rotationY}"}deg)\`;

    prevX = currX;
    prevY = currY;
  }
});

// Inicializar las posiciones previas en el centro de la caja
const rect = box.getBoundingClientRect();
prevX = rect.left + rect.width / 2;
prevY = rect.top + rect.height / 2;

btnReloj.addEventListener("click", () => {
  btnReloj.style.borderBottom = "4px solid #0f0";
  btnCronometro.style.borderBottom = "none";
  box.style.transform = "rotateY(0deg)";
  followFront = true; // Habilitar el seguimiento del mouse en la cara "front"
});

btnCronometro.addEventListener("click", () => {
  btnCronometro.style.borderBottom = "4px solid #0f0";
  btnReloj.style.borderBottom = "none";
  box.style.transform = "rotateY(180deg)";
  followFront = false; // Deshabilitar el seguimiento del mouse en la cara "front"
});
`}/>}
      
      />
      <Volver link={`../`}/>
      
      <div className='Page'>
        <div className="contenedorRelojProyJs">
		      <div className="contenedor__elejir--btn__contenedorRelojProyJs">
			      <button id="btn-reloj">Reloj</button>
			      <button id="btn-cronometro">cronometro</button>
		      </div>

  		    <div className="contenedorHora" id="box">
    		    <div className="contenedorHora-front">
      			  <p className="hora"></p>
    		    </div>
    		    <div className="contenedor-left"></div>
    		    <div className="contenedor-right"></div>
    		    <div className="contenedor-top"></div>
			      <div className="contenedor-bottom"></div>

    		    <div className="contenedorHora-behind">
    			    <div className="contenedorCronometro">
					      <p className="cronometro"></p>
					      <div className="contenedorCronometro__botones">
						      <button id="iniciar"><FontAwesomeIcon icon={faPlay} /></button>
						      <button id="pausar"><FontAwesomeIcon icon={faPause} /></button>
						      <button id="reiniciar"><FontAwesomeIcon icon={faUndo} /></button>
					      </div>

				      </div>
    		    </div>
  	    	</div>

	      </div>
      </div>
    </>
  );
};

export default Indefinido;