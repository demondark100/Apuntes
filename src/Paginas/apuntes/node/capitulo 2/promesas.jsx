import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function PromesasNode() {
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Una promesa sirve para manejar tareas asincronas.`,
        "lenguage": "JavaScropt",
        "codigo": `const promesa = new Promise((resolve,reject)=>{
  const estado = Math.random() < 0.5;
  estado ?
    resolve("promesa exitosa") :
    reject("promesa rechazada")
})
const aceptado=(aceptado)=>console.log(aceptado)
const rechazado=(rechazado)=>console.log(rechazado)
promesa.then(aceptado,rechazado)`
      }]}/>
      <main>
        <h1>Promesas</h1>
        <Conseptos texto={`Este consepto es de javaScript nativo sin embargo aremos un pequeño repazo.

Las promesas son un objeto que usan callbacks , estos reciben 2 parametros por defecto  estos son "resolve" y "reject".`}/>
          <ol>
            <li>
              <Conseptos texto={`resolve: Este callback se usara cuando la promesa haya sido resuelta.`}/>
            </li>
            <li>
              <Conseptos texto={`reject: Este callback se usara cuando la promesa haya sido rechazada.`}/>
            </li>
          </ol>
          <Conseptos texto={`Tambien podemos controlar el exito o rechazo de nuestra promesa esto se hace con otros dos callbacks.`}/>
          <ol>
            <li>
              <Conseptos texto={`then: Con este callback manejaremos el exito de nuestra promesa.`}/>
            </li>
            <li>
              <Conseptos texto={`catch: Con este callback maneajaremos el rechazo en nuestra promesa.`}/>
            </li>
          </ol>
          <Sintaxis codigo={`const promesa = new Promise((exito,rechazo)=>{
  if(estado){
    exito("promesa exitosa");
  } else {
    rechazo("promea")
  }
}).then((manejo)=>{
  console.log(manejo)
}).catch((manejo)=>{
  console.log(manejo)
})`}/>
        <JavaScropt codigo={`const promesa = new Promise((resolve,reject)=>{
  const estado = Math.random() < 0.5;
  if(estado){
    resolve("promesa exitosa");
  }else{
    reject("promesa rechazada")
  }
}).the((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})`}/>
        <Consola codigo={`> node app.js
promesa exitosa`}/>
<Consola codigo={`> node app.js
promesa rechazada`}/>
        <Conseptos texto={`Tambien hay otra forma de manejar el error pero es algo raro para mi y nunca lo uso.
Lo unico que cambia en esta nueva sintaxis es que en "then" se pone dos parametros que seran funciones para manejar el exito o el rechazo de la promesa quitando el uso de catch.`}/>
        <Sintaxis codigo={`.then(funcion para manejo de exito,funcion para manejo de rechazo)`}/>
        <JavaScropt codigo={`const promesa = new Promise((resolve,reject)=>{
  const estado = Math.random() < 0.5;
  if(estado){
    resolve("promesa exitosa");
  } else {
    reject("promesa rechazada");
  }
})

const aceptado=(aceptado)=>{
  console.log(aceptado)
}
const rechazado=(rechazado)=>{
  console.log(rechazado)
}

promesa.then(aceptado,rechazado)`}/>
        <Consola codigo={`> node app.js
promesa exitosa`}/>
<Consola codigo={`> node app.js
promesa rechazada`}/>
      </main>
      <Footer />
    </>
  );
}

export default PromesasNode;