import "./code.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from "react";

function CodigoFuenteSinInt({codigo,codigo2,codigo3,codigo4}) {

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
      <div className="contenedorCodigoFuente__boton">
        <FontAwesomeIcon onMouseEnter={mostrarMen} onMouseOut={quitarMen} onClick={manejarCode} icon={faCode} title="codigo sin interfaz"/>
        {
          mostrarMensaje && <p>codigo</p>
        }
      </div>
      { mostrarCode && <div ref={contenedor} className="contenedorCodigoFuente__codigo">
          <p onClick={quitCode} style={{backgroundColor: "transparent"}}>x</p>
            <div className="contenedorDelCodigoDiv">{codigo}</div>
            <div className="contenedorDelCodigoDiv">{codigo2}</div>
            <div className="contenedorDelCodigoDiv">{codigo3}</div>
            <div className="contenedorDelCodigoDiv">{codigo4}</div>
        </div>
      }
    </div>
  );
}

export default CodigoFuenteSinInt;