import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./keyEvent.css";

function KeyEventJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>eventos de teclado</h1>
        <h2>keydown</h2>
        
        <Html codigo={`<input type="text" class="keydown" placeholder="keydown">`}/>
        
        <JavaScropt codigo={`const keydown = document.querySelector(".keydown"); 
keydown.addEventListener("keydown",()=>{ 
    alert("keydown event");
})`}/>
        <Conseptos texto={`Con "keydown" el evento se activara cuando una tecla sea presionada.`}/>
        <h2>resultado:</h2>
        <Conseptos texto={`Presiona una tecla en donde dice "keydown"`}/>
        <input
          onKeyDown={()=>alert("keydown event")}
          className="input_tecla"
          type="text" 
          placeholder="keydown"
        />

        <h2>keypress</h2>
        
        <Html codigo={`<input type="text" class="keypress" placeholder="keypress">`}/>
        
        <JavaScropt codigo={`const keypress = document.querySelector(".keypress"); 
keypress.addEventListener("keypress",()=>{ 
    alert("keypress event");
})`}/>
        <Conseptos texto={`Con "keypress" el evento se activara cuando el usuario presione y suelte una tecla.`}/>
        <h2>resultado:</h2>
        <Conseptos texto={`Presiona una tecla en donde dice "keypress".`}/>
        <input
          onKeyPress={()=>alert("keypress event")}
          placeholder="keypress"
          className="input_tecla"
          type="text" 
        />

        <h2>keyup</h2>
        
        <Html codigo={`<input type="text" class="keyup" placeholder="keyup">`}/>
        
        <JavaScropt codigo={`const keyup = document.querySelector(".keyup"); 
keyup.addEventListener("keyup",()=>{ 
    alert("keyup event");
})`}/>
        <Conseptos texto={`Con "keyup" el evento se activara cuando se suelte una tecla.`}/>
        <h2>resultado:</h2>
        <Conseptos texto={`Presiona una tecla por 1 segundo en donde dice "keyup"`}/>
        <input
          onKeyUp={()=>alert("keyup event")}
          className="input_tecla"
          placeholder="keyup"
          type="text" 
        />
      </main>
      <Footer/>
    </>
  );
}

export default KeyEventJs;