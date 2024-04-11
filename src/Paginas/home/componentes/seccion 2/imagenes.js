import html from "../../imagenes/html.png";
import css from "../../imagenes/css.png";
import javaScript from "../../imagenes/js.png";
import react from "../../imagenes/react.png";
import python from "../../imagenes/python.png";
import git from "../../imagenes/git.png";


const imagenes = [
    {
        "imagen": html,
        "titulo": "HTML",
        "concepto": "Con HTML hago estructuras de sitios web.",
        "lenguage": "html",
        "codigo": `<body>
  <div>
    <p>hola mundo</p>
  </div>
<body>`
    },
    {
        "imagen": css,
        "titulo": "CSS",
        "concepto": "Con CSS puedo estilizar cualquier elemento HTML.",
        "lenguage": "css",
        "codigo": `.contenedor::before{
  content: "hola mundo";
  background-color: #000;
  color: rgb(0,0,255);
}` 
    },
    {
        "imagen": javaScript,
        "titulo": "JavaScript",
        "concepto": "Con JavaScript puedo programar dinamismo en la web en conjunto con HTML y CSS.",
        "lenguage": "javascript",
        "codigo": `"use strict";
function saludar(){
  return "hola mundo";
}
console.log(saludar());`
    },
    {
        "imagen": react,
        "titulo": "React",
        "concepto": "Con React puedo reducir mucho el codigo nativo de JavaScript y hacer aplicaciones con componentes.",
        "lenguage": "react",
        "codigo": `import {useState} from "react";
export default function App(){
  const [hi,setHi] = useState("");
  const saludo=()=>setHi("hola mundo");
  return(
    <div>
      <h1>{saludo}</h1>
      <button onClick={saludo}>Hi</button>
    </div>
  )
}`
    },
    {
        "imagen": python,
        "titulo": "Python",
        "concepto": "Con Python practico mi logica de programacion.",
        "lenguage": "python",
        "codigo": `def saludo():
  return "Hola mundo";
print(saludo());`
    },
    {
        "imagen": git,
        "titulo": "Git",
        "concepto": "Con git manejo las versiones de mis proyectos en conjunto con gitHub.",
        "lenguage": "git",
        "codigo": `git commit -m "primer hola mundo"`
    }
]

export default imagenes