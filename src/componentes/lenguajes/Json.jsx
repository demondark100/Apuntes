import React, { useRef, useState, useEffect } from 'react';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./lenguajes.css"
import hljs from 'highlight.js/lib/core';




export default function Json({ codigo }) {
  const lenguaje = useRef(null);
  const [copiado, setCopiado] = useState(false);

  const copiar = () => {
    const texto = lenguaje.current.innerText;
    navigator.clipboard.writeText(texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  useEffect(() => {
    hljs.highlightBlock(lenguaje.current);
  }, [codigo]);

  return (
    <div className='contentLenguaje'>
      <h3 className='titleLengauje'>json</h3>
      <button className='copiarCodigo'  onClick={copiar}>
          <FontAwesomeIcon icon={copiado ? faCheck : faCopy} />
          {copiado ? ' Copiado' : ' Copiar'}
        </button>
      <div className="lenguajes scroll">
        <pre>
          <code className="json scroll" ref={lenguaje}>
            {codigo}
          </code>
        </pre>
      </div>
    </div>
  );
}