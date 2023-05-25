import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function PropSiJs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>propiedades de sibling</h1>
        <h2>previousElementSibling y nextElementSibling</h2>
        
        <Html codigo={`<div class="content">
    <h2 class="title_1"> primero </h2>
    <h3 class="title_2"> segundo </h3>
    <h3 class="title_3"> tercero </h3>
</div>`}/>
        
        <JavaScropt codigo={`const title_2 = document.querySelector(".title_2");
title_2.nextElementSibling;
title_2.previousElementSibling;`}/>
        <Conseptos texto={`Con "previousElementSibling" veremos el elemento hermano anterior.
Con "nextElementSibling" veremos al siguiente hermano.`}/>
      </main>
      <Footer />
    </>
  );
}

export default PropSiJs;