import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";


function PropChildJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Estas propiedades modifican los elementos hijos de algun elemento html.`,
        lenguage: "JavaScropt",
        codigo: `content.replaceChild(new_element,old_element); // reemplaza un elemento hijo de un contenedor.
content.removeChild(element); // quita el elemento hijo de algun contenedor.
content.hasChildNodes(); // comprueba si un contenedor tiene elementos hijos.`
      }]}/>
      <main>
        <h1>propiedades de childs</h1>
        <h2>replaceChild</h2>
        
        <Html codigo={`<div class="content">
    <p class="p"> hola mundo </p>
</div>`}/>
        
        <Sintaxis codigo={`variable.replaceChild(
  "nuevo hijo",
  "hijo que queremos reemplazar"
);`}/>
        
        <JavaScropt codigo={`const content = document.querySelector(".content");
const p = document.querySelector(".p");
const parrafo_nuevo = document.createElement("P");
parrafo_nuevo.textContent = "adios mundo";
content.replaceChild(parrafo_nuevo,p);`}/>
        <Conseptos texto={`replaceChild se encarga de reemplazar un hijo por otro en el contenedor padre.`}/>
        <h2>removeChild</h2>
        
        <Html codigo={`<div class="content">
    <p class="parrafo">hola mundo </p>
</div>`}/>
        
        <JavaScropt codigo={`const content = document.querySelector(".content");
const parrafo = document.querySelector(".parrafo");
content.removeChild(parrafo);`}/>
        <Conseptos texto={`removeChild se encarga de eliminar un hijo de un contenedor padre.`}/>
        <h2>hasChildNodes</h2>
        
        <Html codigo={`<div class="content">
    <p class="parrafo"> </p>
</div>
<div class="content">
    <p class="parrafo"> </p>
</div>`}/>
        
        <JavaScropt codigo={`const content = document.querySelector(".content");
content.hasChildNodes();`}/>
        <Conseptos texto={`Con "hasChildNodes" comprobaremos si un elemento padre tiene o no un elemento hijo.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default PropChildJs;