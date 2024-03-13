import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function ObtenModJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Aqui podemos modificar el contenido de algun elemento html.`,
        lenguage: "JavaScropt",
        codigo: `const content = document.querySelector(".content");
content.textContent; // obtiene el contenido de un elemento html.
content.textContent = "hola"; // modifica el contenido de un elemento html.
content.innerHTML; // hola <b>mundo</b> | muestra el contenido y las etiquetas que estan dentro de un contenedor.
content.innerHTML = \`hola <i>mundo</i>\`; // modifica el contenido y los elementos html dentro de un contenedor.
content.outerHTML; // muestra el contenedor y todo su contenido.`
      }]}/>
      <main>
        <h1>obtencion y modificacion de contenido</h1>
        <Conseptos texto={`Con esto podremos modificar y ver el contenido de los elementos html.`}/>
        <h2>textContent</h2>
        
        <Html codigo={`<p class="contenidoTexto"> 
    hola  <b> mundo </b>
</p>`}/>
        
        <JavaScropt codigo={`const contenidoTexto = document.querySelector(".contenidoTexto");
contenidoTexto.textContent;
//resultado: "holamundo"`}/>
        <Conseptos texto={`textContent solo nos mostrara el contenido de un elemento html.`}/>
        <h3>Modificar contenido</h3>
        
        <Html codigo={`<p>hola: <b class="nombre"></b></p>`}/>
        <JavaScropt codigo={`const nombre = document.querySelector(".nombre");
nombre.textContent = "Mitsuri";`}/>
        <div className="website">
          <p>hola: <b>Mitsuri</b></p>
        </div>
        <h2>innerHTML</h2>
        
        <Html codigo={`<p class="HTMLin"> 
    hola  <b> mundo </b> 
</p>`}/>
        
        <JavaScropt codigo={`const htmlin = document.querySelector(".HTMLin"); 
htmlin.innerHTML;
//resultado: "hola <b> mundo </b>"`}/>
        <Conseptos texto={`innerHTML nos mostrara las etiquetas que esten dentro de ese elemento.`}/>
        <h2>outerHTML</h2>
        
        <Html codigo={`<p class="todo"> 
    hola  <b> mundo </b> 
</p> `}/>
        
        <JavaScropt codigo={`const todo = document.querySelector(".todo"); 
todo.outerHTML; 
//resultado: "<p class="todo"> hola <b> mundo </b> /p>"`}/>
        <Conseptos texto={`outerHTML nos mostrara todo el elemento html.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ObtenModJs;