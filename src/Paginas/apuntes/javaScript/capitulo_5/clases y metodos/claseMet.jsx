import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import GridTemplate from "../../../css/capitulo_5/grid/gridTemplate";

function ClasesMetJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>clases y metodos</h1>
        <Conseptos texto={`Todo esto nos servira segun el contexto en el que estemos en nuestro codigo.`}/>
        <h2>sintaxis classList</h2>
        <JavaScropt codigo={`variable.classList.metodos("parametros");`}/>
        <h2>add</h2>
        <h3>html</h3>
        <Html codigo={`<p class="agregar">agregar</p>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const agregar = document.querySelector(".agregar"); 
agregar.classList.add("agregado");`}/>
        <Conseptos texto={`Con "add" podremos agregar una clase a un elemento html.`}/>
        <h2>remove</h2>
        <h3>html</h3>
        <Html codigo={`<p class="quitar">quitar</p>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const quitar = document.querySelector(".quitar"); 
quitar.classList.remove("removido");`}/>
        <Conseptos texto={`Con "remove" podremos quitarle una clase a un elemento.`}/>
        <h2>item</h2>
        <h3>html</h3>
        <Html codigo={`<p class="indice">indice</p>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const indice = document.querySelector(".indice"); 
indice.classList.item(0);`}/>
        <Conseptos texto={`Con "item" nos devolvera el indice de la clase que le indiquemos en este caso [0] = "indice" es como si estuviese llamando la posision de un arreglo.`}/>
        <h2>contains</h2>
        <h3>html</h3>
        <Html codigo={`<p class="incluye">incluye </p> `}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const incluye = document.querySelector(".incluye"); 
incluye.classList.contains("incluye"); 
//resultado: true: 
incluye.classList.contains("a");
//resultado: false `}/>
        <Conseptos texto={`Con "contains" verificarenos si un objeto lleva una clase o no es como un "includes" osea que nos dira true o false segun sea.`}/>
        <h2>replace</h2>
        <h3>html</h3>
        <Html codigo={`<p class="reemplazar">reemplazar </p>`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`replace(
  "clase que queremos reemplazar",
  "clase nueva para reemplazar la clase anterior"
);`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const reemplazar = document.querySelector(".reemplazar"); 
reemplazar.classList.replace("reemplazar","reemplazado");
// resultado: se cambio la clase "reemplazar" por "reemplazado"`}/>
        <Conseptos texto={`Esto nos servira para reemplazar una clase por otra.`}/>
        <h2>toggle</h2>
        <h3>html</h3>
        <Html codigo={`<p class="distinto">distinto</p>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const distinto = document.querySelector(".distinto"); 
distinto.classList.toggle("distinto");`}/>
        <Conseptos texto={`toggle verifica si el elemento tiene una clase y si no la tiene la agregara y si la tiene la eliminara.`}/>
        
      </main>
      <Footer/>
    </>
  );
}

export default ClasesMetJs;