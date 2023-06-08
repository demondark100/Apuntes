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
import { useLocation } from "react-router-dom";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


// componentes
import Capitulos from "../capitulos/aside";

function Menu() {
  const menu = useRef(null);
  const header = useRef(null);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [lightOrDark, setLightOrDark] = useState(false);
  const location = useLocation();

  // estas son las funciones de redes
  const [showRedes, setShowRedes] = useState(false);

  const toggleRedes = () => {
    setShowRedes(!showRedes);
  };


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


    header.current.classList.remove("MenuDar") //esto es el header
    menu.current.classList.remove("MenuDar") //esto es el nav
    document.body.classList.remove("bodyDark") //esto es el body
    document.querySelectorAll(".links li a").forEach(i => i.classList.add("ColorA")); //estos son los links del nav para movil
    document.querySelectorAll(".linkPc li a").forEach(i => i.classList.add("ColorA")); //estos son los links del nav para movil

  }
  const oscuro=()=>{
    setLightOrDark(true);


    header.current.classList.add("MenuDar") //esto es el header
    menu.current.classList.add("MenuDar") //esto es el nav
    document.body.classList.add("bodyDark") //esto es el body
    document.querySelectorAll(".links li a").forEach(i => i.classList.remove("ColorA")); //estos son los links del nav para movil
    document.querySelectorAll(".linkPc li a").forEach(i => i.classList.remove("ColorA")); //estos son los links del nav para movil

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
          {
            (location.pathname != "/") ?
             <li>
              <Link className="linkInicio" to="/">inicio</Link>
            </li> : ""
          }

          <li>
            <Link target="_blank" to="https://wa.me/51900099632">Contactame</Link>
          </li>
          <li>
            <Link target="_blank" to="https://github.com/demondark100">GitHub</Link>
          </li>

          <li>
            <div className='content-redes'>
              <p className='redes'>
                Redes
                <FontAwesomeIcon
                  icon={faChevronDown}
                  onClick={toggleRedes}
                  className={showRedes ? 'icono-red girar' : 'icono-red'}
                />
              </p>
            </div>

            <ul className={`linkMovil ${showRedes ? 'show' : 'hide'}`}>
              <li>
                <Link target='_blank' to="https://www.facebook.com/shadowkillerxe">Facebook</Link>
              </li>
              <li>
                <Link target='_blank' to="https://www.youtube.com/channel/UCA7e0Kh1CGQUEIOBFvm-jBQ">youtube</Link>
              </li>
              <li>
                <Link target='_blank' to="https://www.tiktok.com/@el_tio_dan_">tiktok</Link>
              </li>
              <li>
                <Link target='_blank' to="https://www.linkedin.com/in/daniel-champi-a1836523a/">Linkedin</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="capitulosContentMovil">
          <Capitulos />
        </div>
      </nav>
      <ul className={`linkPc ${showRedes ? 'show' : 'hide'}`}>
        <li>
          <Link target='_blank' to="https://www.facebook.com/shadowkillerxe">Facebook</Link>
        </li>
        <li>
          <Link target='_blank' to="https://www.youtube.com/channel/UCA7e0Kh1CGQUEIOBFvm-jBQ">youtube</Link>
        </li>
        <li>
          <Link target='_blank' to="https://www.tiktok.com/@el_tio_dan_">tiktok</Link>
        </li>
        <li>
          <Link target='_blank' to="https://www.linkedin.com/in/daniel-champi-a1836523a/">Linkedin</Link>
        </li>
      </ul>
      <div className="capitulosContentPc">
          <Capitulos />
        </div>
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

export default Menu;