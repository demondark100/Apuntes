import { useEffect } from "react";
import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScript from "../../../../../componentes/lenguajes/JavaScript";
import Python from "../../../../../componentes/lenguajes/Python";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import MensajeVariable from "./MensajeVariable";
import { useState , useRef} from "react";

function VariableLogica() {
  const contenedor = useRef(null);
  const main = useRef(null)
  const botonNoPuedo = useRef(null);
  const [ShowMessage, setShowMessage] = useState(true);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  useEffect(()=>{
    if (ShowMessage) {
      document.body.classList.add("noMover");
      contenedor.current.style.top = `${window.scrollY}px`
      main.current.classList.add("mainFilter");
      document.querySelector("aside").classList.add("mainFilter");
      // document.querySelector("footer").classList.add("mainFilter");
      document.querySelector("header").classList.add("mainFilter");
    } else {
      document.body.classList.remove("noMover");
      main.current.classList.remove("mainFilter");
      document.querySelector("aside").classList.remove("mainFilter");
      // document.querySelector("footer").classList.remove("mainFilter");
      document.querySelector("header").classList.remove("mainFilter");
    }

  })

  const mostrarMessage = () =>{
    setShowMessage(false);
  }
  const showResult=()=>{
    setMostrarResultado(!mostrarResultado);
    mostrarResultado ? botonNoPuedo.current.textContent = "no puedo 😒": botonNoPuedo.current.textContent = "ocultar resultado si puedo perra 😎"
  }
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <div ref={contenedor} className={`contentMensajeVariable ${
          ShowMessage ? "":"mostrarMessage"
        }`}>
          <MensajeVariable mostrarMessage={mostrarMessage}/>
      </div>

      <main ref={main}>
        <h1>variables</h1>
        <Conseptos texto={`Las variables nos sirven para guardar los distintos tipos de datos o cualquier cosa.`}/>
        <h3>pseudocodigo</h3>
        <Python codigo={`nombre de la variable = dato que queremos guardar;`}/>
        <h3>codigo</h3>
        <Python codigo={`string = "string";
entero = 25;
flotante = 3.8;`}/>
        <h2>operaciones</h2>
        <Conseptos texto={`Las variables pueden guardar operaciones matematicas.`}/>
        <h3>ejemplo</h3>
        <JavaScript codigo={`suma = 5 + 5; //el valor de la variable llamada suma es 10
multiplicar = 5 * 5; //el valor de la variable multiplicacion es 25`}/>

        <h2>guardar</h2>
        <Conseptos texto={`Podemos guardar una variable dentro de otra por ejemplo.`}/>
        <JavaScript codigo={`a = 15; //la variable "a" es 15
b = a + 5; //la variable "b" es 20`}/>
        <h3>explicacion</h3>
        <Conseptos texto={`La variable "b" es 20 porque estamos sumando 
15 + a 
y como te das cuenta "a" es igual a 5
lo que quiere decir que estamos sumando 
15 + 5`}/>
        <h2>booleanos</h2>
        <Conseptos texto={`Las variables tambien guardan booleanos por ejemplo.`}/>
        <JavaScript codigo={`verdadero = true;
falso = false`}/>
        <JavaScript codigo={`igualdad1 = 5 == 5;`}/>
        <JavaScript codigo={`comparar = 15 < 2;`}/>
        <Conseptos texto={`Si ejecutaste los codigos en la consola veras como es que funciono y te mostrara los resultados correspodientes correspondientes.`}/>
        
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer un programa que saque el area de un cuadrado.
formula:
L x L
lado x lado`}/>
        <button 
          onClick={showResult}
          className="resultadoVariable"
          ref={botonNoPuedo}
        >no puedo 😒</button>
        {
          mostrarResultado && <JavaScript codigo={`lado1 = 15;
lado2 = 15;
resultado = lado1 * lado2;`}/>
        }


      </main>
      <Footer />
    </>
  );
}

export default VariableLogica;