import "./imagenLink.css"
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

function ImagenLink({tipo,imagen,titulo,link}) {
  const [options, setOptions] = useState(false); // mostrar botone.
  const [complete, setComplete] = useState(false); // mostrar imagen completa.
  const [isCursor, setIsCursor] = useState(false);
  const content = useRef();
  const operComplete=()=>{
    setOptions(true)
  }
  const showCompele=()=>{
    setComplete(true);
    setIsCursor(false)
  }
  const quitarComplete=()=>{
    setComplete(false)
  }
  const openLink=()=>{
    window.open(link);
  }

  useEffect(() => {
    if (complete) {
      let timeout;
      const contenedor = content.current
  
      const handleMouseMove = () => {
        setIsCursor(true);
        clearTimeout(timeout);
          timeout = setTimeout(() => {
          setIsCursor(false);
        }, 2000);
      };
  
      contenedor.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        clearTimeout(timeout);
        contenedor.removeEventListener('mousemove', handleMouseMove);
      };
    }
  },[complete]);
  

  return (
    <>
      {
        complete && <div 
          className="imagen__completa" 
          onDoubleClick={quitarComplete}
          ref={content}
        >
          <div className={`imagen__completaImg ${isCursor ? "":"imagen__completaImgHide"}`}>
            <button onClick={quitarComplete}><FontAwesomeIcon icon={faExpand}/></button>
          </div>
          <img src={imagen} alt={titulo} />
        </div>
      }
      <div className="imagen">
        <div className="imagen__content">
          <div 
            className={`imagen__contentBtn ${options ? "":"imagen__contentBtnHide"}`} 
            onMouseLeave={()=>setOptions(false)}
            onDoubleClick={showCompele}
          >
            <button onClick={showCompele}><FontAwesomeIcon icon={faExpand}/></button>
            {
              link && <button 
                className="imagen__contentBtnLink"
                onClick={openLink}
              >abrir link</button>
            }
          </div>
          {
            tipo == "imagen"?
              <img 
                src={imagen} 
                alt={titulo}
                onMouseEnter={operComplete}
                onDoubleClick={()=>setComplete(true)}
              />
              :
              <img 
                src={imagen} 
                alt={titulo} 
                onMouseEnter={operComplete}
                className="imagen__contentLink"
              />
          }
        </div>
      </div>
    </>
  );
}

export default ImagenLink;