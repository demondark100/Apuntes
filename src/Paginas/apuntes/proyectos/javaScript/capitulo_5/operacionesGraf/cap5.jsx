import "./cap5.css";
import { useState,useEffect,useRef } from "react";

// componentes generales
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../../componentes/volver/volver";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Html from "../../../../../../componentes/lenguajes/Html";
import Css from "../../../../../../componentes/lenguajes/Css";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";



import manzana from "./manzana.png";

function Prompt({
  setOperacion,
  showPrompt,
  verificarDatos,
  setNumero1,
  setNumero2,
  mensajeError,
  mensajeErr,
  operacion
}){

  

  const boton1 = useRef(null);
  const boton2 = useRef(null);
  const boton3 = useRef(null);
  const boton4 = useRef(null);
  const mantenerFocus = (posision, elemento) => {
    const botonesRefs = [boton1, boton2, boton3, boton4];
  
    for (let i = 0; i < botonesRefs.length; i++) {
      if (posision === `b${i + 1}`) {
        elemento.classList.add("botonOperacionCap5V2Focus");
      } else {
        botonesRefs[i].current.classList.remove("botonOperacionCap5V2Focus");
      }
    }
  };
  
  

  return(
    <div className={`contenedorPromptCap5DOM ${showPrompt ? "":"contenedorPromptCap5DOMGide" }`}>
      <div className="contenedorPromptCap5DOM__content">
        <div className="contenedorPromptCap5DOM__botones">
          <button
            ref={boton1}
            onClick={()=>{
              setOperacion("+")
              mantenerFocus("b1",boton1.current)
            }}
          >+</button>
          <button
            ref={boton2}
            onClick={()=>{
              setOperacion("-")
              mantenerFocus("b2",boton2.current)
            }}
          >-</button>
          <button
            ref={boton3}
            onClick={()=>{
              setOperacion("*")
              mantenerFocus("b3",boton3.current)
            }}
          >x</button>
          <button
            ref={boton4}
            onClick={()=>{
              setOperacion("/")
              mantenerFocus("b4",boton4.current)
            }}
          >÷</button>
        </div>
        
        <div className="contenedorPromptCap5DOM__inputs">
          <input 
            type="number" 
            onChange={(e)=>setNumero1(e.target.value)}
          />
          <b className="contenedorPromptCap5DOM__inputs__operacion">
            {
              operacion === "*" ? "x" : (operacion === "/" ? "÷" : operacion)
            }
          </b>
          <input 
            type="number" 
            onChange={(e)=>setNumero2(e.target.value)}
          />
        </div>
        <button 
          className="contenedorPromptCap5DOM__generar"
          onClick={verificarDatos}
        >generar grafico</button>
        
      </div>
      <p className={`contenedorPromptCap5DOM__error ${mensajeError ? "":"contenedorPromptCap5DOM__errorHide"}`}>{mensajeErr}</p>
    </div>
  )
}


function Cap5ProyJsV2() {
  // estos son los datos para poder generar las manzanas
  const [operacion, setOperacion] = useState(""); // esto es para obtener la operacion
  const [showPrompt, setShowPrompt] = useState(true); // esto es para mostrar o quitar el prompt
  const [numero1, setNumero1] = useState(""); // esto es el numero 1
  const [numero2, setNumero2] = useState(""); // esto es el numero 2
  const [resultado, setResultado] = useState(0); // esto es el resultado
  const [mensajeError, setMensajeError] = useState(false); // esto es para mostrar el mensaje de eror
  const [mensajeErr, setMensajeErr] = useState(""); // esto es el mensaje segun cual sea el error.

  const cajas1 = [];
  const cajas2 = [];
  const cajas3 = [];
  const [cajasState1, setCajasState1] = useState([]);
  const [cajasState2, setCajasState2] = useState([]);
  const [cajasState3, setCajasState3] = useState([]);

  const generarcAJAS=(cantidad,arreglo,arregloEstado)=>{
    for (let i = 0; i < cantidad; i++) {
      arreglo.push(<div className="manzajaCreadaCap5Js" key={i}>
        <div className="manzajaCreadaCap5Js__div">{i + 1}</div>
        <img src={manzana} alt="manzana" />
      </div>)
      arregloEstado(arreglo)
    }
  }
  useEffect(()=>{
    if (numero1 != "" && numero2 != "") {
      setResultado(eval(numero1 + operacion + numero2))
    }
  })

  
  const verificarDatos=()=>{
    if (numero1 == "" || numero2 == "") {
      setShowPrompt(true)
      setMensajeError(true)
      setMensajeErr("Rellena los espacios en blanco.")
      setTimeout(() => {
        setMensajeError(false)
      }, 4000);
    } else if (operacion == ""){
      setShowPrompt(true);
      setMensajeError(true);
      setMensajeErr("porfavor selecciona una operacion.")
      setTimeout(() => {
        setMensajeError(false)
      }, 4000);
    } else {
      setShowPrompt(false)
      generarcAJAS(numero1,cajas1,setCajasState1)
      generarcAJAS(numero2,cajas2,setCajasState2)
      generarcAJAS(resultado,cajas3,setCajasState3)

      
    }
  }


  
  
  
  return(
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 5

Hacer operaciones basicas y mostrar con manzanitas que esta sucediendo.`}/>
      <Volver link={`../`}/>
      <CodigoFuenteSinInt codigo={<Html codigo={`<!DOCTYPE html>
<html>
  <head>
      <title>operaciones con manzanitas</title>
      <link rel="stylesheet" href="manzanitas.css">

  </head>
  <body>

    <div class="contenedor">
      <div class="contenedor1"></div>
      <p class="simbolo"></p>
      <div class="contenedor2"></div>
        <p class="igual"></p>
        <div class="contenedor3"></div>
      </div>

      <script src="manzanitas.js"></script>
  </body>
</html>`}/>}
        codigo2={<Css codigo={`body{
  background-color: #000;
  color: #fff;
  text-align: center;
}

.contenedor{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contenedor1,.contenedor2,.contenedor3{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #555555;
  width: 330px;
  overflow: auto;
}


.cajaCreada{
  width: 25px;
  height: 25px;
  margin: 15px;
}
.simbolo,.igual {
  font-size: 2em;
}`}/>}
        codigo3={<JavaScropt codigo={`const contenedor1 = document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");
const contenedor3 = document.querySelector(".contenedor3");
const simbolo = document.querySelector(".simbolo");
const igual = document.querySelector(".igual");

const operaciones = {
  suma: [1,"+","sumar","+"],
  resta: [2,"-","restar","-"],
  divicion: [3,"÷","dividir","/"],
  multiplicacion: [4,"x","multiplicar","*"]
}
const operacion = prompt(\`¿Que operacion deseas realizar?
1. sumar
2. restar
3. dividir
4. multiplicar\`)


for(let i in operaciones){
  if (operacion == operaciones[i][0]) {
    var numero1 = prompt(\`Ingresa el primer numero para ${"${operaciones[i][2]}"}\`)
    var numero2 = prompt(\`Ingresa el segundo numero para ${"${operaciones[i][2]}"}\`)
    var resultado = eval(numero1 + operaciones[i][3] + numero2);
    simbolo.textContent = operaciones[i][1]
    igual.textContent = "="
  } 
}


function generarCajas(cantidad,contenedor) {
  const fragmento = document.createDocumentFragment();
  for (let i = 0; i < cantidad; i++) {
    const img = document.createElement("IMG");
    img.classList.add("cajaCreada");
    img.setAttribute("src","https://th.bing.com/th/id/OIP.vTliXK-QvUxLxXYmI3TdDAHaF7?w=231&h=184&c=7&r=0&o=5&pid=1.7")
    fragmento.appendChild(img);
    contenedor.appendChild(fragmento);
  }
}
generarCajas(numero1,contenedor1);
generarCajas(numero2,contenedor2);
generarCajas(resultado,contenedor3);`}/>}
      />

      <div className="Page">
        <div className="contenedorOperacionesCap5Dom">
          <Prompt 
            setOperacion={setOperacion}
            showPrompt={showPrompt}
            verificarDatos={verificarDatos}
            setNumero1={setNumero1}
            setNumero2={setNumero2}
            mensajeError={mensajeError}
            mensajeErr={mensajeErr}
            operacion={operacion}
          />
          <button 
            onClick={()=>{
              setShowPrompt(true)
              setCajasState1([])
              setCajasState2([])
              setCajasState3([])
            }}
            className="contenedorOperacionesCap5Dom__botonChange"
          >
            cambiar datos
          </button>

          <div className="contenedorCajarDeCajasCap5Js">
            <div className="contenedorCajitas__content1ProyJsCap5">{cajasState1}</div>
            <p 
              className="contenedorCajarDeCajasCap5Js__operacion"
            >
              {
                operacion === "*" ? "x" : (operacion === "/" ? "÷" : operacion)
              }
            </p>

            <div className="contenedorCajitas__content1ProyJsCap5">{cajasState2}</div>
            <p className="contenedorCajarDeCajasCap5Js__operacion">=</p>
            <div className="contenedorCajitas__content1ProyJsCap5">{cajasState3}</div>
          </div>
        

        </div>

      </div>
    </>
  )
}

export default Cap5ProyJsV2;