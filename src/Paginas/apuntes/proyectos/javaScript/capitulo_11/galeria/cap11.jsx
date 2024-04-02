import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../../componentes/showOptions/show";
import "./cap11.css";
import React, { useState, useEffect, useRef } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft, faBars, faEllipsisV, faHeartBroken, faList, faStar, faTrash, faTrashRestore, faX } from "@fortawesome/free-solid-svg-icons";
import OpcionesImgCap11 from "./opciones";
import MsgsGaleriaCap11Proy from "./msg";
import Cap11ProyGaleriaImgs from "./imgs";



function Cap11ProyV4_5() {

  // globales
    // manejo del menu.
    const [menu, setMenu] = useState(false); // manejo del menu en la version mobile.
    const [img, setImg] = useState(""); // imagenes
    // manejo de los mensajes.
    const [showMsg, setShowMsg] = useState(false); // mostrar mensajes indicativos al usuario.
    const [msgs, setMsgs] = useState(""); // mensaje
    const mensajes=(msg)=>{ /*Dar todo tipo de mensajes al usuario*/
      setMsgs(msg)
      setShowMsg(true)
      setTimeout(() => {
        setShowMsg(false)
      }, 3000);
    }
    // secciones
    const [todo, setTodo] = useState(true); // mostrar todas las imagenes
    const [favoritosImg, setFavoritosImg] = useState(false); // mostrar las imagenes favoritas
    const [papelera, setPapelera] = useState(false); // imagenes de la papelera
    const [seccion, setSeccion] = useState("todo"); // que seccion se abrira en imagen completa

    // opciones de las imagenes
    const [showOpions1, setShowOpions1] = useState(false); // con esto mostraremos las opciones de las imagenes.
    const [showOptions2, setShowOptions2] = useState(false); // opciones de favoritos
    const [showOptions3, setshowOptions3] = useState(false); // opciones de la papelera
    
    // almacen de cada seccion.
    const [imagenes, setImagenes] = useState([]); // almancena las imagenes.
    const [favoritos, setFavoritos] = useState([]); // imagenes favoritas
    const [papeleraArr, setPapeleraArr] = useState([]);

    // indicar en que seccion estamos.
    const sections = useRef(); // contenedor
    
    //ibteber posision de cada imagen.
    const [index, setIndex] = useState(0);

    // ponder identificadores a las imagens
    const [identificadores, setIdentificadores] = useState(0);

  // imagenes del inicio de la galeria.
  const archivos = useRef(); // input de archivos.
  const cambioArchivo=()=>{
    leerArchivo(archivos.current.files);
  }
  const leerArchivo = (ar) => {
    let num = identificadores + 1;
    setIdentificadores(identificadores + 1);
    for(let i=0;i < ar.length;i++){
      const reader = new FileReader();
      reader.readAsDataURL(ar[i]);
      reader.addEventListener("load",(e)=>{
        setImagenes(current => [...current, [e.currentTarget.result, num]]);
      })
    }
    const contenedor = sections.current.querySelectorAll("button");
    setTodo(true);
    setFavoritosImg(false);
    setPapelera(false);
    setSeccion("todo");
    contenedor[0].classList.add("cap11GaleriaProy__menu--content__listSelected");
    contenedor[1].classList.remove("cap11GaleriaProy__menu--content__listSelected");
    contenedor[2].classList.remove("cap11GaleriaProy__menu--content__listSelected");
  }

  // imagen completa
  const [showImgCompleta, setShowImgCompleta] = useState(false);

  const addImg=(e)=>{
    setShowImgCompleta(true);
    setImg(e.target.src);
  }
  const openOptionsComplete=(seccion)=>{
    switch(seccion){
      case "todo":
        setShowOpions1(true);
        break;
      case "favoritos":
        setShowOptions2(true);
        break;
      case "papelera":
        setshowOptions3(true);
        break;
      default:
        mensajes("Esto no existe.");
    }
  }

  // abrir secciones de la galeria.
  const abrirSeccion = (seccion) => {
    const contenedor = sections.current.querySelectorAll("button");
    switch (seccion) {
      case 'todo':
        setTodo(true);
        setFavoritosImg(false);
        setPapelera(false);
        setSeccion("todo");
        contenedor[0].classList.add("cap11GaleriaProy__menu--content__listSelected");
        contenedor[1].classList.remove("cap11GaleriaProy__menu--content__listSelected");
        contenedor[2].classList.remove("cap11GaleriaProy__menu--content__listSelected");
        break;
      case 'favoritos':
        setTodo(false);
        setFavoritosImg(true);
        setPapelera(false);
        setSeccion("favoritos");
        contenedor[0].classList.remove("cap11GaleriaProy__menu--content__listSelected");
        contenedor[1].classList.add("cap11GaleriaProy__menu--content__listSelected");
        contenedor[2].classList.remove("cap11GaleriaProy__menu--content__listSelected");        break;
      case 'papelera':
        setTodo(false);
        setFavoritosImg(false);
        setPapelera(true);
        setSeccion("papelera");
        contenedor[0].classList.remove("cap11GaleriaProy__menu--content__listSelected");
        contenedor[1].classList.remove("cap11GaleriaProy__menu--content__listSelected");
        contenedor[2].classList.add("cap11GaleriaProy__menu--content__listSelected");        break;
      default:
        console.error("Sección no válida");
    }
  };


  // agregar a favoritas.
  const addFav = () => {
    if (!favoritos.includes(img)) {
      setFavoritos(current=>[...current,imagenes[index]]);
      mensajes("Imagen agregada a favoritas");
      setShowOpions1(false);
    } else mensajes("Esta imagen ya esta en favoritas.")
  }
  // agregar a papelera.
  const addPapelera = (opcion) => {
    if (!papeleraArr.includes(img)) {
      mensajes("Imagen agregada a la papelera.");
      if (opcion == "todo") {
        setPapeleraArr(current=>[...current,imagenes[index]]);
        let newArr = [...imagenes];
        let newArr2 = [...favoritos];
        newArr.splice(index,1);
        newArr2.splice(imagenes[index][1] - identificadores,1);
        setImagenes(newArr);
        setFavoritos(newArr2);
        setShowOpions1(false);
      } else {
        setPapeleraArr(current=>[...current,favoritos[index]]);
        let newArr = [...favoritos];
        let newArr2 = [...imagenes];
        newArr.splice(index,1);
        newArr2.splice(favoritos[index][1] - identificadores,1);
        setFavoritos(newArr);
        setImagenes(newArr2);
        setShowOptions2(false);
      }      
      setShowImgCompleta(false);
    } else mensajes("Esta imagen ya esta en la papelera.")
  }

  // quitar de favoritos
  const delFav =()=>{
    let newArr = [...favoritos];
    newArr.splice(index,1);
    setFavoritos(newArr);
    mensajes("Se ha removido de favoritos.");
    setShowOptions2(false);
    setShowImgCompleta(false);
  }
  // remover de la papelera
  const reestablecer=()=>{
    let newArr = [...papeleraArr];
    newArr.splice(index,1)
    setImagenes(current=>[...current,papeleraArr[index]])
    setPapeleraArr(newArr)
    setshowOptions3(false);
    setShowImgCompleta(false);
    mensajes("Imagen removida de la papelera.")
  }
  // borrar definitivamente
  const deleteDef=()=>{
    setPapeleraArr([]);
    setshowOptions3(false);
    mensajes("Se ha limpiado la papelera");
    setShowImgCompleta(false);
  }


  return (  
    <>
      <ShowOptions link={"../"}/>
      <MensajeModal texto={`Hacer una galeria que recoja imagenes de los archivos locales del usuario, se debe poder editar mandar a papelera y agregar a favoritos.

Me dio flojera hacerle base de datos lo siento.`}/>
      
      <div className="Page">
        <div className="cap11GaleriaProy">
          <MsgsGaleriaCap11Proy mostrar={showMsg} msg={msgs}/>
          
          {/* opciones del menu */}
          <div 
            className={`cap11GaleriaProy__menu`}
          >
            <button 
              onClick={(e)=>{
                e.stopPropagation();
                setMenu(!menu)
              }}
              className={`cap11GaleriaProy__menu--btn ${menu ? "":"cap11GaleriaProy__menu--btnHide"}`}
            >
              {
                menu ? 
                <FontAwesomeIcon icon={faAngleLeft}/>
                : 
                <FontAwesomeIcon icon={faAngleRight} /> 
              }
            </button>
            
            <div 
              className={`cap11GaleriaProy__menu--content ${menu ? "":"cap11GaleriaProy__menu--contentHide"}`}
              onClick={(e)=>e.stopPropagation()}
            >
              <ul ref={sections} className="cap11GaleriaProy__menu--content__list">
                <li>
                  <button className="cap11GaleriaProy__menu--content__listSelected" onClick={()=>abrirSeccion("todo")}>
                    <FontAwesomeIcon icon={faList}/>
                    <span>Todos</span>
                  </button>
                </li>
                <li>
                  <button onClick={()=>abrirSeccion("favoritos")}>
                    <FontAwesomeIcon icon={faStar}/>
                    <span>Favoritos</span>
                  </button>
                </li>
                <li>
                  <button onClick={()=>abrirSeccion("papelera")}>
                    <FontAwesomeIcon icon={faTrash}/>
                    <span>Papelera</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* imagenes */}
          {
            todo && <Cap11ProyGaleriaImgs
              setIndex={setIndex}
              contenido={imagenes}
              msgAny={"No hay imagenes agregadas."}
              setImg={setImg}
              funcion1={addImg}
              funcion2={()=>setShowOpions1(true)}
            />
          }
          <OpcionesImgCap11
            estado={setShowOpions1}
            mostrar={showOpions1}
            texto1={"Agregar a favoritos"}
            texto2={"Enviar a la papelera"}
            icono1={faStar}
            icono2={faTrash}
            funcion1={addFav}
            funcion2={()=>addPapelera("todo")}
          />
          {/* imagenes favoritas */}
          {
            favoritosImg && <Cap11ProyGaleriaImgs 
              setIndex={setIndex}
              contenido={favoritos}
              msgAny={"No hay imagenes en favoritos"}
              setImg={setImg}
              funcion1={addImg}
              funcion2={()=>setShowOptions2(true)}
            />
          }
          <OpcionesImgCap11
            estado={setShowOptions2}
            mostrar={showOptions2}
            texto1={"Quitar de favoritos"}
            texto2={"Enviar a la papelera"}
            icono1={faHeartBroken}
            icono2={faTrash}
            funcion1={delFav}
            funcion2={()=>addPapelera("fav")}
          />
          {/* papelera */}
          {
            papelera && <Cap11ProyGaleriaImgs 
              setIndex={setIndex}
              contenido={papeleraArr}
              msgAny={"No hay imagenes en la papelera"}
              setImg={setImg}
              funcion1={addImg}
              funcion2={()=>setshowOptions3(true)}
            />
          }
          <OpcionesImgCap11
            estado={setshowOptions3}
            mostrar={showOptions3}
            texto1={"Remover de la papelera."}
            texto2={"Borrar definitivamente."}
            icono1={faTrashRestore}
            icono2={faTrash}
            funcion1={reestablecer}
            funcion2={deleteDef}
          />

          {/* imagen completa */}
          {
            showImgCompleta && <div className="cap11GaleriaProy__imgCompleta">
              <div className="cap11GaleriaProy__imgCompleta--btns">
                <button onClick={()=>setShowImgCompleta(false)}><FontAwesomeIcon icon={faArrowLeft}/></button>
                <button onClick={()=>openOptionsComplete(seccion)}><FontAwesomeIcon icon={faEllipsisV}/></button>
              </div>
              <img className="cap11GaleriaProy__imgCompleta--img" src={img} alt="imagen agregada" />
              <OpcionesImgCap11
                estado={setShowOpions1}
                mostrar={showOpions1}
                texto1={"Agregar a favoritos"}
                texto2={"Enviar a la papelera"}
                icono1={faStar}
                icono2={faTrash}
                funcion1={addFav}
                funcion2={()=>alert("funcion 2")}
              />
            </div>
          }


          {/* boton para agregar mas imagenes */}
          <div className="cap11GaleriaProy__btnAdd">
            <label htmlFor="cap11GaleriaProy__btnAdd--input">+</label>
            <input 
              type="file" 
              id="cap11GaleriaProy__btnAdd--input"
              onChange={cambioArchivo}
              ref={archivos}
            />
          </div>

          

        </div>
        


      </div>
    </>
  );
}

export default Cap11ProyV4_5;