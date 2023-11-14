import { faAlgolia } from "@fortawesome/free-brands-svg-icons";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Consola from "../../../../componentes/consola/consola";
import Html from "../../../../componentes/lenguajes/Html";
import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal";


function IndexedDB() {
  return (  
    <>
      <MensajeModal texto={`Importante:


Todo el codigo de ejemplo se juntara al final para solo copiarlo osea que el codigo estara sin comentarios.`}/>
      <main>
        <h1>IndexedDB</h1>
        <h2>CRUD:</h2>
        <Conseptos texto={`C: create

R: read

U: update

D: delete

"crud" son las 4 operaciones basicas que debe tener toda base de datos.`}/>
        <h2>Abrir base de datos</h2>
        <h3>open{"()"}</h3>
        <Conseptos texto={`Esto abre una base de datos y si ya existe tambien la abre.`}/>
        <JavaScropt codigo={`const base = indexedDB.open("base",1);
// parametros:
// open( nombre de la base , version );
`}/>
        <h2>Eventos principales</h2>
        <Conseptos texto={`Usar la variable donde se guarda el metodo "open()" para que se apliquen los eventos.`}/>
        <h3>upgradeneeded</h3>
        <Conseptos texto={`Si la base de datos no existe se ejecutara este evento.

        Tambien se ejecutara "success".`}/>
        <h3>success</h3>
        <Conseptos texto={`Si la base de datos se abrio correctamente se ejecutara este evemto.`}/>
        <h3>error</h3>
        <Conseptos texto={`Si hay algun error se ejecutara este evento.`}/>
        <h3>ejemplo de uso.</h3>
        <JavaScropt codigo={`base.addEventListener("upgradeneeded",()=>console.log("La base no existe"));
base.addEventListener("success",()=>console.log("base abierta con exito."));
base.addEventListener("error",()=>console.log("hubo un error"));`}/>
        <h2>Como usar los eventos.</h2>
        <h3>upgradeneeded {"(crear almacen)"}</h3>
        <Conseptos texto={`Aqui crear las tablas para la base de datos.
        
        Recursos:`}/>
        <ol>
          <li>result: obtener resultado de la base.</li>
          <li>createObjectStore: Esto es para crear nuestro almacen.</li>
          <li>autoIncrement: Esto es para agregar un id a cada valor que se agregue.</li>
        </ol>

        <JavaScropt codigo={`base.addEventListener("upgradeneeded",()=>{
  const db = base.result;
  db.createObjectStore("almacen",{
    autoIncrement: true
  });
});`}/>
        <h2>success</h2>
        <JavaScropt codigo={`base.addEventListener("success",()=>{
  // aqui una funcion que siempre se ejecutara cada 
  // que la base de datos este abierta correctamente
})`}/>
        <h2>transaccion</h2>
        <Conseptos texto={`Con esto podremos leer , editar y eliminar los almacenes.`}/>
        <br />
        <Conseptos texto={`Recursos:

transaction 
  Con este metodo trabajaremos con los datos , este recibe dos parametros. 1. Nombre del almacen , 2. leer o editar almacen.
  readonly: Con readonly solo leeremos el contenido del objeto.
  readwrite: Con readwrite modificaremos el objeto.

objectStore: Con que almacen quieres trabajar.

add: Esto es para agregar un objeto al almacen.

Evento complete: Esto es el evento que se ejecutara cuando la transaccion termine.`}/>
        <Sintaxis codigo={`db.transaction("almacen","readonly");
db.transaction("almacen","readwrite");

# El metodo transaction viene con el parametro readonly
# por defecto con lo cual si deseas solo leer los objetos.
# puedes no llenar el segundo parametro de transaction por ejemplo.

db.transaction("almacen");

# pero si deseas modificar los objetos si sera necesario agregar
# readwrite eso si es obligatorio.`}/>
        <h2>agregar objetos</h2>
        <JavaScropt codigo={`const agregarObjetos=objetos=>{
  const db = base.result;
  const transaccion = db.transaction("almacen","readwrite")
  const almacen = transaccion.objectStore("almacen");
  almacen.add({
    artista: "Metallica",
    genero: "metal"
  });
  transaccion.addEventListener("complete",()=>{
    console.log("objeto agregado");
  })
}`}/>
        <h2>Leer objeto</h2>
        <Conseptos texto={`Recursos:

openCursor: Esto es para leer todos los objetos de un almacen.
continue: Esto es para que se muestren todos los objetos del almacen.`}/>
        <JavaScropt codigo={`const leerObjeto=objeto=>{
  const db = base.result;
  const transaccion = db.transaction("almacen","readwrite")
  const almacen = transaccion.objectStore("almacen");
  const cursor = almacen.openCursor();
  cursor.addEventListener("success",()=>{
    if (cursor.result) {
      console.log(cursor.result.value)
      cursor.result.continue();
    }
  })
}`}/>

        <h2>Editar objeto</h2>
        <Conseptos texto={`Recursos:
        
put: Esto es como "add" pero si detecta que el id es igual a otro id modifica los valores de lo contrario agrega los valores.`}/> 
        <JavaScropt codigo={`const editarObjeto=(objeto,key) =>{
  const db = base.result;
  const transaccion = db.transaction("almacen","readwrite");
  const almacen = transaccion.objectStore("almacen");
  almacen.put(objeto,key);
  transaccion.addEventListener("complete",()=>{
    console.log("objeto editado");
  })
}`}/>
        <h2>Eliminar objeto</h2>
        <Conseptos texto={`Recursos:

delete: Esto elimina un objeto el cual indiquemos.`}/>
          <JavaScropt codigo={`const eliminarObjeto=(key) =>{
  const db = base.result;
  const transaccion = db.transaction("almacen","readwrite");
  const almacen = transaccion.objectStore("almacen");
  almacen.delete(key);
  transaccion.addEventListener("complete",()=>{
    console.log("objeto eliminado");
  })
}`}/>
        <h2>Obtimizar</h2>
        <Conseptos texto={`En todas las funcion excepto leerObjeto se repite las 3 mismas lineas de codigo osea.`}/>
        <JavaScropt codigo={`const db = base.result;
const transaccion = db.transaction("almacen","readwrite");
const almacen = transaccion.objectStore("almacen");`}/>
        <Conseptos texto={`Con lo cual podemos simplificar mucho nuestro codigo creando una funcion que guarde esas 3 lineas para solo llamarla`}/>
        <JavaScropt codigo={`const getData=(tipo,msg)=>{
  const db = base.result;
  const transaccion = db.transaction("almacen",tipo);
  const almacen = transaccion.objectStore("almacen");
  transaccion.addEventListener("complete",()=>{
    console.log(msg);
  })
  return almacen;
}`}/>
        <Conseptos texto={`Esta funcion solo nos retorna un arreglo que gardara el almacen y la transaccion.`}/>
        <h2>Uso de la funcion</h2>
        <JavaScropt codigo={`const agregarObjetos=(objeto) =>{
  const datos = getData("readwrite","objeto agregado");
  datos.add(objeto);
}

const editarObjeto=(objeto,key) =>{
  const datos = getData("readwrite","objeto editado");
  datos.put(objeto,key);
}


const eliminarObjeto=(key) =>{
  const datos = getData("readwrite","objeto eliminado");
  datos.delete(key);
}

const getData=(tipo,msg)=>{
  const db = base.result;
  const transaccion = db.transaction("almacen",tipo);
  const almacen = transaccion.objectStore("almacen");
  transaccion.addEventListener("complete",()=>{
    console.log(msg);
  })
  return almacen;
}

const leerObjeto=objeto=>{
  const db = base.result;
  const transaccion = db.transaction("almacen","readwrite")
  const almacen = transaccion.objectStore("almacen");
  const cursor = almacen.openCursor();
  cursor.addEventListener("success",()=>{
    if (cursor.result) {
      console.log(cursor.result.value)
      cursor.result.continue();
    }
  })
}`}/>
        <h2>Codigo completo</h2>
        <JavaScropt codigo={`const base = indexedDB.open("base",1);

base.addEventListener("upgradeneeded",()=>{
  const db = base.result;
  db.createObjectStore("almacen",{
    autoIncrement: true
  });
});
base.addEventListener("success",()=>{
  // aqui una funcion que siempre se ejecutara cada 
  // que la base de datos este abierta correctamente
})
base.addEventListener("error",()=>console.log("hubo un error"));

const agregarObjetos=(objeto) =>{
  const datos = getData("readwrite","objeto agregado");
  datos.add(objeto);
}

const editarObjeto=(objeto,key) =>{
  const datos = getData("readwrite","objeto editado");
  datos.put(objeto,key);
}


const eliminarObjeto=(key) =>{
  const datos = getData("readwrite","objeto eliminado");
  datos.delete(key);
}

const getData=(tipo,msg)=>{
  const db = base.result;
  const transaccion = db.transaction("almacen",tipo);
  const almacen = transaccion.objectStore("almacen");
  transaccion.addEventListener("complete",()=>{
    console.log(msg);
  })
  return almacen;
}

const leerObjeto=objeto=>{
  const db = base.result;
  const transaccion = db.transaction("almacen","readwrite")
  const almacen = transaccion.objectStore("almacen");
  const cursor = almacen.openCursor();
  cursor.addEventListener("success",()=>{
    if (cursor.result) {
      console.log(cursor.result.value)
      cursor.result.continue();
    }
  })
}
`}/>
      </main>
      <Footer/>
    </>
  );
}

export default IndexedDB;