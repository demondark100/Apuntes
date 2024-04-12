import "./Home.css";
import React, { useState, useEffect, useRef } from 'react';


// pesentacio  y secciones
import PresentacionHome from './componentes/presentacion/Presentacion';
import Seccion1Home from "./componentes/seccion 1/seccion";
import Seccion2Home from "./componentes/seccion 2/seccion";


function Home() {

  // funcion de presentacion.
  // Aqui aseguramos que el tutorial solo aparezca una sola vez.
    const [tutorial, setTutorial] = useState();
    const quitarTutorial=()=>{
      setTutorial(false);
      localStorage.setItem("tutorial",JSON.stringify(false));
    }
    useEffect(()=>{
      let cambio = JSON.parse(localStorage.getItem("tutorial"));
      if (cambio === false) {
        setTutorial(cambio);
      } else if(cambio === null){
        setTutorial(true)
      }
    },[tutorial])

  
  // secciones de porfolio.
  // aqui hacemos que cuando se cambien de secciones en el porfolio exista alguna animacion
  const contentHome = useRef(); // contenedor
  
  useEffect(()=>{
    const content = contentHome.current.querySelectorAll(".Home__seccion");
    // const info = contentHome.current.querySelectorAll(".HomeSeccion");
    const observar = (entry,observe) => {
      entry.forEach((i) => {
        if (i.isIntersecting) {
          const cajas = i.target.querySelector(".HomeSeccion");
          cajas.classList.add("HomeSeccionShow");
          observe.unobserve(i.target)
        } 
      });
    };
      
    const observer = new IntersectionObserver(observar ,{
      threshold: 0.1
    });
    content.forEach((i) => {
      observer.observe(i);
    });
  })


  return (
    <div 
      className='Home'
      ref={contentHome}
    >
      {/* presentacion osea el tutorial */}
      <div className={`Home__presentacion ${tutorial ? "":"Home__presentacionHide"}`}>
        <PresentacionHome funcion={quitarTutorial}/>
      </div>

      {/* seccion 1 */}
      <div className="Home__seccion Home__seccion1">
        <Seccion1Home />
      </div>

      {/* seccion 2 */}
      <div className="Home__seccion Home__seccion2">
        <Seccion2Home />
      </div>

    </div>
  );
}

export default Home;