import React , {useState} from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useRef } from "react";


// componentes
import Redes from "./Redes";

function Menu2() {
  const menu = useRef(null);

  const [menuAbierto, setMenuAbierto] = useState(false);

  const mostrarMenu =()=>{
    setMenuAbierto(true);
    menu.current.classList.add("mostrarMenu");

    window.addEventListener("resize",()=>{
      if(window.innerWidth < 750){
        menu.current.classList.add("mostrarMenu");
      } else{
        menu.current.classList.remove("mostrarMenu");
      }
    })

  }
  const cerrarMenu =()=>{
    setMenuAbierto(false);
    menu.current.classList.remove("mostrarMenu");

    window.addEventListener("resize",()=>{
      if(window.innerWidth < 750){
        menu.current.classList.remove("mostrarMenu");
      } 
    })
  }
  return (
    <header>
      <div className="icono">
        {menuAbierto ? (
          <FontAwesomeIcon icon={faTimes} onClick={cerrarMenu} />
        ) : (
          <FontAwesomeIcon icon={faBars} onClick={mostrarMenu} />
        )}
      </div>
        <nav ref={menu} className="contenedor-menu">
          <ul className="links">
            <li>
              <Link to="/">inicio</Link>
            </li>
            <li>
              <Link target="_blank" to="https://wa.me/51900099632">Contactame</Link>
            </li>
            <li>
              <Link target="_blank" to="https://github.com/demondark100">GitHub</Link>
            </li>
            <li>
              <Redes />
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Menu2;