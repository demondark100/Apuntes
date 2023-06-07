import React , {useState} from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";
import logo from '../imgs/logo.jpg';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import "./estilosChange.css";

// componentes
import Redes from "./Redes";

function Menu1() {
  const menu = useRef(null);
  const header = useRef(null);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [lightOrDark, setLightOrDark] = useState(false);


  // estas funciones son para que apareca y desaparezcan las opciones del menu
  
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

  // estas funciones son para que la pagina cambie entre claro y oscuro

  const claro=()=>{
    setLightOrDark(false);

    header.current.classList.remove("MenuDar")
    document.body.classList.remove("bodyDark")
  }
  const oscuro=()=>{
    setLightOrDark(true);

    header.current.classList.add("MenuDar")
    document.body.classList.add("bodyDark")
  }




  return (
    <header ref={header} className="headerMenu">

      <img className="imgPcLogo" src={logo} alt="logo" />

      {
        menuAbierto ? (
          <FontAwesomeIcon icon={faTimes} onClick={cerrarMenu} className="iconoMenu"/>
        ) : (
          <FontAwesomeIcon icon={faBars} onClick={mostrarMenu} className="iconoMenu"/>
        )
      }


      <nav ref={menu} className="contenedorLinksMenu">
        <ul className="links">
          <li>
            <Link target="_blank" to="https://wa.me/51900099632">Contactame</Link>
          </li>
          <li>
            <Link target="_blank" to="https://github.com/demondark100">GitHub</Link>
          </li>
          <li className="li_redes">
            <Redes />
          </li>
        </ul>
      </nav>

      {
        lightOrDark ? (
          <FontAwesomeIcon onClick={claro} icon={faSun} className="iconoClOs" />
        ) :
        (
          <FontAwesomeIcon onClick={oscuro} icon={faMoon} className="iconoClOs" />
        )
      }

    </header>
  );
}

export default Menu1;