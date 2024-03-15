import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function PromesasJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto manejaremos funciones asincronas y errores.`,
        lenguage: "JavaScropt",
        codigo: `let music = prompt("introduce una musica");
const promesa = new Promise((resolve,reject)=>{
  if(music == "Make you mine"){ 
    resolve("esta musica es muy buena"); // resuelve la promesa, es obligatorio poner resolve.
  } else{
    reject("no conozco esta musica lo siento"); // rechaza la promesa.
  }
}).then(mostrar=>{console.log(mostrar); // muestra la promesa resuelta.
}).catch(error=>{console.log(error)}); // muestra la promesa rechazada.`
      }]}/>
      <main>
        <h1>promesas</h1>
        <Conseptos texto={`Las promesas nos sirven para manejar errores de forma mas sensillas y tambien para manejar tareas asincronas que veremos mas adelante.

Estos se componen por:
callbacks , trycatch bueno solo el catch para atrapar el error.`}/>
        <Sintaxis codigo={`variable = crear promesa((resolver,rechazar)=>{
    resolver("dar un mensaje o hacer algo");
    rechazar("dar un mensaje o hacer algo");
})`}/>
        <JavaScropt codigo={`let music = "Make you mine";
const promesa = new Promise((resolve,reject)=>{
    if(music == "Make you mine"){
        resolve("esta musica es muy buena")
    } else{ 
        reject("no conozco esta musica lo siento")
    }
})`}/>
        <h2>then catch</h2>
        <Conseptos texto={`Para mostrar los mensajes o resultado de lo que pase en el codigo se hace esto.`}/>
        <Sintaxis codigo={`const promesa = new Promise((resolve,reject)=>{ 
  if(music == "Make you mine"){
    resolve("esta musica es muy buena")
  } else{
    reject("no conozco esta musica lo siento")
  }
}).mostrar resolver ((callback / parametro)=>{
  mostrar parametro
}). mostrar rechazo ((callback / parametro)=>{
  mostrar parametro
})`}/>
        <JavaScropt codigo={`let music = prompt("introduce una musica");
const promesa = new Promise((resolve,reject)=>{
  if(music == "Make you mine"){
    resolve("esta musica es muy buena")
  }else{
    reject("no conozco esta musica lo siento")
  }
}).then((mostrar_1)=>{
    console.log(mostrar_1)
}).catch((error_2)=>{
    console.log(error_2)
})`}/>
        <h2>reducir codigo</h2>
        <JavaScropt codigo={`let music = prompt("introduce una musica");
const promesa = new Promise((resolve,reject)=>{
  if(music == "Make you mine"){ 
    resolve("esta musica es muy buena")
  } else{
    reject("no conozco esta musica lo siento")
  }
}).then(mostrar=>{console.log(mostrar)
}).catch(error=>{console.log(error)})`}/>
      </main>
      <Footer />
    </>
  );
}

export default PromesasJs;