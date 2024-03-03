import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Txt from "../../../../componentes/lenguajes/Txt";

function ParametrosQueryNode() {
  return (  
    <>
      <main>
        <h1>parametros query</h1>
        <Conseptos texto={`Los parametros query siempre van al final de la url , estos siempre llevaran un "?" recordemos como era.`}/>
        <Sintaxis codigo={`GET http://localhost:3000/contenido/:parametros?clave=valor&clave=valor`}/>
        <Conseptos texto={`Empezaremos haciendo nuestra base de datos , sera la misma que hemos estado usando.`}/>
        <JavaScropt codigo={`const animes = {
  "shonen":[
    {
      "titulo": "dragon ball",
      "id": 1,
      "vistas": 380000,
      "destaca": "sayajins",
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
  ],
  "isekai":[
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
  ]
}

module.exports.animes = animes;`}/>
        <Conseptos texto={`Ahora para trabajar con los parametros query debemos recordar que son un objeto de clave y valor.`}/>
        <Sintaxis codigo={`{"clave":"valor"}`}/>
        <Conseptos texto={`Para acceder a esa "clave: valor" debemos usar el objeto query y el valor que queremos acceder.`}/>
        <Sintaxis codigo={`"req.query.valor del parametro query";`}/>
        <Conseptos texto={`Imaginemos que esta es la peticion.`}/>
        <Conseptos texto={`/animes/api/shonen?clave=valor`}/>
        <JavaScropt codigo={`Para acceder al objeto debemos hacer esto.`}/>
        <JavaScropt codigo={`console.log(req.query.clave);
// resultado
// "valor"`}/>
        <Conseptos texto={`Es hora de hacer un ejercico en este caso ordenaremos de los animes menos vistos a los mas vistos en cada genero de anime.`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const base = require("./base.js");


app.get("/animes/api/shonen",(req,res)=>{
  // en este caso el cliente pasa un parametro query llamado ordenar con el valor vistas
  // ?ordenar=vistas
  // {ordenar: "vistas"}

  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(base.animes.shonen.sort((a,b)=>a.vistas - b.vistas)))
  }
  res.send(JSON.stringify(base.animes.shonen))
})


app.get("/animes/api/isekai",(req,res)=>{
  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(base.animes.isekai.sort((a,b)=>a.vistas - b.vistas)))
  }

  res.send(JSON.stringify(base.animes.isekai));
})


const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`}/>
        <Txt codigo={`###
GET http://localhost:8080/animes/api/shonen?ordenar=vistas

# resultado
[
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
  },
  {
    "titulo": "dragon ball",
    "id": 1,
    "vistas": 380000,
    "destaca": "sayajins"
  }
]

###
GET http://localhost:8080/animes/api/isekai?ordenar=vistas

# resultado

[
  {
    "titulo": "tate no yuusha",
    "id": 3,
    "vistas": 247687,
    "genero": "historia"
  },
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
  }
]`}/>
        <Conseptos texto={`Si te fijas ordena los animes de los menos vistos a los mas vistos.`}/>
      </main>
      <Footer />
    </>
  );
}

export default ParametrosQueryNode;