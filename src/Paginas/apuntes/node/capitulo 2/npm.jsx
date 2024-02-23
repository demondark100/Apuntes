import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Footer from "../../../../componentes/menus/Footer";

function NpmNode() {
  return (  
    <>
      <main>
        <h1>npm</h1>
        <Conseptos texto={`npm nos sirve para instalar paquetes en nuestros proyectos js.`}/>
        <ol>
          <li>Dentro de nuestra carpeta "node" creamos una carpeta llamada paquetes o como quieras llamarla.</li>
          <li>abrimos esa carpeta con vsCode.</li>
        </ol>
        <Conseptos texto={`Cuando terminemos de hacer esos 2 pasos podemos ejecutar los siguientes comandos de npm en nuestra terminal.`}/>
        <Consola codigo={`> npm init
package name: (paquetes) pack
version: (1.0.0)
description: Probando paquetes con el javaScript y su node.js
entry point: (index.js)
test command:
git repository:
keywords:
author: dan
license: (ISC)`}/>
          <Conseptos texto={`Cuando escribamos npm init nos dara algunas preguntas que si deseamos podemos rellenar o si no no solo debemos presionar "Enter" para responder la pregunta o dejarla por defecto.

Ahora explicare que quiere decir cada pregunta.`}/>
          <ol>
            <li>
              <p>
                package name: Como queremos llamar nuestro archivo , por defecto vendra con el nombre del archivo con el que creamos la carpeta pero podemos cambiarlo.
              </p>
            </li>
            <li>
              <p>
                version: Esto es la version por defecto yo lo dejo en 1.0.0. 
              </p>
            </li>
            <li>
              <p>
                description: Aqui podemos poner una descripcion a nuestro package.json.  
              </p> 
            </li>
            <li>
              <p>
                entry point: Es para indicar cual sera nuestro archivo donde llamaremos las importaciones de los paquetes , yo lo dejo por defecto con index.js.
              </p>
            </li>
            <li>
              <p>
                test command: Es para poder testear nuestro codigo en caso de que existan bugs.
              </p>
            </li>
            <li>
              <p>
                git repository: Aqui pondremos nuestro repositorio de git como controlador de versiones.
              </p>
            </li>
            <li>
              <p>
                keywords: Aqui pondremos palabras claves.
              </p>
            </li>
            <li>
              <p>
                author: Aqui vamos a poner quien es el autor del proyecto.
              </p>
            </li>
            <li>
              <p>
                license: Aqui pondremos la licensia , yo lo dejare por defecto.
              </p>
            </li>
          </ol>
          <Conseptos texto={`Si hicimos todo bien la terminal nos mostrara una archivo json y tambien se creara un archivo json con el nombre "package.json".`}/>
          <Consola codigo={`{
  "name": "pack",
  "version": "1.0.0",
  "description": "Probando paquetes con el javaScript y su node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "dan",
  "license": "ISC"
}`}/>
        <Conseptos texto={`Si abrimos el archivo "package.json" veremos lo mismo que en la terminal , tambien podemos editar el contendio del archivo "package.json".

Tambien podemos evitar que npm nos haga llenar todos esos inputs y que cree el archivo "package.json" con valores por defecto.`}/>
        <Consola codigo={`> npm init --yes
{
  "name": "paquetes",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`}/>

      </main>
      <Footer />
    </>
  );
}

export default NpmNode;