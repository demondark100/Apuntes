import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function ParametrosExNode() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Con los parametros evitaremos hacer demasiadas peticiones.`,
        "lenguage": "JavaScropt",
        "codigo": `app.get("/api/cursos/programacion/:lenguaje",(req,res)=>{
  return res.send(req.params.lenguaje)
})`
      },{
        "lenguage": "Txt",
        "codigo": `###
http://localhost:8080/api/cursos/programacion/python`
      }]}/>
      <main>
        <h1>Parametros url</h1>
        <Conseptos texto={`Ahora si queremos obtener datos de algo en especifico seria muy tedioso crear una peticion para cada cosa , usaremos la base de datos anterior como ejemplo.`}/>
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
        <Conseptos texto={`En este caso tenemos solo dos generos de anime "shonen" e "isekai" , ahora que tal si el cliente quiere los datos de "one piece" deberiamos hacer esto¿.`}/>
        <JavaScropt codigo={`app.get("/api/cursos/programacion/python",()=>funcion)`}/>
        <Conseptos texto={`¿Y si ahora el cliente quiere informacion de otro lenguaje como javaScript?`}/>
        <JavaScropt codigo={`app.get("/api/cursos/programacion/javaScript",()=>funcion)`}/>
        <Conseptos texto={`O ¿y si ahora el cliente quiere informacion de "c"?`}/>
        <JavaScropt codigo={`app.get("/api/cursos/programacion/c",()=>funcion)`}/>
        <Conseptos texto={`Como te das cuenta tenemos que hacer varias peticiones en la categoria de "programacion" y es probable que tengan la misma funcion de dar la informacion lo cual seria muy tedioso de hacer peticion a cada ruta , ademas imagina que tienes una base de dato mucho mas grande con muchos mas lenguajes de programacion seria poco practico repetir el mismo codigo para cada ruta por eso estan los parametros.`}/>
        <Conseptos texto={`Ahora para implementar parametros en la url necesitamos poner ":parametro" en el codigo donde se hara la peticion.`}/>
        <Sintaxis codigo={`app.get("/api/cursos/:parametro",()=>funcion)`}/>
        <h2>api con parametros</h2>
        <Conseptos texto={`Usaremos la base de datos del inicio para hacer esta api.`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const {cursos} = require("./cursos.js");

app.get("/",(req,res)=>{
  res.send(JSON.stringify("pagina principal."));
})

app.get("/api/cursos",(req,res)=>{
  res.send(JSON.stringify(cursos))
})
app.get("/api/cursos/programacion/:lenguaje",(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const entregar = cursos.programacion.filter(curso=>curso.lenguaje == lenguaje)
  if (entregar.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${lenguaje}"}.\`)
  }
  res.send(JSON.stringify(entregar));
})
app.get("/api/cursos/matematica/:tema",(req,res)=>{
  const tema = req.params.tema;
  const entregar = cursos.matematica.filter(curso=>curso.tema == tema)
  if (entregar.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${tema}"}.\`)
  }
  res.send(JSON.stringify(entregar));
})


const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>
        <h2>Explicacion</h2>
        <Sintaxis codigo={`const express = require("express");
const app = express();
// base de datos,
const {cursos} = require("./cursos.js");

app.get("/api/cursos",(req,res)=>{
  // devolver toda la base de datos.
  res.send(JSON.stringify({cursos}));
})

// ":lenguaje" sera el parametro en este caso el lenguaje de programacion.
app.get("/api/cursos/programacion/:lenguaje",(req,res)=>{
  // req.params es un arreglo que contiene los objetos del parametro indicado
  // en este caso lenguaje porque en la ruta especificamos que el parametro sera ":lenguaje"
  const lenguaje = req.params.lenguaje;
  // aqui filtramos si el parametro de la url es igual al titulo del lenguaje
  // que queremos tener informacion , esto retornara un arreglo.
  const entregar = cursos.programacion.filter(curso=>curso.lenguaje == lenguaje)
  // aqui verificamos si la longitud de "entregar" es 0 significa que no hay resultados.
  if (entregar.length === 0) {
    // retornamos el estado de error e indicamos un mensaje al cliente.
    return res.status(404).send(\`No se ha encontrado ${"${lenguaje}"}.\`)
  }
  // retornamos la informacion del lenguaje que busca el cliente.
  res.send(JSON.stringify(entregar));
})

// codigo sin  comentarios.
app.get("/api/cursos/matematica/:tema",(req,res)=>{
  const tema = req.params.tema;
  const entregar = cusos.matematica.filter(curso=>curso.tema == tema);
  if (entregar.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${anime}"}.\`)
  }
  res.send(JSON.stringify(entregar));
})

const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>

        <h2>2 o mas parametros</h2>
        <Conseptos texto={`Tambien podemos poner mas parametros en la url.`}/>
        <Sintaxis codigo={`app.get("/api/cursos/:parametro1/:parametro2",()=>funcion)`}/>
        <Conseptos texto={`En este ejercicio usaremos la base de datos del principio tambien.`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const {cursos} = require("./cursos.js");

app.get("/api/cursos/programacion/:lenguaje/:nivel",(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const entregar = cursos.programacion.filter(curso=>curso.lenguaje === lenguaje && curso.nivel === nivel);
  if (entregar.length === 0) {
    return res.status(404).send(\`No se encontro ${"${lenguaje}"} o el nivel ${"${nivel}"} no esta disponible.\`);
  }
  res.send(JSON.stringify(entregar));
})

app.get("/api/cursos/matematica/:tema/:nivel",(req,res)=>{
  const tema = req.params.tema;
  const nivel = req.params.nivel;
  const entregar = cursos.matematica.filter(curso=>curso.tema === tema && curso.nivel === nivel);
  if (entregar.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${tema}"} o el nivel ${"${nivel}"} no esta disponible.\`);
  }
  res.send(JSON.stringify(entregar));
})

const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>
      </main>
      <Footer />
    </>
  );
}

export default ParametrosExNode;