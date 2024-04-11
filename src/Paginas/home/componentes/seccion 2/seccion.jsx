import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./seccion.css";
import { faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from 'react';

// lenguages
import base from "./imagenes.js";
import Html from "../../../../componentes/lenguajes/Html.jsx";
import Css from "../../../../componentes/lenguajes/Css.jsx";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript.jsx";
import ReactCode from "../../../../componentes/lenguajes/React.jsx"
import Python from "../../../../componentes/lenguajes/Python.jsx"
import Git from "../../../../componentes/lenguajes/Git.jsx"

function Seccion2Home() {


  // global
    const [imagen, setImagen] = useState(base[0].imagen); // imagen.
    const [index, setIndex] = useState(0); // que imagen se mostrar.
    const [showInfo, setShowInfo] = useState(true); // que imagen se mostrar.

  // manejo de la barra de seleccion de lenguage.
    const [showImg, setShowImg] = useState(true);; // esto es para la transision de base.
    const [mostrarTodo, SetmostrarTodo] = useState(false); // esto es para mostrar todos los lenguages de programacion.
    const contenedorBarra = useRef(); // contenedor de la barra para seleccionar todos los lenguages.
  
    // botones
      const [btn1, setBtn1] = useState(true); // boton de cambio 1
      const [btn2, setBtn2] = useState(false); // boton de cambio 2
      const [brn3, setBrn3] = useState(false); // boton para mostrar todo.
    // informacion
      const [titulo, setTitulo] = useState(base[0].titulo);
      const [parrafo, setParrafo] = useState(base[0].concepto);
      const [codigo, setCodigo] = useState(base[0].codigo);
      const [imagenDb, setImagenDb] = useState(base[0].imagen);


  // manejo de cambio de funciones.
    // funcion para mostrar la siguiente imagen.
      const siguiente=()=>{
        let newIndex = index === base.length - 1 ? base.length - 1:index + 1;
        setIndex(newIndex);
        setShowImg(false);
        setBtn2(false);
        setShowInfo(false);
        setTimeout(() => {
          setShowImg(true);
          setImagen(base[newIndex].imagen)
          setShowInfo(true);
          setTitulo(base[newIndex].titulo);
          setParrafo(base[newIndex].concepto);
          setCodigo(base[newIndex].codigo);
          setImagenDb(base[newIndex].imagen);
        }, 500);
        const contenedor = contenedorBarra.current.querySelectorAll("button img");
        contenedor[newIndex].classList.add("HomeSeccion2BarraSelect__barraImgSelected");
        contenedor[newIndex - 1].classList.remove("HomeSeccion2BarraSelect__barraImgSelected");
      }
    // funcion para mostrar una imagen anterior.
      const anterior=()=>{
        let newIndex = index === 0 ? 0:index - 1;
        setIndex(newIndex);
        setShowImg(false);
        setBtn1(false);
        setShowInfo(false);
        setTimeout(() => {
          setShowImg(true);
          setImagen(base[newIndex].imagen);
          setShowInfo(true);
          setTitulo(base[newIndex].titulo);
          setParrafo(base[newIndex].concepto);
          setCodigo(base[newIndex].codigo);
          setImagenDb(base[newIndex].imagen);
        }, 500);
        const contenedor = contenedorBarra.current.querySelectorAll("button img");
        contenedor[newIndex].classList.add("HomeSeccion2BarraSelect__barraImgSelected");
        contenedor[newIndex + 1].classList.remove("HomeSeccion2BarraSelect__barraImgSelected");
      }
    // funcion para mostrar todos los lenguages.  
      const showAll=()=>SetmostrarTodo(!mostrarTodo)
    // funcion para seleccionar un lenguage sin necesidad de cambiar uno por uno.
      const seleccionar=(indice)=>{
        const contenedor = contenedorBarra.current.querySelectorAll("button img");
        contenedor.forEach(i => {
          i.classList.remove("HomeSeccion2BarraSelect__barraImgSelected")
        });
        setIndex(indice);
        setShowImg(false);
        setShowInfo(false);
        setTimeout(() => {
          setImagen(base[indice].imagen);
          setShowImg(true);
          setShowInfo(true);
          setTitulo(base[indice].titulo);
          setParrafo(base[indice].concepto);
          setCodigo(base[indice].codigo);
          setImagenDb(base[indice].imagen);
        }, 500);
      }
  // manejo de aparicion de botones.
  // Esta funcion se encargar de verificar cuando se llega al limite de los lenguages para desaparecerlos , tambien de desapacerecer por un rato el boton para evitar que se hagan cambios bruscos en el estado de las base
    useEffect(()=>{
      switch(index){
        case 0:
          setBtn2(true);
          setBtn1(false);
          break;
        case base.length -1:
          setBtn1(true);
          setBtn2(false);
          break;
        default:
          setTimeout(() => {
            setBtn1(true);
            setBtn2(true);
          }, 500);
          break;
      }
      const contenedor = contenedorBarra.current.querySelectorAll("button img");
      contenedor[index].classList.add("HomeSeccion2BarraSelect__barraImgSelected");
    },[index])
  // funcion para poner html como ya seleccionado.
    useEffect(()=>{
      const contenedor = contenedorBarra.current.querySelectorAll("button img");
      contenedor[0].classList.add("HomeSeccion2BarraSelect__barraImgSelected");
    },[])
  
  return (  
    <div className="HomeSeccion2 HomeSeccion">
      {/* fondos */}
      <div className="HomeSeccion2FondoContent">
        <div className="HomeSeccion2Fondo"></div>
      </div>
      <div className="HomeSeccion2Fondo2"></div>

      {/* barrita de contro */}
      <div className="HomeSeccion2Barra">
        <div className="HomeSeccion2Barra__content">
          <img className={`HomeSeccion2Barra__contentImg ${showImg ? "":"HomeSeccion2Barra__contentImgHide"}`} src={imagen} alt="lenguage" />
        </div>

        <div className="HomeSeccion2Barra__contentBtn">
          <button
            onClick={anterior}
            className={`HomeSeccion2Barra__contentBtn-btn ${btn1 ? "":"HomeSeccion2Barra__contentBtnHide"}`}
          ><FontAwesomeIcon icon={faAngleLeft}/></button>
          <button
            onClick={siguiente}
            className={`HomeSeccion2Barra__contentBtn-btn ${btn2 ? "":"HomeSeccion2Barra__contentBtnHide"}`}
          ><FontAwesomeIcon icon={faAngleRight}/></button>
          <div className="HomeSeccion2Barra__contentBtn__DOWN">
            <button 
              className={`HomeSeccion2Barra__contentBtn-btn ${mostrarTodo ? "HomeSeccion2Barra__contentBtn-btnRotado":""}`}
              onClick={showAll}
            ><FontAwesomeIcon icon={faAngleDown}/></button>
          </div>
        </div>
      </div>
      {/* barra de seleccion de lenguages */}
      <div className="HomeSeccion2BarraSelect">
        <div 
          className={`HomeSeccion2BarraSelect__barra ${mostrarTodo ? "HomeSeccion2BarraSelect__barraShow":""}`}
          ref={contenedorBarra}
        >
          {
            base.map((i,index)=>(
              <button onClick={()=>seleccionar(index)} key={index}><img src={i.imagen} alt={i.titulo} /></button>
            ))
          }
        </div>
      </div>



      {/* contenedor de la informacion de los lenguages */}
      <div className={`HomeSeccion2Text ${showInfo ? "":"HomeSeccion2TextHide"}`}>
        <div className="HomeSeccion2TextInfo">
          <h2>{titulo}</h2>
          <p>{parrafo}</p>
          <div className="HomeSeccion2Text__code">
            {base[index].lenguage === "html" && <Html codigo={codigo}/>}
            {base[index].lenguage === "css" && <Css codigo={codigo}/>}
            {base[index].lenguage === "javascript" && <JavaScropt codigo={codigo}/>}
            {base[index].lenguage === "react" && <ReactCode codigo={codigo}/>}
            {base[index].lenguage === "python" && <Python codigo={codigo}/>}
            {base[index].lenguage === "git" && <Git codigo={codigo}/>}

          </div>
        </div>

        <img src={imagenDb} alt="" />
      </div>
    </div>
  );
}

export default Seccion2Home;