import { faAlgolia } from "@fortawesome/free-brands-svg-icons";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Consola from "../../../../componentes/consola/consola";
import Html from "../../../../componentes/lenguajes/Html";


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

      <h2>Explicando eventos</h2>
      <Conseptos 
        texto={`error: Aqui no podemos hacer mucho pero si mostrar porque nos da error con: "e.code" y "e.message".
        
success: Aqui simplemente guardamos el resultado del evento en una variable llamada "bd" el cual es un objeto. "e.targe.result"
        
upgradeneeded: Esto es un poco mas complejo pero aqui la explicacion.
  1. Recojemos el objeto en una variable. "e.target.result".
  
  2. creamos un almacen con "createObjectStore" este debe recibir:
    el nombre del almacen(el nombre debe ser unico).
    el id para cada elemento "{keyPath: "id"}"
  
  3. buscar un valor por el nombre porque nadie busca algo por su id , esto se logra con "createIndex" , esta funcion recibe 3 parametros los cuales son:
    primero que nombre queremos darle.
    segundo la llave del indice.
    tercero indicar si la llave sera del tipo unico o no osea si se podra repetir el mismo nombre o no , si es "false" si se podra repetir si es "true" no se podra repetir
    `}
      />
        <h2>Codigo de uso de indexedDB</h2>
        <h3>Estructura html{"(necesaria)"}</h3>
        <Conseptos texto={`Esta estructura la usaremos mas adelante.`}/>
        <Html codigo={`<button id={btnCrear}>crear base</button>`}/>
        <div className="website">
          <button>crear base</button>
        </div>
        <JavaScropt codigo={`let db; // variable que se usara mas adelante.
const baseDeDatos = indexedDB.open("primer base de datos.");

baseDeDatos.addEventListener("error",(e)=>{
  console.log(\`hubo un error ${"${e.code,e.message}"}\`);
});
baseDeDatos.addEventListener("success",(e)=>{
  db = e.target.result;
});
baseDeDatos.addEventListener("upgradeneeded",(e)=>{
  let baseDeDatos = e.target.result;
  let elemento = baseDeDatos.createObjectStore("nombres",{keyPath: "id"})
  elemento.createIndex("names","name",{unique:false})
});

// continuamos con transaction.`}/>
        <Consola codigo={`> primer base de datos
  > nombres
     names`}/>
        <h2>transaction</h2>
        <Conseptos texto={`Con esto podremos almacenar , editar , eliminar o solo leer la informacion que se almacene en nuestra base de datos.

Uso:
Este recibira dos parametros:
  1. primero indicamos con que elemento trabajaremos. "["elemento"]"
  2. segundo indicamos que vamos a hacer "mostrar informacion(readonly)" o "modificar informacion"(readwrite).

Despues:
  1. creamos una nueva variable donde tendremos que abrir nuestro elemento para mostrar o modificar con "objectStore("elemento")".
`}/>
        <JavaScropt codigo={`const btnCrear = document.getElementById("btnCrear"); // seleccionar el boton de html del principio.
btnCrear.addEventListener("click",crearBase);
function crearBase(){
  let transaccion = db.transaction(["nombres"],"readwrite");          
  let almacen = transaccion.objectStore("nombres");
  
  transaccion.addEventListener("complete",mostrar); // esto se explicara mas adelante.
  
  // esto se explica en agregar
  almacen.add({
    nombre: "cualquier cosa",
    apellido: "cualquier cosa",
    id: "nadie busca por id :v"
  })
}

// continuamos con la funcion para mostrar datos`}/>
        <h2>agregar</h2>
        <Conseptos texto={`Ahora vamos a almacenar dentro de nuestro elemento lo que queramos esto se logra con el metodo "add".

Este metodo recibira como parametro un objeto "{}" es como si fuese un JSON.

Esta linea agregar dentro de la funcion "crearBase" , poner debajo de la variable almacen.`}/>
        <JavaScropt codigo={`almacen.add({
  nombre: "cualquier cosa",
  apellido: "cualquier cosa",
  id: "nadie busca por id :v"
})`}/>
        <h2>mostrar datos.</h2>
        <Conseptos texto={`Aqui tambien usaremos "transaction" con el parametro readonly.

Al usar "transaction" viene con la propiedad readonly por defecto pero si quieres ponerlo ponlo yo no lo pondre.

Uso:

1. crear el puntero con la funcion "operCursor()" , con esto solo abrimos un puntero para trabajar con los datos es como un mouse.

2. ejecutar el evento de escucha success para poder mostrar los datos con "e.value.valor".

3. usar la funcion "continue()" para que la base de datos actualice los datos que se mostraran.`}/>
        <JavaScropt codigo={`function mostrar(){
  let transaccion = db.transaction("nombres");
  let almacen = transaccion.objectStore("nombres");

  let puntero = almacen.openCursor();
  puntero.addEventListener("success",(e)=>{
    let puntero = e.target.result;
    if(puntero){
      console.log(puntero.value.nombre);
      puntero.continue();
    }
  })
}`}/>
        <h2>actualizar</h2>
        <Conseptos texto={`Ahora debemos actualizar la base de datos esto lo lograremos al ejecutar doto el codigo de mostrar en el evento de escucha "complete" , esto se debe de hacer en la variable transaccion donde enviamos los datos.`}/>
        <Conseptos texto={`Esta linea se debe poner en la funcion crearBase encima del metodo "add"`}/>
        <JavaScropt codigo={`transaccion.addEventListener("complete",mostrar);`}/>
      </main>
      <Footer/>
    </>
  );
}

export default IndexedDB;