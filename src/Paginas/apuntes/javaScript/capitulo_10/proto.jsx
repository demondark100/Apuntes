import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

function ProtoJs() {
  return (  
    <>
      <main>
        <h1>protopipos</h1>
        <Conseptos texto={`Todo en javaScript es un objeto por ejemplo una cadena de texto o nunmero.`}/>

        <Sintaxis codigo={`variable.__proto__`}/>
        
        <h2>numero</h2>
        <JavaScropt codigo={`let number = 15;
console.log(number.__proto__);`}/>
        <h2>string</h2>
        <JavaScropt codigo={`let string = "string";
console.log(string.__proto__);`}/>
        <h2>objeto</h2>
        <JavaScropt codigo={`let objeto = {
    "number": "15"
}
console.log(objeto);`}/>
        <Conseptos texto={`Esto en la consola mos mostrara algo como:`}/>
        <Sintaxis codigo={`[[Prototype]]:Object`}/>
        <Conseptos texto={`Esto es el prototipo en cada objeto que creemos.`}/>

        <h2>prototipo</h2>
        <Conseptos texto={`Para acceder a un prototipo que nosotros creamos:`}/>
        <Sintaxis codigo={`variable.prototype`}/>
        <Conseptos texto={`Para acceder a un prototipo que ya este creado o eredemos es:`}/>
        <Sintaxis codigo={`variable.__proto__`}/>

        <h2>ejemplo de prototype.</h2>
        <JavaScropt codigo={`let funcion = function(){}
console.log(funcion.prototype);`}/>
        <h2>ejemplo de __proto__</h2>
        <JavaScropt codigo={`let objeto = {
    "numero": "35"
}
console.log(objeto.__proto__);`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ProtoJs;