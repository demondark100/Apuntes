import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function OpeSpread() {
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Esto desestructura un arreglo.`,
        lenguage: "JavaScropt",
        codigo: `let arr1 = ["manzana","pera","naranja"];
let arr2 = ["sandia","melon","fresa"];
let arr3 = [...arr1,...arr2]
console.log(arr3)`
      }]}/>
      <main>
        <h1>Operador spread</h1>
        <h2>sin operador spread</h2>
        <JavaScropt codigo={`let valor1 = "valor 1";
let valor2 = "valor 2";
let valor3 = "valor 3";
console.log(valor1,valor2,valor3);
// es mucha cosa pero se puede simplificar mas con el operador spread.`}/>
        <JavaScropt codigo={`let arr = ["valor 1","valor 2","valor 3"];
console.log(...arr)`}/>
        <Conseptos texto={`Con el operador spread tambien podemos destructurar de forma mas sencilla a los arreglos.`}/>
        <h2>ejemplo</h2>
        <JavaScropt codigo={`let arr1 = ["manzana","pera","naranja"];
let arr2 = ["sandia","melon","fresa"];
arr1.push(...arr2);
console.log(arr1)`}/>
        <Conseptos texto={`Y si queremos concatenar arreglos.`}/>
        <h2>ejemplo</h2>
        <JavaScropt codigo={`let arr1 = ["manzana","pera","naranja"];
let arr2 = ["sandia","melon","fresa"];
let arr3 = [...arr1,...arr2]
console.log(arr3)`}/>
      </main>
      <Footer/>
    </>
  );
}

export default OpeSpread;