import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function MetodosArrJavaScript() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Los metodos de arreglo nos ayudan el dia a dia en nuestro codigo.`,
        lenguage: "JavaScropt",
        codigo: `let num = [4,8,2,9];

num.pop()  // [4,8,2] | quita el ultimo elemento de un arreglo.
num.shift()  // [8,2,9] | quita el primer elemento de un arreglo.
num.push(1); // [4,8,2,9,1] | agrega un elemento al final del arreglo.
num.unshift(7); // [7,4,8,2,9] | agrega un elemento al inicio del arreglo.
num.reverse(); // [9,2,8,4] | pone en reversa los elementos de un arreglo.
num.splice(1,2,"new number") // [4,"new number",9] | elimina y reemplaza uno o varios elementos de un arreglo.
num.sort(); // [2,4,8,9] | ordena los numeros de menor a mayor o las strings de a a la z.
let num2 = num.slice(1,3); // [8,2] | crea un subarreglo.
num.join(" - "); // "4 - 8 - 2 - 9" | convierte un arreglo en string y reemplaza las "," por la string que pasemos como parametro.
num.forEach(i=>console.log(i)) // 4 8 2 9 | Recorre de forma automatica un arreglo.
num.map(i=>{return i.toString()}) // ["4","8","2","9"] | mapea y da la posibilidad de modificar todos los elementos de un arreglo.`

      }]}/>
      <main>
        <h1>Metodos de arreglos</h1>
        <Conseptos texto={`Al igual que los metodos de cadena los arreglos tambien tienen metodos que nos facilitaras muchas cosas.`}/>
        <h2>pop y shift</h2>
        <h3>pop</h3>
        <JavaScropt codigo={`let frutas = ["manzana","pera","naranja"];
let frutas2 = frutas.pop();
console.log(frutas);
console.log(frutas2)
//resultado frutas: ["manzana","pera"];
//resultado frutas2: "naranja";`}/>
        <Conseptos texto={`Esto nos servira para quitar el ultimo elemento de un arreglo.`}/>
        <h3>shift</h3>
        <JavaScropt codigo={`let frutas = ["manzana","pera","naranja"];
let frutas2 = frutas.shift();
console.log(frutas);
console.log(frutas2);
//resultado frutas: ["pera","naranja"];
//resultado frutas2: "manzana";`}/>
        <Conseptos texto={`Esto nos servira para quitar el primer elemento de un arreglo.`}/>
        <h2>push y unshift</h2>
        <h3>push</h3>
        <JavaScropt codigo={`let frutas = ["manzana","naranja"];
frutas.push("pera");
console.log(frutas)
//resultado: [ 
    //"manzana",
    //"naranja",
    //"pera"
//];`}/>
        <Conseptos texto={`Esto nos servira para agregar elementos al final de un arreglo.`}/>
        <h3>unshift</h3>
        <JavaScropt codigo={`let frutas = [ 
    "naranja",
    "pera"
];
frutas.unshift("manzana")
console.log(frutas)
//resultado: [ 
    //"manzana",
    //"naranja",
    //"pera"
//]`}/>
        <Conseptos texto={`Esto nos servira para agregar elementos al principio de un arreglo.`}/>
        <h2>reverse</h2>
        <JavaScropt codigo={`let abecedario = [ 
    "a",
    "b",
    "c",
    "d"
];
console.log(abecedario.reverse());
//resultado: [ 
    //"d",
    //"c",
    //"b",
    //"a"
//];`}/>
        <Conseptos texto={`Esto nos servira para poner en reversa un arreglo.`}/>
        <h2>splice</h2>
        <JavaScropt codigo={`let frutas = [ 
    "manzana",
    "pera",
    "naranja",
    "sandia",
    "mango"
];


//pseudocodigo: 
//crear_variable = variable.metodo ( 
//parametro 1 desde que posision inicia , 
//parametro 2 cuantos elementos quieres eliminar o remmplazar , 
//paremtro 3 con que quieres reemplazar a ese elemento seleccionado )


//javaScript: 

let frutas2 = frutas.splice(1,1,"fresa")

console.log(frutas);
console.log(frutas2);

//resultado frutas: [ 
    //"manzana",
    //"fresa",
    //"naranja",
    //"sandia",
    //"mango"
//];
//resultado frutas2: "pera"`}/>
        <Conseptos texto={`Esto nos servira para reemplazar o eliminar un elemento desde la pssision que queramos.`}/>
        <h2>sort</h2>
        <JavaScropt codigo={`let numeros = [5,4,3,8,7,3,0];
console.log(numeros.sort());
//resultado: [ 
    //0,
    //3,
    //3,
    //4,
    //5,
    //7,
    //8
//];`}/>
        <Conseptos texto={`Esto nos servira para ordenar los datos de un arreglo pueden ser numericos o alfabeticos.`}/>
        <h2>slice</h2>
        <JavaScropt codigo={`//pseudocodigo: 
//crear_variable = variable.metodo ( 
//parametro 1 desde que posision iniciara , 
//parametro 2 hasta que posision recortaras , el conteo iniciara desde todo el arreglo y la ultima parte no la cortara )

//javaScript:

let frutas = [ 
    "manzana",
    "pera",
    "naranja",
    "mango",
    "sandia",
    "piña"
];
let frutas2 = frutas.slice(1,3);
console.log(frutas2);
//resultado frutas2: [ 
    //"pera",
    //"naranja"
//];`}/>
        <Conseptos texto={`Esto nos servira para crear un subarreglo es como substring.`}/>
        <h2>join</h2>
        <JavaScropt codigo={`let frutas = [ 
    "manzana",
    "naranja",
    "pera",
    "durazno",
    "piña"
];
console.log(frutas.join(" - "))
//resultado = "manzana - naranja - pera - durazno - piña";`}/>
        <Conseptos texto={`Esto nos servira para convertir un arreglo en una cadena de texto y nos da la posibilidad de modificar con que queremos hacer el espacio.`}/>
        <h2>forEach</h2>
        <JavaScropt codigo={`let frutas = [ 
    "manzana",
    "naranja",
    "piña",
    "mango"
]; 
frutas.forEach(i=>{ 
    console.log(i); 
});`}/>
        <Conseptos texto={`Esto nos servira para recorrer un arreglo de una forma mas sensilla.`}/>
        <h2>map</h2>
        <JavaScropt codigo={`let frutas = [ 
    "manzana",
    "naranja",
    "piña",
    "mango"
];

let frutasEnMayusculas = frutas.map((fruta) => {
  return fruta.toUpperCase();
});

console.log(frutasEnMayusculas);`}/>
      </main>
      <Footer />
    </>
  );
}

export default MetodosArrJavaScript;