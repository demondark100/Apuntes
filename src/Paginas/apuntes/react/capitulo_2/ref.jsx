import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

import React from "react";
import { useRef } from "react";


function MenuHook() {

  const buttonRef = useRef();
  const menuRef = useRef();

  const controlar =(e)=>{

    if (buttonRef.current.textContent === "menu") {
      buttonRef.current.textContent = "ocultar";
      menuRef.current.style.display = "block";
    } else {
      buttonRef.current.textContent = "menu";
      menuRef.current.style.display = "none"
    }
  }


  return (
    <div>
      <button onClick={controlar} ref={buttonRef}>menu</button>
      <nav ref={menuRef} style={{display: "none"}}>
        <a href="#" style={{color: "#000"}}>enalace 1</a>
        <a href="#" style={{color: "#000"}}>enalace 2</a>
        <a href="#" style={{color: "#000"}}>enalace 3</a>
        <a href="#" style={{color: "#000"}}>enalace 4</a>
      </nav>
    </div>
  )
}


function RefReact() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Con las referencias podemos seleccionar un elemento del dom es como usar querySelector de js nativo.",
        "lenguage": "ReactCode",
        "codigo": `import { React, useRef } from "react";
function MenuReact() {
  const fondo = useRef();
  const cambio=(e)=>{
    let color = prompt("¿Que color de fondo tendra el texto? usa hexadesimal.");
    fondo.current.style.backgroundColor = color;
  }
  return (
    <div>
      <p ref={fondo}>fondo</p>
      <button onClick={cambio}>cambiar color</button>
    </div>
  )
}
export default MenuReact;`
      }]}/>
      <main>
        <h1>Referencias</h1>
        <Conseptos texto={`Las referencias nos sirve para manipular los objetos del DOM con esto es que nos recomienda react trabajar , las referencias no van a volver a renderizar los elementos como si lo haria un estado con lo cual es muy util por ejemplo para hacer un menu.
        
Para usar las referencias necesitamos importar useRef.`}/>
        <ReactCode codigo={`import {useRef} from "react";`}/>
        <Conseptos texto={`Despues se debe crear la variable que sera la referencia o el selector.`}/>
        <ReactCode codigo={`const variable = useRef(null);`}/>
        <Conseptos texto={`Luego para usarlo en un elemento se usa la palabra clave "ref"`}/>
        <ReactCode codigo={`<p ref={variable}></p>`}/>
        <ReactCode codigo={`import {useRef} from "react";
function Ejemplo (){
  const inputRef = useRef()
  rturn <input type="text" ref={inputRef}>
}`}/>
        <h2>hagamos un menu</h2>
        <h3>javaScript tradicional (no recomendado)</h3>
        <ReactCode codigo={`import React from "react";
import { useRef } from "react";


function MenuJavaScript() {
  const controlar=(e)=>{

    const menu = document.getElementById("menu");

      if (e.target.textContent === "menu") {
        e.target.textContent = "ocultar";
        menu.style.display = "block";
      } else {
        e.target.textContent = "menu";
        menu.style.display = "none"
      }
  }


  return (

    <div>
      <button onClick={controlar}>menu</button>
      <nav id="menu" style={{display: "none"}}>
        <a href="#">enalace 1</a>
        <a href="#">enalace 2</a>
        <a href="#">enalace 3</a>
        <a href="#">enalace 4</a>
      </nav>
    </div>
  )
}

export default MenuJavaScript;`}/>
        <ReactCode codigo={`import React from "react";
import MenuJavaScript from "./ruta";
export default function App(){
  return <MenuJavaScript />
}`}/>
        <div className="website">
          <MenuHook />
        </div>

        <h2>ref react (recomendado)</h2>
        <Conseptos texto={`Antes de continuar debemos saber que con ref ya no se usa target se usa "current" para acceder a las propiedades.
amtes: evento.target.propiedad;
ahora: evento.current.propiedad;`}/>
        <ReactCode codigo={`import { React, useRef } from "react";


function MenuReact() {

  const buttonRef = useRef();
  const menuRef = useRef();

  const controlar =(e)=>{

    if (buttonRef.current.textContent === "menu") {
      buttonRef.current.textContent = "ocultar";
      menuRef.current.style.display = "block";
    } else {
      buttonRef.current.textContent = "menu";
      menuRef.current.style.display = "none"
    }
  }


  return (
    <div>
      <button onClick={controlar} ref={buttonRef}>menu</button>
      <nav ref={menuRef} style={{display: "none"}}>
        <a href="#">enalace 1</a>
        <a href="#">enalace 2</a>
        <a href="#">enalace 3</a>
        <a href="#">enalace 4</a>
      </nav>
    </div>
  )
}

export default MenuReact;`}/>
        <ReactCode codigo={`import React from "react";
import MenuReact from "./ruta";
export default function App(){
  return <MenuReact />
}`}/>
        <div className="website">
          <MenuHook />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default RefReact;