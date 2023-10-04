import "./cap11.css";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../../componentes/volver/volver";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import Html from "../../../../../../componentes/lenguajes/Html";
import Css from "../../../../../../componentes/lenguajes/Css";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";


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
      <Volver link={"../"}/>
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