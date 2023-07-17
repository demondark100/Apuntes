import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import React, { useState, useEffect } from 'react';
import "./cap4.css"

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';


// este componente muestra las instucciones
function Instrucciones({
  showInstrucciones,
  setShowInstrucciones
}){
  return(
    <div 
      className={`fondoNegroProyInstrucciones 
      ${showInstrucciones ? 
      "":
      "fondoNegroProyInstruccionesHide"}`
    }>
      <div 
        className={`contenedorInstruccionesJsProy 
        ${showInstrucciones ? 
        "":
        "contenedorInstruccionesJsProyHide"}`
      }>
        <h4>Instrucciones</h4>
        <p>
          {`Te dare una breve explicacion:

1. Debes poner cuantos ejercicios deseas resolver en el espacio que esta de color blanco (solo se admiten numeros).

2. Selecciona que operacion quieres practicar tienes + , - , x , ÷.

3. Una vez seleccionados dale en iniciar y apareceran los ejercicios para resolver.

4. Cuando termines un ejercicio dale a "siguiente" para pasar al siguiente ejercicio.

5. Al final te mostrare cuantas respuestas correctas e incorrectas tienes.

¡Suerte!`}
        </p>
        <button onClick={()=>setShowInstrucciones(false)}>Entendido</button>
      </div>
    </div>
  )
}




// este componente renderizara la cantidad de operaciones que quiere realizar el usuario
function CantidadOperaciones({
  handleKeyPress,
  setCantidad,
  showCantidad,
  mensajeErrorCantidad,
  operaciones,
  obtenerOperacion,
  iniciar,
  mensajeErrorOperacion,
  cantidad,
  operacionLetra,
  operacion
}){
  return(
    <div className={`contenedorAritmeticaPryJs__cantidad ${showCantidad ? "":"contenedorAritmeticaPryJs__cantidadHide"}`}>
      <div className="contenedorAritmeticaPryJs__cantidad__seleccion">
        <h4>¿Cuantos ejercicios deseas resolver?</h4>
        <div className="contenedorAritmeticaPryJs__cantidad__input">
          <input
            type="text"
            onKeyPress={handleKeyPress}
            onChange={(e)=>setCantidad(e.target.value)}
          />
        </div>
        {
          mensajeErrorCantidad && <p>
            porfavor pon cuantos ejercicios deseas realizar.
          </p>
        }
      </div>
      <ElegirOperacion 
        operaciones={operaciones}
        obtenerOperacion={obtenerOperacion}
        mensajeErrorOperacion={mensajeErrorOperacion}
      />

      <div className="contenedorMostrarProcesosProyJsCap4">
        <p>ejercicios para resolver: {cantidad == 0 ? "0": cantidad}</p>
        <p>
          operacion elegida: {operacion == "" ? "no elegido": operacionLetra}
        </p>
      </div>

      <button className="comprobarProyJsBtnCap4V1" onClick={iniciar}>
        <span>¡iniciar!</span>
      </button>

    </div>
  )
}



// este componente renderiza las opciones para elegir una operacion.
function ElegirOperacion({
  operaciones,
  obtenerOperacion,
  mensajeErrorOperacion
}){

  return(
      <div className="contenedorSelectOperacionProyJs__content">
        <h4>¡Elije una operacion!</h4>
        <div className="contenedorSelectOperacionProyJs__content__botones">
          {operaciones.map((i) => (
            <div>
              <button onClick={() => obtenerOperacion(i[1])} key={i[1]}>
                {i[1]}
              </button>
              <p>{i[2]}</p>
            </div>
          ))}
        </div>
        {
          mensajeErrorOperacion && <p style={{textAlign: "center"}}>
            porfavor seleccione una operacion para continuar.
          </p> 
        }
      </div>
  )
}




// este es el componente que muestra los numeros que debe resolver el usuario.
function ResolverOperacion({
  setResultadoUsuario,
  nun1,nun2,
  comprobar,
  showHideBotonComprobar,
  showEstadisticas,
  correctos,
  incorrectos,
  reintentar,
  darMensaje,
  colorDarMensaje,
  showMensajesErrCorr,
  exerciseChange,
  operacionMuestra
}){
  return(
    <div className="resolverOperacionContenedorPryJsCap4">
      <div className={`resolverOperacionContenedorPryJsCap4Animated ${
        exerciseChange ?
          "resolverOperacionContenedorPryJsCap4AnimatedChange":
          "resolverOperacionContenedorPryJsCap4AnimatedNoChange"
      }`}>
        <div className="resolverOperacionContenedorPryJsCap4__contenedor">
          <div className="resolverOperacionContenedorPryJsCap4__contenedor__first">
            <p>{nun1}</p>
            <p>{nun2}</p>
          </div>
          <b>{operacionMuestra}</b>
        </div>
        <div className="resolverOperacionContenedorPryJsCap4__contenedor__input">
          <input
            type="number"
            onChange={(e)=>setResultadoUsuario(e.target.value)}
          />
        </div>
      </div>
      <p 
        className={`mensajeCorrInProuCap4Js ${colorDarMensaje ? 
          "mensajeCorrInProuCap4JsCoorecto":
          "mensajeCorrInProuCap4JsIncorrecto"}
          ${showMensajesErrCorr ? 
            "mensajeCorrInProuCap4JsShow":"mensajeCorrInProuCap4JsHide"
          }`
        }
      >{darMensaje}</p>
      <button  
        onClick={comprobar}
        className={`BotonComprobarProyJsCap4 ${showHideBotonComprobar ? "BotonComprobarProyJsCap4Show":"BotonComprobarProyJsCap4Hide"}`}
      >siguiente</button>

      <Estadisticas 
        showEstadisticas={showEstadisticas}
        correctos={correctos}
        incorrectos={incorrectos}
        reintentar={reintentar}
      />
    </div>
  )
}

function Estadisticas({
  showEstadisticas,
  correctos,
  incorrectos,
  reintentar
}){
  return(
    <div className={`contenedorEstadisticasProyJsCap4 ${showEstadisticas ? "contenedorEstadisticasProyJsCap4Show":""}`}>
      <div>
      <p>correctos: {correctos}</p>
      <p>incorrectos: {incorrectos}</p>
      </div>
      <button className="botonReintentarCap4ProyJs" onClick={reintentar}><FontAwesomeIcon icon={faRedoAlt} /></button>

    </div>
  )
}


function Cap4ProyJsV1() {
  let elNumeroAleatorio = 1000;

  const [showInstrucciones, setShowInstrucciones] = useState(true); // este estado quitara las instrucciones.


  // toda esta parte es la programacion de cantidad

  // esta funcion es para que solo se pueda poner numeros en el input de la cantidad.
  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const [cantidad, setCantidad] = useState(0); //esto obtiene la cantidad de ejercicios que el usuario quiere realizar.
  const [showCantidad, setShowCantidad] = useState(true); // esto es para quitar el div que muestra la cantidad.
  const [mensajeErrorCantidad, setMensajeErrorCantidad] = useState(false);


  // toda esta funcionalidad es para obtener la operacion que desea hacer el UNSAFE_useScrollRestoration.
  let operaciones = [
    ["+","+","suma"],
    ["-","-","resta"],
    ["*","x","multiplicacion"],
    ["/","÷","divicion"]
  ]
  const [operacion, setOperacion] = useState(""); // esto guarda la operacion que eligio el usuario
  const [operacionLetra, setOperacionLetra] = useState("");
  const [operacionMuestra, setOperacionMuestra] = useState("");
  const obtenerOperacion = (valor1) => {
    let operacionReal = valor1;

    // Reemplazar símbolos
    operaciones.forEach((op) => {
      if (valor1 === op[1]) {
        operacionReal = op[0];
        setOperacionLetra(op[2])
        setOperacionMuestra(op[1])
      }
    });

    setOperacion(operacionReal);
    
  };

  // esto es para iniciar con las operaciones matematicas
  const [mensajeErrorOperacion, setMensajeErrorOperacion] = useState(false);
  const iniciar =()=>{
    // estp es para verificar que cantidad tenga un numero.
    if (cantidad == 0) {
      setMensajeErrorCantidad(true)
      setTimeout(() => {
        setMensajeErrorCantidad(false)
      }, 4000);
    } else {
      setMensajeErrorCantidad(false)
    }

    // esto es para verofocar que el usuario seleccione una operacion.
    if (operacion == "") {
      setMensajeErrorOperacion(true)
      setTimeout(() => {
        setMensajeErrorOperacion(false)
      }, 4000);
    }

    // esto es para quitar este componente
    if (operacion != "" && cantidad > 0) {
      setShowCantidad(false)
    }
  }



  // esta es la funcionalidad de las operaciones.
  const [resultadoUsuario, setResultadoUsuario] = useState("");
  const [nun1, setNun1] = useState(0);
  const [nun2, setNun2] = useState(0);
  const [aumento, setAumento] = useState(0);
  const [correctos, setCorrectos] = useState(0);
  const [incorrectos, setIncorrectos] = useState(0);
  const [showHideBotonComprobar, setShowHideBotonComprobar] = useState(true);
  const [exerciseChange, setExerciseChange] = useState(false);

  let elejirMensaje = Math.floor(Math.random()*6);
  let mensajesCorrecto = [
    "bien hecho",
    "correcto",
    "vas muy bien",
    "excelente",
    "pero que buen trabajo",
    "eres muy bueno para esto"
  ]
  let mensajesIncorrecto = [
    "esta mal",
    "incorrecto",
    "no te rindas",
    "¡Tu puedes!",
    "fallaste pero continuemos ¿si?",
    "estuviste cerca"
  ]
  const [darMensaje, setDarMensaje] = useState("");
  const [colorDarMensaje, setColorDarMensaje] = useState(false);
  const [showMensajesErrCorr, setShowMensajesErrCorr] = useState(false);
  
  useEffect(() => {
    setAumento(1)
    setNun1(Math.floor(Math.random() * elNumeroAleatorio) + 1);
    setNun2(Math.floor(Math.random() * elNumeroAleatorio) + 1);
  }, []);
  
  function comprobar() {
    let resultado = eval(nun1 + operacion + nun2);
    if (resultado < 0) {
      resultado = 0
    }
    setTimeout(() => {
      setShowMensajesErrCorr(false)
      setShowHideBotonComprobar(true)
    }, 3050);
    setTimeout(() => {
      setExerciseChange(false)
    }, 500);
    setAumento(aumento + 1);
    if (aumento <= cantidad) {
      if (resultadoUsuario == resultado) {
        setCorrectos(correctos + 1);
        setDarMensaje(`${mensajesCorrecto[elejirMensaje]}`)
        setColorDarMensaje(true)
        setShowMensajesErrCorr(true)
        setShowHideBotonComprobar(false)
        setExerciseChange(true)
      } else {
        setIncorrectos(incorrectos + 1);
        setDarMensaje(`${mensajesIncorrecto[elejirMensaje]} respuesta correcta: ${resultado}`)
        setColorDarMensaje(false)
        setShowMensajesErrCorr(true)
        setShowHideBotonComprobar(false)
        setExerciseChange(true)
      }
  
      if (aumento < cantidad) {
        setTimeout(() => {
          setNun1(Math.floor(Math.random() * elNumeroAleatorio) + 1);
          setNun2(Math.floor(Math.random() * elNumeroAleatorio) + 1);
        }, 500);
      }
    } else{
      setShowHideBotonComprobar(false)
      setShowEstadisticas(true) 
    }
  }
  

  const [showEstadisticas, setShowEstadisticas] = useState(false);
  const reintentar =()=>{
    setShowEstadisticas(false)
    setShowCantidad(true)
    setAumento(1)
    setShowHideBotonComprobar(true)
    setCorrectos(0)
    setIncorrectos(0)
    setNun1(Math.floor(Math.random() * elNumeroAleatorio) + 1)
    setNun2(Math.floor(Math.random() * elNumeroAleatorio) + 1)
  }

  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 4

hacer ejercicios matematicos basicos para que el usuario los resuelva.

Recuerda que aprendimos:

1. Programacion orientada a objetos.
2. Metodos de cadenas.
3. Metodos de arreglos.
4. Object Math.`}/>

      <CodigoFuenteSinInt codigo={<JavaScropt codigo={`alert(\`Hola bienvenido/a a los ejercicios matematicos basicos para aprender aritmetica , la dinamica sera esta:

1. resuelve el ejercicio y le das a aseptar.
2. tu podras elegir cuantos ejercicios quieres resolver para practicar.
3. al final yo te mostrare cuantas veces asetaste y cuantas te equivocaste\`);

class Aritmetica {
  constructor(){
    this.operaciones = [
      [1,"+"],
      [2,"-"],
      [3,"/"],
      [4,"*"]
    ] // esta variable contiene las posibles operaciones que elija el usuario.

    this.operacion = "" // esto guardara la operacion que haya elegido el usuario.

    this.elejir = prompt(\`Escoje un desafio para continuar.
    1. + 2. - 3. / 4. x\`) // esta variable es para que el usuario elija una operacion

    this.cantidad = prompt(\`¿Cuantos ejercicios deseas resolver?\`) // estoes cuantos ejercicios quiere resolver el usuario.

    this.nun1 = 0 //este es el numero aleatorio 1
    this.nun2 = 0 //este es el numero aleatorio 2
    this.resultado = 0 // esto guarda la respuesta correcta.
    this.resultadoUsuario = 0 //esto es la respuesta del usuario.
    this.corrctos = 0 //esto sera el almacen de los asiertos.
    this.incorrectos = 0 //esto seran los fracasos.
    this.mensajesCorrecto = [
      "bien hecho",
      "correcto",
      "vas muy bien",
      "excelente",
      "pero que buen trabajo",
      "eres muy bueno para esto"
    ]
    this.mensajesIncorrecto = [
      "esta mal",
      "incorrecto",
      "no te rindas",
      "¡Tu puedes!",
      "fallaste pero continuemos ¿si?",
      "estuviste cerca"
    ]
    this.mensajeAleatorio = 0;
  }
  obtenerOperacion=()=>{
    for(let i in this.operaciones){
      if (this.elejir == this.operaciones[i][0]) {
        this.operacion = this.operaciones[i][1]
      }
    }
  }
  comprobar(){
    this.obtenerOperacion();
    for(let i = 0;i < this.cantidad;i++){
      this.nun1 = Math.round(Math.random(this.nun1)*1000) + 1;
      this.nun2 = Math.round(Math.random(this.nun2)*1000) + 1;
      this.resultado = eval(this.nun1 + this.operacion + this.nun2)
      this.resultadoUsuario = prompt(\`${"${this.nun1}"} ${"${this.operacion}"}
${"${this.nun2}"}\`)
      this.mensajeAleatorio = Math.round(Math.random(this.mensajeAleatorio)*6)
      if (this.resultadoUsuario == this.resultado) {
        this.corrctos++;
        alert(this.mensajesCorrecto[this.mensajeAleatorio])
      } else{
        this.incorrectos++;
        alert(this.mensajesIncorrecto[this.mensajeAleatorio])
      }
    }
    if(this.corrctos == this.cantidad){
      alert(\`Eres la perfeccion misma tus seres queridos deben de estar orgullosos de ti.
      correctos: ${"${this.corrctos}"}.
      incorrectos: ${"${this.incorrectos}"}\`)
    } else if (this.corrctos > this.incorrectos) {
      alert(\`¡woow! bien hecho hiciste la mayoria de operaciones bien eres de lo mejor.
      correctos: ${"{this.corrctos}"}.
      incorrectos: ${"${this.incorrectos}"}\`)
    } else if (this.corrctos < this.incorrectos){
      alert(\`la mayoria esta mal pero sigue practicando y podras llegar a la perfeccion.:
      correctos: ${"${this.corrctos}"}.
      incorrectos: ${"${this.incorrectos}"}\`)
    }
  }
}
const aritmetica = new Aritmetica(); 
aritmetica.comprobar()`}/>}/>
      <Volver link={"../"}/>


      <div className="Page">

        <div className="contenedorAritmeticaPryJs">

          {/* estas son las instrucciones */}
          <Instrucciones 
            showInstrucciones={showInstrucciones} 
            setShowInstrucciones={setShowInstrucciones}
          />

          {/* esto es para seleccionar la cantidad de ejercicios que el usuario desea resolver */}
          <CantidadOperaciones 
            handleKeyPress={handleKeyPress}
            setCantidad={setCantidad}
            showCantidad={showCantidad}
            mensajeErrorCantidad={mensajeErrorCantidad}
            operaciones={operaciones}
            obtenerOperacion={obtenerOperacion}
            iniciar={iniciar}
            mensajeErrorOperacion={mensajeErrorOperacion}
            cantidad={cantidad}
            operacionLetra={operacionLetra}
            operacion={operacion}
          />
          
          <ResolverOperacion 
            handleKeyPress={handleKeyPress}
            resultadoUsuario={resultadoUsuario}
            setResultadoUsuario={setResultadoUsuario}
            nun1={nun1}
            nun2={nun2}
            comprobar={comprobar}
            showHideBotonComprobar={showHideBotonComprobar}
            showEstadisticas={showEstadisticas}
            correctos={correctos}
            incorrectos={incorrectos}
            reintentar={reintentar}
            darMensaje={darMensaje}
            colorDarMensaje={colorDarMensaje}
            showMensajesErrCorr={showMensajesErrCorr}
            exerciseChange={exerciseChange}
            operacionMuestra={operacionMuestra}
          />

        </div>

      </div>
    </>
  );
}

export default Cap4ProyJsV1;