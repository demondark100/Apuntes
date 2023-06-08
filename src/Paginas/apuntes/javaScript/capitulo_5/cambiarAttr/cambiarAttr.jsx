import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";

function CambiarAttrJavaScript() {
  return (  
    <>
      <main>
        <h1>atributos</h1>
        <Conseptos texto={`Esto nos servira mas que nada en los inputs ya que estos llevan mas atributos pero como bien dije se pueden cambiar todo tipo de atributos por ejemplos los de imagenes , audio , parrafos , etc..`}/>
        <h2>sintaxis</h2>
        <JavaScropt codigo={`variable.tipoDeCambio("parametros");`}/>
        <h2>setAttribute</h2>
        
        <Html codigo={`<input class="color" type="text">`}/>
        
        <JavaScropt codigo={`let color = document.querySelector(".color"); 
a.setAttribute("type","color");
          //atributo , // valor`}/>
        <div className="website">
          <input type="color" />
        </div>
        <Conseptos texto={`Con esto podremos cambiar el atributo de un elemento.`}/>
        <h2>getAttribute</h2>
        
        <Html codigo={`<input class="acceder" type="text">`}/>
        
        <JavaScropt codigo={`let a = document.querySelector(".a"); 
a.getAttribute("type")
// resultado: true`}/>
        <Conseptos texto={`Esto nos servira para acceder al atributo de un nodo y nos develvera:
true: si el atributo existe.
null: si el atributo no existe.`}/>
        <h2>removeAttribute</h2>
        
        <Html codigo={`<input class="remover" type="text">`}/>
        
        <JavaScropt codigo={`let remover = document.querySelector(".remover"); 
a.removeAttribute("type");`}/>
        <Conseptos texto={`Con esto removeremos el atributo de un elemento.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default CambiarAttrJavaScript;