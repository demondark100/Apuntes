import "./cap7.css";
import React, { useState,useEffect } from 'react';
import Volver from "../../../../../../componentes/volver/volver"
import CodigoFuenteSinIn from "../../../../../../componentes/codigoFuente/code"
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal"


// lenguajes
import Html from "../../../../../../componentes/lenguajes/Html"
import Css from "../../../../../../componentes/lenguajes/Css"
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript"




function Cap7ProyJsV3() {
  const [palabra, setPalabra] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeCopiado, setMensajeCopiado] = useState(false);
  const [mostrando, setMostrando] = useState(false);

  function validarPalabra() {
    const palabraValida = palabra.trim();
    if (palabraValida === "") {
      mostrarError("Error: Debes ingresar una palabra.");
      return false;
    } else if (palabraValida.length < 6 || palabraValida.length > 12) {
      mostrarError("Error: La palabra debe tener entre 6 y 12 caracteres.");
      return false;
    }
    return true;
  }

  function mostrarError(mensaje) {
    setMensajeError(mensaje);
    setTimeout(() => {
      setMensajeError("");
    }, 4000);
  }

  function generarCaracterAleatorio() {
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    return caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
  }

  function generarContrasena(palabra) {
    let contrasena = "";
    for (let i = 0; i < palabra.length; i++) {
      contrasena += palabra[i] + generarCaracterAleatorio();
    }
    return contrasena;
  }

  async function mostrarContrasenaAnimada(contrasena) {
    setMostrando(true);
    const velocidadEscritura = 50; // Velocidad en milisegundos entre cada carácter
    for (let i = 0; i < contrasena.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, velocidadEscritura));
      setMostrarContrasena((prevContrasena) => prevContrasena + contrasena[i]);
    }
    setMostrando(true);
  }

  function copiarContrasena() {
    const contrasenaGenerada = mostrarContrasena;
    if (contrasenaGenerada !== "") {
      const textArea = document.createElement("textarea");
      textArea.value = contrasenaGenerada;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setMensajeCopiado(true);
      setTimeout(() => {
        setMensajeCopiado(false);
      }, 4000);
    }
  }

  async function handleGenerarContrasena(e) {
    e.preventDefault();
    if (validarPalabra()) {
      const palabraValida = palabra.trim();
      const contrasenaGenerada = generarContrasena(palabraValida);
      setMostrarContrasena(""); // Limpiamos el contenido previo
      await mostrarContrasenaAnimada(contrasenaGenerada);
    }
  }

  useEffect(() => {
    setMostrarContrasena(""); 
  }, []);

  return (
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 7

Hacer un generador de contraseñas seguras.`}/>
      <Volver link={"../"}/>
      <CodigoFuenteSinIn 
        codigo={<Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <title>Generador de Contraseñas</title>
    <link rel="stylesheet" href="generador.css">
  </head>
  <body>
      
    <div class="container">
      <h1>Generador de passwords</h1>
      <form>
        <label for="palabraInput">Palabra que desees</label>
        <input type="text" id="palabraInput">
        <p class="mensajeError"></p>
        <button id="botonGenerar">Generar Contraseña</button>
      </form>
      <div class="contenedorContraseña">
        <p class="mostrarContraseña"></p>
        <button class="botonCopiar">Copiar</button>
      </div>
    </div>
        
    <div class="contenedorMensaje">
      <div>
        <p class="mensajeCopiado"></p>
      </div>
    </div>
        
    <script src="generador.js"></script>
  </body>
</html>`}/>}
        codigo2={<Css codigo={`body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #0A0A14;
    color: #FFFFFF;
    text-align: center;
}

.container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    font-size: 28px;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 16px;
    margin-bottom: 5px;
}

input[type="text"] {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    margin-bottom: 10px;
}

.mensajeError {
    color: #FF0000;
    margin: 5px 0;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.contenedorContraseña {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #22223B;
    padding: 10px;
    border-radius: 4px;
}

.mostrarContraseña {
    font-size: 16px;
}

.botonCopiar {
    padding: 8px 15px;
    font-size: 14px;
    background-color: #FF5722;
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.botonCopiar:hover {
    background-color: #F4511E;
}




.contenedorMensaje{
    opacity: 0;
    visibility: hidden;
    transition-duration: .5s;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ShowContenedorMensaje{
    opacity: 1;
    visibility: visible;
    transition-duration: .5s;
}
.ShowContenedorMensaje div{
    background-color: #fff;
    width: 450px;
    color: #fff !important;
    font-size: 1.5em;
    background-color: #4CAF50;
}`}/>}
        codigo3={<JavaScropt codigo={`const palabraInput = document.getElementById("palabraInput");
const botonGenerar = document.getElementById("botonGenerar");
const botonCopiar = document.querySelector(".botonCopiar");
const mensajeError = document.querySelector(".mensajeError");
const mostrarContrasena = document.querySelector(".mostrarContraseña");
const contenedorContrasena = document.querySelector(".contenedorContraseña");
const contenedorMensaje = document.querySelector(".contenedorMensaje");
const mensajeCopiado = document.querySelector(".mensajeCopiado");


function validarPalabra() {
    const palabra = palabraInput.value.trim();
    if (palabra === "") {
        mostrarError("Error: Debes ingresar una palabra.");
        return false;
    } else if (palabra.length < 6 || palabra.length > 12) {
        mostrarError("Error: La palabra debe tener entre 6 y 12 caracteres.");
        return false;
    }
    return true;
}

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    setTimeout(() => {
        mensajeError.textContent = "";
    }, 2000);
}

function generarCaracterAleatorio() {
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    return caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
}

function generarContrasena(palabra) {
    let contrasena = "";
    for (let i = 0; i < palabra.length; i++) {
        contrasena += palabra[i] + generarCaracterAleatorio();
    }
    return contrasena;
}

function mostrarContrasenaAnimada(contrasena) {
    const velocidadEscritura = 50; // Velocidad en milisegundos entre cada carácter
    let i = 0;
    const intervalo = setInterval(() => {
        if (i === contrasena.length) {
            clearInterval(intervalo);
        } else {
            mostrarContrasena.textContent += contrasena[i];
            i++;
        }
    }, velocidadEscritura);
}

function copiarContrasena() {
    const contrasenaGenerada = mostrarContrasena.textContent;
    if (contrasenaGenerada !== "") {
        const textArea = document.createElement("textarea");
        textArea.value = contrasenaGenerada;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        contenedorMensaje.classList.add("ShowContenedorMensaje");
        mensajeCopiado.textContent = "password copiado al portapapeles";
        setTimeout(()=>{
        	contenedorMensaje.classList.remove("ShowContenedorMensaje");
        },4000)
    }
}

botonGenerar.addEventListener("click", (e) => {
    e.preventDefault();
    if (validarPalabra()) {
        const palabra = palabraInput.value.trim();
        const contrasenaGenerada = generarContrasena(palabra);
        mostrarContrasena.textContent = ""; // Limpiamos el contenido previo
        mostrarContrasenaAnimada(contrasenaGenerada); // Mostramos la contraseña con animación
    }
});

botonCopiar.addEventListener("click", () => {
    copiarContrasena();
});

palabraInput.addEventListener("input", () => {
    mostrarContrasena.textContent = "";
});`}/>}
      />
      

      <div className="Page">
        <div className="contenedorGeneracionJsCap7">
          <div className="containerGeneradorPassword">
            <h4>Generador de passwords</h4>
            <form className="formGeneradorContraseñas" onSubmit={handleGenerarContrasena}>
              <label className="palabraInputGenerador" htmlFor="palabraInputGenerador">
                Palabra que desees
              </label>
              <input
                type="text"
                id="palabraInputGenerador"
                value={palabra}
                onChange={(e) => setPalabra(e.target.value)}
              />
              <p className="mensajeErrorGeneradorContraseña">{mensajeError}</p>
              <button id="botonGenerar">Generar Contraseña</button>
            </form>
            <div className="contenedorContraseña">
              {mostrando ? (
                <p className="mostrarContraseña">{mostrarContrasena}</p>
              ) : (
                <p className="mostrarContraseña"></p>
              )}
              <button className="botonCopiarContraseña" onClick={copiarContrasena}>
                Copiar
              </button>
            </div>
          </div>
          <div className={`contenedorMensajeCopiado ${mensajeCopiado? "ShowContenedorMensajeCopiado":"HideContenedorMensajeCopiado"}`}>
              <div>
                <p className="mensajeCopiado">Contraseña copiada al portapapeles</p>
              </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Cap7ProyJsV3;