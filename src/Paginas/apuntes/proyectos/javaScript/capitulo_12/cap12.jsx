import "./cap12.css";

// componentes principales
import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../componentes/showOptions/show";


// componentes de react
import React, { useState , useRef , useEffect } from 'react';

// base de datos
import base from "./cap12.json";
const baseUrl = new URL(import.meta.url).pathname;
const rutaReal = baseUrl.replace(/\/[^/]+$/, '');

// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faHeartMusicCameraBolt } from "@fortawesome/free-solid-svg-icons";
import {
  faPlay,
  faPause,
  faVolumeUp,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';



import musica1 from "./musicas/come a little closer.mp3"


function OptionsMusic({
  cambiarEstado,estadoMostrar,imagen,titulo,artista,
  funcion1,icono1
}) {
  return (
    <div
      onClick={()=>cambiarEstado("hide")}
      className={`contentCap12JsV1OpcionMusic ${estadoMostrar ? "":"contentCap12JsV1OpcionMusicHide"}`}
    >
      <div 
        onClick={(e)=>e.stopPropagation()}
        className={`contentCap12JsV1OpcionMusicContent ${estadoMostrar ? "":"contentCap12JsV1OpcionMusicContentHide"}`}>
        
        <div className="contentCap12JsV1OpcionMusicContentInfo">
          <div className="contentCap12JsV1OpcionMusicContentInfoImg">
            <img src={imagen} alt={titulo} />
          </div>
          <div>
            <p>{titulo}</p>
            <p>{artista}</p>
          </div>
        </div>

        <button
          onClick={funcion1}
        >
          <span>
            <FontAwesomeIcon icon={icono1}/>
            <b>quitar de favoritos</b>
          </span>
        </button>
        <button>
          <span>
            <p>+</p>
            <b>agregar a playlist</b>
          </span>
        </button>
      </div>
    </div>
  );
}


// este componente es el mensaje de las accionexsz que haga el usuario
function MensajesAccion({estado,mensaje}) {
  return (  
    <div className={`contentCap12JsV1Mensajes ${estado ? "":"contentCap12JsV1MensajesHide"}`}>
      <p>{mensaje}</p>
    </div>
  );
}


function Cap12ProyV1() {

  // menu de la aplicacion.
  const [showOptionsMenu, setShowOptionsMenu] = useState(false); // mostrar el menu 
  const manejarMenu=()=>{
    setShowOptionsMenu(!showOptionsMenu)
  }

  // buscar musica
  const [inputBuscar, setInputBuscar] = useState(""); // esto es el inpit para buscar la musica.
  const [sugerenciasTitle, setSugerenciasTitle] = useState([]); // aqui las sugerencias osea los titulos.
  const [showInputSearch, setShowInputSearch] = useState(false);
  const [showResultSearch, setShowResultSearch] = useState(false);
  
  const sugerirMusica = (e) => {
    setInputBuscar(e.target.value);
    setShowDeleteInput(true)
    const resultadosFiltrados = base.filter((dato) =>
      dato.titulo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSugerenciasTitle(resultadosFiltrados);
    setSearchResult(resultadosFiltrados)
    if (e.target.value == "") {
      setSugerenciasTitle([])
      setShowDeleteInput(false);
      setSearchResult([])
      setShowResultSearch(false)
    }
  };
  // limpiar input de busqueda.
  const [showDeleteInput, setShowDeleteInput] = useState(false);
  const limpiarInput=()=>{
    setInputBuscar("");
    setSugerenciasTitle([]);
    setShowDeleteInput(false);
    setShowResultSearch(false)
  }
  // buscar la musica
  const [searchResult, setSearchResult] = useState([]);
  const buscarMusica=(objeto)=>{
    const newArr = [];
    newArr.push(objeto);
    setSearchResult(newArr);
    setShowResultSearch(true);
    setSugerenciasTitle([])
    setInputBuscar(objeto.titulo)
  }
  // mostrar iconos en la imagen  
  const showIconImgs=(accion,index)=>{
    let mostrarIcono = musicas.current.querySelectorAll(".contentCap12JsV1MusicasContentInfoImgsIConoImg")
    if (accion == "mostrar") {
      mostrarIcono[index].classList.add("contentCap12JsV1MusicasContentInfoImgsIConoImgShow");
    } else {
      mostrarIcono[index].classList.remove("contentCap12JsV1MusicasContentInfoImgsIConoImgShow");
    }
  }
  






  // aplicacion de reproductor de musica
  const audioMusic = useRef(null); // manejar el audio



  // manejo de lazyloading
  const musicas = useRef(null);
  const [visibleCajas, setVisibleCajas] = useState([]);

  useEffect(() => {
    const cajas = musicas.current.querySelectorAll('.contentCap12JsV1MusicasContent');
    
    const observar = (entradas, observer) => {


      entradas.forEach((i) => {
        if (i.isIntersecting) {
          const cajaIndex = parseInt(i.target.dataset.index, 10);
          setVisibleCajas((prevVisibleCajas) => [...prevVisibleCajas, cajaIndex]);
          observer.unobserve(i.target);
        }
      });
    };

    const observer = new IntersectionObserver(observar);
    cajas.forEach((caja) => observer.observe(caja));

    // Limpieza del observer si es necesario
    return () => {
      cajas.forEach((caja) => observer.unobserve(caja));
    };
  }, []);

  
  // mostrar reproductor de musica.
  const [showMusic, setShowMusic] = useState(false); // esto es para mostrar la musica.
  const inputTime = useRef(null) // input de la duracion de la musica.
  const [secondControls, setSecondControls] = useState(false); // mostrar los controles secundatios.
  const [imgReproductor, setImgReproductor] = useState("");
  const [titleReproductor, setTitleReproductor] = useState("");
  const [artistReproductor, setArtistReproductor] = useState("");
  const [musicReproductor, setMusicReproductor] = useState("");
  const [music, setMusic] = useState("");
  const showReproductor=(musica,imagen,titulo,artista,id)=>{
    setShowMusic(true);
    setEsAleatorio(false);
    setMusic(musica)
    setMusicReproductor(rutaReal + musica)
    setImgReproductor(imagen);
    setTitleReproductor(titulo);
    setArtistReproductor(artista);
    setSecondControls(true);
    setPausePlay(false);
    setIdentificar(id);
    setTimeout(() => {
      audioMusic.current.play()
      rotarIcono.current.style.transform = "rotate(0deg)";
    }, 10);
  }


  // ocultar reproductor de musica
  const hideReproductor=()=>{
    setShowMusic(!showMusic);
    if (showMusic) {
      rotarIcono.current.style.transform = "rotate(180deg)";
    } else {
      rotarIcono.current.style.transform = "rotate(0deg)";
    }
  }




  // esta funcion es para expandir o ocultar el input de volumen
  const volumen = useRef(null); // input del volumen
  const rotarIcono = useRef(null); // icono para mostrar la musica.
  const showVolumen=(variable,accion)=>{
    if (accion == "expandir") {
      variable.current.style.width = "85px";
      variable.current.style.visibility = "visible";
    }else {
      variable.current.style.width = "0";
      variable.current.style.visibility = "hidden";
    }
  }


  // reproducir y pausar audio musica
  const [pausePlay, setPausePlay] = useState(false);
  const pausarReproducir=(accion)=>{
    if (accion == "reproducir") {
      setPausePlay(false);
      audioMusic.current.play()
    } else {
      setPausePlay(true);
      audioMusic.current.pause();
    }
  }
  // pausar y poner play cuando se de click en un mismo elemento
  const togglePausePlay=()=>{
    
    if (pausePlay) {
      pausarReproducir("reproducir")
    } else {
      pausarReproducir("pausar")
    }
  }

  // manejar volumen
  const [volume, setVolume] = useState(1); // volumen maximo
  const manejarVol=(e)=>{
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioMusic.current.volume = newVolume;
  }


  // manejar duracion
  function formatarTiempo(tiempo) {
    const minutos = Math.floor(tiempo / 60);
    const segundos = Math.floor(tiempo % 60);
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }

  const [tiempo, setTiempo] = useState(0);
  const [duracion, setDuracion] = useState(0);
  const actualizaTiempo=()=>{ 
    setTiempo(audioMusic.current.currentTime);
  }
  const manejarTiempo=(e)=>{
    const newTime = parseFloat(e.target.value);
    audioMusic.current.currentTime = newTime;
    setTiempo(newTime);
    audioMusic.current.play();
    setPausePlay(false)
  }

  useEffect(()=>{
    let duracionRapida = audioMusic.current.duration
    setDuracion(duracionRapida);
    if (!duracionRapida) {
      setDuracion(0)
    }
    if (duracion == tiempo) {
      setPausePlay(true)
      cambiar("siguiente")
    }
  },[tiempo])

  
  // cambiar de musica a la siguiente.
  const [identificar, setIdentificar] = useState(0);
  const [contadorMusic, setContadorMusic] = useState(0);
  const cambiar=(accion)=>{
    if (accion == "siguiente") {
      
      if (EsAleatorio) {
        let newId = contadorMusic + 1;
        if (newId < base.length) {
          setContadorMusic(newId);
          setIdentificar(indicesSeleccionados[newId])
          setTimeout(() =>audioMusic.current.play(),10);
          setPausePlay(false) 
        }
      } else if (!EsAleatorio) {
        let newId = identificar + 1;
        if (newId < base.length){
          setIdentificar(newId)
          setTimeout(() =>audioMusic.current.play(),10);
          setPausePlay(false)
        }
      }
    } else {
      if (EsAleatorio) {
        let newId = contadorMusic - 1;
        if (newId >= 0) {
          setContadorMusic(newId);
          setIdentificar(indicesSeleccionados[newId]);
          setTimeout(() => audioMusic.current.play(),10);
          setPausePlay(false);
        }
      } else if (!EsAleatorio) {
        let newId = identificar - 1;
        if (identificar != 0) {
          setIdentificar(newId)
          setTimeout(() =>audioMusic.current.play(),10);
          setPausePlay(false)
        } 
      }
    }
  }
  //actualizar musicas
  useEffect(()=>{
    setImgReproductor(base[identificar].imagen);
    setTitleReproductor(base[identificar].titulo);
    setArtistReproductor(base[identificar].artista);
    setMusicReproductor(rutaReal + base[identificar].link);


  },[identificar])



  // opciones de las musicas
  const [showOptionsMusic, setShowOptionsMusic] = useState(false); // opciones de las musicas
  const optionsShowHide=(accion)=>{
    if (accion == "show") {
      setShowOptionsMusic(true)
    } else {
      setShowOptionsMusic(false)
    }
  }
  // cargar informacion de las musicas en las opciones
  const [titleOptions, setTitleOptions] = useState("");
  const [imgOptions, setImgOptions] = useState("");
  const [artistOptions, setArtistOptions] = useState("");
  const [posisionOptions, setPosisionOptions] = useState(0);
  const cargarInformacionMusic=(objeto)=>{
    setImgOptions(objeto.imagen);
    setTitleOptions(objeto.titulo);
    setArtistOptions(objeto.artista);
    setPosisionOptions(objeto.id);
  }


  // evitar numeros aleatorios iguales
  const [indicesSeleccionados, setIndicesSeleccionados] = useState([]);
  // reproducir musica de forma aleatoria.
  const [EsAleatorio, setEsAleatorio] = useState(false);;
  const [avisoAleatorio, setAvisoAleatorio] = useState(false);
  const reproduccionAleatoria =()=>{
    let indicesTemp = [];
    for (let i = 0; i < base.length; i++) {
      let indiceAleatorio;
      do {
        indiceAleatorio = Math.floor(Math.random() * base.length);
      } while (indicesTemp.includes(indiceAleatorio));
      indicesTemp.push(indiceAleatorio);
    }
    setIndicesSeleccionados(indicesTemp);
    setContadorMusic(0)
    setMusicReproductor(rutaReal + base[indicesTemp[0]].link)
    setSecondControls(true)
    setTimeout(() => {
      pausarReproducir("reproducir")
      setAvisoAleatorio(false)
      rotarIcono.current.style.transform = "rotate(180deg)";
    }, 10);
    setIdentificar(indicesTemp[0])
    setEsAleatorio(true);
    setAvisoAleatorio(true)
  }
  

  // esta funcion es para agregar a favoritos las musicas.
  const [musicasFavoritas, setMusicasFavoritas] = useState([]);
  const [showFavoritas, setShowFavoritas] = useState(false);;
  const [msgAgregadoFav, setMsgAgregadoFav] = useState(false);
  const [msgAccionFav, setMsgAccionFav] = useState("");
  const agregarFavoritos=()=>{
    if (musicasFavoritas.includes(base[posisionOptions])) {
      setMsgAgregadoFav(true)
      setMsgAccionFav("Esta musica ya fue agregada a favoritas.");
      setTimeout(() => setMsgAgregadoFav(false),3000);
    } else {
      setMusicasFavoritas(current=>[...current,base[posisionOptions]])
      setMsgAgregadoFav(true)
      setMsgAccionFav("Musica agregada a favoritos.")
      setTimeout(() => setMsgAgregadoFav(false),3000);
    }
  }


  // esta funcion ilumina en que seccion de la pagina esta el usuario.
  const inicio = useRef(null); // opciion de inicio
  const favoritos = useRef(null); // opcion de las musicas favoritas
  const posisionPagina=(accion)=>{
    if (accion == "inicio") {
      inicio.current.style.backgroundColor = "#363333"
      favoritos.current.style.backgroundColor = "transparent"
    } else if (accion == "favoritos") {
      favoritos.current.style.backgroundColor = "#363333"
      inicio.current.style.backgroundColor = "transparent"
    }
  }


  // esta funcion es para mostrar las opciones de las musicas que estan en vaoritos.
  const [showHidOptionsState, setShowHidOptionsState] = useState(false);
  const showHideOptionsFav=(accion)=>{
    accion == "show" ? setShowHidOptionsState(true):setShowHidOptionsState(false)
  }
  

    return (  
      <>
        <ShowOptions 
          link={"../"}
        />
        {/* <MensajeModal /> */}

        <div className="Page cap12JsV1">

          <div className="contentCap12JsV1">

            {/* header de la web osea el menu */}
            <div className="contentCap12JsV1Menu">

              {/* menu para mostrar las opciones en mobile */}
              <button 
                className="contentCap12JsV1MenuBtnMenu"
                onClick={manejarMenu}
              >
                {
                  showOptionsMenu ? <p>X</p>:<FontAwesomeIcon icon={faBars}/>
                }
              </button>


              {/* opciones en la version mobile */}
              <div 
                className={`contentCap12JsV1MenuOptions ${showOptionsMenu ? "":"contentCap12JsV1MenuOptionsHide"}`}
              >
                <button onClick={()=>{
                  setShowResultSearch(false);
                  setShowMusic(false)
                  setShowOptionsMenu(false)
                  setShowFavoritas(false)
                  posisionPagina("inicio")
                }}>
                  <span 
                    ref={inicio}
                    style={{"backgroundColor":"#363333"}}
                  >
                    <FontAwesomeIcon icon={faHome}/>
                    <p>inicio</p>
                  </span>
                </button>
                <button
                  onClick={()=>{
                    setShowFavoritas(true)
                    setShowResultSearch(false);
                    setShowMusic(false)
                    setShowOptionsMenu(false)
                    posisionPagina("favoritos")
                  }}
                >
                  <span ref={favoritos}>
                    <FontAwesomeIcon icon={faHeart}/>
                    <p>favoritos</p>
                  </span>
                </button>
              </div>

              
              {/* buscador de musica */}
              <div className="contentCap12JsV1MenuBuscarContent">
                <button 
                  onClick={()=>{
                    setShowInputSearch(!showInputSearch)
                    setInputBuscar("");
                    setSugerenciasTitle([]);
                    setShowDeleteInput(false)
                  }}
                  className="contentCap12JsV1MenuBuscarIcon"  
                >
                  {
                    showInputSearch ? <b>X</b>:
                    <FontAwesomeIcon icon={faSearch}/>
                  }
                </button>

                <div className={`contentCap12JsV1MenuBuscar ${showInputSearch ? "":"contentCap12JsV1MenuBuscarHide"}`}>
                  {/* input para buscar musica */}
                  <input 
                    type="text" 
                    placeholder={`Buscar musica`}
                    onChange={sugerirMusica}
                    value={inputBuscar}
                    onKeyDown={(e)=>{
                      if (e.key == "Enter") {
                        setShowResultSearch(true)
                        setSugerenciasTitle([])
                        setShowMusic(false)
                      }
                    }}
                  />
                  {/* boton para limpiar el inpuit */}
                  {
                    showDeleteInput && <button 
                      className="contentCap12JsV1MenuBuscarBtnDelete"
                      onClick={limpiarInput}
                    >x</button>
                  }
                  {/* sugerencias de busqueda */}
                  <div className="contentCap12JsV1MenuSugerencias">
                    {
                      sugerenciasTitle.map((i,index)=>(
                        <button key={index} onClick={()=>buscarMusica(i)}>{i.titulo}</button>
                      ))
                    }
                  </div>
                  
                </div>
              </div>


            </div>

            {/* contenedor de las musicas */}
            <div className="contentCap12JsV1Musicas" ref={musicas}>

              <div className="contentCap12JsV1MusicasBtnAleatori">
                <button 
                  className={`${avisoAleatorio ? "contentCap12JsV1MusicasBtnAleatoriAviso":""}`}
                  onClick={reproduccionAleatoria}
                >Reproduccion aleatoria</button>
              </div>
              {base.map((_, index) => (
                <div
                  key={index}
                  className={`contentCap12JsV1MusicasContent ${visibleCajas.includes(index) && 'contentCap12JsV1MusicasContentLoad'}`}
                  data-index={index}
                  onClick={()=>{
                    showReproductor(
                      base[index].link,
                      base[index].imagen,
                      base[index].titulo,
                      base[index].artista,
                      index
                    );
                  }}
                >
                  {visibleCajas.includes(index) && (
                    <>
                      <div 
                        className="contentCap12JsV1MusicasContentInfo"
                        onMouseMove={()=>showIconImgs("mostrar",index)}
                        onMouseOut={()=>showIconImgs("ocultar",index)}
                      >
             
                        <div className="contentCap12JsV1MusicasContentInfoImgs">
                          <div className={`contentCap12JsV1MusicasContentInfoImgsIConoImg`}>
                            <p><FontAwesomeIcon icon={faPlay}/></p>
                          </div>
                          <img src={base[index].imagen} alt={base[index].titulo} />
                        </div>
                        <div className="contentCap12JsV1MusicasContentDatos">
                          <h4>{base[index].titulo}</h4>
                          <p>{base[index].artista}</p>
                          
                        </div>
                      </div>

                      <FontAwesomeIcon 
                        onClick={(e)=>{
                          e.stopPropagation();
                          optionsShowHide("show");
                          cargarInformacionMusic(base[index]);
                        }}
                        className="contentCap12JsV1MusicasContentInfoIconOptio" icon={faEllipsisV}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* contenedor del reproductor de musica */}
            <div className={`contenedorPrimarioReproductor ${showMusic ? "":"contenedorPrimarioReproductorHide"}`}>
              <div className={`contentCap12JsV1Reproductor`}>
              <audio 
                src={musicReproductor}
                ref={audioMusic}
                onTimeUpdate={actualizaTiempo} 
              />

                <div
                  onClick={togglePausePlay}
                  className="contentCap12JsV1ReproductorImg">
                  <img src={imgReproductor} alt="" />
                </div>
                
                <div className="contentCap12JsV1ReproductorInfo">
                  <h4>{titleReproductor}</h4>
                  <h5>{artistReproductor}</h5>
                </div>
                  
                <div className="contentCap12JsV1ReproductorTimers">
                  <p>{formatarTiempo(tiempo)}</p>
                  <p>{formatarTiempo(duracion)}</p>
                </div>

                <div className="contentCap12JsV1ReproductorControls">
                  <input
                    ref={inputTime}
                    type="range"
                    className="contentCap12JsV1ReproductorTime"
                    min={0}
                    max={duracion}
                    value={tiempo}
                    onChange={manejarTiempo}
                  />
                  <div className="contentCap12JsV1ReproductorControlsButton">
                    <button onClick={()=>cambiar("atras")}><FontAwesomeIcon icon={faStepBackward} /></button>
                    <button>
                      {
                        pausePlay ? 
                        <FontAwesomeIcon onClick={()=>pausarReproducir("reproducir")} icon={faPlay} />:
                        <FontAwesomeIcon onClick={()=>pausarReproducir("pausar")} icon={faPause} />
                      }
                    </button>
                    <button onClick={()=>cambiar("siguiente")}><FontAwesomeIcon icon={faStepForward} /></button>
                  </div>
                </div>
              </div>


            </div>

            {/* controles de abajo como volumen e informacion */}
            {
              secondControls && <div 
                onMouseLeave={()=>showVolumen(volumen,"ocultar")}
                className="contentCap12JsV1ReproductorControls2"
              >
                <div className="contentCap12JsV1ReproductorControls2Info">
                  <div className="contentCap12JsV1ReproductorControls2InfoImg">
                    <img src={imgReproductor} alt={titleReproductor} />  
                  </div>
                  
                  <div>
                    <h4>{titleReproductor}</h4>
                    <h5>{artistReproductor}</h5>
                  </div>
                </div>

                {/* botone de volument */}
                <div className="contentCap12JsV1ReproductorControls2BtnVol">
                  <button 
                    onMouseOver={()=>showVolumen(volumen,"expandir")}
                  ><FontAwesomeIcon icon={faVolumeUp} /></button>
                  <input
                    ref={volumen}
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={manejarVol}
                    className="contentCap12JsV1ReproductorVol"
                  />
                </div>

                
                <button
                  onClick={hideReproductor}
                  className="contentCap12JsV1ReproductorControls2bTNhIDE"
                ><FontAwesomeIcon ref={rotarIcono} icon={faChevronDown}/></button>
              </div>
            }
            

            {/* resultados de la busqueda */}
            {
              showResultSearch && <div className="contentCap12JsV1ResultadosBusqueda">
                {
                  searchResult.length == 0 ? 
                  <h2>No hay resultados y si estas buscando reggeton no encontraras nada :v</h2>
                  :
                    searchResult.map((i)=>(
                      <div 
                        className="contentCap12JsV1ResultadosBusquedaContent"
                        onClick={()=>{
                          showReproductor(
                            i.link,
                            i.imagen,
                            i.titulo,
                            i.artista,
                            i.id
                          );
                        }}
                      >
                        <div className="contentCap12JsV1ResultadosBusquedaContentInfo">
                          <div className="contentCap12JsV1ResultadosBusquedaContentInfoImgs">
                            <img src={i.imagen} alt={i.titulo} />
                          </div>
                          <div>
                            <h4>{i.titulo}</h4>
                            <h5>{i.artista}</h5>
                          </div>
                        </div>
  
                        <button onClick={(e)=>{
                          e.stopPropagation();
                          optionsShowHide("show");
                          cargarInformacionMusic(i)
                        }}>
                        <FontAwesomeIcon icon={faEllipsisV}/></button>
                      </div>
                    ))
                  
                }
              </div>
            }

            {/* opciones de las musicas */}
            <OptionsMusic 
              cambiarEstado={optionsShowHide}
              estadoMostrar={showOptionsMusic}
              imagen={imgOptions}
              titulo={titleOptions}
              artista={artistOptions}
              funcion1={agregarFavoritos}
              icono1={faHeart}
            />
            
            <MensajesAccion 
              estado={msgAgregadoFav}
              mensaje={msgAccionFav}
            />
            


            {/* musicas favoritas del usuario */}
            {
              showFavoritas && <div className="contentCap12JsV1FavoritosContent">
                {
                  musicasFavoritas.length == 0 ?
                    <p className="contentCap12JsV1FavoritosContentError">No tienes musicas favoritas</p>
                  :
                    musicasFavoritas.map((i,index)=>(
                      <div 
                        className="contentCap12JsV1FavoritosContentMusic"
                        key={index}
                      >
                        <div className="contentCap12JsV1FavoritosContentMusicInfo">
                          <div className="contentCap12JsV1FavoritosContentMusicInfoImg">
                            <img src={i.imagen} alt={i.titulo} />
                          </div>
                          <div>
                            <p>{i.titulo}</p>
                            <p>{i.artista}</p>
                          </div>
                        </div>
                        <button
                          className="contentCap12JsV1FavoritosContentMusicBtn"
                          onClick={()=>{
                            optionsShowHide("show");
                            cargarInformacionMusic(i)
                          }}
                        >
                          <FontAwesomeIcon 
                            icon={faEllipsisV}
                            onClick={()=>showHideOptionsFav("show")}
                          />
                        </button>
                      </div>
                    ))
                }
              </div>
            }

            

          </div>





        </div>
      
      
      </>
    );
}

export default Cap12ProyV1;