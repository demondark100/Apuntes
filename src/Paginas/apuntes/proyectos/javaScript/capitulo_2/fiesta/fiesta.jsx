import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import React, { useState , useRef } from 'react';
import './fiesta.css';




function Cap3ProyJsV2() {
  
  const [showEntra, setShowEntra] = useState(false); //este estado muestra el p con el mensaje.
  const [mensajeEntra, setMensajeEntra] = useState(""); //este es el mensaje que se da segun si es mayor o menor de edad.
  const inputEdad = useRef(null); //esto es el inpt donde se pone la edad del usuario.
  const [pagar, setPagar] = useState(false); // esto es para mostrar el componente para pagar.
  const [showComp, setShowComp] = useState(false);

  const validadEntrada=()=>{
    setShowEntra(true)
    if (inputEdad.current.value < 18) {
      setMensajeEntra("lo siento eres menor de edad no puedes pasar");
      setPagar(false);
    } else {
      setMensajeEntra("puedes pasar pero debes pagar")
      setPagar(true);
    }
  }

  const [botonQuit, setBotonQuit] = useState(true);
  const comprado =()=>{
    setShowComp(true)
    setBotonQuit(false)
    setTimeout(() => {
      setShowComp(false)
      setBotonQuit(true)
    }, 8000);
  }



  return (  
    <>
      <CodigoFuenteSinInt codigo={<JavaScropt codigo={`function entradasFiesta(posision,hora) {
  let edad = prompt("Hola bienvenido o bienvenida Por favor brindeme su edad para que pueda ingresar a la fiesta")
  if (edad >= 18 && hora > 12) {
    alert("lo siento ya no puedes pasar a la fiesta es demasiado tarde.")
  } else {
    if (edad < 18) {
      alert("lo lamento usted es menor de edad no puede pasar a la fiesta.")
    } else if(edad >= 18 && posision == 1){
      alert("Eres la primer persona en llegar puedes pasar gratis.")
    } else if (edad >= 18 && posision != 1) {
      alert("Puedes pasar pero debes pagar una tarifa para poder entrar a la fiesta.")
    } else {
      alert("porfavor ingrese una edad valida")
    }
  }
}
entradasFiesta(1,5);
entradasFiesta(2,6);
entradasFiesta(8,15);`}/>}/>
      <Volver link={"../"}/>
      <MensajeModal texto={`¡Proyecto! capitulo 3:

Hacer un programa que simule la entrada a solo mayores de edad a una fiesta , si es la primera persona en llegar entra gratis , los demas deben pagar , la entrada finaliza a las 12am despues de esa hora no puede entrar mas gente a la fiesta.`}/>
      <div className="Page">
        <div className="contenedorTitleProyCap3V2__presentacion">
          <div className="contenedorTitleProyCap3V2__presentacion__texto">
            <h5>¡Fiesta!</h5>
            <p>bienvenido o bienvenida a esta gran fiesta de Juanito Alcahofa esta fiesta es exclusiva para mayores de edad y puedes entrar pagando , esto porque recibiras comida , premios , sorteos millonarios de bingo y mucho mas.</p>
          </div>
          <img src="https://www.bing.com/th/id/OGC.4d397104ff6aaefa16c3d7c88ec3d73f?pid=1.7&rurl=http%3a%2f%2fwww.fmdos.cl%2fwp-content%2fuploads%2f2016%2f07%2ffiesta.gif&ehk=iEllrbJZVXuITl%2f0xxbwumBZOHwRpri6pE37c0EPyFQ%3d" alt="" />
        </div>
        <div className="contenedorTitleProyCap3V2">
          <div className="contenedorTitleProyCap3V2__input">
            <label htmlFor="input__contenedorTitleProyCap3V2" style={{color: "#000"}}>¡Cuantos años tienes?</label>
            <input ref={inputEdad} type="number" id="input__contenedorTitleProyCap3V2"/>
            <button onClick={validadEntrada}>ontener entradas</button>
            {
              showEntra && <p className={`${inputEdad.current.value < 18 ? "parrafoNoPasasJsCap3":"parrafoSiPasasJsCap3"}`}>{mensajeEntra}</p>
            }
          </div>
        </div>
        {
          pagar && <div className="contenedorTitleProyCap3V2__comprarContent">
            <div className="contenedorTitleProyCap3V2__comprarContenido">
              <h4>$150</h4>
              <p>comprar entradas por $150 , no se cobraran los impuestos.</p>
              {
                botonQuit && <button onClick={comprado}>comparar entradas</button>
              }
              {
                showComp && <p className="contenedorTitleProyCap3V2__comprarContenido__parr">
                compra realizada dosfruta la fiesta.
              </p>
              }
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Cap3ProyJsV2;