import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function AwaitAsyncJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto volveremos asincrona una funcion sincrona.`,
        lenguage: "JavaScropt",
        codigo: `async function mostrar_1(){
  await obtenerResultado();
}
const mostrar_2=async()=>{
  await obtenerResultado();
}`
      }]}/>
      <main>
        <h1>async await</h1>
        <Conseptos texto={`Un poco de contexto:
No siempre recibimos una respuesta rapida de los servidores por eso es que llegaron await y async para solucionar esto ejemplo del problema que trae no usar await y async.

Con el siguiente codigo vamos a simular el tiempo de respuesta de un servidor.`}/>
        <JavaScropt codigo={`function info(numeros) {
    return new Promise((resolve,reject)=>{ 
        setTimeout(() => {
            resolve(numeros)
        }, Math.random()*500);
    })
}
info("1").then(mostrar=>{console.log(mostrar)});
info("2").then(mostrar=>{console.log(mostrar)});
info("3").then(mostrar=>{console.log(mostrar)});
info("4").then(mostrar=>{console.log(mostrar)});
info("5").then(mostrar=>{console.log(mostrar)});`}/>
        <Conseptos texto={`En teoria deberia devolver los numeros en orden sin embargo los devuelve de forma aleatoria cosa que no deberia suceder.

Por eso tenemos a "await y async" para que sea completamente asincrono el tiempo de respuesta del servidor.`}/>
        <h2>formas de integrar await async</h2>
        <h3>funcion tradicional</h3>
        <Sintaxis codigo={`async function mostrar_1(){
    await hacer algo
}`}/>
        <h3>funcion flecha</h3>
        <Sintaxis codigo={`const mostrar_2 = async()=>{
    await hacer algo
}`}/>
        <h2>mejorar 1mer codigo</h2>
        <JavaScropt codigo={`function info(numeros) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => { 
            resolve(numeros)
        }, Math.random()*500);
    })
} 
const mostrar=async()=>{
    let numero_1 = await info("1");
    let numero_2 = await info("2");
    let numero_3 = await info("3");
    let numero_4 = await info("4");
    let numero_5 = await info("5");
    console.log(numero_1);
    console.log(numero_2);
    console.log(numero_3);
    console.log(numero_4);
    console.log(numero_5);
}
mostrar()`}/>
        <Conseptos texto={`De esta manera mostrara los datos de forma correcta osea de forma asincrona ya no se mostraran los datos de manera aleatoria.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default AwaitAsyncJs;