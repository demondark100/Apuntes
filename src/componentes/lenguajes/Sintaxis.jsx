import React, { useRef, useState, useEffect } from 'react';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./lenguajes.css"
import hljs from 'highlight.js/lib/core';



export default function Sintaxis({ codigo }) {
  const lenguaje = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(lenguaje.current);
  }, [codigo]);

  return (
    <div className='contentLenguaje'>
      <h3 className='titleLengauje'>sintaxis</h3>
      <div className="lenguajes scroll">
        <pre>
          <code className="python scroll" ref={lenguaje}>
            {codigo}
          </code>
        </pre>
      </div>
    </div>
  );
}