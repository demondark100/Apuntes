import { useState } from "react";
import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../componentes/volver/volver";
import "./cap4.css";



function Cap4ProyCss() {

  const [mostrarMensje, setmostrarMensje] = useState(false);
  const mandar=()=>{
    setmostrarMensje(true)
    document.querySelectorAll(".contenedorFormularioCssProyCap4__form__input").forEach((i)=>{i.value = ""})
  }

  return (  
    <>
      <MensajeModal texto={`¡proyecto! capitulo 4:

Hacer un login.

Recuerda que aprendimos:

1. Object fit.
2. cursor.
3. colorizacion.
4. responsive(basico).
5. flexbox.
6. order.`}/>
      {
        mostrarMensje && <MensajeModal texto={`wahahaha te acabo de hackear :v`}/>
      }
      <Volver link={"../"}/>
      <div className="Page">
        <div className="mainCap4ProyCss">
          
          <div className="contenedorFormularioCssProyCap4">
            <h4 className="contenedorFormularioCssProyCap4__h1">log in</h4>

            <form className="contenedorFormularioCssProyCap4__form">

              <label htmlFor="nombreProyCssCap4">nombres</label>
              <input 
                autoComplete="false"
                type="text" 
                id="nombreProyCssCap4" 
                className="contenedorFormularioCssProyCap4__form__input"
                placeholder="nombres"
              />

              <label htmlFor="emailProyCssCap4">correo electorinico</label>
              <input 
                autoComplete="false"
                type="email" 
                placeholder="emlail"
                className="contenedorFormularioCssProyCap4__form__input"
                id="emailProyCssCap4"
              />

              <label htmlFor="passwordProyCssCap4">contraseña</label>
              <input 
                autoComplete="false"
                type="password" 
                placeholder="contraseña"
                className="contenedorFormularioCssProyCap4__form__input"
                id="passwordProyCssCap4"
              />
            </form>
            <button className="contenedorFormularioCssProyCap4__button" onClick={mandar}>iniciar secion</button>

          </div>


        </div>
      </div>
    </>
  );
}

export default Cap4ProyCss;