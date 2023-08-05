import Volver from "../../../../../../componentes/volver/volver";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Html from "../../../../../../componentes/lenguajes/Html";
import Css from "../../../../../../componentes/lenguajes/Css";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";

import "./cap5.css";

import { useState } from "react";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// este componente muestra los iconos

function MostrarIconos({ icono, texto, funcion }) {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter=()=> setShowText(true);
  const handleMouseOut=()=>setShowText(false)

  return (
    <div className="contenedorIconosGaleriaCap5Js">
      <div
        onClick={funcion}
        onMouseMove={handleMouseEnter}
        onMouseOut={handleMouseOut}
      >{icono}</div>
      <p className={`contenedorIconosGaleriaCap5Js__texto ${showText ? "" : "contenedorIconosGaleriaCap5Js__textoHide"}`}>{texto}</p>
    </div>
  );
}

// este componente muestra la el editor de filas y columnas
function EditorFilasColumnas(){
  return(
    <div>

    </div>
  )
}




function Cap5ProyJsV3() {

  // esto es para mostrar y quitar la barrita
  const [showBarrita, setShowBarrita] = useState(true);


  // todo esto es la progrmacion del editor de filas y columnas
  const [showEditorCOlFil, setShowEditorCOlFil] = useState(false); // muestra el editor de filas y columnas.
  const [filas, setFilas] = useState("");
  const [columnas, setColumnas] = useState("");

  const cantidadColFil=()=>{

  }

  return (  
    <>
      <Volver link={"../"}/>
      <div className="Page">

      <div className={`contenedorGaleriaCap5Js__barraEditora ${showBarrita ? "":"contenedorGaleriaCap5Js__barraEditoraHide"}`}>
        <div 
          className={`contenedorGaleriaCap5Js__barraEditora__icono1 ${showBarrita ? "":"contenedorGaleriaCap5Js__barraEditora__icono1Ip"}`}
          onClick={()=>setShowBarrita(!showBarrita)}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <MostrarIconos 
          icono={<FontAwesomeIcon icon={faTable} />} 
          texto={"filas y columnas"}
          funcion={cantidadColFil}
        />
        <MostrarIconos 
          icono={<FontAwesomeIcon icon={faTable} />} 
          texto={"filas y columnas"}
          funcion={cantidadColFil}
        />

        <MostrarIconos 
          icono={<FontAwesomeIcon icon={faTable} />} 
          texto={"filas y columnas"}
        />

        <MostrarIconos 
          icono={<FontAwesomeIcon icon={faTable} />} 
          texto={"filas y columnas"}
        />

      </div>

        <div className={`contenedorGaleriaCap5Js ${showBarrita ? "":"contenedorGaleriaCap5JsMove"}`}>
          <div className="contenedorGaleriaCap5Js__Lienzo">

          </div>
        </div>
      </div>
    </>
  );
}

export default Cap5ProyJsV3;