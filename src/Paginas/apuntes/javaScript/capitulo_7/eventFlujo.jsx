import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Css from "../../../../componentes/lenguajes/Css";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";



function EventFujoJs() {

  return (  
    <>
      <MensajeModal texto={`Para diferenciar los resultados hacer click en "click" , copia o reescribe tu mismo el codigo para ver los resultados.`}/>
      <Menu2 />
      <main>
        <h1>flujo de eventos</h1>
        <Conseptos texto={`Con esto veremos cual es el flujo de los eventos.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="content_1">
    <div class="content_2">
        <button class="boton"> click </button>
    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.content_1{
    width: 250px;
    height: 110px;
    background-color: #0f0;
}
.content_2{
    background-color: #f00;
    width: 150px;
    height: 85px;
    margin: auto;
}
.boton{
    background-color: #00f;
    color: #fff;
}`}/>
        <h2>flujo normal</h2>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const content_1 = document.querySelector(".content_1");
const content_2 = document.querySelector(".content_2");
const boton = document.querySelector(".boton");
content_1.addEventListener("click",()=>{
    alert("content_1");
});
content_2.addEventListener("click",()=>{
    alert("content_2");
});
boton.addEventListener("click",()=>{
    alert("click");
});`}/>
        <h2>controlar flujo</h2>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const content_1 = document.querySelector(".content_1");
const content_2 = document.querySelector(".content_2");
const boton = document.querySelector(".boton");
content_1.addEventListener("click",()=>{
    alert("content_1");
});
content_2.addEventListener("click",()=>{
    alert("content_2");
},true);
boton.addEventListener("click",()=>{
    alert("click");
});`}/>
        <Conseptos texto={`Con "true" manejaremos el flujo de los eventos en este caso "content_2" se ejecutara primero.`}/>
        <h2>detener flujo</h2>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const content_1 = document.querySelector(".content_1");
const content_2 = document.querySelector(".content_2");
const boton = document.querySelector(".boton");
content_1.addEventListener("click",()=>{
    alert("content_1");
});
content_2.addEventListener("click",()=>{
    alert("content_2");
});
boton.addEventListener("click",(e)=>{
    alert("click");
    e.stopPropagation();
});`}/>
        <Conseptos texto={`Con "stopPropagation()" vamos a detener la propagacion de los eventos.`}/>
      </main>
      <Footer />
    </>
  );
}

export default EventFujoJs;