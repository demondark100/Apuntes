import "./cap11.css";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../../componentes/showOptions/show";


import React, { useState, useEffect,useRef } from 'react';



// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const AutoExpandingInput = ({
  variable,nota,setValueEx
}) => {
  const [value, setValue] = useState('');
  const [rows, setRows] = useState(1);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the new height
  }, [value]);

  const handleChange = (event) => {
    const lines = event.target.value.split('\n').length;
    setValue(event.target.value);
    setRows(lines >= 5 ? 5 : lines); // Limit to 5 rows
    variable(event.target.value);
  };

  useEffect(()=>{
    setValueEx(setValue)
  })

  return (
    <textarea
      placeholder="Nota"
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      rows={rows}
      style={{ resize: 'none', overflowY: 'hidden' }}
    />
  );
};



function Tareas({
  title,
  note,
  mostrarApuntes,
  confirmar
}) {

  const [newTitle, setNewTitle] = useState(``);
  const [newText, setNewText] = useState(``);
  useEffect(()=>{
    if (note.length >= 15) {
      setNewText(note.slice(0,15) + "...");
    } else{
      setNewText(note)
    }
    if (title.length >= 15) {
      setNewTitle(title.slice(0,15) + "...");
    } else{
      setNewTitle(title);
    }
  })

  return(
    <div className="contentCap11V3JsTreas">
      <div className="contentCap11V3JsTreasInfo">
        <h4>{newTitle}</h4>
        <p>{newText}</p>
      </div>
      <div className="contentCap11V3JsTreasBtn">
        <button onClick={mostrarApuntes}><FontAwesomeIcon icon={faAngleDown}/></button>
        <button onClick={confirmar}>X</button>
      </div>
    </div>
  )
}


function Borrar({
  estado,
  cambiarEstado,
  funcion,
  mensaje
}){
  return(
    <div className={`contentCap11V3JsDelete ${estado ? "":
      "contentCap11V3JsDeleteHide"
    }`}>
      <div className="contentCap11V3JsDeleteContent">
        <p>{mensaje}</p>
        <div className="contentCap11V3JsDeleteContentBtn">
          <button onClick={funcion}>Si</button>
          <button
            onClick={()=>cambiarEstado(false)}
          >No</button>
        </div>
      </div>
    </div>
  )
}


function Cap11ProyV3() {
  
  const [titulo, setTitulo] = useState(``); // esto guardara el titulo
  const [nota, setNota] = useState(``); // esto guardara la nota que el usuario ponga.
  const [showDeleteAll, setShowDeleteAll] = useState(false); // este componente se encarga de mostrar si el usuario quiere eliminar todas las notas.
   const [datos, setDatos] = useState(JSON.parse(localStorage.getItem("miniBase")) || []); // estos son los datos de la base mde datos.
  // estos dos son para mostrar los errores por si falta algun dato
    const [err1, setErr1] = useState(false);
    const [err2, setErr2] = useState(false);
  const [showComplete, setShowComplete] = useState(false); // esto es para mostrar los apuntes completos.
  // estas variables es para mostrar el titulo y la nota completa.
    const [tituloCompleto, setTituloCompleto] = useState("");
    const [notaCompleta, setNotaCompleta] = useState("");
  const [valueEx, setValueEx] = useState(``); // esto se encarga de eliminar el input de notas.
  const [showDeleteOne, setShowDeleteOne] = useState(false); // esto es para mostrar el componente para eliminar solo uno xd
  const [posision, setPosision] = useState(0); // esto es para tener la indexacion de cada elemento renderizado.
  // esto es para las modificaciones.
    const titleMod = useRef(null);
    const parrMod = useRef(null);

  const [showCheck, setShowCheck] = useState(false); // esto es para mostrar el boton para hacer las ediciones.
  const [btnDelete, setBtnDelete] = useState(false);  // esto es para que se muestre o se oculte el boton para borrar toda la base de datos.
  const [showSave, setShowSave] = useState(false); // esto es para preguntar si quiere salir sin haber guardado los cambios de la edicion.
  const [activeChange, setActiveChange] = useState(false); // esto es para saber si el usuario le dio a editar.

  const enviar=()=>{
    if (titulo == ``) {
      setErr1(true);
      setTimeout(() =>setErr1(false), 4000);
    } else if(nota == ``){
      setErr2(true);
      setTimeout(() =>setErr2(false), 4000);
    } else {
      setTitulo(``);
      setNota(``);
      setValueEx(``);
      const nuevosDatos = [...datos, {
        "titulo": titulo,
        "nota": nota
      }];
      setDatos(nuevosDatos);
    }
  }

  // esta funcion se encarga de borrar toda la base de datos.
  const borrarTodo=(index)=>{
    setShowDeleteAll(false)
    // localStorage.removeItem("miniBase");
    setDatos([]);
  }

  // esta funcion se encarga de mostrar los apuntes completos.
  const mostrarApuntes=(index)=>{
    setShowComplete(true);
    setTituloCompleto(datos[index].titulo);
    setNotaCompleta(datos[index].nota);
    setPosision(index);
  }

  // esta funcion se encarga de eliminar solo una nota , la que en usuario elija
  const borrarNota = () => {
    let newDato = [...datos];
    newDato.splice(posision, 1);
    setDatos(newDato);
    setShowDeleteOne(false)
  }
  
  // esto es para confirmar si quiere eliminar un elemento.
  const confirmar=(index)=>{
    setShowDeleteOne(true)
    setPosision(index)
  }

  // esto se encarga de poner los parametros para poder editar
  const activarEdicion=()=>{
    let titulo = titleMod.current;
    let parrafo = parrMod.current;
    titulo.setAttribute("contentEditable","true");
    parrafo.setAttribute("contentEditable","true");
    titulo.style.backgroundColor = "#1d1f1d";
    parrafo.style.backgroundColor = "#1d1f1d";
    setShowCheck(true);
    setActiveChange(true);
  }

  // esto es la edicion final.
  const editar=()=>{
    let newData = [...datos];
    let titulo = titleMod.current;
    let parrafo = parrMod.current;
    
    if (titulo.textContent == `` || parrafo.textContent == ``) {
      setShowCheck(true);
    } else {
      titulo.setAttribute("contentEditable","false");
      parrafo.setAttribute("contentEditable","false");
      titulo.style.backgroundColor = "transparent";
      parrafo.style.backgroundColor = "transparent";
      newData[posision].titulo = titulo.textContent;
      newData[posision].nota = parrafo.textContent;
      setDatos(newData);
      setShowCheck(false);
      setActiveChange(false);
    }
  }

  // esto es para cerrar los apuntes.
  const cerrarApuntesCompleto=()=>{
    if (activeChange) {
      setShowSave(true);
    } else {
      setShowComplete(false);
      setShowSave(false);
      let titulo = titleMod.current;
      let parrafo = parrMod.current;
      titulo.style.backgroundColor = "transparent";
      parrafo.style.backgroundColor = "transparent";
    }
  }

  // esto es para guardar los cambios
  const salirSinGuardar=()=>{
    setShowComplete(false);
    setShowSave(false);
    let titulo = titleMod.current;
    let parrafo = parrMod.current;
    titulo.style.backgroundColor = "transparent";
    parrafo.style.backgroundColor = "transparent";
    titulo.setAttribute("contentEditable","false");
    parrafo.setAttribute("contentEditable","false");
    titulo.textContent = datos[posision].titulo;
    parrafo.textContent = datos[posision].nota;
    setShowCheck(false);
  }

  useEffect(()=>{
    localStorage.setItem("miniBase",JSON.stringify(datos));
    datos.length >= 2 ? setBtnDelete(true):setBtnDelete(false);
  })


  return (  
    <>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="notas.css">
    <script src="https://kit.fontawesome.com/7e204a84d0.js" crossorigin="anonymous"></script>
  </head>
  <body>


    <div class="contenedor">

      <div class="contenedorSend">
        <div class="contenedorSendContent">
          <form class="contenedorSendForm">
            <input 
              type="text"
              placeholder="Titulo" 
              class="titleInput" 
            >
            <p id="err1">debes poner el titulo a tus apuntes.</p>
            <textarea 
              placeholder="Tarea"
              class="tareaInput" 
            ></textarea>
            <p id="err2">debes poner algo en los apuntes.</p>
          </form>
          <button class="btnEnviar"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </div>

      <div class="contenedorTares">

<!-- 
        la estructura que se creara con el DOM en javaScript segun sea la longitud del arreglo.
-->
 
 <!-- 				
        <div class="contenedorTaresTarea">
          <div>
            <p>el titulo</p>
            <p>la tarea para realizar</p>
          </div>
          <button><i class="fa-solid fa-trash"></i></button>
        </div> 
-->

      </div>
    </div>



    <script src="notas.js"></script>
  </body>
</html>`}
        css={`body{
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg,#baeffd,#61e3e5);
  background-repeat: no-repeat;
}

.contenedor{
  margin-top: 15px;
  width: 250px;
  max-height: 500px;
  background-color: #0fb7e6;
  overflow: auto;
  padding-bottom: 15px;
}

.contenedorSend{
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.contenedorSendContent{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #80d9ff;
  width: 85%;
  gap:5px;
  padding: 8px;
  border-radius: 5px;
}
.contenedorSendForm{
  display: flex;
  flex-direction: column;
}
.contenedorSendForm input{
  border-radius: 100px;
  padding-left: 8px;
}
.contenedorSendForm textarea{
  margin-top: 8px;
  border-radius: 8px;
  height: 100px;
}
input,button,textarea{
  border: none;
  outline: none;
}
.btnEnviar{
  width: 100%;
  cursor: pointer;
}

.contenedorTares{
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 15px;
  gap: 15px;
}

.contenedorTaresTarea{
  display: flex;
  align-items: center;
  width: 100%;
}
.contenedorTaresTarea button{
  padding: 8px;
  height: 50%;
  margin-left: 8px;
  cursor: pointer;
}
.contenedorTaresTarea div{
  max-height: 500px;
  overflow: auto;
  background-color: #fff;
  width: 100%;
  padding: 0;
}
.contenedorTaresTarea div p{
  padding: 8px;
  white-space: pre-wrap;
  margin: 0;
}
.contenedorTaresTarea div p:nth-child(1){
  color: #f00;
  text-align: center;
  border-bottom: 2px solid #f00;
}

#err1 , #err2{
  color: #f00;
  margin: 0;
  font-size: .8em;
  display: none;
}`}
        javaScript={`const btnEnviar = document.querySelector(".btnEnviar");  // esto es el boton para enviar los datos y guardarlos.
const titleInput = document.querySelector(".titleInput");  // esto es el titulo del nuestro input.
const tareaInput = document.querySelector(".tareaInput");  // esto es la tarea de un textarea.

const contenedorTares = document.querySelector(".contenedorTares"); // esto es el contenedor de las tareas que se guardaran.
// estas dos variables son para mostrar los posibles errores.
  const err1 = document.getElementById("err1");
  const err2 = document.getElementById("err2");

let borrarBtn = []; // esto es el boton para borrar algun elemento.



let datos = JSON.parse(localStorage.getItem("lista")) || [];


function crearDatosDom(data) {
  contenedorTares.innerHTML = \`\`;
  borrarBtn = [];

  data.forEach((i) => {
    const fragment = document.createDocumentFragment();
    const contenedorTaresTarea = document.createElement("div");
    contenedorTaresTarea.classList.add("contenedorTaresTarea");
    const div = document.createElement("div");
    const title = document.createElement("p");
    const homework = document.createElement("p");
    const borrar = document.createElement("button");
    borrar.classList.add("borrar");
    borrarBtn.push(borrar);

    title.textContent = i.titulo;
    homework.textContent = i.tarea;
    borrar.innerHTML = \`<i class="fa-solid fa-trash"></i>\`;

    div.appendChild(title);
    div.appendChild(homework);
    contenedorTaresTarea.appendChild(div);
    contenedorTaresTarea.appendChild(borrar);
    fragment.appendChild(contenedorTaresTarea);
    contenedorTares.appendChild(fragment);
  });

  asignarEventosBorrar();
};

function asignarEventosBorrar() {
  borrarBtn.forEach((i, index) => {
    i.addEventListener("click", () => {
      datos.splice(index,1);
      localStorage.setItem("lista",JSON.stringify(datos));
      crearDatosDom(datos);
    });
  });
};

btnEnviar.addEventListener("click", () => {
  if (titleInput.value == \`\`) {
    err1.style.display = "block";
    setTimeout(()=>err1.style.display = "none",4000)
  } else if (tareaInput.value == \`\`){
    err2.style.display = "block";
    setTimeout(()=>err2.style.display = "none",4000)
  } else {
    let datosObjeto = {
      titulo: titleInput.value,
      tarea: tareaInput.value,
    };
    datos.push(datosObjeto);
    localStorage.setItem("lista", JSON.stringify(datos));
    crearDatosDom(datos);
    titleInput.value = \`\`;
    tareaInput.value = \`\`;
  }
});

crearDatosDom(datos);`}
      />
      <MensajeModal texto={`¡Proyecto! capitulo 11

Hacer un blog de notas que se pueda editar , eliminar , cada cosa creada se debe guardar en una base de datos local , los datos no se deben de perder cuando la pagina se actualice o cuando se salgan.`}/>
      <div className="Page">

        <div className="contentCap11V3Js">

          {/* contenedor del input */}

          <div className="contentCap11V3JsContentInput">
            <div className="contentCap11V3JsContentInputCont">
              <input 
                type="text"
                placeholder="titulo"
                value={titulo}
                onChange={(e)=>setTitulo(e.target.value)}
              />
              {err1 && <p>Aun no has puesto el titulo a tu apunte. <FontAwesomeIcon icon={faExclamationCircle} /></p>}
              <AutoExpandingInput
                variable={setNota}
                setValueEx={setValueEx}
                nota={nota}
              />
              {err2 && <p>Aun no has puesto la nota a tu apunte. <FontAwesomeIcon icon={faExclamationCircle} /></p>}
            </div>
            <div className="contentCap11V3JsContentInputBtn">
              <button
                onClick={enviar}
              ><FontAwesomeIcon icon={faPaperPlane}/></button>
              {btnDelete && <button onClick={()=>setShowDeleteAll(true)}
              ><FontAwesomeIcon icon={faTrashAlt}/></button>}
            </div>
          </div>



          {
            datos.map((i,index)=>(
              <Tareas
                title={i.titulo}
                note={i.nota}
                mostrarApuntes={()=>mostrarApuntes(index)}
                confirmar={()=>confirmar(index)}
                editar={()=>editar(index)} // esto es para editar
              />
            ))
          }


          {/* Esto es para mostrar los apuntes completos */}

          <div className={`contentCap11V3JsApuntes ${showComplete ? "":
            "contentCap11V3JsApuntesHide"
          }`}>
            <button
              onClick={cerrarApuntesCompleto}
              className="contentCap11V3JsApuntesBtn"
            >
              X
            </button>
            
            <button 
              className="contentCap11V3JsApuntesBtn contentCap11V3JsApuntesBtnEdit"
              onClick={activarEdicion}
            >
              <FontAwesomeIcon icon={faEdit}/>
            </button>

            <div className="contentCap11V3JsApuntesCont">
              <h4 ref={titleMod}>{tituloCompleto}</h4>
              <div className="contentCap11V3JsApuntesContParrafo">
                <p ref={parrMod}>{notaCompleta}</p>
              </div>

              {showCheck && <button 
                className="contentCap11V3JsApuntesContBtn"
                onClick={editar}
              >
                <FontAwesomeIcon icon={faCheck}/>
              </button>}

            </div>

          </div>

          {/* eliminar todos los datos */}
          <Borrar 
            estado={showDeleteAll}
            cambiarEstado={setShowDeleteAll}
            funcion={borrarTodo}
            mensaje="¿Deseas eliminar todos las notas?"
          />

          {/* eliminar solo un apunte */}
          <Borrar 
            estado={showDeleteOne}
            cambiarEstado={setShowDeleteOne}
            funcion={borrarNota}
            mensaje="¿Estas seguro de eliminar esta nota?"
          />

          {/* esto es para saber si quiere guardar los cambios */}
          <Borrar 
            estado={showSave}
            cambiarEstado={setShowSave}
            funcion={salirSinGuardar}
            mensaje="¿Estas seguro de salir sin guardar los cambios?"
          />

        </div>

      </div>

    </>
  );
}

export default Cap11ProyV3;