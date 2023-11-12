import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../../componentes/showOptions/show";
import "./cap8.css";
import { useEffect,useState } from "react";

// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";




function Cap8ProyJsV1() {
  // esto es el contenedor que indica que esta cargando
  const [showLoading, setShowLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setShowLoading(false)
      setShowDificultad(true)
    }, 3000);
  },[])

  // aqui crearemos los botones de las dificultades
  const [showDificultad, setShowDificultad] = useState(false); // esto es para mostrar el contenedor de difucultad.
  const [hideDifucultad, setHideDifucultad] = useState(false);
  let dificultades = [["noob",40],["master",30],["crack",20],["supremo",10],["rey",5],["dios",3]];
  const [dificultad, setDificultad] = useState(0);
  const elejirDificultad=(valor)=>{
    setDificultad(valor)
    setHideDifucultad(true)
  }

  // esto es la programacion para hacer las validaciones
  const [numeroAleatorio, setNumeroAleatorio] = useState(Math.round(Math.random()*1000)); //esto es el numero que se generara
  const [respuestaUsuario, setRespuestaUsuario] = useState(0); // esto es la respuesta que de el usuario
  const [mensajes, setMensajes] = useState(""); // estos son los mensajes que se daran
  const [contador, setContador] = useState(1); // estas son las oportunidades del usuario
  let contar = 0; // la variable actualizadora.
  const [ganaste, setGanaste] = useState(false);
  const [perdiste, setPerdiste] = useState(false);
  const comprobar=()=>{
    contar++;
    setContador(contar);
    setDificultad(dificultad - contador);
    if(contador == dificultad){
      setPerdiste(true)
    }
    if (respuestaUsuario < numeroAleatorio) {setMensajes("el numero es mayor")} 
    else if(respuestaUsuario > numeroAleatorio){setMensajes("el numero es menor")}
    else {
      setGanaste(true);
      setPerdiste(false)
    }
  }

  const reintentar=()=>{
    setGanaste(false);
    setPerdiste(false);
    setMensajes("");
    setContador(1);
    setNumeroAleatorio(Math.round(Math.random()*1000));
    setHideDifucultad(false);
  }
  return (  
    <>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <title>Adivina el juego</title>
    <link rel="stylesheet" href="adivinar.css">

  </head>
  <body>

    <div class="contenedor__dificultad">
      <h1>adivina el numero</h1>
      <h2>dificultad</h2>
      <div class="contenedor__dificultad__botones">
        <button class="btnDificultad">noob</button>
        <button class="btnDificultad">master</button>
        <button class="btnDificultad">crack</button>
        <button class="btnDificultad">God</button>
      </div>
    </div>
    <div class="contenedorPerdiste">
      <h2>Perdiste</h2>
      <p id="respuestaCorrecta"></p>
      <button class="reintentar">Reintentar</button>
    </div>
    <div class="contenedorCorrecto">
      <h2>Ganaste</h2>
      <button class="reintentar">Reintentar</button>
    </div>
    <div class="contenedor">
      <p id="oprtunidades"></p>
      <div class="contenedor__input">
      <input type="number" id="respuestaUsuario" />
      <button id="comprobar">comprobar</button>
    </div>
      <p id="mensajes"></p>
    </div>
    <script src="adivinar.js"></script>
  </body>
</html>`}
        css={`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e9d8d8;
}

.contenedor__dificultad{ /* aqui mostramos el componente */
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #181618ee;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  visibility: visible;
  opacity: 1;
  transition-duration: .5s;
}
.hideContenedor__dificultad{ /* aqui ocultamos el contenedor */
  visibility: hidden;
  opacity: 0;
  transition-duration: .5s;
}
.contenedor__dificultad h1,h2{
  margin-bottom: 4px;
  text-align: center;
}
.contenedor__dificultad__botones{
  display: flex;
  gap: 15px;
}
.contenedor__dificultad__botones button{
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 15px;
  color: #fff;
}
.contenedor__dificultad__botones button:hover{
  text-shadow: 0 0 15px #fff;
}


.contenedorPerdiste{ /*esto es el contenedor de perdiste*/
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #181618ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition-duration: .5s;
}
.contenedorPerdisteShow{
  opacity: 1;
  visibility: visible;
  transition-duration: .5s;
}
.contenedorPerdiste button{
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  margin-top: 15px;
}
.contenedorPerdiste button:hover{
  text-shadow: 0 0 15px #fff;
}


.contenedorCorrecto{ /*esto es el contenedor de correcto*/
  background-color: #181618ee;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition-duration: .5s;
}
.showGanaste{ /*esto es para mostrar el contenedor de ganaste*/
  visibility: visible;
  opacity: 1;
  transition-duration: .5s;
}
.contenedorCorrecto button{
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
}
.contenedorCorrecto button:hover{
  text-shadow: 0 0 15px #fff;
}


.contenedor{ /*esto es el contenedor principal*/
  text-align: center;
}
.contenedor__input{
  background-color: #fff;
  border-radius: 1000px;
  overflow: hidden;
  margin-top: 15px;
  display: flex;
}
.contenedor__input input{
  border: none;
  outline: none;
  background-color: transparent;
}
.contenedor__input button{
  border: none;
  outline: none;
  background-color: #0f0;
  padding: 0;
  margin: 0;
}

#mensajes{
  background-color: #f00;
  color: #fff;
  margin-top: 15px;
  padding: 8px;
  border-radius: 1000px;
  opacity: 0;
  visibility: hidden;
  transition-duration: .5s;
}
.showMensajes{
  opacity: 1 !important;
  visibility: visible !important;
  transition-duration: .5s;
}`}
        javaScript={`const respuestaUsuario = document.getElementById("respuestaUsuario"); // esto es la respuesta del usuario
const comprobar = document.getElementById("comprobar"); // esto es el voton pra comprobar la respuesta.
const mensajes = document.getElementById("mensajes"); // aqui le indicaremos los mensajes del si esta cerca al numero correcto.
const contenedor__dificultad = document.querySelector(".contenedor__dificultad"); // seleccionamos al contenedor
const btnDificultad = document.querySelectorAll(".btnDificultad"); // estos botones son para seleccionar la dificultad
const oprtunidades = document.getElementById("oprtunidades"); // esto es para mostrar las oportunidades que le quedan al usuario
const contenedorPerdiste = document.querySelector(".contenedorPerdiste"); // esto es el contenedor de perdiste
const reintentar = document.querySelectorAll(".reintentar"); // esto es el voton para reintentar.
const respuestaCorrecta = document.getElementById("respuestaCorrecta"); // esto es para dar el mensaje de la respuesta correcta.
const ganaste = document.querySelector(".contenedorCorrecto"); // esto es el contenedor para mostrar el mensje de ganador.


class Numeros{
  constructor(respuestaUsuario,mensajes){
    this.numeroAleatorio = Math.round(Math.random()*1000);
    this.respuestaUsuario = respuestaUsuario;
    this.mensajes = mensajes;
    this.dificultad = 0;
    this.contador = 0;
  }
  actualizarNumero(){
    this.numeroAleatorio = Math.round(Math.random()*1000);
  }
  elejirDificultad(botones,indes){
    let dificultades = [80,40,20,10];
    botones.addEventListener("click",()=>{
      this.dificultad = dificultades[indes];
      contenedor__dificultad.classList.add("hideContenedor__dificultad");
      oprtunidades.textContent = \`Tienes ${"${this.dificultad}"} oprtunidades\`
    })
  }
  reintentar(){
    this.contador = 0;
    this.actualizarNumero();
    contenedor__dificultad.classList.remove("hideContenedor__dificultad");
    contenedorPerdiste.classList.remove("contenedorPerdisteShow");
    ganaste.classList.remove("showGanaste");
    this.mensajes.textContent = "";
    mensajes.classList.remove("showMensajes");
  }
  mostrarMensajes(texto){
    this.mensajes.textContent = texto
    mensajes.classList.add("showMensajes");
  }
  comprobar(){
    this.contador++;
    oprtunidades.textContent = \`Tienes ${"${this.dificultad - this.contador}"} oprtunidades\`
    switch(this.contador){
      case this.dificultad:
        contenedorPerdiste.classList.add("contenedorPerdisteShow");
        respuestaCorrecta.textContent = \`La respuesta correcta es: ${"${this.numeroAleatorio}"}\`
        ganaste.classList.remove("showGanaste");
      break;
      default:
      break;
    }
    if (this.respuestaUsuario.value > this.numeroAleatorio) {
      this.mostrarMensajes("el numero es menor")
    } else if (this.respuestaUsuario.value < this.numeroAleatorio){
      this.mostrarMensajes("el numero es mayor")
    } else {
      contenedorPerdiste.classList.remove("contenedorPerdisteShow");
      ganaste.classList.add("showGanaste");
    }
  }
}

const numeros = new Numeros(respuestaUsuario,mensajes)
comprobar.addEventListener("click",()=>numeros.comprobar());
btnDificultad.forEach((botnes,indes)=>{numeros.elejirDificultad(botnes,indes)})
reintentar.forEach(boton=>boton.addEventListener("click",()=>numeros.reintentar()))`}
      />
      <MensajeModal texto={`¡Proyecto! capitulo 8:

Hacer un juego de adivina el numero usando callbacks.

Recuerda que aprendimos:

1. Control de flujo.
2. switch.
3. manejo de errores.
4. callbacks.
5. Promesas.
6. await y async.`}/>

      <div className="Page">
        <div className={`presentacionCap8JsV1 ${showLoading ? "":"presentacionCap8JsV1Hide"}`}>
          <h4>Adivina el numero</h4>
          <div className="presentacionCap8JsV1__loading">
            Loading
          </div>
        </div>
        <div className={`contenedorDificultadCap8JsV1 ${showDificultad ? "contenedorDificultadCap8JsV1Show":""} ${hideDifucultad ? "contenedorDificultadCap8JsV1Hide":""}`}>
          <h4>Elejir dificultad</h4>
          <div className="contenedorDificultadCap8JsV1__contentBtn">
            {
              dificultades.map(i=><button className="contenedorDificultadCap8JsV1__boton" onClick={()=>elejirDificultad(i[1])} key={i}>{i[0]}</button>)
            }
          </div>
        </div>

        <div className={`contenedorCap8JsV1ganarPerder ${ganaste ? "showGanaste":""}`}>
          <h4>Ganaste</h4>
          <p>lo lograste adivinaste el numero</p>
          <button onClick={reintentar}><FontAwesomeIcon icon={faRedo} /></button>
        </div>
        <div className={`contenedorCap8JsV1ganarPerder ${perdiste ? "showPerdiste":""}`}>
          <h4>Perdiste</h4>
          <p>el numero oculto era {numeroAleatorio}</p>
          <button onClick={reintentar}><FontAwesomeIcon icon={faRedo} /></button>
        </div>


        <div className="contenedorPrincipalCap8JsV1">
          <h4>tienes {dificultad} oportunidades</h4>
          <input 
            type="number" 
            onChange={e=>setRespuestaUsuario(e.target.value)}
          />
          <div className="contenedorPrincipalCap8JsV1__comprobar">
            <button onClick={comprobar}>comprobar</button>
            <p>{mensajes}</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Cap8ProyJsV1;