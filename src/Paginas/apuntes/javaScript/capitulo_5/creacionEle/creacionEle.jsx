import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";

function CreacionEleJs() {
  return (  
    <>
      <main>
        <h1>creacion de elementos</h1>
        <Conseptos texto={`Nosotros podemos crear elementos html desde javaScript aqui veremos como se hace.`}/>
        <h2>createElement</h2>
        
        <Html codigo={`<div class="contenedor">  </div>`}/>
        
        <JavaScropt codigo={`const contenedor = document.querySelector(".contenedor"); 
let parrafo = document.createElement("P");`}/>
        <Conseptos texto={`con "document.createElemen()" crearemos un elemento.
dato curioso:
para crear un elemento con "createElement" se debe crear con mayusculas ejemplo.
"P" , "LI" , "UL" , etc.`}/>
        <h2>createDocumentFragment</h2>
        
        <Html codigo={`<div class="contenedor"></div>`}/>
        
        <JavaScropt codigo={`const contenedor = document.querySelector(".contenedor"); 
let fragmento = document.createDocumentFragment();`}/>
        <Conseptos texto={`createDocumentFragment es para poder obtimizar el codigo debido a que si estamos trabajando con bucles el elemento se pintara desde 0 para actualizar bueno "createDocumentFragment" evita eso haciendo que los elementos en el DOM no se pinten desde 0 una y otra vez.`}/>
      </main>
      <Footer />
    </>
  );
}

export default CreacionEleJs;