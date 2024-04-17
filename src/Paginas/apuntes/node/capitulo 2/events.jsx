import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function EventsNode() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Estos eventos escuchan si algo ocurrio en la aplicacion.`,
        "lenguage": "JavaScropt",
        "codigo": `const EventsEmitter = require("events");
const manejoEventos = new EventsEmitter();
manejoEventos.on("saludo",(nombre)=>{
  console.log(\`el uuario ${"${nombre}"} saludo.\`)
})
manejoEventos.emit("saludo","Martin");
`
      }]}/>
      <main>
        <h1>Modulo de eventos</h1>
        <Conseptos texto={`Los eventos en Node.js son señales que indican que algo ha ocurrido en tu programa. Puedes emitir eventos cuando sucede algo importante, y otros componentes de tu programa pueden estar atentos a estos eventos y reaccionar en consecuencia. Esto facilita la comunicación y la coordinación entre diferentes partes de tu aplicación de forma asincrónica.`}/>
        <ol>
          <li>
            <h2>Emitir</h2>
            <Conseptos texto={`Emitir eventos: Emitir eventos significa enviar una señal o notificación de que algo ha ocurrido en tu programa. En Node.js, puedes emitir eventos utilizando un objeto emisor. Para ello, llamas al método emit() en el objeto emisor y proporcionas el nombre del evento que deseas emitir, junto con cualquier dato adicional que desees pasar a los manejadores de eventos que estén escuchando ese evento.`}/>
          </li>
          <li>
            <h2>Escuchar eventos</h2>
            <Conseptos texto={`Escuchar eventos: Escuchar eventos implica registrar funciones que serán ejecutadas cuando ocurra un evento específico. En Node.js, puedes escuchar eventos utilizando el método on() en un objeto emisor. Simplemente proporcionas el nombre del evento al que deseas suscribirte y una función que se ejecutará cuando se emita ese evento.`}/>
          </li>
        </ol>

        <h2>Uso del modulo eventos</h2>
        <ol>
          <li>
            <h3>importar eventos</h3>
            <JavaScropt codigo={`const EventsEmitter = require("events");`}/>
            <Conseptos texto={`Te recomiendo que a la variable la llames como "EventsEmitter" para guiarse mejor pero puedes ponerle cualquier otro nombre pero es importante que la variable tenga una matyuscula al inicio ya que events es un objeto y debemos usarlo como tal.`}/>
          </li>
          <li>
            <h3>usar objeto</h3>
            <JavaScropt codigo={`const manejoEventos = new EventsEmitter();`}/>
            <Conseptos texto={`De esta manera ya podemos trabajar con events.`}/>
          </li>
          <li>
            <h3>escuchar evento</h3>
            <Sintaxis codigo={`manejoEventos.on("evento a escuchar",funcion)`}/>
            <JavaScropt codigo={`manejoEventos.on("hola",(nombre)=>{
  console.log(\`el uuario ${"${nombre}"} saludo.\`)
})`}/>
          </li>
          <li>
            <h3>Emitir evento</h3>
            <Sintaxis codigo={`manejoEventos.emit("evento a escuchar",parametros)`}/>
            <JavaScropt codigo={`manejoEventos.emit("evento a escuchar","Persona")`}/>
            <Conseptos texto={`En la parte de parametros podemos pasar cuantos parametros queramos , en el evento a escuchar la pabra debe de ser la misma tanto en en como en emit.`}/>
          </li>
        </ol>
        <Conseptos texto={`Ahora aremos una pequeña tienda para tener un ejemplo mas claro.`}/>
        <JavaScropt codigo={`const EventEmitter = require("events");
const manejo = new EventEmitter();
manejo.on("compra",(monto,cantidad)=>{
  console.log(\`
    Compraste: ${"${cantidad}"} de productos.
    montro a pagar: ${"${monto}"}.
  \`)
})
manejo.emit("compra",$800,5)`}/>
      </main>
      <Footer />
    </>
  );
}

export default EventsNode;