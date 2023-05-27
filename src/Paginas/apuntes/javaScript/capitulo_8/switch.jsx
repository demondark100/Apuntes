import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function SwitchJs() {
  return (  
    <>
      <Menu2 />
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