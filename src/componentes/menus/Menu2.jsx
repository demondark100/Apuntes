import React , {useState} from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useRef } from "react";


// componentes
import Redes from "./Redes";

function Menu2() {
  const menu = useRef(null);
  const fondo = useRef(null)

  const [showIcon, setShowIcon] = useState(true);

  const mostrarMenu =()=>{
    menu.current.classList.add("mostrarMenu");
    fondo.current.classList.add("mostrarFondo");
    setShowIcon(false);

    window.addEventListener("resize",()=>{
      if(window.innerWidth < 750){
        menu.current.classList.add("mostrarMenu");
        fondo.current.classList.add("mostrarFondo");

      } else{
        menu.current.classList.remove("mostrarMenu");
        fondo.current.classList.remove("mostrarFondo");
      }
    })

  }
  const cerrarMenu =()=>{
    menu.current.classList.remove("mostrarMenu");
    fondo.current.classList.remove("mostrarFondo");
    setShowIcon(true);

    window.addEventListener("resize",()=>{
      if(window.innerWidth < 750){
        menu.current.classList.remove("mostrarMenu");
        fondo.current.classList.remove("mostrarFondo");

      } 
    })
  }
  return (
    <header>
      <div className="icono">
      {showIcon && <FontAwesomeIcon icon={faBars} onClick={mostrarMenu} />}
      {!showIcon && <></>}
      {/* ... */}
      </div>
      <div ref={fondo} className="fondo">
        <p onClick={cerrarMenu}>x</p>
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