import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";


function RoutingNode() {
  return (  
    <>
      <main>
        <h1>Routing Node js</h1>
        <Conseptos texto={`Esto es para manejar las solicitudes del cliente en base a ciertos criterios.
Routing es crear distintas rutas para que el servidor sepa como manejar una solicitud en especifico.`}/>
        <h2>Criterios</h2>
        <h3>HTTP</h3>
        <Conseptos texto={`El metodo de la solicitud HTTP: De esta forma el servidor sabra que tipo de operacion se realizara por ejemplo GET.POST,etc.`}/>
        <h3>path</h3>
        <Conseptos texto={`De esta forma el servidor sabra el recurso en especifico que se usara.`}/>
        <h2>Routing</h2>
        <Conseptos texto={`Ahora veremos como se hace el enrutamiento de forma nativa en node.js.
Usaremos todo lo aprendido hasta ahora.`}/>
        <JavaScropt codigo={`// Informacion que enviamos al cliente.
const animes = {
  "shonen": [
    {
      id: 1,
      titulo: "Dragon ball",
      vistas: 15000,
      estado: "en emicion"
    },
    {
      id: 2,
      titulo: "one piece",
      vistas: 18000,
      estado: "en emicion"
    },
    {
      id: 3,
      titulo: "jujutsu kaisen",
      vistas: 17283,
      estado: "en emicion"
    }
  ],
  "isekai": [
    {
      id: 1,
      titulo: "re:zero",
      vistas: 13484,
      estado: "en emicion"
    },
    {
      id: 2,
      titulo: "mushoku tensei",
      vistas: 13879,
      estado: "en emicion"
    },    
    {
      id: 3,
      titulo: "tate no yuusha",
      vistas: 10118,
      estado: "en emicion"
    }
  ]
}

module.exports.animes = animes;`}/>
        <JavaScropt codigo={`const base = require("./base");
const http = require("http");


const servidor = http.createServer((req,res)=>{
  const {method} = req
  // tambien podemos hacer esto
  // const method = req.method;
  switch (method) {
    case "GET":
      return manejoPeticionGet(req,res);
    case "POST":
      return manejarPeticionPost(req,res);
    default:
      res.statusCode = 501;
      console.log("El servidor no sabe como manejar esta peticion.")
      break;
  }
})

function manejoPeticionGet(req,res){
  const path = req.url;
  if (path == "/") {
    res.writeHead(200,{"Content-Type": "application/json"}); // esto es para manejar la configuracion de headers.
    return res.end("bienvenido a mi primer servidor.")
  } else if(path == "/animes"){
    return res.end(JSON.stringify(base.animes))
  } else if(path == "/animes/shonen"){
    return res.end(JSON.stringify(base.animes.shonen))
  } else if(path == "/animes/isekai"){
    return res.end(JSON.stringify(base.animes.isekai))
  } else {
    res.statusCode = 404;
    return res.end("Recurso no encontrado.");
  }
}
function manejarPeticionPost(req,res) {
  const path = req.url;
  if (path === "/animes/addanime") {
    let cuerpo = "";

    // "data" viene por defecto solo usalo.
    req.on("data",contenido=>{
      cuerpo += contenido.toString();
    })
    // "end" viene por defecto solo usalo.
    req.on("end",()=>{
      let data = JSON.parse(cuerpo);
      console.log(cuerpo.titulo);
      res.end(\`El servidor recibio una solicitud de ${"${path}"}\`);
    })
  } else {
    res.statusCode = 404;
    res.end("Recurso no encontrado...");
  }
}

const puerto = 8080;
servidor.listen(puerto,()=>{
  console.log(\`Se abbrio el servidor en el puerto ${"${puerto}"}\`)
})`}/>
        <JavaScropt codigo={`# En realidad este no es un archivo .js es un archivo .http
###

GET http://localhost:8080/ HTTP/1.1
# enviar peticion en get
# resultado: "bienvenido a mi primer servidor."

###

PUT http://localhost:8080/editar HTTP/1.1
# resultado
# El servidor no sabe como manejar esta peticion.

###

# enviar algun recurs al servidor
POST http://localhost:8080/animes/addanime HTTP/1.1
Content-Type: application/json

{
    "titulo": "animes"
}
`}/>
      </main>
      <Footer />
    </>
  );
}

export default RoutingNode;