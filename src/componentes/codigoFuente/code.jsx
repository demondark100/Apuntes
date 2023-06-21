import "./code.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from "react";

function CodigoFuenteSinInt({codigo}) {

  const contenedor = useRef(null);

  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const mostrarMen=()=>{
    setMostrarMensaje(true)
  }
  const quitarMen=()=>{
    setMostrarMensaje(false)
  }

  const [mostrarCode, setMostrarCode] = useState(false);
  const manejarCode =()=>{
    setMostrarCode(true)
    contenedor.current.classList.add("mostrarCodigoFuente")
  }
  const quitCode=()=>{
    setMostrarCode(false)
    contenedor.current.classList.add("quitarCodigoFuente")
  }

  return (  
    <div className="contenedorCodigoFuente">
      <FontAwesomeIcon onMouseEnter={mostrarMen} onMouseOut={quitarMen} onClick={manejarCode} icon={faCode} title="codigo sin interfaz"/>
      {
        mostrarMensaje && <p>codigo sin interfaz grafica</p>
      }
      { mostrarCode && <div ref={contenedor} className="contenedorCodigoFuente__codigo">
          <p onClick={quitCode} style={{backgroundColor: "transparent"}}>x</p>
          {codigo}
        </div>
      }
    </div>
  );
}

export default CodigoFuenteSinInt;