import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

// imagenes
import archivosImg from "./imagenes/archivos.png";
import ImagenLink from "../../../../../componentes/ImagenLink/imagenLink";



function ModulosNode() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Con los modulos separaremos funciones en distintos archivos para tener el codigo mas ordenado y legible.

Archivo de modulo`,
        "lenguage": "JavaScropt",
        "codigo": `function saludo(nombre){
  return \`hola ${"${nombre}"}\`
}
function saludoFijo(){
  return \`Hola\`
}
module.exports.saludo = saludo;
module.exports = {
  saludoFijo: saludoFijo
}`
      },
      {
        "mensaje": "Archivo principal.",
        "lenguage": "JavaScropt",
        "codigo": `const modulos = require("./modulo.js");
console.log(modulos.saludo("Humano"))
console.log(modulos.saludoFijo())`
      }]}/>
      <main>
        <h1>Modulos</h1>
        <Conseptos texto={`Los modulos nos ayuda a exportar e importar funcionalidades a nuestro codigo principal , esto es util para evitar hacer codigo en un solo archivo lo cual hace que el codigo sea escalable y facil de mantener.
En simples palabras dividimos nuestra aplicacion en pequeñas partes para luego integrarlo en el proyecto principal.`}/>
        <h3>exportacion</h3>
        <Conseptos texto={`Esto nos servira para que podamos mandar una funcion a cualquier parte de nuestro proyecto para que pueda ser usada en cualquier momento.
Antes de iniciar entendamos que es "module.exports".`}/>
        <h3>module.exports</h3>
        <Conseptos texto={`Esto es un objeto vacio mira.`}/>
        <JavaScropt codigo={`console.log(module.exports);`}/>
        <Conseptos texto={`Por eso tenemos dos formas de exportar nuestros mosdulos ya que son objetos.`}/>
        <ol>
          <li>
            <h3>Comnotacion de puntos</h3>
            <Sintaxis codigo={`module.exports.identificador = nombre de la funcion`}/>
          </li>
          <li>
            <h3>modificar el objeto</h3>
            <Sintaxis codigo={`module.exports = {
  identificador: nombre de la funcion
}`}/>
          </li>
        </ol>
        <h3>importacion</h3>
        <Conseptos texto={`Aqui podremos llamar a los modulos para poder usarlos donde sea y poder usarlos, para hacer esto debemos usar la funcion "require".`}/>
        <Sintaxis codigo={`const modulo = require("ruta del modulo");`}/>
        <Conseptos texto={`Genial ahora veremos como usar una funcion de un modulo.`}/>
        <Sintaxis codigo={`modulo.identficador.nombre_de_la_funcion();`}/>

        <h2>Uso cotidiano</h2>
        <Conseptos texto={`Ahora veremos como usar lo aprendido y como se usa de forma cotidiana.`}/>
        <ol>
          <li>
            <Conseptos texto={`creamos una carpeta llamada "node"`}/>
          </li>
          <li>
            <Conseptos texto={`creamos un archivo.js llamado app.js , este sera nuestro archivo principal`}/>
          </li>
          <li>
            <Conseptos texto={`creamos un archivo llamado modulos , este sera el modulo al cual llamaremos en nuestro archivo principal.`}/>
          </li>
        </ol>
        <Conseptos texto={`Debe quedar asi.`}/>
        <ImagenLink tipo={"imagen"} imagen={archivosImg} titulo={"archivos img"}/>
        <h3>modulo</h3>
        <JavaScropt codigo={`function saludo(nombre){
  return \`hola ${"${nombre}"}\`
}

function saludoFijo(){
  return \`Como tan muchachos\`
}

module.exports.saludo = saludo;
module.exports = {
  saludoFijo: saludoFijo
}

// Comprobamos que podemos exportar las funciones de 2 formas.`}/>
        <h3>archivo principal(app.js)</h3>
        <JavaScropt codigo={`const modulos = require("./modulo.js");
console.log(modulos.saludo("Humano"))
console.log(modulos.saludoFijo())`}/>
        <Conseptos texto={`Tambien podemos llamar a una sola funcion de nuestro modulo usando la desestructuracion.`}/>
        <JavaScropt codigo={`const {saludo} = require("./modulo.js");
console.log(saludo("mundo"))`}/>
      </main>
      <Footer />
    </>
  );
}

export default ModulosNode;