import React, { useRef, useState, useEffect } from 'react';
import "./lenguajes.css"
import hljs from 'highlight.js/lib/core';



export default function Sintaxis({ codigo,consola }) {
  const [showEjecucion, setShowEjecucion] = useState(false);
  const lenguaje = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(lenguaje.current);
  }, [codigo]);

  return (
    <div className='contentLenguaje'>
      <h3 className='titleLengauje'>sintaxis</h3>
      <button onClick={()=>setShowEjecucion(true)} className='contentLenguaje__ejecutarbtn'>Ejecutar</button>
      <div className="lenguajes scroll">
        <pre>
          <code className="python scroll" ref={lenguaje}>
            {codigo}
          </code>
        </pre>
      </div>
      <div className={`consolaCodigoEjecutado ${showEjecucion ? "":"HideConsolaCodigoEjecutado"}`}>
        <p>{consola}</p>
        <button onClick={()=>setShowEjecucion(false)}>Quitar Ejecucion</button>
      </div>
    </div>
  );
}