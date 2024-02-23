import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

// imagenes
import estadoPage from "./imagenes/estadoPage.png";

function MetodosResNode() {
  return (
    <>
      <main>
        <h1>Metodos de res</h1>
        <Conseptos texto={`Ahora veremos los metodos mas usados en la s repuestas del servidor.
Estos metodos al igual que los metodos de res se deben poner dentro de esta funcion:`}/>
        <JavaScropt codigo={`const http = require("http");
const servidor = http.createServer((req,res)=>{
  // aqui todos los metodos de res por ejemplo.
  // res.metodo
  res.end("probando");
})
servidor.listen(3000,()=>{
  console.log("abriendo servidor...");
})`}/>
        <h2>statusCode</h2>
        <Conseptos texto={`Este metodo sirve para ver el codigo de estado de la peticion del ciente, tambien podemos cambiar el codigo de estado.`}/>
        <JavaScropt codigo={`console.log(res.statusCode);
res.statusCode = 404: // 404 not found
console.log(res.statusCode);`}/>
        <Consola codigo={`> node app.js
200
404`}/>
        <Conseptos texto={`Esos cambios podemos verlos reflejados en nuestro navegador:`}/>
        <ol>
          <li>
            <Conseptos texto={`Vamos a la pagina "localhost:3000" o el puerto al que hatas asicnado.`}/>
          </li>
          <li>
            <Conseptos texto={`Luego damos click derecho e inspeccionar o apretamos F12.`}/>
          </li>
          <li>
            <Conseptos texto={`En la categoria de las herramientas vamos donde dice "red" o "network" y alli veremos el estado de respuesta del servidor.`}/>
            <ImagenLink tipo={"imagen"} imagen={estadoPage} titulo={"Codigo de estado en pagina"}/>
          </li>
        </ol>
        <h2>setHeader</h2>
        <Conseptos texto={`Este metodo es para configurar un elemento de la cabecera por ejemplo especificar el tipo de contenido que estamos enviando , un estandar es application/json`}/>
        <Sintaxis codigo={`res.setHeader("tipo de contenid" , "contenido")`}/>
        <JavaScropt codigo={`res.setHeader("content-type","application/json");`}/>
        <h3></h3>
        <Conseptos texto={`Este metodo nos permite ver los elementos que estan en la cabecera(header) esto se logra con el metodo "getHeaders()".`}/>
        <JavaScropt codigo={`console.log(res.getHeaders());`}/>
        <Consola codigo={`> node app.js
[Object: null prototype] { 'content-type': 'application/json' }`}/>
      </main>
      <Footer />
    </>
  );
}

export default MetodosResNode;