import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

function TimersNode() {
  return (  
    <>
      <main>
        <h1>Modulo timers</h1>
        <Conseptos texto={`Esto ya lo vimos en javaScript pero un repaso no viene mal asi que volvamos a ver esta funcion que sirve para poner un temporizador para que se ejecute un codigo en determinado tiempo.

Recordemos que para esta funcion debemos pasarle el tiempo en milisegundos por lo tano si queremos "1 segundo" deberiamos pasar como parametro "1000" y asi sucesivamente.`}/>
        <h2>setTimeout</h2>
        <Conseptos texto={`Existen dos formas de usar esta funcion.`}/>
        <ol>
          <li>funcion flecha</li>
          <li>funcion separada</li>
        </ol>
        <h3>funcion flecha</h3>
        <JavaScropt codigo={`setTimeout(()=>{
  console.log("hola mundo");
},2000)`}/>
        <h3>funcion separada</h3>
        <Sintaxis codigo={`setTimeOut(funcion,tiempo,argumentos de la funcion)`}/>
        <JavaScropt codigo={`function Saludo(name){
  console.log(\`hola ${"${name}"}\`);
}
setTimeout(saludo,2000,"mundo")`}/>
        <Consola codigo={`node app.js`}/>
        <h2>setImmediate</h2>
        <Conseptos texto={`Este temporizador hara que el codigo se ejecute cuando se acaben de ejecutar las funciones asincronas.
Antes de continuar debemos saber que "console.log()" es una funcion asincrona.`}/>
        <Sintaxis codigo={`setImmediate(funcion,argumentos de la funcion)`}/>
        <JavaScropt codigo={`function saludo(name){
  console.log(\`Hola ${"${name}"}\`);
}
console.log("Antes de setImmediate");
setImmediate(saludo,"mundo");
console.log("despues de setImmediate");`}/>
        <Consola codigo={`Antes de setImmediate
despues de setImmediate
Hola mundo`}/>
        <h2>setInterval</h2>
        <Conseptos texto={`Esta funcion ejecutara un codigo de forma repetida cada sierto tiempo , tambien podemos indicar cuando queremos que se deje de ejecutar ese bloque de codigo.

A diferencia de las otras de timers necesitan guardarse en una variable para que podamos cortar cuando la ejecucion del codigo cuando queramos.

Ahora veremos un ejemplo.`}/>
        <JavaScropt codigo={`let contador = 0;
const contar = setInterval(() => {
  contador++;
  console.log(contador);
  if (contador == 5) {
    clearInterval(contar);
  }
}, 1000);`}/>
        <Consola codigo={`> node app.js
1
2
3
4
5`}/>
      </main>
      <Footer />
    </>
  );
}

export default TimersNode;