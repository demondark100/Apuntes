import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function ArreglosJavaScript() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Los arreglos pueden guardar varios datos cosa que una variable no puede.`,
        lenguage: "JavaScropt",
        codigo: `let frutas = ["manzana","sandia","pera","durazno","naranja","telefono"];
console.log(frutas[0]) // manzana
console.log(frutas[1]) // sandia
console.log(frutas[2]) // pera
console.log(frutas[3]) // durazno
console.log(frutas[4]) // naranja
frutas[4] = "granadilla";
console.log(frutas[4]) // granadilla`
      }]}/>
      <main>
        <h1>arreglos</h1>
        <Conseptos texto={`La sintaxis de los arreglos en este lenguaje no cambian en absolutamente nada a comparacion de la sintaxis de la logica , Lo unico diferente seria como declaramos la variable que guardara el arreglo.`}/>
        <JavaScropt codigo={`let arreglo1 = ["dato 1" , "dato 2"];
const arreglo2 = ["dato 1" , "dato 2"];`}/>
        <h2>ejemplo</h2>
        <JavaScropt codigo={`let juegos = [ 
    "gta",
    "left 4 dead",
    "tekken",
    "agar.io",
    "plantas vs zombies"
]; 
console.log(juegos[0]); 
//resultado: "gta"

console.log(juegos[1]); 
//resultado: "left 4 dead"

console.log(juegos[2]); 
//resultado: "tekken"

console.log(juegos[3]); 
//resultado: "agar.io"

console.log(juegos[4]); 
//resultado: "plantas vs zombies"`}/>
        <h2>arreglos bidimensionales</h2>
        <Conseptos texto={`Aqui tambien la sintaxis es muy similar al de la logica solo que cambia la sintaxis del como creamos la variable que guardara el arreglo bidimensional.`}/>
        <JavaScropt codigo={`let colores = [
    ["rojo","verde"],
    ["azul","amarillo","negro"],
    ["blanco","celeste"],
    "morado"
];

console.log(colores[3]);
//resultado: "morado"

console.log(colores[0][0]);
//resultado: "rojo"

console.log(colores[0][1]);
//resultado: "verde"

console.log(colores[1][0]);
//resultado: "azul"

console.log(colores[1][1]);
//resultado: "amarillo"

console.log(colores[1][2]);
//resultado: "negro"

console.log(colores[2][0]);
//resultado: "blanco"

console.log(colores[2][1]);
//resultado: "celeste"`}/>
        <h2>constante</h2>
        <Conseptos texto={`¿Y que pasa si intentamos cambiar el valor de una posision de un arreglo en una variable constante?

Pongamoslo a prueba :v`}/>
        <JavaScropt codigo={`const arreglo = ["dato 1" , "dato 2" , "dato 3"];
arreglo[2] = "este dato me cae mal >:v";
console.log(arreglo);
// resultado: 
// 0: "dato 1"
// 1: "dato 2"
// 2: "este dato me cae mal >:v"`}/>
        <Conseptos texto={`No mamen si deja cambiar XD.
¿Y porque?
Simple mi estimado Mac Fly En JavaScript, al declarar un arreglo con const, la referencia al arreglo en sí no puede ser cambiada. Sin embargo, los valores dentro del arreglo sí pueden ser modificados individualmente.`}/>
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Dejaria un proyecto pero no se puede hacer mucho sin los bucles.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ArreglosJavaScript;