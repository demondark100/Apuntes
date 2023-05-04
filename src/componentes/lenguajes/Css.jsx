import React, { useRef, useState, useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/3024.css';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./lenguajes.css"

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