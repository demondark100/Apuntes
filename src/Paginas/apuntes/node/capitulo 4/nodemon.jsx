import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

// imagenes
import error from "./imagenes/error.png";
import solucion1 from "./imagenes/solucion1.png";
import solucion2 from "./imagenes/solucion2.png";

function NodeMon() {
  return (
    <>
      <main>
        <h1>Nodemon</h1>
        <Conseptos texto={`Esto nos servira para que reinicie la aplicacion  node.js cada vez que detecte algun cambion , en simples paralabras ya no tendremos que reiniciar el servidor cada que hagamos un cambio se hara de forma automatica.`}/>
        <h2>global</h2>
        <Conseptos texto={`Antes de continuar "-g" sirve para instalar una dependencia de forma global.`}/>
        <Sintaxis codigo={`npm -g nombre_de_la_dependencia`}/>
        <h2>instalacion</h2>
        <Conseptos texto={`Ahora vamos a instalar esta dependencia en nuestro proyecto de "node.js".`}/>
        <ol>
          <li>
            <Conseptos texto={`Entramos a nuestro archivo donde estan nuestros modulos.`}/>
          </li>
          <li>
            <Conseptos texto={`abrimos la terminal con (ctr + ñ) o (ctr + \`).`}/>
          </li>
        </ol>
        <<Consola codigo={`> npm install -g nodemon`}/>
        <Conseptos texto={`Ahora que esta instalado no es necesario andar cerrando y abriendo el servidor para ver los cambios.`}/>
        <Conseptos texto={`Ahora vamos a crear nuestro servidor basico.`}/>
        <JavaScropt codigo={`const http = require("http");

const servidor = http.createServer((req,res)=>{
  res.end("esto es una prueba de reinicio");
});

servidor.listen(8080,()=>{
  console.log("El servidor esta escuchando")
})`}/>
        <Conseptos texto={`Genial creamos nuestro server basico , solo que ahora no debemos usar "node archivo.js" ahora usaremos "nodemon archivo.js".

Pero ahora veremos que hay un pequeño problema.`}/>
        <ImagenLink tipo={"imagen"} imagen={error} titulo={"Error"}/>
        <Conseptos texto={`Ahora vamos a solucionar este pequeño problema.`}/>
        <ol>
          <li>
            <Conseptos texto={`Creamos una terminal nueva pero no hay que darle en "+" sino que en la opcion que esta al lado.`}/>
            <ImagenLink tipo={"imagen"} link={solucion1} titulo={"solucion parte 1"}/>
          </li>
          <li>
            <Conseptos texto={`Seleccionamos la opcion "command prompt".`}/>
            <ImagenLink tipo={"imagen"} link={solucion2} titulo={"solucion parte 2"}/>
          </li>
          <li>
            <Conseptos texto={`Ahora recien podemos ejecutar "nodemon archivo.js".`}/>
            <Consola codigo={`> nodemon app.js
[nodemon] 3.1.0
[nodemon] to restart at any time, enter \`rs\`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting \`node app.js\`
El servidor esta escuchando`}/>
          </li>
        </ol>
        <Conseptos texto={`Listo ahora no sera necesario andar cerrando y abriendo el servidor para ver los cambios.`}/>
      </main>
      <Footer />
    </>
  );
}

export default NodeMon;