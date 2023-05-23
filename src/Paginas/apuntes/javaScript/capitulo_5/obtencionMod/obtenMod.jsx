import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function ObtenModJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>obtencion y modificacion de contenido</h1>
        <Conseptos texto={`Con esto podremos modificar y ver el contenido de los elementos html.`}/>
        <h2>textContent</h2>
        <h3>html</h3>
        <Html codigo={`<p class="contenidoTexto"> 
    hola  <b> mundo </b>
</p>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const contenidoTexto = document.querySelector(".contenidoTexto");
contenidoTexto.textContent;
//resultado: "holamundo"`}/>
        <Conseptos texto={`textContent solo nos mostrara el contenido de un elemento html.`}/>
        <h3>Modificar contenido</h3>
        <h3>html</h3>
        <Html codigo={`<p>hola: <b class="nombre"></b></p>`}/>
        <JavaScropt codigo={`const nombre = document.querySelector(".nombre");
nombre.textContent = "Mitsuri";`}/>
        <div className="website">
          <p>hola: <b>Mitsuri</b></p>
        </div>
        <h2>innerHTML</h2>
        <h3>html</h3>
        <Html codigo={`<p class="HTMLin"> 
    hola  <b> mundo </b> 
</p>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const htmlin = document.querySelector(".HTMLin"); 
htmlin.innerHTML;
//resultado: "hola <b> mundo </b>"`}/>
        <Conseptos texto={`innerHTML nos mostrara las etiquetas que esten dentro de ese elemento.`}/>
        <h2>outerHTML</h2>
        <h3>html</h3>
        <Html codigo={`<p class="todo"> 
    hola  <b> mundo </b> 
</p> `}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const todo = document.querySelector(".todo"); 
xd.outerHTML; 
//resultado: "<p class="todo"> hola <b> mundo </b> /p>"`}/>
        <Conseptos texto={`outerHTML nos mostrara todo el elemento html.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ObtenModJs;