import React, { useState, useEffect, useRef } from 'react';
import "./codificar.css";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons'; //estos iconos son de html css y javaScript.
import HtCsJs from '../codificar/htCsJs';


function CodificarCodigo() {
  const contenedorJsHtCs = useRef(null);
  const [showJsHtCs, setShowJsHtCs] = useState(false);
  const codigoJs =()=>{
    setShowJsHtCs(!showJsHtCs)
  }
  useEffect(()=>{
    if(showJsHtCs){
      contenedorJsHtCs.current.classList.remove("hideContenedorJsHtCs")
    }else{
      contenedorJsHtCs.current.classList.add("hideContenedorJsHtCs")
    }
  })

  return (  
    <div className="codificarContenedor">

      <div onClick={codigoJs} className="threeLanguages">
        <FontAwesomeIcon icon={faHtml5}/>
        <FontAwesomeIcon icon={faCss3Alt}/>
        <FontAwesomeIcon icon={faJs}/>
      </div>
      <div ref={contenedorJsHtCs} className='contenedorJsHtCs'>
        <HtCsJs />
      </div>

    </div>
  );
}

export default CodificarCodigo;