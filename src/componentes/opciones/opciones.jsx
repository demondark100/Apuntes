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
  return(
    <div className="contenedorBarrita">
      <ul className="contenedorBarrita__Opciones">
        <li>
          <Link to={"../"}><FontAwesomeIcon icon={faHome}/></Link>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faBookOpen}/>
          </button>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faFolderOpen}/>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Barrita;