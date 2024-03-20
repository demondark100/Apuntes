import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";


function CacheJs() {
  caches.open("estatico").then(cache=>{
    cache.add("cache.html")
    console.log(cache)
  })
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Esto almacena informa informacion que ya ha sido solicitada con anterioridad.`,
        lenguage: "JavaScropt",
        codigo: `caches.open("estatico").then(cache=>{
  // cache.add("archivo1.html"); // agregar solo un archivo.
  cache.addAll(["archivo1.html","archivo2.css"]); // agregar varios archivos. 
  cache.match("archivo1.html").then(res=>{ // devuelve una promesa.
    console.log(res);
  })
  fetch("archivo1.html").then(res =>{
    cache.put("archivo1.html",res); // envia una solicitud
    // parametro 1: la url
    // parameto 2: res 
  })
  cache.keys().then(res=>{
    console.log(res) // nos devuelve una promesa de todos los archivos que se agregaron al cache.
  })
  cache.delete("archivo1.html"); // elimina un archivo del cache
})`
      }]}/>
      <main>
        <h1>Caché</h1>
        <Conseptos texto={`El cache almacena informacion que ya solicitamos de forma cotidiana/normalmente lo cual hace que el usuario tenga que esperar menos por entrar al sitio web.`}/>
        <h2>open</h2>
        <Conseptos texto={`Se acuerdan de indexedDB bueno el Caché es similar con el metodo open ya que abrira el archivo si ya es existente y si no existe lo creara en este caso crearemos un archivo llamado "archivo estatico".`}/>
        <JavaScropt codigo={`// el cache se trabaja con promesas asi esque tenemos que usar then de esta manera.
caches.open("archivo estatico").then(Cache=>{
    console.log(Cache)
})`}/>
        <h2>metodos</h2>
        <h2>add</h2>
        <Conseptos texto={`"add" agrega recursos a la memoria cache.`}/>
        <JavaScropt codigo={`caches.open("archivo estatico").then(Cache=>{
    Cache.add("Caché.html")
})

// aqui estamos diciendo que agregue a nuestro archivo html.`}/>
        <h2>addAll</h2>
        <Conseptos texto={`Esto es para agregar todos los archivos que deseemos a travez de un arreglo.`}/>
        <JavaScropt codigo={`caches.open("archivo estatico").then(Cache=>{
    Cache.addAll(["Caché.html","Caché.css","Caché.js"]);
})

// aqyi estamos agregando varios archivos del mismo sitio web.`}/>
        <h2>match</h2>
        <Conseptos texto={`Devuelve una promesa que resuelve en una matriz de todas las solicitudes.`}/>
        <JavaScropt codigo={`caches.open("archivo estatico").then(Cache=>{
    Cache.match("Caché.html").then(res=>{
        console.log(res);
    })
})

// esto nos devolvera una promesa resuelta con el elemento que hemos indicado.`}/>
        <h2>matchAll</h2>
        <Conseptos texto={`"matchAll" nos devolvera un arreglo de respuestas.`}/>
        <JavaScropt codigo={`caches.open("archivo estatico").then(Cache=>{
    Cache.matchAll("Caché.html").then(res=>{
        console.log(res);
    })
})

// esto nos ayudara por si tenemos mas de un archivo con el mismo nombre en este caso si tuvieramos mas de un archivo "Caché.html".`}/>
        <h2>put</h2>
        <Conseptos texto={`Envia una solicitud y trabaja con el response.`}/>
        <JavaScropt codigo={`caches.open("archivo estatico").then(Cache=>{
    fetch("Caché.html").then(res =>{
        Cache.put("Caché.html",res)
            
        // parametro 1: la url
        // parameto 2: res 
    })
})

// esto se usa mas para modificar una que otra cosa pero es mas usado add.`}/>
        <h2>delete</h2>
        <Conseptos texto={`"delete" es igual a "add" solo que este elimina el recurso ejemplo.`}/>
        <JavaScropt codigo={`caches.open("archivo estatico").then(Cache=>{
    Cache.delete("Caché.html")
})`}/>
        <h2>keys</h2>
        <Conseptos texto={`"keys" nos devuelve una promesa que nos da una matriz de keys de los objetos almacenados.`}/>
        <JavaScropt codigo={`caches.open("archivo estatico").then(Cache=>{
    Cache.addAll(["Caché.html","Caché.css","Caché.js"]);
    Cache.keys().then(res=>{
        console.log(res)
    })
    
// esto nos devuelve toda la data del cache.
})`}/>
      </main>
      <Footer/>
    </>
  );
}

export default CacheJs;