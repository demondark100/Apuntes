import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";

function BuclesLogica() {
  return (  
    <>
      <main>
        <h1>bucles</h1>
        <Conseptos texto={`Los bucles se encargan de recorrer arreglos , hacer una accion de forma repetitiva , etc.`}/>
        <h2>bucle mientras</h2>
        <h3>pseudocodigo</h3>
        <Sintaxis codigo={`mientras 5 > 2 hacer:
  // un saludo al usuario`}/>
        <Conseptos texto={`Ahora explicaremos su estructura.`}/>
        <Sintaxis codigo={`i = 0;
  mientras    |   i < 15    hacer:
tipo de bucle | condicional`}/>
          <Conseptos texto={`Para un bucle mientras y el bucle que veremos mas adelante se debe de ir aumentando de 1 en 1 en algunos lenguajes el simbolo se representa con "++" pero en otros el simbolo es distinto.`}/>
          <Sintaxis codigo={`i = 0;
mientras i < 5 hacer:
  i++;
  mostrar("Esto es un bucle")`}/>
        <Conseptos texto={`Esto es para evitar que se haga un bucle infinito ya que si no hacemos que i aumente de uno en uno i siempre sera menor a 5 y se creara un bucle infinito , pero si hacemos que i aumente en cada vuelta/iteracion llegara un punto donde i sera igual a 5 y terminara el bucle ya que la condicion no se cumple debido a que i es igual a 5 no es menor a 5.`}/>
        <Sintaxis codigo={`// explicando iteracion
i = 0;
mientras i < 5 hacer:
  i++;

// condicionales
i < 5  // i aumenta su valor a 1
i < 5  // i aumenta su valor a 2
i < 5  // i aumenta su valor a 3
i < 5  // i aumenta su valor a 4 sigue siendo menor a 5
i < 5  // i aumenta su valor a 5 la condicional no se cumple
// i ya no es menor que 5 asi que el bucle se finaliza.`}/>
        <Conseptos texto={`Ahora haremos un ejercicio con los bucles para entender mejor.`}/>
        <h3>pseudocodigo</h3>
        <Sintaxis codigo={`i = 0;
mientras i < 8 hacer:
  i++;
  mostrar("hola este es el valor de i: " + i)`}/>
        <h3>pegar en la consola de tu navegador</h3>
        <Sintaxis codigo={`let i = 0;
while(i < 8){
  i++;
  console.log("hola este es el valor de i: " + i);
}`}/>
        <Conseptos texto={`Hagamos otro ejercicio con los bucles.`}/>
        <h3>pseudocodigo</h3>
        <Sintaxis codigo={`i = 0;
numero = pedirDato("¿Hasta que numero deseas contar?");
mientras i < numero hacer:
  mostrar("Contando " + i)`}/>
        <h3>pegar en tu consola de tu navegador</h3>
        <Sintaxis codigo={`let i = 0;
let numeros = prompt("¿Hasta que numero deseas contar?");
while(i < parseInt(numeros)){
  i++;
  console.log("Contando " + i);
}`}/>
        <h2>recorrer arregos</h2>
        <Conseptos texto={`Como dijimos un bucle puede recorrer arreglos para poder hacer muchas cosas con esos arregos.`}/>
        <h3>pseudocodigo</h3>
        <Sintaxis codigo={`arreglo = ["dato 1","dato 2","dato 3"];
i = 0;
mientras i < arreglo.longitud hacer:
  mostrar("Recorriendo arreglo " + arreglo[i]);
  i++;`}/>
        <h3>pegar en la consola de tu navegador</h3>
        <Sintaxis codigo={`let arreglo = ["dato 1" , "dato 2" , "dato 3"];
let i = 0;
while(i < arreglo.length){
  console.log("Recorriendo arreglo " + arreglo[i]);
  i++;
}`}/>
        <h2>explicacion</h2>
        <Conseptos texto={`Probablemente te este confundiendo esto arreglo[i] y longitud bueno arreglo[i] se encarga de recorrer el arreglo me refiero a que i cambia de numero a medida que itera ¿lo recuerdas? inicia con 0 y termina con 2 es como decir esto.`}/>
        <Sintaxis codigo={`arreglo[0];
arreglo[1];
arreglo[2];`}/>
        <Conseptos texto={`"longitud bueno esto se encarga de obtener la longitud de del arreglo osea que si en un arreglo tenemos 3 elementos las posisiones serian "0 , 1 , 2" sin embargo su longitud es de 3 debido a que tiene 3 elementos por ejemplo."`}/>
        <Sintaxis codigo={`   arreglo = ["dato 1","dato 2","dato 3"];
arreglo.longitud  1       2         3`}/>
        <Conseptos texto={`En conclusion la longitud se encarga de contar la cantidad de elementos que hay en un arreglo.`}/>
          <h2>recorrer arreglos bidimensionales</h2>
          <Conseptos texto={`Bueno tambien podemos recorrer arreglos bidimensionales esto se hace con bucles anidados.`}/>
          <h3>pseudocodigo</h3>
          <Sintaxis codigo={`i = 0;
j = 0;
arreglo = [
  ["dato 1" , "dato 2" , "dato 3"],
  ["dato 4" , "dato 5" , "dato 6"],
  ["dato 7" , "dato 8" , "dato 9"]
]
mientras i < arreglo.longitud hacer:
  j = 0;
  mientras j < arreglo[i].longitud hacer:
    mostrar(arreglo[i][j]);
    j++;
  i++`}/>
        <h3>pegar en la consola de tu navegador</h3>
        <Sintaxis codigo={`let i = 0;
let j = 0;
let arreglo = [
  ["dato 1" , "dato 2" , "dato 3"],
  ["dato 4" , "dato 5" , "dato 6"],
  ["dato 7" , "dato 8" , "dato 9"]
];

while(i < arreglo.length){
  j = 0; // Reiniciar j en cada iteración de i
  while(j < arreglo[i].length){
    console.log(arreglo[i][j]);
    j++;
  }
  i++;
}`}/>
        <h2>Explicacion</h2>
        <Conseptos texto={`1. Creamos 2 variables una llamada i y la otra j , ambas inicializadas con 0.
2. Creamos un arreglo bidimensional con 3 subArreglos osea que si ponemos arreglos.longitud nos daria como resultado 3.
3. Hacemos un bucle mientras donde indicamos que el bucle se hara mientras que i osea 0 sea menor a arreglo.longitud osea que el bucle se ejecutara 3 veces.
4. Dentro del bucle i ponemos que j sera 0 esto para reiniciar a j en cada iteracion.
5. Creamos otro bucle dentro del bucle i esto se le conoce como bucle anidado.
6. Este bucle anidado se ejecutara mientras que j sea menor que arreglo[i].longitud osea que se ejecutara tres veces debido a que en cada sub arreglo hay 3 datos.
7. Despues mostramos el contenido del arreglo bidimensional con arreglo[i][j] [i] recorre las filas y [j] recorre las columnas del arreglo bidimensional.
8. Por ultimo decimos que i , j aumenten de uno en uno para evitar hacer un bucle infinito.`}/>
      
        <div className="siguiente__parte">
          <Link to={"buclePara"}>bucle para</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BuclesLogica;