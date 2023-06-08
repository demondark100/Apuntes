import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function CachWebJs() {
  return (  
    <>
      <main>
        <h1>Cachear sitio web y mostrarlo offline</h1>
        <Conseptos texto={`Si queremos entrar a la pagina pero sin conexion a internet como hacemos?`}/>
        <h2>installl</h2>
        <Conseptos texto={`Aqui harewmos un ejercicio para usar la parte offline.`}/>
        <JavaScropt codigo={`let nombre = "version 1";

self.addEventListener("install",e=>{
    caches.open(nombre).then(cache=>{
        cache.add("Cachear sitio web y mostrarlo offline.html").then(res=>{
            console.log("informacion cacheada.")
        }).catch(e=>{
            console.log(e);
        })
    })
})`}/>
        <h2>activate</h2>
        <Conseptos texto={`Aqui vamos a eliminar informacion cache para que no se almacene demasiado.`}/>
        <JavaScropt codigo={`self.addEventListener("actovate",e=>{
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if (cache != nombre) {
                    console.log("el cache anterior fue eliminado.")
                    return caches.delete(cache);
                }
            })
        )
    })
})

// con esto estamos eliminando el cache antiguo y poniendo el nuevo cache.`}/>
        <h2>fetch</h2>
        <Conseptos texto={`Con esto mostraremos la informacion del alamacenamiento cache.`}/>
        <JavaScropt codigo={`self.addEventListener("fetch",e=>{
    e.respondWith(async function(params) {
        const respuesta = await caches.match(e.request);
        if (respuesta) return respuesta
        return e.request
    })
})`}/>
        <h2>codigo completo</h2>
        <JavaScropt codigo={`let nombre = "version 1";

self.addEventListener("install",e=>{
    caches.open(nombre).then(cache=>{
        cache.add("Cachear sitio web y mostrarlo offline.html").then(res=>{
            console.log("informacion cacheada.")
        }).catch(e=>{
            console.log(e);
        })
    })
})
    
self.addEventListener("actovate",e=>{
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if (cache != nombre) {
                    console.log("el cache anterior fue eliminado.")
                    return caches.delete(cache);
                }
            })
        )
    })
})
self.addEventListener("fetch",e=>{
    e.respondWith(async function(params) {
        const respuesta = await caches.match(e.request);
        if (respuesta) return respuesta;
        return e.request
    })
})`}/>
      </main>
      <Footer/>
    </>
  );
}

export default CachWebJs;