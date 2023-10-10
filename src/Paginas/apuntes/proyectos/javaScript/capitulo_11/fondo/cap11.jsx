import "./cap11.css";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../../componentes/volver/volver";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Html from "../../../../../../componentes/lenguajes/Html";
import Css from "../../../../../../componentes/lenguajes/Css";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";

import React, { useState, useEffect,useRef, useDebugValue } from 'react';



// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Cap11ProyV4(){

  const [imagenes, setImagenes] = useState([
    "https://th.bing.com/th/id/OIP.Xubl2lrSQvxlmn4j9T3E0wHaEo?w=245&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.3jSpZhDqTtXt95jB6VcmAwHaEo?w=276&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.BrPB-ynBFM0O61CyzLWYuQHaEK?w=273&h=180&c=7&r=0&o=5&pid=1.7"
  ]); // esto son las primeras imagenes
  const contenedor = useRef(null); // contenedor principal
  const mostrar = useRef(null); // esto es el minicontenedor para mostrar.
  const [showOptions, setShowOptions] = useState(false); // esto es para mostrar los botones para seleccionar imagenes de url o local.
  const [showAlbun, setShowAlbun] = useState(false); // esto es para mostrar las imagenes guardadas.
  const [showInput, setShowInput] = useState(false); // esto es para mostrar el input para poner la url.
  const [msgUrl, setMsgUrl] = useState("url"); // esto es para cambiar el mensaje del boton para abrir y cerrar el input.
  const [urlInput, setUrlInput] = useState(""); // esto es para obtener el input osea la url.
  const [showXInput, setShowXInput] = useState(false); // esta variable es para limpiar el input y mostrar.
  const [showUrlMsg, setShowUrlMsg] = useState(false); // esto es el contenedor para mostrar el mensje segun lo que pase con la usl.
  const [ulrMsgInput, setUlrMsgInput] = useState(""); // esto es el mensaje del error o aseptacion para agregar imagenes.
  const [showDelete, setShowDelete] = useState(false); // esto es para mostrar el boton de eliminar alguna imagen agregada.
  const [showDelete2, setShowDelete2] = useState(false); // esto es para mostrar el boton de eliminiar pero la segunda parte xd.
  // estas son las posisiones de las imagenes.
    const [posisionUrl, setPosisionUrl] = useState(0);
    const [posisionLocal, setPosisionLocal] = useState(0);

  const [eventoEjecutado, setEventoEjecutado] = useState(false); // poner fondo

  // base de datos
  const [datos, setDatos] = useState(JSON.parse(localStorage.getItem("baseCap11")) || {
    imagen: "",
    imgUrlBase: [],
    imgLocalBase: []
  });

  
  // esta funcion obtiene la imagen para poner los fondos.
  const obtenerImg=(index)=>{
    let base = {...datos};
    base.imagen = index;
    setDatos(base);
  }
  // esta funcion recibe las imagenes y pone los fondos
  const recibirImg=()=>{
    contenedor.current.style.backgroundImage = `url("${datos.imagen}")`;
    mostrar.current.style.backgroundImage = `url("${datos.imagen}")`;
  }
  // esto es para manejar los cambios del input de la url
  const hundleChange=(e)=>{
    setUrlInput(e.target.value);
    if(e.target.value != ""){
      setShowXInput(true);
    } else{setShowXInput(false)}
  }
  // esto es para manejar el texto del boton de url.
  const imgUrl=()=>{
    if(!showInput){
      setMsgUrl("X");
    } else {
      setMsgUrl("url")
    }
    setShowInput(!showInput);
  }
  // esto agregara las url que el usuario dijite en el inpput.
  const agregarUrl = () => {
    if (urlInput.trim() !== "") {
      const img = new Image();
      img.src = urlInput;
      img.onload = () => {
        setShowUrlMsg(true);
        setTimeout(() => setShowUrlMsg(false), 3000);
        setUlrMsgInput("Imagen agregada en albun");
        let base = { ...datos };
        base.imgUrlBase = base.imgUrlBase || [];
        base.imgUrlBase.push(urlInput);
        setDatos(base);
      };
      img.onerror = () => {
        setShowUrlMsg(true);
        setTimeout(() => setShowUrlMsg(false), 3000);
        setUlrMsgInput("Imagen no valida");
      };
    }
  };
  // esta funcion es para obtener las imagenes agregadas por url
  const agregarImgUrl=(valor,index)=>{
    setShowDelete(true);
    let base = {...datos};
    base.imagen = valor;
    setDatos(base);
    setPosisionUrl(index)
  }
  const agregarImgLocal=(valor,index)=>{
    setShowDelete2(true);
    let base = {...datos};
    base.imagen = valor;
    setDatos(base);
    setPosisionLocal(index)
  }
  // esta funcion es para agregar imagenes locales.
  const agregarImagenLocal=(e)=>{
    const archivos = e.target.files;
    if (archivos && archivos.length > 0) {
      const archivo = archivos[0];
      const reader = new FileReader();

      setShowUrlMsg(true);
      setUlrMsgInput("Imagen agregada al albun")
      setTimeout(() => setShowUrlMsg(false),3000);
      reader.onload = (e) => {
        let base = { ...datos };
        base.imgLocalBase = base.imgLocalBase || [];
        base.imgLocalBase.push(e.target.result); // aquí el archivo
        setDatos(base);
      };
  
      reader.readAsDataURL(archivo);
    }
  }

  // esto es para eliminar las imagenes arrastrando
  const eliminar=(valorImg,posisiones)=>{
    let base = {...datos};
    base[valorImg].splice(posisiones,1);
    setDatos(base);
  }



  


  useEffect(()=>{
    if (!eventoEjecutado) {
      contenedor.current.style.backgroundImage = `url("${datos.imagen}")`;
      mostrar.current.style.backgroundImage = `url("${datos.imagen}")`;
      setEventoEjecutado(true);
    }
    localStorage.setItem("baseCap11",JSON.stringify(datos))
  })


  return (
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 11

Hacer un editor de fondos de pantalla , el usuario debe arrastrar para establecer un fondo o para eliminar una imagen , las imagenes que el usuario agregue se deben de guardar.`}/>
      <CodigoFuenteSinInt 
        codigo={<Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="fondos.css">
    <script src="https://kit.fontawesome.com/7e204a84d0.js" crossorigin="anonymous"></script>
  </head>
  <body>

    <div class="contenedor">
      <div class="contenedor__imagenes">
        <img 
          src="https://th.bing.com/th/id/OIP.Eu8wXUJxcX0tCTehGwdPugHaE5?w=248&h=180&c=7&r=0&o=5&pid=1.7"
          class="imagen" 
        >
        <img 
          src="https://th.bing.com/th/id/OIP.0nr8ylTaqzgyocN1_-JQFgHaEo?w=297&h=185&c=7&r=0&o=5&pid=1.7"
          class="imagen" 
        >
        <img 
          src="https://th.bing.com/th/id/OIP.Lx8iYS3_M2saVfP8PHuPNgHaEo?w=311&h=194&c=7&r=0&o=5&pid=1.7"
          class="imagen" 
        >
      </div>
      <div class="cambiar"></div>
    </div>

    <script src="fondos.js"></script>
  </body>
</html>`}/>}
        codigo2={<Css codigo={`*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.contenedor{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://th.bing.com/th/id/OIP.Eu8wXUJxcX0tCTehGwdPugHaE5?w=248&h=180&c=7&r=0&o=5&pid=1.7");
    background-size: cover;
    gap: 35px;
}

.contenedor__imagenes{
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8px;
    background-color: #00000055;
}

.cambiar{
    width: 250px;
    height: 250px;
    background-image: url("https://th.bing.com/th/id/OIP.Eu8wXUJxcX0tCTehGwdPugHaE5?w=248&h=180&c=7&r=0&o=5&pid=1.7");
    background-size: cover;
    background-position: center;
}`}/>}
        codigo3={<JavaScropt codigo={`const contenedor = document.querySelector(".contenedor");
const imagenes = document.querySelectorAll(".imagen");
const cambiar = document.querySelector(".cambiar");
let link = "";

imagenes.forEach(i=>{
  i.addEventListener("dragstart",()=>{
    link = i.src;
  });
});

cambiar.addEventListener("dragenter",()=>{
  cambiar.style.backgroundImage = \`url("${"${link}"}")\`;
  contenedor.style.backgroundImage = \`url("${"${link}"}")\`
  console.log("pepa")
});`}/>}
      />
      <Volver link={"../"}/>
      
      <div className="Page">
        
        <div ref={contenedor} className="Cap11V4ProyJsContent">

          {/* contenedor de las imagenes */}
          <div className="Cap11V4ProyJsContentImgs">
            {
              imagenes.map((i)=>(<img
                src={i}
                onDragStart={()=>obtenerImg(i)}
              />))
            }
            <button 
              className="Cap11V4ProyJsContentBtnShow"
              onClick={()=>setShowOptions(true)}
            >
              +
              <div 
                className={`Cap11V4ProyJsContentBtnShowContent ${showOptions ?
                  "":
                  "Cap11V4ProyJsContentBtnShowContentHide"
                }`}
              >
                <button onClick={imgUrl}>{msgUrl}</button>
                <input 
                  type="file" 
                  id="imagenCap11V4Pry"
                  accept="image/*"
                  onChange={(e)=>agregarImagenLocal(e)}
                />
                <label 
                  htmlFor="imagenCap11V4Pry"
                >local</label>
                <button 
                  className="Cap11V4ProyJsContentBtnShowContentBtnX"
                  onClick={(e)=>{
                    e.stopPropagation();
                    setShowOptions(false)
                  }}
                >X</button>
              </div>
            </button>
          </div>

          {/* contenedor para poner la imagen */}
          <div
            className="Cap11V4ProyJsContentDrag"
            onDragEnter={recibirImg}
          >
            <div ref={mostrar}></div>
          </div>
          

          {/* mostrar las imagenes */}
          <button 
            className="Cap11V4ProyJsContentBtnImg"
            onClick={()=>setShowAlbun(true)}
          >
            <FontAwesomeIcon icon={faImages} />
          </button>


          {/* contenedor del album de imagenes */}
          <div className={`Cap11V4ProyJsContentAlbun ${showAlbun ? 
            "":"Cap11V4ProyJsContentAlbunHide"
          }`}>
            <button
              className="Cap11V4ProyJsContentAlbunBtnClose"
              onClick={()=>setShowAlbun(false)}
            >X</button>
            <h4>imagenes con url</h4>
            {
              datos.imgUrlBase.length === 0 ? <p>No hay imagenes agregadas con url.</p>:<div className="Cap11V4ProyJsContentAlbunImgs">
                {
                  datos.imgUrlBase.map((i,index)=>(<img 
                    src={i}
                    onDragStart={()=>agregarImgUrl(i,index)}
                    onDragEnd={()=>{
                      setShowDelete(false)
                    }}
                  />))
                }
              </div>
            }
            <h4>imagenes locales</h4>
            {
              datos.imgLocalBase.length === 0 ? <p>No hay imagenes locales agregadas.</p>:<div className="Cap11V4ProyJsContentAlbunImgs">
                {
                  datos.imgLocalBase.map((i,index)=>(<img 
                    src={i}
                    onDragStart={()=>agregarImgLocal(i,index)}
                    onDragEnd={()=>{
                      setShowDelete2(false);
                    }}
                  />))
                }
              </div>
            }
          </div>

          {/* contenedor del input url */}
          {
            showInput && <div className="Cap11V4ProyJsContentInput">
              <input 
                type="text"
                placeholder="url"
                value={urlInput}
                onChange={(e)=>hundleChange(e)}
              />
              {
                showXInput && <button 
                  className="Cap11V4ProyJsContentInputBtnClose"
                  onClick={()=>{
                    setUrlInput("");
                    setShowXInput(false);
                  }}
                >X</button>
              }
              <button onClick={agregarUrl}>+</button>
            </div>
          }
          <div className={`Cap11V4ProyJsContentUrlMsg ${showUrlMsg ? 
            "":"Cap11V4ProyJsContentUrlMsgHide"}`
          }>
            <p>{ulrMsgInput}</p>
          </div>

          <button 
            onMouseEnter={()=>eliminar("imgUrlBase",posisionUrl)}
            className={`Cap11V4ProyJsContentDelete ${showDelete ? 
            "Cap11V4ProyJsContentDeleteShow":""
          }`}>
            <FontAwesomeIcon icon={faTrashAlt}/>
          </button>
          <button 
            onMouseEnter={()=>eliminar("imgLocalBase",posisionLocal)}
            className={`Cap11V4ProyJsContentDelete ${showDelete2 ? 
            "Cap11V4ProyJsContentDeleteShow":""
          }`}>
            <FontAwesomeIcon icon={faTrashAlt}/>
          </button>

        </div>

      </div>

    </>
  );
}

export default Cap11ProyV4;