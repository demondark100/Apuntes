import "./video.css"
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

function Videos({
  tipo,
  video
}) {
  const [options, setOptions] = useState(false); // mostrar/ocultar opciones.
  const [complete, setComplete] = useState(false); // mostrar/ocultar imagen completa.
  const [isCursor, setIsCursor] = useState(false); // mostrar el cursos.
  const content = useRef();

  const openComplete=()=>{
    if(tipo != "video"){
      setComplete(true)
      setIsCursor(false)
    }
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
          className="Videos__content__complete"
          ref={content}
          onDoubleClick={()=>setComplete(false)}
        >
          {
            isCursor && <button onClick={()=>setComplete(false)}><FontAwesomeIcon icon={faExpand}/></button>

          }
          <video src={video} autoPlay loop></video>
          <div className={`Videos__content__complete--efect ${isCursor ? "":"Videos__content__complete--efectHide"}`}></div>
        </div>
      }

      <div className="Videos">
        <div className="Videos__content" onDoubleClick={openComplete} onMouseLeave={()=>setOptions(false)}>
          <div className={`Videos__content__allScreen ${options ? "":"Videos__content__allScreenHide"}`}>
            <button onClick={openComplete}><FontAwesomeIcon icon={faExpand}/></button>
          </div>
          {
            tipo === "gif" ?
              <video 
                onMouseEnter={()=>setOptions(true)} 
                src={video} 
                autoPlay 
                loop
              ></video>
              :
              <video src={video} controls></video>
          }
        </div>
      </div>
    </>
  );
}

export default Videos;