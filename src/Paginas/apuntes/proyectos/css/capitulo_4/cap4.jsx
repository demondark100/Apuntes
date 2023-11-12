import { useState } from "react";
import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import "./cap4.css";
import ShowOptions from "../../../../../componentes/showOptions/show";


function Cap4ProyCss() {

  const [mostrarMensje, setmostrarMensje] = useState(false);
  const mandar=()=>{
    setmostrarMensje(true)
    document.querySelectorAll(".contenedorFormularioCssProyCap4__form__input").forEach((i)=>{i.value = ""})
  }

  return (  
    <>
      <ShowOptions 
        link={"../"}
        html={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Login</title>
  </head>
  <body>
    <main>
      <div class="mainCap4ProyCss">
          
          <div class="contenedorFormularioCssProyCap4">
            <h4 class="contenedorFormularioCssProyCap4__h1">log in</h4>

            <form class="contenedorFormularioCssProyCap4__form">

              <label htmlFor="nombreProyCssCap4">nombres</label>
              <input 
                autoComplete="false"
                type="text" 
                id="nombreProyCssCap4" 
                class="contenedorFormularioCssProyCap4__form__input"
                placeholder="nombres"
              />

              <label htmlFor="emailProyCssCap4">correo electorinico</label>
              <input 
                autoComplete="false"
                type="email" 
                placeholder="emlail"
                class="contenedorFormularioCssProyCap4__form__input"
                id="emailProyCssCap4"
              />

              <label htmlFor="passwordProyCssCap4">contraseña</label>
              <input 
                autoComplete="false"
                type="password" 
                placeholder="contraseña"
                class="contenedorFormularioCssProyCap4__form__input"
                id="passwordProyCssCap4"
              />
            </form>
            <button class="contenedorFormularioCssProyCap4__button" onClick={mandar}>iniciar secion</button>

          </div>


      </div>
    </main>
  </body>
</html>`}
        css={`main{
  width: 100vw;
  height: 100vh;
}
.mainCap4ProyCss{
  background-image: url("https://th.bing.com/th/id/OIP.XS63A3vdqFhJkH9R4Tq7UQHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contenedorFormularioCssProyCap4{
  width: 85%;
  height: 65%;
  background-color: #0000005b;
  backdrop-filter: blur(2px);
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
.contenedorFormularioCssProyCap4::-webkit-scrollbar{
  display: none;
}

.contenedorFormularioCssProyCap4__h1{
  color: #fff !important;
  text-align: center !important;
  width: 100%;
  margin-top: 10% !important;
  
}
.contenedorFormularioCssProyCap4__form{
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
}

.contenedorFormularioCssProyCap4__form label{
  margin-bottom: 15px;
  cursor: pointer;
  color: #e7cfcf;
}
.contenedorFormularioCssProyCap4__form__input{
  margin-bottom: 25px;
  color: #fff !important;
  border: none;
  outline: none;
  background-color: transparent !important;
  border-left: 2px solid #8cd4b6;
  border-right: 2px solid #8cd4b6;
  padding-left: 15px;
}
.contenedorFormularioCssProyCap4__form__input::placeholder{
  color: #fff !important;
}
.contenedorFormularioCssProyCap4__form__input:focus{
  border: none;
  border-bottom: 2px solid #fff;
}

.contenedorFormularioCssProyCap4__button{
  background-color: #000;
  border: 1px solid #add8ad;
  color: #fff !important;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
.contenedorFormularioCssProyCap4__button:hover{
  background-color: #9fe6c433;
}

@media(min-width: 750px){
  .contenedorFormularioCssProyCap4{
    width: 35%;
    height: 85%;
    max-width: 500px;
    max-height: 500px;
  }
}`}
      />
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