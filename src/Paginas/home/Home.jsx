import React from 'react';
import "./Home.css"
import { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faStepForward } from '@fortawesome/free-solid-svg-icons';



// imagenes
import opciones from "./imagenes/opciones.png";
import cursos from "./imagenes/cursos.png";
import proyectos from "./imagenes/proyectos.png";
import redes from "./imagenes/redes.png";

// iconos
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { text } from '@fortawesome/fontawesome-svg-core';



// imagenes de los lenguajes de programacion
import htmlImg from "./imagenes/html.png";
import cssImg from "./imagenes/css.png";
import jsImgs from "./imagenes/js.png";
import reactImg from "./imagenes/react.png";
import pythonImg from "./imagenes/python.png";
import gitImg from "./imagenes/git.png";

const baseTecnologias=[
  {
    "imagen": htmlImg,
    "titulo": "html",
    "texto": "Esta tecnologia la uso para estructurar todos los proyectos web.",
    "id": "1"
  },
  {
    "imagen": cssImg,
    "titulo": "css",
    "texto": "Esta tecnologia la uso para trabajar con jsvaScript y tambien para estilizar todos los proyectos.",
    "id": "2"
  },
  {
    "imagen": jsImgs,
    "titulo": "javaScript",
    "texto": "Este lenguaje de programacion lo uso para dar vida a cada proyecto programando cada proyecto hecho incluyendo este proyecto principal.",
    "id": "3"
  },
  {
    "imagen": reactImg,
    "titulo": "react",
    "texto": "Esta frameWork lo uso para hacer proyectos grandes como este , todo este proyecto esta hecho en react incluyendo los proyectos de la seccion javaScript.",
    "id": "4"
  },
  {
    "imagen": pythonImg,
    "titulo": "python",
    "texto": "Este lenguaje lo uso para hacer pequeños proyectos de escritorio importando librerias o programando pequeñas cosas con este lenguaje actualmente , pero pienso usarlo como lenguaje para aprender inteligencia artificial.",
    "id": "5"
  },
  {
    "imagen": gitImg,
    "titulo": "git",
    "texto": "Este controlador de versiones es basico de aprender y su unico uso es manejar cada version del proyecto.",
    "id": "6"
  }
]



function BotonNext({funcion,mostrar}) {
  return(
    <div className={`HomePresentBtnContent`}>
      <button 
        onClick={funcion}
        className={`HomePresentBtn ${mostrar ? "":"HomePresentBtnGray"}`}
      >siguiente <FontAwesomeIcon icon={faAnglesRight} /></button>
    </div>
  )
}

function Indicaciones({color}) {
  const [greenRed, setGreenRed] = useState(color);
  return(
    <div className='HomePresentIndicaciones'>
      <img src={opciones} alt="menu imagen" />
      <div className={`HomePresentIndicaciones__3ImgIcons ${greenRed ?   
        "HomePresentIndicaciones__3ImgIconsGreen"
        :
        "HomePresentIndicaciones__3ImgIconsRed"
      }`}>
        <FontAwesomeIcon icon={faBars}/>
        <FontAwesomeIcon icon={faUsers}/>
      </div>
    </div>
  )
}

function Informacion({imagen,texto}) {
  return(
    <div className='HomePresent__3Info'>
      <img src={imagen} alt="imagen menu" />
      <p>{texto}</p>
    </div>
  )
}


function Home() {

  // contendor main.
  const main = useRef(null);


  // variables globales.
  const [showBtnNext, setShowBtnNext] = useState(false); // mostrar el boton de siguiente en la presentacion.


  // Esto es para hacer el efecto maquina de escribir.

  // escribir de forma individual
  const escribir = (variable, str, tiempo) => {
    return new Promise((resolve) => {
      variable("");
      let i = 0;
      let newString = "";
      let arr = str.split("");
      const show = setInterval(() => {
        newString += arr[i];
        variable(newString);
        i++;
        setShowBtnNext(false)
        if (i === str.length) {
          clearInterval(show);
          setShowBtnNext(true)
          resolve();
        }
      }, tiempo);
    });
  };
  // escribir varios a la vez.
  const escribirInfo = async (...estados) => {
    for (let i = 0; i < estados.length; i++) {
      await escribir(estados[i][0], estados[i][2], 50);
    }
  };
  


  // variables necesarias de los tutoriales.
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const [text10, setText10] = useState("");

  // escribir tutorial 1
  useEffect(() => {
    escribirInfo(
      [setText1, text1, "¡ApuntesDan!"],
      [setText2, text2, "¡Hola! Soy Daniel desarrollador de estos apuntes de tecnologia de programacion , aqui tambien se encontraran proyectos usando lo aprendido en diferentes cursos."]
    );
  }, []);
  


  // Esta funcion es para pasar a la siguiente pagina.
  const contenedorPresentacion = useRef(); // referencia del contenedor.
  const [contadorContentPresent, setContadorContentPresent] = useState(0); // conteador para mostrar las presentaciones.
  const siguientePagina=()=>{
    setText1("");
    setText2("");
    const contenedor = contenedorPresentacion.current.querySelectorAll(".homePresentChild");
    let contador = contadorContentPresent;
    contenedor[contador].style.display = "none";
    contador = contadorContentPresent + 1;
    setContadorContentPresent(contador)
    contenedor[contador].style.left = "0";
  }

  // quitar presentacion de la web cuando se de click en un boton
  const comenzar=()=>{
    localStorage.setItem("inicioHome",false)
    contenedorPresentacion.current.classList.add("HomePresentHide");
    main.current.style.zIndex = "0"
  }

  useEffect(() => {
    let estado = JSON.parse(localStorage.getItem("inicioHome"));
    if (estado === false) {
      contenedorPresentacion.current.classList.add("HomePresentHide");
      main.current.style.zIndex = "0"
    }
  }, []);




  // manejo de intersection observer.

  const contenedorPage = useRef();

  useEffect(() => {
    const contenedor = contenedorPage.current.querySelectorAll(".homeLazy");

    const observar = (entry, observer) => {
      entry.forEach((i) => {
        if (i.isIntersecting) {
          i.target.classList.add("homeLazyShow")
          observer.unobserve(i.target);
        }
      });
    };

    const observerOptions = {
      root: contenedorPage.current,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observar, observerOptions);

    contenedor.forEach((i) => observer.observe(i));

    return () => observer.disconnect();
  },[]);







  
  
  return (
    <>
      

      <main  className={`mainHome`} ref={main}>
        
        {/* esto sera la prensentacion del porfolio */}
        <div className="HomePresent" ref={contenedorPresentacion}>
          {/* presentacion */}
          <div className='HomePresent__1 homePresentChild'>
            <h1>{text1}</h1>
            <div className='HomePresent__1Indo'>
              <p>{text2}</p>
              <div className='HomePresent__1IndoImg'>
                <img src="https://th.bing.com/th/id/OIP.OhYQBw5Fov-1BQZO4LfV3QHaFe?pid=ImgDet&w=206&h=152&c=7" alt="desarrollador imagen" />
              </div>
            </div>
            <BotonNext 
              funcion={()=>{
                siguientePagina()
                escribirInfo(
                  [setText1, text1, "Menu principal"],
                  [setText2, text2, "¿Para que sirve cada boton del menu?"],
                  [setText3, text3, "Menu de opciones:"],
                  [setText4, text4, "Aqui veremos todas las opciones que tiene esta web."],
                  [setText5, text5, "Contactame:"],
                  [setText6, text6, "Aqui podras contactarme por watsapp."],
                  [setText7, text7, "GitHub:"],
                  [setText8, text8, "Aqui podras ver algunos de mis proyectos de codigo abierto."],
                  [setText9, text9, "Redes:"],
                  [setText10, text10, "Aqui puedes ver todas mis redes sociales."],
                );
              }}
              mostrar={showBtnNext}
            />
          </div>

          {/* parte dos del tutorial */}
          <div className='HomePresent__2 homePresentChild'>
            <h2>{text1}</h2>
            <div className='HomePresent__2Info'>
                <p>{text2}</p>
                <img src={opciones} alt="" />
            </div>
            <div className='HomePresent__2InfoBtns'>
                <div className='HomePresent__2InfoBtns__content'>
                  <b className='HomePresent__2InfoBtns_1'><FontAwesomeIcon icon={faBars}/></b>
                  <div>
                    <h3>{text3}</h3>
                    <p>{text4}</p>
                  </div>
                </div>
                <div className='HomePresent__2InfoBtns__content'>
                  <b className='HomePresent__2InfoBtns_2'><FontAwesomeIcon icon={faComment}/></b>
                  <div>
                    <h3>{text5}</h3>
                    <p>{text6}</p>
                  </div>
                </div>
                <div className='HomePresent__2InfoBtns__content'>
                  <b className='HomePresent__2InfoBtns_3'><FontAwesomeIcon icon={faGithub}/></b>
                  <div>
                    <h3>{text7}</h3>
                    <p>{text8}</p>
                  </div>
                </div>
                <div className='HomePresent__2InfoBtns__content'>
                  <b className='HomePresent__2InfoBtns_4'><FontAwesomeIcon icon={faUsers}/></b>
                  <div>
                    <h3>{text9}</h3>
                    <p>{text10}</p>
                  </div>
                </div>
            </div>
            <BotonNext
              funcion={()=>{                  
                siguientePagina();
                setText1("");
                setText2("");
                setText3("");
                setText4("");
                escribirInfo(
                  [setText1, text1, "Opciones"],
                  [setText2, text2, "Aqui podras visualizar todos los apuntes que hice de todas las tecnologias que eh aprendido y que actualmente domino."],
                  [setText3, text3, "Aqui podras visualizar todos los proyectos que realice usando lo aprendido a lo largo del tiempo"],
                  [setText4, text4 , "Aqui podras ver todas mis redes sociales para que podamos contactarnos."]
                );
              }}
              mostrar={showBtnNext}
            />
          </div>

          <div className='HomePresent__3 homePresentChild'>
            <h2>{text1}</h2>
            <Indicaciones color={true}/>
            <Informacion imagen={cursos} texto={text2}/>
            <Informacion imagen={proyectos} texto={text3}/>
            <Indicaciones color={false}/>
            <Informacion imagen={redes} texto={text4}/>
            <button onClick={comenzar} className={`HomePresent__3Btn ${showBtnNext ? "":"HomePresent__3BtnHray"}`}>¡Comenzar!</button>
          </div>
              
        </div>

        {/* pagina home */}
        <div className='Home' ref={contenedorPage}>
          
          {/* tecnologias */}
          <div className='HomeTecnologias homeLazy'>
            <h2>Tecnologias</h2>
            <div>
              {
                baseTecnologias.map(i=>(
                  <div>
                    <h3>{i.titulo}</h3>
                    <img src={i.imagen} alt="imagen" />
                  </div>
                ))
              }
            </div>
          </div>

          {/* sertificados */}
          <div className='HomeSertificados homeLazy'>
            
          </div>

        </div>

        
      </main>
    </>
  );
}

export default Home;



































