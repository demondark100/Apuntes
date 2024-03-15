import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function SwitchJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Esta es una sentencia similar a "if".`,
        lenguage: `JavaScropt`,
        codigo: `let fruta = prompt("¿Que fruta te gusta?");
fruta = fruta.toLowerCase();
switch(fruta){
  case "manzana":
    alert("la manzana es deliciosa");
    break;
  case "naranja":
    alert("La naranja es la fruta preferida de muchos");
    break;
  default:
    alert(\`la fruta ${"${fruta}"} no esta en nuestra base de datos.\`)
}`
      }]}/>
      <main>
        <h1>switch</h1>
        <Conseptos texto={`Switch es similar a los if else solo que la sintaxis es algo distinta osea pasamos de esto`}/>
        <Sintaxis codigo={`Si (condicional){
  escribir codigo
} sino si (condicional) {
  escribir codigo
} sino {
  escribir codigo
}`}/>
        <Conseptos texto={`A esto.`}/>
        <Sintaxis codigo={`variable = "cadena";
interructor(variable){
  en el caso "string":
    escribir codigo;
    finalizar;
  el el caso "numero":
    escribir codigo
    finalizar;
  por defecto:
    escribir codigo;
}`}/>
      <Conseptos texto={`Aqui "en el caso" reemplaza a "si" y "sino si" , "po defecto" reemplaza a "sino".

Debemos poner finalizar para indicar al lenguaje que se ejecute el codigo hasta donde le indiquemos , En simples palabras es para que el codigo llegue hasta sientro punto`}/>
      <h2>usemoslo</h2>
      <JavaScropt codigo={`let fruta = "manzana";
switch(fruta){
  case "pera":
    alert("esto es una pera");
    break;
  case "manzana":
    alert("esto es una manzana");
    break;
  default:
    alert("esta fruta aun no se ha programado")
}`}/>
      </main>
      <Footer/>
    </>
  );
}

export default SwitchJs;