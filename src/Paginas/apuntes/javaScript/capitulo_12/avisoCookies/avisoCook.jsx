import { useEffect } from "react";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import "./avisoCook.css";

function AvisoCookJs() {

  useEffect(()=>{
    const newFechaUTC = dias =>{
      let fecha = new Date();
      fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
      return fecha.toUTCString();
  }
  const crearCookie = (nombre,dias) =>{
      let expires = newFechaUTC(dias);
      document.cookie = `${nombre};expires=${expires}`;
  }
  
  crearCookie("user_cookie",4)
  
  const obtenerCokkie = cookiesName =>{
      let cookies = document.cookie;
      cookies = cookies.split(";");
      for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].trim();
          if (cookie.startsWith(cookiesName)) {
              return cookie.split("=")[0]
          }
      }
      return "no hay cookies";
  }
  
  if (obtenerCokkie("acceptedCookies") != "si") {
      setTimeout(() => {
          document.querySelector(".bg-modal").style.zIndex = "10"
          document.querySelector(".bg-modal").style.opacity = "1"
          document.getElementById("accept").addEventListener("click",()=>{
              crearCookie("acceptedCokies=si",30)
              document.querySelector(".bg-modal").style.opacity = "0";
              setTimeout(() => {
                  document.querySelector(".bg-modal").style.zIndex = "-1"
              }, 1000);
          })
          document.getElementById("deny").addEventListener("click",()=>{
              crearCookie("acceptedCokies=no",30)
              document.querySelector(".bg-modal").style.opacity = "0";
              setTimeout(() => {
                  document.querySelector(".bg-modal").style.zIndex = "-1"
              }, 1000);
          })
      }, 200);
    }
  })

  return (  
    <>
      <main>
        <h1>Crear aviso de uso de cookies</h1>
        <Conseptos texto={`Actualmente debemos pedir permiso al usuario de que usaremos cookies por temas legales :v.`}/>
        <Html codigo={`<div class="bg-modal">
    <div class="modal">
        <h3>aseptas el uso de cookies?</h3>
        <button id="accept">Si</button>
        <button id="deny">No</button>
    </div>
</div>`}/>
        <Css codigo={`.bg-modal{
    background-color: #00000077;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s;
    z-index: -1;
}
.modal{
    background-color: #fff;
    width: 55%;
    margin: auto;
    padding: 30px;
    box-shadow: 0px 0px 0px 0px #1111;
    margin-top: 15%;
    text-align: center;
}
button{
    padding: 5px 30px;
    margin: 10px;
}`}/>
        <JavaScropt codigo={`const newFechaUTC = dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}
const crearCookie = (nombre,dias) =>{
    let expires = newFechaUTC(dias);
    document.cookie = \`${"${nombre}"};expires=${"${expires}"}\`;
}

crearCookie("user_cookie",4)

const obtenerCokkie = cookiesName =>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookiesName)) {
            return cookie.split("=")[0]
        }
    }
    return "no hay cookies";
}

if (obtenerCokkie("acceptedCookies") != "si") {
    setTimeout(() => {
        document.querySelector(".bg-modal").style.zIndex = "10"
        document.querySelector(".bg-modal").style.opacity = "1"
        document.getElementById("accept").addEventListener("click",()=>{
            crearCookie("acceptedCokies=si",30)
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".bg-modal").style.zIndex = "-1"
            }, 1000);
        })
        document.getElementById("deny").addEventListener("click",()=>{
            crearCookie("acceptedCokies=no",30)
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".bg-modal").style.zIndex = "-1"
            }, 1000);
        })
    }, 200);
}`}/>

        <div className="bg-modal">
            <div className="modal">
                <h3 className="usoDeCookies">aseptas el uso de cookies?</h3>
                <button id="accept">Si</button>
                <button id="deny">No</button>
            </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default AvisoCookJs;