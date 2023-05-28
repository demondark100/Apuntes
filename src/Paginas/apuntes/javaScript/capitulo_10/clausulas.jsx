import Conseptos from "../../../../componentes/conseptos/conseptos";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import { useRef } from "react";

function ClausulasJs() {
  const texto = useRef(null);

  return (  
    <>
      <Menu2/>
      <main>
        <h1>clausulas</h1>
        <Conseptos texto={`Las clausulas son funciones que retornan otras funciones.`}/>
        <JavaScropt codigo={`const saludar = (nombre) =>{
    return function(){
        console.log(\`hola ${"${nombre}"}\`)
    }
}
let saludo = saludar("una persona")
addEventListener("load",saludo)`}/>
        <h2>ejemplo clausula</h2>
        <h3>sin clausula</h3>
        <Html codigo={`<div class="content"> 
    <button class="t10 boton_1"> 10px </button>
    <button class="t15 boton_1"> 15px </button>
    <button class="t20 boton_1"> 20px </button>
    <div class="texto"> 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
        libero repellendus et esse suscipit veritatis iure rem sed eum fuga
        quo odit ad necessitatibus voluptas, similique reiciendis
        recusandae? Laboriosam, eveniet!
    </div>
</div>`}/>
        <JavaScropt codigo={`const cambiarTamaño = tamaño =>{ 
    document.querySelector(".texto").style.fontSize = \`"${"${tamaño}"}"px\`
    //esta funcion recibe un parametro para cambiar el tamaño de un texto.
} 
document.querySelector(".t10").addEventListener("click",()=>cambiarTamaño(10)); 
document.querySelector(".t15").addEventListener("click",()=>cambiarTamaño(15)); 
document.querySelector(".t20").addEventListener("click",()=>cambiarTamaño(20));`}/>

        <h3>con clausula</h3>
        <Html codigo={`<div class="content"> 
    <button class="t10 boton_1">10px </button>
    <button class="t15 boton_1">15px </button>
    <button class="t20 boton_1">20px </button>
    <div class="texto"> 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
        libero repellendus et esse suscipit veritatis iure rem sed eum fuga
        quo odit ad necessitatibus voluptas, similique reiciendis
        recusandae? Laboriosam, eveniet!
    </div>
</div>`}/>
        <JavaScropt codigo={`const cambiarTamaño = tamaño =>{ 
    return ()=>{ 
        document.querySelector(".texto").style.fontSize = \`${"${tamaño}"}px\`
    } 
    //esta funcion recibe un parametro para cambiar el tamaño de un texto. 
} 
let t10 = cambiarTamaño(10); 
let t15 = cambiarTamaño(15); 
let t20 = cambiarTamaño(20); 
document.querySelector(".t10").addEventListener("click",t10); 
document.querySelector(".t15").addEventListener("click",t15); 
document.querySelector(".t20").addEventListener("click",t20);`}/>
        <Conseptos texto={`El resultado de ambos codigos sera el mismo.`}/>
        
        <div className="website">
            <button onClick={()=>texto.current.style.fontSize = `10px`}>10px </button>
            <button onClick={()=>texto.current.style.fontSize = `15px`}>15px </button>
            <button onClick={()=>texto.current.style.fontSize = `20px`}>20px </button>
            <div ref={texto}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                libero repellendus et esse suscipit veritatis iure rem sed eum fuga
                quo odit ad necessitatibus voluptas, similique reiciendis
                recusandae? Laboriosam, eveniet!
            </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ClausulasJs;