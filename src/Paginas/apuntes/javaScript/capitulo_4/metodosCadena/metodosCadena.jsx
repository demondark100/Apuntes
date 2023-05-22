import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function MetodosCadenaJavaScript() {
  return (  
    <>
    <Menu2/>
    <main>
      <h1>Metodos de cadena</h1>
      <Conseptos texto={`JavaScript cuenta con metodos de cadena para poder facilitar muchas tareas que podrian ser demasiado complicadas.`}/>
      <h2>Empezamos:</h2>
      <h2>startsWith y endsWith</h2>
      <h3>startsWith</h3>
      <JavaScropt codigo={`let cadena1 = "hola mundo";
cadena1.startsWith("h");

//resultado: true 

let cadena2 = "hola mundo";
cadena2.startsWith("a");

//resultado: false;`}/>
      <Conseptos texto={`Esto nos servira para saber si una cadena inicia con un caracter en especifico.
si inicia con un caracter en especifico dira "true".
si no inicia con un caracter es especifico dira "false".`}/>
      <h3>endsWith</h3>
      <JavaScropt codigo={`let cadena1 = "mundo";
cadena1.endsWith("o"); 

//resultado: true 

let cadena2 = "mundo";
cadena2.endsWith("e"); 

//resultado: false`}/>
      <Conseptos texto={`Esto nos servira para saber si una cadena finaliza con algun caracter en especifico.
si finaliza con un caracter en especifico dira "true".
si no finaliza con un caracter en especifico dira "false".`}/>
      <h2>includes</h2>
      <JavaScropt codigo={`let cadena1 = "hola mundo XD";
cadena1.includes("l");

//resultado: true

let cadena2 = "hola mundo XD";
cadena2.includes("z");

//resultado: false`}/>
      <Conseptos texto={`Includes nos permitira saber si una cadena contiene un caracter o una cadena de texto en especifico a diferencia de startsWith y endsWith este lo detectara desde cualquier posision no solo desde el inicio o el final.
si incluye el caracter o cadena de texto dira "true".
si no incluye el caracter o cadena de texto dira "false".`}/>
      <h2>indexOf y lastIndexOf</h2>
      <h3>indexOf</h3>
      <JavaScropt codigo={`let cadena = "hola mundo";
cadena.indexOf("a");
//resultado: 3`}/>
      <Conseptos texto={`Esto nos mostrara la posision de un caracter en especifico`}/>
      <h3>lastIndexOf</h3>
      <JavaScropt codigo={`let cadena = "vivir es vida";
cadena.lastIndexOf("v");
//resultado: 9 `}/>
      <Conseptos texto={`Esto nos servira para saber la ultima posision de un caracter en especifico.`}/>
      <h3>-1</h3>
      <JavaScropt codigo={`let cadena = "no se encontrara un caracter.";
if (cadena.indexOf("@") == -1) {
    console.log("el caracter @ no existe")
} else{
    console.log(cadena.indexOf("6"))
}`}/>
      <Conseptos texto={`Si la posision del caracter que queremos no existe sera -1.`}/>
      <h2>padStart y padEnd</h2>
      <h3>pseudocodigo</h3>
      <JavaScropt codigo={`variable.metodo ( 
    parametro 1 longitud de cadena ,

    parametro 2 cadena que queremos poner
    en el caso de padStart seria al incio
    en el caso de padEnd seria al final
);`}/>
      <h3>padStart</h3>
      <JavaScropt codigo={`let cadena = "123";
let nuevaCadena = cadena.padStart(4,0);
console.log(nuevaCadena)
// resultado: 0123`}/>
      <Conseptos texto={`Esto nos servira para rellenar una cadena al imicio.`}/>
      <h3>padEnd</h3>
      <JavaScropt codigo={`let cadena = "123"; 
let nuevaCadena = cadena.padEnd(4,4);
console.log(nuevaCadena);
// resultado: "1234";`}/>
      <Conseptos texto={`Esto nos servira para rellenar una cadena al final.`}/>
      <h2>repeat</h2>
      <JavaScropt codigo={`let cadena = "hola";
cadena.repeat(3);
//resultado: "hola","hola","hola"`}/>
      <Conseptos texto={`Esto nos servira para que el contenido de una cadena de texto se repita cuantas veces queramos.`}/>
      <h2>split</h2>
      <JavaScropt codigo={`let cadena = "hola mundo";
cadena.split(" ");
//resultado: ["hola","mundo"];`}/>
      <Conseptos texto={`Esto nos servira para separar una cadena y se convertira en un arreglo.`}/>
      <h2>substring</h2>
      <h3>pseudocodigo</h3>
      <JavaScropt codigo={`crear_variable = variable.metodo ( 
    parametro 1 desde donde inicia , 
    parametro 2 hasta donde finaliza y no cuenta el ultimo numero 
);`}/>
      <h3>javaScript</h3>
      <JavaScropt codigo={`let cadena = "hola mundo";
let subCadena = cadena.substring(5,10);
console.log(subCadena);
//resultado: "mundo"`}/>
      <Conseptos texto={`Esto nos servira para crear una subcadena a diferencia de los otros metodos esto si necesita una variable de respaldo para que pueda guardar la nueva cadena de texto.`}/>
      <h2>toUpperCase y toLowerCase</h2>
      <JavaScropt codigo={`let cadena1 = "hola mundo";
console.log(cadena1.toUpperCase());

let cadena2 = "HOLA MUNDO";
console.log(cadena2.toLowerCase());`}/>
      <Conseptos texto={`Esto nos servira para convertir una cadena de texto a mayuscula o minuscula.

con "toUpperCase" convertiremos la cadena a mayuscula.
con "toLoweCase" convertiremos una cadena a minuscula.`}/>
      <h2>toString</h2>
      <JavaScropt codigo={`let cadena = 123;
cadena.toString();
//resultado: "123"`}/>
      <Conseptos texto={`Esto nos servira para convertir cualquier dato a una cadena de texto.`}/>
      <h2>trim</h2>
      <JavaScropt codigo={`let cadena = " hola mundo ";
cadena.trim();
//resultado: "hola mundo"`}/>
      <Conseptos texto={`Esto nos servira para quitar los espacios al principio y al final de una cadena de texto.

Con "trimStart()" quitamos los espacios del principio de una cadena.
Con "trimEnd()" quitamos el espacio al final de una cadena.`}/>
    </main>
    <Footer/>
    </>
  );
}

export default MetodosCadenaJavaScript;