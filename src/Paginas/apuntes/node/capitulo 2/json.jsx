import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Txt from "../../../../componentes/lenguajes/Txt";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Json from "../../../../componentes/lenguajes/Json";
import Consola from "../../../../componentes/consola/consola";

function JsonNode() {
  return (  
    <>
      <main>
        <h1>Json</h1>
        <Conseptos texto={`Esto lo vimos en el curso de javaScript pero aqui tambien lo haremos , json es para poder trabajar con informacion , json no es un lenguage de programacion sin embargo su sintaxis es similar a un objeto de javaScript.

Podemos hacer 2 formas para hacer un json.`}/>
        <ol>
          <li>
            <h3>json estamdar</h3>
            <Sintaxis codigo={`{
  "identificador": valor,
  "identificador": valor
}`}/>
          </li>
          <li>
            <h3>arreglo con json</h3>
            <Sintaxis codigo={`[
  {
    "identificador": valor,
    "identificador": valor
  },
  {
    "identificador": valor,
    "identificador": valor
  }
]`}/>
          </li>
        </ol>
        <Conseptos texto={`En los valores que ponemos en json podemos poner cualquier tipo de valor por ejemplo arreglos,strings,booleanos,flotantes,numericos.`}/>
        <Json codigo={`{
  "titulo": "curso de node.js",
  "usuarios": 15,
  "temas": [
    "javaScript",
    "terminal",
    "node.js"
  ],
  "estaEnLinea": true
}`}/>
        <Conseptos texto={`Ahora veremos como trabajar con json en el entorno de "node.js".`}/>
        <Json codigo={`{
  "titulo": "curso de node.js",
  "usuarios": 15,
  "temas": [
    "javaScript",
    "terminal",
    "node.js"
  ],
  "estaEnLinea": true
}`}/>
        <JavaScropt codigo={`// podemos trabajar con todos los datos
// ya que al importarlo con require
// el json se convierte de forma 
// automatica en un json

const datos = require("./app.json");

// titulo
console.log(datos.titulo);
// usurios
console.log(datos.usuarios);
// temas
console.log(datos.temas);
// esta en linea
console.log(datos.estaEnLinea)`}/>
        <Consola codigo={`> node app.js
curso de node.js
15
[ 'javaScript', 'terminal', 'node.js' ]
true`}/>
        <h2>stringify y parse</h2>
        <Conseptos texto={`Estos metodos nos servira para serializar y descerializar el contenido json.`}/>
        <ol>
          <li>
            <Conseptos texto={`stringify: Esto nos sirve para serializar algun objeto javaScript y poder mandar informacion como formato json. `}/>
            <Sintaxis codigo={`const serializar = JSON.stringify(objeto javaScript para serializar.);`}/>
          </li>
          <li>
            <Conseptos texto={`parse: Esto sirve para descerializar algun contenido json para que podamos trabajar con la informacion con javaScript , en el caso de node.js el metodo require descerializa el contenido de un archivo json de forma automatica pero en otros casos no pasa eso por ejemplo en javaScript nativo.`}/>
            <Sintaxis codigo={`const descerializar = JSON.parse(objeto json para descerializar);`}/>
          </li>
        </ol>
        <h2>ejemplo stringify</h2>
        <JavaScropt codigo={`const informacion = {
  "titulo": "curso de node.js",
  "usuarios": 15,
  "temas": [
    "javaScript",
    "terminal",
    "node.js"
  ],
  "estaEnLinea": true
}

const serializar = JSON.stringify(informacion);
console.log(serializar)`}/>
        <Consola codigo={`> node app.js
{"titulo":"curso de node.js","usuarios":15,"temas":["javaScript","terminal","node.js"],"estaEnLinea":true}`}/>
        <h2>ejemplo parse</h2>
        <Json codigo={`{
  "titulo": "curso de node.js",
  "usuarios": 15,
  "temas": [
    "javaScript",
    "terminal",
    "node.js"
  ],
  "estaEnLinea": true
}`}/>
        <JavaScropt codigo={`const datos = require("./app.json");

const recibido = JSON.stringify(datos);

const descerilizar = JSON.parse(recibido);

console.log(descerilizar);`}/>
        <Consola codigo={`> node app.js
{
  titulo: 'curso de node.js',
  usuarios: 15,
  temas: [ 'javaScript', 'terminal', 'node.js' ],
  estaEnLinea: true
}`}/>
      </main>
      <Footer />
    </>
  );
}

export default JsonNode;