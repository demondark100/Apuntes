import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function Proyectos({sendshowProyects}) {
  
  // temas principales
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javaScript, setJavaScript] = useState(false);

  // javaScript capitulos
  const [cap1Js, setCap1Js] = useState(false);
  const [cap3Js, setCap3Js] = useState(false);
  const [cap4Js, setCap4Js] = useState(false);


  useEffect(()=>{
    const links = document.querySelectorAll(".temas a")
    links.forEach(i => {
        i.addEventListener("click",()=>{
          sendshowProyects(false)
        })
      });
    })



  // esta funcion activa y desactiva el estado del cuando se haga click en el p principal
  const [activeElement, setActiveElement] = useState("");
  const handleElementClick = (element) => {
    setActiveElement(element);

    if (element === "p1") {
      setHtml(!html)
    } else if (element === "p2") {
      setCss(!css)
    } else if (element === "p3") {
      setJavaScript(!javaScript)
    }
  };
  

  // esta funcion activa y desactiva el estado del cuando se haga click en el p principal
  const [activeTemas, setActiveTemas] = useState("");
  const hundleActiveTemas = (element) => {
    setActiveTemas(element);
    if(element === "p1"){
      setCap1Js(!cap1Js)
    } else if (element === "p2"){
      setCap3Js(!cap3Js)
    } else if (element === "p3"){
      setCap4Js(!cap4Js)
    }

  };

  return (
    <aside>
      <nav>
        <ul>
          
          <li className="curso">
              <p 
                className={activeElement === "p1" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p1")}
              >html</p>
              {
                html && <div className="temas">
                  <Link to={"../html/cap1Proy"}>capitulo 2 (estructura)</Link>
                  <Link to={"../html/cap3Proy"}>capitulo 3 (tutorial Termux)</Link>
                  <Link to={"../html/cap4Proy"}>capitulo 4 (tienda estructurada)</Link>
                </div>
              }
            </li>

            <li className='curso'>
              <p 
                className={activeElement === "p2" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p2")}
              >css</p>
              {
                css && <div className='temas'>
                  <Link to={"../css/proyCap1"}>capitulo 1 (consejos css)</Link>
                  <Link to={"../css/proyCap2"}>capitulo 2 (utilidad tecnologias)</Link>
                  <Link to={"../css/proyCap3"}>capitulo 3 (juegos clasicos)</Link>
                  <Link to={"../css/proyCap4"}>capitulo 4 (login)</Link>
                  <Link to={"../css/proyCap5"}>capitulo 5 (buscador de lenguajes)</Link>
                  <Link to={"../css/proyCap6"}>capitulo 6 (menu animado)</Link>

                </div>
              }
            </li>

            <li className='curso'>
              <p 
                className={activeElement === "p3" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p3")}
              >
                javaScript
              </p>
              {
                javaScript && <div className='capitulos'>
                  
                  <div>
                    <p
                      className={activeTemas === "p1" ? "activeParrafoTemas" : ""}
                      onClick={()=>hundleActiveTemas("p1")}
                    >
                      capitulo 2
                    </p>
                    {
                      cap1Js && <div className='temas'>
                        <Link to={"../javaScipt/cap1ProyV1"}>nombre</Link>
                        <Link to={"../javaScipt/cap1ProyV2"}>operaciones</Link>
                      </div>
                    }
                  </div>

                  <div>
                    
                    <p
                      className={activeTemas === "p2" ? "activeParrafoTemas" : ""}
                      onClick={()=>hundleActiveTemas("p2")}
                    >
                      capitulo 3
                    </p>
                    {
                      cap3Js && <div className='temas'>
                        <Link to={"../javaScript/cap3ProyV1"}>asistencia de alumnos</Link>
                        <Link to={"../javaScript/cap3ProyV2"}>entradas fiesta</Link>
                        <Link to={"../javaScript/cap3ProyV3"}>tienda de helados</Link>
                      </div>
                    }
                  
                  </div>

                  <div>
                    
                    <p
                      className={activeTemas === "p3" ? "activeParrafoTemas" : ""}
                      onClick={()=>hundleActiveTemas("p3")}
                    >
                      capitulo 4
                    </p>
                    {
                      cap4Js && <div className='temas'>
                        <Link to={"javaScript/cap4ProyV1"}>matematica para niños</Link>
                        <Link to={"javaScript/cap4ProyV2"}>pregunta</Link>
                        <Link to={"javaScript/cap4ProyV3"}>formulario</Link>
                        <Link to={"javaScript/cap4ProyV4"}>calculadora</Link>

                      </div>
                    }
                  
                  </div>

                </div>
              }
            </li>


            
        </ul>
      </nav>
    </aside>
  );
}

export default Proyectos;