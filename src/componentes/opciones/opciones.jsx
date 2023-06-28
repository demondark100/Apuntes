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




function Barrita({active}) {
  const barrita = useRef(null); //esto es la barrita pero para moviles



  // esta funcion se encarga de quitar el menu cuando se da click en el icono de inicio
  const quitMenuInicio=()=>{
    setShowAside(false)
    setProyectos(false)
    setCodificar(false)
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
    setCodificar(false)
    // aside.current.classList.add("hideAside");
  }
  // esta funcion se encarga de quitar el menu cuando se da click en el icono de inicio
  useEffect(()=>{
    if(showAside){
      aside.current.classList.remove("hideAside");
    } else{
      aside.current.classList.add("hideAside");
    }
  })


  // esta funcioin se encarga de mostrar o quitar los proyectos
  const [proyectos, setProyectos] = useState(false); //este estado guarda si se renderiza o no el contenedor de proyectos
  const proyects = useRef(null); //esto es el contenedor de proyectos
  // esta funcion se encargara de poner y quitar los proyectos
  const toggleProyectos=()=>{
    setProyectos(!proyectos)
    setShowAside(false)
    setCodificar(false)
  }

  useEffect(()=>{
    if(proyectos){
      proyects.current.classList.add("mostrarProyectos")
    } else {
      proyects.current.classList.remove("mostrarProyectos")
    }
  })


  // esta funcion se encarga de mostrar o quitar la barrita de codificacion
  const [codificar, setCodificar] = useState(false);
  const codificarContent = useRef(null);
  const toggleCodificar=()=>{
    setCodificar(!codificar);
    setShowAside(false)
    setProyectos(false)
  }
  useEffect(()=>{
    if(codificar){
      codificarContent.current.classList.remove("hideCodificar");
    } else{
      codificarContent.current.classList.add("hideCodificar");
    }
  })

  // esta funcion es el claro y oscuro

  useEffect(()=>{
    if(active == true){
      aside.current.classList.add("asideDark");
      proyects.current.classList.add("proyectMcContentDark")
      barrita.current.classList.add("barritaDark");
      codificarContent.current.classList.add("barritaDark");
    } else if(active == false){
      aside.current.classList.remove("asideDark");
      proyects.current.classList.remove("proyectMcContentDark")
      barrita.current.classList.remove("barritaDark");
      codificarContent.current.classList.remove("barritaDark");
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

        <p 
          className="iconno" 
          onClick={toggleCodificar}
        >
          <FontAwesomeIcon 
            className="iconoOptions" 
            icon={faCode} 
          />
        </p>
        <div className="contentHover codificar">
          <b>codificar</b>
        </div>


      </div>

        {/* esto es el contenedor del aside para telefonos */}
        <div ref={aside} className="capitulosContent">
          <Capitulos
            sendshowAside={setShowAside}
            sendaside={aside}
            active={active}
          />
        </div>


        {/* este div contiene a los proyectos */}
        <div ref={proyects} className="proyectosBarrita">
          <Proyectos 
            sendshowProyects={setProyectos}
          />
        </div>

        <div ref={codificarContent} className="codificarBarrita">
          <CodificarCodigo />
        </div>
    </div>
  );
}

export default Barrita;