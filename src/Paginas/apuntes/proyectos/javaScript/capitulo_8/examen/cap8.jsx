import "./cap8.css";
import Volver from "../../../../../../componentes/volver/volver";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Html from "../../../../../../componentes/lenguajes/Html";
import Css from "../../../../../../componentes/lenguajes/Css";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import React, { useEffect, useRef, useState } from 'react';

function Cap8ProyJsV2() {

  const [hidePresent, setHidePresent] = useState(false); // esto es para quitar la presentacion
  setTimeout(() => setHidePresent(true), 4000); // aqui quitamos la presentacion

  const [preguntasCount, setPreguntasCount] = useState(0); // esto sera para recorrer las peguntas.
  const [opcionesCout, setOpcionesCout] = useState(0); // esto sera para recorrer las opciones.
  const fondo = useRef(); // esto es el fondo que cambia de color
  const [contenedorPeguntas, setContenedorPeguntas] = useState(true); // esto es para quitar el contenedor de las preguntas
  const [contenedorResultados, setContenedorResultados] = useState(false); // esto es para mostrar los resultados

  const [correctos, setCorrectos] = useState(0); // esto guarda la cantidad de correctas del usuario
  const [incorrectos, setIncorrectos] = useState(0); // esto guarda la cantidad de incorrectas del usuario

  const [showDetalles, setShowDetalles] = useState(false); // esto muestra los detalles.
  
  const [preguntasInc, setPreguntasInc] = useState([]); // esto guarda las preguntas incorrectas del usuario
  const [botonDetalles, setBotonDetalles] = useState(false); // esto muestra o quita el boton de ver detalles.

  const [mensajesParaGenios, setMensajesParaGenios] = useState(""); // estos mensajes son para los genio
  const [mensaje, setMensaje] = useState(""); // esto es para mostrar los mensajes generales

  let preguntas = [
    "¿Para que sirve una variable?",
    "¿A esta estructura se le considera? while(){}",
    "¿En programacion que es esto \"++\"?",
    "¿Cual de estos no es un lenguaje de programacion?",
    "¿Como se llaman los datos que le mandamos a una funcion?",
    "¿Un dato que esta dentro de \"\" se le considera?",
    "¿En que se basa la POO para funcionar?",
    "¿Esto se le considera \"25\"?",
    "¿Cual sera el resultado de este codigo? \"25\" + \"25\"",
    "¿A esta estructura se le considera? for(){}",
    "¿A esta estructura se le conoce como? if(){}",
    "¿Los datos true y false se consideran?",
    "¿Como se optiene la posision de un arreglo?",
    "¿Para que sirve este simbolo ==?",
    "¿Para que sirve un input en la programacion?",
    "¿La herencia nos sirve para?",
    "¿Este simbolo representa !=?",
    "¿POO es un paradicma de programacion?",
    `¿Este codigo tiene fin? 
    while(i < 1):
      print("25");`
  ];
  
  let opciones = [
    ["Para hacer tareas repetitivas","Para guardar un valor","Para ver si algo se ejecuta"],
    ["bucle mientras","bucle para","do while"],
    ["Concatenacion","acumulacion","sumar dos valores"],
    ["c++","ruby","FlStudio"],
    ["inputs","parametros","outputs"],
    ["numeros","booleanos","strings"],
    ["funciones","funciones flechas","clases","metodos"],
    ["una string","un dato numerico","un caracter","ninguno de los anteriores"],
    ["50","25","2525","ninguno de los anteriores"],
    ["POO","bucle","bucle para","buxcle mientras","no es un bucle"],
    ["Objetos","funciones acortadas","condicional","diccionarios","ninguno"],
    ["numericos","booleanos","string","flotantes","ninguno"],
    ["variable.posision","variable[posision]","variable(posision)","variable{posision}","variable,posision"],
    ["Para comparar valores","Para asignar un valor","Para acumular valores iguales","ninguno"],
    ["Para enviar un resultado al usuario","Para guiar al usuario","Para recibir datos","para procesar un dato"],
    ["reutilizar funciones","Reutilizar clases y metodos","Para heredar condiciones"],
    ["igual que","mayor que","distinto de"],
    ["verdadero","false"],
    ["Si porque en algun momento se cumplira la condicion","No porque i no se esta iterando","ninguna de las anteriores , en algun momento debe terminar"],
    []
  ]

  let respuesta = [
    "Para guardar un valor",
    "bucle mientras",
    "acumulacion",
    "FlStudio",
    "parametros",
    "strings",
    "metodos",
    "una string",
    "2525",
    "bucle para",
    "condicional",
    "booleanos",
    "variable[posision]",
    "Para comparar valores",
    "Para recibir datos",
    "Reutilizar clases y metodos",
    "distinto de",
    "verdadero",
    "No porque i no se esta iterando"
  ]
  
  
  const comprobar = (eligio) => {
    let numeroAleatorio = [
      Math.round(Math.random() * 80),
      Math.round(Math.random() * 80),
      Math.round(Math.random() * 80)
    ];
    fondo.current.style.backgroundColor = `rgb(${numeroAleatorio[0]},${numeroAleatorio[1]},${numeroAleatorio[2]})`;
  
    if (eligio === respuesta[preguntasCount]) {
      setCorrectos(correctos + 1);
    } else {
      setIncorrectos(incorrectos + 1);
      setPreguntasInc([...preguntasInc, preguntas[preguntasCount]]);
    }
  
    setPreguntasCount(preguntasCount + 1);
    setOpcionesCout(opcionesCout + 1);

    (preguntasInc.length == 0) ? setBotonDetalles(false):setBotonDetalles(true);
  
    if (opciones[opcionesCout + 1].length === 0) {
      setContenedorPeguntas(false);
      setContenedorResultados(true);
    }
  };
  

  const mensajesPositivos = [
    "Muy bien",
    "Buen trabajo",
    "Bien hecho",
    "Tu camino es brillante",
    "Vas por buen camino",
    "Estas bastante bien"
  ];
  const mensajesIncorrectos = [
    "Tan cerca pero tan lejos",
    "Ok no estas tan perdido",
    "Esta bien no te rindas",
    "No es el fin del mundo un error lo comete cualquiera",
    "te falta practicar",
    "Roma no se hizo en un dia XD",
    "ok no todo esta perdido",
    "La proxima lo haras mejor",
    "El que se rinda es gay XD"
  ];
  const mensajesPendejos = [
    "Eres una desepcion en la programacion",
    "cambiate de carrera bro",
    "todo mal ¿en serio?",
    "como es posible este suceso todo incorrecto",
    "creo que programar no es lo tuyo",
    "pero esto es easy como fallaste todo",
    "En serio ninguna correcta woow me sorprendes",
    "Huga huga tu no servir para programar",
    "todo mal pero que carajos",
    "nooo re turbio todo mal contigo",
    "Si te esfueerzas talves dentro de 500 años logre algo XD",
    "No te desanimes bueno si haslo estas jodido"
  ];
  const mensajeGenio = [
    "Albert Einstein te la pela genio",
    "Eres todo un crack ni un solor error",
    "Y porque no consigues chanba? las empresas se pelearan por ti",
    "todo correcto un crack en serio",
    "Respondiste todo bien esto es lo tuyo definitivamente",
    "la programacion es demasiado facil para ti verdad",
    "eres la esperanza de la programacion crack"
  ]

  const mensajeColor = useRef(null)
  const mensajeColorGenios = useRef(null)

  const verDetalles=()=>{
    setShowDetalles(true);
    if (correctos > incorrectos) {
      setMensaje(mensajesPositivos[Math.floor(Math.random()*6)])
      mensajeColor.current.style.color = "#0bca0b"
    } else if (incorrectos == preguntas.length){
      setMensaje(mensajesPendejos[Math.floor(Math.random()*12)])
      mensajeColor.current.style.color = "#ff0000"
    } else if (incorrectos > correctos){
      setMensaje(mensajesIncorrectos[Math.floor(Math.random()*9)])
      mensajeColor.current.style.color = "#ff5e8e"
    }
  }
  useEffect(()=>{
    if(correctos == preguntas.length){
      setMensajesParaGenios(mensajeGenio[Math.floor(Math.random()*7)])
      mensajeColorGenios.current.style.color = "#0f0";
    }
  })
  

  

  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 8

Hacer un examen al usuario usando tryCatch.`}/>
      <CodigoFuenteSinInt codigo={<Html 
        codigo={`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="plantilla.css">

  </head>
  <body>

    <div id="contenedor">
      <p id="pregunta"></p>
      <p id="numeroPregunta"></p>
      <div class="opcionesContent">
        <button class="opciones"></button>
        <button class="opciones"></button>
        <button class="opciones"></button>
      </div>
    </div>

    <div id="finCuestionario">
      <h2>fin del cuestionario</h2>
      <p id="userCorrecto"></p>
      <p id="userIncorrecto"></p>
    </div>



    <script src="examen.js"></script>
  </body>
</html>`}
      />}
        codigo2={<Css codigo={`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #000;
}

#pregunta{
  color: #d2dee4;
  text-align: center;
  white-space: pre-wrap;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 2em;
  font-family: Arial, sans-serif;
}
#numeroPregunta{
  color: #d2dee4;
  text-align: center;
  font-size: 1.8em;
}
.opcionesContent{
  display: flex;
  flex-direction: column;
  gap: 45px;
  max-width: 800px;
  margin: auto;
  margin-top: 85px;
}
.opcionesContent button{
  color: #d2dee4;
  font-size: 1.8em;
  background-color: transparent;
  border: none;
  border: 2px solid #208ec5;
  border-radius: 1000px;
  cursor: pointer;
  transition-duration: .5s;
}
.opcionesContent button:hover{
  background-color: #57c7ff;
  color: #313e44;
  transition-duration: .5s;
}

.changeQuestion{
  transform: rotateY(90deg);
  transition-duration: .5s;
}


#finCuestionario{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0f0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition-duration: .5s;
  color: #d2dee4;
  background-color: #000000;
  flex-direction: column;
  gap: 25px;
  position: fixed;
}`}/>}
        codigo3={<JavaScropt codigo={`const pregunta = document.getElementById("pregunta"); // aqui iran las preguntas
const numeroPregunta = document.getElementById("numeroPregunta"); // esto es para indicar al usuario en que pregunta esta


const opciones = document.querySelectorAll(".opciones"); // estas son las opciones

const contenedor = document.getElementById("contenedor"); // esto es el contenedor principal

const finCuestionario = document.getElementById("finCuestionario"); // contenedor del fin del cuestionario
const userCorrecto = document.getElementById("userCorrecto");
const userIncorrecto = document.getElementById("userIncorrecto"); 



const preguntas = [
  "¿Para que sirve una variable?",
  "¿A esta estructura se le considera? while(){}",
  "¿En programacion que es esto \"++\"?",
  "¿Cual de estos no es un lenguaje de programacion?",
  "¿Como se llaman los datos que le mandamos a una funcion?",
  "¿Un dato que esta dentro de \"\" se le considera?",
  "¿En que se basa la POD para funcionar?",
  "¿Esto se le considera \"25\"?",
  "¿Cual sera el resultado de este codigo? \"25\" + \"25\"",
  "¿A esta estructura se le considera? for(){}",
  "¿A esta estructura se le conoce como? if(){}",
  "¿Los datos true y false se consideran?",
  "¿Como se optiene la posision de un arreglo?",
  "¿Para que sirve este simbolo ==?",
  "¿Para que sirve un input en la programacion?",
  "¿La herencia nos sirve para?",
  "¿Este simbolo representa !=?"
]
const respuestasOpciones = [
  ["Para hacer tareas repetitivas","Para guardar un valor","Para ver si algo se ejecuta"],
  ["bucle mientras","condicional","promesas"],
  ["Concatenacion","acumulacion","sumar"],
  ["c++","ruby","FlStudio"],
  ["strings","parametros","booleanos"],
  ["bucles","variables","strings"],
  ["funciones","condicionales","metodos"],
  ["una string","un dato numerico","un arreglo"],
  ["50","25","2525"],
  ["POD","bucle mientras","bucle para"],
  ["Objetos","metodos","condicional"],
  ["numericos","booleanos","string"],
  ["variable.posision","variable[posision]","variable(posision)"],
  ["Para comparar valores","Para asignar un valor","Para concatenar"],
  ["Para enviar un resultado al usuario","Para ayudar al usuario","Para recibir datos"],
  ["reutilizar funciones","Reutilizar clases y metodos","Para heredar condiciones"],
  ["igual que","mayor que","distinto de"]
]
const respuestas = [
  "Para guardar un valor",
  "bucle mientras",
  "acumulacion",
  "FlStudio",
  "parametros",
  "strings",
  "metodos",
  "una string",
  "2525",
  "bucle para",
  "condicional",
  "booleanos",
  "variable[posision]",
  "Para comparar valores",
  "Para recibir datos",
  "Reutilizar clases y metodos",
  "distinto de"
]

let indexQuestion = 0;
pregunta.textContent = preguntas[indexQuestion];

let indexRspta = 0;
opciones.forEach((boton,index)=>{
  boton.textContent = respuestasOpciones[indexRspta][index]
})

let correctos = 0; // esto guarda cuantos asiertos tiene el usuario
let incorrectos = 0; // esto guarda cuantos incorrectos tiene el usuario
let preguntaNumero = 1; // aqui indicaremos en que pregunta esta el usuario

numeroPregunta.textContent = "Pregunta numero: " + preguntaNumero;

opciones.forEach((botones,index)=>{
  botones.addEventListener("click",()=>{
    if (botones.textContent == respuestas[indexRspta]) {
      correctos++;
    } else {
      incorrectos++;
    }

    contenedor.classList.add("changeQuestion")
    setTimeout(()=>{
      try{
        preguntaNumero++;
        numeroPregunta.textContent = "Pregunta numero: " + preguntaNumero;
        contenedor.classList.remove("changeQuestion")
        contenedor.style.transitionDuration = ".5s"
        indexQuestion++;
        pregunta.textContent = preguntas[indexQuestion];
        indexRspta++;
        opciones.forEach((boton,indice)=>{
          boton.textContent = respuestasOpciones[indexRspta][indice]
        })
      } catch(end){
        finCuestionario.style.visibility = "visible";
        finCuestionario.style.opacity = "1";
        finCuestionario.style.transitionDuration = ".5s";
        userCorrecto.textContent = "Respuestas correctas: " + correctos;
        userIncorrecto.textContent = "Respuestas incorrectas " + incorrectos;
      }
    },500)
  })
})`}/>}
      />
      
      <Volver link={"../"}/>

      <div className="Page">
        <div className={`contenedorTitleCap8JsV2 ${hidePresent ? "contenedorTitleCap8JsV2Hide":""}`}>
          <div className="contenedorTitleCap8JsV2ContenedorTitle">
            <h4>Examen de programacion</h4>
          </div>
        </div>
        <div ref={fondo} className={`contenedorPreguntasCap8JsV2Background ${contenedorPeguntas ? "":"contenedorPreguntasCap8JsV2BackgroundHide"}`}>
          <div className="contenedorPreguntasCap8JsV2">
            <p>{preguntasCount + 1}: {preguntas[preguntasCount]}</p>
            <div className="contenedorPreguntasCap8JsV2__botones">
              {
                opciones[opcionesCout].map(i=><button key={i} onClick={()=>comprobar(i)}>{i}</button>)
              }
            </div>
          </div>
        </div>

        <div className={`contenedorResultadosCap8JsV2 ${contenedorResultados ? "contenedorResultadosCap8JsV2Show":""}`}>
          <div className="contenedorResultadosCap8JsV2__estadisticas">
            <p>coorectos: {correctos}</p>
            <p>incorrectos: {incorrectos}</p>
            {botonDetalles?<button onClick={verDetalles}>ver detalles</button>:null}
          </div>
          <h4 ref={mensajeColorGenios}>{mensajesParaGenios}</h4>

          <div className={`contenedorResultadosCap8JsV2__detalles ${showDetalles ? "contenedorResultadosCap8JsV2__detallesShow":""}`}>
            <div>
              <h4>Preguntas en las que fallaste</h4>
              {preguntasInc.map(i=><p>{i}</p>)}
              <h4 ref={mensajeColor}>{mensaje}</h4>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default Cap8ProyJsV2;