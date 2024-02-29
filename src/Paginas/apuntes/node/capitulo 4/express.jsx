import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function ExpressNode() {
  return (  
    <>
      <main>
        <h1>Express</h1>
        <Conseptos texto={`Este framework es el mas popular para desarrollar aplicaciones con node.js , esto nos facilitara mucho el proceso de creacion de servidores.`}/>
        <h2>CRUTD</h2>
        <Conseptos texto={`Estas son las operaciones basicas para poder manejar una base de datos.`}/>
        <Conseptos texto={`C: create(crear)`}/>
        <Conseptos texto={`R: read(leer)`}/>
        <Conseptos texto={`U: update(actualizar)`}/>
        <Conseptos texto={`D: delete(eliminar)`}/>
        <Conseptos texto={`Para cada operacion que se hace en crud cada accion tiene su equivalente en los metodos HTTP.`}/>
        <ol>
          <li><Conseptos texto={`C: create(crear) = POST`}/></li>
          <li><Conseptos texto={`R: read(leer) = GET`}/></li>
          <li><Conseptos texto={`U: update(actualizar) = PUT`}/></li>
          <li><Conseptos texto={`D: delete(eliminar) = DELETE`}/></li>
        </ol>
        <h2>Api</h2>
        <Conseptos texto={`API(Application pProgramming Interface) o (interfaz de programacion de aplicacion). Una api es una interfaz de softwere que permite que dos programas se comunicquen entre si.`}/>
        <h2>importar express</h2>
        <Conseptos texto={`Primero debemos inciciar instalando express a nuestro proyecto.`}/>
        <Consola codigo={`> npm init --yes`}/>
        <Consola codigo={`npm install express`}/>
        <Conseptos texto={`Ahora debemos crear nuestro archivo "js" y alli debemos importar express.`}/>
        <JavaScropt codigo={`const express = require("express");
const app = express();
console.log(app);`}/>
        <Conseptos texto={`Listo ahora sabemos como importar express para su futuro uso.`}/>
      </main>
      <Footer />
    </>
  );
}

export default ExpressNode;