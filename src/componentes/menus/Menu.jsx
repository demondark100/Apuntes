import React , {useEffect, useState, useRef, useDeferredValue} from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

// estos son los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


// esto es el logo de la aplicacion
import logo from '../imgs/logo.jpg';


function Menu({active}) {

  const menu = useRef(null); //esto es el nav
  const header = useRef(null); //esto es el header

  // funciones

  // estas son las funciones de redes
  const [showRedes, setShowRedes] = useState(false); //esto es para mostrar el contenedor del aside.
  // esta funcion se encarga de poner y quitar las redes
  const toggleRedes = () => {
    setShowRedes(!showRedes);
  };


  // estas funciones son para que apareca y desaparezcan las opciones del menu
  const [menuAbierto, setMenuAbierto] = useState(false); //esto es para abrir o cerrar el menu
  // este muestra el menu con sus opciones
  const mostrarMenu =()=>{
    setMenuAbierto(true);
    menu.current.classList.add("mostrarMenu");
  }
  // este quita el menu con sus opciones
  const cerrarMenu =()=>{
    setMenuAbierto(false);
    menu.current.classList.remove("mostrarMenu");
  }

  // aqui recibimos el estado para poner claro y oscuro a los temas
  useEffect(()=>{
    if (active) {
      header.current.classList.add("headerDark")
      menu.current.classList.add("contenedorLinksMenuDark")
      document.querySelectorAll(".links li a").forEach(i => i.classList.add("linksDark"));
      document.querySelectorAll(".linkMovil li a").forEach(i => i.classList.add("linkMovilDark"));
      document.querySelectorAll(".linkPc").forEach(i => i.classList.add("linkPcCDark"));
      document.querySelectorAll(".linkPc li a").forEach(i => i.classList.add("linkPcDark"));

      
    } else {
      header.current.classList.remove("headerDark")
      menu.current.classList.remove("contenedorLinksMenuDark")
      document.querySelectorAll(".links li a").forEach(i => i.classList.remove("linksDark"));    
      document.querySelectorAll(".linkMovil li a").forEach(i => i.classList.remove("linkMovilDark"));
      document.querySelectorAll(".linkPc").forEach(i => i.classList.remove("linkPcCDark"));
      document.querySelectorAll(".linkPc li a").forEach(i => i.classList.remove("linkPcDark"));
    }
  })
  
  return (

    <header 
      ref={header} 
      className="headerMenu"
    >
      
      {/* esto es el logo */}
      <img 
        className="imgPcLogo" 
        src={logo} alt="logo" 
      />
      
      {/* esto es el icono para que aparezcan los links*/}
      {
        menuAbierto ? (
          <FontAwesomeIcon 
            icon={faTimes} 
            onClick={cerrarMenu} 
            className="iconoMenu"
          />
        ) : (
          <FontAwesomeIcon 
            icon={faBars} 
            onClick={mostrarMenu} 
            className="iconoMenu"
          />
        )
      }

      {/* esto es el nav osea los enlaces del menu */}
      <nav 
        ref={menu} 
        className="contenedorLinksMenu"
      >
        <ul className="links">

          <li>
            <Link target="_blank" to="https://wa.me/51900099632">Contactame</Link>
          </li>
          <li>
            <Link target="_blank" to="https://github.com/demondark100">GitHub</Link>
          </li>

          {/* este li contiene las redes */}
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

      </nav>

      {/* esto tambien es parte de los enlaces de redes pero para pc */}
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


    </header>
  );
}

export default Menu;