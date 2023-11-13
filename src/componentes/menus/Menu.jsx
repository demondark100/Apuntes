import React , {useEffect, useState, useRef, useDeferredValue} from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

// estos son los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";



// esto es el logo de la aplicacion
import logo from '../imgs/logo.jpg';


// componentes
import Barrita from "../opciones/opciones";
import Redes from "../redes/redes";


function Menu() {
  const [showOpciones, setShowOpciones] = useState(false);
  const [showRedes, setShowRedes] = useState(false);

  return (
    <div>
      <header>
        <nav className="contenedor__menu">
          <ul className="contenedor__menuLinks">
            <li>
              <button onClick={()=>setShowOpciones(!showOpciones)}>
                {
                  showOpciones ?
                  <p>X</p>:
                  <FontAwesomeIcon icon={faBars}/>
                }
              </button>
            </li>
            <li>
              <Link to={"https://wa.me/51900099632"} target="_blank">
                <FontAwesomeIcon icon={faComment}/>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/demondark100"} target="_blank">
                <FontAwesomeIcon icon={faGithub}/>
              </Link>
            </li>
            <li>
              <button onClick={()=>setShowRedes(!showRedes)}>
                {
                  showRedes ?
                  <p>X</p>:
                  <FontAwesomeIcon icon={faUsers}/>
                }
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="headerOptions">
        <div className={`headerOptionsContent ${showOpciones ? "":"headerOptionsContentHide"}`}>
          <Barrita />
        </div>
      </div>
      <div className="headerRedes">
        <div className={`headerRedesRed ${showRedes ? "":"headerRedesRedHide"}`}>
          <Redes />
        </div>
      </div>
    </div>
  );
}

export default Menu;