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
import { faArrowLeft, faAudioDescription, faEllipsisV, faEye, faHeartMusicCameraBolt, faList, faRandom, faTruckMonster } from "@fortawesome/free-solid-svg-icons";
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
import { faListAlt } from '@fortawesome/free-solid-svg-icons';


import musica1 from "./musicas/come a little closer.mp3"


function OptionsMusic({
  funcion1,estadoMostrar,imagen,titulo,artista,
  funcion2,icono1,mensaje1,funcion3
}) {
  return (
    <div
      onClick={funcion1}
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
          onClick={funcion2}
        >
          <span>
            <FontAwesomeIcon icon={icono1}/>
            <b>{mensaje1}</b>
          </span>
        </button>
        <button
          onClick={funcion3}
        >
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


  // funciones para buscar una musica.

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
      setShowMusic(false)
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
  const [esNormal, setEsNormal] = useState(false);
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
      if (esNormal) {
        let newId = identificar + 1;
        if (newId < base.length){
          setIdentificar(newId)
          setTimeout(() =>audioMusic.current.play(),10);
          setPausePlay(false)
        }
      } else if (EsAleatorio) {
        let newId = contadorMusic + 1;
        if (newId < base.length) {
          setContadorMusic(newId);
          setIdentificar(indicesSeleccionados[newId])
          setTimeout(() =>audioMusic.current.play(),10);
          setPausePlay(false) 
        }
      } else if (esFavoritos){
        
      } else if (esPlayList){
        
      }
    } else {
      if (esNormal) {
        let newId = identificar - 1;
        if (identificar != 0) {
          setIdentificar(newId)
          setTimeout(() =>audioMusic.current.play(),10);
          setPausePlay(false)
        } 
      } else if (EsAleatorio) {
        let newId = contadorMusic - 1;
        if (newId >= 0) {
          setContadorMusic(newId);
          setIdentificar(indicesSeleccionados[newId]);
          setTimeout(() => audioMusic.current.play(),10);
          setPausePlay(false);
        }
      } else if (esFavoritos){

      } else if (esPlayList){
        
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
    setAvisoAleatorio(true);

    setEsAleatorio(true);
    setEsNormal(false);
    setEsPlayList(false);
    setEsFavoritos(false);
  }
  

  

  // iluminar en que opcion de la pagina estamos.
  
  // esta funcion ilumina en que seccion de la pagina esta el usuario.
  const inicio = useRef(null); // opciion de inicio
  const favoritos = useRef(null); // opcion de las musicas favoritas
  const playList = useRef(null); // playList del usuario.
  const posisionPagina=(accion)=>{
    if (accion == "inicio") {
      inicio.current.style.backgroundColor = "#363333"
      favoritos.current.style.backgroundColor = "transparent"
      playList.current.style.backgroundColor = "transparent"
    } else if (accion == "favoritos") {
      favoritos.current.style.backgroundColor = "#363333"
      inicio.current.style.backgroundColor = "transparent"
      playList.current.style.backgroundColor = "transparent"
    } else if (accion == "playList"){
      playList.current.style.backgroundColor = "#363333"
      favoritos.current.style.backgroundColor = "transparent"
      inicio.current.style.backgroundColor = "transparent"
    }
  }




  // funciones de musicas favoritas.

  const [esFavoritos, setEsFavoritos] = useState(false); // musicas de favoritos .
  // esta funcion es para agregar a favoritos las musicas.
  const [musicasFavoritas, setMusicasFavoritas] = useState([]);
  const [showFavoritas, setShowFavoritas] = useState(false);;
  const [msgAgregadoFav, setMsgAgregadoFav] = useState(false);
  const [msgAccionFav, setMsgAccionFav] = useState("");
  const agregarFavoritos=()=>{
    if (JSON.stringify(musicasFavoritas).includes(JSON.stringify(base[posisionOptions]))) {
      setMsgAgregadoFav(true)
      setMsgAccionFav("Esta musica ya fue agregada a favoritas.");
      setTimeout(() => setMsgAgregadoFav(false),3000);
    } else {
      setMusicasFavoritas(current=>[...current,base[posisionOptions]])
      setMsgAgregadoFav(true)
      setMsgAccionFav("Musica agregada a favoritos.")
      setTimeout(() => setMsgAgregadoFav(false),3000);
      agregarObjetos("favoritosMusic",base[posisionOptions])
      leerObjeto("favoritosMusic",setMusicasFavoritas,setIdBaseFav);
    }
  }

  // esta funcion se encargara de quitar una musica de favoritos.
  const [showHidOptionsState, setShowHidOptionsState] = useState(false);
  const [posisionFavoritos, setPosisionFavoritos] = useState(0);
  const quitarFavoritos=()=>{
    setShowHidOptionsState(true);
    let newFavorites = [...musicasFavoritas];
    newFavorites.splice(posisionFavoritos, 1);
    setMusicasFavoritas(newFavorites);
    setMsgAccionFav("Musica removida de favoritos.");
    setMsgAgregadoFav(true)
    setTimeout(() => setMsgAgregadoFav(false), 3000);
    setShowHidOptionsState(false)
    eliminarObjeto("favoritosMusic",idBaseFav[posisionFavoritos])
  }
  
  // esta funcion se encarga de reproducir la musica de las musicas que estan en favoritas.
  const playFavMusic=(index)=>{
    setMusicReproductor(rutaReal + musicasFavoritas[index].link)
    setTimeout(() =>pausarReproducir("reproducir"), 10);
    setImgReproductor(musicasFavoritas[index].imagen);
    setTitleReproductor(musicasFavoritas[index].titulo);
    setArtistReproductor(musicasFavoritas[index].artista)
    setSecondControls(true);
    setShowMusic(true)
    rotarIcono.current.style.transform = "rotate(0deg)";

    setEsFavoritos(true);
    setEsAleatorio(false);
    setEsNormal(false);
    setEsPlayList(false);
  }



  // base de datos que guarda la informacion de las musicas favoritas.
  
  const akmacen = indexedDB.open("reproductor de musica",1);

  akmacen.addEventListener("upgradeneeded",()=>{
    const db = akmacen.result;
    db.createObjectStore("favoritosMusic",{
      autoIncrement: true
    });
    db.createObjectStore("playListsMusic",{
      autoIncrement: true
    });
    db.createObjectStore("playListsTitlesMusic",{
      autoIncrement: true
    });
    db.createObjectStore("playListsDescriptionsMusic",{
      autoIncrement: true
    });
  });
  useEffect(()=>{
    akmacen.addEventListener("success",()=>{
      leerObjeto("favoritosMusic",setMusicasFavoritas,setIdBaseFav);
      leerObjetoPlayList();
    })
  },[])
  akmacen.addEventListener("error",()=>console.log("hubo un error"));

  const agregarObjetos=(base,objeto) =>{
    const datos = getData(base,"readwrite");
    datos.add(objeto);
  }


  const eliminarObjeto=(base,key) =>{
    const datos = getData(base,"readwrite");
    datos.delete(key);
  }

  const getData=(base,tipo)=>{
    const db = akmacen.result;
    const transaccion = db.transaction(base,tipo);
    const almacen = transaccion.objectStore(base);
    return almacen;
  }
  
  const [idBaseFav, setIdBaseFav] = useState([]);
  function leerObjeto(base,estadoAgregar,estadoId){
    const db = akmacen.result;
    const transaccion = db.transaction(base,"readwrite")
    const almacenData = transaccion.objectStore(base);
    const cursor = almacenData.openCursor();
    let agregar = [];
    let agregarId = [];
    cursor.addEventListener("success",()=>{
      if (cursor.result) {
        agregar.push(cursor.result.value)
        agregarId.push(cursor.result.key)
        cursor.result.continue();
      }
      estadoAgregar(agregar);
      estadoId(agregarId);
    })
  }
  const [agregarIdPlaylist, setAgregarIdPlaylist] = useState([]);
  function leerObjetoPlayList(){
    const db = akmacen.result;
    const transaccion = db.transaction("playListsMusic","readwrite")
    const almacenData = transaccion.objectStore("playListsMusic");
    const cursor = almacenData.openCursor();
    let agregar = [];
    let agregarId = [];
    cursor.addEventListener("success",()=>{
      if (cursor.result) {
        agregar.push(cursor.result.value)
        agregarId.push(cursor.result.key)
        cursor.result.continue();
      }
      setPlayLists(agregar)
      setAgregarIdPlaylist(agregarId);
    })
  }





  // funciones de las playList.
  
  const [esPlayList, setEsPlayList] = useState(true);
  const [showPlayLists, setShowPlayLists] = useState(false); // esta funcion es para mostrar o ocultar el contenedor de las playList.
  const [showAddPlayList, setShowAddPlayList] = useState(false); // crear una playList
  const showHidePlaylists=(accion)=>{
    if(accion == "show"){
      setShowPlayLists(true)   
    } else {
      setTitlePlayList("")
      setDescripcionPlayList("")
      setShowPlayLists(false)
      setShowErrTitlePlay(false)   
    }
  }
  // crear playList
  const [playLists, setPlayLists] = useState([]);
  const [playArrTitle, setPlayArrTitle] = useState([]); // titulo de la playList
  const [playArrDescripcion, setPlayArrDescripcion] = useState([]); // descripcion del playList.
  const [titlePlayList, setTitlePlayList] = useState(""); // titulo de la playList
  const [descripcionPlayList, setDescripcionPlayList] = useState(""); // descripcion de la playList
  const [showErrTitlePlay, setShowErrTitlePlay] = useState(false);
  const [titleCount, setTitleCount] = useState(0);
  const crearPlayList=()=>{
    if (titlePlayList != "") {
      setPlayLists(current=>[...current,[base[posisionOptions]]]);
      setPlayArrTitle(current=>[...current,titlePlayList]);
      setPlayArrDescripcion(current=>[...current,descripcionPlayList]) 
      setShowErrTitlePlay(false);
      setTitlePlayList("")
      setDescripcionPlayList("")
      showHidePlaylists("hide")
      setShowHidOptionsState(false)
      setShowOptionsMusic(false)
      setShowAddPlayList(false)
      setMsgAccionFav("Se creo la PlayList " + titlePlayList);
      setMsgAgregadoFav(true)
      setTimeout(() =>setMsgAgregadoFav(false) , 4000);
      agregarObjetos("playListsMusic",[base[posisionOptions]]) // agregar musica a la base de datos
      agregarObjetos("playListsTitlesMusic",titlePlayList)
      agregarObjetos("playListsDescriptionsMusic",descripcionPlayList)
    } else {
      setShowErrTitlePlay(true)
    }
  }
  useEffect(()=>{
    console.log(playArrTitle[playArrTitle.length - 1 < 0 ? 0:playArrTitle.length - 1])
    
    // agregarObjetos("playListsDescriptionsMusic",playArrDescripcion[playArrDescripcion.length - 1 < 0 ? 0:playArrDescripcion.length - 1])
  },[playArrTitle])
  

  
  
  // esta funcion es para agregar mas musicas a una playList.
  const addPlayListMusic=(index)=>{
    if (JSON.stringify(playLists[index]).includes(JSON.stringify(base[posisionOptions]))) {
      setMsgAgregadoFav(true)
      setMsgAccionFav(`Esta musica ya fue agregada a la playList ${playArrTitle[index].slice()}`)
      setTimeout(() => setMsgAgregadoFav(false), 4000);
    } else {
      setPlayLists((prevArr) => {
        const newArr = [...prevArr];
        newArr[index] = [...newArr[index], base[posisionOptions]];
        return newArr;
      });
      showHidePlaylists("hide")
      setShowHidOptionsState(false)
      setShowOptionsMusic(false)
      setMsgAgregadoFav(true)
      setMsgAccionFav(`Musica agregada a la playList ${playArrTitle[index].slice()}`)
      setTimeout(() => setMsgAgregadoFav(false), 4000);
    }
  }

  const [showPlayList, setShowPlayList] = useState(false); // mostrar las playLists creadas.
  const [showOptionsPlayLists, setShowOptionsPlayLists] = useState(false); // esto es para mostrar las opciones de las playLists
  const [posisionPlaylistOptions, setPosisionPlaylistOptions] = useState(0);
  const [playListOptions, setPlayListOptions] = useState([]);
  // esta funcion es para mostrar las opciones de las playLists.
  const mostrarOptionsPlaylists=(object,index)=>{
    setPlayListOptions(object);
    setShowOptionsPlayLists(true)
    setPosisionPlaylistOptions(index)
  }
  // mostrar las musicas de una playList
  const [showPlayListEspecifica, setShowPlayListEspecifica] = useState(false); // mostrar la playList en especifico
  const [playListEspecifica, setPlayListEspecifica] = useState([]);
  const mostrarPlayList=(object)=>{
    setPlayListEspecifica(object)
    setShowPlayListEspecifica(true)
    setShowResultSearch(false);
    setShowMusic(false)
    setShowOptionsMenu(false)
    setShowFavoritas(false)
    setShowPlayList(false)
    setTimeout(() => rotarIcono.current.style.transform = "rotate(180deg)", 10);
    posisionPagina("playList")
  }  
  // esta funcion es para volver a la lista de playList.
  const backListPlayList=()=>{
    setShowPlayListEspecifica(false)
    setShowResultSearch(false);
    setShowMusic(false)
    setShowOptionsMenu(false)
    setShowFavoritas(false)
    setShowPlayList(true)
    setTimeout(() => rotarIcono.current.style.transform = "rotate(180deg)", 10);
  }
  // esta funcion es para eliminar una playList
  const deletePlayList = () => {
    let playList = [...playLists];
    let title = [...playArrTitle];
    let descripcion = [...playArrDescripcion];
    playList.splice(posisionPlaylistOptions, 1);
    title.splice(posisionPlaylistOptions, 1);
    descripcion.splice(posisionPlaylistOptions, 1);
    setPlayLists(playList);
    setPlayArrTitle(title);
    setPlayArrDescripcion(descripcion)
    setShowOptionsPlayLists(false);
    setMsgAccionFav(`La playList ${playArrTitle[posisionPlaylistOptions]} ha sido eliminada`)
    setMsgAgregadoFav(true)
    setTimeout(() =>setMsgAgregadoFav(false), 4000);
  };
  // Esta funcion es para reproducir las musicas de una playList en especifico.
  const playMusicPlayList=()=>{
    console.log(playListEspecifica)
    
    setEsPlayList(true);
    setEsFavoritos(false);
    setEsAleatorio(false);
    setEsNormal(false);
  }
  // esta funcion es para reproducir una musica de la playList.
  const [playListCount, setPlayListCount] = useState(0);
  const reproducirPlayListMusic=(index)=>{
    setPlayListCount(index);
    setMusicReproductor(rutaReal + playListEspecifica[index].link)
    setTimeout(() =>pausarReproducir("reproducir"), 10);
    setImgReproductor(playListEspecifica[index].imagen);
    setTitleReproductor(playListEspecifica[index].titulo);
    setArtistReproductor(playListEspecifica[index].artista);

    setEsPlayList(true);
    setEsAleatorio(false);
    setEsNormal(false);
    setEsFavoritos(false);
  };
  


  // ahora no se como mrd hacer que las musicas de las playList se reproduzcan desde el index donde se hizo la reproduccion de musica mi cerevro esta apagado xd.

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
                  setShowPlayList(false)
                  setShowPlayListEspecifica(false)
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
                    setShowPlayList(false)
                    setShowPlayListEspecifica(false)
                    posisionPagina("favoritos")
                    setTimeout(() => rotarIcono.current.style.transform = "rotate(180deg)", 10);
                  }}
                >
                  <span ref={favoritos}>
                    <FontAwesomeIcon icon={faHeart}/>
                    <p>favoritos</p>
                  </span>
                </button>
                <button
                  onClick={()=>{
                    setShowPlayList(true)
                    setShowFavoritas(false)
                    setShowResultSearch(false);
                    setShowMusic(false)
                    setShowOptionsMenu(false)
                    posisionPagina("playList")
                    setShowPlayListEspecifica(false)
                    setTimeout(() => rotarIcono.current.style.transform = "rotate(180deg)", 10);
                  }}
                >
                  <span ref={playList}>
                    <FontAwesomeIcon icon={faListAlt}/>
                    <p>playlist</p>
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
                    setShowDeleteInput(false);
                    setSearchResult([])
                    setShowResultSearch(false)
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

                    setEsNormal(true);
                    setEsAleatorio(false);
                    setEsFavoritos(false);
                    setEsPlayList(false);
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
                    searchResult.map((i,index)=>(
                      <div 
                        key={index}
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
              funcion1={()=>optionsShowHide("hide")}
              estadoMostrar={showOptionsMusic}
              imagen={imgOptions}
              titulo={titleOptions}
              artista={artistOptions}
              funcion2={agregarFavoritos}
              icono1={faHeart}
              mensaje1={"Agregar a favoritos."}
              funcion3={()=>showHidePlaylists("show")}
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
                        onClick={()=>playFavMusic(index)}
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
                          onClick={(e)=>{
                            e.stopPropagation()
                            setShowHidOptionsState(true)
                            cargarInformacionMusic(i)
                            setPosisionFavoritos(index)
                          }}
                        >
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                      </div>
                    ))
                }
              </div>
            }
            <OptionsMusic
              funcion1={()=>setShowHidOptionsState(false)}
              estadoMostrar={showHidOptionsState}
              imagen={imgOptions}
              titulo={titleOptions}
              artista={artistOptions}
              funcion2={quitarFavoritos}
              icono1={faTrash}
              mensaje1={"Quitar de favoritos"}
              funcion3={()=>showHidePlaylists("show")}
            />


            {/* estilos para agregar una playList */}
            {
              showPlayLists && <div
                className="contentCap12JsV1AddPlay"
                onClick={()=>showHidePlaylists("hide")}
              >
                <div 
                  onClick={(e)=>e.stopPropagation()}
                  className="contentCap12JsV1AddPlayContent">
                  <div className="contentCap12JsV1AddPlayContentTitleDiv">
                    <h2>guardar en una playList</h2>
                    <button onClick={()=>showHidePlaylists("hide")}>X</button>
                  </div>
                  <div className="contentCap12JsV1AddPlayContentPlayList">
                    {
                      playLists.length == 0 ?
                      <p>No tienes ningana playList</p>
                      :
                      playLists.map((i,index)=>(
                        <div>
                          <div
                            className="contentCap12JsV1AddPlayContentPlayListContent"
                            onClick={()=>addPlayListMusic(index)}
                          >
                            <div
                              className="contentCap12JsV1AddPlayContentPlayListContentImgs"
                            >
                              <img src={i[0].imagen} />
                              {i[1] != null ? <img src={i[1].imagen} />:null}
                              {i[2] != null ? <img src={i[2].imagen} />:null}
                              {i[3] != null ? <img src={i[3].imagen} />:null}
                            </div>
                            <div>
                              <h5>
                                {playArrTitle[index].slice(0,15)}
                                {playArrTitle[index].length >= 15 ? "...":""}
                              </h5>
                              <b>
                                {playLists[index].length} pistas
                              </b>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <button 
                    className="contentCap12JsV1AddPlayContentBtnAdd"
                    onClick={()=>{
                      setShowAddPlayList(true)
                      showHidePlaylists("hide")
                    }}
                  >+  agregar playList</button>
                </div>
              </div>
            }



            {/* crear una nueva playList */}
            {
              showAddPlayList && <div 
                onClick={()=>{
                  showHidePlaylists("show")
                  setShowAddPlayList(false)
                }}
                className="contentCap12JsV1CreateConttPlay"
              >
                <div 
                  onClick={(e)=>e.stopPropagation()}
                  className="contentCap12JsV1CreateConttPlayContent"
                >
                  <h2>Crear una playList</h2>
                  <div className="contentCap12JsV1CreateConttPlayInpit">
                    <input 
                      type="text" 
                      placeholder="titulo"
                      onChange={(e)=>setTitlePlayList(e.target.value)}
                      value={titlePlayList}
                    />
                    {showErrTitlePlay && <b>Ningun titulo</b>}
                    <textarea 
                      type="text" 
                      placeholder="descripcion"
                      onChange={(e)=>setDescripcionPlayList(e.target.value)}
                      value={descripcionPlayList}
                    />
                  </div>
                  <div className="contentCap12JsV1CreateConttPlayContentBtn">
                    <button 
                      onClick={()=>{
                        showHidePlaylists("show");
                        setShowAddPlayList(false)
                      }}
                    >cancelar</button>
                    <button
                      onClick={crearPlayList}
                    >+ crear</button>
                  </div>
                </div>
              </div>
            }
            {/* todas las playList */}
            {
              showPlayList && <div className="contentCap12JsV1PlayLists">
                <div className="contentCap12JsV1PlayListsContent">
                  {
                    playLists.length == 0 ?
                      <p>No hay playLists creadas</p>
                    :
                      playLists.map((i,index)=>(
                        <div 
                          className="contentCap12JsV1PlayListsContentCada1"
                          onClick={(e)=>{
                            e.stopPropagation();
                            mostrarPlayList(i)
                            setPosisionPlaylistOptions(index)
                          }}
                        >
                          <div className="contentCap12JsV1PlayListsContentCada1Img">
                            {i[0] != null ? <img src={i[0].imagen}/>:null}
                            {i[1] != null ? <img src={i[1].imagen}/>:null}
                            {i[2] != null ? <img src={i[2].imagen}/>:null}
                            {i[3] != null ? <img src={i[3].imagen}/>:null}
                          </div>
                          <div className="contentCap12JsV1PlayListsContentCada1Info">
                            <p>
                              {playArrTitle[index].slice(0,15)}
                              {playArrTitle[index].length >= 15 ? "...":""}
                            </p>
                            <p>{i.length} pistas</p>
                          </div>
                          <button
                            onClick={(e)=>{
                              e.stopPropagation();
                              mostrarOptionsPlaylists(i,index)
                            }}
                          >
                            <FontAwesomeIcon icon={faEllipsisV} />
                          </button>
                        </div>
                      ))
                  }
                </div>
              </div>
            }

            {/* opciones para las playLists */}
            <div 
              className={`contentCap12JsV1PlayListsOptions ${showOptionsPlayLists ? "":"contentCap12JsV1PlayListsOptionsHide"}`}
              onClick={(e)=>{
                e.stopPropagation();
                setShowOptionsPlayLists(false)
              }}
            >
              <div 
                className={`contentCap12JsV1PlayListsOptionsContent ${showOptionsPlayLists ? "":"contentCap12JsV1PlayListsOptionsContentHide"}`}
                onClick={(e)=>e.stopPropagation()}
              >
                <div className="contentCap12JsV1PlayListsOptionsContentInfo">
                  <div className="contentCap12JsV1PlayListsOptionsContentInfoImgs">
                    {playListOptions[0] != null ? <img src={playListOptions[0].imagen}/>:null}
                    {playListOptions[1] != null ? <img src={playListOptions[1].imagen}/>:null}
                    {playListOptions[2] != null ? <img src={playListOptions[2].imagen}/>:null}
                    {playListOptions[3] != null ? <img src={playListOptions[3].imagen}/>:null}
                  </div>
                  <div>
                    <h4>{playArrTitle[posisionPlaylistOptions]}</h4>
                    <p>{playListOptions.length} pistas</p>
                  </div>
                </div>
                <button onClick={()=>{
                  mostrarPlayList(playLists[posisionPlaylistOptions])
                  setShowOptionsPlayLists(false)
                }}>
                  <span>
                    <FontAwesomeIcon icon={faEye}/>
                    <p>ver playList</p>
                  </span>
                </button>
                <button onClick={deletePlayList}>
                  <span>
                    <FontAwesomeIcon icon={faTrash} />
                    <p>Eliminar playList</p>
                  </span>
                </button>
              </div>
            </div>
            {/* musicas de una playList en especifico */}
            {
              showPlayListEspecifica && <div className="contentCap12JsV1PlayListsMusic">
                <div className="contentCap12JsV1PlayListsMusicContent">
                  <button 
                    className="contentCap12JsV1PlayListsMusicContentAtras"
                    onClick={backListPlayList}
                  >
                    <FontAwesomeIcon icon={faArrowLeft}/>
                  </button>
                  <div className="contentCap12JsV1PlayListsMusicContentImgs">
                    {playListEspecifica[0] != null? <img src={playListEspecifica[0].imagen} alt="" />:null}
                    {playListEspecifica[1] != null? <img src={playListEspecifica[1].imagen} alt="" />:null}
                    {playListEspecifica[2] != null? <img src={playListEspecifica[2].imagen} alt="" />:null}
                    {playListEspecifica[3] != null? <img src={playListEspecifica[3].imagen} alt="" />:null}
                  </div>
                  <div className="contentCap12JsV1PlayListsMusicContentDescipcion">
                    <h4>{playArrTitle[posisionPlaylistOptions]}</h4>
                    <p>{playArrDescripcion[posisionPlaylistOptions]}</p>
                  </div>
                  <div className="contentCap12JsV1PlayListsMusicContentBtns">
                    <button 
                      className="contentCap12JsV1PlayListsMusicContentBtns__btn1"
                      onClick={playMusicPlayList}
                    >
                      <span>
                        <FontAwesomeIcon icon={faPlay} />
                        <b>reproducir</b>
                      </span>
                    </button>
                    <button className="contentCap12JsV1PlayListsMusicContentBtns__btn2">
                      <span>
                        <FontAwesomeIcon icon={faRandom} />
                        <b>aleatorio</b>
                      </span>
                    </button>
                  </div>
                  <div className="contentCap12JsV1PlayListsMusicContentMusic">
                    {
                      playListEspecifica.map((i,index)=>(
                        <div 
                          className="contentCap12JsV1PlayListsMusicContentMusicContent"
                          onClick={()=>reproducirPlayListMusic(index)}
                        >
                          <div className="contentCap12JsV1PlayListsMusicContentMusicContentInfo">
                            <div className="contentCap12JsV1PlayListsMusicContentMusicContentImgs">
                              <img src={i.imagen} alt={i.titulo} />
                            </div>
                            <div className="contentCap12JsV1PlayListsMusicContentMusicContentInfoData">
                              <h4>{i.titulo}</h4>
                              <p>{i.artista}</p>
                            </div>
                          </div>
                          <button>
                            <FontAwesomeIcon icon={faEllipsisV}/>
                          </button>

                        </div>
                      ))
                    }
                  </div>

                </div>
              </div>
            } 








          </div>


        </div>
      
      
      </>
    );
}

export default Cap12ProyV1;