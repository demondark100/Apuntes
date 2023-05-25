import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";


function CondicionalesJavaScript() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>Condicionales</h1>
        <Conseptos texto={`Las condicionales en este lenguaje tienen la siguiente sintaxis:

"si" se reemplaza por "if".
"entonces:" se reemplaza por "{}".
"sino si" se reemplaza por "else if".
"sino" se reemplaza por "else".`}/>

        <Sintaxis codigo={`if (aqui va la condicional) {
  // dentro de las llaves va el codigo 
  // que queremos escribir
} else if (aqui va la condicional){
  // dentro de las llaves va el codigo 
  // que queremos escribir
} else {
  // dentro de las llaves va el codigo 
  // que queremos escribir
}`}/>
        <h2>ejemplo</h2>
        <Conseptos texto={`Comprobar si un numero es positivo o negativo.`}/>
        <JavaScropt codigo={`let numero = prompt("Dime un numero y sabremos si el numero es positivo o negativo.");
if(parseInt(numero) > 0){
  alert(\`el numero ${"${numero}"} es positivo.\`);
} else if(parseInt(numero) < 0){
  alert(\`el numero ${"${numero}"} es negativo.\`);
} else {
  alert(\`el numero es 0\`);
}`}/>
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer una calculadora.`}/>
        <Ejercicios 
          texto1={"Esta dificil (mostrar pistas)"}
          texto2={"ocultar pistas"}
          codigo={<JavaScropt codigo={`// esta calculadora usara alert()
// usara prompt()
// usara parseInt()
// usara condicionales.
// usara operadores matematicos.
// usara concatenacion
// este proyecto lleva todo lo que 
// aprendimos hasta la parte de condicionales.`}/>}
        />
        <Ejercicios 
          texto1={"Naa no puedo XD (mostrar solucion)"}
          texto2={"Si puedo no me muestres la respuesta (ocultar solucion)"}
          codigo={<JavaScropt codigo={`alert("Hola bienvenido o bienvenida a esta calculadora basica.");
let operacion = prompt(\`¿Que operacion deseas realizar?
1. sumar
2. restar
3. multiplicar
4. dividir\`);
if(parseInt(operacion) === 1){
  let pedirNumero1 = prompt("¿Cual es el primer numero?");
  let pedirNumero2 = prompt("¿Cual es el segundo numero?");
  let sumar = parseInt(pedirNumero1) + parseInt(pedirNumero2);
  alert(\`el resultado de la suma es: ${"${sumar}"}\`);
} else if(parseInt(operacion) === 2){
  let pedirNumero1 = prompt("¿Cual es el primer numero?");
  let pedirNumero2 = prompt("¿Cual es el segundo numero?");
  let restar = parseInt(pedirNumero1) - parseInt(pedirNumero2);
  alert(\`el resultado de la resta es: ${"${restar}"}\`);
} else if (parseInt(operacion) === 3){
  let pedirNumero1 = prompt("¿Cual es el primer numero?");
  let pedirNumero2 = prompt("¿Cual es el segundo numero?");
  let multiplicar = parseInt(pedirNumero1) * parseInt(pedirNumero2);
  alert(\`el resultado de la multiplicacion es: ${"${multiplicar}"}\`);
} else if (parseInt(operacion) === 4){
  let pedirNumero1 = prompt("¿Cual es el primer numero?");
  let pedirNumero2 = prompt("¿Cual es el segundo numero?");
  let dividir = parseInt(pedirNumero1) / parseInt(pedirNumero2);
  alert(\`el resultado de la divicion es: ${"${dividir}"}\`);
} else {
  alert("La operacion que acabas de pasar no existe.");
}`}/>}
        />
      </main>
      <Footer />
    </>
  );
}

export default CondicionalesJavaScript;