import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

function FsNode() {
  return (  
    <>
      <main>
        <h1>fs (file system)</h1>
        <Conseptos texto={`Este modulo nos sirve para leer archivos del sistema , en este caso vamos a leer un archivo "html".`}/>
        <ol>
          <li>Creamos una carpeta llamada node.</li>
          <li>dentro creamos dos archivos uno llamada "app.js" y otro llamado "app.html"</li>
        </ol>
        <Conseptos texto={`Para empezar a usar este modulo debemos importarlo con require.`}/>
        <JavaScropt codigo={`const fs = require("fs");`}/>
        <Conseptos texto={`Ahora veremos todos los parametros que usa este modulo para poder leer los archivos.`}/>
        <Sintaxis codigo={`fs.readFile("ruta del archivo para leer","como se leera el archivo","funcion para manejar el error o mostrar contenido")`}/>
        <JavaScropt codigo={`fs.readFile("./app.html","utf-8",(error,contenido)=>{
  if(error){
    throw error;
  }
  console.log(contenido);
})`}/>
        <h2>rename</h2>
        <Conseptos texto={`Esta funcion de fs nos sirve para cambiar el nombre de un archivo.`}/>
        <Sintaxis codigo={`fs.rename("ruta del archivo que queremos cambiar","nuevo nombre del archivo",funcion para manejar error)`}/>
        <JavaScropt codigo={`fs.rename("./app.html","main.html",(error)=>{
  if(error){
    throw error
  }
  console.log("Nombre de archivo cambiado correctamente.")
})`}/>
        <h2>appendFile</h2>
        <Conseptos texto={`Esta funcion nos permite agregar contenido al final de nuestro archivo.
Veamos este archivo.`}/>
        <JavaScropt codigo={`console.log("hola mundo");

`}/>
        <Conseptos texto={`Ahora agregaremos contenido al funal de este archivo.`}/>
        <Sintaxis codigo={`fs.appendFile("ruta del archivo para modificar","con que queremos modificar",funcion para mostrar error o exito)`}/>
        <JavaScropt codigo={`fs.appendFile("./app.js",\`console.log("sigo aqui mundo")\`,(error)=>{
  if(error){
    throw error
  }
  console.log("archivo modificado.")
})")`}/>
        <Conseptos texto={`Ahora si vemos el archivo js anteriormente mostrado veremos esto.`}/>
        <JavaScropt codigo={`console.log("hola mundo");
console.log("sigo aqui mundo")`}/>
        <h2>writeFile</h2>
        <Conseptos texto={`Esta funcion nos sirve para reemplazar el contenido de un archivo o crear un archivo y ponerle contenido.`}/>
        <Sintaxis codigo={`fs.writeFile("ruta del archivo nuevo o creado","contenido que queremos escribir o reeplazar",funcion para manejar el error o el exito)`}/>
        <JavaScropt codigo={`fs.writeFile("app.js",\`console.log("happy nation")\`,(error)=>{
  if(error){
    throw error;
  }
  console.log("Archivo modificado o creado correctamente.");
})`}/>
        <h2>unlink</h2>
        <Conseptos texto={`Esta funcion nos servira para eliminar archivos.`}/>
        <Sintaxis codigo={`fs.unlink("ruta del archivo que queremos eliminar",funcion para manejar si hubo error o exito);`}/>
        <JavaScropt codigo={`fs.unlink("./app.html",(error)=>{
  if (error) {
    throw error;
  }
  console.log("Archivo eliminado.")
});`}/>
      </main>
      <Footer />
    </>
  );
}

export default FsNode;