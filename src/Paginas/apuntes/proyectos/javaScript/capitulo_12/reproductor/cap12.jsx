import "./cap12.css";

// componentes principales
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../../componentes/showOptions/show";

// componentes de react
import React, { useState , useRef , useEffect } from 'react';

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



// musicas
import ComeALitleCloser from "./musicas/come a little closer.mp3";
import TalkingInYourSleep from "./musicas/Talking In Your Sleep.mp3";
import BedsAreBurning from "./musicas/Beds Are Burning.mp3";
import WeAreThePeople from "./musicas/We Are The People.mp3";
import WarIsOver from "./musicas/War Is Over.mp3";
import WeAreYoung from "./musicas/We Are Young.mp3";
import ImStillStanding from "./musicas/Im Still Standing.mp3";
import LoucaEncubada from "./musicas/Louca Encubada.mp3";
import Bugambilia from "./musicas/Bugambilia.mp3";
import CrazyFrogBrazil from "./musicas/CRAZY FROG BRAZIL.mp3";
import RunAway from "./musicas/Run Away.mp3";
import NeverBeAlone from "./musicas/Never Be Alone.mp3";
import WhatYouKnow from "./musicas/What You Know.mp3";
import ThisAintTheEndOfMe from "./musicas/This Ain't The End Of Me.mp3";
import Skyfall from "./musicas/Skyfall.mp3";
import SweetieLittleJean from "./musicas/Sweetie Little Jean.mp3";



// base de datos
const base = [
  {
    "imagen": "https://i.ytimg.com/vi/KVYup3Qwh8Q/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mP2Llhs1XqKTo5AcyxJXhOM_cg6A",
    "titulo": "Come A Little Closer",
    "artista": "Cage The Elephant",
    "link": ComeALitleCloser,
    "id": 0
  },
  {
    "imagen": "https://lh3.googleusercontent.com/rprnmGAKCxMfQbeMPb1iJ3RMWLQDQFKtTTVhIe-OoXOFxKa8Zyk4x3jKf5XqgVuyKBQw0wPgzB9M9jo=w544-h544-l90-rj",
    "titulo": "Talking In Your Sleep",
    "artista": "The Romantics • In Heat • 1983",
    "link": TalkingInYourSleep,
    "id": 1
  },
  {
    "imagen": "https://lh3.googleusercontent.com/svA0RofXwjoyM-LOgNE5dK4QXUcC8Z45V1V4tDofclesEs5gvZYG805B7zYI1yqM9yd4P42BrI3w31hHQw=w544-h544-l90-rj",
    "titulo": "Beds Are Burning",
    "artista": "Midnight Oil • Diesel And Dust • 1987",
    "link": BedsAreBurning,
    "id": 2
  },
  {
    "imagen": "https://lh3.googleusercontent.com/HsEwUQH8tH10S_G33c9a-iv7iUJ7Ksbfbdpemb2B_uNqjYvf-hB4AMGHNf6gDurP4g4ZTa-3GnMGGwIa=w544-h544-l90-rj",
    "titulo": "We Are The People",
    "artista": "Empire Of The Sun",
    "link": BedsAreBurning,
    "id": 3
  },
  {
    "imagen": "https://lh3.googleusercontent.com/9UF-1DgEH--L86T0KQoBLCojKziEA-zAYXuU37fArvEZuQ9XcQm5tLcWpxp8GScxvop42BxNAtm8fY-q=w544-h544-l90-rj",
    "titulo": "War Is Over",
    "artista": "John Lennon • Imagine",
    "link": WarIsOver,
    "id": 4
  },
  {
    "imagen": "https://lh3.googleusercontent.com/d7bJNoH_IybM9ZOI9Q7uQrT-5rBpNwxXFb-DHysqjLzjlwr9NRCmOmwE3Hv61INMN9At6KCYBWVTxKD_=w544-h544-l90-rj",
    "titulo": "We Are Young",
    "artista": "fun. • Some Nights",
    "link": WeAreYoung,
    "id": 5
  },
  {
    "imagen": "https://lh3.googleusercontent.com/De2qH8Uwg4XEgI0l3mWJlQJ1Vh3Gq1LX4baJJE1Bws9OsUG83tC7h392Uc1TE4-rVajykiTJ6bulSbwrJg=w544-h544-s-l90-rj",
    "titulo": "I'm Still Standing",
    "artista": "Elton John",
    "link": ImStillStanding,
    "id": 6
  },
  {
    "imagen": "https://lh3.googleusercontent.com/DFe8UcUEEz7hMSKo6gImjKZK7TO9UtwTkJRdGdDfRBreReAUkqclIcNGeTl9drb2PZwW99d2nS_n0MpH=w544-h544-l90-rj",
    "titulo": "Louca Encubada",
    "artista": "Dj Samir,Rodricci y Launch13",
    "link": LoucaEncubada,
    "id": 7
  },
  {
    "imagen": "https://lh3.googleusercontent.com/-JAM3LPNOwPocYMvBXI-jqLAuX0xw4DvPREb20EyqRolNyVKnnl8iDcuHF2WN8KyDULASyUEzPVqaliC=w544-h544-l90-rj",
    "titulo": "Bugambilia",
    "artista": "Nasa Histoires",
    "link": Bugambilia,
    "id": 8
  },
  {
    "imagen": "https://lh3.googleusercontent.com/TiY8HvnQPbz1_AdXrx3T-qh98zaQoRQAu5kQPMtdTGv9-pqSpRq8G0qzRbDdpokKpTCpitsMim0Idi4s=w544-h544-l90-rj",
    "titulo": "CRAZY FROG BRAZIL",
    "artista": "ZODIVK y YXUNGXROTICA",
    "link": CrazyFrogBrazil,
    "id": 9
  },
  {
    "imagen": "https://lh3.googleusercontent.com/bsP5E8RbNt4PxeNQ2bwzgu7MjQ8DC0LbbXbVyUHeterF6-1Zce4Pml245fved39iDVXrqHkN8S9VgG6VAg=w544-h544-l90-rj",
    "titulo": "Run Away",
    "artista": "Rakdos , WHYTYLXR y Arixch",
    "link": RunAway,
    "id": 10
  },
  {
    "imagen": "https://lh3.googleusercontent.com/dbodEfwMOHbKdu_izgmBHwclYmtEMxKCnNJ_6k2fagvyxRcg6BbXm7uKpeT0WGQEQMbOOVjaN4Yqn-w-=w544-h544-l90-rj",
    "titulo": "Never Be Alone",
    "artista": "TheFatRat",
    "link": NeverBeAlone,
    "id": 11
  },
  {
    "imagen": "https://lh3.googleusercontent.com/dp1cp84d63F_Tkq9n1aUTFPdWgwZ9u5IsMU60kOR_VHoIUUFiLPi2_5wNBsYR0EKfWU6qlgcq0ebpf2LAg=w544-h544-l90-rj",
    "titulo": "What You Know",
    "artista": "Two Door Cinema Club",
    "link": WhatYouKnow,
    "id": 12
  },
  {
    "imagen": "https://lh3.googleusercontent.com/l9-bTPGdM_1vRDNWGiQ_HCUsyW6vjiz8hZ-j3vxyTYB3F513AstolXfifU7YVra8xuA_yqGw9zG9sjGIww=w544-h544-l90-rj",
    "titulo": "This Ain't The End Of Me",
    "artista": "MontageRock",
    "link": ThisAintTheEndOfMe,
    "id": 13
  },
  {
    "imagen": "https://lh3.googleusercontent.com/iqnE0X2tuoZnWUdEkBZ4jskKP_jUJLbcL5X6c5rFOhe_F4QnHNOvL-fAcPxKynHgi9qpwbDoYlYoYypU=w544-h544-l90-rj",
    "titulo": "Skyfall",
    "artista": "Adele",
    "link": Skyfall,
    "id": 14
  },
  {
    "imagen": "https://lh3.googleusercontent.com/UWkZaxW3vojNbI0hS2WtY5dFyKt3hy25CBcjCCTuRGPHepp9LpV0AvZj7Ab4ul1qDduNwfU3oAxQhJDK=w544-h544-l90-rj",
    "titulo": "Sweetie Little Jean",
    "artista": "Cage The Elephant",
    "link": SweetieLittleJean,
    "id": 15
  }
]

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
    setMusicReproductor(musica)
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
        if (esfavoritasAleatorias) {
          let newId = musicFavCount + 1;
          if (newId < musicasFavoritas.length) {
            setMusicFavCount(newId);
            setMusicReproductor(musicasFavoritas[aleatoriasFav[newId]].link)
            setImgReproductor(musicasFavoritas[aleatoriasFav[newId]].imagen);
            setTitleReproductor(musicasFavoritas[aleatoriasFav[newId]].titulo);
            setArtistReproductor(musicasFavoritas[aleatoriasFav[newId]].artista)
            setTimeout(() =>pausarReproducir("reproducir"), 10);
          }
        } else{
          let newId = musicFavCount + 1;
          if (newId < musicasFavoritas.length) {
            setMusicFavCount(newId)
            setMusicReproductor(musicasFavoritas[newId].link)
            setImgReproductor(musicasFavoritas[newId].imagen);
            setTitleReproductor(musicasFavoritas[newId].titulo);
            setArtistReproductor(musicasFavoritas[newId].artista);
            setTimeout(() =>pausarReproducir("reproducir"), 10);
          }
        }
      } else if (esPlayList){
        if (esPlayListAleatoria) {
          let newId = playListCount + 1;
          if (newId < playListEspecifica.length) {
            setPlayListCount(newId);
            setMusicReproductor(playListEspecifica[playListAleatoria[newId]].link)
            setImgReproductor(playListEspecifica[playListAleatoria[newId]].imagen);
            setTitleReproductor(playListEspecifica[playListAleatoria[newId]].titulo);
            setArtistReproductor(playListEspecifica[playListAleatoria[newId]].artista);
            setTimeout(() => audioMusic.current.play(), 10);
            setPausePlay(false);
          }
        } else {
          let newId = playListCount + 1;
          if (newId < playListEspecifica.length) {
            setPlayListCount(newId);
            setTimeout(() =>audioMusic.current.play(),10);
            setIdentificar(playListEspecifica[newId].id)
            setPausePlay(false)
          }
        }
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
        if (esfavoritasAleatorias) {
          let newId = musicFavCount - 1;
          if (newId >= 0) {
            setMusicFavCount(newId);
            setMusicReproductor(musicasFavoritas[aleatoriasFav[newId]].link)
            setImgReproductor(musicasFavoritas[aleatoriasFav[newId]].imagen);
            setTitleReproductor(musicasFavoritas[aleatoriasFav[newId]].titulo);
            setArtistReproductor(musicasFavoritas[aleatoriasFav[newId]].artista)
            setTimeout(() =>pausarReproducir("reproducir"), 10);
          }
        } else{
          let newId = musicFavCount - 1;
          if (newId >= 0) {
            setMusicFavCount(newId)
            setMusicReproductor(musicasFavoritas[newId].link)
            setImgReproductor(musicasFavoritas[newId].imagen);
            setTitleReproductor(musicasFavoritas[newId].titulo);
            setArtistReproductor(musicasFavoritas[newId].artista);
            setTimeout(() =>pausarReproducir("reproducir"), 10);
          }
        }
      } else if (esPlayList){
        if (esPlayListAleatoria) {
          let newId = playListCount - 1;
          if (newId >= 0) {
            setPlayListCount(newId);
            setMusicReproductor(playListEspecifica[playListAleatoria[newId]].link)
            setImgReproductor(playListEspecifica[playListAleatoria[newId]].imagen);
            setTitleReproductor(playListEspecifica[playListAleatoria[newId]].titulo);
            setArtistReproductor(playListEspecifica[playListAleatoria[newId]].artista);
            setTimeout(() => audioMusic.current.play(), 10);
            setPausePlay(false);
          }
        } else {
          let newId = playListCount - 1;
          if (newId >= 0) {
            setPlayListCount(newId);
            setTimeout(() =>audioMusic.current.play(),10);
            setIdentificar(playListEspecifica[newId].id)
            setPausePlay(false)
          }
        }
      }
    }
  }

  
  
  //actualizar musicas
  useEffect(()=>{
    setImgReproductor(base[identificar].imagen);
    setTitleReproductor(base[identificar].titulo);
    setArtistReproductor(base[identificar].artista);
    setMusicReproductor(base[identificar].link);
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
    setMusicReproductor(base[indicesTemp[0]].link)
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
  const [esfavoritasAleatorias, setEsfavoritasAleatorias] = useState(false); // musicas de favoritas pero aleatorias.
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
  const [musicFavCount, setMusicFavCount] = useState(0);
  const playFavMusic=(index)=>{
    setMusicReproductor(musicasFavoritas[index].link)
    setImgReproductor(musicasFavoritas[index].imagen);
    setTitleReproductor(musicasFavoritas[index].titulo);
    setArtistReproductor(musicasFavoritas[index].artista)
    setTimeout(() =>pausarReproducir("reproducir"), 10);
    setSecondControls(true);
    setShowMusic(true)
    rotarIcono.current.style.transform = "rotate(0deg)";
    setMusicFavCount(index)

    
    setEsFavoritos(true);
    setEsfavoritasAleatorias(false);
    setEsPlayListAleatoria(false);
    setEsAleatorio(false);
    setEsNormal(false);
    setEsPlayList(false);
  }
  const [aleatoriasFav, setAleatoriasFav] = useState([]);
  const reproduccionAleatoriaFav=()=>{
    setMusicFavCount(0);
    let indicesTemp = [];
    for (let i = 0; i < musicasFavoritas.length; i++) {
      let indiceAleatorio;
      do {
        indiceAleatorio = Math.floor(Math.random() * musicasFavoritas.length);
      } while (indicesTemp.includes(indiceAleatorio));
      indicesTemp.push(indiceAleatorio);
    }
    setAleatoriasFav(indicesTemp)
    setMusicReproductor(musicasFavoritas[indicesTemp[0]].link)
    setImgReproductor(musicasFavoritas[indicesTemp[0]].imagen);
    setTitleReproductor(musicasFavoritas[indicesTemp[0]].titulo);
    setArtistReproductor(musicasFavoritas[indicesTemp[0]].artista)
    setTimeout(() =>pausarReproducir("reproducir"), 10);
    setEsFavoritos(true);
    setEsfavoritasAleatorias(true);
    setEsPlayListAleatoria(false)
    setEsAleatorio(false);
    setEsNormal(false);
    setEsPlayList(false);
    setSecondControls(true)
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
      leerObjeto("favoritosMusic",setMusicasFavoritas,setIdBaseFav); // leer musicas favoritas

      leerObjeto("playListsMusic",setPlayLists,setAgregarIdPlaylist); // leer playLists
      leerObjeto("playListsTitlesMusic",setPlayArrTitle,setAgregarTitleId); // leer titulos de playLists
      leerObjeto("playListsDescriptionsMusic",setPlayArrDescripcion,setAgregarDesciptionId); // leer descripciones de playList


      // parametro de leerObjetos
        // 1. Que base de datos se leeara.
        // 2. cual sera la variable de estado donde se guardara la base de datos.
        // 3. Guardar las id de cada base de datos para trabajar con  ellas.
    })
    return ()=>{
      akmacen.addEventListener("success",()=>{
        leerObjeto("favoritosMusic",setMusicasFavoritas,setIdBaseFav); // leer musicas favoritas
  
        leerObjeto("playListsMusic",setPlayLists,setAgregarIdPlaylist); // leer playLists
        leerObjeto("playListsTitlesMusic",setPlayArrTitle,setAgregarTitleId); // leer titulos de playLists
        leerObjeto("playListsDescriptionsMusic",setPlayArrDescripcion,setAgregarDesciptionId); // leer descripciones de playList
  
  
        // parametro de leerObjetos
          // 1. Que base de datos se leeara.
          // 2. cual sera la variable de estado donde se guardara la base de datos.
          // 3. Guardar las id de cada base de datos para trabajar con  ellas.
      })
    }
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
  const editarObjeto=(base,objeto,key)=>{
    const datos = getData(base,"readwrite");
    datos.put(objeto,key);
  }

  const getData=(base,tipo)=>{
    const db = akmacen.result;
    const transaccion = db.transaction(base,tipo);
    const almacen = transaccion.objectStore(base);
    return almacen;
  }

  // favoritos
  const [idBaseFav, setIdBaseFav] = useState([]); // obtener id de las musicas favoritas.
  // playLists
  const [agregarIdPlaylist, setAgregarIdPlaylist] = useState([]); // obtener id de las playLists.
  const [agregarTitleId, setAgregarTitleId] = useState([]); // agregar id a los titulos de las playList
  const [agregarDesciptionId, setAgregarDesciptionId] = useState([]); // agregar id a las descripciones de las playLists.
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
      leerObjeto("playListsMusic",setPlayLists,setAgregarIdPlaylist); // leer playLists
      leerObjeto("playListsTitlesMusic",setPlayArrTitle,setAgregarTitleId); // leer titulos de playLists
      leerObjeto("playListsDescriptionsMusic",setPlayArrDescripcion,setAgregarDesciptionId); // leer descripciones de playList
    } else {
      setShowErrTitlePlay(true)
    }
  }
  
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
        editarObjeto("playListsMusic",newArr[index],agregarIdPlaylist[index])
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
    eliminarObjeto("playListsDescriptionsMusic",agregarDesciptionId[posisionPlaylistOptions]);
    eliminarObjeto("playListsTitlesMusic",agregarTitleId[posisionPlaylistOptions]);
    eliminarObjeto("playListsMusic",agregarIdPlaylist[posisionPlaylistOptions]);
    leerObjeto("playListsMusic",setPlayLists,setAgregarIdPlaylist); // leer playLists
    leerObjeto("playListsTitlesMusic",setPlayArrTitle,setAgregarTitleId); // leer titulos de playLists
    leerObjeto("playListsDescriptionsMusic",setPlayArrDescripcion,setAgregarDesciptionId); // leer descripciones de playList
  };
  // Esta funcion es para reproducir las musicas de una playList en especifico.
  const playMusicPlayList=()=>{
    setPlayListCount(0)
    setMusicReproductor(playListEspecifica[0].link)
    setTimeout(() => {
      audioMusic.current.play()
      rotarIcono.current.style.transform = "rotate(180deg)";
    }, 10);
    setSecondControls(true);
    setPausePlay(false)
    setImgReproductor(playListEspecifica[0].imagen);
    setTitleReproductor(playListEspecifica[0].titulo);
    setArtistReproductor(playListEspecifica[0].artista);

    setEsPlayList(true);
    setEsFavoritos(false);
    setEsAleatorio(false);
    setEsNormal(false);
    setEsPlayListAleatoria(false)
  }
  // esta funcion es para reproducir una musica de la playList.
  const [playListCount, setPlayListCount] = useState(0);
  const reproducirPlayListMusic=(index)=>{
    setPlayListCount(index);
    setMusicReproductor(playListEspecifica[index].link)
    setTimeout(() => {
      audioMusic.current.play()
      rotarIcono.current.style.transform = "rotate(180deg)";
    }, 10);
    setPausePlay(false)
    setImgReproductor(playListEspecifica[index].imagen);
    setTitleReproductor(playListEspecifica[index].titulo);
    setArtistReproductor(playListEspecifica[index].artista);
    setSecondControls(true)

    setEsPlayList(true);
    setEsPlayListAleatoria(false)
    setEsfavoritasAleatorias(false)
    setEsAleatorio(false);
    setEsNormal(false);
    setEsFavoritos(false);
    setEsPlayListAleatoria(false)
  };
  // esta funcion es para reproducir una musica aleatoria de la playList especifica.
  const [playListAleatoria, setPlayListAleatoria] = useState([]);
  const [esPlayListAleatoria, setEsPlayListAleatoria] = useState(false);
  const playMusicRandomPlayList=()=>{
    setPlayListCount(0);
    let indicesTemp = [];
    for (let i = 0; i < playListEspecifica.length; i++) {
      let indiceAleatorio;
      do {
        indiceAleatorio = Math.floor(Math.random() * playListEspecifica.length);
      } while (indicesTemp.includes(indiceAleatorio));
      indicesTemp.push(indiceAleatorio);
    }
    setPlayListAleatoria(indicesTemp)

    setMusicReproductor(playListEspecifica[indicesTemp[0]].link)
    setImgReproductor(playListEspecifica[indicesTemp[0]].imagen);
    setTitleReproductor(playListEspecifica[indicesTemp[0]].titulo);
    setArtistReproductor(playListEspecifica[indicesTemp[0]].artista);
    
    setTimeout(() => {
      audioMusic.current.play()
      rotarIcono.current.style.transform = "rotate(180deg)";
    }, 10);

    setPausePlay(false)
    setSecondControls(true)

    setEsPlayList(true);
    setEsPlayListAleatoria(true)
    setEsfavoritasAleatorias(false)
    setEsAleatorio(false);
    setEsNormal(false);
    setEsFavoritos(false);
  }
  // funciones de las opciones de las musicas de las playLists.
  const [showOptionsPlayListMusic, setShowOptionsPlayListMusic] = useState(false); // estado para mostrar las opciones de las musicas de una playList.
  const [objectPlayListMusic, setObjectPlayListMusic] = useState({}); // esto guarda la musica especifica.
  const [posisionMusicPlaylist, setPosisionMusicPlaylist] = useState(0);
  const deletePlayListMusic=()=>{
    let newObject = [...playLists];
    newObject[posisionPlaylistOptions].splice(posisionMusicPlaylist,1)
    setPlayLists(newObject)
    setShowOptionsPlayListMusic(false)
    setMsgAgregadoFav(true)
    setMsgAccionFav("Musica eliminada de la playList")
    setTimeout(() =>setMsgAgregadoFav(false), 4000);
    editarObjeto("playListsMusic",newObject[posisionPlaylistOptions],agregarIdPlaylist[posisionPlaylistOptions])
  }


    return (
      <>
        <ShowOptions 
          link={"../"}
          html={`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="plantilla.css">
    <script src="https://kit.fontawesome.com/7e204a84d0.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">

  </head>
  <body>

    <div class="content"></div>

    <script src="plantilla.js"></script>
  </body>
</html>`}
          css={`*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.content{
  background-color: #000;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: grid;
  padding-top: 15px;
  top: 0;
  left: 0;
  grid-template-columns: repeat(2,400px);
  justify-content: center;
  gap: 15px;
}
.contenedor{
  border: 2px solid rgb(35, 37, 35);
  background-color: #0f0f0f;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  margin: auto;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 15px;
}
.load{
  opacity: 1;
  visibility: visible;
  transition-duration: .8s;
}
.contenedor img{
  width: 80%;
  object-fit: cover;
}
.contenedor h4{
  color: #a2fffd;
  font-size: 1.5em;
  margin-top: 15px;
  text-align: center;
}
.contenedor a{
  background-color: #222422;
  border-radius: 50px;
  padding: 8px;
  color: #91d3d2;
  text-decoration: none;
  margin-top: 15px;
  width: 85%;
  text-align: center;
}
.contenedor p{
  color: #7cb3b2;
  margin-top: 15px;
  text-align: center;
}`}
          javaScript={`const content = document.querySelector(".content");
let datos = [];


fetch("base.json")
  .then(res => res.json())



  .then(res=>{


    res.forEach((i)=>{
      const contenedorDiv = document.createElement("div");
      contenedorDiv.classList.add("contenedor")
      content.appendChild(contenedorDiv)
      datos.push(i)
    })

  
    let arr = [];
    arr.push(content.children)
    let indexDatos = 0;

    const observar = (entradas,observer) => {
      entradas.forEach(i=>{
        if (i.isIntersecting) {
          const entry = i.target;
          entry.classList.add("load")
          entry.innerHTML = \`<img src="${"${datos[indexDatos].imagen}"}" alt="${"${datos[indexDatos].titulo}"}"/>
            <h4>${"${datos[indexDatos].titulo}"}</h4>
            <a href="${"${datos[indexDatos].link}"}" target="_blank">musica aqui</a>
            <p>${"${datos[indexDatos].artista}"}</p>
          \`
          observer.unobserve(entry)
          indexDatos++;
        }
      })
          

    };
    
    const observer = new IntersectionObserver(observar);
    for (let i = 0; i < arr[0].length; i++) {
      observer.observe(arr[0][i]);
    }
  })`}
          txt={`[
  {
    "imagen":  "https://i.ytimg.com/vi/a47Y1lCRHlM/hqdefault.jpg?sqp=-oaymwEWCMACELQBIAQqCghQEJADGFogjgJIWg&rs=AMzJL3lkePc_gYJ-BfoiDqPHN0jXCEzYbg",
    "titulo": "We are the peopple",
    "link": "https://music.youtube.com/watch?v=r02mYOlfcCw&si=cdT-aSjAEH04hT7q",
    "artista": "Empire Of The Sun"
  },
  {
    "imagen":  "https://lh3.googleusercontent.com/utbUSUljsrlFEGo848hyZQHabMaK1ljAqA_o1dJ3YTp1UDlnk_qpd0fE0ZZMpcwQo-sg5F1B2PlUPysl=w544-h544-l90-rj",
    "titulo": "Drop The Game",
    "link": "https://music.youtube.com/watch?v=GnUXVkDIWcM&si=3Didwyf2zp26kV3Y",
    "artista": "Flume y Chet Faker"
  },
  {
    "imagen":  "https://lh3.googleusercontent.com/svA0RofXwjoyM-LOgNE5dK4QXUcC8Z45V1V4tDofclesEs5gvZYG805B7zYI1yqM9yd4P42BrI3w31hHQw=w544-h544-l90-rj",
    "titulo": "Beds Are Burning",
    "link": "https://music.youtube.com/watch?v=9t5OWixuUI8&si=WCZ4-W8fHd5_UrP9",
    "artista": "Midnight Oil • Diesel And Dust • 1987"
  },
  {
    "imagen":  "https://lh3.googleusercontent.com/UcsBl7TYuywWNNqoZV6bu6jFaOnA1pqeAs9UwJymob_18C5J31oelDiG52Suv-580vNGcQ0eHYwu2os4=w544-h544-l90-rj",
    "titulo": "Goth",
    "link": "https://music.youtube.com/watch?v=yMiIrAxQhFA&si=q-l6IBpCULX9q1EO",
    "artista": "Sidewalks and Skeletons"
  },
  {
    "imagen":  "https://lh3.googleusercontent.com/dp1cp84d63F_Tkq9n1aUTFPdWgwZ9u5IsMU60kOR_VHoIUUFiLPi2_5wNBsYR0EKfWU6qlgcq0ebpf2LAg=w544-h544-l90-rj",
    "titulo": "What You Know",
    "link": "https://music.youtube.com/watch?v=VsOR4Z87dNw&si=v7CH8FrUzUvfdWW2",
    "artista": "Two Door Cinema Club"
  },
  {
    "imagen":  "https://lh3.googleusercontent.com/d7bJNoH_IybM9ZOI9Q7uQrT-5rBpNwxXFb-DHysqjLzjlwr9NRCmOmwE3Hv61INMN9At6KCYBWVTxKD_=w544-h544-l90-rj",
    "titulo": "We Are Young",
    "link": "https://music.youtube.com/watch?v=f_K_0SNaRk0&si=wkQJKXFWitLqZ1mR",
    "artista": "fun.• Some Nights • 2012"
  },
  {
    "imagen":  "https://lh3.googleusercontent.com/z5Va1dqCiSWIQSKNSDB6YoPswuHxkJbl3Sb_XagFmkX4oZTQYm7DCCSHoA3N9vabN8uiIQw4ITcBmmFB=w544-h544-l90-rj",
    "titulo": "DILATAÇÃO HIPNÓTICA 6.0",
    "link": "https://music.youtube.com/watch?v=XCXtS-yK-48&si=3O9U6yC8ZK__VH1H",
    "artista": "DJ FLG • DILATAÇÃO HIPNÓTICA 6.0"
  },
  {
    "imagen": "https://lh3.googleusercontent.com/TiY8HvnQPbz1_AdXrx3T-qh98zaQoRQAu5kQPMtdTGv9-pqSpRq8G0qzRbDdpokKpTCpitsMim0Idi4s=w544-h544-l90-rj",
    "titu": "CRAZY FROG BRAZIL",
    "link": "https://music.youtube.com/watch?v=plMaRBPev70&si=ZBiVA-BngazquVql",
    "artista": "ZODIVK y YXUNGXROTICA • CRAZY FROG BRAZIL • 2023"
  }
]`}
        />
        <MensajeModal texto={`Por alguna razon las rutas solo funcionan en el entorno de desarrollo pero no en el entorno de la web publica`}/>
        <MensajeModal texto={`¡Proyecto! capitulo 12

Hacer un reproductor de musica , debes usar Lazy Load para mostrar el contenido de forma mas obtimizada.

Recuerda que aprendimos:

1. MatchMedia
2. Intersection Observer
3. Lazy Load
4. Notifications
5. Web Worker
6. Same Origin Politic
7. Objeto Navigator
8. Memoization
9. Caché
10. Service Workers
11. Cachear sitio web y mostrarlo offline
12. Cookies
13. Crear aviso de uso de cookies
14. Objeto Screen
15. Objeto Canvas`}/>


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
                <button 
                  className="contentCap12JsV1FavoritosContentBtn"
                  onClick={reproduccionAleatoriaFav}
                >Reproduccion aleatoria</button>
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
                              {i[0] != null ? <img src={i[0].imagen} />:null}
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
                    <button 
                      className="contentCap12JsV1PlayListsMusicContentBtns__btn2"
                      onClick={playMusicRandomPlayList}
                    >
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
                          <button
                            onClick={(e)=>{
                              e.stopPropagation();
                              setShowOptionsPlayListMusic(true)
                              setObjectPlayListMusic(i)
                              setPosisionOptions(i.id)
                              setPosisionMusicPlaylist(index)
                            }}
                          >
                            <FontAwesomeIcon icon={faEllipsisV}/>
                          </button>

                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            } 
            {/* opciones de las musicas de las playlists */}
            <div 
              className={`contentCap12JsV1PlayListsMusicOptions ${showOptionsPlayListMusic ? "":"contentCap12JsV1PlayListsMusicOptionsHide"}`}
              onClick={(e)=>{
                e.stopPropagation();
                setShowOptionsPlayListMusic(false);
              }}
            >
              <div 
                className={`cwidontentCap12JsV1PlayListsOptionsMusicContent ${showOptionsPlayListMusic ? "":"cwidontentCap12JsV1PlayListsOptionsMusicContent"}`}
                onClick={(e)=>e.stopPropagation()}
              >
                <div className="cwidontentCap12JsV1PlayListsOptionsMusicContentInfo">
                  <div className="cwidontentCap12JsV1PlayListsOptionsMusicContentInfoImg">
                    <img src={objectPlayListMusic.imagen} alt={objectPlayListMusic.titulo} />
                  </div>
                  <div className="cwidontentCap12JsV1PlayListsOptionsMusicContentInfoInfo">
                    <h4>{objectPlayListMusic.titulo}</h4>
                    <p>{objectPlayListMusic.artista}</p>
                  </div>
                </div>
                <button 
                  className="cwidontentCap12JsV1PlayListsOptionsMusicContentBtn"
                  onClick={agregarFavoritos}
                >
                  <span>
                    <p>+</p>
                    <b>agregar a favoritos</b>
                  </span>
                </button>
                <button 
                  className="cwidontentCap12JsV1PlayListsOptionsMusicContentBtn"
                  onClick={deletePlayListMusic}
                >
                  <span>
                    <FontAwesomeIcon icon={faTrash}/>
                    <b>eliminar de la playList</b>
                  </span>
                </button>
              </div>
            </div>








          </div>


        </div>
      
      
      </>
    );
}

export default Cap12ProyV1;