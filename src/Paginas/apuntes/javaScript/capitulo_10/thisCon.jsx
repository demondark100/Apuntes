import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function ThisCon() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>this contextual</h1>
        <Conseptos texto={`"this" hace referencia al objeto por ejemplo si declaramos "this" fuera de cualquier objeto.`}/>
        <JavaScropt codigo={`console.log(this);`}/>
        <Conseptos texto={`Entonces this hara referencia al objeto window que es el objeto principal.`}/>
        <h3>esto es como decir</h3>
        <JavaScropt codigo={`console.log(window);`}/>
        <Conseptos texto={`Tanto window como this nos mostrara lo mismo.`}/>
        <h2>ejemplo mas claro</h2>
        <h3>error</h3>
        <JavaScropt codigo={`//"use strict"; 
//primero ejecuta esto sin "use strict" luego descomenta la linea que dice "use strict"


// window.nombre = prompt("nombre"); 
//this.nombre = prompt("nombre"); 
// this y window son lo mismo por eso ambas opciones de arriba son validas.

function mostrar(){ 
    console.log(\`hola ${"${this.nombre}"}\`)
} 
mostrar() 
//resultado: "hola nombre de usuario"`}/>
        <Conseptos texto={`Este this hace referencia al objeto window de afuera pero es erroneo ya qye this debe hacer referencia a un objeto por eso si usamos "use strict" esto directamente no se ejecutara.`}/>
        <JavaScropt codigo={`"use strict";
function mostrar(){
    console.log(\`hola ${"${this.nombre}"}\`)
}

const objeto = {
    nombre: prompt("nombre"),
    mostrar
} 

objeto.mostrar()`}/>
        <Conseptos texto={`Esto es correcto porque la funcion esta haciendo referencia al objeto que tiene como estencion nombre.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ThisCon;