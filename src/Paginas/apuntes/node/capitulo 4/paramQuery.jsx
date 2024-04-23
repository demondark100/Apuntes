import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Txt from "../../../../componentes/lenguajes/Txt";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function ParametrosQueryNode() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Con estos parametros de busqueda el cliente tiene mas formas de buscar algun contenido en especifico o hacer algo con la api.`,
        "lenguage": `JavaScropt`,
        "codigo": `app.get("/api/cursos/programacion",(req,res)=>{
  return res.send(req.query.dato)
})`
      },
      {
        "lenguage": "Txt",
        "codigo": `###
http://localhost:8080/api/cursos/programacion?dato=unValorRandom`
      }]}/>
      <main>
        <h1>parametros query</h1>
        <Conseptos texto={`Los parametros query siempre van al final de la url , estos siempre llevaran un "?" recordemos como era.`}/>
        <Sintaxis codigo={`GET http://localhost:3000/contenido/:parametros?clave=valor&clave=valor`}/>
        <Conseptos texto={`Empezaremos haciendo nuestra base de datos , sera la misma que hemos estado usando.`}/>
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

module.exports.cursos = cursos;`}/>
        <Conseptos texto={`Ahora para trabajar con los parametros query debemos recordar que son un objeto de clave y valor.`}/>
        <Sintaxis codigo={`{"clave":"valor"}`}/>
        <Conseptos texto={`Para acceder a esa "clave: valor" debemos usar el objeto query y el valor que queremos acceder.`}/>
        <Sintaxis codigo={`"req.query.valor del parametro query";`}/>
        <Conseptos texto={`Imaginemos que esta es la peticion.`}/>
        <Conseptos texto={`/cursos/programacion/?clave=valor`}/>
        <JavaScropt codigo={`Para acceder al objeto debemos hacer esto.`}/>
        <JavaScropt codigo={`console.log(req.query.clave);
// resultado
// "valor"`}/>
        <Conseptos texto={`Es hora de hacer un ejercico en este caso ordenaremos de los cursos menos vistos a los mas vistos en cada lenguage de programacion o tema de matematica.`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const {cursos} = require("./cursos.js");

app.get("/api/cursos/programacion",(req,res)=>{
  // en este caso el cliente pasa un parametro query llamado ordenar con el valor vistas
  // ?ordenar=vistas
  // {ordenar: "vistas"}

  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(cursos.programacion.sort((a,b)=>a.vistas - b.vistas)))
  }
  res.send(JSON.stringify(cursos.programacion))
})

app.get("/api/cursos/matematica",(req,res)=>{
  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(cursos.matematica.sort((a,b)=>a.vistas - b.vistas)))
  }
  res.send(JSON.stringify(cursos.matematica));
})


const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>
        <Txt codigo={`###
GET http://localhost:8080/api/cursos/programacion?ordenar=vistas
# resultado
[
  {
    "id": 2,
    "titulo": "python intermedio",
    "lenguaje": "python",
    "vistas": 14789,
    "nivel": "medio"
  },
  {
    "id": 1,
    "titulo": "aprende python",
    "lenguaje": "python",
    "vistas": 15789,
    "nivel": "basico"
  },
  {
    "id": 3,
    "titulo": "aprende jabaScript",
    "lenguaje": "javaScript",
    "vistas": 16789,
    "nivel": "basico"
  }
]


###
GET http://localhost:8080/api/cursos/matematica?ordenar=vistas
[
  {
    "id": 2,
    "titulo": "python algebra",
    "tema": "algebra",
    "vistas": 12487,
    "nivel": "intermedio"
  },
  {
    "id": 1,
    "titulo": "aprende calculo",
    "tema": "calculo",
    "vistas": 13487,
    "nivel": "basico"
  }
]`}/>
        <Conseptos texto={`Si te fijas ordena los animes de los menos vistos a los mas vistos.`}/>
      </main>
      <Footer />
    </>
  );
}

export default ParametrosQueryNode;