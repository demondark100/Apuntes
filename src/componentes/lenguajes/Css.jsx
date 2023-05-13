import React, { useRef, useState, useEffect } from 'react';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./lenguajes.css"
import hljs from 'highlight.js/lib/core';


export default function Css({ codigo }) {
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
      <div className="lenguajes scroll">
        <button onClick={copiar}>
          <FontAwesomeIcon icon={copiado ? faCheck : faCopy} />
          {copiado ? ' Copiado' : ' Copiar'}
        </button>
        <pre>
          <code className="css scroll" ref={lenguaje}>
            {codigo}
          </code>
        </pre>
      </div>
    </div>
  );
}