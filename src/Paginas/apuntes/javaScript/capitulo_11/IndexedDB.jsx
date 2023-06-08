import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
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
        <h2>metodo open</h2>
        <Conseptos texto={`Con "open" abriremos una base de datos si ya esta creada pero si no esta creada creara una base de datos.

Eecomendacion siempre crear la variable con ek nombre "IDBRequest" para evitar ptoblemas o evitar usar window.indexedDB.`}/>
        <JavaScropt codigo={`const IDBRequest = indexedDB.open("nombres");

//en el parametro debemos el nombre que queramos en este caso sera nombres.`}/>
        <h2>upgradeneeded</h2>
        <Conseptos texto={`Esto comprobara si esta creado si no lo esta lo creara.

No copees este codigo porque solo es para saber para que sirve.`}/>
        <JavaScropt codigo={`IDBRequest.addEventListener("upgradeneeded",()=>{
    console.log("se creo correctamente");
})`}/>
        <h2>crear almacen</h2>
        <JavaScropt codigo={`IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;

    // aqui solo estamos solicitando abrir la base de datos.
    // la varible db hace referencia a base de datos.
    db.createObjectStore("mi base de datos 😎😎😎",{
        autoIncrement: true

        // con "autoIncrement" decimos que se incremente automaticamente la tabla y que se ponha en un registro unico como si fuese un id por ejemplo si ponemos un nombre se guardara en un numero unico y asi se ira incementando los numeros de forma automatica.
    })

    // aqui estamos creando el almacenamiento.
    // parametro 1 ponemos como se llamara el almacenamiento en este caso "nombres"
    // parametro 2 ponemos la configuracion del almaacenamiento.

})`}/>
        <Conseptos texto={`Aparte de "autoIncrement" tenemos a "keyPath" el cual asocia por nombres.`}/>
        <h2>success</h2>
        <Conseptos texto={`Esto metodo nos dira si todo salio correctamente.`}/>
        <JavaScropt codigo={`IDBRequest.addEventListener("success",()=>{
    console.log("todo salio correctamente");
})

// este metodo se ejecutara a travez de un evento.`}/>
        <h2>metodo error</h2>
        <Conseptos texto={`Esto se ejecutara cuando no se pueda abrir la base de datos.`}/>
        <JavaScropt codigo={`IDBRequest.addEventListener("error",()=>{
    console.log("hubo un error al abrir la base de datos.")
})

// este metodo tambien se ejecuta a travez de eventos.`}/>
        <h2>funcion crear objetos</h2>
        <Conseptos texto={`Ahora con esto trabajaremos con el c.r.u.d.`}/>
        <JavaScropt codigo={`const addObjetos = objetos =>{
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres","readwrite")
        
    // aqui abriremos una operacion para que nos deje hacer lo que queramos.
    // parametro 1 donde queremos abrir? en este caso en nombres.
    // parametro 2 que queremos hacer? readwrite(leer o escribir) o readonly(solo leer)
        
    const objectStore = IDBtransaction.objectStore("nombres");
        
    // aqui le decimos que se ejecutara en el objectStore nombres.
        
    objectStore.add(objetos)
        
    // y aqui solo estamos agregando los nombres en la base de datos.
        
    IDBtransaction.addEventListener("complete",()=>{
        console.log("se agrego correctamente")

        // este mensaje se mostrara cuando seya terminado de agregar.
    })
}`}/>
        <Conseptos texto={`Ahora para leer el objeto.`}/>
        <JavaScropt codigo={`const leerObjeto = objeto =>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres","readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result) {
            console.log(cursor.result.value);
            cursor.result.openCursor()
        }
    })
}`}/>
        <Conseptos texto={`Modificacion de objetos.`}/>
        <JavaScropt codigo={`const modificarObjetos = (key,objeto) =>{
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres","readwrite")
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.put(objeto,key)

    // aqui cambiamos al "add" por put y ponemos los dos parametros lo demas es igual

    IDBtransaction.addEventListener("complete",()=>{
        console.log("objeto modificado correctamente");
    })
}
modificarObjetos(2,{nombre:"otro name"})`}/>
        <Conseptos texto={`Eliminar objetos.`}/>
        <JavaScropt codigo={`const eliminarObjetos = key =>{
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres","readwrite")
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.delete(key)

        // aqui ya no ponemos "add" ni "put" ponemos "delete" y el parametro key.

    IDBtransaction.addEventListener("complete",()=>{
        console.log("objeto eliminado correctamente");
    })
}`}/>
        <Conseptos texto={`Ahora todo el codigo.`}/>
        <JavaScropt codigo={`const IDBRequest = indexedDB.open("nombres");

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("mi base de datos 😎😎😎",{
        autoIncrement: true
    })
})

IDBRequest.addEventListener("success",()=>{
    console.log("todo salio correctamente");
})

IDBRequest.addEventListener("error",()=>{
    console.log("hubo un error al abrir la base de datos.")
})

const addObjetos = objetos =>{
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres","readwrite")
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.add(objetos)
    IDBtransaction.addEventListener("complete",()=>{
        console.log("se agrego correctamente")
    })
}

const leerObjeto = () =>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres","readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result) {
            console.log(cursor.result.value);
            cursor.result.openCursor()
        }
    })
}

const modificarObjetos = (key,objeto) =>{
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres","readwrite")
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.put(objeto,key)
    IDBtransaction.addEventListener("complete",()=>{
        console.log("objeto modificado correctamente");
    })
}
modificarObjetos(2,{nombre:"otro name"})

const eliminarObjetos = key =>{
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres","readwrite")
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.delete(key)
    IDBtransaction.addEventListener("complete",()=>{
        console.log("objeto eliminado correctamente");
    })
}`}/>
      </main>
      <Footer/>
    </>
  );
}

export default IndexedDB;