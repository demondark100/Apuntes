import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./MatchMedia.css";
import { useRef,useEffect } from "react";

function MatchMediaJs() {
  const caja = useRef(null);
  useEffect(()=>{
    let mq = matchMedia("(max-width:750px)");
    mq.addEventListener("change",()=>{
      if (mq.matches) {
        caja.current.classList.replace("caja","responsive_caja");
      } else{
        caja.current.classList.replace("responsive_caja","caja");
      }
    })
  })
  return (  
    <>
      <Menu2/>
      <main>
        <h1>MatchMedia</h1>
        <Conseptos texto={`Esta API nos permite trabajar con responsive desing.`}/>
        <JavaScropt codigo={`let mq = matchMedia("(max-width:750px)");
    //importante para evitar errores siempre poner 
    // comillas y para que reconozca media query
    // se debe poner entre parentesis.

console.log(mq.matches);
    // con ".matches" veremos si se cumple 
    //el media query si es asi dira true
    // si no es asi dira false.`}/>
        <h2>change</h2>
        <Conseptos texto={`"change" se ejecutara segun sea true o false esto se ayudara con matches.`}/>
        <JavaScropt codigo={`mq.addEventListener("change",()=>{
    console.log("la resolucion se cambio correctamente.")
})`}/>
        <h3>ejemplo</h3>
        <Conseptos texto={`Aqui un ejemplo del como podemos usarlo.`}/>
        <Html codigo={`<div class="caja">
    <span>elemento</span>
</div>`}/>
        <Css codigo={`.caja{
    width: 300px;
    height: 300px;
    display: flex;
    background-color: #30c795;
    font-size: 40px;
    color: #fff;
}
.caja span,.responsive_caja span{
    margin: auto;
}

.responsive_caja{
    width: 100%;
    height: 300px;
    display: flex;
    background-color: #4f7c6d;
    font-size: 40px;
    color: #fff;
}
/* estos estilos se pondran en caso de que el 
elemento que creamos se convierta en la clase 
que pusimos. */`}/>
        <JavaScropt codigo={`let mq = matchMedia("(max-width:750px)");
const caja = document.querySelector(".caja");
    
mq.addEventListener("change",()=>{
    if (mq.matches) {
        caja.classList.replace("caja","responsive_caja");
    } else{
        caja.classList.replace("responsive_caja","caja");
    }
})`}/>
        <h2>resultado</h2>
        <div className="website">
          <div className="cajaMatchMedia" ref={caja}>
            <span>elemento</span>
          </div>
        </div>
        <Conseptos texto={`Esta API se usa normalmente para cuando queramos agregar clases a un elemento y asi pero mo es recomendable usarlo como estilos por eso ya tenemos css.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default MatchMediaJs;