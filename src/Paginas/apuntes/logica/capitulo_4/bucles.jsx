import Capitulos from "../../../../componentes/capitulos/aside";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function BuclesLogica() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>bucles</h1>
        <Conseptos texto={`Los bucles se encargan de recorrer arreglos , hacer una accion de forma repetitiva , etc.`}/>
        <h2>bucle mientras</h2>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`mientras 5 > 2 hacer:
  // un saludo al usuario`}/>
        <Conseptos texto={`Ahora explicaremos su estructura.`}/>
        <JavaScropt codigo={`i = 0;
  mientras    |   i < 15    hacer:
tipo de bucle | condicional`}/>
          <Conseptos texto={`Para un bucle mientras y el bucle que veremos mas adelante se debe de ir aumentando de 1 en 1 en algunos lenguajes el simbolo se representa con "++" pero en otros el simbolo es distinto.`}/>
          <JavaScropt codigo={`i = 0;
mientras i < 5 hacer:
  i++;
  mostrar("Esto es un bucle")`}/>
        <Conseptos texto={`Esto es para evitar que se haga un bucle infinito ya que si no hacemos que i aumente de uno en uno i siempre sera menor a 5 y se creara un bucle infinito , pero si hacemos que i aumente en cada vuelta/iteracion llegara un punto donde i sera igual a 5 y terminara el bucle ya que la condicion no se cumple debido a que i es igual a 5 no es menor a 5.`}/>
        <JavaScropt codigo={`// explicando iteracion
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
        <JavaScropt codigo={`i = 0;
mientras i < 8 hacer:
  i++;
  mostrar("hola este es el valor de i: " + i)`}/>
        <h3>pegar en la consola de tu navegador</h3>
        <JavaScropt codigo={`let i = 0;
while(i < 8){
  i++;
  console.log("hola este es el valor de i: " + i);
}`}/>
        <Conseptos texto={`Hagamos otro ejercicio con los bucles.`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`i = 0;
numero = pedirDato("¿Hasta que numero deseas contar?");
mientras i < numero hacer:
  mostrar("Contando " + i)`}/>
        <h3>pegar en tu consola de tu navegador</h3>
        <JavaScropt codigo={`let i = 0;
let numeros = prompt("¿Hasta que numero deseas contar?");
while(i < parseInt(numeros)){
  i++;
  console.log("Contando " + i);
}`}/>
        <h2>recorrer arregos</h2>
        <Conseptos texto={`Como dijimos un bucle puede recorrer arreglos para poder hacer muchas cosas con esos arregos.`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`arreglo = ["dato 1","dato 2","dato 3"];
i = 0;
mientras i < arreglo.longitud hacer:
  mostrar("Recorriendo arreglo " + arreglo[i]);
  i++;`}/>
        <h3>pegar en la consola de tu navegador</h3>
        <JavaScropt codigo={`let arreglo = ["dato 1" , "dato 2" , "dato 3"];
let i = 0;
while(i < arreglo.length){
  console.log("Recorriendo arreglo " + arreglo[i]);
  i++;
}`}/>
        <h2>explicacion</h2>
        <Conseptos texto={`Probablemente te este confundiendo esto arreglo[i] y longitud bueno arreglo[i] se encarga de recorrer el arreglo me refiero a que i cambia de numero a medida que itera lo recuerdas inicia con 0 y termina con 2 es como decir esto.`}/>
        <JavaScropt codigo={`arreglo[0];
arreglo[1];
arreglo[2];`}/>
        <Conseptos texto={`"longitud bueno esto se encarga de obtener la posision del arreglo por ejemplo."`}/>
        <JavaScropt codigo={`   arreglo = ["dato 1","dato 2","dato 3"];
arreglo.longitud  1       2         3`}/>
        <Conseptos texto={`longitud se encarga de contar la cantidad de elementos que hay en un arreglo.`}/>
          <h2>recorrer arreglos bidimensionales</h2>
          <Conseptos texto={`Bueno tambien podemos recorrer arreglos bidimensionales esto se hace con bucles anidados.`}/>
          <h3>pseudocodigo</h3>
          <JavaScropt codigo={`i = 0;
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
        <JavaScropt codigo={`let i = 0;
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
      </main>
      <Footer />
    </>
  );
}

export default BuclesLogica;