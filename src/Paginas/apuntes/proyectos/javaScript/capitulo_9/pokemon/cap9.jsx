import "./cap9.css";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../../componentes/showOptions/show";


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
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";

function Botones({icono,texto,funcion}) {
  return (  
    <div className="contenedorBotonesPokemonCap9Js">
      <div onClick={funcion}>{icono}</div>
      <p>{texto}</p>
    </div>
  );
}

function Pokemon({
  imgs,
  name,
  type,
  altura,
  peso
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
        <p>nombre: {name}</p>
        <p>tipo: {type}</p>
        <p>altura: {altura}</p>
        <p>peso: {peso}</p>
      </div>
    </div>
  );
}


function Cap9ProyJsV1() {

  const [inputBuscar, setInputBuscar] = useState(''); // esto es el valor del input buscar.
  const [showX, setShowX] = useState(false); // esto es para mostrar la X del buscador.
  const [sugerencias, setSugerencias] = useState([]); // esto almacena las sugerencias de los pokemones.
  const [pokemonBuscado, setPokemonBuscado] = useState(""); // esto es el pokemon que se busco.
  const [avisoErr, setAvisoErr] = useState(false); // esto es el contenedor del error.

  // componentes de la api
  const [pokeBuscados, setPokeBuscados] = useState([]); // estos son los pokpokemones buscados.
  const [pokeRender, setPokeRender] = useState([]); // estos son los pokemones que se iran renderizando.
  const [limitePokemon, setLimitePokemon] = useState(3); // estos son los limites de cuantos pokemones se renderizaran. 
  const [showBuscados, setShowBuscados] = useState(false); // esto es para mostrar los pokemones buscados.
  const [showTodos, setShowTodos] = useState(false); // esto es para mostrar los pokemones renderizados.

  const scrollContentTodos = useRef(); // esto es el selector del contenedor de todos los pokemones renderizados
  const scrollContentBuscados = useRef(); // esto es el selector de los pokemones buscados
  const [scrollPoke1, setScrollPoke1] = useState(0); // esto es el contador del scroll de los pokemones renderizados
  const [scrollPoke2, setScrollPoke2] = useState(0); // esto es el scroll de los pokemones buscados osea el contadoer.
  const screen = useRef(); // esto es la pantalla de la puchadex
  const [mensajeOnOff, setMensajeOnOff] = useState("Encender"); // esto es el mensaje de encendido y apagado.
  const [screenOff, setScreenOff] = useState(true); // esto muestra la pantalla de apagado.
  const [fondoInput, setFondoInput] = useState(""); // aqui recibimos la imagen que pase el usuario
  const [showChangeBack, setShowChangeBack] = useState(false);
  
  // esta funcion se encarga de obtener y mostrar el limpiador del input
  const hundleChange=(e)=>{
    const inputValor = e.target.value;
    setInputBuscar(inputValor);
    inputValor == ''?setShowX(false):setShowX(true)
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
  }, [inputBuscar]);

  // esto se encarga de limpiar el input
  const limpiarBuscador=()=>{
    setInputBuscar('');
    setShowX(false);
  }

  // esta funcion es para hacer la busqueda en las sugerencias
  const sugerenciaBuscar =(e)=>{
    setInputBuscar(e.target.textContent);
    setPokemonBuscado(e.target.textContent)
    buscador(e.target.textContent)
    setSugerencias([])
    setShowTodos(false)
    setShowBuscados(true)
  }
  
  // esto se encarga de buscar cuando se haga click en el boton
  const buscar =()=>{
    buscador(inputBuscar);
    setSugerencias([])
    setShowTodos(false)
    setShowBuscados(true)
  }


  //esta funcion se encarga de renderizar y buscar los pokemones
  function buscador(pokemon) {
    const searchTerm = inputBuscar.trim();
    if (searchTerm !== '') {
      const pokeApi = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      pokeApi.then(e => e.json())
      .then(data => {
        setPokeBuscados(prevPokeBuscados => [
          ...prevPokeBuscados,
          [
            data.sprites.front_default,
            data.name,
            data.types[0].type.name,
            data.height,
            data.weight
          ]
        ]);
      })
      .catch(()=>{
        setAvisoErr(true)
        setTimeout(() => {
          setAvisoErr(false)
        }, 2000);
      })
    }
  }


  // esta funcion genera nuevos pokemones
  const generar = () => {
    setScrollPoke1(0)
    setScrollPoke2(0)
    setShowBuscados(false)
    setShowTodos(true)
    setPokeRender([])
    setLimitePokemon(limitePokemon + 3);
    const enlaceActualizar = `https://pokeapi.co/api/v2/pokemon/?limit=${limitePokemon}`;
  
    fetch(enlaceActualizar)
      .then((response) => response.json())
      .then((data) => {
        const newPokemonData = [];
  
        data.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((pokemonData) => {
              setPokeRender(prevPokeBuscados => [
                ...prevPokeBuscados,
                [
                  pokemonData.sprites.front_default,
                  pokemonData.name,
                  pokemonData.types[0].type.name,
                  pokemonData.height,
                  pokemonData.weight
                ]
              ]);
            });
        });
      });
  };

  
  // esta funcion se encarga de mostrar los pokemones buscados
  const mostrarBuscados=()=>{
    setShowBuscados(true)
    setShowTodos(false)
    setScrollPoke1(0)
    setScrollPoke2(0)
  }

  // esta funcion se encarga de mostrar los pokemones renderizados en todos.
  const mostrarTodos=()=>{
    setShowTodos(true)
    setShowBuscados(false)
    setScrollPoke1(0)
    setScrollPoke2(0)
  }


  // esta funcipn se encarga de hacer scroll
  const scroll = (
    content1,
    content2,
    direccion
  ) => {
    // Obtén las referencias a los elementos de contenido
    const content1Element = content1.current;
    const content2Element = content2.current;
    content1Element.style.overflow = "auto"
    content2Element.style.overflow = "auto"
    setTimeout(() => {
      content1Element.style.overflow = "auto"
      content2Element.style.overflow = "auto"
    }, 5);
  
    // Verifica si se llegó al final del scroll (scrollHeight - clientHeight)
    const isAtEnd1 =
      content1Element.scrollHeight - content1Element.clientHeight <=
      content1Element.scrollTop;
    const isAtEnd2 =
      content2Element.scrollHeight - content2Element.clientHeight <=
      content2Element.scrollTop;
  
    if (direccion === '+' && (!isAtEnd1 || !isAtEnd2)) {
      // Continuar incrementando solo si no se ha llegado al final en ninguno de los contenedores
      const scrollIncrement = 150; // Valor de incremento de scroll
      content1Element.scrollTop += scrollIncrement;
      content2Element.scrollTop += scrollIncrement;
    } else if (direccion === '-') {
      // Continuar decrementando solo si el scroll actual es mayor que 0
      const scrollDecrement = 150; // Valor de decremento de scroll
      content1Element.scrollTop -= scrollDecrement;
      content2Element.scrollTop -= scrollDecrement;
    }
  };
  
  
  
  // esta funcion se encarga de apagar o prender la puchadex
  const onOff=(e)=>{
    if (mensajeOnOff == "Encender") {
      setMensajeOnOff("Apagar");
      setScreenOff(false)
    } else {
      setMensajeOnOff("Encender");
      setScreenOff(true)
    }
  }

  


  return (  
    <>
      <ShowOptions
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="pokemon.css">

  </head>
  <body>

    <div class="contenedorBuscador">
      <div class="contenedorBuscador__input">
        <input type="text" id="buscar">
        <p id="eliminarInput">x</p>
        <button id="btnBuscar">buscar</button>
      </div>
    </div>
    <div id="sugerencias"></div>
    <div class="contenedorSeleccion">
      <button id="btnTodos">todos</button>
      <button id="btnBuscados">buscados</button>
    </div>
    <div class="contenedorErrores">
      <p id="errorParrafo"></p>
    </div>

    <div class="contenedorPokemones" id="contenedorPokemonesId"></div>
    <div class="contenedorPokemonesBuscados" id="pokemonBuscado"></div>
    <div id="cargandoContent">
      <p>cargando...</p>
    </div>

    <button id="btnCargar">mostrar pokemones</button>

    <script src="pokemon.js"></script>
  </body>
</html>`}
        css={`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-image: url("https://th.bing.com/th/id/OIP.2QgQgBmqGYU7WOD3_jwePwHaEK?w=327&h=184&c=7&r=0&o=5&pid=1.7");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
}

.contenedorBuscador{
  top: 0;
  position: fixed;
  width: 100%;
  background-color: #f00;
  z-index: 5;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
}

.contenedorBuscador__input{
  background-color: #fff;
  display: flex;
  border-radius: 1000px;
  overflow: hidden;
}
.contenedorBuscador__input input{
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 4px;
}
.contenedorBuscador__input p{
  font-size: 1.5em;
  cursor: pointer;
  margin-right: 2px;
  margin-top: -3px;
  cursor: pointer;
  display: none;
}
.contenedorBuscador__input button{
  background-color: #00cc29;
  padding: 5px;
  border: none;
  outline: none;
  color: #fff;
}

#sugerencias{
  position: fixed;
  top: 0;
  margin-top: 40px;
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  height: 70%;
  overflow: auto;
  z-index: 4;
}
.suggestion{
  padding: 4px;
  background-color: #fff;
  color: #f00;
  width: 200px;
}
.suggestion:hover{
  background-color: #f00;
  cursor: pointer;
  color: #fff;
  transition-duration: .5s;
}



.contenedorErrores{
  background-color: #f00;
  margin: auto;
  margin-top: 155px;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
}


.contenedorSeleccion{
  position: fixed;
  background-color: #fff;
  width: 250px;
  top: 0;
  margin-top: 55px;
  z-index: 2;
  border-radius: 1000px;
  overflow: hidden;
  display: flex;
}
.contenedorSeleccion button{
  padding: 15px;
  border: none;
  outline: none;
  background-color: #fff;
  width: 100%;
  cursor: pointer;
}
.contenedorSeleccion button:nth-child(1){
  background-color: #f00;
}

.contenedorPokemones{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 120px;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 100px;
  position: absolute;
  top: 0;
  transition-duration: .5s;
}
.contenedorPokemonesBuscados{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 100px;
  position: absolute;
  top: 0;
  transition-duration: .5s;
}
.pokemon{
  display: flex;
  flex-direction: column;
  width: 150px;
  overflow: hidden;
  position: relative;
  transition-duration: .5s;
}
.pokemon:hover{
  transition-duration: .5s;
}
.pokemon:hover > img{
  transform: scale(1.2);
  background-color: #00000055;
  z-index: -1;
  transition-duration: .5s;
}
.pokemon img{
  border: 15px #f00 solid;
  z-index: -1;
  transition-duration: .5s;
  pointer-events: none;
}
.informacion{
  width: 150px;
  height: 120px;
  background-color: #f00;
  overflow: auto;
  padding: 5px;
  color: #fff;
  text-align: center;
}


#btnCargar{
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 1000px;
  width: 100px;
  height: 100px;
  padding: 15px;
  font-size: 1.2em;
  cursor: pointer;
  position: fixed;
  top: 80%;
  margin-bottom: 150px;
  overflow: hidden;
  border: 2px solid #000;
  transition-duration: 1s;
}
#btnCargar:hover{
  transform: rotate(360deg);
  transition-duration: 1s;
}
#btnCargar::after{
  content: "";
  width: 100%;
  height: 50%;
  position: absolute;
  left: 0;
  top: 0%;
  background-color: #f00;
  border-bottom: 4px solid #000;
  z-index: -1;
}

#cargandoContent{
  font-size: 5em;
  margin-bottom: 150px;
  color: #00f;
  display: none;
}`}
        javaScript={`const buscar = document.getElementById("buscar"); // aqui el input
const sugerencias = document.getElementById("sugerencias"); // Elemento donde mostrarás las sugerencias
const btnBuscar = document.getElementById("btnBuscar"); // aqui para buscar al pokemon
const eliminarInput = document.getElementById("eliminarInput"); // aqui para el boton de limpiar el input
const errorParrafo = document.getElementById("errorParrafo"); // esto es para los mensajes de error

const contenedorPokemonesId = document.getElementById("contenedorPokemonesId"); // esto almacenara todos los pokemones.
const btnCargar = document.getElementById("btnCargar"); // esto es el boton para cargar mas pokemones
const cargandoContent = document.getElementById("cargandoContent"); // esto es para mostrar al usuario que estan cargando los pokemones.
const pokemonBuscado = document.getElementById("pokemonBuscado"); // este es el contenedor del pokemon buscado.


const btnTodos = document.getElementById("btnTodos"); // esto es el boton que muestra todos los pokemones.
const btnBuscados = document.getElementById("btnBuscados"); // este es el boton que muestra los pokemones que busco el usuario.

// Manejador de eventos para el campo de entrada de texto
buscar.addEventListener("input", () => {
  const searchTerm = buscar.value.trim();
  const finalString = searchTerm.toLowerCase();
  sugerencias.innerHTML = \'\';

  if (finalString !== \'\') {
    fetch(\`https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0?lang=es\`)
    .then(response => response.json())
    .then(data => {
      const suggestions = data.results.filter(pokemon => pokemon.name.includes(finalString));

      suggestions.forEach(pokemon => {
        const suggestionItem = document.createElement("P");
        const fragmento = document.createDocumentFragment();
        suggestionItem.textContent = pokemon.name;
        suggestionItem.classList.add("suggestion");
      
        suggestionItem.addEventListener("click", () => {
          btnCargar.style.display = "none";
          buscar.value = pokemon.name;
          buscador();
          sugerencias.innerHTML = "";
          sugerencias.style.display = "none"
          errorParrafo.textContent = "";
          pokemonBuscado.style.left = "0%";
          contenedorPokemonesId.style.left = "-100%";
          colorChanges(btnBuscados,btnTodos)
        });
        fragmento.appendChild(suggestionItem)
        sugerencias.appendChild(fragmento);
        sugerencias.style.display = "flex"
      });
    })
    .catch(error => {
      console.error("Hubo un error al obtener sugerencias:", error);
    });
    eliminarInput.style.display = "block";
  } else {eliminarInput.style.display = "none"}
});

btnBuscar.addEventListener("click", ()=>{
  buscador()
  errorParrafo.textContent = "";
  sugerencias.style.display = "none";
  pokemonBuscado.style.left = "0%";
  contenedorPokemonesId.style.left = "-100%";
  colorChanges(btnBuscados,btnTodos)
  btnCargar.style.display = "none";
});

function buscador() {
  const searchTerm = buscar.value.trim();
  if (searchTerm !== \'\') {
    const pokeApi = fetch(\`https://pokeapi.co/api/v2/pokemon/${"${searchTerm}"}\`)
    pokeApi.then(e => e.json())
    .then(data => {
      const nuevoPokemon = crearPokemonElemento(data);
      const fragmento = document.createDocumentFragment();
      fragmento.appendChild(nuevoPokemon);
      pokemonBuscado.appendChild(fragmento);
    })
    .catch(error => {
      errorParrafo.textContent = \`${"${buscar.value}"} no existe , porfavor imtroduzca um pokemon que si exista.\`;  
    });
  }
}


eliminarInput.addEventListener("click",()=>{
  buscar.value = \`\`;
  eliminarInput.style.display = "none";
  sugerencias.innerHTML = "";
  sugerencias.style.display = "none"
});




document.addEventListener("DOMContentLoaded", () => {
  let limitePokemon = 0;

  btnCargar.addEventListener("click", () => {
    btnCargar.textContent = "cargar mas";
    limitePokemon = limitePokemon + 3;
    const enlaceActualizar = \`https://pokeapi.co/api/v2/pokemon/?limit=${"${limitePokemon}"}\`;

    limpiarContenedor();

    fetch(enlaceActualizar)
      .then((response) => response.json())
      .then((data) => {
        if (contenedorPokemonesId.innerHTML == \`\`) {cargandoContent.style.display = "block"}
        setTimeout(()=>cargandoContent.style.display = "none",500);
        const fragment = document.createDocumentFragment();
        data.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((res) => res.json())
            .then(async (res) => {
              const nuevoPokemon = crearPokemonElemento(res);
              fragment.appendChild(nuevoPokemon);
              contenedorPokemonesId.appendChild(fragment)
            })
            .catch((error) => {
              console.error("Hubo un error al obtener los datos del Pokémon:", error);
            });
        });
      })
      .catch((error) => {
        console.error("Hubo un error al obtener la lista de Pokémon:", error);
      });
  });

});



  function limpiarContenedor() {
    while (contenedorPokemonesId.firstChild) {
      contenedorPokemonesId.removeChild(contenedorPokemonesId.firstChild);
    }
  }

  function crearPokemonElemento(res) {
    const nuevoPokemon = document.createElement("DIV");
    nuevoPokemon.classList.add("pokemon");

    const imagen = document.createElement("IMG");
    imagen.src = res.sprites.front_default;

    const informacion = document.createElement("DIV");
    informacion.classList.add("informacion");

    const nombre = document.createElement("P");
    nombre.textContent = "nombre: " + res.name;

    const tipo = document.createElement("P");
    tipo.textContent = "tipo: " + res.types[0].type.name;

    const altura = document.createElement("P");
    altura.textContent = "altura: " + res.height;

    const peso = document.createElement("P");
    peso.textContent = "peso: " + res.weight;

    informacion.appendChild(nombre);
    informacion.appendChild(tipo);
    informacion.appendChild(altura);
    informacion.appendChild(peso);

    nuevoPokemon.appendChild(imagen);
    nuevoPokemon.appendChild(informacion);

    return nuevoPokemon;
  }




btnTodos.addEventListener("click",()=>{
  colorChanges(btnTodos,btnBuscados);
  pokemonBuscado.style.left = "-100%";
  contenedorPokemonesId.style.left = "0%";
  btnCargar.style.display = "block";
})
btnBuscados.addEventListener("click",()=>{
  colorChanges(btnBuscados,btnTodos);
  contenedorPokemonesId.style.left = "-100%";
  pokemonBuscado.style.left = "0%";
  btnCargar.style.display = "none";
})

function colorChanges(rojo,blanco) {
  rojo.style.backgroundColor = "#f00";
  blanco.style.backgroundColor = "#fff";
}`}
      />
      <MensajeModal texto={`¡Proyecto! capitulo 9:

Hacer una puchadex , que diga una pokedex moderna.

Recuerda que aprendimos:
1. JSON.
2. AJAX.
3. fetch.
4. axios.`}/>
      <div className="Page">
        
        <div className="contenedorPageCap9V1Pokemon">

          <div className="contenedorPokemonOpcionesJsCap9">

            {/* esto es el input buscador */}

            <div className="contenedorPokemonOpcionesJsCap9__input">
              <input 
                type="text"
                value={inputBuscar}
                onChange={hundleChange}
                onInput={()=>setShowX(true)}
              />
              {
                showX && <p onClick={limpiarBuscador}>x</p>
              }
              <button onClick={buscar}><FontAwesomeIcon icon={faSearch} /></button>
            </div>

            {/* estas son las sugerencias */}

            <div className="sugerencias">
              {
                sugerencias.map(i=><p onClick={(e)=>sugerenciaBuscar(e)} key={i}>{i}</p>)
              }
            </div>

            {/* estos son los botones de la pokedex */}

            <div className="contenedorPokemonOpcionesJsCap9__botones">
              <div 
                className="contenedorPokemonOpcionesJsCap9__botones__despazamiento"
              >
                <div 
                  className="contenedorPokemonOpcionesJsCap9__botones__despazamiento__enAp"
                >
                  <Botones 
                    icono={<FontAwesomeIcon icon={faPowerOff}/>}
                    texto={mensajeOnOff}
                    funcion={(e)=>onOff(e)}
                  />
                  <Botones 
                    icono={<FontAwesomeIcon icon={faImages}/>}
                    texto={"cambiar fondo"}
                    funcion={()=>setShowChangeBack(!showChangeBack)}
                  />
                </div>
                <Botones 
                  icono={<FontAwesomeIcon icon={faAngleDoubleUp} />} 
                  texto={"arriba"}
                  funcion={()=>scroll(
                    scrollContentBuscados,
                    scrollContentTodos,
                    "-"
                  )}
                />
                <div  
                  className="contenedorPokemonOpcionesJsCap9__botones__despazamiento__izDer"
                >

                  <Botones 
                    icono={<FontAwesomeIcon icon={faAngleDoubleLeft} />} 
                    texto={"inicio"}
                    funcion={()=>{
                      scrollContentBuscados.current.scrollTop = 0
                      scrollContentTodos.current.scrollTop = 0
                    }}
                  />
                  <Botones 
                    icono={<FontAwesomeIcon icon={faAngleDoubleRight} />} 
                    texto={"final"}
                    funcion={()=>{
                      scrollContentBuscados.current.scrollTop = scrollContentBuscados.current.scrollHeight
                      scrollContentTodos.current.scrollTop = scrollContentTodos.current.scrollHeight
                    }}
                  />
                </div>
                <Botones 
                  icono={<FontAwesomeIcon icon={faAngleDoubleDown} />} 
                  texto={"abajo"}
                  funcion={()=>scroll(
                    scrollContentBuscados,
                    scrollContentTodos,
                    "+"
                  )}
                />
              </div>
              <div 
                className="contenedorPokemonOpcionesJsCap9__botones__opciones"
              >

                <Botones 
                  icono={<FontAwesomeIcon icon={faClipboardList} />} 
                  texto={"todo"}
                  funcion={mostrarTodos}
                />
                <Botones 
                  icono={<FontAwesomeIcon icon={faClock} />} 
                  texto={"historial"}
                  funcion={mostrarBuscados}
                />
                <Botones 
                  icono={"+"} 
                  texto={"generar mas"} 
                  funcion={generar}
                />
              </div>

            </div>
            
          </div>

          <div ref={screen} className="contenedorPageCap9V1Pokemon__pokemones">
            
            {/* esto es la pantalla de encendido y apagado */}
            
            <div 
              className={`contenedorPageCap9V1Pokemon__pokemonesscrennOnOff ${screenOff ?             "contenedorPageCap9V1Pokemon__pokemonesscreenOff":
              "contenedorPageCap9V1Pokemon__pokemonesscreenOn"}`}
            >
            </div>
            
            {/* esto es el input que se encarga de cambiar el background */}

            {
              showChangeBack && <div className="cap9JsPokemon__cambiarFondo">
                <input 
                  type="text" 
                  onChange={(e)=>setFondoInput(e.target.value)}
                  value={fondoInput}
                  placeholder="link de tu imagen"
                />
                <p onClick={()=>setFondoInput("")}>x</p>
                <button onClick={()=>{
                  screen.current.style.backgroundImage = `url("${fondoInput}")`
                  setShowChangeBack(false)
                }}>usar</button>
              </div>
            }

            <div ref={scrollContentBuscados} className={`contenedorPageCap9V1Pokemon__pokemonesRenderizados ${
              showBuscados ?
              "contenedorPageCap9V1Pokemon__pokemonesBuscados"
              :
              "contenedorPageCap9V1Pokemon__pokemonesBuscadosHide"
            }`}>
              {
                pokeBuscados.map((i,llave)=><Pokemon
                  key={llave}
                  imgs={i[0]}
                  name={i[1]}
                  type={i[2]}
                  altura={i[3]}
                  peso={i[4]}
                />)
              }
            </div>
            
            <div ref={scrollContentTodos} className={`contenedorPageCap9V1Pokemon__pokemonesRenderizados ${
              showTodos ? 
              "contenedorPageCap9V1Pokemon__pokemonesTodos":
              "contenedorPageCap9V1Pokemon__pokemonesTodosHide"
            }`}>
              {
                pokeRender.map((i,llave)=><Pokemon
                  key={llave}
                  imgs={i[0]}
                  name={i[1]}
                  type={i[2]}
                  altura={i[3]}
                  peso={i[4]}
                />
                )
              }
            </div>



            <div className={`contenedorPageCap9V1Pokemon__error ${avisoErr ? "":"contenedorPageCap9V1Pokemon__errorHide"}`}>
              <p>{inputBuscar} no existe</p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            
          </div>

        </div>

      </div>
    </>
  );
}

export default Cap9ProyJsV1;