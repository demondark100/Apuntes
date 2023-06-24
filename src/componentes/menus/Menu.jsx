import React , {useEffect, useState, useRef, useDeferredValue} from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

// estos son los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';


// esto es el logo de la aplicacion
import logo from '../imgs/logo.jpg';



// componentes
import Capitulos from "../capitulos/aside";
import Proyectos from "../proyectos/proyectos";


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
  
  const [showAside, setShowAside] = useState(false); //esto mostara el aside osea el contenedor
  const asideMb = useRef(null); //esto es el contenedor del aside movil
  const asidePc = useRef(null); //esto es el contenedor del aside de pc
  // esta funcion mostrar el aside o lo quitara segun sea
  const toggleAside=()=>{
    setShowAside(!showAside)
    setProyectos(false)
    asidePc.current.classList.remove("hideAside");
    asideMb.current.classList.add("hideAside");
    asidePc.current.classList.add("hideAside");
  }
  // esta funcion se encarga de quitar el menu cuando se da click en el icono de inicio

  useEffect(()=>{
    if(showAside){
      asideMb.current.classList.remove("hideAside");
      asidePc.current.classList.remove("hideAside");
    } else{
      asideMb.current.classList.add("hideAside");
      asidePc.current.classList.add("hideAside");
    }
  })


  const [proyectos, setProyectos] = useState(false); //este estado guarda si se renderiza o no el contenedor de proyectos
  const proyects = useRef(null); //esto es el contenedor de proyectos
  const proyectsPc = useRef(null)
  // esta funcion se encargara de poner y quitar los proyectos
  const toggleProyectos=()=>{
    setProyectos(!proyectos)
    setShowAside(false)
  }
  useEffect(()=>{
    if(proyectos){
      setProyectos(true)
      proyects.current.classList.add("mostrarProyectos")
      proyectsPc.current.classList.add("mostrarProyectos")
    } else {
      setProyectos(false)
      proyects.current.classList.remove("mostrarProyectos")
      proyectsPc.current.classList.remove("mostrarProyectos")
    }
  })
  
    // esta funcion se encarga de quitar el menu cuando se da click en el icono de inicio
    const quitMenuInicio=()=>{
      setMenuAbierto(false)
      menu.current.classList.remove("mostrarMenu")
      setShowAside(false)
      asidePc.current.classList.add("hideAside")
      setProyectos(false)
    }


  const barritaMb = useRef(null); //esto es la barrita pero para moviles
  const barritaPc = useRef(null); //esto es la barrita pero para pc
  // aqui recibimos el estado para poner claro y oscuro a los temas
  useEffect(()=>{
    if (active) {
      header.current.classList.add("headerDark")
      menu.current.classList.add("contenedorLinksMenuDark")
      document.querySelectorAll(".links li a").forEach(i => i.classList.add("linksDark"));
      document.querySelectorAll(".linkMovil li a").forEach(i => i.classList.add("linkMovilDark"));
      document.querySelectorAll(".linkPc").forEach(i => i.classList.add("linkPcCDark"));
      document.querySelectorAll(".linkPc li a").forEach(i => i.classList.add("linkPcDark"));
      barritaMb.current.classList.add("barritaMbDark");
      barritaPc.current.classList.add("barritaPcDark");
      asideMb.current.classList.add("asideMbDark");
      asidePc.current.classList.add("asidePcDark");
      proyects.current.classList.add("proyectMcContentDark")
      proyectsPc.current.classList.add("proyectPcContentDark")
      
    } else {
      header.current.classList.remove("headerDark")
      menu.current.classList.remove("contenedorLinksMenuDark")
      document.querySelectorAll(".links li a").forEach(i => i.classList.remove("linksDark"));    
      document.querySelectorAll(".linkMovil li a").forEach(i => i.classList.remove("linkMovilDark"));
      document.querySelectorAll(".linkPc").forEach(i => i.classList.remove("linkPcCDark"));
      document.querySelectorAll(".linkPc li a").forEach(i => i.classList.remove("linkPcDark"));
      barritaMb.current.classList.remove("barritaMbDark");    
      barritaPc.current.classList.remove("barritaPcDark");
      asideMb.current.classList.remove("asideMbDark");
      asidePc.current.classList.remove("asidePcDark");
      proyects.current.classList.remove("proyectMcContentDark")
      proyectsPc.current.classList.remove("proyectPcContentDark")
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

          {/* este li contiene los iconos de la barrita de la izquierda */}
          <li className="liBarrita">
            <div ref={barritaMb} className="barrita__contentMovil">
              <Link 
                onClick={quitMenuInicio} 
                className="iconno" 
                to={"./"}
              >
                <FontAwesomeIcon 
                  className="iconoOptions" 
                  icon={faHome} 
                />
              </Link>
              <div className="contentHover">
                <b>inicio</b>
              </div>

              <p 
                className="iconno" 
                onClick={toggleAside}
              >
                <FontAwesomeIcon 
                  className="iconoOptions" 
                  icon={faBookOpen} 
                />
              </p>
              <div className="contentHover cursos">
                <b>cursos</b>
              </div>

              <p 
                className="iconno" 
                onClick={toggleProyectos}
              >
                <FontAwesomeIcon 
                  className="iconoOptions" 
                  icon={faFolderOpen} 
                />
              </p>
              <div className="contentHover proyectos">
                <b>proyectos</b>
              </div>

            </div>
          </li>

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

        {/* esto es el contenedor del aside para telefonos */}
        <div ref={asideMb} className="capitulosContentMovil">
          <Capitulos 
            estadoMenu={setMenuAbierto} 
            contentMenu={menu} 
            sendshowAside={setShowAside} 
            sendasideMb={asideMb} 
            sendasidePc={asidePc}
            active={active}
          />
        </div>
        
        {/* este div contiene a los proyectos */}
        <div ref={proyects} className="proyectosBarritaMb">
          <Proyectos 
            sendshowProyects={setProyectos}
            sendMenu={setMenuAbierto}
            menu={menu}
          />
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

      {/* esto es el aside pero para pc */}
      <div ref={asidePc} className="capitulosContentPc">
        <Capitulos 
            estadoMenu={setMenuAbierto} 
            contentMenu={menu} 
            sendshowAside={setShowAside} 
            sendasideMb={asideMb} 
            sendasidePc={asidePc}
        />
      </div>
      {/* esto es el aside de los proyectos para pc */}
      <div ref={proyectsPc} className="proyectosBarritaPc">
          <Proyectos
            sendshowProyects={setProyectos}
          />
      </div>



      {/* esto es la barrita solo que para pc */}
      <div ref={barritaPc} className="barrita__contentPc">
        <Link
          className="iconno"
          to={"./"}><FontAwesomeIcon
          onClick={quitMenuInicio}
          className="iconoOptions" 
          icon={faHome} 
        /></Link>
        <div className="contentHover">
          <b>inicio</b>
        </div>
        <p 
          className="iconno" 
          onClick={toggleAside}
        >
          <FontAwesomeIcon 
            className="iconoOptions" 
            icon={faBookOpen} 
          />
        </p>
        <div className="contentHover cursos">
          <b>cursos</b>
        </div>

        <p 
          className="iconno" 
          onClick={toggleProyectos}
        >
        <FontAwesomeIcon 
          className="iconoOptions" 
          icon={faFolderOpen} 
        />
        </p>
        <div className="contentHover proyectos">
          <b>proyectos</b>
        </div>

      </div>

    </header>
  );
}

export default Menu;