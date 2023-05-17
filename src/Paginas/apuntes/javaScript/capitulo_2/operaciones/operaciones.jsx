import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function OperadoresJavaScript() {
  return (  
    <>
      <Menu2/>
      <Capitulos/>
      <main>
        <h1>Operadores</h1>
        <Conseptos texto={`Aqui tenemos los operadores matematicos de toda la vida.
suma +
resta -
division /
multiplicacion *
resto %
> mayor que
>= mayor o igual que
< menor que
<= menor o igual que
== igual que`}/>
        <JavaScropt codigo={`let numero1 = 15;
let numero2 = 15;
let sumar = numero1 + numero2;
console.log(sumar);
let numero3 = 15;
let numero4 = 15;
let restar = numero3 - numero4;
console.log(restar);
let numero5 = 15;
let numero6 = 15;
let dividir = numero5 / numero6;
console.log(dividir);
let numero7 = 15;
let numero8 = 15;
let multiplicar = numero7 * numero8;
console.log(multiplicar);
let numero9 = 15;
let numero10 = 15;
let porciento = numero9 % numero10;
console.log(porciento);`}/>
        <Conseptos texto={`Puedes ir jugando con los operadores matematicos.`}/>
        <h2>Operadores logicos</h2>
        <Conseptos texto={`En este lenguaje los operadores logicos se representan de la siguiente manera.
And(y): &&
or(o): ||
not(contrario) !=
igualdad ==`}/>
        <h2>Estricto</h2>
        <Conseptos texto={`Cuando escribimos código en JavaScript, podemos activar el modo estricto para tener reglas más estrictas y evitar problemas. Una diferencia importante en el modo estricto es cómo comparamos valores.

Normalmente, en JavaScript, usamos "==" para comparar cosas , Pero esto trae un problema y esque al usar solo "==" , se hara la comparacion solo en el valor mas no el tipo de dato.`}/>
        <JavaScropt codigo={`let igualdad = "15" == 15;
console.log(igualdad);
// resultado: true`}/>
        <Conseptos texto={`Como te das cuenta comparamos si "15" es igual a 15 pero fijate que el primer "15" es una cadena de texto y el otro 15 si es un dato numerico.

Ahora que sucede si usamos estrictamente igual? "===".`}/>
        <JavaScropt codigo={`let IgualEstricto = "15" === 15;
console.log(IgualEstricto);
// resultado: false`}/>
        <Conseptos texto={`Ahora nos dice que es falso porque el tipo de dato no es igual por mas que el valor sea igual.`}/>
        <JavaScropt codigo={`let IgualdadEstricta = "15" === "15";
console.log(IgualdadEstricta);
// resultado: true`}/>
        <Conseptos texto={`Aqui si es verdadero porque el valor y el tipo de dato son iguales.

Esto igualmente se aplica para not(!=) solo que el modo estricto de not es este "!==".`}/>
        <JavaScropt codigo={`let distinto = "15" != 15;
console.log(distinto);
// resultado: false`}/>
        <Conseptos texto={`Aqui es false porque 15 si es igual a 15 no es distinto.`}/>
        <JavaScropt codigo={`let distintoEstricto = "15" !== 15;
console.log(distintoEstricto);
// resultado: true`}/>
        <Conseptos texto={`Aqui si es true porque "15" si es distinto de 15 recuerda que con modo estricto cuenta tanto el valor como el tipo de dato y en este caso el valor si es igual pero el tipo de dato no asi que si es distinto.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default OperadoresJavaScript;