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
  const [cap5Js, setCap5Js] = useState(false);


  useEffect(()=>{
    const links = document.querySelectorAll(".temas a")
    links.forEach(i => {
        i.addEventListener("click",()=>{
          sendshowProyects(false)
        })
      });
    })



  return (
    <aside>
      <nav>
        <ul>
          
          <li className="curso">
              <p onClick={()=>setHtml(!html)}>html</p>
              {
                html && <div className="temas">
                  <Link to={"../html/cap1Proy"}>capitulo 2 (estructura)</Link>
                  <Link to={"../html/cap3Proy"}>capitulo 3 (tutorial Termux)</Link>
                  <Link to={"../html/cap4Proy"}>capitulo 4 (tienda estructurada)</Link>
                </div>
              }
            </li>

            <li className='curso'>
              <p onClick={()=>setCss(!css)}>css</p>
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
              <p onClick={()=>setJavaScript(!javaScript)}>javaScript</p>
              {
                javaScript && <div className='capitulos'>
                  
                  <div>
                    <p onClick={()=>setCap1Js(!cap1Js)}>capitulo 2</p>
                    {
                      cap1Js && <div className='temas'>
                        <Link to={"../javaScipt/cap1ProyV1"}>nombre</Link>
                        <Link to={"../javaScipt/cap1ProyV2"}>operaciones</Link>
                      </div>
                    }
                  </div>

                  <div>
                    
                    <p onClick={()=>setCap3Js(!cap3Js)}>capitulo 3</p>
                    {
                      cap3Js && <div className='temas'>
                        <Link to={"../javaScript/cap3ProyV1"}>asistencia de alumnos</Link>
                        <Link to={"../javaScript/cap3ProyV2"}>entradas fiesta</Link>
                        <Link to={"../javaScript/cap3ProyV3"}>tienda de helados</Link>
                      </div>
                    }
                  
                  </div>

                  <div>
                    
                    <p onClick={()=>setCap4Js(!cap4Js)}>capitulo 4</p>
                    {
                      cap4Js && <div className='temas'>
                        <Link to={"javaScript/cap4ProyV1"}>matematica para niños</Link>
                        <Link to={"javaScript/cap4ProyV2"}>pregunta</Link>
                        <Link to={"javaScript/cap4ProyV3"}>formulario</Link>

                      </div>
                    }
                  
                  </div>

                  <div>
                    
                    <p onClick={()=>setCap5Js(!cap5Js)}>capitulo 5</p>
                    {
                      cap5Js && <div className='temas'>
                        <Link to={"javaScript/cap5ProyV1"}>calculadora</Link>
                        <Link to={"javaScript/cap5ProyV2"}>generador de contraseñas</Link>
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