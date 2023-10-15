import { faAlgolia } from "@fortawesome/free-brands-svg-icons";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

function IndexedDB() {
  return (  
    <>
      <main>
        <h1>IndexedDB</h1>
        <h2>CRUD:</h2>
        <Conseptos texto={`C: create

R: read

U: update

D: delete

"crud" son las 4 operaciones basicas que debe tener toda base de datos.`}/>
        <h2>Crear base de datos.</h2>
        <Conseptos texto={`Para crear una base de datos con esta api es necesario usar el metodo "open".

Debes guardar esa base de datos en una variable porque necesitamos que se ejecuten 3 eventos de escucha que son obligatorios que se ejecuten.`}/>
        <Sintaxis codigo={`variable = indexedDB.open("nombre de tu base de datos.")`}/>
        <JavaScropt codigo={`let db; // esta variable la usaremos despues.
const baseDeDatos = indexedDB.open("primer base de datos.");`}/>
        <Conseptos texto={`Con el metodo open tambien podemos abrir una base de datos que ya fue creada , "open()" detectara de forma automatica si la base se esta creando o si la base ya esta creada.`}/>
        <h2>Eventos de escucha.</h2>
        <Conseptos texto={`Como mencione antes debemos de usar 3 eventos de escucha para la base creada.
error: Este evento se ejecutara cuando se desencadene un error en nuestra base de datos o en nuestro codigo.

success: Esto se ejecuta cuando se abre o se crea de forma exitosa nuestra base de datos.

upgradeneeded: Esto se ejecuta cuando se intenta abrir una base de datos no existente.`}/>
        <Sintaxis codigo={`const baseDeDatos = indexedDB.open("primer base de datos.");

baseDeDatos.addEventListener("error",funcion);
baseDeDatos.addEventListener("success",funcion);
baseDeDatos.addEventListener("upgradeneeded",funcion);`}/>
        <JavaScropt codigo={`let db; // variable que se usara mas adelante.
const baseDeDatos = indexedDB.open("primer base de datos.");

baseDeDatos.addEventListener("error",error);
baseDeDatos.addEventListener("success",iniciar);
baseDeDatos.addEventListener("upgradeneeded",crearBase);

function error() {console.log("hubo un error en la base de datos");}
function iniciar() {console.log("la base de datos se abrio/creo exitosamente.");}
function crearBase() {console.log("la base de datos se abrio/creo exitosamente.");}`}/>

        <JavaScropt codigo={`let db; // variable que se usara mas adelante.
const baseDeDatos = indexedDB.open("primer base de datos.");

baseDeDatos.addEventListener("error",error);
baseDeDatos.addEventListener("success",iniciar);
baseDeDatos.addEventListener("upgradeneeded",crearBase);

function error(e) {
  console.log("hubo un error en la base de datos");
  console.log(e.code,e.message);
}
function iniciar(e) {
  // "e.target.result" es para poder guardar el objeto del indexedDB en la variable que queramos.
  console.log("la base de datos se abrio/creo exitosamente.");
  db = e.target.result;
  console.log(db);
}
function crearBase() {
  console.log("la base de datos se abrio/creo exitosamente.")
}`}/>

      </main>
      <Footer/>
    </>
  );
}

export default IndexedDB;