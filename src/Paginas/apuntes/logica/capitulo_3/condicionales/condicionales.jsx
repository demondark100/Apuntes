import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScript from "../../../../../componentes/lenguajes/JavaScript";
import Python from "../../../../../componentes/lenguajes/Python";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import CondicionalesDiagrama from "./diagrama";
import { useRef, useState } from "react";

function CondicionalesLogica() {
  const [mostrarCondicional, setMostrarCondicional] = useState(false);
  const contenedor = useRef(null);
  const mostrarOcultarCondicional=()=>{
    contenedor.current.style.top = `${window.scrollY}px`;
    setMostrarCondicional(true)
    document.body.classList.add("condicionalBody")
  } 
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <MensajeModal texto={`Aqui podras escribir el codigo en el navegador ya que escribiremos codigo javaScript.`}/>
      <main>
        <h1>Condicionales</h1>
        <Conseptos texto={`Las condicionales en programación son instrucciones que permiten tomar decisiones en función de si se cumple o no una determinada condición.`}/>
        <h2>pseudocodigo</h2>
        <Python codigo={`si "lavaste los platos" entonces:
  #ganas un premio
sino:
  #te castigan`}/>
        <Conseptos texto={`Tambien podemos hacer mas de una condicional por si tenemos mas opciones.

Ahora un pequeño ejemplo grafico para entender mejor.`}/>


        <p onClick={mostrarOcultarCondicional}>mostrar ejemplo grafico</p>
        <div
          ref={contenedor} 
          className={`diagramaContentCondicional ${mostrarCondicional ? "":"ocultarMostrarCondicional"}`}>
          <CondicionalesDiagrama cerrar={setMostrarCondicional}/>
        </div>


        <Conseptos texto={``}/>
        <h2>pseudocodigo</h2>
        <Conseptos texto={`Hacer un programa que verifique si un numero es positivo o negativo.`}/>
        <Python codigo={`#no copiar
numero = pedirDato("introduce un numero.");

si numero > 0 entonces:
  mostrar("el numero es positivo");
sino si numero < 0 entonces:
  mostrar("el numero es negativo");
sino:
  mostrar("el numero es cero");`}/>
        <Conseptos texto={`Para verificar el resultado lo pasaremos a codigo javaScript para que lo puedas copiar en tu consola del navegador.`}/>
        <JavaScript codigo={`numero = prompt("introduce un numero");

if(numero > 0){
  alert("el numero es positivo");
} else if (numero < 0){
  alert("el numero es negativo");
} else {
  alert("el numero es cero");
}`}/>
      </main>
      <Footer />
    </>
  );
}

export default CondicionalesLogica;