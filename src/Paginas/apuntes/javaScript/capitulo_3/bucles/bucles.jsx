import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";

function BuclesJavaScript() {
  return (  
    <>
      <main>
        <h1>bucles</h1>
        <Conseptos texto={`En este lenguaje se cambia la sintaxis para poder usar los bucles.`}/>
        <h2>bucle mientras(while)</h2>
        <Conseptos texto={`La sintaxis del bucle while es la siguiente:
"mientras" se cambia por "while".
la condicional se pone dentro de "()".
"hacer" se cambia por "{}".
el simbolo "++" se mantiene.`}/>

        <Sintaxis codigo={`while(aqui va la condicional){
  // aqui el codigo que escribiremos
}`}/>

        <JavaScropt codigo={`let i = 0;
while(i < 5){
  i++;
  alert(\`el valor de i es: ${"${i}"}\`)
}`}/>
        <h2>bucle para(for)</h2>
        <Conseptos texto={`Aqui se reemplaza:
"para" por "for".
la declaracion de la variable , la condicional y la actualizacion van dentro de ().
"hacer" se cambia por "{}"`}/>

        <Sintaxis codigo={`for(aqui va la inicializacion; aqui la condicional ; aqui la actualizacion de la variable){
  // aqui dentro el codigo a escribir.
}`}/>

        <JavaScropt codigo={`for(let i = 0;i < 5;i++){
  alert(\`el valor de i es: ${"${i}"}\`);
}`}/>
        <h2>bucle in</h2>
        <Conseptos texto={`El bucle in se encarga de mostrar los (indices/posisiones [indice]) del arreglo que estamos recorriendo en simples palabras se encarga de resumir esto.`}/>
        <JavaScropt codigo={`let animes = [
  "dr strone",
  "death note",
  "hight school dxd",
  "overflow"
];
for(let i = 0;i < animes.length;i++){
  console.log(i);
}`}/>

        <Sintaxis codigo={`para("crear variable" "in" arreglo){
  // escribir codigo
}`}/>

        <JavaScropt codigo={`for(let i in arreglo){
  // escribir codigo
}`}/>
        <h3>usemoslo</h3>
        <JavaScropt codigo={`let animes = [
  "dr strone",
  "death note",
  "hight school dxd",
  "overflow"
];
for(let i in animes){
  console.log(i)
}`}/>
        <Conseptos texto={`Como te das cuenta este bucle resume mucho evitamos hacer esto.`}/>
        <JavaScropt codigo={`for(let i = 0;i < arreglo.length;i++)`}/>
        <Conseptos texto={`Nos resume en esto.`}/>
        <JavaScropt codigo={`for(let i in arreglo)`}/>
        <h2>bucle of</h2>
        <Conseptos texto={`A diferencia del bucle in este bucle no muestra los (indices []) este bucle muestra el valor del arreglo que se esta recorriendo osea que resume esto.`}/>
        <JavaScropt codigo={`let animes = [
  "dr strone",
  "death note",
  "hight school dxd",
  "overflow"
];
for(let i = 0;i < animes.length;i++){
  console.log(animes[i]);
}`}/>

        <Sintaxis codigo={`para("crear variable" "of" "arreglo"){
  // escribir codigo
}`}/>

        <JavaScropt codigo={`for(let i of arreglo){
  // escribir codigo
}`}/>
        <h3>usemoslo</h3>
        <JavaScropt codigo={`let animes = [
  "dr strone",
  "death note",
  "hight school dxd",
  "overflow"
];
for(let i of animes){
  console.log(i);
}`}/>
        <Conseptos texto={`Como te das cuenta resume esto.`}/>
        <JavaScropt codigo={`for(let i = 0;i < arreglo.length;i++)`}/>
        <Conseptos texto={`Por esto.`}/>
        <JavaScropt codigo={`for(let i of arreglo)`}/>
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer un programa que saque el promedio de notas de un alumno el programa debe preguntar cuantas notas tiene el alumno , se debe mostrar el resultado.`}/>
        <Ejercicios 
          texto1={"Pero que chingados? (mostrar pistas)"}
          texto2={"Soy tan pro que no necesito pistas (ocultar pistas)"}
          codigo={<JavaScropt codigo={`// se usa prompt.
// se usa bucles.
// se usa arreglos.
// se usa operadores matematicos.
// se usa concatenacion.
// se usa alert.`}/>}
        />
        <Ejercicios 
          texto1={`No puede ni con las pistas :c (mostrar solucion)`}
          texto2={"Si puedo jaja re izi (ocultar solucion)"}
          codigo={<JavaScropt codigo={`let alumnosCantidad = prompt("¿Cuantos alumnos hay?");
let cantidadNotas = 0;
let guardarNotas = 0;
let notas = [];
let sumar = 0;
let promedio = [];

for(let i = 0;i < parseInt(alumnosCantidad);i++){
  cantidadNotas = parseInt(prompt(\`¿Cuantas notas tiene el alumno ${"${i + 1}"}?\`));
  notas[i] = [];
  for(let j = 0;j < cantidadNotas;j++){
    guardarNotas = parseInt(prompt(\`La ${"${j + 1}"} nota del alumno ${"${i + 1}"} es?\`));
    notas[i][j] = guardarNotas;
    sumar += guardarNotas;
  }
  promedio[i] = sumar / cantidadNotas;
  sumar = 0;
};
for (let i = 0; i < promedio.length; i++) {
  alert(\`El promedio del alumno ${"${i + 1}"} es: ${"${promedio[i]}"}\`);
}`}/>}/>
      </main>
      <Footer/>
    </>
  );
}

export default BuclesJavaScript;