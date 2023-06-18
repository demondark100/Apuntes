import { useRef , useState } from "react";
import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../componentes/volver/volver";
import "./cap1.css";


function Cap1ProyJsV1() {
  
  const input = useRef(null);
  const [nombre, setNombre] = useState("");
  const [mostar, setMostar] = useState(false);
  const obtenerFuncion =()=>{
    setNombre(input.current.value);
    setMostar(true);
  }

  return (  
    <>
      <Volver link={"../"}/>
      <MensajeModal texto={`¡Proyecto! capitulo 1:

Pedir al usuario su nombre y concatenarlo para dar un aviso.

Recuerda que aprendimos:

1. Variables.
2. funciones de javaScript.
3. prompt.
4. operadores.
5. concatenacion.
6. camelCase.`}/>
      <div className="Page">
        <div className="contentProyJsCap1V1">
          <div className="contentProyJsCap1V1__input">
            <input type="text" ref={input} placeholder="escribe tu nombre" className="contentProyJsCap1V1__input--in"/>
            <button className="glow-on-hover" type="button" onClick={obtenerFuncion}>aseptar</button>


            
            {
              mostar && <div>
                <p className="contentProyJsCap1V1__input--parrafo">¡Hola! {nombre} desde ahora se aplicaran conseptos de programacion en todos los proyectos de javaScript.</p>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Cap1ProyJsV1;