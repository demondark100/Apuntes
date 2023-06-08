import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import "./webWork.css";
import { useRef } from "react";

function WebWorkerJs() {
    const ejecutarBucle = () =>{
      let i = 0;
      while(i < 5000){
          i++;
          console.log(1);
      }
    }
    const boton1 = useRef(null);
    const ejercutarWorker=()=>{
      const worker = new Worker("worker.js");
      worker.postMessage(true)
    }

  return (  
    <>
      <main>
        <h1>Web Worker</h1>
        <Conseptos texto={`Esto nos ayudara a poder hacer de una mejor forma mas de una accion aqui una forma grafica del como funciona.`}/>
        <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eN5kePr9U0aZMgCyekhJ.png?auto=format" alt="Web Worker" style={{width: "75%", margin: "auto",marginTop:"5%"}}/>
        <h2>Dedicated worker</h2>
        <Conseptos texto={`Con "worker" ejecutaremos otro archivo pero en segundo plano sin afectar a la actividad principal.

1: Crear un nuevo archivo javaScript en este caso se llamara worker.js`}/>
        <h2>archivo principal</h2>
        <JavaScropt codigo={`const worker = new Worker("worker.js");

// esto recibira como parametro el 
// nombre del archivo que trabajara en
// segundo plano.

console.log(worker);`}/>
        <h2>archivo worker.js</h2>
        <Conseptos texto={`Aqui ejecutaremos lo que queramos apreta f12 para ver resultados.`}/>
        <JavaScropt codigo={`console.log("hola mundo");`}/>
        <h2>ahora un ejemplo de su uso</h2>
        <Html codigo={`<button class="button">ejecutar bucle</button>
<input type="text">`}/>
        <h2>sin worker:</h2>
        <JavaScropt codigo={`const ejecutarBucle = () =>{
    let i = 0;
    while(i < 5000){
        i++;
        console.log(1);
    }
}
const button = document.querySelector(".button")
button.addEventListener("click",()=>{
    ejecutarBucle();
});`}/>
        <h2>resultado</h2>
        <Conseptos texto={`Si apretas el boton veras que no se puede escribir en el input por un momento ya que no podemos hacer mas de una accion.`}/>
        <div className="content_bucle_Web_Worker">
            <button onClick={ejecutarBucle} className="button_web_worker">ejecutar bucle</button>
            <input type="text" className="inputWebWorker"/>
        </div>
        <h2>con worker</h2>
            <Conseptos texto={`"worker" esta limitado ya que no tiene al objeto window como base por eso esque recibe parametros.`}/>
            <h2>javaScript principal</h2>
            <JavaScropt codigo={`const worker = new Worker("worker.js");

const button = document.querySelector(".button")
button.addEventListener("click",()=>{
    worker.postMessage(true)
})`}/>
          <h2>archivo worker</h2>
          <JavaScropt codigo={`const ejecutarBucle_1 = () =>{
    let i = 0;
    while(i < 5000){
        i++;
        console.log(1);
    }
}
addEventListener("message",()=>ejecutarBucle_1());`}/>
          <h2>resultado</h2>
          <Conseptos texto={`A diferencia del otro aqui si podremos escribir en el input ya que gracias al worker podemos hacer mas de una cosa.`}/>
          <div className="content_bucle_Web_Worker">
            <button 
              onClick={ejercutarWorker} 
              ref={boton1} 
              className="button_web_worker">ejecutar bucle</button>
            <input type="text" className="inputWebWorker"/>
        </div>
          <h2>recibir mensaje</h2>
          <Conseptos texto={`data:

Con data podemos enviar un mensaje el cual sera el parametro del "postMessage" ejemplo.`}/>
        <Html codigo={`<button class="button_2">mostrar mensaje</button>`}/>
        <h2>javaScript principal</h2>
        <JavaScropt codigo={`const worker = new Worker("worker.js");
const button_2 = document.querySelector(".button_2");
button_2.addEventListener("click",()=>{
    worker.postMessage("este es un mensaje para mostrar");

    // esto en "postMessage" ponemos como paramtro
    // el mensaje que queremos para mostrarlo con data.
})`}/>
        <h2>archivo worker</h2>
        <JavaScropt codigo={`addEventListener("message",e=>{
    console.log(e.data)
})`}/>
        <Conseptos texto={`Ejercicio para enviar y recibir mensaje.`}/>
        <Html codigo={`<button class="mensjaes">emviar y recibir mensaje.</button>`}/>
        <h2>javaScript principal</h2>
        <JavaScropt codigo={`const worker = new Worker("worker.js");
const mensjaes = document.querySelector(".mensjaes");
mensjaes.addEventListener("click",()=>{
    worker.postMessage("Jerk");
})
worker.addEventListener("message",e=>{
    console.log(e.data);
})`}/>
        <h2>archivo worker</h2>
        <JavaScropt codigo={`addEventListener("message", e =>{
    console.log(e.data);
    postMessage("Oliver Tree")
})`}/>
        <h2>terminar un worker</h2>
        <Conseptos texto={`Con "terminate" podremos finalizar un worker lo explicaremos mejor en codigo.`}/>
        <Html codigo={`<button class="terminar">terminar worker</button>`}/>
        <h2>javaScript principal</h2>
        <JavaScropt codigo={`const worker = new Worker("worker.js");
const terminar = document.querySelector(".terminar");
terminar.addEventListener("click",()=>{
    worker.postMessage("se iniciara");
})
worker.addEventListener("message",e=>{
    console.log(e.data);
    worker.terminate();
    
    
    // aqui si quitamos "terminate" podremos hacer click 
    // infinitas veces y se seguiran mostrando los 
    // mensajes de que se envian y reciben pero al poner 
    // "terminate" solo podemos ejecutar el 
    // evento una sola vez.
})`}/>
        <h2>archivo worker</h2>
        <JavaScropt codigo={`addEventListener("message", e =>{
    if (e.data.length > 4) {
        console.log(e.data);
        postMessage("se terminara")
    }
})`}/>
      </main>
      <Footer/>
    </>
  );
}

export default WebWorkerJs;