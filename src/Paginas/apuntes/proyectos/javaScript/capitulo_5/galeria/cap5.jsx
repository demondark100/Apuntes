import Volver from "../../../../../../componentes/volver/volver";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Html from "../../../../../../componentes/lenguajes/Html";
import Css from "../../../../../../componentes/lenguajes/Css";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";

import "./cap5.css";

import { useEffect, useRef, useState } from "react";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

// este componente muestra los iconos
function MostrarIconos({ icono, texto, funcion }) {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter=()=> setShowText(true);
  const handleMouseOut=()=>setShowText(false)

  return (
    <div className="contenedorIconosGaleriaCap5Js">
      <div
        onClick={funcion}
        onMouseMove={handleMouseEnter}
        onMouseOut={handleMouseOut}
      >{icono}</div>
      <p className={`contenedorIconosGaleriaCap5Js__texto ${showText ? "" : "contenedorIconosGaleriaCap5Js__textoHide"}`}>{texto}</p>
    </div>
  );
}



// este componente muestra el editor de filas y columnas
function PrimerEditor({
  mostrarEditor,
  input1,
  input2,
  funcion,
  texto
}){
  
  const [showDescripcion, setShowDescripcion] = useState(false);

  return(
    <div className="editorFilasColumnasCap5JsContenedor">
      <div className="editorFilasColumnasCap5JsContenedor__botones">
        <button
          onMouseMove={()=>{
            setShowDescripcion(true)
          }}
          onMouseOut={()=>{
            setShowDescripcion(false)
          }}
        ><FontAwesomeIcon icon={faInfoCircle} /></button>
        <button onClick={()=>mostrarEditor(false)}>X</button>
      </div>

      {
        showDescripcion && <p>{texto}</p>
      }
      <div className="editorFilasColumnasCap5JsContenedor__inputs">
        <input 
          type="number"
          placeholder="columnas"
          onChange={(e)=>input1(e.target.value)}
        />
        <input 
          type="number"
          placeholder="filas"
          onChange={(e)=>input2(e.target.value)}
        />
      </div>
      <button 
        className="editorFilasColumnasCap5JsContenedor__botonCrear"
        onClick={funcion}
      >crear</button>
    </div>
  )
}

// esto es para poner las medidas de las imagenes
function Medidas({
  tipoDeMedida1,
  tipoDeMedida2,
  mostrarEditor,
  setCantidadMedida1,
  setCantidadMedida2,
  obtenerMedidas
}){
  const [showDescipcion, setShowDescipcion] = useState(false);
  return(
    <div className="editorMedidasCap5JsContenedor">
      <div className="editorMedidasCap5JsContenedor__botonesContent">
        <button
          onMouseMove={()=>{
            setShowDescipcion(true)
          }}
          onMouseOut={()=>{
            setShowDescipcion(false)
          }}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>
        <button
          onClick={()=>{
            mostrarEditor(false)
          }}
        >
          X
        </button>
      </div>

      {
        showDescipcion && <p>{`Ingresa cuanto mediran tus columnas y tus filas de tu galeria.`}</p>
      }

      <div className="contenedorEditorInputsCap5JsMedidas">
        
        <div className="contenedorEditorInputsCap5JsMedidas__input">
          <input 
            type="number" 
            placeholder="columnas"
            onChange={(e)=>setCantidadMedida1(e.target.value)}
          />
          <select
            defaultValue={"fr"}
            onChange={(e)=>tipoDeMedida1(e.target.value)}
          >
            <option value="px">px</option>
            <option value="em">em</option>
            <option value="fr">fr</option>
            <option value="cm">cm</option>
            <option value="rem">rem</option>
            <option value="pt">pt</option>
          </select>
        </div>

        <div className="contenedorEditorInputsCap5JsMedidas__input">
          <input 
            type="number"
            placeholder="filas"
            onChange={(e)=>setCantidadMedida2(e.target.value)}
          />
          <select
            defaultValue={"fr"}
            onChange={(e)=>tipoDeMedida2(e.target.value)}
          >
            <option value="px">px</option>
            <option value="em">em</option>
            <option value="fr">fr</option>
            <option value="cm">cm</option>
            <option value="rem">rem</option>
            <option value="pt">pt</option>
          </select>
        </div>
      
      </div>


      <button onClick={obtenerMedidas} className="contenedorEditorInputsCap5JsMedidas__boton">usar medidas</button>
    </div>
  )
}

// este es el componente para poner el area de cada grisha
function AreaComponent({
  imagenes,
  setShowArea
}){


  const imagenesArea = document.querySelectorAll(".contenedorGaleriaCap5Js__Lienzo__grid img");
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [mostrarDescriptcion, setMostrarDescriptcion] = useState(false);
  useEffect(()=>{
    if (imagenes == 0) {
      setMostrarComponente(true)
    } else {
      setMostrarComponente(false)
    }
  })
  const [filas1, setFilas1] = useState("");
  const [filas2, setFilas2] = useState("");
  const [columnas1, setColumnas1] = useState("");
  const [columnas2, setColumnas2] = useState("");
  

  const crearAreas=(posision)=>{
    imagenesArea[posision].style.gridColumn = `${columnas1}/span ${columnas2}`
    imagenesArea[posision].style.gridRow = `${filas1}/span ${filas2}`
    if(filas1 == ""){
      imagenesArea[posision].style.gridRow = `auto`
    } else if(filas2 == ""){
      imagenesArea[posision].style.gridRow = `auto`
    } else if(columnas1 == ""){
      imagenesArea[posision].style.gridColumn = `auto`
    } else if(columnas2 == ""){
      imagenesArea[posision].style.gridColumn = `auto`

    }
  }

  return(
    <div className="contenedorAreaCap5JsV3">
      <div className="contenedorAreaCap5JsV3__botonesContent">
        <button
          onMouseMove={()=>{
            setMostrarDescriptcion(true)
          }}
          onMouseOut={()=>{
            setMostrarDescriptcion(false)
          }}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>
        <button
          onClick={()=>setShowArea(false)}
        >
          X
        </button>
      </div>
      {
        mostrarDescriptcion && <p className="contenedorAreaCap5JsV3__descripcion">{`ingresa cuanto espacio ocuparan las imagenes.
Instrucciones:
    1       /       3
 desde       hasta
 donde      donde
 inicia      tremina
  `}</p>
      }
      {
        mostrarComponente && <p className="contenedorAreaCap5JsV3__error">No hay imagenes</p>
      }
      <button 
        className="contenedorAreaCap5JsV3__reiniciarTodo"
        onClick={()=>{
          imagenesArea.forEach(i=>{
            i.style.gridColumn = `auto`
            i.style.gridRow = `auto`
          })
        }}
      >reiniciar todo</button>
      {
        imagenes.map(i=>(
          <div
            className="contenedorAreaCap5JsV3__inputs__areas"
            onMouseMove={()=>{
              imagenesArea[i.key].style.filter = "brightness(3)";
              imagenesArea[i.key].style.backgroundColor = "#201e1e";
            }}
            onMouseOut={()=>{
              imagenesArea[i.key].style.filter = "none"
              imagenesArea[i.key].style.backgroundColor = "transparent";
              
            }}
          >
            {

            }
            <p className="contenedorAreaCap5JsV3__inputs__areas__input__texto">{`Imagen n${parseInt(i.key) + 1}`}</p>
            <label>columnas</label>
            <div className="contenedorAreaCap5JsV3__inputs__areas__input">
              <input 
                type="number" 
                onChange={(e)=>setColumnas1(e.target.value)}
              /> 
              <b>/</b> 
              <input 
                type="number" 
                onChange={(e)=>setColumnas2(e.target.value)}
              />
            </div>
            <label>filas</label>
            <div className="contenedorAreaCap5JsV3__inputs__areas__input">
              <input 
                type="number" 
                onChange={(e)=>setFilas1(e.target.value)}
              /> 
              <b>/</b> 
              <input 
                type="number" 
                onChange={(e)=>setFilas2(e.target.value)}
              />
            </div>
            <div className="contenedorAreaCap5JsV3__botonesExtra">
              <button onClick={()=>crearAreas(i.key)}>crear espacio</button>
              <button
                onClick={()=>{
                  imagenesArea[i.key].style.gridColumn = `auto`;
                }}
              >reiniciar columna</button>
              <button
                onClick={()=>{
                  imagenesArea[i.key].style.gridRow = `auto`;
                }}
              >reiniciar fila</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}


const PonerImagen=({
  imagenes,
  setShowImageUrl
})=>{
  const [ulrImagen, setUlrImagen] = useState("");
  const imagenesDOM = document.querySelectorAll(".contenedorGaleriaCap5Js__Lienzo__grid img");
  const [showDescripcion, setShowDescripcion] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);

  const usar = (posision) => {
    imagenesDOM[posision].setAttribute("src", ulrImagen);
    setUlrImagen("")
  };
  useEffect(()=>{
    if (imagenes.length == 0) {
      setMostrarError(true);
    } else{
      setMostrarError(false)
    }
  })
  
  return(
    <div className="contenedorURLImageCap5V3">
      <div className="contenedorURLImageCap5V3__botonesContent">
        <button
          onMouseMove={()=>setShowDescripcion(true)}
          onMouseOut={()=>setShowDescripcion(false)}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>
        <button
          onClick={()=>setShowImageUrl(false)}
        >
          X
        </button>
      </div>
        {
          showDescripcion && <p className="contenedorURLImageCap5V3__descripcion">aqui debes poner las URL de las imagenes , para ello busca una image y selecciona la opcion "copiar vinculo de imagen".</p>
        }
        {
          mostrarError && <p className="contenedorURLImageCap5V3__error">No se han creado las columnas o las filas</p>
        }
      <div>

        {
          imagenes.map(i=>(
            <div 
              onMouseMove={()=>{
                imagenesDOM[i.key].style.filter = "brightness(3)";
                imagenesDOM[i.key].style.backgroundColor = "#201e1e";
              }}
              onMouseOut={()=>{
                imagenesDOM[i.key].style.filter = "none"
                imagenesDOM[i.key].style.backgroundColor = "transparent";
              }}
              className="contenedorURLImageCap5V3__content"
            >
              <p>{`URL de la imagen numero:${parseInt(i.key) + 1}`}</p>
              <div className="contenedorURLImageCap5V3__content__input">
                <input 
                  type="text"
                  defaultValue={""}
                  onChange={(e)=>setUlrImagen(e.target.value)} 
                />
                <button
                  onClick={()=>usar(i.key)}
                >
                  usar imagen
                </button>
              </div>
            </div>
          ))

        }
      </div>
    </div>
  )
}




// este componente es para agregar las imagenes


function Cap5ProyJsV3() {

  // esto es para mostrar y quitar la barrita
  const [showBarrita, setShowBarrita] = useState(true);


  // todo esto es la progrmacion del editor de filas y columnas
  const [showEditorCOlFil, setShowEditorCOlFil] = useState(false); // muestra el editor de filas y columnas.
  const [filas, setFilas] = useState(""); // esto almacenara cuantas filas tendra grid
  const [columnas, setColumnas] = useState(""); // esto almacenara cuantas columnas tendra grid.
  const [imagenes, setImagenes] = useState([]);

  const contenedorGrid = useRef(null);
  const crearGrid=()=>{
    let imagenesArr = [];

    let cantidad = columnas * filas;
    for (let i = 0; i < cantidad; i++) {
      imagenesArr.push(<img key={i} alt="ingresa la URL de una imagen."/>)
    }
    setImagenes(imagenesArr)
  }
  
  


  // todo esto es la funcionalidad de las medidas
  const [showMedidas, setShowMedidas] = useState(false); // esto es el componente que muestra o oculta el editor de las medidas.
  const [tipoMedida1,setTipoMedida1] = useState("fr"); // aqui guardaremos el tipo de medida que tendra las filas y columnas
  const [tipoMedida2,setTipoMedida2] = useState("fr");
  const [cantidadMedida1, setCantidadMedida1] = useState(1); // aqui guardamos la medida en numero
  const [cantidadMedida2, setCantidadMedida2] = useState(1);
  const [columnaMedidaReal, setColumnaMedidaReal] = useState("1fr"); // esta sera la medida final
  const [filasMedidaReal, setFilasMedidaReal] = useState("1fr");

  const obtenerMedidas=()=>{
    if(cantidadMedida1 == ""){
      setColumnaMedidaReal("1fr");
    } else if(cantidadMedida2 == ""){
      setFilasMedidaReal("1fr");
    } else {
      setColumnaMedidaReal(`${cantidadMedida1}${tipoMedida1}`)
      setFilasMedidaReal(`${cantidadMedida2}${tipoMedida2}`)
    }
  }


  const [showArea, setShowArea] = useState(false); // esto sera para mostrar o ocultar el editor de area.
  

  // const [esto es para poner las url de las imagenes, setesto es para poner las url de las imagenes] = useState();

  const [showImageUrl, setShowImageUrl] = useState(false);



  useEffect(()=>{
    contenedorGrid.current.style.gridTemplateColumns = `repeat(${columnas},${columnaMedidaReal})`;
    contenedorGrid.current.style.gridTemplateRows = `repeat(${filas},${filasMedidaReal})`;
  })




  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 5

Hacer un editor de galeria , que tambien funciones como editor de grid.`}/>
      <CodigoFuenteSinInt 
        codigo={<Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <title>editor de grid</title>
    <link rel="stylesheet" href="editorGrid.css">
        
  </head>
  <body>
        
        
    <div class="galeria_contenedor"></div>
        
        
    <script src="editorGrid.js"></script>
  </body>
</html>`}/>}
        codigo2={<Css codigo={`.galeria_contenedor{
  display: grid;
  border: 2px solid #000;
  width: 550px;
  margin: auto;
  grid-gap: 15px;
  grid-column-gap: 25px;
  justify-content: center;
}
.contenedorImage{
  border: 2px solid #000;
  width: 100%;
  height: 100%;
}
.imagenIMG{
  object-fit: cover;
  width: 100%;
  height: 100%;
}`}/>}
        codigo3={<JavaScropt codigo={`
alert("¡Programa una galeria desde 0!")
let columnas = prompt("¿Cuantas columnas tendra tu galeria?");
let filas = prompt("¿Cuantas filas tendra tu galeria?");
let medidaColumnas = prompt(\`¿Cuanto medira cada columna?
instrucciones:
Debes poner los valores en px: ejemplo "150px".
Tambien puedes poner el valor de forma dinamica: "1fr".
Puedes poner la medida que gustes\`);
let medidaFilas = prompt(\`¿Cuanto medira cada fila?
instrucciones:
Debes poner los valores en px: ejemplo "150px".
Tambien puedes poner el valor de forma dinamica: "1fr".
Puedes poner la medida que gustes.\`);


while(isNaN(columnas)){
	columnas = prompt("¿Cuantas columnas tendra tu galeria?");
}

while(isNaN(filas)){
	filas = prompt("¿Cuantas filas tendra tu galeria?");
}

function contieneNumero(cadena) {
  return /\d/.test(cadena);
}

function medidaDefault(variable){
	let medidaActualizada = variable;
	const medidas = ["fr","px","rem","em","cm","pt"];
	for(let i in medidas){
		if(variable.includes(medidas[i])){
			medidaActualizada = variable
	 		return medidaActualizada
		}
	}
	if (contieneNumero(variable) === false) {
    	alert("Como no pusiste un valor válido, la medida será de 1fr");
    	medidaActualizada = "1fr";
  	} else {
    	alert("Como no pusiste un valor válido, la medida será de 1fr");
    	medidaActualizada = "1fr";
  	}
	return medidaActualizada;
}
medidaColumnas = medidaDefault(medidaColumnas);
medidaFilas = medidaDefault(medidaFilas);

const galeria_contenedor = document.querySelector(".galeria_contenedor");
galeria_contenedor.style.gridTemplateColumns = \`repeat(${columnas},${"${medidaColumnas}"})\`

const fragmento = document.createDocumentFragment();

let cantidad = parseInt(columnas) * parseInt(filas);
let imagenes = "";
let espacioColumnas = "";
let espacioFilas = "";

function agregarSpan(palabra) {
  palabra = palabra.split("");

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "/") {
      palabra.splice(i, 1, "/", "span");
    }
  }

  palabra = palabra.join("");
}

for(let i = 0;i < cantidad; i++){
	imagenes = prompt(\`Ingrese la URL de la imagen n${"${i + 1}"}\`);
	espacioColumnas = prompt(\`¿Que espacio de ancho tendra la imagen n${"${i + 1}"}?:
instrucciones: aqui debes poner cuantos cuadrados de ancho quieres que ocupe la imagen.
ejemplo: 1/2
1: representa desde que cuadrado inicia.
2: representa cuantos cuadrados ocupara.
En resumen debes poner cuanto espacio quieres que ocupe.\`)
	espacioFilas = prompt(\`¿Que espacio de alto tendra la imagen n${"${i + 1}"}?:
instrucciones: aqui debes poner cuantos cuadrados de alto quieres que ocupe la imagen.
ejemplo: 1/2
1: representa desde que cuadrado inicia.
2: representa cuantos cuadrados ocupara.
En resumen debes poner cuanto espacio quieres que ocupe.\`);
	agregarSpan(espacioColumnas);
	agregarSpan(espacioFilas);

	const div = document.createElement("DIV");
	const img = document.createElement("IMG");
	div.classList.add(\`contenedorImage${"${i + 1}"}\`);
	div.style.gridColumn = \` ${"${espacioColumnas}"}\`;
	div.style.gridRow = \` ${"${espacioFilas}"}\`;
	img.classList.add(\`imagenIMG\`);
	img.setAttribute("src",imagenes)
	img.setAttribute("alt","No proporcionaste esta imagen")
	div.appendChild(img);
	fragmento.appendChild(div);
	galeria_contenedor.appendChild(fragmento)
}

// aqui el link de una imagen para que juegues al programar tu galeria
// https://th.bing.com/th?id=OIP._SmMHO7XOBUr7AOYFbi0zgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2
`}/>}
      />
      <Volver link={"../"}/>
      <div className="Page">

      <div className={`contenedorGaleriaCap5Js__barraEditora ${showBarrita ? "":"contenedorGaleriaCap5Js__barraEditoraHide"}`}>
        <div 
          className={`contenedorGaleriaCap5Js__barraEditora__icono1 ${showBarrita ? "":"contenedorGaleriaCap5Js__barraEditora__icono1Ip"}`}
          onClick={()=>setShowBarrita(!showBarrita)}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <MostrarIconos 
          icono={<FontAwesomeIcon icon={faTable} />} 
          texto={"filas y columnas"}
          funcion={()=>{
            setShowEditorCOlFil(!showEditorCOlFil);
            setShowMedidas(false);
            setShowArea(false);
            setShowImageUrl(false)
          }}
        />

        <MostrarIconos 
          icono={<FontAwesomeIcon icon={faImage} />} 
          texto={"agregar imagenes"}
          funcion={()=>{
            setShowImageUrl(!showImageUrl)
            setShowArea(false)
            setShowEditorCOlFil(false);
            setShowMedidas(false);
          }}
        />

        <MostrarIconos 
          icono={<FontAwesomeIcon icon={faRuler} />} 
          texto={"medidas"}
          funcion={()=>{
            setShowMedidas(!showMedidas);
            setShowEditorCOlFil(false);
            setShowArea(false)
            setShowImageUrl(false)
          }}
        />

        <MostrarIconos 
          icono={<FontAwesomeIcon icon={faSquare} />}
          texto={"Area"}
          funcion={()=>{
            setShowArea(!showArea)
            setShowEditorCOlFil(false);
            setShowMedidas(false);
            setShowImageUrl(false)
          }}
        />



      </div>

        <div className={`contenedorGaleriaCap5Js ${showBarrita ? "":"contenedorGaleriaCap5JsMove"}`}>
          
          {/* esto es para crear las filas y columnas */}
          {
            showEditorCOlFil && <PrimerEditor 
              mostrarEditor={setShowEditorCOlFil} // enviamos la varaible de estado para quitar el editor
              input1={setColumnas}
              input2={setFilas}
              funcion={crearGrid}
              texto={"Ingresa cuantas filas y columnas deseas que tenga tu galeria."}
            />
          }
          {/* esto es para poner las medidas */}
          {
            showMedidas && <Medidas 
              tipoDeMedida1={setTipoMedida1}
              tipoDeMedida2={setTipoMedida2}
              mostrarEditor={setShowMedidas}
              setCantidadMedida1={setCantidadMedida1}
              setCantidadMedida2={setCantidadMedida2}
              obtenerMedidas={obtenerMedidas}
            />
          }
          {/* esto es para poner renderizar el componente para poner las areas */}
          {
            showArea && <AreaComponent
              imagenes={imagenes}
              setShowArea={setShowArea}
            />
          }
          {/* esto es para poner las url de las imagenes */}
          {
            showImageUrl && <PonerImagen 
              imagenes={imagenes}
              setShowImageUrl={setShowImageUrl}
            />
          }

          <div className="contenedorGaleriaCap5Js__Lienzo">
            <div ref={contenedorGrid} className="contenedorGaleriaCap5Js__Lienzo__grid">
              {imagenes}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cap5ProyJsV3;