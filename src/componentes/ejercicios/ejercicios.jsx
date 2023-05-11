import { useState,useRef } from "react";
import "./ejercicios.css";

function Ejercicios({texto1,texto2,codigo}) {
  const boton = useRef(null);

  const [MostrarEjercicio, setMostrarEjercicio] = useState(false);
  const mostrarOcultarEjercicio =()=>{
    setMostrarEjercicio(!MostrarEjercicio)
     if(MostrarEjercicio)  {
      boton.current.textContent = texto1
      boton.current.style.color = "#f62323";
      boton.current.classList.add("");
    } else {
      boton.current.style.color = "#23f689";
      boton.current.textContent = texto2;
    }
  }
  return (  
    <div className="contentEjercicios">
      <button
        ref={boton}
        className="botonMostrarEjercicio" 
        onClick={mostrarOcultarEjercicio}
      >{texto1}</button>
        {
          MostrarEjercicio && <div className={"mostrarEjercicio"}>{codigo}</div>
        }
      </div>
    // </div>
  );
}

export default Ejercicios;