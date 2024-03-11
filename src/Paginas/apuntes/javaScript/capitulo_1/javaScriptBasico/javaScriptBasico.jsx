import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function JavaScriptBasico() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Estas funciones se usaran siempre para ver el resultado de nuestro codigo.`,
        lenguage: "JavaScropt",
        codigo: `// comentamos lineas con "//" , esto ignorara esa linea de codigo
alert("hola mundo"); // mostrar algo en una ventana del navegador.
console.log("hola mundo"); // mostrar algo en la consola del navegador.`
      }]}/>
      <main>
        <h1>javaScript basico</h1>
        <h2>comentar codigo</h2>
        <Conseptos texto={`El comentario de codigo nos sirve para poder escribir cualquier cosa. El lenguaje no detectara el texto que escribamos en esa linea de codigo es como hacer codigo invicible.

Para comentar codigo se usa este simbolo "//".`}/>
        
        <JavaScropt codigo={`esto dara un error de sintaxis ya que no estoy comentando este texto.`}/>
        
        <JavaScropt codigo={`// Esto no dara ningun error porque esta linea
// de codigo si esta comentada.`}/>
        <h2>alert</h2>
        <Conseptos texto={`con "alert()" mostraremos lo que queramos en una pantalla ejemplo.`}/>
        <JavaScropt codigo={`// mostrar strings
alert("hola mundo");
// mostrar datos numericos
alert(15);
alert(15.5);
// mostrar datos booleanos
alert(true);
alert(false);`}/>
        <h2>console.log()</h2>
        <Conseptos texto={`Para que puedas ver el resultado que nos brinda console.log debemos abrir la consola del navegador apretando f12.`}/>
        
        <JavaScropt codigo={`// mostrar strings.
console.log("hola mundo");
// mostrar datos numericos.
console.log(55);
console.log(15.5);
// mostrar booleanos.
console.log(true);
console.log(false);`}/>
        <Conseptos texto={`Mayormente usaremos console.log debido a que console.log da mas detalles en los datos cosa que alert() no puede hacer.`}/>
      </main>
      <Footer />
    </>
  );
}

export default JavaScriptBasico;