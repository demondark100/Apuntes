import  "./importante.css";
import { useRef } from "react";

import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";


function Importante() {
  const mensajeHtml = useRef(null);

  const holaMundo=()=>{
    mensajeHtml.current.textContent = "Te dije click derecho >:v";
    mensajeHtml.current.classList.add("MostrarMensaje")
    setTimeout(() => {
      mensajeHtml.current.textContent = null;
      mensajeHtml.current.classList.remove("MostrarMensaje")
    }, 5000);
    if (window.innerWidth < 750) {
      mensajeHtml.current.textContent = "Esto no esta disponible para telefonos :c";
    }
  }


  return (  
    <>
      <main>
        <h1>importante</h1>
        <Conseptos texto={`Para empezar para crear un archivo html debmos crear un archivo con la extencion .html por ejemplo.

ejemplo.html o holaMundo.html la cosa es que tenga .html

ahora abre el archivo que creaste con el navegador que usas , felicidades ahora tienes una pagina hecha busca trabajo >:v ok no.`}/>

        <Conseptos texto={`Para poder abrir la consola de desarrollador en el navegador se debe presionar F12 , tambien puedes hacer click derecho en cualquier parte del sitio web y hacer click en "inspeccionar".`}/>

        <Conseptos texto={`Genial ahora si hiciste F12 se abrio una consola vacia pero si diste a "inspeccionar" veras cosas como <div> <header> y asi vas por buen camino.`}/>

        <Conseptos texto={`Un ejemplo has click derecho sobre el boton que dice "hola mundo" y dale en "inspeccionar".`} />

        <div className="content_holaMundo">
          <button onClick={holaMundo}>Hola mundo</button>
          <p ref={mensajeHtml}></p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Importante;