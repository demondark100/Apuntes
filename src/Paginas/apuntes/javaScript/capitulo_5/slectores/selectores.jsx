import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function SelectoresDOMJavaScript() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto seleccionaremos los elementos html para trabjar con ellos de forma dinamica.`,
        lenguage: `JavaScropt`,
        codigo: `const id1 = document.getElementById("id1"); // seleccionar por id.
const parrafos = document.getElementsByTagName("p"); // selecciona varios elementos de un tipo en este caso todos los <p>
const idQuery = document.querySelector("#idQuery"); // selecciona un elemento por clase o id
const claseQuery = document.querySelector(".claseQuery"); // selecciona un elemento por clase o id
const parrafos = document.querySelectorAll(".parrafos"); // selecciona varios elementos por clase, y se crea un arreglo.`
      }]}/>
      <main>
        <h1>selectores de elementos</h1>
        <Conseptos texto={`Los selectores nos permitira seleccionar cualquier elemento o grupo de elementos de HTML con elementos me refiero a las cajitas.`}/>
        <Html codigo={`<body>
  <p></p>
  <a></a>
  <img>
  <main>
  <footer>
</body>`}/>
        <h2>sintaxis</h2>
        <JavaScropt codigo={`crear variable = documento.tipoDeSelector("elemento html");`}/>
        <h2>getElementById</h2>
        
        <Html codigo={`<p id="elemento"> </p> `}/>
        
        <JavaScropt codigo={`let parrafo = document.getElementById("elemento");`}/>
        <Conseptos texto={`Esto nos permitira seleccionar los elementos atravez de su id.`}/>
        <h2>getElementsByTagName</h2>
        
        <Html codigo={`<p></p>
<p></p>
<p></p>
<p></p>`}/>
        
        <JavaScropt codigo={`let parrafo = document.getElementsByTagName("p");`}/>
        <Conseptos texto={`Esto nos servira para seleccionar un grupo de elementos en este caso todos los "p".`}/>
        <h2>querySelector</h2>
        
        <Html codigo={`<p class="elemento1"> </p>
<p id="elemento2"> </p>`}/>
        
        <JavaScropt codigo={`let parrafo1 = document.querySelector(".elemento1");
let parrafo2 = document.querySelector("#elemento2");`}/>
        <Conseptos texto={`Esto nos servira para seleccionar cualquier tipo de elemento id o clases.`}/>
        <h2>querySelectorAll</h2>
        
        <Html codigo={`<p class="elemento"> </p> 
<p class="elemento"> </p> `}/>
        
        <JavaScropt codigo={`let parrafos = document.querySelectorAll(".elemento");`}/>
        <Conseptos texto={`Esto nos sevira para seleccionar a un grupo de elementos que tengan la misma clase.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default SelectoresDOMJavaScript;