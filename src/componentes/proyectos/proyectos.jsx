import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./proyectos.css";





// imagenes

// html
import html1 from "./imagenes/html/html1.png"
import html2 from "./imagenes/html/html2.png"
import html3 from "./imagenes/html/html3.png"

// css
import css1 from "./imagenes/css/css1.png"
import css2 from "./imagenes/css/css2.png"
import css3 from "./imagenes/css/css3.png"
import css4 from "./imagenes/css/css4.png"
import css5 from "./imagenes/css/css5.png"
import css6 from "./imagenes/css/css6.png"

// javaScript
import js1 from "./imagenes/javaScript/js1.png"
import js2 from "./imagenes/javaScript/js2.png"
import js3 from "./imagenes/javaScript/js3.png"
import js4 from "./imagenes/javaScript/js4.png"
import js5 from "./imagenes/javaScript/js5.png"
import js6 from "./imagenes/javaScript/js6.png"
import js7 from "./imagenes/javaScript/js7.png"
import js8 from "./imagenes/javaScript/js8.png"
import js9 from "./imagenes/javaScript/js9.png"
import js10 from "./imagenes/javaScript/js10.png"
import js11 from "./imagenes/javaScript/js11.png"
import js12 from "./imagenes/javaScript/js12.png"
import js13 from "./imagenes/javaScript/js13.png"
import js14 from "./imagenes/javaScript/js14.png"
import js15 from "./imagenes/javaScript/js15.png"
import js16 from "./imagenes/javaScript/js16.png"
import js17 from "./imagenes/javaScript/js17.png"
import js18 from "./imagenes/javaScript/js18.png"
import js19 from "./imagenes/javaScript/js19.png"
import js20 from "./imagenes/javaScript/js20.png"
import js21 from "./imagenes/javaScript/js21.png"
import js22 from "./imagenes/javaScript/js22.png"
import js23 from "./imagenes/javaScript/js23.png"
import js24 from "./imagenes/javaScript/js24.png"
import js25 from "./imagenes/javaScript/js25.png"




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
  const [cap6Js, setCap6Js] = useState(false);
  const [cap7Js, setCap7Js] = useState(false);
  const [cap8Js, setCap8Js] = useState(false);
  const [cap9Js, setCap9Js] = useState(false);
  const [cap10Js, setCap10Js] = useState(false);
  const [cap11Js, setCap11Js] = useState(false);

  useEffect(()=>{
    const links = document.querySelectorAll(".temas a")
    links.forEach(i => {
        i.addEventListener("click",()=>{
          sendshowProyects(false)
        })
      });
    })

    const [imagen, setImagen] = useState("");
    const [showContent, setShowContent] = useState(true);
    const showImg=(imagen)=>{
      setImagen(imagen);
      setShowContent(true);
    }

  return (
    <>
    <aside>
      <nav className='NavAside'>
        <ul className='NavAsideUl'>
          
          <li className="curso">
              <p onClick={()=>setHtml(!html)}>html</p>
              {
                html && <div className="temas">
                  <Link onMouseMove={()=>showImg(html1)} onMouseOut={()=>setShowContent(false)} to={"../html/cap1Proy"}>capitulo 2 (estructura)</Link>
                  
                  <Link onMouseMove={()=>showImg(html2)} onMouseOut={()=>setShowContent(false)} to={"../html/cap3Proy"}>capitulo 3 (tutorial Termux)</Link>
                  
                  <Link onMouseMove={()=>showImg(html3)} onMouseOut={()=>setShowContent(false)} to={"../html/cap4Proy"}>capitulo 4 (tienda estructurada)</Link>
                </div>
              }
            </li>

            <li className='curso'>
              <p onClick={()=>setCss(!css)}>css</p>
              {
                css && <div className='temas'>
                  <Link onMouseMove={()=>showImg(css1)} onMouseOut={()=>setShowContent(false)} to={"../css/proyCap1"}>capitulo 1 (consejos css)</Link>

                  <Link onMouseMove={()=>showImg(css2)} onMouseOut={()=>setShowContent(false)} to={"../css/proyCap2"}>capitulo 2 (utilidad tecnologias)</Link>
                  
                  <Link onMouseMove={()=>showImg(css3)} onMouseOut={()=>setShowContent(false)} to={"../css/proyCap3"}>capitulo 3 (juegos clasicos)</Link>
                  
                  <Link onMouseMove={()=>showImg(css4)} onMouseOut={()=>setShowContent(false)} to={"../css/proyCap4"}>capitulo 4 (login)</Link>
                  
                  <Link onMouseMove={()=>showImg(css5)} onMouseOut={()=>setShowContent(false)} to={"../css/proyCap5"}>capitulo 5 (buscador de lenguajes)</Link>
                  
                  <Link onMouseMove={()=>showImg(css6)} onMouseOut={()=>setShowContent(false)} to={"../css/proyCap6"}>capitulo 6 (menu animado)</Link>

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
                        <Link onMouseMove={()=>showImg(js1)} onMouseOut={()=>setShowContent(false)} to={"../javaScipt/cap1ProyV1"}>nombre</Link>
                        
                        <Link onMouseMove={()=>showImg(js2)} onMouseOut={()=>setShowContent(false)} to={"../javaScipt/cap1ProyV2"}>operaciones</Link>
                      </div>
                    }
                  </div>

                  <div>
                    
                    <p onClick={()=>setCap3Js(!cap3Js)}>capitulo 3</p>
                    {
                      cap3Js && <div className='temas'>
                        <Link onMouseMove={()=>showImg(js3)} onMouseOut={()=>setShowContent(false)} to={"../javaScript/cap3ProyV1"}>asistencia de alumnos</Link>
                        
                        <Link onMouseMove={()=>showImg(js4)} onMouseOut={()=>setShowContent(false)} to={"../javaScript/cap3ProyV2"}>entradas fiesta</Link>
                        
                        <Link onMouseMove={()=>showImg(js5)} onMouseOut={()=>setShowContent(false)} to={"../javaScript/cap3ProyV3"}>tienda de helados</Link>
                      </div>
                    }
                  
                  </div>

                  <div>
                    
                    <p onClick={()=>setCap4Js(!cap4Js)}>capitulo 4</p>
                    {
                      cap4Js && <div className='temas'>
                        <Link onMouseMove={()=>showImg(js6)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap4ProyV1"}>matematica para niños</Link>
                        
                        <Link onMouseMove={()=>showImg(js7)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap4ProyV3"}>formulario</Link>

                      </div>
                    }
                  
                  </div>

                  <div>
                    
                    <p onClick={()=>setCap5Js(!cap5Js)}>capitulo 5</p>
                    {
                      cap5Js && <div className='temas'>
                        <Link onMouseMove={()=>showImg(js8)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap5ProyV1"}>generador de cajitas</Link>
                        
                        <Link onMouseMove={()=>showImg(js9)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap5ProyV2"}>operaciones con manzanitas</Link>
                        
                        <Link onMouseMove={()=>showImg(js10)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap5ProyV3"}>Editor de galeria.</Link>


                      </div>
                    }
                  
                  </div>
                  
                  <div>
                    
                    <p onClick={()=>setCap7Js(!cap7Js)}>capitulo 7</p>
                    {
                      cap7Js && <div className='temas'>
                        <Link onMouseMove={()=>showImg(js11)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap7ProyV1"}>contador</Link>
                        
                        <Link onMouseMove={()=>showImg(js12)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap7ProyV2"}>calculadora</Link>
                        
                        <Link onMouseMove={()=>showImg(js13)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap7ProyV3"}>generador de contraseñas</Link>
                        
                        <Link onMouseMove={()=>showImg(js14)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap7ProyV4"}>colores css.</Link>
                        
                        <Link onMouseMove={()=>showImg(js15)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap7ProyV5"}>pregunta</Link>

                      </div>
                    }
                  
                  </div>


                  <div>
                  
                    
                    <p onClick={()=>setCap8Js(!cap8Js)}>capitulo 8</p>
                    {
                      cap8Js && <div className='temas'>
                        <Link onMouseMove={()=>showImg(js16)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap8ProyV1"}>adivina el numero</Link>
                        
                        <Link onMouseMove={()=>showImg(js17)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap8ProyV2"}>examen de programacion</Link>

                      </div>
                    }
                  
                  </div>

                  <div>
                    
                    <p onClick={()=>setCap9Js(!cap9Js)}>capitulo 9</p>
                    {
                      cap9Js && <div className='temas'>
                        <Link onMouseMove={()=>showImg(js18)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap9ProyV1"}>puchadex(pokedex :v)</Link>
                        
                        <Link onMouseMove={()=>showImg(js19)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap9ProyV2"}>generador de chistes</Link>
                      </div>
                    }
                   
                  </div>


                  <div>
                    
                    <p onClick={()=>setCap10Js(!cap10Js)}>capitulo 10</p>
                    {
                      cap10Js && <div className='temas'>
                        <Link onMouseMove={()=>showImg(js20)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap10ProyV1"}>factorizar</Link>

                      </div>
                    }
                  
                  </div>


                  <div>
                    
                    <p onClick={()=>setCap11Js(!cap11Js)}>capitulo 11</p>
                    {
                      cap11Js && <div className='temas'>
                        <Link onMouseMove={()=>showImg(js21)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap11ProyV1"}>reloj y cronometro</Link>
                        
                        <Link onMouseMove={()=>showImg(js22)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap11ProyV2"}>claro/oscuro local</Link>
                        
                        <Link onMouseMove={()=>showImg(js23)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap11ProyV3"}>Notas</Link>
                        
                        <Link onMouseMove={()=>showImg(js24)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap11ProyV4"}>cambiar fondo</Link>
                        
                        <Link onMouseMove={()=>showImg(js25)} onMouseOut={()=>setShowContent(false)} to={"javaScript/cap11ProyV5"}>Contactos</Link>
                      </div>
                    }
                  
                  </div>




{/* 
                  <div>
                    
                    <p onClick={()=>setCap6Js(!cap6Js)}>capitulo 8</p>
                    {
                      cap6Js && <div className='temas'>
                        <Link to={"javaScript/cap7ProyV3"}>Informacion de la Pc.</Link>

                      </div>
                    }
                  
                  </div> */}



                </div>
              }
            </li>

        </ul>
      </nav>
    </aside>
      <div className={`imagenProyectosContent ${showContent ? "":"imagenProyectosContentHide"}`}>
        <img src={imagen} alt="No hay imagen" />
      </div>
    </>
  );
}

export default Proyectos;