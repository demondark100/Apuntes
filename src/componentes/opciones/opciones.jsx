import { useEffect, useRef,useState } from "react";
import { Link } from "react-router-dom";
import "./opciones.css";

// uconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// componentes
import Capitulos from "../capitulos/aside";
import Proyectos from "../proyectos/proyectos";




function Barrita({active}) {
  const barrita = useRef(null); //esto es la barrita pero para moviles

  const toggleProyectos=()=>{
    setProyectos(!proyectos)
    setShowAside(false)
  }

  // esta funcion se encarga de quitar el menu cuando se da click en el icono de inicio
  const quitMenuInicio=()=>{
    setShowAside(false)
    setProyectos(false)
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
    const aside = useRef(null); //esto es el contenedor del aside movil
    // esta funcion mostrar el aside o lo quitara segun sea
    const toggleAside=()=>{
      setShowAside(!showAside)
      setProyectos(false)
      aside.current.classList.add("hideAside");
    }

    
  // esta funcion se encarga de quitar el menu cuando se da click en el icono de inicio

  useEffect(()=>{
    if(showAside){
      aside.current.classList.remove("hideAside");
    } else{
      aside.current.classList.add("hideAside");
    }
  })


  const [proyectos, setProyectos] = useState(false); //este estado guarda si se renderiza o no el contenedor de proyectos
  const proyects = useRef(null); //esto es el contenedor de proyectos
  // esta funcion se encargara de poner y quitar los proyectos

  useEffect(()=>{
    if(proyectos){
      setProyectos(true)
      proyects.current.classList.add("mostrarProyectos")
    } else {
      setProyectos(false)
      proyects.current.classList.remove("mostrarProyectos")
    }
  })


  useEffect(()=>{
    if(active == true){
      aside.current.classList.add("asideMbDark");
      proyects.current.classList.add("proyectMcContentDark")
    } else if(active == false){
      aside.current.classList.remove("asideMbDark");
      proyects.current.classList.remove("proyectMcContentDark")
    }
  })

  return (
     <div className="liBarrita">
      <div ref={barrita} className="barrita__content">
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

        {/* esto es el contenedor del aside para telefonos */}
        <div ref={aside} className="capitulosContent">
          <Capitulos
            sendshowAside={setShowAside}
            sendasideMb={aside}
            active={active}
          />
        </div>


        {/* este div contiene a los proyectos */}
        <div ref={proyects} className="proyectosBarrita">
          <Proyectos 
            sendshowProyects={setProyectos}
          />
        </div>
    </div>
  );
}

export default Barrita;