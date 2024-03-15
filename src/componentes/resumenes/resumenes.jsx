import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import "./resumenes.css"
import React, { useState, useEffect } from 'react';
import Conseptos from '../conseptos/conseptos';


// lenguages
import Html from "../lenguajes/Html";
import Css from "../lenguajes/Css";
import JavaScropt from "../lenguajes/JavaScript";
import Txt from "../lenguajes/Txt";
import ReactCode from "../lenguajes/React";
import Python from "../lenguajes/Python";
import Sintaxis from "../lenguajes/Sintaxis";
import Json from "../lenguajes/Json";

function Resumenes({
  contenido
}) {
  const [showMsg, setShowMsg] = useState(false); // mostrar mensaje de indicacion
  const [showInfo, setShowInfo] = useState(false); // mostrar resumen

  const lenguages = {
    Html: Html,
    Css: Css,
    JavaScropt: JavaScropt,
    Txt: Txt,
    ReactCode: ReactCode,
    Python: Python,
    Sintaxis: Sintaxis,
    Json: Json
  }

  return (  
    <div className='contentResumen'>

      <div className='contentResumen__iconContent'>
        <div 
          className='contentResumen__iconContent--icono'
          onMouseMove={()=>setShowMsg(true)}
          onMouseOut={()=>setShowMsg(false)}
          onClick={()=>setShowInfo(!showInfo)}
        >
          {
            !showInfo ? <FontAwesomeIcon icon={faClipboardList}/> : <p>X</p>
          }
        </div>
        {
          showMsg && <p className='contentResumen__iconContent--parrafo'>Resumen</p>
        }
      </div>
      {
        showInfo && <div className='contentResumen__infoContent'>
          <h3 className='contentResumen__infoContent--title'>En resumen</h3>
          {
            contenido.map((i,index)=>(
              <div className='contentResumen__infoContent--info'>
                {
                  i.mensaje != undefined ? <Conseptos texto={i.mensaje}/> : null
                }
                {i.lenguage && lenguages[i.lenguage] && (
                  React.createElement(lenguages[i.lenguage], { codigo: i.codigo })
                )}
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}

export default Resumenes;