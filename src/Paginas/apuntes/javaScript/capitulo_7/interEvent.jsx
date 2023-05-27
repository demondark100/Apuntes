import Conseptos from "../../../../componentes/conseptos/conseptos";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import { useRef } from "react";

function InterEventJs() {

  const input = useRef();
  const div = useRef();

  const seleccion =(e)=>{
    let posision_1 = e.target.selectionStart;
    let posision_2 = e.target.selectionEnd;
    let seleccionado = input.current.value.substring(posision_1,posision_2);
    div.current.textContent = seleccionado;
  }
  return (  
    <>
      <Menu2/>
      <main>
        <h1>eventos de la interfaz</h1>
        <h2>error</h2>
        <Html codigo={`<p class="parrafo">hola mundo</p>`}/>
        <JavaScropt codigo={`const parrafo = document.querySelector(".parrafo"); 
parrafo.addEventListener("error",()=>{
    alert("ha sucedido un error")
});`}/>
        <Conseptos texto={`Con "error" el evento se activara cuando pase un error por ejemplo no cargo una imagen.`}/>

        <h2>load</h2>
        <JavaScropt codigo={`window.addEventListener("load",()=>{
    alert("el sitio web a cargado correctamente.")
});`}/>
        <Conseptos texto={`Con "load" el evento se activara cuando el elemento que indiquemos haya cargado por completo.`}/>

        <h2>resize</h2>
        <JavaScropt codigo={`addEventListener("resize",()=>{
    alert("se cambio la resolucion")
});`}/>
        <Conseptos texto={`"resize" se ejecutara cuando la resolucion se cambie.`}/>

        <h2>scroll</h2>
        <JavaScropt codigo={`addEventListener("scroll",()=>{
    alert("se escroleo el sitio web")
});`}/>
        <Conseptos texto={`"scroll" se ejecutara cuando se escrolee en el sitio web.`}/>

        <h2>select</h2>
        <JavaScropt codigo={`seleccion.addEventListener("select",(e)=>{
    console.log(e.target.selectionStart);
    console.log(e.target.selectionEnd);
})`}/>
        <Conseptos texto={`Con "select" podemos ver que selecciono el usuario de algun input.

con "selectionStart" y "selectionEnd" podremos ver la posision del inicio y final de donde selecciono el usuario.`}/>

        <h2>ejercicio con select</h2>
        <Html codigo={`<input class="seleccion" type="text">
<div class="mostrar"> 

</div>`}/>
        <JavaScropt codigo={`const seleccion = document.querySelector(".seleccion"); 
const mostrar = document.querySelector(".mostrar");                
seleccion.addEventListener("select",(e)=>{
    let posision_1 = e.target.selectionStart;
    let posision_2 = e.target.selectionEnd;
    let seleccionado = seleccion.value.substring(posision_1,posision_2);
    mostrar.textContent = seleccionado
});`}/>
        <h3>resultado:</h3>
        <Conseptos texto={`Escribe algo y seleccionalo veras como es que en la pantalla aparecera lo que seleccionaste.`}/>


        <input onSelect={seleccion} ref={input} type="text" className="input_tecla" placeholder="escribe y selecciona"/>
        <div style={{color:"#fff",fontSize: "1.2em",marginTop: "1%"}} ref={div} className="mostrar">
          
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default InterEventJs;