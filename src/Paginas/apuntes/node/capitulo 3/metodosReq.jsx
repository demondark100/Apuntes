import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Txt from "../../../../componentes/lenguajes/Txt";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import imagenUrl1 from "./imagenes/url.png";
import urlPrueba from "./imagenes/urlPrueba.png";
import extencion from "./imagenes/extencion.png";
import solicitud from "./imagenes/solicitud.png";
import enviarSolicitud from "./imagenes/enviarSolicitud.png";

function MetodosReqNode() {
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Con estos metodos vamos a manejar nuestros servidores.`,
        "lenguage": "JavaScropt",
        "codigo": `const http = require("http");
const servidor = http.createServer((req,res)=>{
  console.log(req.url); // mostrar la url de la pagina.
  console.log(req.method); // ver que peticion hace el cliente.
  console.log(req.headers); // ver informacion de
  res.end("metodos de req");
});

servidor.listen(3000,()=>{
  console.log("abriendo servidor");
})`
      }]}/>
      <main>
        <h1>Metodos de req</h1>
        <Conseptos texto={`Aqui veremos los metodos mas importantes / mas usados en este modulo.`}/>
        <h3>importante , todos los metodos se ejecutaran dentro de esta funcion.</h3>
        <JavaScropt codigo={`const http = require("http");
const servidor = http.createServer((req,res)=>{
  // aqui todos poner todos los metodos de req
  // ejemplo:
  // req.metodo;
  res.end("metodos de req");
});

servidor.listen(3000,()=>{
  console.log("abriendo servidor");
})`}/>
        <h2>url</h2>
        <Conseptos texto={`Este metodo nos da el camino de la aplicacion por ejemplo la base de nuestra web es "localhost:3000".`}/>
        <ImagenLink tipo={"link"} imagen={imagenUrl1} titulo={"url base"} link={"localhost:3000"}/>
        <JavaScropt codigo={`console.log(req.url);`}/>
        <Consola codigo={`> node app.js
/`}/>
        <Conseptos texto={`Ahora si a la url "localhost:3000" agregamos "/pruebas" veamos que nos muestra este metodo.`}/>
        <ImagenLink tipo={"link"} imagen={urlPrueba} titulo={"url prueba"} link={"localhost:3000/prueba"}/>
        <Consola codigo={`> node app.js
/pruebas`}/>
        <h2>method</h2>
        <Conseptos texto={`Esto nos servira para saber cual es el proposito de la solicitud por ejemplo solo obtener informacion(GET) enviar informacion(POST) , etc.`}/>
        <JavaScropt codigo={`console.log(req.method)`}/>
        <Consola codigo={`> node app.js
GET`}/>
        <Conseptos texto={`Ahora que sabemos como ver la solicitud del cliente es recomendable instalar una extencion para poder enviar solicitud al servidor y poder hacer pruebas en este caso la extencion de vsCode se llama "REST Client".`}/>
        <ImagenLink tipo={"imagen"} imagen={extencion} titulo={"extencion necesaria"}/>
        <Conseptos texto={`Una vez instalada la extencion podemos mandar distintos tipos de solicitud al servidor , para ello debemos crear un archivo con la extencion http en mi caso creare uno llamado "app.http".
Dentro de ese archivo simplemente escribirmos que solicitud haremos y el link de nuestra aplicacion en este caso "localhost:3000".
Luego debemos hacer click en send request , no olvides abrir tu servidor primero.`}/>
        <Txt codigo={`POST localhost:3000`}/>
        <ImagenLink tipo={"imagen"} imagen={solicitud} titulo={"solicitud"}/>
        <Conseptos texto={`Como mencione debemos dar click en send request para enviar la solicitud al servidor.`}/>
        <ImagenLink tipo={"imagen"} imagen={enviarSolicitud} titulo={"enviar solicitud"}/>
        <Conseptos texto={`Segun la solicitud que enviemos se mostrara en la consola.`}/>
        <h2>headers</h2>
        <Conseptos texto={`Este metodo nos dara mas informacion sobre la solicitud como ya se abia mencionado antes.`}/>
        <JavaScropt codigo={`console.log(req.headers);`}/>
        <Consola codigo={`> node app.js
{
  host: 'localhost:8080',
  connection: 'keep-alive',
  'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
  'sec-ch-ua-mobile': '?0',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'sec-ch-ua-platform': '"Windows"',
  accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'no-cors',
  'sec-fetch-dest': 'image',
  referer: 'http://localhost:8080/',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'es-ES,es;q=0.9'
}`}/>
      </main>
      <Footer />
    </>
  );
}

export default MetodosReqNode;