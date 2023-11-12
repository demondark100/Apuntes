import "./show.css";
import Volver from "../volver/volver";
import CodigoFuenteSinInt from "../codigoFuente/code";
import Html from "../../componentes/lenguajes/Html";
import Css from "../../componentes/lenguajes/Css";
import JavaScropt from "../../componentes/lenguajes/JavaScript";
import Txt from "../../componentes/lenguajes/Txt";
// variable de estado
import { useState } from "react";

// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function ShowOptions({
  link,html,css,javaScript,txt
}) {
  const [showOptions, setShowOptions] = useState(false); // esto es para rotar y mostrar las opciones
  const changeState=()=>{
    setShowOptions(!showOptions)
  }
  const [showTexto, setShowTexto] = useState(false); // esto es para indicar al usuario para que sirve ese boton.


  return (  
    <>
      <div className="contenedorShowOptions">
        <div>
          {/* boton */}
          <button 
            onClick={changeState}
            onMouseMove={()=>setShowTexto(true)}
            onMouseOut={()=>setShowTexto(false)}
            className={`contenedorShowOptionsBtn ${showOptions ? "":"contenedorHideOptionsBtn"}`}
          >
            <FontAwesomeIcon icon={faPlay}/>
          </button>
          {/* texto undicactivo */}
          <p className={`contenedorShowOptionsParrafo ${showTexto ? "":"contenedorShowOptionsParrafoHide"}`}>opciones</p>


          <div className={`contenedorShowOptionsVolver ${showOptions ? "contenedorShowOptionsVolverShow":""}`}>
            <Volver link={link}/>
          </div>
          <div className={`contenedorShowOptionsCode ${showOptions ? "contenedorShowOptionsCodeShow":""}`}>
            <CodigoFuenteSinInt 
              codigo={html != null ? <Html codigo={html}/>:null}
              codigo2={css != null ? <Css codigo={css}/>:null}
              codigo3={javaScript != null ? <JavaScropt codigo={javaScript}/>:null}
              codigo4={txt != null ? <Txt codigo={txt}/>:null}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowOptions;