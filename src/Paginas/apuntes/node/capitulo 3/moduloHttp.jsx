import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

// imagenes
import urlImg from "./imagenes/url.png";
import resultado from "./imagenes/resultado.png";

function ModuloHttpNode() {
  return (  
    <>
      <main>
        <h1>Modulo http</h1>
        <Conseptos texto={`Este modulo nos permitira crear un servidor que escuche las peticiones que hagamos con el cliente , para empezar:`}/>
        <ol>
          <li>
            <Conseptos texto={` Debemos importar el modulo.`}/>
            <JavaScropt codigo={`const http = require("http")`}/>
          </li>
          <li>
            <Conseptos texto={`Luego debemos usar el metodo "createServer" para crear un servidor , es recomendable que lo guardes en una variable , este sera una funcion flecha la cual recibira dos parametros "req" y "res".
req: Es la peticion del cliente.
res: Es la respuesta del servidor.

¿Que es res.end?
Esto nos servira para finalizar todo el proceso que se hace y para enviar toda la respuesta al cliente.`}/>
            <Sintaxis codigo={`const variable = moduloHttp.createServer((peticion,respuesta)=>{
  respuesta.end("aqui la respuesta que enviaremos al cliente");
})`}/>
            <JavaScropt codigo={`const servidor = http.createServer((req,res)=>{
  // proceso previo
  res.end("hola mundo"); // finalizar proceso y mandar respuesta al cliente.
})`}/>
          </li>
        </ol>
        <h2>Puerto</h2>
        <Conseptos texto={`El puerto es la ubicacion virtual del sistema operativo en la cual se puede acceder a una aplicacion o algun proceso que se este ejecutando en ese puerto.`}/>
        
        <h2>listen</h2>
        <Conseptos texto={`Con este metodo podemos abrir nuestro servidor en este caso usaremos el puesto 3000.`}/>
        <Sintaxis codigo={`servidor.listen(puerto,()=>{
  // que proceso se hara al momento de iniciar el servidor.
})`}/>
        <JavaScropt codigo={`servidor.listen(3000,()=>{
  console.log("arrancando servidor");
})`}/>
        <Consola codigo={`> node app.js
arrancando servidor`}/>
        <h2>ver resultado</h2>
        <Conseptos texto={`Ahora veremos el resultado de nuestro servidor.`}/>
        <Conseptos texto={`en nuestro buscador de url debemos escribir "localhost:puerto que especificamos en listen"`}/>
        <ImagenLink tipo={"link"} imagen={urlImg} link={"localhost:3000"} titulo={"url localhost:3000"}/>
        <Conseptos texto={`Si todo se ejecuto bien en la pagina de <body> saldra hola mundo tal como especificamos en "res.end".`}/>
        <ImagenLink tipo={"imagen"} imagen={resultado} titulo={"resultado de res.end"}/>
      </main>
      <Footer />
    </>        
  );
}

export default ModuloHttpNode;