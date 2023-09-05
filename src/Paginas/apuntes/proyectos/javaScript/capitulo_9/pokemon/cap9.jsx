import "./cap9.css";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Volver from "../../../../../../componentes/volver/volver";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Css from "../../../../../../componentes/lenguajes/Css";
import Html from "../../../../../../componentes/lenguajes/Html";


// react
import React, { useState, useEffect, useRef } from 'react';



// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";



function Botones({icono,texto,funcion}) {
  return (  
    <div className="contenedorBotonesPokemonCap9Js">
      <div onClick={funcion}>{icono}</div>
      <p>{texto}</p>
    </div>
  );
}

function Pokemon({
  imgs
}) {
  const [showInfo, setShowInfo] = useState(false);


  return (  
    <div className="pageCap9V1Pokemon__content">
      <img
        className="pageCap9V1Pokemon__content__img" 
        src={imgs} 
        alt="no encontrado"
        onMouseEnter={()=>setShowInfo(true)}
        onMouseOut={()=>setShowInfo(false)}
      />
      <div 
        className={`pageCap9V1Pokemon__content__info ${showInfo ?   "":"pageCap9V1Pokemon__content__infoHide"}`}
        onMouseMove={()=>setShowInfo(true)}
        onMouseOut={()=>setShowInfo(false)}
      >
        <p>nombre: algo</p>
        <p>tipo: algo</p>
        <p>altura: algo</p>
        <p>peso: algo</p>
      </div>
    </div>
  );
}


function Cap9ProyJsV1() {

  const [inputBuscar, setInputBuscar] = useState(''); // esto es el valor del input buscar.
  const [showX, setShowX] = useState(false); // esto es para mostrar la X del buscador.
  const [sugerencias, setSugerencias] = useState([]); // esto almacena las sugerencias de los pokemones.
  const [pokemonBuscado, setPokemonBuscado] = useState("");


  // componentes de la api
  const [imgs, setImgs] = useState("");


  // esta funcion se encarga de obtener y mostrar el limpiador del input
  const hundleChange=(e)=>{
    const inputValor = e.target.value;
    setInputBuscar(inputValor);
    inputValor == ''?setShowX(false):setShowX(true)
  }
  

  // esta funcion es el buscador osea el input

  const buscar =()=>{
    setShowX(true);
  }

  // esta funcion hace la llamada a pokemon y muestra las sugerencias
  useEffect(()=>{
    const quitarEspacio = inputBuscar.trim();
    const valorInput = quitarEspacio.toLowerCase();
    if(valorInput != ``){
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0?lang=es`)
      .then(response => response.json())
      .then(data => {
        const sugerenciasResultados = data.results.filter(pokemon => pokemon.name.includes(valorInput));
        const sugerenciasArr = [];
        sugerenciasResultados.forEach((pokemon,index) => {
          sugerenciasArr[index] = pokemon.name;
        });
        setSugerencias(sugerenciasArr)
        if(inputBuscar == pokemonBuscado){setSugerencias([])}
      })
    } else {setSugerencias([])}
  }, [inputBuscar])

  const sugerenciaBuscar =(e)=>{
    setInputBuscar(e.target.textContent);
    setPokemonBuscado(e.target.textContent)
  }
  


  function buscador() {
    const searchTerm = inputBuscar.trim();
    if (searchTerm !== '') {
      const pokeApi = fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      pokeApi.then(e => e.json())
      .then(data => {
        console.log()
        setImgs(data.sprites.front_default)
      })
    }
  }

  buscador()
  


  const limpiarBuscador=()=>{
    setInputBuscar('');
    setShowX(false);
  }

  return (  
    <>
      <Volver link={"../"}/>
      <div className="Page">
        
        <div className="contenedorPageCap9V1Pokemon">

          <div className="contenedorPokemonOpcionesJsCap9">

            {/* esto es el input buscador */}

            <div className="contenedorPokemonOpcionesJsCap9__input">
              <input 
                type="text"
                value={inputBuscar}
                onChange={hundleChange}
                onInput={buscar}
              />
              {
                showX && <p onClick={limpiarBuscador}>x</p>
              }
              <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>

            {/* estas son las sugerencias */}

            <div className="sugerencias">
              {
                sugerencias.map(i=><p onClick={(e)=>sugerenciaBuscar(e)} key={i}>{i}</p>)
              }
            </div>

            {/* estos son los botones de la pokedex */}

            <div className="contenedorPokemonOpcionesJsCap9__botones">
              <div className="contenedorPokemonOpcionesJsCap9__botones__despazamiento">
                <Botones icono={<FontAwesomeIcon icon={faAngleDoubleUp} />} texto={"inicio"}/>
                <div className="contenedorPokemonOpcionesJsCap9__botones__despazamiento__izDer">
                  <Botones icono={<FontAwesomeIcon icon={faAngleDoubleLeft} />} texto={"izquierda"}/>
                  <Botones icono={<FontAwesomeIcon icon={faAngleDoubleRight} />} texto={"derecha"}/>
                </div>
                <Botones icono={<FontAwesomeIcon icon={faAngleDoubleDown} />} texto={"final"}/>
              </div>
              <div className="contenedorPokemonOpcionesJsCap9__botones__opciones">

                <Botones icono={<FontAwesomeIcon icon={faClipboardList} />} texto={"todo"}/>
                <Botones icono={<FontAwesomeIcon icon={faClock} />} texto={"historial"}/>
                <Botones icono={"+"} texto={"generar mas"}/>
              </div>
            </div>
            
          </div>

          <div className="contenedorPageCap9V1Pokemon__pokemones">
            <Pokemon 
              imgs={imgs}
            />
            <Pokemon 
              imgs={imgs}
            />
            <Pokemon 
              imgs={imgs}
            />
            <Pokemon 
              imgs={imgs}            
            />
            <Pokemon 
              imgs={imgs}            
            />
            <Pokemon 
              imgs={imgs}            
            />
            <Pokemon 
              imgs={imgs}            
            />
            <Pokemon 
              imgs={imgs}            
            />
            
          </div>

        </div>

      </div>
    </>
  );
}

export default Cap9ProyJsV1;