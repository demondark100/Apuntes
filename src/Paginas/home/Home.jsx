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
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";




const Parpadeo=()=>{
  return (
    <b className='parpadeoHome'>_</b>
  )
}



function Home() {



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



  // Esto es para hacer el efecto maquina de escribir.

  const escribir = (variable,str,tiempo) => {
    variable("")
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
    }, tiempo);
  };

  // aqui mostramos el h1 y sus imagenes en la primera presentacion de la web.
  useEffect(() => {
    escribir(setTextoPresentacion,"¡Hello world! I'm a dev.",80);
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
      escribir(setTextoTitlePresent,"¡Bienvenido!",100)
      setTimeout(() => escribir(setTextoParrafoPresent,"¡Hola! soy Daniel , desarrollador web actualmente front-end en aprendizaje de back-end",50),2000);
      main.current.style.zIndex = 0

    }
  }, [showContent]);





  // parte 2 slider de presentacion.

  // estos son las imagenes del slider.

  const imagenes = [
    {
      imagen: "https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png?w=730",
      nombre: "javaScript",
      info: "Este lenguaje lo uso para darle dinamismo a los proyectos front-end.",
      id: 1
    },
    {
      imagen: "https://wallpaperbat.com/img/641219-react-js-wallpaper-top-free-react-js-background.jpg",
      nombre: "react",
      info: "Este es mi framework principal para trabajar con el front-end.",
      id: 2
    },
    {
      imagen: "https://wallpapercave.com/wp/wp8661113.jpg",
      nombre: "python",
      info: "Este lenguaje lo uso para el back-end y otras cosas.",
      id: 3
    },
    {
      imagen: "https://sun9-21.userapi.com/c850632/v850632215/18f42a/zb1OZezJYsk.jpg",
      nombre: "git",
      info: "Esto lo uso para el control de versiones de un proyecto para guardarlo despues en github.",
      id: 4
    }
  ]
  const listRef = useRef();  // ul contenedor de imagenes.
  const btn1 = useRef();  // boton 1 para scroollear.
  const btn2 = useRef();  // boton 2 para scroollear.
  const [currentIndex, setCurrentIndex] = useState(0); // imagen que se mostrar.

  // hacer animacion al slider
  useEffect(()=>{
    const listNode = listRef.current;
    const imgs = listNode.querySelectorAll("li > img")[currentIndex]
    if (imgs) {
      imgs.scrollIntoView({
        behavior: "smooth"
      });
    }


    

  },[currentIndex])



  // botones del scroll.
  const [indexNombre, setIndexNombre] = useState(0); // posision del nombre.
  const [nombres, setNombres] = useState(imagenes[0].nombre); // esto guarda el nombre del lenguaje
  const [informacion, setInformacion] = useState(imagenes[0].info);
  const scrollSlider = (move) =>{
    if (move == "prev") {
      setCurrentIndex(current=>{
        const primero = currentIndex === 0;
        return primero ? 0 : current - 1;
      });
      setIndexNombre(current=>{
        const primero = currentIndex === 0;
        return primero ? 0 : current - 1;
      });
    } else{
      const final = currentIndex === imagenes.length - 1;
      if (!final) {
        setCurrentIndex(currentIndex + 1);
        setIndexNombre(indexNombre + 1)
      }
    }
  } 
  // mostrar los datos al usuario.
  useEffect(()=>{
    escribir(setNombres,imagenes[indexNombre].nombre,80)
    escribir(setInformacion,imagenes[indexNombre].info,5)
  },[indexNombre])

  // poner el scroll hacia arriba.
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  const main = useRef(null);
  return (
    <>
      
      <MensajeModal texto={`ㅤㅤㅤㅤㅤㅤㅤ`}/>
      <main ref={main} className='mainHome'>
          

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

            <div className='HomeTecnologiasBtn'>
              <button ref={btn1} onClick={()=>scrollSlider("prev")}><FontAwesomeIcon icon={faChevronLeft} /></button>
              <button ref={btn2} onClick={()=>scrollSlider("next")}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>

            <div className='SliderHomeContentInfo'>
              <div className='SliderHomeContentInfoContent'>
                <h2>{nombres}</h2>
                <p>{informacion}</p>
              </div>
            </div>

              <div className='SliderHomeContentImgs'>
                <ul ref={listRef}>
                  {
                    imagenes.map((i)=>(
                      <li key={i.id}>
                        
                        <div className='sliderImgLiHome'></div>

                        <img src={i.imagen} alt={i.nombre} />
                      </li>
                    ))
                  }
                </ul>
              </div>

          </div>
          

        </div>

      </main>
    </>
  );
}

export default Home;