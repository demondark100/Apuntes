import "./condicionales.css";
import React, { useState, useRef , useEffect } from 'react';


function CondicionalesDiagrama({cerrar}) {

  // condiciones parte 1
    const [condicion1, setCondicion1] = useState(false);
    const [condicion2, setCondicion2] = useState(false);
    const [condicion3, setCondicion3] = useState(false);

    const ocultarCondicional=()=>{
      cerrar(false);
      document.body.classList.remove("condicionalBody")
    }

  return (  
    <>
      <p className="cerrarCondicional" onClick={ocultarCondicional}>x</p>
      <h4 className="diagramaTitle">diagrama</h4>
      <p className="desisionesParrafo">deciciones tenemos hambre</p>
      <h4>comprar comida</h4>
      <div className="contenedorDesisiones">
        <div className="codicionalP">
          <p
            onClick={()=>setCondicion1(!condicion1)} 
          >si "compramos comida chatarra" entonces:</p>
          {
            condicion1 && <div>
              <p className="respuestaCondicion">subimos de peso</p>
            </div>
          }
        </div>
        <div className="codicionalP">
          <p onClick={()=>setCondicion2(!condicion2)}>
            sino si "compramos comida saludable" entonces:
          </p>
          {
            condicion2 && <div>
            <p className="respuestaCondicion">Nos alimentamos bien</p>
          </div>
          }
        </div>
        <div className="codicionalP">
          <p onClick={()=>setCondicion3(!condicion3)}>sino compramos comida</p>
          {
            condicion3 && <div>
            <p className="respuestaCondicion">Morimos de hambre</p>
          </div>
          }
        </div>
        
      </div>
    </>
  );
}

export default CondicionalesDiagrama;