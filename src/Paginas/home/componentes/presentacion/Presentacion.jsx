import React, { useRef, useEffect, useState } from 'react';
import "./presentacion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// imagenes
import menu1 from "../../imagenes/opciones.png";
import cursos from "../../imagenes/cursos.png";
import proyectos from "../../imagenes/proyectos.png";
import redes from "../../imagenes/redes.png";

function PresentacionHome({funcion}) {
  const contenedor = useRef();
  const [seccion, setSeccion] = useState(0); // manejo de secciones.
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(true);

  const anterior = () => {
    setSeccion(current => (current <= 0 ? 0 : current - 1));
  };

  const siguiente = () => {
    setSeccion(current => (current >= 3 ? 3 : current + 1));
  };

  useEffect(()=>{
    contenedor.current.style.left = `-${seccion * 100}vw`
    switch(seccion){
      case 0:
        setBtn1(false);
        setBtn2(true)
        break;
      case 3:
        setBtn2(false);
        break;
      default:
        setBtn1(true)
        setBtn2(true)
    }


    const content = contenedor.current.querySelectorAll(".presentacionHome__seccion");
    const observar = (entry, observer) => {
      entry.forEach((i) => {
        if (i.isIntersecting) {
          const cajas = i.target;
          cajas.classList.add("presentacionHome__seccionShow")
          // observer.unobserve(i.target);
        } else {
          const cajas = i.target;
          cajas.classList.remove("presentacionHome__seccionShow")
          // observer.unobserve(i.target);
        }
      });
    };
    const observer = new IntersectionObserver(observar, {
      threshold: 0.5 // Detectar cuando al menos el 50% del contenedor esté visible
    });
    content.forEach((i) => {
      observer.observe(i)
    });

  },[seccion])




  return (
    <div className="presentacionHome" ref={contenedor}>
      <div className='presentacionHome__contentBtn'>
        {
          btn1 && <button className='presentacionHomeBtn' onClick={anterior}>
            <FontAwesomeIcon icon={faAngleLeft}/>
          </button>
        }
        {
          btn2 && <button className='presentacionHomeBtn' onClick={siguiente}>
            <FontAwesomeIcon icon={faAngleRight}/>
          </button>
        }
        {
          !btn2 && <button onClick={funcion} className='presentacionHomeBtn presentacionHomeBtnStart'>
            Iniciar
          </button>
        }
      </div>

      {/* secciones */}
      <div className='presentacionHome__seccion presentacionHome__seccion1'>
        <h2>¡Bienvenido!</h2>
        <p>Este es mi proyecto principal como desarrollador.</p>
        <p>Aqui encontraremos lo siguiente:</p>
        <ul>
          <li>1. Apuntes y resumenes de todas las tecnologias aprendidas.</li>
          <li>2. Proyectos usando las tecnologias aprendidas.</li>
        </ul>
      </div>

      {/* seccion 2 */}
      <div className='presentacionHome__seccion presentacionHome__seccion2'>
        <h2>Menú principal</h2>
        <div className='presentacionHome__seccion2--content'>
          <img src={menu1} alt="menu principal" />
          <div>
            <h4>Función</h4>
            <p>Este menú desplega todas las opciones disponibles.</p>
          </div>
        </div>
        <h2>Contenido</h2>
        <ul>
          <li>1. Opciones principales.</li>
          <li>2. Contactarse directamente con el desarrollador.</li>
          <li>3. Github del desarrollador.</li>
          <li>4. Redes sociales del desarrollador.</li>
        </ul>
      </div>

      {/* seccion 3 */}
      <div className='presentacionHome__seccion presentacionHome__seccion3'>
        <h2>Opciones</h2>
        <div className='presentacionHome__seccion3--menu'>
          <img src={menu1} alt="Menu" />
        </div>
        <div className='presentacionHome__seccion3--info'>
          <div className='presentacionHome__seccion3--infoImg'>
            <img src={cursos} alt="Cursos" />
          </div>
          <div className='presentacionHome__seccion3--infoContent'>
            <h4>Cursos</h4>
            <p>Con la opcion cursos veremos todos los apuntes y resumenes de tecnologias que he aprendido.</p>
          </div>
        </div>
        <div className='presentacionHome__seccion3--info'>
          <div className='presentacionHome__seccion3--infoImg2'>
            <img src={proyectos} alt="proyectos" />
          </div>
          <div className='presentacionHome__seccion3--infoContent'>
            <h4>Proyectos</h4>
            <p>Con la opcion proyectos veremos todos los proyectos realizados con las tencologias aprendidas.</p>
          </div>
        </div>
      </div>
      <div className='presentacionHome__seccion presentacionHome__seccion4'>
        <h2>Redes</h2>
        <div className='presentacionHome__seccion4__menu'>
          <img src={menu1} alt="Menu" />
        </div>
        <div className='presentacionHome__seccion3--info presentacionHome__seccion3--infoRedes'>
          <img src={redes} alt="proyectos" />
          <div className='presentacionHome__seccion3--infoContentRedes'>
            <h4>Contenido</h4>
            <ul>
              <li>1. Facebook</li>
              <li>2. Youtube</li>
              <li>3. Tiktok</li>
              <li>4. Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentacionHome;
