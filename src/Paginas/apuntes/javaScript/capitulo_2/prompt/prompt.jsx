import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function PromptLogica() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>prompt</h1>
        <Conseptos texto={`Prompt es para pedir datos al usuario.`}/>
        <h2>pseudocodigo</h2>
        <JavaScropt codigo={`prompt(mensaje que queremos dar al usuario)`}/>
        <h2>javaScript</h2>
        <JavaScropt codigo={`prompt("dime tu musica favorita.");`}/>
        <h2>ejemplo de uso</h2>
        <Conseptos texto={`El valor que ponga el usuario se guardara en una variable para que nosotros podamos usar ese valor en lo que queramos.`}/>
        <h3>guardar</h3>
        <JavaScropt codigo={`let numero = prompt("dime un numero cualquiera.");
console.log(numero);`}/>
        <Conseptos texto={`El valor que pusimos en el mensaje que nos motro prompt se guardara en la variable numero.`}/>
        <h2>typeof</h2>
        <Conseptos texto={`La funcion ("typeof"/"tipode") es para saber que tipo de dato es un valor.

si es cadnena de texto es: "string".
si es dato numerico es: "number".
si es booleano es: "boolean"`}/>
        <JavaScropt codigo={`let text = "una cadena de texto";
let number = 18;
let booleano = true;
console.log(            //resultados
  typeof(text),           //string
  typeof(number),         //number
  typeof(booleano)        //boolean
);`}/>
        <h2>string</h2>
        <Conseptos texto={`Todo lo que se escribe dentro del espacio que nos ofrece prompt es una string osea que si en un prompt escribimos un numero igual sera una string.`}/>
        <h3>ejemplo</h3>
        <JavaScropt codigo={`let numero = prompt("Pon un numero.");
let booleano = prompt("Pon true o false");
console.log(            //resultados
  typeof(numero),         //string
  typeof(booleano)        //string
);`}/>
        <Conseptos texto={`Esto es un problema a largo plazo debido a que si queremos sumar dos valores que pidamos al usuario no se hara la operacion matematica se concatenara.`}/>
        <JavaScropt codigo={`let numero1 = prompt("dime el numero 1");
let numero2 = prompt("dime el numero 2");
let sumarNumeros = numero1 + numero2; 
console.log(sumarNumeros);`}/>
        <Conseptos texto={`Como te das cuenta el valor de las variables se concatenan mas no se suman como nosotros queremos.

Felizmente javaScript proporciona una funcion que se encarga de concertir una string en un dato numerico.`}/>
        <h2>parseInt()</h2>
        <Conseptos texto={`Esta funcion se encarga de convertir las strings que adentro tienen numero a convertirlos a datos numericos.`}/>
        <JavaScropt codigo={`parseInt("15")`}/>
        <Conseptos texto={`Con esta funcion ahora si podemos sumar dos valores de prompt.`}/>
        <JavaScropt codigo={`let numero1 = prompt("Dime el numero 1");
let numero2 = prompt("dime el numero 2");
let sumar = parseInt(numero1) + parseInt(numero2);
console.log(sumar);`}/>
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer un programa que saque el area del triangulo.
Formula:
Area = base x altura
              ------------- 
                     2
El usuario debe poner los numeros para sacar el area del triangulo.`}/>
        <Ejercicios 
          texto1={"No puedo esta dificil.(mostrar solucion)"}
          texto2={"Si puedo di por acciente en mostrar solucion :v"}
          codigo={<JavaScropt codigo={`alert("Este programa sacara el area de un triangulo.");
let dato1 = prompt("Dime el primer numero");
let dato2 = prompt("Dime el segundo numero");
let area = parseInt(dato1) * parseInt(dato2) / 2;
alert("El resultado es: " + area);`}/>}/>
      </main>
      <Footer />
    </>
  );
}

export default PromptLogica;