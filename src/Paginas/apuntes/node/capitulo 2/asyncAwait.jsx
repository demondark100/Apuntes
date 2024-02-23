import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

function AsyncAwaitNode() {
  return (
    <>
      <main>
        <h1>async y await</h1>
        <Conseptos texto={`Este tema tambien lo vimos en javaScript nativo pero lo veremos aqui tambien.`}/>
        <h2>sincrono y asincrono</h2>
        <ol>
          <li>
            <Conseptos texto={`Sincrono: Es la ejecucion del codigo en orden osea de arriba a abajo hasta llegar a un resultado.`}/>
            <JavaScropt codigo={`console.log("hola mundo");
console.log("sigo aqui mundo");
console.log("adios mundo");`}/>
            <Consola codigo={`> node app.js
hola mundo
sigo aqui mundo
adios mundo`}/>
          </li>
          <li>
            <Conseptos texto={`Asincrono: Ejecuta el codigo de arriba abajo sin embargo si alguna linea de codigo se tarda en ejecutarse se ejecutara al final.`}/>
            <JavaScropt codigo={`console.log("hola mundo");
setTimeout(()=>console.log("sigo aqui mundo"),2000);
console.log("adios mundo");`}/>
            <Consola codigo={`> node app.js
hola mundo
adios mundo
sigo aqui mundo`}/>
          </li>
        </ol>
        <Conseptos texto={`Ahora que sabemos esto podemos pasar a async y await.`}/>
        <Sintaxis codigo={`// funcion normal
async function nombre(){
  await funcion()
}

// funcion flecha
const nombre=async()=>{
  await funcion()
}`}/>
        <Conseptos texto={`Async y await siempre van a funcionar con las promesas para que algun codigo pase de ser asincrono a sincrono.`}/>
        <JavaScropt codigo={`const probando = ()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("probando...")
      resolve();
    },2000)
  })
}
const ejecucion=async()=>{
  console.log("hola mundo");
  await probando()
  console.log("adios mundo")
}

ejecucion()`}/>
        <Consola codigo={`> node app.js
hola mundo
sigo aqui mundo
adios mundo`}/>
          <Conseptos texto={`noda: Las promesas necesitan ser resueltas de forma obligatoria para que funcione el sincronismo de forma correcta.`}/>
      </main>
      <Footer />
    </>
  );
}

export default AsyncAwaitNode;