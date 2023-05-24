import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./mouseEvent.css";

function MouseEventJs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>mouse events</h1>
        <h2>sintaxis</h2>
        <JavaScropt codigo={`elemento.escuchaEvento("metodo de mouse",()=>{ 
    // hacer algo:
})`}/>
        <h2>click</h2>
        <h3>html</h3>
        <Html codigo={`<button class="click"> click </button>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const click = document.querySelector(".click"); 
click.addEventListener("click",()=>{
    alert("hola mundo");
});`}/>
        <Conseptos texto={`Con "click" el evento se activara cuando el usuario haga una sola vez click.`}/>
        <h3>resultado:</h3>
        <Conseptos texto={`Has click donde dice "click" para ver resultado.`}/>
        <button
          onClick={()=>alert("hola mundo")}
          className="boton"
        >click</button>
        <h2>dblclick</h2>
        <h3>html</h3>
        <Html codigo={`<button class="dblclick"> doble click </button>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const dblclick = document.querySelector(".dblclick"); 
dblclick.addEventListener("dblclick",()=>{
    alert("hola mundo");
});`}/>
        <Conseptos texto={`Con "dblclick" el evento se acticara cuando el usuario haga doble click rapidamente.`}/>
        <h3>resultado</h3>
        <Conseptos texto={`Has doble click donde dice "doble click" para ver resultado.`}/>
        <button
          onDoubleClick={()=>alert("hola mundo")}
          className="boton"
        >doble click</button>
        <h2>mouseover</h2>
        <h3>html</h3>
        <Html codigo={`<button class="mouseover"> hover </button> `}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const mouseover = document.querySelector(".mouseover"); 
mouseover.addEventListener("mouseover",()=>{
    alert("hola mundo");
});`}/>
        <Conseptos texto={`Con "mouseover" cuando el puntero pase sobre un elemento se activara el evento.`}/>
        <h3>resultado</h3>
        <Conseptos texto={`pasa el puntero donde dice "hover" para ver resultado`}/>
        <button
          onMouseOver={()=>alert("hola mundo")} 
          className="boton">hover</button>
        <h2>mouseout</h2>
        <h3>html</h3>
        <Html codigo={`<button class="mouseout"> quitar </button>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const mouseout = document.querySelector(".mouseout"); 
mouseout.addEventListener("mouseout",()=>{
    alert("hola mundo");
});`}/>
        <Conseptos texto={`Con "mouseout" cuando el puntero salga del elemento se activara el evento.`}/>
        <h3>resultado</h3>
        <Conseptos texto={`Pasa el puntero y luego saca el puntero donde dice "quitar" para ver resultado.`}/>
        <button
          onMouseOut={()=>alert("hola mundo")} 
          className="boton">quitar</button>
        <h2>contextmenu</h2>
        <h3>html</h3>
        <Html codigo={`<button class="contextmenu"> contextmenu </button>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const contextmenu = document.querySelector(".contextmenu"); 
contextmenu.addEventListener("contextmenu",()=>{
    alert("hola mundo");
});`}/>
        <Conseptos texto={`Con "contextmenu" cuando el puntero haga click derecho se ejecutara el evento y aparecera el menu del navegador.`}/>
        <h3>resultado</h3>
        <Conseptos texto={`Has click derecho donde dice "contextmenu" para ver resultado.

Posdata no sirve para mobiles.`}/>
        <button
          className="boton"
          onContextMenu={()=>alert("hola mundo")}
        >contextmenu</button>
        <h2>mouseup</h2>
        <h3>html</h3>
        <Html codigo={`<button class="mouseup"> mouseup </button> `}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const mouseup = document.querySelector(".mouseup"); 
mouseup.addEventListener("mouseup",()=>{
    alert("hola mundo");
});`}/>
        <Conseptos texto={`Con "mouseup" el evento se ejecutara cuando el usuario suelte el click del mouse.`}/>
        <h3>resultado</h3>
        <Conseptos texto={`Has click durante 2 segundo luego suelta el mouse donde dice "mouseup" para ver resultado.`}/>
        <button
          onMouseUp={()=>alert("hola mundo")}
          className="boton"
        >mouseup</button>
        <h2>mousemove</h2>
        <h3>html</h3>
        <Html codigo={`<button class="mousemove"> mousemove </button>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const mousemove = document.querySelector(".mousemove"); 
mousemove.addEventListener("mousemove",()=>{
    alert("hola mundo");
});`}/>
        <Conseptos texto={`Con "mousemove" se ejecutara el evento cuando el puntero pase y salga sobre el elemento.`}/>
        <h3>resultado</h3>
        <Conseptos texto={`Pasa el mouse sobre el elemento y despues presiona enter para quitar el alert , despues quita el mouse del elemento para ver el resultado.`}/>
        <button
          onMouseMove={()=>alert("hola mundo")}
          className="boton"
        >mousemove</button>
      </main>
      <Footer/>
    </>
  );
}

export default MouseEventJs;