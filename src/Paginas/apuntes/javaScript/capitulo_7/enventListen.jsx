import Conseptos from "../../../../componentes/conseptos/conseptos";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import { useState } from "react";

function EventListenJs() {

  const [mostrarAlerta, setMostrarAlerta] = useState(true);

  const handleClick = () => {
    if (mostrarAlerta) {
      alert('Hola');
      setMostrarAlerta(false);
    }
  };


  return (  
    <>
      <Menu2/>
      <main>
        <h1>eventos de escucha</h1>
        <Conseptos texto={`Los eventos de escucha sirven para poder interactuar con los elementos html con esto me refiero a darles funcionalidad ejemplo.`}/>
        <button onClick={()=>alert("Bienvenido a los eventos de escucha")}>click aqui</button>
        <h2>addEventListener</h2>
        <h3>html</h3>
        <Html codigo={`<button class="boton">
    saludar
</button>`}/>
        <h2>funcion rapida</h2>
        <h3>sintaxis</h3>
        <JavaScropt codigo={`elementoHTML.escucharEvento("tipo de evento",()=>{ 
    // codigo de la funcion.
})`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`const boton = document.querySelector(".boton");
boton.addEventListener("click",()=>{
    alert("hola");
})`}/>
        <h3>explicacion</h3>
        <Conseptos texto={`Empezamos con el evento "click" este se ejecutara cuando el usuario haga click en algun elemento html.`}/>
        <div className="website">
          <button onClick={()=>alert("hola")}>saludar</button>
        </div>
        <Conseptos texto={`La desventaja de la funcion rapida (como yo lo llamo) es que no se puede remover un evento de escucha.`}/>
        <h2>llamar funcion</h2>
        <h3>sintaxis</h3>
        <JavaScropt codigo={`elementoHTML.metodoEscucha("tipo de evento",funcionEvento); 
funcion funcionEvento(){ 
    // escribir el codigo de la funcion.
    elementoHTML.removerEvento(
        "tipo de evento",
        funcionEvento
    );
}`}/>
        <h2>javaScript</h2>
        <JavaScropt codigo={`const boton = document.querySelector(".boton"); 
boton.addEventListener("click",saludo);

function saludo(){ 
    alert("hola");
    boton.removeEventListener("click",saludo)
}`}/>
      <div className="website">
        <button onClick={handleClick}>saludar</button>
      </div>
      <Conseptos texto={`La ventaja de llamar a una funcion externa es que podemos remover un evernto de escucha cuando queramos.`}/>

      </main>
      <Footer/>
    </>
  );
}

export default EventListenJs;