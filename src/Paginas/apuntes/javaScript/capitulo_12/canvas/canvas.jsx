import { useEffect, useRef, useState } from "react";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import "./canvas.css";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";

function CanvasJs() {

  useEffect(()=>{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#00f";
    ctx.fillStyle = "#0f0";
    ctx.lineWidth = "4";
    ctx.strokeRect(25,50,150,100);
    ctx.fillRect(15,20,140,80);



  const canvas_1 = document.getElementById("canvas_1");
  const ctx_1 = canvas_1.getContext("2d");

  ctx_1.strokeStyle = "#19a9fc";
  ctx_1.lineWidth = "4"
  ctx_1.lineTo(50,20);
  ctx_1.lineTo(50,150);
  ctx_1.stroke();
  ctx_1.closePath();

  ctx_1.beginPath();
  ctx_1.lineTo(50,20);
  ctx_1.lineTo(98,85);
  ctx_1.stroke();
  ctx_1.closePath();

  ctx_1.beginPath();
  ctx_1.lineTo(98,85);
  ctx_1.lineTo(150,20);
  ctx_1.stroke();
  ctx_1.closePath();

  ctx_1.beginPath();
  ctx_1.lineTo(150,20);
  ctx_1.lineTo(150,150);
  ctx_1.stroke();
  ctx_1.closePath();

  ctx_1.beginPath();
  ctx_1.arc(100,85,45,0,10);
  ctx_1.stroke();
  })

  const dibujo = useRef();
  const colores = useRef();
  const ancho = useRef();
  let dif;
  let context; 
  setTimeout(() => {
    dif = dibujo.current.getBoundingClientRect();
    context = dibujo.current.getContext("2d");
  }, 500);
  const [painting, setPainting] = useState();
  const [color, setColor] = useState();
  const [difX, setDifX] = useState();
  const [difY, setDifY] = useState();
  const [lineWidth, setLineWidth] = useState();
  const dibujar1=(e)=>{
    setDifX(e.clientX - dif.left)
    setDifY(e.clientY - dif.top)
    setPainting(true);
    setColor(colores.current.value)
    setLineWidth(ancho.current.value);
    context.beginPath();
  }
  const dibujoMove=(e)=>{
    if (painting) {
      dibujar(difX,difY,e.clientX - dif.left,e.clientY - dif.top);
      setDifX(e.clientX - difX.left)
      setDifY(e.clientY - difY.top)
    }
  }
  const dibujar2=(e)=>{
    context.closePath();
    setPainting(false);
  }
  const dibujar = (x1,y1,x2,y2) =>{
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
  }


  return (  
    <>
      <main>
        <h1>Objeto Canvas</h1>
        <Conseptos texto={`canvas es un elemento en html para hacer graficos o para los usos que queramos darle como juegos , etc.`}/>
        <Html codigo={`<canvas id="canvas" width="200px" height="200px">
</canvas>`}/>
        <Conseptos texto={`Es recomendable darle el estilo de "width" y "height" en el mismo documento html.`}/>
        <Css codigo={`#canvas{
    background-color: #fff;
    border: solid #000 2px;
}`}/>
        <h2>variable principal.</h2>
        <JavaScropt codigo={`const canvas = document.getElementById("canvas");`}/>
        <Conseptos texto={`Para trabajar con canvas necesitamos crear un "contexto" por lo general a la variable se le llama "ctx" pero se le puede poner como queramos.`}/>
        <h2>getContext</h2>
        <Conseptos texto={`"getContext" es para definir el tipo de grafico 2d o 3d.`}/>
        <JavaScropt codigo={`const ctx = canvas.getContext("2d");
// en este caso trabajaremos con 2d.`}/>
        <h2>strokeRect / fillRect</h2>
        <Conseptos texto={`ambos tienen los mismos parametros al mismo orden:
parametro 1 left
parametro 2 top
parametro 3 width
parametro 4 height

"strokeRect" es para hacer trazos / lineas.
"fillRect" es para rellenar el canvas.`}/>
        <h2>strokeStyle / fillStyle</h2>
        <Conseptos texto={`Siempre deben ir antes de "strokeRect" y "fillRect".

"strokeStyle" es para darle color al trazo / linea.
"fillStyle" es para darle color al relleno.`}/>
        <h2>lineWidth</h2>
        <Conseptos texto={`Esto es para darle grosor a la linea / trazo siempre debe ir antes de "strokeRect".`}/>
        <JavaScropt codigo={`ctx.strokeStyle = "#00f";
ctx.fillStyle = "#0f0";
ctx.lineWidth = "4";
ctx.strokeRect(50,50,150,100);
ctx.fillRect(15,20,140,80);`}/>
        <h2>resultado</h2>
        <Conseptos texto={`Aqui hicimos un camvas con un cuadrado y les dimos color.`}/>
        <canvas id="canvas" width="200%" height="200px" style={{display: "block",margin:"auto"}}></canvas>
        <Conseptos texto={`Crear lineas como queramos`}/>
        <h2>lineTo</h2>
        <Conseptos texto={`"lineTo" es para indicar de que punto a que punto queremos que se haga la linea.`}/>
        <h2>ejemplo de uso</h2>
        <Sintaxis codigo={`ctx.lineTo(50,20);
ctx.lineTo(50,150);
// parametro 1 de izquierda a derecha.
// parametro 2 de arriba a abajo `}/>
        <h2>stroke</h2>
        <Conseptos texto={`"stroke" es para dibujar la linea que indicamos con "stroke".`}/>
        <h2>closePath</h2>
        <Conseptos texto={`"closePath" es para terminar una linea ya que si no la terminamos y queremos crear una nueva linea se creara desde el punto anterior cosa que no queremos.`}/>
        <h2>beginPath</h2>
        <Conseptos texto={`"beginPath" creara una nueva linea desde el punto que queramos.`}/>
        <h2>arc</h2>
        <Conseptos texto={`"arc" es para hacer circulos.`}/>
        <h2>ejemplo de uso</h2>
        <JavaScropt codigo={`ctx.arc(100,85,45,0,10);

// parametro 1 de izquierda a derecha.
// parametro 2 de arriba a abajo.
// parametro 3 que tan grande sera el circulo.
// parametro 4 que parte del circulo deseas mostrar.
// parametro 5 no se creo que visibilidad :v.`}/>
        <h2>dibujar M</h2>
        <JavaScropt codigo={`ctx.strokeStyle = "#19a9fc";
ctx.lineWidth = "4"
ctx.lineTo(50,20);
ctx.lineTo(50,150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineTo(50,20);
ctx.lineTo(98,85);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineTo(98,85);
ctx.lineTo(150,20);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineTo(150,20);
ctx.lineTo(150,150);
ctx.stroke();

ctx.beginPath();
ctx.arc(100,85,45,0,10);
ctx.stroke();`}/>
        <h2>resultado</h2>
        <canvas id="canvas_1" width="200%" height="200px" style={{display:"block",margin:"auto"}}></canvas>
        <h2>apuntes extra</h2>
        <Conseptos texto={`"getBoundingClientRect" es una proiedad que nos permite saber cual es la distancia entre el top / parte de arriba y el left / izquierda a derecha del elemento esto se aplica al canvas.

"clientX" y "clientY" nos devolvera en que punto esta el mouse.

"moveTo" es para mover el path a la posicion anterior.`}/>
        <JavaScropt codigo={`const coordenadas = canvas.getBoundingClientRect();
// "getBoundingClientRect" solo se aplica al canvas.`}/>
        <Html codigo={`<div class="contenedor">
    <h3 class="dibujo_title">dibuja!</h3>
    <canvas id="dibujo" width="450px" height="550px"></canvas>
    <div class="button_content">
        <input type="color" class="colorizacion">
        <input type="range" class="ancho_line" min="1" max="20">
    </div>
</div>`}/>
        <Css codigo={`.contenedor{
    width: 85%;
    margin: auto;
    height: 400px;
}

.dibujo_title{
    text-align: center;
    color: #9eb6ff;
    font-size: 25px;
}
#dibujo{
    display: block;
    margin: auto;
    background-color: #fff;
    border: 2px solid #000;
}

.button_content{
    display: flex;
    justify-content: space-around;
    width: 65%;
    margin: auto;
    margin-top: 15px;
}

@media (min-width: 850px){
    .contenedor{
        width: 85%;
        margin: auto;
        height: 600px;
        max-width: 1200px;
    }
    .dibujo_title{
        font-size: 35px;
    }
}`}/>
        <JavaScropt codigo={`const dibujo = document.getElementById("dibujo");
const dif = dibujo.getBoundingClientRect();
const context = dibujo.getContext("2d");
let painting,color,lineWidth,difX,difY;
    
dibujo.addEventListener("mousedown",e=>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.querySelector(".colorizacion").value;
    lineWidth = document.querySelector(".ancho_line").value;
    context.beginPath();
})

dibujo.addEventListener("mousemove",e=>{
    if (painting) {
        dibujar(difX,difY,e.clientX - dif.left,e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
})

dibujo.addEventListener("mouseup",e=>{
    context.closePath();
    painting = false;
})

const dibujar = (x1,y1,x2,y2) =>{
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}`}/>
        <h2>resultado</h2>
        <p className="advertencia">
        esto no funcionara para mobile debido a problemas de compatibilidad con los eventos.
    </p>
        <div className="contenedorCanvasJs">
          <h3 className="dibujo_title">dibuja!</h3>
          <canvas 
            id="dibujo" 
            width="500%" 
            height="450%"
            onMouseDown={(e)=>dibujar1(e)}
            onMouseMove={(e)=>dibujoMove(e)}
            onMouseUp={(e)=>dibujar2(e)}
            ref={dibujo}
          ></canvas>
          <div className="button_content">
            <input type="color" className="colorizacion" ref={colores}/>
            <input type="range" className="ancho_line" min="1" max="20" ref={ancho}/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default CanvasJs;