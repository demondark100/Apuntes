import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";

function ObModChildJs() {
  return (  
    <>
      <main>
        <h1>obtencion de childs</h1>
        <h2>appendChild</h2>
        
        <Sintaxis codigo={`variable.appendChild("aqui el elemento hijo.")`}/>
        
        <Html codigo={`<div class="contenedor">

</div>`}/>
        
        <JavaScropt codigo={`const contenedor = document.querySelector(".contenedor");
let parrafo = document.createElement("P");
let fragmento = document.createDocumentFragment();
parrafo.textContent = "hola mundo";
fragmento.appendChild(parrafo);
contenedor.appendChild(fragmento);`}/>
        <Conseptos texto={`appendChild() hace que un elemento creado en javaScript sea puesto como hijo a un elemento HTML ya creado.`}/>
        <ol>
          <li>en este caso creamos un div padre llamado "contenedor".</li>
          <li>seleccionamos al elemento padre</li>
          <li>creamos un elemento parrafo en javaScript.</li>
          <li>creamos un fragmento.</li>
          <li>al elemento parrafo le ponemos el contenido "hola mundo" con textContent.</li>
          <li>usando appendChild agregamos el parrafo al fragmento para obtimizar el codigo.</li>
          <li>por ultimo ponemos el fragmento que guarda al parrafo en el contenedor div.</li>
        </ol>
        <h2>firstElementChild y lastElementChild</h2>
        
        <Html codigo={`<div class="a_content"> 
    <p> algo 1 </p>
    <p> algo 2 </p>
    <p> algo 3 </p>
</div> `}/>
        
        <JavaScropt codigo={`const a_content = document.querySelector(".a_content");
let algo1 = a_content.firstElementChild;
let algo2 = a_content.lastElementChild;
console.log(algo1 , algo2);
// resultado:
// <p> algo 1 </p>
// <p> algo 3 </p>`}/>
        <Conseptos texto={`firstElementChild y lastElementChild obtendra el primer y ultimo hijo de un elemento contenedor.`}/>
        <h2>children</h2>
        
        <Html codigo={`<div class="a_content">
    <p> algo 1 </p>
    <p> algo 2 </p>
    <p> algo 3 </p>
</div>`}/>
        
        <JavaScropt codigo={`const a_content = document.querySelector(".a_content");
let algo2 = a_content.children[1];
console.log(algo2);
// resultado:
// <p> algo 2 </p>
`}/>
        <Conseptos texto={`children nos devolvera la posision del elemento hijo que le indiquemos , Su conteo es similar al de un arreglo asi que debes contar desde 0.`}/>

      </main>
      <Footer/>
    </>
  );
}

export default ObModChildJs;