import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Conseptos from "../../../../../componentes/conseptos/conseptos";

function JavaScriptFun() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>funciones de javaScript</h1>
        <Conseptos texto={`Estas funciones son solo de javaScript que nos facilitaran mucho las cosas a la hora de trabajar con este lenguaje por ejemplo hay una funcion que nos sirve para saber si un dato es string , numero , etc y asi , Son muy utiles al momento de trabajar con el lenguaje. `}/>
        <h2>typeof</h2>
        <Conseptos texto={`La funcion ("typeof"/"tipode") es para saber que tipo de dato es un valor.

si es cadnena de texto es: "string".
si es dato numerico es: "number".
si es booleano es: "boolean"`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`tupode(valor/variable que queramos saber que tipo de dato es)`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`console.log(typeof("hola"));
console.log(typeof(15));
console.log(typeof(false));
let color = "negro";
console.log(typeof(color));
// resultado:
// string
// number
// boolean
// string`}/>
        <h3>un ejemplo mas</h3>
        <JavaScropt codigo={`let text = "una cadena de texto";
let number = 18;
let booleano = true;
console.log(            //resultados
  typeof(text),           //string
  typeof(number),         //number
  typeof(booleano)        //boolean
);`}/>

        <h2>parseInt()</h2>
        <Conseptos texto={`Esta funcion se encarga de convertir las strings que adentro tienen numero a convertirlos a datos numericos.`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`analizarEntero(valor/variable que queremos convertir a number)`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`console.log(parseInt("15"));
let number = "25";
console.log(parseInt(number));
// resultados:
// 15
// 25`}/>
        <h3>comprobemos</h3>
        <JavaScropt codigo={`let numero = "18";
console.log(typeof(parseInt(numero)));
console.log(typeof(numero));
// resultados:
// number
// string`}/>
        <h2>isNaN</h2>
        <Conseptos texto={`Esta funcion se encarga de comprobar si una string contiene un numero o no.

si lo que esta dentro de la string no es un numero dira true.
si lo que esta dentro de la string si es un numero dira false.`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`esNoEsUnNumero(valor/ variable que queremos comprobar)`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`let numberFalse = "n";
let numberTrue = "14";
console.log(isNaN(numberFalse));
console.log(isNaN(numberTrue));
// resultados:
// true
// false`}/>
        <h2>isFinite</h2>
        <Conseptos texto={`Esta funcion se encarga de verificar si un numero es finito.
si es finito devuelve true.
si es infinito o es NaN(not a number / no es un numero) devuelve false.`}/>
      <h3>pseudocodigo</h3>
      <JavaScropt codigo={`esFinito(valor/variable que queremos saber si es finito o no)`}/>
      <h3>javaScript</h3>
      <JavaScropt codigo={`let numero = 15;
console.log(isFinite(numero));
let noNumber = NaN;
console.log(isFinite(noNumber));

// resultados:
// trye
// false`}/>
      </main>
      <Footer />
    </>
  );
}

export default JavaScriptFun;