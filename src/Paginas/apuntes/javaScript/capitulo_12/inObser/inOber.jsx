import { unstable_usePrompt } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import "./inObser.css";
import { useRef,useEffect } from "react";

function InObserJs() {
  const caja3 = useRef(null);

  const verificarVisibilidad = (entradas) => {
    const entry = entradas[0];
    console.log(entry.isIntersecting);
  };
  

  useEffect(()=>{
    const observer = new IntersectionObserver(verificarVisibilidad);
    observer.observe(caja3.current);
  })

  useEffect(()=>{
    const cajas = document.querySelectorAll(".caja1")
    const verificarVisibilidad = (entradas) =>{
        for(let entry of entradas){
            if (entry.isIntersecting) {
                console.log(`se esta viendo la caja ${entry.target.textContent}`)
            }
        }
    }
    const observer = new IntersectionObserver(verificarVisibilidad);
    for(let caja of cajas){
        observer.observe(caja)
    }
  })

  const caja3_2 = useRef(null);

  useEffect(()=>{
    const callback = (entradas) =>{
        const entry = entradas[0];
        console.log(entry.isIntersecting)
    }
    let option = { 
            rootMargin: '50px',
            threshold: 1.0
    }
    const observer = new IntersectionObserver(callback,option);
    observer.observe(caja3_2.current)
  })


  return (  
    <>
      <main>
        <h1>Interseccion observer</h1>
        <Conseptos texto={`Esta API nos ayudara de mejor manera a manejar nuestro sitio web por detras pronto entenderemos a lo que me refiero.`}/>
        <Html codigo={`<div class="caja caja_1"><span>caja 1</span></div>
<div class="caja caja_2"><span>caja 2</span></div>
<div class="caja caja_3"><span>caja 3</span></div>
<div class="caja caja_4"><span>caja 4</span></div>`}/>
        <Css codigo={`.caja {
    height: 200px;
    width: 200px;
    display: flex;
    background-color: #23b6cf;
    margin: 20px auto;
    color: #f1ffb3;
    font-size: 35px;
    border: solid 4px #363636;
}
.caja span{
    margin: auto;
}
.caja_2 {
    background-color: #153692;
    border: solid #000 4px;
}
.caja_3 {
    background-color: #99c719;
    border: solid #000 4px;
}
.caja_4 {
    background-color: #d6a92d;
    border: solid #000 4px;
}`}/>
        <h2>parte 1 parametros</h2>
        <JavaScropt codigo={`const observer = new IntersectionObserver(callback,parametros);
// esto tiene dos parametros
// parametro 1 callback
// parametro 2 options`}/>
        <h2>parte 2 funcion</h2>
        <JavaScropt codigo={`// esto se debe poner antes de declarar a la variable
// observer para poder ponerlo como parametro.

const caja3 = document.querySelector(".caja_3")


const verificarVisibilidad = (entradas) =>{
  // esta funcion nos devolvera entradas.
    
  const entry = entradas[0];
  // el parametro que recibira siempre sera un arreglo.
    
  console.log(entry)
  // con esto nostraremos lo que hay en el elemento.
}
const observer = new IntersectionObserver(verificarVisibilidad,Option);`}/>
        <h2>parte 3 observe</h2>
        <JavaScropt codigo={`observer.observe(caja3)
// observe es un metodo que sirve para
// observar el elemento que le digamos.`}/>
        <h2>parte 4 isIntersecting</h2>
        <Conseptos texto={`Esto sera para verificar si la caja 3 aparece en el viewport si aparece dira true si no aparece dira false.

En la funcion en vez de solo poner entry agregaremos .isIntersecting ejemplo.`}/>
        <JavaScropt codigo={`const verificarVisibilidad = (entradas) =>{
    const entry = entradas[0];
    console.log(entry.isIntersecting)
}`}/>
        <h2>sin comentarios</h2>
        <Conseptos texto={`codigo 1 completo sin comentarios:

este codigo nos mostrara si una caja esta en el viewport o no.`}/>
        <JavaScropt codigo={`const caja3 = document.querySelector(".caja_3")
const verificarVisibilidad = (entradas) =>{
    const entry = entradas[0];
    console.log(entry.isIntersecting)
}
const observer = new IntersectionObserver(verificarVisibilidad);
observer.observe(caja3)`}/>
        <h2>resultados</h2>
        <Conseptos texto={`Para ver los resultados precionar F12.`}/>
        <div class="caja caja_1"><span>caja 1</span></div>
        <div class="caja caja_2"><span>caja 2</span></div>
        <div class="caja caja_3" ref={caja3}><span>caja 3</span></div>
        <div class="caja caja_4"><span>caja 4</span></div>

        <h2>ejercicio</h2>
        <JavaScropt codigo={`const cajas = document.querySelectorAll(".caja")
const verificarVisibilidad = (entradas) =>{
    for(let entry of entradas){
        if (entry.isIntersecting) {
            console.log(\`
                se esta viendo la caja ${"${entry.target.textContent}"}
            \`)
        }
    }
}
const observer = new IntersectionObserver(verificarVisibilidad);
for(let caja of cajas){
    observer.observe(caja)
}`}/>
        <h2>resultado</h2>
        <Conseptos texto={`Para ver los resultados precionar F12.`}/>
        <div className="website websiteObserver">
          <div class="caja1 caja_1"><span>caja 1</span></div>
          <div class="caja1 caja_2"><span>caja 2</span></div>
          <div class="caja1 caja_3"><span>caja 3</span></div>
          <div class="caja1 caja_4"><span>caja 4</span></div>
        </div>

        <h2>option</h2>
        <Conseptos texto={`Esto tambien se pone antes de declarar la variable observer.`}/>
        <JavaScropt codigo={`let options = {
    // root: 
        // esto toma un elemento como referencia por defecto es voewport.
    rootMargin: '30px',
        // esto dira cuanto margen tiene.
    threshold: 0.5
        // esto nos dira con que altura de la caja queremos trabajar.
}

const observer = new IntersectionObserver(callback,options);`}/>
        <h2>ejercicio</h2>
        <JavaScropt codigo={`const caja3 = document.querySelector(".caja_3")

const callback = (entradas) =>{
    const entry = entradas[0];
    console.log(entry.isIntersecting)
}
let option = { 
        rootMargin: '50px',
        threshold: 1.0
}
const observer = new IntersectionObserver(callback,option);
observer_2.observe(caja3)`}/>
        <h2>resultado</h2>
        <Conseptos texto={`Para ver los resultados precionar F12.`}/>
        <div className="website websiteObserver">
          <div class="caja1 caja_1"><span>caja 1</span></div>
          <div class="caja1 caja_2"><span>caja 2</span></div>
          <div class="caja1 caja_3" ref={caja3_2}><span>caja 3</span></div>
          <div class="caja1 caja_4"><span>caja 4</span></div>
        </div>
        
      </main>
      <Footer/>
    </>
  );
}

export default InObserJs;