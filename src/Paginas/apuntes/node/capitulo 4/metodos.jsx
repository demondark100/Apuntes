import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Txt from "../../../../componentes/lenguajes/Txt";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from  "../../../../componentes/resumenes/resumenes";

function MetodosNode(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Podemos usar distintos metodos para hacer operaciones en base de datos.`
      },{
        "mensaje": `GET leer archivo.`,
        "lenguage": `JavaScropt`,
        "codigo": `rutaMatematica.get("/",(req,res)=>{
  return res.send(matematica);
})

// GET http://localhost:8080/api/cursos/matematica`
      },
      {
        "mensaje": `POST agregar contenido.`,
        "lenguage": "JavaScropt",
        "codigo": `rutaMatematica.post("/",(req,res)=>{
  const curso = req.body;
  matematica.push(curso);
  return res.send(JSON.stringify(matematica));
})`
      },
      {
        "mensaje": "PUT editar todo el archivo",
        "lenguage": "JavaScropt",
        "codigo": `rutaMatematica.put("/:id",(req,res)=>{
  const curso = req.body;
  const id = req.params.id;
  const indice = matematica.findIndex(curso=>curso.id == id);
  if(indice >= 0){
    matematica[indice] = curso;
  }
  return res.send(JSON.stringify(matematica));
})`
      },
      {
        "mensaje": `Con esto editaremos solo una parte de la base de datos es como parchar algo.`,
        "lenguage": "JavaScropt",
        "codigo": `rutaMatematica.patch("/:id",(req,res)=>{
  const id = req.params.id;
  const curso = req.body;
  const indice = matematica.findIndex(curso=>curso.id == id);
  if(indice >= 0){
    const modicifar = matematica[index];
    Onject.assign(modificar,curso);
  }
  return res.send(JSON.stringify(matematica))
})`
      },
      {
        "mensaje": "DELETE es para eliminar un elemento.",
        "lenguage": "JavaScropt",
        "codigo": `rutaMatematica.delete("/:id",(req,res)=>{
  const id = req.params.id;
  const indice = matematica.findIndex(curso=>curso.id == id);
  if(indice >= 0){
    matematica.splice(indice,1);
  }
  return res.send(JSON.stringify(matematica));
})`
      }]}/>
      <main>
        <h1>Otros metodos</h1>
        <Conseptos texto={`Haya ahora solo hemos hecho solicitudes con el metodo "GET" que se encarga de leer pero ahora veremos como funcionan los otros metodos como:`}/>
        <ol>
          <li>POST: Crear.</li>
          <li>PUT: Editar.</li>
          <li>DELETE: Eliminar.</li>
          <li>PATCH: similar a POST.</li>
        </ol>
        <h2>Base de datos</h2>
        <JavaScropt codigo={`const cursos = {
  programacion: [
    {
      id: 1,
      titulo: "aprende python",
      lenguaje: "python",
      vistas: 15789,
      nivel: "basico"
    },
    {
      id: 2,
      titulo: "python intermedio",
      lenguaje: "python",
      vistas: 14789,
      nivel: "medio"
    },
    {
      id: 3,
      titulo: "aprende jabaScript",
      lenguaje: "javaScript",
      vistas: 16789,
      nivel: "basico"
    }
  ],
  matematica: [
    {
      id: 1,
      titulo: "aprende calculo",
      tema: "calculo",
      vistas: 13487,
      nivel: "basico"
    },
    {
      id: 2,
      titulo: "aprende algebra",
      tema: "algebra",
      vistas: 12487,
      nivel: "intermedio"
    }
  ]
}

module.exports.cursos = cursos`}/>
        <h2>POST</h2>
        <Conseptos texto={`Ahora vamos a agregar/crear mas contenido para nuestra base de datos en este caso sera para matematica.`}/>
        <JavaScropt codigo={`const express = require("express");
const rutaMatematica = express.Router();
const {matematica} = require("../datos/cursos.js").cursos;
rutaMatematica.use(express.json()) // Procesar los datos json que envia el usuario.

rutaMatematica.get("/",(req,res)=>{
  return res.send("Solicitud get");
})
rutaMatematica.post("/",(req,res)=>{
  const nuevoCurso = req.body;
  matematica.push(nuevoCurso);
  return res.send(matematica);
})

module.exports = rutaMatematica;`}/>
        <Txt codigo={`POST http://localhost:8080/api/cursos/matematica HTTP/1.1
Content-Type: application/json

{
  id: 3,
  titulo: "aprende algebra",
  tema: "algebra",
  vistas: 12487,
  nivel: "abanzado"
}`}/>
        <h2>PUT</h2>
        <Conseptos texto={`Con PUT vamos a editar una base de datos en este caso al archivo json.`}/>
        <JavaScropt codigo={`const express = require("express");
const {matematica} = require("../cursos").cursos;
const rutaMatematica = express.Router();
rutaMatematica.use(express.json());

rutaMatematica.get("/",(req,res)=>{
  return res.send("Api matematica");
})

rutaMatematica.put("/:id",(req,res)=>{ // con id veremos que elemento editar.
  const curso = req.body;
  const id = req.params.id;
  const indice = matematica.findIndex(curso=>curso.id == id); // buscar si el index existe.
  if (indice >= 0) {
    matematica[indice] = curso; // agregar el nuevo elemento en la posision asignada.
  }
  return res.send(JSON.stringify(matematica));
})

module.exports = rutaMatematica;`}/>
      <Txt codigo={`###
PUT http://localhost:8080/api/cursos/matematica/2 HTTP/1.1
Content-Type: application/json

{
  id: 2,
  titulo: "aprende inecuaciones",
  lenguaje: "inecuaciones",
  vistas: 14789,
  nivel: "abanzado"
}`}/>
        <h2>PATCH</h2>
        <Conseptos texto={`Esto es similar a PUT solo que en vez de actualizar todo la informacion solo actualizara las propiedades que el cliente indique.`}/>
        <JavaScropt codigo={`const express = require("express");
const {matematica} = require("../cursos").cursos;
const rutaMatematica = express.Router();
rutaMatematica.use(express.json());

rutaMatematica.get("/",(req,res)=>{
  return res.send("Ruta principal");
})
rutaMatematica.patch("/:id",(req,res)=>{
  const curso = res.body;
  const id = req.params.id;
  const indice = matematica.findIndex(curso=>curso.id == id);
  if (indice >= 0) {
    const modificar = matematica[indice];
    Object.assign(modificar,curso); // cambiar solo una propiedad del arreglo de objetos.
  }
  return res.send(JSON.stringify(matematica));
})
module.exports = rutaMatematica;`}/>
        <Txt codigo={`###
PATCH  http://localhost:8080/api/cursos/matematica/2  HTTP/1.1 
Content-Type: application/json

{
  "titulo": "matematica abanzada",
  "vistas": 24789
}`}/>
        <h2>DELETE</h2>
        <Conseptos texto={`Con este metodo vamos a eliminar un elemento de nuestra base de datos.`}/>
        <JavaScropt codigo={`const express = require("express");
const {matematica} = require("../cursos").cursos;
const rutaMatematica = express.Router();

rutaMatematica.get("/",(req,res)=>{
  return res.send("Api con delete");
})
rutaMatematica.delete("/:id",(req,res)=>{
  const id = req.params.id;
  const indice = matematica.findIndex(curso=>curso.id == id);
  if (indice >= 0) {
    matematica.splice(indice,1);
  }
  return res.send(matematica);
})

module.exports = rutaMatematica;`}/>
        <Txt codigo={`###
DELETE  http://localhost:8080/api/cursos/matematica/2`}/>
      </main>
      <Footer />
    </>
  )
}

export default MetodosNode;