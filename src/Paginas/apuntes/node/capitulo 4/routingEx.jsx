import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Txt from "../../../../componentes/lenguajes/txt";
import Footer from "../../../../componentes/menus/Footer";

function RoutingExpressNode() {
  return (  
    <>
      <main>
        <h1>Routing con express</h1>
        <Conseptos texto={`Con express es mucho mas facil facil manejar las rutas y los metodos , evitamos hacer muchas condicionales.`}/>
        <h2>app</h2>
        <Conseptos texto={`Ahora vamos a trabajar con la variable "app" para hacer todo.`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();`}/>
        <h2>enrutamiento</h2>
        <Conseptos texto={`Con express es mucho mas sensillo hacer el enrutamiento y que haremos en esa ruta osea el proceso.`}/>
        <Sintaxis codigo={`app.metodo("ruta",(req,res)=>{
  // proceso
})`}/>
        <Conseptos texto={`En la parte de "metodo" podemos especificar la solicitud que pedira el cliente en una ruta en especifico por ejemplo "GET","POST",etc.`}/>
        <JavaScropt codigo={`app.get("/",(req,res)=>{
  // proceso
})`}/>
        <JavaScropt codigo={`app.post("/",(req,res)=>{
  // proceso
})`}/>
        <JavaScropt codigo={`app.put("/",(req,res)=>{
  // proceso
})`}/>
        <JavaScropt codigo={`app.delete("/",(req,res)=>{
  // proceso
})`}/>
        <h2>Escuchar servidor.</h2>
        <Conseptos texto={`Esto es similar a la forma nativa , solo que aqui usaremos "app" para usar el metodos "listen".`}/>
        <Conseptos texto={`Nota: al momento de abrir un servidor y publicar el proyecto en vivo es probable que nos asignen un puerto y que no sea el puerto especifico que indicamos como antes , eso puede traer problemas por eso para solucionar eso tenemos "process.env.PORT".`}/>
        <JavaScropt codigo={`const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO,()=>{
  console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>

        <h2>primera api</h2>
        <Conseptos texto={`Ahora vamos a crear nuestra primera api.`}/>
        <JavaScropt codigo={`const animes = {
  "shonen":[
    {
      "titulo": "dragon ball",
      "id": 1,
      "vistas": 380000
    },
    {
      "titulo": "Naruto",
      "id": 2,
      "vistas": 347914
    },
    {
      "titulo": "one piece",
      "id": 3,
      "vistas": 347954
    }
  ],
  "isekai":[
    {
      "titulo": "re:zero",
      "id": 1,
      "vistas": 248751
    },
    {
      "titulo": "mushoku tensei",
      "id": 2,
      "vistas": 257489
    },    {
      "titulo": "tate no yuusha",
      "id": 3,
      "vistas": 247687
    }
  ]
}

module.exports.animes = animes;`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const base = require("./base.js");


// res.send es similar a res.end() solo que send es para enviar la informacion
app.get("/",(req,res)=>{
  res.send("Informacion base");
})

// en las apis normalmente se suele poner /api/ruta
app.get("/api/animes",(req,res)=>{
  res.send(JSON.stringify(base.animes))
})
app.get("/api/animes/shonen",(req,res)=>{
  res.send(JSON.stringify(base.animes.shonen))
})
app.get("/api/animes/isekai",(req,res)=>{
  res.send(JSON.stringify(base.animes.isekai))
})


const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>
        <h3>peticiones http</h3>
        <Txt codigo={`###
GET http://localhost:8080

###
GET http://localhost:8080/api/animes

###
GET http://localhost:8080/api/animes/shonen
###
GET http://localhost:8080/api/animes/isekai`}/>
        
      </main>
      <Footer />
    </>
  );
}

export default RoutingExpressNode;