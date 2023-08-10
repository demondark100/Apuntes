import "./cap7.css";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Volver from "../../../../../../componentes/volver/volver";
import Html from "../../../../../../componentes/lenguajes/Html";
import Css from "../../../../../../componentes/lenguajes/Css";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";

import { useEffect, useRef, useState } from "react";



function MostrarColor({
  texto,
  background,
}){
  const valorTexto = useRef()
  const boton = useRef()

  function copiarTexto(nodo){
    const range = document.createRange();
    range.selectNode(nodo);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    boton.current.textContent = "Copiado"
    setTimeout(() => {
      boton.current.textContent = "Copiar"
    }, 2000);
  }

  return(
    <div ref={background} className="contenedorColoresJsCap7V4ShowColor">
      <p ref={valorTexto}>{texto}</p>

      <button 
        ref={boton}
        onClick={()=>copiarTexto(valorTexto.current)}
        className="btn__copiarCap7JsV4" 
      >
        Copiar
      </button>

    </div>
  )
}


function Cap7ProyJsV4() {
  const [color, setColor] = useState("#000000");
  const [hexadecimal, setHexadecimal] = useState("");
  const [rgb, setRgb] = useState("");
  const background1 = useRef();
  const background2 = useRef();
  const valorTexto = document.querySelectorAll(".contenedorColoresJsCap7V4ShowColor p");


  const colorLetras=(variable,r,g,b)=>{
    variable.forEach(i => {
      if (r > 100 || g > 100 || b > 100) {
        i.style.color = "#000";
        
      }else{
        i.style.color = "#fff";
      }
    });
  }


  function convertirHexadecimalARGB(hex) {

    hex = hex.replace("#", "");
  
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    colorLetras(valorTexto,r,g,b)
  
    return `rgb(${r}, ${g}, ${b})`;
  }

  useEffect(()=>{
    setHexadecimal(color)
    setRgb(convertirHexadecimalARGB(color))
    background1.current.style.backgroundColor = color
    background2.current.style.backgroundColor = color
  })

  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 7

Hacer un selector de colores para los que trabajan en sublime text y no tienen la extencion de colores :v.    `}/>
      <CodigoFuenteSinInt 
        codigo={<Html 
          codigo={`<!DOCTYPE html>
<html>
  <head>
    <title>colores css</title>
    <link rel="stylesheet" href="colores.css">

  </head>
  <body>
    <div class="contenedor">
      <div>
        <div class="contenedorFondo">
          <h2>hexadecimal</h2>
          <b id="hexadecimal">#000000</b>
          <button id="copiar1" class="botonesCopiar">copiar</button>
        </div>
        <div class="contenedorFondo">
          <h2>rgb</h2>
          <b id="rgb">rgb(0, 0, 0)</b>
          <button id="copiar2" class="botonesCopiar">copiar</button>
        </div>
      </div>
      <input type="color" id="colorInput"></input>
    </div>




    <script src="colores.js"></script>
  </body>
</html>`}
        />}
        codigo2={<Css 
          codigo={`.contenedor{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}


#colorInput {
  width: 100px;
  height: 30px;
  color: #000;
  border: none;
  outline: none;
  background-color: #000;
  cursor: pointer;
}

.contenedorFondo{
  background: #000;
  margin-bottom: 8px;
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: #fff;
}
.contenedorFondo h2{
  margin-top: 0;
}
.contenedorFondo b{
  margin-top: -15px;
}
.contenedorFondo button{
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 4px;
  margin-top: 8px;
  border-radius: 1000px;
  color: #fff;
}

.copiadoAviso{
  background-color: #a3c039;
}`}
        />}
        codigo3={<JavaScropt 
          codigo={`const hexadecimal = document.getElementById("hexadecimal");
const rgb = document.getElementById("rgb");

const copiar1 = document.getElementById("copiar1");
const copiar2 = document.getElementById("copiar2");

const colorInput = document.getElementById("colorInput");

const contenedorFondo = document.querySelectorAll(".contenedorFondo");


const botonesCopiar = document.querySelectorAll(".botonesCopiar");

colorInput.addEventListener("input",()=>{
  const valorHexadecimal = colorInput.value;
  const valorRGB = convertirHexadecimalARGB(valorHexadecimal);
  rgb.textContent = valorRGB
  hexadecimal.textContent = colorInput.value;

  contenedorFondo.forEach(i=>{
    i.style.backgroundColor = hexadecimal.textContent;  		
  })
})
copiar1.addEventListener("click", ()=>{
  copiarTexto(hexadecimal);
  avisoCopiado(copiar1)
})

copiar2.addEventListener("click", ()=>{
  copiarTexto(rgb)
  avisoCopiado(copiar2)
});



function convertirHexadecimalARGB(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  colorLetras(contenedorFondo,r,g,b);
  colorLetras(botonesCopiar,r,g,b);

  return \`rgb(${"${r}"}, ${"${g}"}, ${"${b}"})\`;
}



function copiarTexto(nodo){
  const range = document.createRange();
  range.selectNode(nodo);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}


function colorLetras(variable,r,g,b){
  variable.forEach(i=>{
    if (r > 100 || g > 100 || b > 100) {
      i.style.color = "#000";
    }else{
      i.style.color = "#fff";
    }
  })
}

function avisoCopiado(variable){
  variable.textContent = "copiado";
  setTimeout(()=>{
    variable.textContent = "copiar";
  },3000)
}`}
        />}
      />
      <Volver link={"../"}/>
      <div className="Page">
        <div className="contenedorCap7V4General">
          <div className="contenedorCap7V4General__showColors">
            <MostrarColor 
              texto={hexadecimal.trim()}
              setColor={setColor}
              background={background1}
            />
            <MostrarColor 
              texto={rgb.trim()}
              setColor={setColor}
              background={background2}
            />
          </div>

        <input 
          type="color" 
          onChange={(e)=>setColor(e.target.value)}
          className="contenedorCap7V4General__input"
        />
        </div>

        
      </div>
    </>
  );
}

export default Cap7ProyJsV4;