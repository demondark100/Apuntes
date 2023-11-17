import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";

function ConcatenacionJavaScript() {
  return (  
    <>
      <main>
        <h1>Concatenacion</h1>
        <Conseptos texto={`En javaScript tenemos dos formas de concatenar las cadenas.`}/>
        <ol>
          <ol>
            <li>Usando el simbolo de "+" osea el tradicional.</li>
            <li>Usando `backticks` y usando este simbolo {"${}."}</li>
          </ol>
        </ol>
        <h2>tradicional</h2>
        <Conseptos texto={`La forma tradicional es usar + para concatenar las cadenas com las "" comillas normales.`}/>
        <JavaScropt codigo={`let nombre = prompt("Dime tu nombre.");
let oracion = "Hola " + nombre + " soy una IA";
console.log(oracion);`}/>
        <h2>template strings</h2>
        <Conseptos texto={`Antes que nada yo recomiendo usar las template strings en este lenguaje debido a que facilita mucho la tarea de concatenar.

Para usar las template strings debemos cambiar las (comillas"") por (comillas simples \`\`) , para poner las comillas simples debes presionar (alt + 96) presionalos al mismo tiempo.

Tambien usaremos este simbolo ${"${}"} dentro de las llaves pondremos el valor que queremos concatenar.`}/>
        <JavaScropt codigo={`let oracionEjemplo = \`Hola 
${"${valor que queremos poner osea puede ser una variable o lo que sea.}"}\`;`}/>
        <h3>ejemplo</h3>
        <JavaScropt codigo={`let musica = "Do I Wanna Know?";
let oracion =  \`la musica ${"${musica}"} es un temazo.\`;
console.log(oracion);
// resultado: la musica Do I Wanna Know es un temazo.`}/>
        <h2>ventajas</h2>
        <Conseptos texto={`Las template strings tienen muchas ventajas sobre las comillas normales.`}/>
        <h2>escribir abajo</h2>
        <h3>comillas</h3>
        <JavaScropt codigo={`let comillas = "Con las comillas
no puedo escribir abajo";
console.log(comillas);
// resultado: error`}/>
        <h3>template strings</h3>
        <JavaScropt codigo={`let template = \`Con template strings
si puedo escribir
abajo que buena ventaja.\`;
console.log(template);
// resultado:

//Con template strings
//si puedo escribir
//abajo que biena ventaja.`}/>
        <h2>escribir codigo HTML</h2>
        <h3>comillas</h3>
        <JavaScropt codigo={`let codeComillas = "<p>hola codigo html</p>
<p>esto dara un error</p>";
console.log(codeComillas);
// resultado: error`}/>
        <h3>template strings</h3>
        <JavaScropt codigo={`let codeComillas = \`<p>hola codigo html</p>
<p>esto no dara un error</p>\`;
console.log(codeComillas);
// resultado: 
// <p>hola codigo html</p>
// <p>esto no dara un error</p>`}/>
        <h2>¿Es mas facil?</h2>
        <Conseptos texto={`A parte de que las template strings nos da mas ventajas sobre las comillas podemos concatenar de forma mas sensilla.`}/>
        <h3>comillas</h3>
        <JavaScropt codigo={`let juego = prompt("dime tu juego preferido");
let oracionComilla = "El juego " + juego + " es demasiado bueno si lo recomendaria en todos lados."`}/>
        <h3>template strings</h3>
        <JavaScropt codigo={`let juego = prompt("dime tu juego preferido");
let oracionComilla = \`El juego ${"${juego}"} es demasiado bueno si lo recomendaria en todos lados.\``}/>
        <Conseptos texto={`Como te das cuenta nos evitamos poner el simbolo "+" y ademas evitamos poner espacios ("" + variable + "") para concatenar.`}/>

      </main>
      <Footer />
    </>
  );
}

export default ConcatenacionJavaScript;