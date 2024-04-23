import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Txt from "../../../../componentes/lenguajes/txt";
import Resumenes from "../../../../componentes/resumenes/resumenes";


function RoutersNode() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Esto evita que se repita una ruta varias veces.`,
        "lenguage": "JavaScropt",
        "codigo": `const express = require("express");
const app = express();
const {cursos} = require("./cursos.js");
const ruta = express.Router();
app.use("/api/cursos",ruta)

ruta.get("/programacion",(req,res)=>{
  return res.send(JSON.stringify(cursos.programacion));
})
ruta.get("/matematica",(req,res)=>{
  return res.send(JSON.stringify(cursos.matematica))
})
const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`
      }]}/>
      <main>
        <h1>Routers</h1>
        <Conseptos texto={`Al momento de trabjar con las rutas hay veces que se repite mucho una ruta principal en la funcion lo cual puede hacer que el codigo sea poco legible por eso llego "Router" para solucionar ese problema.`}/>
        <JavaScropt codigo={`app.get("/api/cursos/programacion",()=>funcion);
app.get("/api/cursos/matematica",()=>funcion);
app.get("/api/cursos/ciencia",()=>funcion);
app.get("/api/cursos/historia",()=>funcion);`}/>
        <Conseptos texto={`Como nos damos cuenta la ruta "/api/cursos/" se repite demasiado.`}/>
        <Conseptos texto={`Ahora imagina que programaremos algo para una ruta mucho mas larga seria muy larga las rutas por eso podemos acortar eso con "Router".`}/>
        <JavaScropt codigo={`const rutaPrincipal = express.Router(); // aqui llamamos a la funcion Router con express.
app.use("/api/cursos",rutaPrincipal); 
// El primer parametro es para poner la ruta que se repite.
// El segundo parametro es para poner la variable que llama a la funcion "Router".

// en vez de usar "app" usaremos la variable "rutaPrincipal" porque esa variable guarda la ruta que se repite.
rutaPrincipal.get("/",()=>{ // al usar "rutaPrincipal" y poner "/" mo estamos haciendo una ruta desde 0 sino que estamos partiendo desde "/api/cursos"
  // funcion
})
rutaPrincipal.get("/programacion",(req,res)=>{
  // funcion
})
rutaPrincipal.get("/matematica",(req,res)=>{
  // funcion
})`}/>
        <Conseptos texto={`Ahora haremos una api para usando "Router".`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const {cusos} = require("./cursos.js");
const ruta = express.Router();
app.use("/api/cursos",ruta)

ruta.get("/",(req,res)=>{
  res.send(JSON.stringify(cursos));
})

ruta.get("/programacion",(req,res)=>{
  return res.send(JSON.stringify(cursos.programacion));
})
ruta.get("/matematica",(req,res)=>{
  return res.send(JSON.stringify(cursos.matematica));
})

const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>
        <Txt codigo={`###
GET http://localhost:8080/api/cursos/programacion
# resultado
[
  {
    "id": 1,
    "titulo": "aprende python",
    "lenguaje": "python",
    "vistas": 15789,
    "nivel": "basico"
  },
  {
    "id": 2,
    "titulo": "python intermedio",
    "lenguaje": "python",
    "vistas": 14789,
    "nivel": "medio"
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
GET http://localhost:8080/api/cursos/matematica
# resultado
[
  {
    "id": 1,
    "titulo": "aprende calculo",
    "tema": "calculo",
    "vistas": 13487,
    "nivel": "basico"
  },
  {
    "id": 2,
    "titulo": "python algebra",
    "tema": "algebra",
    "vistas": 12487,
    "nivel": "intermedio"
  }
]
`}/>
      </main>
      <Footer />
    </>
  );
}

export default RoutersNode;