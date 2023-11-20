import React from 'react';
import "./Home.css"

// componentes
import Footer from '../../componentes/menus/Footer';
import { Link, json } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useRef } from 'react';
import MensajeModal from '../../componentes/MensajeModal/mensajeModal';




// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";





const Parpadeo=()=>{
  return (
    <b className='parpadeoHome'>_</b>
  )
}



function Home({active}) {

  const contenedor1 = useRef();
  const contenedor2 = useRef();

  useEffect(()=>{
    if(active == true){
      contenedor1.current.classList.add("contenedorHomeDark")
      contenedor2.current.classList.add("contenedorHomeDark")
    } else if(active == false){
      contenedor1.current.classList.remove("contenedorHomeDark")
      contenedor2.current.classList.remove("contenedorHomeDark")
    }
  })


  // maquina de escribir
  const [palito, setPalito] = useState(true);  // Esta variable es el palito de la maquina de escribir.
  const [textoPresentacion, setTextoPresentacion] = useState(""); // Esta variable es el texto para saludar al usuario
  const [textoTitlePresent, setTextoTitlePresent] = useState("");  // esto es el titulo de ña primera parte de presentacion.
  const [textoParrafoPresent, setTextoParrafoPresent] = useState("");  // esto es el parrafo de la presentacion 2


  // mostrar imagenes  
    const [jsImgShow, setJsImgShow] = useState(false);
    const [reactImgShow, setReactImgShow] = useState(false);
    const [pythonImgShow, setPythonImgShow] = useState(false);
    const [gitImgShow, setGitImgShow] = useState(false);
    const [showBoton, setShowBoton] = useState(false);



  // mostrar paginas
    const [showContent, setShowContent] = useState(true); // contenedor de presentacion
    const [menuHome, setMenuHome] = useState(false);



  // Esto es para hacer el efecto maquina de escribir.

  const escribir = (variable,str) => {
    let i = 0;
    let newString = "";
    let arr = str.split("");
    const show = setInterval(() => {
      newString += arr[i];
      variable(newString);
      i++;
      setPalito(true);
      if (i === str.length) {
        clearInterval(show);
        setPalito(false);
      }
    }, 150);
  };

  // aqui mostramos el h1 y sus imagenes en la primera presentacion de la web.
  useEffect(() => {
    escribir(setTextoPresentacion,"¡Hello world! I'm a dev.");
    setTimeout(() => setJsImgShow(true), 2000);
    setTimeout(() => setReactImgShow(true), 2500);
    setTimeout(() => setPythonImgShow(true), 3000);
    setTimeout(() => setGitImgShow(true), 3500);
    setTimeout(() => setShowBoton(true), 4000);
  }, []);

  // esto es para ocultar la presentacion una vez que el usuario da en comenzar.
  useEffect(() => {
    let cambio = localStorage.getItem("ShowContent");
    if (cambio === "false") {
      setShowContent(false);
      escribir(setTextoTitlePresent,"¡Bienvenido!")
      setTimeout(() => escribir(setTextoParrafoPresent,"¡Hola! soy Daniel , desarrollador web actualmente front-end en aprendizaje de back-end"), 1800)
    }
  }, [showContent]);


  // estos son las imagenes del slider.
  const imagenes = [
    {
      imagen: "https://th.bing.com/th/id/OIP.QauTE01jxxSjf1xabFYPqgAAAA?pid=ImgDet&w=182&h=182&c=7",
      nombre: "javaScript",
      id: 1
    },
    {
      imagen: "https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
      nombre: "react",
      id: 2
    },
    {
      imagen: "https://th.bing.com/th/id/R.7494e83354e2662240d06630cc31f08d?rik=9tIRLZpYS9oTfQ&pid=ImgRaw&r=0",
      nombre: "python",
      id: 3
    },
    {
      imagen: "https://th.bing.com/th/id/OIP.rf2cCLNd0hv9z-J31V39EAHaER?w=500&h=288&rs=1&pid=ImgDetMain",
      nombre: "git",
      id: 4
    }
  ]
  const listRef = useRef();  // ul contenedor de imagenes.
  const btn1 = useRef();  // boton 1 para scroollear.
  const btn2 = useRef();  // boton 2 para scroollear.
  const [currentIndex, setCurrentIndex] = useState(0); // imagen que se mostrar.

  useEffect(()=>{
    const listNode = listRef.current;
    const imgs = listNode.querySelectorAll("li > img")[currentIndex]
    if (imgs) {
      imgs.scrollIntoView({
        behavior: "smooth"
      });
    }
  },[currentIndex])

  const scrollSlider = move =>{
    if (move == "prev") {
      setCurrentIndex(current=>{
        const primero = currentIndex === 0;
        return primero ? 0 : current - 1
      });
    } else{
      const final = currentIndex === imagenes.length - 1;
      if (!final) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  }

  return (
    <>
      <MensajeModal texto={`ㅤㅤㅤㅤㅤㅤㅤ`}/>
      <main>
          

        {/* presentacion principal de la web */}
        {
          showContent && <div  className="presentacionHome">
            <h1>{textoPresentacion} {palito ? <Parpadeo />:""}</h1>

            <div className='presentacionHomeTecnologias'>


              <img className={`${jsImgShow ? "presentacionHomeImgs":""}`} src="https://th.bing.com/th/id/OIP.QauTE01jxxSjf1xabFYPqgAAAA?pid=ImgDet&w=182&h=182&c=7" alt="javaScript" />
              
              <img className={`${reactImgShow ? "presentacionHomeImgs":""}`} src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7" alt="react" />
              
              <img className={`${pythonImgShow ? "presentacionHomeImgs":""}`} src="https://th.bing.com/th/id/R.7494e83354e2662240d06630cc31f08d?rik=9tIRLZpYS9oTfQ&pid=ImgRaw&r=0" alt="python" />
              
              <img className={`${gitImgShow ? "presentacionHomeImgs":""}`} src="https://th.bing.com/th/id/OIP.rf2cCLNd0hv9z-J31V39EAHaER?w=500&h=288&rs=1&pid=ImgDetMain" alt="git" />
              
            </div>
            <button onClick={()=>{
              setShowContent(false)
              localStorage.setItem("ShowContent","false")
            }} className={`presentacionHomeComenzar ${showBoton ? "presentacionHomeComenzarShow":""}`}>Comenzar</button>
          </div>
        }

        {/* boton del menu de home */}
          <button onClick={()=>setMenuHome(!menuHome)} className='HomePorfolioBtnMenu'>
            {
              menuHome ? <p>X</p>:<FontAwesomeIcon icon={faBars}/>
            }
          </button>


        {/* contenedor del tutorial */}
          <div className={`HomeMenu ${menuHome ? "":"HomeMenuHide"}`}>
            <button>Tutorial</button>
          </div>






        {/* pagina de porfolio */}
        <div className='HomePorfolio'>
          
          {/* primera parte */}
          <div className='HomePorfolioPresent'>
            <div className='HomePorfolioPresentTexto'>
              <h2>{textoTitlePresent}{palito ? <Parpadeo />:""}</h2>
              <p>{textoParrafoPresent}<Parpadeo /></p>
            </div>
            <div className='HomePorfolioPresentImg'>
              <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/382237162_2032148413817938_5162720135912290024_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHwvYvzb_lsWlZ1Yhh8Xv9cOGC4uQrjobU4YLi5CuOhtUjfqsq9PQUYXoM79I-nVZQHI_obI8j_nxJB4RQnAASv&_nc_ohc=Ol9MbRYvjaUAX9EHhRK&_nc_ht=scontent-lim1-1.xx&oh=00_AfAR-Eso2pVkGEwN1uSRIlQ_SwSZBbf2VXI5PUGiwgDB6A&oe=655E0686" alt="perfil" />
            </div>
          </div>


          {/* segunda parte tecnologias */}
          <div className='HomeTecnologias'>
            <div className='SliderHomeContent'>
              <button ref={btn1} onClick={()=>scrollSlider("prev")} className='leftArrow'>{"<<"}</button>
              <button ref={btn2} onClick={()=>scrollSlider("next")} className='rigthArrow'>{">>"}</button>
              <div className='SliderHomeContentImgs'>
                <ul ref={listRef}>
                  {
                    imagenes.map(i=>(
                      <li key={i.id}>
                        <img src={i.imagen} alt={i.nombre} />
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          

        </div>

      </main>
    </>
  );
}

export default Home;