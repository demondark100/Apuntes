import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";

function BloqueCJavaScript() {
  return (  
    <>
      <main>
        <h1>bloques de codigo</h1>
        <Conseptos texto={`Un bloque de código es un conjunto de instrucciones que se agrupan juntas. Puedes pensar en ellos como una caja o contenedor que contiene una serie de acciones relacionadas. En JavaScript, los bloques de código se definen mediante llaves "{}".`}/>
        <JavaScropt codigo={`// contenedor principal
// escribir codigo

// bloque de codigo
{
  // escribir codigo.
}`}/>
        <Conseptos texto={`Los bloques de codigo se usan en bucles , condicionales , funciones , etc.

En simples palabras un bloque de codigo es como crear un nuevo archivo js donde se reinicia todo las variable y todo.`}/>
        <h2>ejemplo</h2>
        <Conseptos texto={`Al decir que un bloque de codigo es como si se reiniciara todo me refiero a esto.`}/>
        <JavaScropt codigo={`// bloque principal
let numero = 12;
// bloque de codigo
{
  let numero = 20;
}`}/>
        <Conseptos texto={`Dentro de un bloque de codigo podemos crear la misma variable pero su valor puede cambiar y eso no nos dara problemas cosa que si daria problemas si lo hacemos en el mismo bloque de codigo.`}/>
        <h3>error</h3>
        <JavaScropt codigo={`let numero = 15;
let numero = 11;`}/>
        <h2>variables bloque de codigo</h2>
        <Conseptos texto={`Usa let en lugar de var porque te permite controlar mejor dónde es visible una variable. Con var, la variable se puede ver en todo el programa, lo que puede causar problemas. Con let, la variable solo es visible en el bloque de código donde se declaró, lo que evita conflictos y te da más control. En resumen, let es más específico y seguro de usar.`}/>
        <h2>var</h2>
        <JavaScropt codigo={`var number = 15;
{
  var number = 18;
}
console.log(number);
// resultado: 18`}/>
        <Conseptos texto={`El resultado es 18 pero se supone que estamos diciendo que me muestre el resultado de la variable pero le indicamos que me muestre el valor de la variable que esta afuera del bloque de codigo esto debido a que dentro del bloque de codigo se esta creando la misma variable pero el valor de la variable se cambia y esto nos puede dar muchos problemas a la hora de codificar.`}/>
        <JavaScropt codigo={`var number = 15;
{
  var numer = 18;
  console.log(number);
}
// resultado: 15`}/>
        <h2>let soluciona</h2>
        <Conseptos texto={`Como mencione antes let viene a solucionar este problema.`}/>
        <JavaScropt codigo={`let numero = 15;
{
  let numero = 18;
}
console.log(numero);
// resultado: 15`}/>
        <Conseptos texto={`Ahora si respeta su bloque de codigo donde el resultado es 15 porque la variable numero en el bloque principal es 15.`}/>
        <JavaScropt codigo={`let objeto = "mesa";
{
  let objeto = "puerta";
  console.log(objeto);
}
// resultado: "puerta"`}/>
        <Conseptos texto={`Como te das cuenta respeta su respectivo bloque de codigo.`}/>

        <h2>const se reinicia</h2>
        <Conseptos texto={`Como mencione const no puede cambiar su valor pero como en un bloque de codigo podemos crear la misma variable y su valor se cambiara pero solo en su bloque de codigo osea que se comporta igual que let.`}/>
        <JavaScropt codigo={`const material = "madera";
{
  const material = "metal";
  console.log(material);
}
// resultado: "metal"`}/>
        <Conseptos texto={`En resumen dentro de un bloque de codigo podemos crear una variable con el mismo nombre y con let y const se respeta sus valores sin embargo con var no respeta los valores de su respectivo bloque de codigo.`}/>
      </main>
      <Footer />
    </>
  );
}

export default BloqueCJavaScript;