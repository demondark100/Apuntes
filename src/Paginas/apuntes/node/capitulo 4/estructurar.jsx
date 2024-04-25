import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from  "../../../../componentes/resumenes/resumenes";

// imagenes
import carpeta1 from "./imgs/carpeta1.png";

function EstructurarExpress(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": "Podemos separar nuestros enrrutamientos de nuestra api en distintos archivos."
      },
      {
        "mensaje": "En los archivos separados donde haremos los enrrutamientos solo necesitamos lo siguiente para hacer todas las rutas de la api.",
        "lenguage": "JavaScropt",
        "codigo": `const express = require("express");
const {matematica} = require("../cursos").cursos;
const rutaMatematica = express.Router();
rutaMatematica.get("/",(req,res)=>{
  return res.send("ruta: /api/cursos/matematica");
})
module.exports = rutaMatematica;`
      },
      {
        "mensaje": `Y en el archivo principal necesitamos importar el enrrutamiento de lso otros archivos para que sean usados`,
        "lenguage": "JavaScropt",
        "codigo": `const rutaMatematica = require("./routers/matematica.js");
app.use("/api/cursos/matematica",rutaMatematica);`
      }]}/>
      <main>
        <h1>Estructurar routers.</h1>
        <Conseptos texto={`Hasta ahora solo hemos estado trabajando con las rutas en un solo archivo pero a la larga sera poco legible y dificil de mantener por eso esque vamos a estructurar todo para que el servidor sea mas facil de matener.`}/>
        <h2>base de datos</h2>
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
      titulo: "python algebra",
      tema: "algebra",
      vistas: 12487,
      nivel: "intermedio"
    }
  ]
}

module.exports.cursos = cursos`}/>
        <h2>Antes</h2>
        <JavaScropt codigo={`const {cursos} = require("./cursos.js");
const express = require("express");
const app = express();
const rutaProgramacion = express.Router();
const rutaMatematica = express.Router();
app.use("/api/cursos/programacion",rutaProgramacion);
app.use("/api/cursos/matematica",rutaMatematica);

app.get("/",(req,res)=>{
  return res.send("primer api.");
})
app.get("/api/cursos",(req,res)=>{
  return res.send(JSON.stringify(cursos));
})

// programacion
rutaProgramacion.get("/",(req,res)=>{
  if (req.query.ordenar === "vistas") {
    return JSON.stringify(cursos.programacion.sort((a,b)=>a.vistas - b.vistas))
  }
  return res.send(JSON.stringify(cursos.programacion))
})
rutaProgramacion.get("/:lenguaje",(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const resultados = cursos.programacion.filter(curso=>curso.lenguaje === lenguaje);
  if (resultados.length === 0) {
    return res.status(404).send("Lenguaje de programacion no encontrado.");
  } 
  return res.send(JSON.stringify(resultados));
})
rutaProgramacion.get("/:lenguaje/:nivel",(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultado = cursos.programacion.filter(curso=>curso.lenguaje === lenguaje && curso.nivel === nivel);
  if (resultado.length === 0) {
    return res.status(404).send(\`El curso ${"${lenguaje}"} o el nivel ${"${nivel}"} no estan disponible.\`);
  }
  return res.send(resultado);
})


// matematica
rutaMatematica.get("/",(req,res)=>{
  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(cursos.matematica.sort((a,b)=>a.vistas - b.vistas)))
  }
  return res.send(JSON.stringify(cursos.matematica))
})
rutaMatematica.get("/:tema",(req,res)=>{
  const tema = req.params.tema;
  const resultado = cursos.matematica.filter(curso=>curso.tema === tema);
  if (resultado.length === 0) {
    return res.status(404).send("No se ha encontrado el tema de matematica que buscas.")
  }
  return res.send(resultado);
})

// abrir servidor
const puerto = process.env.PORT || 8080;
app.listen(puerto,()=>{
  console.log(\`El servidor ha iniciado en el puerto ${"${puerto}"}\`);
})`}/>
        <Conseptos texto={`Como te das cuenta es demasiado codigo y a medida que se agreguen mas cosas el codigo se ira haciendo mucho mas grande y sera dificil de mantener y leer por eso vamos a estructurar en distintas carpetas.`}/>
        <h2>Estructurar</h2>
        <Conseptos texto={`Primero vamos a crear una carpeta donde se crearan las rutas para cada lenguaje de programacion.`}/>
        <ImagenLink tipo={"imagen"} imagen={carpeta1} titulo={"Carpeta de cursos"}/>
        <Conseptos texto={`Ahora que creamos nuestra carpeta haremos esto en los archivos "matematica.js" y "programacion.js".`}/>
        <h3>archivo matematica.js</h3>
        <JavaScropt codigo={`const express = require("express");
const {matematica} = require("../cursos").cursos;
const rutaMatematica = express.Router();

rutaMatematica.get("/",(req,res)=>{
  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(matematica.sort((a,b)=>a.vistas - b.vistas)))
  }
  return res.send(JSON.stringify(matematica))
})
rutaMatematica.get("/:tema",(req,res)=>{
  const tema = req.params.tema;
  const resultado = matematica.filter(curso=>curso.tema === tema);
  if (resultado.length === 0) {
    return res.status(404).send("No se ha encontrado el tema de matematica que buscas.")
  }
  return res.send(resultado);
})

module.exports = rutaMatematica`}/>
        <Conseptos texto={`El codigo es similar al primero ya que solo estamos manejando las rutas en otro archivo.`}/>
        <h3>archivo programacion.js</h3>
        <JavaScropt codigo={`const express = require("express");
const {programacion} = require("../cursos").cursos;
const rutaProgramacion = express.Router();

rutaProgramacion.get("/",(req,res)=>{
  if (req.query.ordenar === "vistas") {
    return JSON.stringify(programacion.sort((a,b)=>a.vistas - b.vistas))
  }
  return res.send(JSON.stringify(programacion))
})
rutaProgramacion.get("/:lenguaje",(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso=>curso.lenguaje === lenguaje);
  if (resultados.length === 0) {
    return res.status(404).send("Lenguaje de programacion no encontrado.");
  } 
  return res.send(JSON.stringify(resultados));
})
rutaProgramacion.get("/:lenguaje/:nivel",(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultado = programacion.filter(curso=>curso.lenguaje === lenguaje && curso.nivel === nivel);
  if (resultado.length === 0) {
    return res.status(404).send(\`El curso ${"${lenguaje}"} o el nivel ${"${nivel}"} no estan disponible.\`);
  }
  return res.send(resultado);
})

module.exports = rutaProgramacion;`}/>
        <Conseptos texto={`Pasa lo mismo con el enrrutamiento de programacion el codigo es muy similar al principio.`}/>
        <h3>Archivo app.js</h3>
        <JavaScropt codigo={`const {cursos} = require("./cursos.js");
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
  return res.send("primer api.");
})
app.get("/api/cursos",(req,res)=>{
  return res.send(JSON.stringify(cursos));
})

// rutas
const rutaMatematica = require("./routers/matematica.js");
app.use("/api/cursos/matematica",rutaMatematica);
const rutaProgramacion = require("./routers/programacion.js");
app.use("/api/cursos/programacion",rutaProgramacion);


// abrir servidor
const puerto = process.env.PORT || 8080;
app.listen(puerto,()=>{
  console.log(\`El servidor ha iniciado en el puerto ${"${puerto}"}\`);
})`}/>
      </main>
      <Footer />
    </>
  )
};

export default EstructurarExpress;