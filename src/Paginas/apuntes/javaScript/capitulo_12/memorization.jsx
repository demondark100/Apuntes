import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function MemorizationJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Acorta los tiempos de ejecucion de las funciones.`,
        lenguage: "JavaScropt",
        codigo: `let cache = [];
const memorizer = funct =>{
  return e =>{
    const index = e.toString();
    if (cache[index] == undefined) {
      cache[index] = funct(e);
    }
    return cache[index];
  }
}

const procesoLento = num => {
  const a = 20;
  const b = 12;
  let c = 0;
  for (let i = num - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      c += a * b; 
    }
  }
  return c;
}

console.log("sin memorizacion");

const date1 = new Date();
procesoLento(60000);
console.log(new Date() - date1);
const date2 = new Date();
procesoLento(60000);
console.log(new Date() - date2);
const date3 = new Date();
procesoLento(60000);
console.log(new Date() - date3);



console.log("con memorizacion")

const memo = memorizer(procesoLento)

const date4 = new Date();
memo(60000);
console.log(new Date() - date4);
const date5 = new Date();
memo(60000);
console.log(new Date() - date5);
const date6 = new Date();
memo(60000);
console.log(new Date() - date6);`
      }]}/>
      <main>
        <h1>Memorization</h1>
        <Conseptos texto={`"Memoization" es un proceso que acorta los tiempos de ejecucion para permitir que la experiencia del ususario sea mas obtima.`}/>
        <h2>proceso lento</h2>
        <Conseptos texto={`Aqui hicimos una funcion que hace un proceso demasiado lento.`}/>
        <JavaScropt codigo={`const procesoLento = num => {
    const a = 20;
    const b = 12;
    let c = 0;
    for (let i = num - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            c += a * b; 
        }
    }
    return c;
}`}/>
        <h2>cuanto tarda?</h2>
        <Conseptos texto={`Aqui llamaremos a la funcion que creamos y veremos cuanto tarda en hacer el proceso.`}/>
        <JavaScropt codigo={`const date1 = new Date();
procesoLento(60000);
console.log(new Date() - date1);
const date2 = new Date();
procesoLento(60000);
console.log(new Date() - date2);
const date3 = new Date();
procesoLento(60000);
console.log(new Date() - date3);`}/>
        <h2>funcion memorizar</h2>
        <Conseptos texto={`Aqui crearemos la funcion para que se puedan almacenar los datos que se repiten.`}/>
        <JavaScropt codigo={`let cache = [];
const memorizer = funct =>{
    return e=>{
        const index = e.toString();
        if (cache[index] == undefined) {
            cache[index] = funct(e);
        }
        return cache[index];
    }
}`}/>
        <h2>llamar memorizar</h2>
        <Conseptos texto={`El primero tardara porque se hace el proceso de forma lenta pero los otros dos no tardaran nada ya que se memorizaron/guardaron para que se ejecute de forma instntanea.`}/>
        <JavaScropt codigo={`const memo = memorizer(procesoLento)

const date1 = new Date();
memo(60000);
console.log(new Date() - date1);
const date2 = new Date();
memo(60000);
console.log(new Date() - date2);
const date3 = new Date();
memo(60000);
console.log(new Date() - date3);`}/>
        <h2>codigo completo</h2>
        <Conseptos texto={`Es recomendable usarlo cuando sabemos que algo hara un proceso con datos repetitivos.`}/>
        <JavaScropt codigo={`let cache = [];
const memorizer = funct =>{
    return e =>{
        const index = e.toString();
        if (cache[index] == undefined) {
            cache[index] = funct(e);
        }
        return cache[index];
    }
}

const procesoLento = num => {
    const a = 20;
    const b = 12;
    let c = 0;
    for (let i = num - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            c += a * b; 
        }
    }
    return c;
}

console.log("sin memorizacion");

const date1 = new Date();
procesoLento(60000);
console.log(new Date() - date1);
const date2 = new Date();
procesoLento(60000);
console.log(new Date() - date2);
const date3 = new Date();
procesoLento(60000);
console.log(new Date() - date3);



console.log("con memorizacion")

const memo = memorizer(procesoLento)

const date4 = new Date();
memo(60000);
console.log(new Date() - date4);
const date5 = new Date();
memo(60000);
console.log(new Date() - date5);
const date6 = new Date();
memo(60000);
console.log(new Date() - date6);`}/>
      </main>
      <Footer/>
    </>
  );
}

export default MemorizationJs;