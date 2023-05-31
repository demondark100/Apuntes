import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function ServiWorkJs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>Service Workers</h1>
        <Conseptos texto={`Aqui una forma grafica del como es Service Workers.`}/>
        <img src="https://www.arsys.es/blog/file/uploads/2018/03/serviceworker01.jpg" alt="service workers" style={{width: "75%",margin: "auto",marginTop: "5%"}}/>
        <Conseptos texto={`Service Workers en un archivo js que esta a la escucha de varios sucesos es como un intermediario entre el navegador y el sitio web.`}/>
        <h2>register</h2>
        <Conseptos texto={`Primero vamos a registrar nuestro service Worker
1: crear un nuevo archivo service worker podemos ponerle cualquier nombre.
2: registrar service worker esto se revisa en aplicacion de la consola.`}/>
        <JavaScropt codigo={`navigator.serviceWorker.register("svw.js");

// aqui ya estamos registrando nuestro service worker en este caso se llama svw.js.`}/>
        <Conseptos texto={`En los service workers es recomendable trabajar con self en vez de this ejemplo.

"service worker" tiene un ciclo de vida primero se istala despues esta activado , el evento install es el primero que tiene un service worker.`}/>
        <h2>install</h2>
        <Conseptos texto={`Este evento de instalar solo se ejecuta una vez despues se activa.`}/>
        <JavaScropt codigo={`self.addEventListener("install",e=>{
    console.log("instalando service worker.")
})`}/>
        <h2>activate</h2>
        <Conseptos texto={`Con "activate" estamos verificando que se active el service worker.`}/>
        <JavaScropt codigo={`self.addEventListener("activavate",()=>{
    console.log("el service worker esta activo.")
})`}/>
        <h2>error</h2>
        <Conseptos texto={`Este evento se ejecutara en caso de que haya un error.`}/>
        <JavaScropt codigo={`self.addEventListener("error",()=>{
    console.log("el hubo un error.")
})`}/>
        <h2>evento fetch</h2>
        <Conseptos texto={`Este evento verifica que se este enviando una solicitud a ese service worker.`}/>
        <JavaScropt codigo={`self.addEventListener("fetch",e=>{
    console.log("se esta interseptando la peticion.")
})

// esto interseptara las peticiones una y otra vez.`}/>
        <h2>metodos</h2>
        <h2>2: ready</h2>
        <Conseptos texto={`"ready" verificara que service worker ya haya cargado en la pagina esto trabaja con promesas.`}/>
        <JavaScropt codigo={`navigator.serviceWorker.ready
    .then((res)=>{
        console.log(res.active);
    });`}/>
        <Conseptos texto={`Enviar mensaje desde javaScript a service worker.`}/>
        <h2>2: postMessage</h2>
        <h3>javaScript principal</h3>
        <Conseptos texto={`Ahora si podemos enviar un mensaje con "postMessage" al service worker.`}/>
        <JavaScropt codigo={`navigator.serviceWorker.ready
    .then((res)=>{
        res.active.postMessage("se enviara un mensaje al service worker.");
    });`}/>
        <h3>service worker</h3>
        <JavaScropt codigo={`self.addEventListener("message",e=>{
    console.log(\`se recibio el siguiente mensaje ${"${e.data}"}\`);
});`}/>
        <Conseptos texto={`Enviar mensaje desde service worker a javaScript.`}/>
        <h3>service worker</h3>
        <JavaScropt codigo={`self.addEventListener("message",e=>{
    e.source.postMessage("se enviara un mensaje desde aqui.");
})`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`navigator.serviceWorker.addEventListener("message",e=>{
    console.log(\`se revibio el siguiente mensaje ${"${e.data}"}\`);
});`}/>
        
      </main>
      <Footer/>
    </>
  );
}

export default ServiWorkJs;