import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function ObjScreenJs() {
  return (  
    <>
      <main>
        <h1>Objeto screen</h1>
        <Conseptos texto={`"scrren" es un objeto que nos permite acceder a algunas propiedades de la pantalla.`}/>
        <h2>width / height</h2>
        <Conseptos texto={`"width" nos mostrara el ancho total de la pantalla.
"height" nos mostrara la altura total de la pantalla`}/>
        <JavaScropt codigo={`// screen.width
// screen.height

console.log(\`el alto total de la pantalla es ${"${screen.height}"}\`);
console.log(\`el ancho total de ka pantalla es ${"${screen.width}"}\`);`}/>
        <h2>availWidth / availHeight</h2>
        <Conseptos texto={`"availWidth" nos mostrara el ancho del sitio web.
"availHeight" nos mostrara el alto del sitio web.`}/>
        <JavaScropt codigo={`// screen.availWidth
// screen.availHeight

console.log(\`el ancho total del sitio web es de ${"${screen.availWidth}"}\`);
console.log(\`el alto total del sitio web es de ${"${screen.availHeight}"}\`);`}/>
        <h2>innerWidth / innerHeight</h2>
        <Conseptos texto={`"innerWidth" nos mostrara el ncho de nuestro viwwport de nuestro sitio web.
"innerHeight" nos mostrara la altura de nuestro viewport de nuestro sitio web.`}/>
          <JavaScropt codigo={`// window.innerWidth
// window.innerHeight

console.log(\`el ancho de nuestro viewport es ${"${window.innerWidth}"}\`);
console.log(\`el alto de nuestro viweport es ${"${window.innerHeight}"}\`);`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ObjScreenJs;