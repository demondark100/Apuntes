import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";
import logo from '../imgs/logo.jpg';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import "./estilosChange.css";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


// componentes
import Capitulos from "../capitulos/aside";

function Menu() {
  const menu = useRef(null); //esto es el nav
  const header = useRef(null); //esto es el heade
  const [menuAbierto, setMenuAbierto] = useState(false); //esto es para abrir o cerrar el menu
  const [lightOrDark, setLightOrDark] = useState(false); // esto es el estado de claro o oscuro
  const asideMb = useRef(null); //esto es el contenedor del aside movil
  const asidePc = useRef(null); //esto es el contenedor del aside de pc
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

  // esta funcion es para poner los mensajes del logo de la barrita

  useEffect(()=>{
      const contentHover = document.querySelectorAll(".contentHover");
      const iconoOptions = document.querySelectorAll(".iconoOptions");
      for (let i = 0; i < iconoOptions.length; i++) {
        iconoOptions[i].addEventListener("mouseover",()=>{
          contentHover[i].classList.add("mostrar_opciones");
        })
        iconoOptions[i].addEventListener("mouseout",(e)=>{
          contentHover[i].classList.remove("mostrar_opciones")
        })
      }
  })

  // esta funcion es para que aparezca o desaparezcam los capitulos osea el aside
  const [showAside, setShowAside] = useState(false);

  const toggleAside=()=>{
    setShowAside(!showAside)
    asideMb.current.classList.add("hideAside");
    asidePc.current.classList.add("hideAside");
  }
  useEffect(()=>{

    if(showAside){
      asideMb.current.classList.remove("hideAside");
      asidePc.current.classList.remove("hideAside");
    } else{
      asideMb.current.classList.add("hideAside");
      asidePc.current.classList.add("hideAside");
    }
  })
  

  //estas funciones son para que la pagina cambie entre claro y oscuro

  const claro=()=>{
    setLightOrDark(false);


    header.current.classList.remove("headerBorder") //esto es el header
    menu.current.classList.remove("MenuDar") //esto es el nav
    document.body.classList.remove("bodyDark") //esto es el body
    document.querySelectorAll(".links li a").forEach(i => i.classList.remove("ColorA")); //estos son los links del nav para movil
    document.querySelectorAll(".linkPc li a").forEach(i => i.classList.remove("ColorA")); //estos son los links del nav para movil
  }
  const oscuro=()=>{
    setLightOrDark(true);


    header.current.classList.add("headerBorder") //esto es el header
    menu.current.classList.add("MenuDar") //esto es el nav
    document.body.classList.add("bodyDark") //esto es el body
    document.querySelectorAll(".links li a").forEach(i => i.classList.add("ColorA")); //estos son los links del nav para movil
    document.querySelectorAll(".linkPc li a").forEach(i => i.classList.add("ColorA")); //estos son los links del nav para movil
  }

  return (

    <header ref={header} className="headerMenu">
      
      {/* esto es el logo */}
      <img className="imgPcLogo" src={logo} alt="logo" />

      {/* esto es el icono para que aparezcan los links*/}
      {
        menuAbierto ? (
          <FontAwesomeIcon icon={faTimes} onClick={cerrarMenu} className="iconoMenu"/>
        ) : (
          <FontAwesomeIcon icon={faBars} onClick={mostrarMenu} className="iconoMenu"/>
        )
      }

      {/* esto es el nav osea los enlaces del menu */}
      <nav ref={menu} className="contenedorLinksMenu">
        <ul className="links">
          <li className="liBarrita">
            <div className="barrita__contentMovil">
              <Link className="iconno" to={"./"}><FontAwesomeIcon className="iconoOptions" icon={faHome} /></Link>
              <div className="contentHover">
                <b>inicio</b>
              </div>
              <p className="iconno" onClick={toggleAside}><FontAwesomeIcon className="iconoOptions" icon={faBookOpen} /></p>
              <div className="contentHover cursos">
                <b>cursos</b>
              </div>
            </div>
          </li>
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
        <div ref={asideMb} className="capitulosContentMovil">
          <Capitulos sendshowAside={setShowAside} sendasideMb={asideMb} sendasidePc={asidePc}/>
        </div>
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

      <div ref={asidePc} className="capitulosContentPc">
        <Capitulos sendshowAside={setShowAside} sendasideMb={asideMb} sendasidePc={asidePc}/>
      </div>

      {/* esto es el icono de claro y osuro */}
      {
        lightOrDark ? (
          <FontAwesomeIcon onClick={claro} icon={faSun} className="iconoClOs" />
        ) :
        (
          <FontAwesomeIcon onClick={oscuro} icon={faMoon} className="iconoClOs" />
        )
      }

      <div className="barrita__contentPc">
        <Link className="iconno" to={"./"}><FontAwesomeIcon className="iconoOptions" icon={faHome} /></Link>
        <div className="contentHover">
          <b>inicio</b>
        </div>
        <p className="iconno" onClick={toggleAside}><FontAwesomeIcon className="iconoOptions" icon={faBookOpen} /></p>
        <div className="contentHover cursos">
          <b>cursos</b>
        </div>
      </div>

    </header>
  );
}

export default Menu;