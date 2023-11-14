import { useEffect, useRef,useState } from "react";
import { Link } from "react-router-dom";
import "./opciones.css";

// uconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

// componentes
import Capitulos from "../capitulos/aside";
import Proyectos from "../proyectos/proyectos";
import CodificarCodigo from "../codificarCodigo/codificar";




function Barrita() {
  const [showCursos, setShowCursos] = useState(false);
  const [showProyectos, setShowProyectos] = useState(false);

  const [ayuda1, setAyuda1] = useState(false);
  const [ayuda2, setAyuda2] = useState(false);

  const mostrarCursos=()=>{
    setShowCursos(!showCursos);
    setShowProyectos(false);
    setAyuda1(false)
  }
  const mostrarProyectos=()=>{
    setShowProyectos(!showProyectos);
    setShowCursos(false)
    setAyuda2(false)
  }
  
  return(
    <>
      <div className="contenedorBarrita">
        <ul className="contenedorBarrita__Opciones">
          <li>
            <Link to={"../"}><FontAwesomeIcon icon={faHome}/></Link>
          </li>
          <li>
            <button 
              onClick={mostrarCursos}
              onMouseOver={()=>setAyuda1(true)}
              onMouseOut={()=>setAyuda1(false)}
            >
              {
                showCursos ? <p>X</p>:<FontAwesomeIcon icon={faBookOpen}/>
              }
              <span className={`contenedorBarrita__indicacion ${ayuda1 ? "":"contenedorBarrita__indicacionHide"}`}>cursos</span>
            </button>
          </li>
          <li>
            <button 
              onClick={mostrarProyectos}
              onMouseOver={()=>setAyuda2(true)}
              onMouseOut={()=>setAyuda2(false)}  
            >
              {
                showProyectos ? <p>X</p>:<FontAwesomeIcon icon={faFolderOpen}/>
              }
              <span className={`contenedorBarrita__indicacion ${ayuda2 ? "":"contenedorBarrita__indicacionHide"}`}>proyectos</span>
            </button>
          </li>
        </ul>
      </div>

      <div className={`contenedorBarrita__cursos ${showCursos ? "":"contenedorBarrita__cursosHide"}`}>
        <Capitulos sendshowAside={setShowCursos}/>
      </div>
      <div className={`contenedorBarrita__proyectos ${showProyectos ? "":"contenedorBarrita__proyectosHide"}`}>
        <Proyectos />
      </div>
    </>
  )
}

export default Barrita;