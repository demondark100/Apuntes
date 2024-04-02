import ShowOptions from "../../../../../../componentes/showOptions/show";
import "./cap11.css";


// react
import React, { useState, useEffect, useRef } from 'react';


// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";


//este componente sirve para confirmar acciones que haga la perra del usuario
function Confirmacion({
  mostrar,
  mensaje,
  funcion1,
  funcion2,
  btn1Msg,
  btn2Msg
}) {
  return (  
    <div className={`cap11Proy5Js__error ${mostrar ? "":"cap11Proy5Js__errorHide"}`}>
      <div className="cap11Proy5Js__errorMsg">
        <p>{mensaje}</p>
        <div className="cap11Proy5Js__errorMsgButton">
          <button onClick={funcion1}>{btn1Msg}</button>
          <button onClick={funcion2}>{btn2Msg}</button>
        </div>
      </div>
    </div>
  );
}


function Cap11ProyV5() {
  const [baseDeDatos, setBaseDeDatos] = useState([]); // esto almacena los datos.
 const [contenedorActivo, setContenedorActivo] = useState(null);
    const base = indexedDB.open("contactos",1);

    base.addEventListener("upgradeneeded",()=>{
      const db = base.result;
      db.createObjectStore("almacen",{
        autoIncrement: true
      });
    });
    useEffect(() => {
      base.addEventListener("success", () => {
        leerObjeto();
      });

      return () => {
        base.removeEventListener("success", () => {
          leerObjeto();
        });
      }
    }, []);

    base.addEventListener("error",()=>console.log("hubo un error"));
  
    const agregarObjetos=(objeto) =>{
      const datos = getData("readwrite");
      datos.add(objeto);
    }
  
    const editarObjeto=(key,objeto) =>{
      const datos = getData("readwrite");
      datos.put(key,objeto);
    }
  
  
    const eliminarObjeto=(key) =>{
      const datos = getData("readwrite");
      datos.delete(key);
    }
  
    const getData=(tipo,msg)=>{
      const db = base.result;
      const transaccion = db.transaction("almacen",tipo);
      const almacen = transaccion.objectStore("almacen");
      return almacen;
    }
  
    const leerObjeto=()=>{
      const db = base.result;
      const transaccion = db.transaction("almacen","readwrite")
      const almacen = transaccion.objectStore("almacen");
      const cursor = almacen.openCursor();
      let objetos = [];
      let ids = [];
      cursor.addEventListener("success",()=>{
        if (cursor.result) {
          objetos.push(cursor.result.value)
          ids.push(cursor.result.key)
          cursor.result.continue();
        } else {
          setId(ids)
          setBaseDeDatos(objetos)
        }
      })
    }
    


    
    

  // trabajar con la interfaz.

  // informacion de contactos
    const [showForm, setShowForm] = useState(false);
    const [nombres, setNombres] = useState(""); // nombre del usuario.
    const [apellidos, setApellidos] = useState(""); // apellidos del usuario.
    const [numero, setNumero] = useState(0); // numero del usuario.
    const [correo, setCorreo] = useState(""); // correo del usuario.
    const [empresa, setEmpresa] = useState(""); // agregar nombre de empresa.
    const [edad, setEdad] = useState(""); // agregar edad.
    const [genero, setGenero] = useState(""); // agregar genero.
    const [id, setId] = useState([]); // id para trabajar.
  // manejar error de contactos.
    const [showError, setShowError] = useState(false); // contenedor del error
    const [msgs, setMsgs] = useState("aqui el error"); // mensaje para confirmar acciones
  // confirmar para borrar contacto
    const [showDeleteContact, setShowDeleteContact] = useState(false); // mostrar confirmacion
    const [deleteId, setDeleteId] = useState(0); // obtener que id de contacto eliminar.
  //reemplazar botones
    const [btnAgregarDom, setBtnAgregarDom] = useState(true); // esto guardara el boton de agregar
    const [btnEditarDom, setBtnEditarDom] = useState(false);
  // editar contactos.
    const [idEditar, setIdEditar] = useState(0); // esto guardara el id del contacto.
    const [confirmEditar, setConfirmEditar] = useState(false); // esto hara la confirmacion de la edicion.
  // detalles del contacto
    const [showDetalles, setShowDetalles] = useState(false); // esto es para mostrar los detalles de un contacto.
    const [detalles, setDetalles] = useState({});

  // limpiar los campos.
  const limpiarInputs=()=>{
    setNombres("");
    setApellidos("");
    setNumero("");
    setCorreo("");
    setEmpresa("");
    setEdad("");
    setGenero("seleccionar genero");
  }
  // agregar contacto.
  const agregarContacto=(e)=>{
    e.preventDefault();
    if (nombres.length != 0 || apellidos.length != 0) {
        agregarObjetos({ nombres, apellidos, numero, correo, empresa, edad, genero});
        limpiarInputs();
        setShowForm(false);
        leerObjeto();
        setDetalles({ nombres, apellidos, numero, correo, empresa, edad, genero})
    } else {
      setMsgs("Agrega informacion basica del contacto para crear un contacto.");
      setShowError(true);
    }
  }

  // cancelar agregar contactos
  const cancelarContacto=()=>{
    setShowError(false);
    setShowForm(false);
    limpiarInputs()
  }

  // esta funcion se encarga de mostrar las opciones de eliminar o editar o mostrar los detalles del contacto.
  const showOptions=(index)=>{
    if (contenedorActivo === index) {
      setContenedorActivo(null); // Cierra el contenedor activo si se hace clic nuevamente
    } else {
      setContenedorActivo(index); // Abre el contenedor correspondiente
    }
  }

  // esto es para confirmar si elimar o no un contacto
  const mostrarDelete=(id)=>{
    setMsgs("¿Estas seguro de eliminar este contacto?")
    setShowDeleteContact(true);
    setDeleteId(id)
  }
  // eliminar contactos
  const eliminarContato=(id)=>{
    eliminarObjeto(id)
    setShowDeleteContact(false);
    leerObjeto()
    setContenedorActivo(null)
    setDetalles({})
    limpiarInputs();
    setBtnAgregarDom(true);
    setBtnEditarDom(false);
  }


  // Esta funcion se encarga de pasar los datos a los inputs para editarlos.
  const pasarDatos=(objeto,id)=>{
    setBtnAgregarDom(false);
    setBtnEditarDom(true);
    setShowForm(true)
    setNombres(objeto.nombres);
    setApellidos(objeto.apellidos);
    setNumero(objeto.numero);
    setEdad(objeto.edad);
    setCorreo(objeto.correo);
    setEmpresa(objeto.empresa);
    setGenero(objeto.empresa);
    setIdEditar(id)
  }
  // Esta funcion hara una confrimacion para editar.
  const showEditar=(e)=>{
    e.preventDefault();
    setMsgs("¿Estas seguro de guardar los cambios?")
    setConfirmEditar(true);
  }
  // Esta funcion editara el contacto
  const editarContacto=()=>{
    if (nombres.length != 0 || apellidos.length != 0) {
      editarObjeto({nombres, apellidos, numero, correo, empresa, edad, genero},idEditar)
      leerObjeto()
      limpiarInputs()
      setDetalles({nombres, apellidos, numero, correo, empresa, edad, genero})
      setConfirmEditar(false);
      setBtnAgregarDom(true)
      setBtnEditarDom(false)
      setShowForm(false)
    } else {
      setMsgs("Es necesario rellenar aunque sea lo basico.")
    }
  }

  // esto es para poner los detalles del contacto.
  const mostrarDetalles=(objeto)=>{
    setShowDetalles(true);
    setDetalles(objeto)
  }

  useEffect(()=>{
    let objeto = [...baseDeDatos];
    let index = 0;
    for(let i = 0;i < id.length;i++){
      objeto[index].id = id[index];
      index++;
    }
  })

  return (
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 11

Hacer una aplicacion que almacene contactos, esta debe tener una base de datos local que recupere los datos, este debe mostrar detalles o se debe poder editar la informacion de los contactos.`}/>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="contactos.css">
  </head>
  <body>

    <form id="form">
      <div class="inputContent">
        <input 
          type="text"
          id="nombre"
          placeholder="nombre" 
        >
        <input 
          type="text"
          id="apellido"
          placeholder="apellido" 
        >
        <input 
          type="text"
          id="numero"
          placeholder="numero telefonico" 
        >
      </div>
      <div class="contentBtn">
        <input 
          type="submit"
          id="btnEnviar"
          value="agregar" 
        >

      </div>
    </form>
    <div class="contentContact"></div>

    <script src="contactos.js"></script>
  </body>
</html>`}
        css={`*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #121212;
}

form{
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a2828;
  padding: 15px;
  border-radius: 8px;
  gap: 15px;
}
form input{
  background-color: #1f231f;
  border-radius: 15px;
  padding: 2px;
  border: none;
  outline: none;
  color: #e9f1ca;
  padding-left: 10px;
  box-shadow: 0 0 15px 2px #161816;
  border-bottom: 4px solid #161816;
}
h4{
  white-space: pre-line;
}
form input::placeholder{
  color: #e9f1ca;
}
.inputContent{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
#btnEnviar{
  border-radius: 1000px;
  border: none;
  outline: none;
  background-color: #1f231f;
  width: 75px;
  height: 75px;
  color: #e9f1ca;
  cursor: pointer;
  box-shadow: 0 0 15px 2px #161816;
  border-bottom: 4px solid #161816;
}

.contactos{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  background-color: #2a2828;
  padding: 8px;
  border-radius: 15px;
  color: #e9f1ca;
}
.contactos p{
  margin-top: 8px;
}
.contactos__botones{
  display: flex;
  gap: 15px;
  margin-top: 8px;
}
.contactos__botones button{
  border: none;
  outline: none;
  background-color: #1f231f;
  border-radius: 8px;
  color: #e9f1ca;
  padding: 4px;
  cursor: pointer;
  text-align: center;
  width: 80px;
  box-shadow: 0 0 15px 2px #161816;
  border-bottom: 4px solid #161816;
}

.imposible{
  color: #4f4a4a !important;
}
.posible{
  color: #e9f1ca !important;
}
b{
  outline: none;
  padding: 4px;
  background-color: #161816;
}`}
        javaScript={`// inputs
const nombre = document.getElementById("nombre"); // esto es el input que guarda el nombre.
const apellido = document.getElementById("apellido"); // esto es el input que guarda el apellido.
const numero = document.getElementById("numero"); // estgo es el input que guarda el numero.
const btnEnviar = document.getElementById("btnEnviar"); // esto es el boton que envia los datos.

// manipular el DOM.
const contentContact = document.querySelector(".contentContact"); // contenedor de los contactos.

// funciones de crud

let base = indexedDB.open("base",1);

base.addEventListener("upgradeneeded",()=>{
  const db = base.result;
  db.createObjectStore("almacen",{
    autoIncrement: true
  });
});

base.addEventListener("success",leerObjeto);

base.addEventListener("error",()=>console.log("hubo un error"));

btnEnviar.addEventListener("click",(e)=>{
  e.preventDefault();
  if (
    nombre.value.length > 4 ||
    apellido.value > 4 ||
    numero.value > 4
  ) {
    agregarObjetos({
      nombre: nombre.value,
      apellido: apellido.value,
      numero: numero.value
    });
    leerObjeto();
  }
})

const agregarObjetos=(objeto) =>{
  const datos = getData("readwrite","objeto agregado");
  datos.add(objeto);
}

const editarObjeto=(objeto,key) =>{
  const datos = getData("readwrite","objeto editado");
  datos.put(objeto,key);
}


const eliminarObjeto=(key) =>{
  const datos = getData("readwrite","objeto eliminado");
  datos.delete(key);
}

const getData=(tipo,msg)=>{
  const db = base.result;
  const transaccion = db.transaction("almacen",tipo);
  const almacen = transaccion.objectStore("almacen");
  transaccion.addEventListener("complete",()=>{
    console.log(msg);
  })
  return almacen;
}

function leerObjeto(){
  const db = base.result;
  const transaccion = db.transaction("almacen","readwrite")
  const almacen = transaccion.objectStore("almacen");
  const cursor = almacen.openCursor();
  contentContact.innerHTML = \`\`;
  cursor.addEventListener("success",()=>{
    if (cursor.result) {
      createHtml(
        cursor.result.key,
        cursor.result.value.nombre,
        cursor.result.value.apellido,
        cursor.result.value.numero
      );
      cursor.result.continue();
    }
  })
}



const createHtml=(id,name,lastName,number)=>{
  // crear elementod del DOM.
  const contenedor = document.createElement("div");
  const nombre = document.createElement("p");
  const apellido = document.createElement("p");
  const numero = document.createElement("p");
  const b1 = document.createElement("b");
  const b2 = document.createElement("b");
  const b3 = document.createElement("b");
  const informacion = [b1,b2,b3];
  const opciones = document.createElement("div");
  const btnEditar = document.createElement("button");
  const btnBorrar = document.createElement("button");
  const fragment = document.createDocumentFragment();
  // agregar clases a los elementos.
  contenedor.classList.add("contactos");
  nombre.classList.add("informacion");
  apellido.classList.add("informacion");
  numero.classList.add("informacion");
  opciones.classList.add("contactos__botones");
  btnEditar.classList.add("imposible");
  btnBorrar.classList.add("btnBorrar");
  // agregar contenido.
  nombre.textContent = "nombre: ";
  apellido.textContent = "apellido: ";
  numero.textContent = "numero: ";
  informacion[0].textContent = name;
  informacion[1].textContent = lastName;
  informacion[2].textContent = number;
  btnEditar.textContent = "Guardar";
  btnBorrar.textContent = "Borrar";
  // agregar hijos.
  nombre.appendChild(informacion[0]);
  apellido.appendChild(informacion[1]);
  numero.appendChild(informacion[2]);
  contenedor.appendChild(nombre);
  contenedor.appendChild(apellido);
  contenedor.appendChild(numero);
  contenedor.appendChild(opciones);
  opciones.appendChild(btnEditar);
  opciones.appendChild(btnBorrar);
  fragment.appendChild(contenedor);
  contentContact.appendChild(fragment);

  informacion.forEach(i=>{
    i.setAttribute("contentEditable","true");
    i.setAttribute("spellcheck","false");
    i.addEventListener("keyup",()=>{
      btnEditar.classList.replace("imposible","posible");
    })
  })

  btnEditar.addEventListener("click",()=>{
    editarObjeto(
      {
        nombre: informacion[0].textContent,
        apellido: informacion[1].textContent,
        numero: informacion[2].textContent
      },
      id
    )
    btnEditar.classList.replace("posible","imposible")
  })
  btnBorrar.addEventListener("click",()=>{
    eliminarObjeto(id);
    leerObjeto()
  })
}`}
      />

      <div className="Page">

        <div className="cap11Proy5JsV5">
          
          {/* datos del contacto */}
          <form 
            className={`cap11Proy5JsV5Form ${showForm ? "":"cap11Proy5JsV5FormHide"}`}
          >
            <button
              type="button"
              onClick={cancelarContacto}
              className="cap11Proy5JsV5FormCancelBtn"
            >X</button>
            <input 
              type="text"
              value={nombres}
              onChange={(e)=>setNombres(e.target.value)}
              placeholder="nombres"
            />
            <input 
              type="text"
              value={apellidos}
              onChange={(e)=>setApellidos(e.target.value)}
              placeholder="apellidos"
            />
            <input
              type="number"
              value={numero}
              onChange={(e)=>setNumero(e.target.value)}
              placeholder="numero telefonico"
            />
            <input 
              type="number"
              value={edad}
              onChange={(e)=>setEdad(e.target.value)} 
              placeholder="Edad"
            />
            <input 
              type="text"
              value={correo}
              onChange={(e)=>setCorreo(e.target.value)}
              placeholder="correo electronico"
            />
            <input 
              type="text" 
              value={empresa}
              onChange={(e)=>setEmpresa(e.target.value)}
              placeholder="Empresa"
            />
            <select className="cap11Proy5JsV5FormSelect" onChange={(e)=>setGenero(e.target.value)} value={genero}>
              <option value="seleccionar genero">seleccionar genero</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>

            {
              btnAgregarDom && <input 
                type="submit" 
                className="cap11Proy5JsV5FormEnviar" 
                value={"Agregar contacto"}
                onClick={(e)=>agregarContacto(e)}
              />
            }
            {
              btnEditarDom && <input 
                type="submit" 
                className="cap11Proy5JsV5FormEnviar" 
                value={"Editar Contacto"}
                onClick={(e)=>showEditar(e)}
              />
            }
          </form>

          {/* agregar contacto */}
          <div className="cap11Proy5JsV5BtnAdd">
            <button onClick={()=>{
              setShowForm(true)
              setBtnAgregarDom(true)
              setBtnEditarDom(false)
            }}>
              +
            </button>
          </div>


          {/* contenedor del error */}
          <Confirmacion 
            mostrar={showError}
            mensaje={msgs}
            funcion1={cancelarContacto}
            funcion2={()=>setShowError(false)}
            btn1Msg={"cancelar"}
            btn2Msg={"continuar"}
          />
          
          {/* objeto que almacena cada contacto */}
          <div className="cap11Proy5JsV5Contactos">
            {baseDeDatos.map((i,index) => (
              <div key={i.id} className="cap11Proy5JsV5ContactosContacto">
                <div className="cap11Proy5JsV5ContactosContactoInfo">
                  <div className="cap11Proy5JsV5ContactosContactoInfoFoto">
                    {i.nombres === "" ? <p>{i.apellidos[0].toUpperCase()}</p> : <p>{i.nombres[0].toUpperCase()}</p>}
                  </div>
                  {i.nombres === "" ? 
                    <p>{
                      i.apellidos.length > 15 ? i.apellidos.slice(0,15) + "...":i.apellidos 
                    }</p> : 
                    <p>{
                      i.nombres.length > 15 ? i.nombres.slice(0,15) + "...": i.nombres
                    }</p>}

                </div>
                <div className="cap11Proy5JsV5ContactosBotones">
                  <button onClick={()=>showOptions(index)}><FontAwesomeIcon icon={faEllipsisV}/></button>
                </div>

                <div
                  className="cap11Proy5JsV5ContactosBotonesBtn" 
                  style={{ display: contenedorActivo === index ? 'flex' : 'none' }}
                  onMouseLeave={()=>setContenedorActivo(null)}
                >
                  <button onClick={()=>pasarDatos(i,i.id)}>
                    <FontAwesomeIcon icon={faEdit} />
                    <p>editar</p>
                  </button>
                  
                  <button onClick={()=>mostrarDelete(i.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <p>eliminar</p>
                  </button>
                  
                  <button onClick={()=>mostrarDetalles(i)}>
                    <FontAwesomeIcon icon={faEye} />
                    <p>detalles</p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* confirmacion de eliminar contacto. */}
          <Confirmacion 
            mostrar={showDeleteContact}
            mensaje={msgs}
            funcion1={()=>setShowDeleteContact(false)}
            funcion2={()=>eliminarContato(deleteId)}
            btn1Msg={"No"}
            btn2Msg={"Si"}
          />

          {/* confirmar cambios */}
          <Confirmacion 
            mostrar={confirmEditar}
            mensaje={msgs}
            funcion1={()=>{
              setConfirmEditar(false);
              setTimeout(() =>setMsgs("¿Estas seguro de guardar los cambios?"),500);
            }}
            funcion2={editarContacto}
            btn1Msg={"seguir editando"}
            btn2Msg={"guardar"}
          />

          <div className={`cap11Proy5JsV5Detalles ${showDetalles ? "":"cap11Proy5JsV5DetallesHide"}`}>
            <button className="cap11Proy5JsV5DetallesX" onClick={()=>setShowDetalles(false)}>X</button>
            <div className="cap11Proy5JsV5DetallesImagen">
              {
                detalles &&
                (detalles.nombres === ""
                  ? <p>{detalles.apellidos && detalles.apellidos[0].toUpperCase()}</p>
                  : <p>{detalles.nombres && detalles.nombres[0].toUpperCase()}</p>
                )
              }
            </div>
            <div className="cap11Proy5JsV5DetallesInfo">
              <p>nombres:  <b>{detalles.nombres}</b></p>
              <p>apellidos:  <b>{detalles.apellidos}</b></p>
              <p>numero telefonico:  <b>{detalles.numero}</b></p>
              <p>edad:  <b>{detalles.edad}</b></p>
              <p>correo electronico:  <b>{detalles.correo}</b></p>
              <p>empresa:  <b>{detalles.empresa}</b></p>
              <p>genero:  <b>{detalles.genero}</b></p>
            </div>
          </div>

        </div>
      
      </div>
    </>
  );
}

export default Cap11ProyV5;