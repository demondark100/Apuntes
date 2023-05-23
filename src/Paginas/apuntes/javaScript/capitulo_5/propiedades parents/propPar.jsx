import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function PropParJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>propiedades de parents</h1>
        <h2>parentElemet y parentNode</h2>
        <h3>html</h3>
        <Html codigo={`<div class="content">
    <p class="a_1"> algo xd </p>
    <p class="a_2"> algo xd </p>
    <p class="a_3"> algo xd </p>
</div>`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const content = document.querySelector(".content");
const a_1 = document.querySelector(".a_1");
const a_2 = document.querySelector(".a_2");
const a_3 = document.querySelector(".a_3");
a_1.parentElemet;
a_2.parentNode;`}/>
        <Conseptos texto={`parentElemet y parentNode mostraran los elementos padres o contenedores que esta ensima de los elementos hijos.

Hay muchos mas pero lo dejaremos con estos dos ya que son los mas usados.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default PropParJs;