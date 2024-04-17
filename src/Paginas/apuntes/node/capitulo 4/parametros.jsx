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
        "codigo": `const express = require("express");
const app = express();
// base de datos,
const base = require("./base.js");

app.get("/",(req,res)=>{
  res.send(JSON.stringify(base.animes));
})
app.get("/api/animes",(req,res)=>{
  res.send(JSON.stringify(base.animes))
})
app.get("/api/animes/shonen/:anime",(req,res)=>{
  const anime = req.params.anime;
  const entregar = base.animes.shonen.filter(animeData=>animeData.titulo == anime)
  if (entregar.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${anime}"}.\`)
  }
  res.send(JSON.stringify(entregar));
})
app.get("/api/animes/isekai/:anime",(req,res)=>{
  const anime = req.params.anime;
  const entregar = base.animes.isekai.filter(animeData=>animeData.titulo == anime)
  if (entregar.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${anime}"}.\`)
  }
  res.send(JSON.stringify(entregar));
})


const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(\`El servidor esta escuchando en el puerto ${"${PUERTO}"}...\`);
})`
      }]}/>
      <main>
        <h1>Parametros url</h1>
        <Conseptos texto={`Ahora si queremos obtener datos de algo en especifico seria muy tedioso crear una peticion para cada cosa , usaremos la base de datos anterior como ejemplo.`}/>
        <JavaScropt codigo={`const animes = {
  "shonen":[
    {
      "titulo": "dragon ball",
      "id": 1,
      "vistas": 380000,
      "destaca": "sayajins"
    },
    {
      "titulo": "Naruto",
      "id": 2,
      "vistas": 347914,
      "destaca": "ninja"
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
      "destaca": "ecchi"
    },    
    {
      "titulo": "tate no yuusha",
      "id": 3,
      "vistas": 247687,
      "destaca": "historia"
    }
  ]
}

module.exports.animes = animes;`}/>
        <Conseptos texto={`En este caso tenemos solo dos generos de anime "shonen" e "isekai" , ahora que tal si el cliente quiere los datos de "one piece" deberiamos hacer esto¿.`}/>
        <JavaScropt codigo={`app.get("/api/anumes/shonen/one piece",()=>funcion)`}/>
        <Conseptos texto={`¿Y si ahora el cliente quiere informacion de dragon ball?`}/>
        <JavaScropt codigo={`app.get("/api/anumes/shonen/dragon ball",()=>funcion)`}/>
        <Conseptos texto={`O ¿y si ahora el cliente quiere informacion de "naruto"?`}/>
        <JavaScropt codigo={`app.get("/api/anumes/shonen/naruto",()=>funcion)`}/>
        <Conseptos texto={`Como te das cuenta tenemos que hacer varias peticiones en la categoria de "shonen" y es probable que tengan la misma funcion de dar la informacion lo cual seria muy tedioso de hacer peticion a cada ruta , ademas imagina que tienes una base de dato mucho mas grande con muchos mas animes seria poco practico repetir el mismo codigo para cada ruta por eso estan los parametros.`}/>
        <Conseptos texto={`Ahora para implementar parametros en la url necesitamos poner ":parametro" en el codigo donde se hara la peticion.`}/>
        <Sintaxis codigo={`app.get("/animes/shonen/:parametro",()=>funcion)`}/>
        <h2>api con parametros</h2>
        <Conseptos texto={`Usaremos la base de datos del inicio para hacer esta api.`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const base = require("./base.js");



app.get("/",(req,res)=>{
  res.send(JSON.stringify(base.animes));
})

app.get("/api/animes",(req,res)=>{
  res.send(JSON.stringify(base.animes))
})
app.get("/api/animes/shonen/:anime",(req,res)=>{
  const anime = req.params.anime;
  const entregar = base.animes.shonen.filter(animeData=>animeData.titulo == anime)
  if (entregar.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${anime}"}.\`)
  }
  res.send(JSON.stringify(entregar));
})
app.get("/api/animes/isekai/:anime",(req,res)=>{
  const anime = req.params.anime;
  const entregar = base.animes.isekai.filter(animeData=>animeData.titulo == anime)
  if (entregar.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${anime}"}.\`)
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
const base = require("./base.js");




app.get("/api/animes",(req,res)=>{
  // devolver toda la base de datos.
  res.send(JSON.stringify(base.animes))
})

// ":anime" sera el parametro en este caso el titulo.
app.get("/api/animes/shonen/:anime",(req,res)=>{
  // req.params es un arreglo que contiene los objetos del parametro indicado
  // en este caso animes porque en la ruta especificamos que el parametro sera ":anime"
  const anime = req.params.anime;
  // aqui filtramos si el parametro de la url es igual al titulo del anime
  // que queremos tener informacion , esto retornara un arreglo.
  const entregar = base.animes.shonen.filter(animeData=>animeData.titulo == anime)
  // aqui verificamos si la longitud de "entregar" es 0 significa que no hay resultados.
  if (entregar.length === 0) {
    // retornamos el estado de error e indicamos un mensaje al cliente.
    return res.status(404).send(\`No se ha encontrado ${"${anime}"}.\`)
  }
  // retornamos la informacion del anime que busca el cliente.
  res.send(JSON.stringify(entregar));
})

// codigo sin  comentarios.
app.get("/api/animes/isekai/:anime",(req,res)=>{
  const anime = req.params.anime;
  const entregar = base.animes.isekai.filter(animeData=>animeData.titulo == anime)
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
        <Sintaxis codigo={`app.get("/api/animes/:parametro1/parametro2",()=>funcion)`}/>
        <Conseptos texto={`En este ejercicio usaremos la base de datos del principio tambien.`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
// base de datos,
const base = require("./base.js");

app.get("/api/animes/shonen/:titulo/:destaca",(req,res)=>{
  const titulo = req.params.titulo;
  const destaca = req.params.destaca;
  const informacion = base.animes.shonen.filter(animes=>animes.titulo === titulo && animes.destaca === destaca)
  if (informacion.length === 0) {
    return res.status(404).send(\`No se encontro ${"${titulo}"} o ${"${titulo}"} no destaca por ${"${destaca}"}\`);
  }
  res.send(JSON.stringify(informacion))
})

app.get("/api/animes/isekai/:titulo/:destaca",(req,res)=>{
  const titulo = req.params.titulo;
  const destaca = req.params.destaca;
  const informacion = base.animes.isekai.filter(animes=>animes.titulo === titulo && animes.destaca === destaca);
  if (informacion.length === 0) {
    return res.status(404).send(\`No se ha encontrado ${"${titulo}"} o ${"${titulo}"} no destaca por ${"${destaca}"}\`);
  }
  res.send(JSON.stringify(informacion));
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