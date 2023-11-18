import React from 'react';
import "./Home.css"

// componentes
import Footer from '../../componentes/menus/Footer';
import { Link, json } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useRef } from 'react';
import MensajeModal from '../../componentes/MensajeModal/mensajeModal';




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
  const [texto, setTexto] = useState(""); // Esta variable es el texto para saludar al usuario
  const [palito, setPalito] = useState(true);  // Esta variable es el palito de la maquina de escribir.
  // mostrar imagenes  
    const [jsImgShow, setJsImgShow] = useState(false);
    const [reactImgShow, setReactImgShow] = useState(false);
    const [pythonImgShow, setPythonImgShow] = useState(false);
    const [gitImgShow, setGitImgShow] = useState(false);
    const [showBoton, setShowBoton] = useState(false);

  // mostrar paginas
    const [showContent, setShowContent] = useState(true); // contenedor de presentacion
    const contentPorfolio = useRef(null);  // poner una capa abajo a la pagina principal.
    const [btnIniciar, setbtnIniciar] = useState(true);

  // Esto es para hacer el efecto maquina de escribir en el h1 de presentacion
  useEffect(() => {
    const escribir = (str) => {
      let i = 0;
      let newString = "";
      let arr = str.split("");
      const show = setInterval(() => {
        newString += arr[i];
        setTexto(newString);
        i++;
        setPalito(true);
        if (i === str.length) {
          clearInterval(show);
          setPalito(false);
        }
      }, 180);
    };


    escribir("¡Hello world! I'm a dev.");
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
    }
  }, [showContent]);



  const mostrarMenu=()=>{
    contentPorfolio.current.style.zIndex = "0"
    setbtnIniciar(false);
  }

  
  
  return (
    <>
      <MensajeModal texto={`ㅤㅤㅤㅤㅤㅤㅤ`}/>
      <main>
        {/* presentacion principal de la web */}
        {
          showContent && <div  className="presentacionHome">
            <h1>{texto} {palito ? "|":""}</h1>

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
        <div ref={contentPorfolio} className='HomePorfolio'>
          
          {/* primera parte */}
          <div className='HomePorfolioPresent'>
            <div className='HomePorfolioPresentTexto'>
              <h2>Bienvenido</h2>
              <p>¡Hola! soy Daniel , desarrollador web actualmente front-end en aprendizaje de back-end</p>
            </div>
            <div className='HomePorfolioPresentImg'>
              <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/382237162_2032148413817938_5162720135912290024_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHwvYvzb_lsWlZ1Yhh8Xv9cOGC4uQrjobU4YLi5CuOhtUjfqsq9PQUYXoM79I-nVZQHI_obI8j_nxJB4RQnAASv&_nc_ohc=Ol9MbRYvjaUAX9EHhRK&_nc_ht=scontent-lim1-1.xx&oh=00_AfAR-Eso2pVkGEwN1uSRIlQ_SwSZBbf2VXI5PUGiwgDB6A&oe=655E0686" alt="perfil" />
            </div>
          </div>
          
          <div className='HomePorfolioTecnologias'>
            <h2>Tecnologias</h2>
          </div>
          
          {
            btnIniciar && <button onClick={mostrarMenu} className='HomePorfolioBtnIniciar'>iniciar</button>

          }
        </div>

      </main>
    </>
  );
}

export default Home;