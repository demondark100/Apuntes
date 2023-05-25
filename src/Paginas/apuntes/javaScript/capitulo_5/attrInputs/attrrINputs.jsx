import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import { useRef } from "react";

function AtributosInputsJs() {
  const colorStyle = useRef();
  const codeExample = () =>{
    const fondo = prompt(`  Escoje un color de fondo:
1. para color rojo.
2. para color verde.
3. para color azul.`)
    if (fondo == 1) colorStyle.current.style.backgroundColor = "#f00";
    else if (fondo == 2) colorStyle.current.style.backgroundColor = "#0f0";
    else if (fondo == 3) colorStyle.current.style.backgroundColor = "#00f";
    else alert("solo te di tres opciones.");
  }
  return (  
    <>
      <Menu2/>
      <main>
        <h1>atributos de inputs</h1>
        <Conseptos texto={`Los atributos de los inputs a diferencia de los atrbutos por elementos estos no necesitan de:`}/>
        <JavaScropt codigo={`variable.setAttribute("atributo","valor");`}/>
        <Conseptos texto={`La sintaxis es mas parecida al de un objeto.`}/>
        <JavaScropt codigo={`variable.atributo = "valor";`}/>
        <h2>placeholder</h2>
        
        <Html codigo={`<input class="textoPlace" type="text"> `}/>
        <h1>javaScript</h1>
        <JavaScropt codigo={`const textoPlace = document.querySelector(".textoPlace"); 
textoPlace.placeholder = "nombre";`}/>
        <Conseptos texto={`Recuerda que placeholder muestra un texto indicativo al usuario.`}/>
        <div className="website">
          <input placeholder="nombre" />
        </div>
        <h2>type</h2>
        
        <Html codigo={`<input class="tipo" type="text">`}/>
        
        <JavaScropt codigo={`const tipo = document.querySelector(".tipo"); 
tipo.type = "password";`}/>
        <Conseptos texto={`Aqui solo cambiamos el tipo de input de text a password.`}/>
        <div className="website">
          <input type="password"/>
        </div>
        <h2>value</h2>
        
        <Html codigo={`<input class="valor" type="text"> `}/>
        
        <JavaScropt codigo={`const valor = document.querySelector(".valor"); 
valor.value = "Music";`}/>
        <Conseptos texto={`Recuerda que value es el valor que lleva un input y aqui en javaScript lo estamos modificando para que tenga el valor "Music" por defecto. `}/>
        <div className="website">
          <input type="text" defaultValue={"Music"}/>
        </div>
        <h2>style</h2>
        <Conseptos texto={`Este atributo es global no lo mensione antes porque lo mejor viene al final :v.

Bueno este atributo es para dar estilos a cualquier elemento html es como un css pero en javaScript.`}/>
        <h2>sintaxis</h2>
        <JavaScropt codigo={`variable.estilo.propiedad = "valor del estilo";`}/>
        
        <Html codigo={`<p id="colorLetra">color</p>`}/>
        
        <JavaScropt codigo={`const colorLetra = document.getElementById("colorLetra");
colorLetra.style.color = "#0f0";`}/>
        <div className="website">
          <p style={{color: "#0f0"}}>color</p>
        </div>
        <Conseptos texto={`Dato curioso recuerdas que en css existen valores que se separan por "-" por ejemplo "background-color" , Con el atributo style se reemplaza "-" por camelCase osea pasa de ser:
"background-color" a "backgroundColor" y asi con los demas elementos que lleva "-".`}/>
        <h2>ejercicio</h2>
        
        <Html codigo={`
<p id="colorStyle">cambio de fondo</p>`}/>
        
        <JavaScropt codigo={`const colorStyle = document.getElementById("colorStyle");
const fondo = prompt(\`  Escoje un color de fondo:
1. para color rojo.
2. para color verde.
3. para color azul.\`)
if (fondo == 1) colorStyle.style.backgroundColor = "#f00";
else (if fondo == 2) colorStyle.style.backgroundColor = "#0f0";
else (if fondo == 3) colorStyle.style.backgroundColor = "#00f";
else alert("solo te di tres opciones.");`}/>
        <div className="website">
          <b style={{cursor: "pointer"}} onClick={codeExample}>ejecutar</b>
          <p ref={colorStyle}>cambio de fondo</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default AtributosInputsJs;