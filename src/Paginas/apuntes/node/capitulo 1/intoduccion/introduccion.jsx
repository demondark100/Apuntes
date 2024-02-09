import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import ImagenLink from "../../../../../componentes/ImagenLink/imagenLink";
import Consola from "../../../../../componentes/consola/consola";

// imagenes
import paginaNode from "./imagenes/paginaNode.png";
import carpeta from "./imagenes/carpeta.png";
import terminalImg from "./imagenes/terminal.png";


// lenguages.
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript"

function IntroduccionNode() {
  return (
    <>
      <main>
        <h1>Introduccion a Node.js</h1>
        <Conseptos texto={`Node.js no es un lenguage de programacion , es un entorno de ejecucion de codigo javaScript osea que no necesitara del navegador para ser ejecutado.

Primero iniciaremos con la instalacion.

Es recomendable que elijas la opcion de la izquierda para descargar.`}/>
        <ImagenLink tipo={"link"} imagen={paginaNode} titulo={"Pagina node"} link={"https://nodejs.org/en"}/>

        <h2>Primeros usos de node.js</h2>
        <Conseptos texto={`Primero veremos como ver la version de nuestro node.js para ello debes de abrir la terminal esceibiendo node o si quieres el cmd funcionara en ambos casos.`}/>
        <Consola codigo={`> node --version
20.11.0`}/>
        <Conseptos texto={`Si escribimos "node" podremos escribir codigo js y se ejecutara sin necesidad del navegador.
Nota: Para terminar de escribir codigo js con node debes apretar "ctr + d"`}/>
        <Consola codigo={`> node
function saludar(nombre){
  return \`hola ${"${nombre}"}\`
}
saludar("mundo")`}/>
        <h2>Uso practico</h2>
        <Conseptos texto={`Ahora que comprobamos que node no necesita de un navegador para ejecutar codigo js es obvio que no escribiras archivos complejos en la terminal y aqui entra VsCode.`}/>
        <ol>
          <li>
            <p>
              Primero crearemos una carpeta y dentro un archivo js. 
            </p>
            <ImagenLink tipo={"imagen"} imagen={carpeta} titulo={"archivo"}/>
          </li>
          <li>
            <p>
              Presiona F12 y asegurate de que la terminal de vsCode te marque la ruta del archivo.
            </p>
            <ImagenLink tipo={"imagen"} imagen={terminalImg} titulo={"terminal"}/>
          </li>
          <li>
            <p>
              Ahora programa algo lindo en tu archivo js cualquier cosa en mi caso sera un "hola mundo".
            </p>
            <JavaScropt codigo={`console.log("hola mundo");`}/>
          </li>
          <li>
            <p>Ahora puedes escribir en tu terminal de vscode "node nombre de tu archivo" en mi caso es app.js.</p>
            <Consola codigo={`> node app.js
undefined
hola mundo`}/>
          </li>
        </ol>

        <Conseptos texto={`Excelente ahora sabemos como implementar node js para que compile nuestro codigo js sin necesidad de un navegador.`}/>
        

      </main>
      <Footer />
    </>
  );
}

export default IntroduccionNode;