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
const base = require("./base.js");

const ruta = express.Router();
app.use("/animes/api",ruta)

ruta.get("/",(req,res)=>{
  res.send("ruta principal");
})
ruta.get("/shonen",(req,res)=>{
  return res.send(JSON.stringify(base.animes.shonen))
})
ruta.get("/isekai",(req,res)=>{
  return res.send(JSON.stringify(base.animes.isekai))
})
const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`
      }]}/>
      <main>
        <h1>Routers</h1>
        <Conseptos texto={`Al momento de trabjar con las ruta hay veces que se repite mucho una ruta principal en la funcion lo cual puede hacer que el codigo sea poco legible por eso llego "Router" para solucionar ese problema.`}/>
        <JavaScropt codigo={`app.get("/animes/api/generos",()=>funcion);
app.get("/animes/api/generos/shonen",()=>funcion);
app.get("/animes/api/generos/isekai",()=>funcion);
app.get("/animes/api/generos/gore",()=>funcion);`}/>
        <Conseptos texto={`Como nos damos cuenta la ruta "/animes/api/generos"`}/>
        <Conseptos texto={`Ahora imagina que programaremos algo para una ruta mucho mas larga seria muy larga las rutas por eso podemos acortar eso con "Router".`}/>
        <JavaScropt codigo={`const rutaPrincipal = express.Router(); // aqyu llamamos a la funcion Router con express.
app.use("/animes/api/generos",rutaPrincipal); 
// El primer parametro es para poner la ruta que se repite.
// El segundo parametro es para poner la variable que llama a la funcion "Router".

// en vez de usar "app" usaremos la variable "rutaPrincipal" porque esa variable guarda la ruta que se repite.
rutaPrincipal.get("/",()=>{ // al usar "rutaPrincipal" y poner "/" mo estamos haciendo una ruta desde 0 sino que estamos partiendo desde "/animes/api/generos"
  // funcion
})
rutaPrincipal.get("/shonen",(req,res)=>{
  // funcion
})
rutaPrincipal.get("/isekai",(req,res)=>{
  // funcion
})
rutaPrincipal.get("/gore",(req,res)=>{
  // funcion
})`}/>
        <Conseptos texto={`Ahora haremos una api para usando "Router".`}/>
        <JavaScropt codigo={``}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const base = require("./base.js");

const ruta = express.Router();
app.use("/animes/api",ruta)

ruta.get("/",(req,res)=>{
  res.send("ruta principal");
})

ruta.get("/shonen",(req,res)=>{
  return res.send(JSON.stringify(base.animes.shonen))
})
ruta.get("/isekai",(req,res)=>{
  return res.send(JSON.stringify(base.animes.isekai))
})

const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>
        <Txt codigo={`# peticiones http

### 
GET http://localhost:8080/animes/api
# resultado
# ruta principal


###
GET http://localhost:8080/animes/api/shonen
# resultado

[
  {
    "titulo": "dragon ball",
    "id": 1,
    "vistas": 380000,
    "destaca": "sayajins"
  },
  {
    "titulo": "naruto",
    "id": 2,
    "vistas": 347914,
    "destaca": "ninjas"
  },
  {
    "titulo": "one piece",
    "id": 3,
    "vistas": 347954,
    "destaca": "piratas"
  }
]


###
GET http://localhost:8080/animes/api/isekai
# resultado

[
  {
    "titulo": "re zero",
    "id": 1,
    "vistas": 248751,
    "destaca": "gore"
  },
  {
    "titulo": "mushoku tensei",
    "id": 2,
    "vistas": 257489,
    "genero": "ecchi"
  },
  {
    "titulo": "tate no yuusha",
    "id": 3,
    "vistas": 247687,
    "genero": "historia"
  }
]`}/>
      </main>
      <Footer />
    </>
  );
}

export default RoutersNode;