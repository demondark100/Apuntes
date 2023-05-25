import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function ArreglosAsJavaScript() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Arreglos asociativos</h1>
        <Conseptos texto={` Los "arreglos asociativos" en JavaScript se conocen como objetos. A diferencia de los arreglos normales, los objetos no tienen un orden específico osea que no es necesario "[0][1]" , En lugar de utilizar índices numéricos, utilizan claves/identificadores para acceder a los valores asociados. Aquí tienes un ejemplo en pseudocódigo y JavaScript para ilustrar cómo trabajar con objetos:`}/>
        <h2>pseudocodigo</h2>
        <h3>crear objeto</h3>
        <Sintaxis codigo={`
// crear variable
variable = {
    // dentro de las llaves poner el objeto.
    identificador: valor,
    identificador: valor,
    identificador: valor
};`}/>
        <h3>formas de llamar un valor</h3>
        <h3>forma 1</h3>
        <Sintaxis codigo={`mostrar(variable.identificador);`}/>
        <h3>forma 2</h3>
        <Sintaxis codigo={`mostrar(variable["identificador"]);`}/>
        <h2>javaScript</h2>
        <JavaScropt codigo={`const musica = {
  nombre: "Tighten Up",
  banda: "The Black Keys",
  genero: "Rock alternativo",
  integrantes: 2
}

console.log(musica.nombre);
console.log(musica["banda"]);

// resultados:
// Tighten Up
// The Black Keys`}/>
        <Conseptos texto={`En los valores podemos poner lo que sea arreglos , strings , booleanos lo que sea.

Es como si el identificador fuese una variables solo que en vez de hacer esto.`}/>
        <JavaScropt codigo={`let nombre = "Tighten Up";
let banda = "The Black Keys";
let genero = "Rock alternativo";
let integrantes = 2;`}/>
        <Conseptos texto={`Hacemos esto.`}/>
        <JavaScropt codigo={`nombre: "Tighten Up",
banda: "The Black Keys",
genero: "Rock alternativo",
integrantes: 2`}/>
        <h2>cambiar valor</h2>
        <Conseptos texto={`¿Recuerdas que con los arreglos normales podemos cambiar el valor de una posision en especifico?.`}/>
        <JavaScropt codigo={`const notas = [15,20,18,5,12];
notas[1] = 2;
console.log(notas);
// resultado:
// 0: 15
// 1: 2
// 2: 18
// 3: 5
// 4: 12`}/>
        <Conseptos texto={`Con los arreglos asociativos tambien podemos hacer eso.`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`variable = {
  identificador: valor,
  identificador: valor,
  identificador: valor
};
variable.identificador = nuevo valor;
variable["identificador"] = nuevo valor;
mostrar(variable.identificador);`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const persona = {
  nombre: "Emilia",
  edad: 20,
  notas: [15,20,18,17],
  genero: "mujer",
  rango: "aprendiz"
};
persona.edad = 18;
persona["rango"] = "Maga";
console.log(persona["edad"]);
console.log(persona.rango);`}/>
        <h2>agregar valor</h2>
        <Conseptos texto={`Nosotros podemos agregar mas valores al objeto a medida que vayamos abanzando en nuestro codigo.`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`variable = {};
variable.indentificador = valor;`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const agregar = {
  anime: "re zero"
}
agregar.protagonista = "Subaru";
console.log(agregar);`}/>
        <Conseptos texto={`Como te das cuenta se agrego la (propiedad/identificador) protagonista al objeto agregar.`}/>
        <h2>¡otra forma!</h2>
        <Conseptos texto={`Bueno tenemos otra forma mas compleja de agregar valorees a un objeto y esta forma nos servira muuucho mas adelante vuelve cuando lo usemos en javaScript abanzado si?`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`variable = {};
objeto.definirPropiedad( 
    variable, "identificador" ,
    { valor: "valor" }
);`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const colores = {};
Object.defineProperty(
  colores, "color" , 
  {value: "verde"}
);`}/>
        <Conseptos texto={`Primero creamos un objeto vario y despues agregamos mas objetos con la funcion Object.defineProperty()`}/>
        <h2>writable</h2>
        <Conseptos texto={`Con "writable: false" estamos diciendo que esa propiedad no se puede reescribir osea que ya no podemos cambiar el valor de un identificador.`}/>
        <JavaScropt codigo={`const colors = {};
Object.defineProperty(
  colors, "color",
    {value: "verde" , writable: false}
);
colors.color = "azul";
console.log(objeto);
// resultado: "verde"`}/>
        <Conseptos texto={`Como te das cuenta no puedo cambiar el valor de ese identificador del objeto colors.`}/>
        <h2>preventExtensions()</h2>
        <Conseptos texto={`Con "preventExtensions()" evitaremos que se puedan agregar mas propiedades a un objeto.`}/>
        <JavaScropt codigo={`const obj = {
    juego: "left 4 dead 2"
}
Object.preventExtensions(obj)
obj.desarrollador =  "valve";
console.log(obj)`}/>
        <Conseptos texto={`Como te das cuenta no se agrego el identificador "desarrollador" con su valor "valve" en el objeto.`}/>
        <h2>delete</h2>
        <Conseptos texto={`Con "delete" eliminaremos la (propiedad/identificador) que queramos posdata solo funciona en objetos.`}/>
        <JavaScropt codigo={`const objeto = {                        
    musica: "adventure",
    artista: "Coldplay"
}
delete objeto.artista;
console.log(objeto);`}/>
        <Conseptos texto={`Se elimino el (identificador/propiedad) artista con su valor "Coldplay". `}/>
      </main>
      <Footer/>
    </>
  );
}

export default ArreglosAsJavaScript;