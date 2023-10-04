import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Css from "../../../../../../componentes/lenguajes/Css";
import Html from "../../../../../../componentes/lenguajes/Html";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../../componentes/volver/volver";
import "./cap9.css";
import React, { useState, useRef } from 'react';



// iconos de la aplicacion de chistes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function Confing({
  icono,
  texto,
  color,
  funcion
}) {
  const [showObcion, setShowObcion] = useState(false);

  return (
    <div className="contenedorCap9JsV2ConfigOp">
      <FontAwesomeIcon 
        icon={icono}
        style={{"color": color}}
        onMouseMove={()=>setShowObcion(true)}
        onMouseOut={()=>setShowObcion(false)}
        onClick={funcion}
      />
      <p className={`contenedorCap9JsV2ConfigOpParr  ${showObcion ?
        "":
        "contenedorCap9JsV2ConfigOpParrHide"
      }`}>{texto}</p>
    </div>
  )
}


function Configuracion({
  titleConfig,
  botones,
  funcion,
  valor
}){
  return(
    <div className="contenedorCap9JsV2Configuracion">
      <div className="contenedorCap9JsV2ConfiguracionContent">
        <h4>{titleConfig}</h4>
        <p>{valor}</p>
        {
          botones.map(i=><button key={i} onClick={()=>funcion(i)}>{i[0]}</button>)
        }
      </div>
    </div>
  )
}

function Advertencia({
  showAdvertencia,
  mensajeAdvertencia,
  aseptar,
  rechazar
}) {
  return(
    <div className={`contenedorCap9JsV2Advertencia ${
      showAdvertencia ?
      "":"contenedorCap9JsV2AdvertenciaHide"
    }`}>
      <div className="contenedorCap9JsV2AdvertenciaContent">
        <div className="contenedorCap9JsV2AdvertenciaContentMensaje">
          <p>{mensajeAdvertencia}</p>
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        <div className="contenedorCap9JsV2AdvertenciaContentBotones">
          <button onClick={aseptar}>si</button>
          <button onClick={rechazar}>no</button>
        </div>
      </div>
    </div>
  )
}



function Cap9ProyJsV2() {

  // mostrar configuraciones (contenedor principal)
  // setIconLoad(true)

  // configuraciones para la app.

  const [titleConfig, setTitleConfig] = useState(""); // esto indicara al usuario en que configuracion esta sera el titulo principal
  const [showLangage, setShowLangage] = useState(false); // esto es para mostrar el contenedor del selector de idiomas.
  const [showType, setShowType] = useState(false); // este es el contenedor para mostrar el selector del tipo de chiste.

  // estas dos variable es para indicar que esta seleccionando el usuario
  const [valor1, setValor1] = useState("español");
  const [valor2, setValor2] = useState("chistes normales");

  // estas dos variable de estado guardan el tipo de chiste y el idioma que el usuario selecciono
  const [language, setLanguage] = useState("es");
  const [type, setType] = useState("Pun");

  const [chiste, setChiste] = useState(``); // esta variable guarda el chiste generado
  const clickkear = useRef(); // esto es el boton de generar

  const [showAdvertencia, setShowAdvertencia] = useState(false); // esto es para mostrar o quitar el contenedor de advertencia.
  const [mensajeAdvertencia, setMensajeAdvertencia] = useState(""); // esto es el mensaje de advertencia para el usuario


  // errores de api.
  const [showError, setShowError] = useState(false); // esto es para mostrar el mensaje de error.
  const [mensajesError, setMensajesError] = useState(""); // esto es para dar el mensaje de error que queremos.


  const idiomas = [
    ["español","es"],
    ["english","en"],
    ["ruso","ru"],
    ["frances","fr"],
    ["italiano","it"],
    ["aleman","de"]
  ]
  const tipo = [
    ["chistes normales","Pun","chistes normales"],
    ["chiste ,negro(recomendado :v)","Dark","chistes , negros"],
    ["juegos de palabras(aburrido daa)","Pun","juego de palabras"],
    ["chistes variados(recomendados)","Miscellaneous","chistes variados"],
    ["chistes para programadores (solo para programadores)","Programming","chistes de programacion"]
  ]


  // este funcion se encarga de mostrar el contenedor para seleccionar los lenguages para los chistes

  const selectLanguage=()=>{
    setTitleConfig("Seleccionar idioma")
    setShowLangage(!showLangage)
    setShowType(false)
  }

  // esta funcion se encarga de mostrar el contenedor para mostrar el tipo de chistes para seleccionar.

  const selectChistes=()=>{
    setTitleConfig("Tipo de chiste")
    setShowType(!showType)
    setShowLangage(false)
  }

  // esta funcion se encarga de seleccionar el idioma.

  const seleccionarIdioma=(index)=>{
    let idiomaReal = index[0];
    clickkear.current.click();
    setValor1(index[0])
    setLanguage(index[1])
    setShowLangage(false)
    setShowType(false)
    setMensajeAdvertencia(`Estas seguro que quieres cambiar el idioma a ${idiomaReal}`)
    setShowAdvertencia(true)
  }

  // esta fucnion se encarga de seleccionar el tipo de chiste.

  const seleccionarTipoChiste=(index)=>{
    let tipoReal = index[2];
    clickkear.current.click();
    setValor2(index[2])
    setType(index[1])
    setShowLangage(false)
    setShowType(false)
    setShowAdvertencia(true)
    if (tipoReal == "chistes , negros") {
      setMensajeAdvertencia(`¿Estas seguro que quieres cambiar el tipo de chiste a ${tipoReal}? Estos pueden ser ofensivos para algunas personas , pueden ser racistas o tocar temas delicados.`)
    } else if (tipoReal == "chistes variados") {
      setMensajeAdvertencia(`¿Estas seguro que quieres cambiar el tipo de chiste a ${tipoReal}? Estos pueden ser ofensivos porque pueden contener chistes machistas o ofensivos para algunas personas.`)
    } else{
      setMensajeAdvertencia(`¿Estas seguro que quieres cambiar el tipo de chiste a ${tipoReal}?`)
    }
  }

  // esta funcion es para generar los chistes

  const generar=()=>{
    let chistes = ``;
    fetch(`https://v2.jokeapi.dev/joke/${type}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.type == "single") {chistes = `${data.joke}`}
      else{chistes = `${data.setup} ${data.delivery}`}

      if (data) {setChiste(`generando ${valor2}...`)}
      
      
      
      // traducimos al español

      const apiKey = '3327828122msh974cb28ae57f10dp18fc19jsnf6d0ada4f264';
      const sourceLanguage = 'en'; // Idioma de origen predeterminado (inglés)
      const userSelectedLanguage = language; // Aquí debes tener la selección del usuario
      const textToTranslate = chistes;
      const url = 'https://text-translator2.p.rapidapi.com/translate';
      
      const encodedParams = new URLSearchParams();
      encodedParams.set('source_language', sourceLanguage);
      
      // Verifica si el usuario seleccionó "english" como idioma de destino
      if (userSelectedLanguage === 'en') {
        // Si el usuario eligió "english", no realices una traducción y mantén el texto original
        encodedParams.set('target_language', sourceLanguage);
        encodedParams.set('text', textToTranslate);
      } else {
        // Si el usuario eligió otro idioma, establece el idioma de destino y traduce el texto
        encodedParams.set('target_language', userSelectedLanguage);
        encodedParams.set('text', textToTranslate);
      }
      
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
        },
        body: encodedParams,
      })
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          const translatedText = data.data.translatedText;
          setChiste(translatedText);
        } else {
          setChiste(textToTranslate);
        }
      })
      .catch(error => {
        setShowError(true);
        setMensajesError("No se pudo hacer la traduccion esto porque estoy consumiendo una api de traduccion y las peticiones son limitadas te recomiendo usar la traduccion de google.")
      });
  
    })
    .catch((error) => {
      setShowError(true);
      setMensajesError("No se pudo obtener el chiste esto puede ser por fallas en la conexion a internet.")
    });
  }

  useEffect(()=>{
    clickkear.current.click();
  },[])

  const aseptar=()=>{
    clickkear.current.click();
    setShowAdvertencia(false);
  }
  const rechazar=()=>{
    setShowAdvertencia(false);
    setValor1("español");
    setValor2("chistes normales");
    setType("Pun")
    setLanguage("es")
  }

  const quitarError =()=>{
    setShowError(false)
  }

  
  return (
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 9

Hacer un generador de chistes.`}/>
      <CodigoFuenteSinInt 
        codigo={<Html codigo={`
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="chistes.css">
  </head>
  <body>

    <div>
      <p id="chiste"></p>
      <button id="btn-generar">Generar</button>
    </div>

    <div id="advertenciaContent">
      <p>Advertencia en este proyecto solo implementare chistes negros , no aptos para la generacion de cristal.</p>
      <button id="btnAdvertencia">ok no soy cristalito y continuar</button>
    </div>

    <script src="chistes.js"></script>
  </body>
</html>
        `}/>}
        codigo2={<Css 
          codigo={`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #413e3e;
}

div{
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #242323;
  color: #fff;
}

p{
  white-space: pre-wrap;
}

button{
  margin-top: 15px;
  border: none;
  outline: none;
  padding: 10px;
  color: #fff;
  background-color: #403535;
  cursor: pointer;
}


#advertenciaContent{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000e2;
}
#advertenciaContent p{
  width: 200px;
}
.hideAdvertencia{
  opacity: 0;
  visibility: hidden;
  transition-duration: .5s;
}`}
        />}    
        codigo3={<JavaScropt 
          codigo={`const advertenciaContent = document.getElementById("advertenciaContent"); // este es el contenedor de advertencia
const btnAdvertencia = document.getElementById("btnAdvertencia");
btnAdvertencia.addEventListener("click",()=>{
  advertenciaContent.classList.add("hideAdvertencia")
})



const btnGenerar = document.getElementById("btn-generar"); // este boton generara los chistes.
const chiste = document.getElementById("chiste"); // esto es el parrafo que contiene el chiste

 let chistes = \`\`;


btnGenerar.addEventListener("click",()=>{
  fetch(\`https://v2.jokeapi.dev/joke/Dark\`)
  .then((response) => response.json())
  .then((data) => {
    if (data.type == "single") {chistes = \`${"${data.joke}"}\`}
    else{chistes = \`${"${data.setup}"}
     ${"${data.delivery}"}\`}
    
    if (data) {chiste.textContent = "generando chiste ,negro..."}

    // traducimos al español

    const apiKey = \'tu api key consigue tu propia apikey :v\';
    const sourceLanguage = \'en\';
    const targetLanguage = \'es\';
    const textToTranslate = chistes;
    const url = \'https://text-translator2.p.rapidapi.com/translate\';

    const encodedParams = new URLSearchParams();
    encodedParams.set(\'source_language\', sourceLanguage);
    encodedParams.set(\'target_language\', targetLanguage);
    encodedParams.set(\'text\', textToTranslate);

    fetch(url, {
      method: \'POST\',
      headers: {
        \'Content-Type\': \'application/x-www-form-urlencoded\',
        \'X-RapidAPI-Key\': apiKey,
        \'X-RapidAPI-Host\': \'text-translator2.p.rapidapi.com\',
      },
      body: encodedParams
    })
    .then(response => response.json())
    .then(data => {
      chiste.textContent = data.data.translatedText
    })
    .catch(error => {
      console.error(error);
    });

  })
  .catch((error) => {
    console.error("Hubo un error al obtener los chistes:", error);
  });
})

btnGenerar.click()`}
        />}
      />
      <Volver link={"../"}/>
      <div className="Page">
        
        <div className="contenedorCap9JsV2">

          {/* contenedor de las configuraciones de los chistes */}

          <div className={`contenedorCap9JsV2Config`}>
            <Confing 
              icono={faGlobe}
              texto={"Seleccionar idioma"}
              color={"#1691e2"}
              funcion={selectLanguage}
            />
            <Confing 
              icono={faSmile}
              texto={"tipo de chiste"}
              color={"#d2ff09 "}
              funcion={selectChistes}
            />
          </div>

          {/* este boton se encargara de mostras la configuracion */}


          {/* estos son los chistes que pasara la api */}

          <div className="contenedorCap9JsV2Chiste">
            <p>{chiste}</p>
            <button ref={clickkear} onClick={generar}>generar mas</button>
          </div>

          {/* esto es el contenedor de las configuraciones */}

          {/* seleccionar idiomas */}

          <div className={`contenedorCap9JsV2Idioma
            ${showLangage ? "":"contenedorCap9JsV2IdiomaHide"}
          `}>
            <Configuracion 
              titleConfig={titleConfig}
              botones={idiomas}
              funcion={seleccionarIdioma}
              valor={valor1}
            />
          </div>

          {/* sleccionar el tipo de chiste */}

          <div className={`contenedorCap9JsV2Tipo
            ${showType ? "":"contenedorCap9JsV2TipoHide"}
          `}>
            <Configuracion 
              titleConfig={titleConfig}
              botones={tipo}
              funcion={seleccionarTipoChiste}
              valor={valor2}
            />
          </div>
          

          {/* esto es el contenedor del mensaje de advertemcia */}

          <Advertencia 
            showAdvertencia={showAdvertencia}
            mensajeAdvertencia={mensajeAdvertencia}
            aseptar={aseptar}
            rechazar={rechazar}
          />

          <div className={`contenedorCap9JsV2Error ${showError ?
            "":
            "contenedorCap9JsV2ErrorHide"
          }`}>
            <div>
              <p>{mensajesError}</p>
              <button onClick={quitarError}>Entendido</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Cap9ProyJsV2;