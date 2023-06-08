import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";

function BucleParaLogica() {
  return (  
    <>
      <main>
        <h1>bucle para</h1>
        <Conseptos texto={`Los bucles para son similares que los bucles mientras solo que es una estructura más compacta que incluye la inicialización, la condición y la actualización de las variables de control en una única línea. Su estructura básica es la siguiente:`}/>
        <Sintaxis codigo={`para crear variable;condicional;actualizar variable:
  // hacer algo.`}/>
        <h2>diferencias</h2>
        <Conseptos texto={`Ahora veremos las diferencias entre estos tipos de bucles.`}/>
        <h3>while</h3>
        <Sintaxis codigo={`i = 0; // crear variable
      while          5 < 8: 
//tipo de bucle  //condicional
  i++; // actualizar variable
  // ejecutar codigo`}/>
        <h3>para</h3>
        <Sintaxis codigo={`para i = 0;       i < 5;         i++:
    //crear   //condicional  //acvtualizar
   //variable                //variable
   //ejecutar codigo`}/>
        <h2>ejercicio 1</h2>
        <Conseptos texto={`Hacer un programa que haga un conteo regresivo pero hacia atras.`}/>
        <h3>pseudocodigo</h3>
        <Sintaxis codigo={`para i = 10; i >= 0; i--:
  mostrar(i);`}/>
        <h3>pegar en la consola de tu navegador</h3>
        <Sintaxis codigo={`for (let i = 10; i >= 0; i--) {
  console.log(i);
}`}/>
        <Sintaxis codigo={``}/>   
        <h2>ejercicio 2</h2>
        <Conseptos 
texto={`Hacer un {fibonacci} con bucles estos se pueden hacer con un bucle while o for (mientras o para).`}
enlaces={{
  fibonacci: {text: "fibonacci",url:"https://matesfacil.com/ESO/progresiones/sucesion-Fibonacci-formulas-problemas-resueltos-suma-espiral-triangulo-Pascal.html"}
}}
targetBlank={true}/>
        <h3>pseudocodigo</h3>
        <Sintaxis codigo={`n = 10;
fibonacci = [];

para i = 0; i < n; i++:
  si i < 2:
    fibonacci.agregar(i);
  sino:
    siguienteNumero = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(siguienteNumero);
mostrar(fibonacci);`}/>
        <h3>pegar en la consola de tu navegador.</h3>
        <Sintaxis codigo={`let n = 10; // Número de elementos de la secuencia de Fibonacci
let fibonacci = [];

for (let i = 0; i < n; i++) {
  if (i < 2) {
    fibonacci.push(i);
  } else {
    let nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextNumber);
  }
}
console.log(fibonacci);`}/>
        <h2>explicacion</h2>
        <Conseptos texto={`1. Creamos una variable llamada n con el valor 10 podemos poner cualquier numero y el algoritmo seguira funcionando.
2. Creamos un arreglo vacio.
3. Usamos un bucle para y dentro de su estructura creamos la variable i con el valor 0 , en la condicional decimos que el bucle se ejecutara mientras i sea menor a n osea que i < 10 , actualizamos la variable i con "++" para evitar un bucle infinito ademas de que es obligatorio ponerlo en la estructura del bucle para.
4. Dentro del bucle hacemos una condicional donde evaluamos que i sea menor que 2 , si es asi a la variable fibonacci se le agrega i osea el valor que ira recorriendo "0 , 1".
5. En el caso de que no se cumpla creamos una nueva variable llamada siguienteNumero que hara una operacion en este caso sumara fibonacci[i - 1] con fibonacci[i - 2].
6. fibonacci[i - 1] restara i - 1 osea que si en el arreglo el numero es 3 se restara 1 y quedaria asi fibonacci[2].
7. fibonacci[i - 2] es igual que el otro solo que lo resta entre 2 por ejemplo si el numero es 3 lo restara con 2 y el resultado seria fibonacci[1].
8. Por ultimo a fibonacci le agregamos la variable de siguienteNumero en cada iteracion que se de.`}/>
        <h2>Para que sirve!</h2>
        <Conseptos texto={`Esto es demasiado utilizado por ejemplo al desarrollar un juego se crea un bucle infinito para que se creen obstaculos de forma infinita un ejemplo de su uso esta en flappy bird , tambien se puede usar para el desarrollo de IA y usar un bucle para recorrer los datos/conjuntos y asi proporcionar una informacion al usuario pero hay muuuchos usos mas para los bucles.`}/>

      </main>
      <Footer />
    </>
  );
}

export default BucleParaLogica;