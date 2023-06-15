import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function Proyectos({sendshowProyects,sendMenu,menu}) {
  
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);

  useEffect(()=>{
    const links = document.querySelectorAll(".temas a")
    links.forEach(i => {
        i.addEventListener("click",()=>{
          try{
            if(window.innerWidth < 750){
              sendMenu(false)
              menu.current.classList.remove("mostrarMenu");
              sendshowProyects(false)
            } else {
              sendshowProyects(false)
            }
          } catch(err){

          }
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
    } 
  };

  // esta funcion activa y desactiva el estado del cuando se haga click en el p principal
  // const [activeTemas, setActiveTemas] = useState("");
  // const hundleActiveTemas = (element) => {
  //   setActiveTemas(element);


  // };

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

                </div>
              }
            </li>

        </ul>
      </nav>
    </aside>
  );
}

export default Proyectos;