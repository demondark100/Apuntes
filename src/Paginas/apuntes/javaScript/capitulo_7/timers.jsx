import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function TimersJs() {
  const mostrar=()=>{
    setTimeout(() => {
      alert("hola mundo")
    }, 2000);
  }
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Cuando pase sierto tiempo alguna funcion se ejecutara.`,
        lenguage: "JavaScropt",
        codigo: `setTimeout(saludo,2000,"Juan"); // la funcion se ejecutara dentro de 2 segundos.
setTimeout(()=>console.log("hola"),3000); // la funcion se ejecutara dentro de 2 segundos.
clearTimeout(saludar); // detiene un eventos antes que se ejecute.
let intervalo = setInterval(saludar,2000,Melisa"); // se ejecutara una funcion de forma infinata cada 2 segundos.
clearInterval(intervalo); // detiene la ejecucion de setInterval.

function saludar(name){
  console.log(\`hola ${"${name}"}\`);
}`
      }]}/>
      <main>
        <h1>timers</h1>
        <Conseptos texto={`Los timers nos sirve para ejecutar una funcion en un tiempo determinado , Nosotros podemos decidir en que mmomento se ejecutara la funcion.

        Los timers funcionan con milisegundos ejemplo:
        1 segundo seria 1000.
        2 segundos seria 2000.
        Y asi sucesivamente.`}/>
        <h2>funcion rapida</h2>
        <Conseptos texto={`Podemos crear un timer y escribir la funcion alli mismo.`}/>
        <Sintaxis codigo={`establecerTiempo(()=>{ 
    alert("hola mundo");
}, tiempo en milisegundos)`}/>
        <JavaScropt codigo={`setTimeout(() => { 
    alert("hola mundo");
}, 2000);`}/>
        <h3>resultado</h3>
        <Conseptos texto={`Has click en "mostrar" y aparecera "hola mundo" en 2 segundos.`}/>
        <button onClick={mostrar}>mostrar</button>

        <h2>llamar funcion</h2>
        <Sintaxis codigo={`funcion nombre(){
    alert("hola mundo");
}
establecerTiempo(nombre, tiempo en milisegundos)`}/>
        <JavaScropt codigo={`function saludar(){
    document.write("hola mundo");
}
setTimeout(saludar,2000)`}/>
        <h3>resultado</h3>
        <Conseptos texto={`has click en "mostrar" y aparecera "hola mundo" en 2 segundos.`}/>
        <button onClick={mostrar}>mostrar</button>

        <h2>clearTimeout</h2>
        <JavaScropt codigo={`let tiempo = setTimeout(() => { 
    console.log("xd")
}, 2000);
clearTimeout(tiempo);`}/>
        <Conseptos texto={`"clearTimeout" servira para detener el evento antes de que se ejecute.`}/>
        
        <h2>setInterval</h2>
        <JavaScropt codigo={`setInterval(() => { 
    console.log("hola mundo");
}, 2000);`}/>
        <Conseptos texto={`"setInterval" es un evento que se ejecutara muchas veces en este caso se ejecutara cada dos segundos.`}/>

        <h2>clearInterval</h2>
        <JavaScropt codigo={`const intervalo = setInterval(() => { 
    alert("hola mundo");
}, 2000); 
clearInterval(intervalo);`}/>
        <Conseptos texto={`"clearInterval" detendra el bucle que se crea con "setInterval".`}/>
      </main>
      <Footer/>
    </>
  );
}

export default TimersJs;