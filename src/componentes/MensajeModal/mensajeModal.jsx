import { useState,useRef,useEffect } from "react";
import "./mensajeModal.css";


function MensajeModal({texto}) {
  const contenedor = useRef(null);
  const [ShowMessage, setShowMessage] = useState(true);
  
  useEffect(()=>{
    if (ShowMessage) {
      document.body.classList.add("noMover");
      contenedor.current.style.top = `${window.scrollY}px`
      document.querySelector("main").classList.add("mainFilter");
      document.querySelector("aside").classList.add("mainFilter");
      document.querySelector("footer").classList.add("mainFilter");
      document.querySelector("header").classList.add("mainFilter");
    } else {
      document.body.classList.remove("noMover");
      document.querySelector("main").classList.remove("mainFilter");
      document.querySelector("aside").classList.remove("mainFilter");
      document.querySelector("footer").classList.remove("mainFilter");
      document.querySelector("header").classList.remove("mainFilter");
    }
  })

  return (  
    <div ref={contenedor} className={`contentMensajeVariable ${
      ShowMessage ?
      "":
      "ocultarMessage"
    }`}>
      <div>
        <p>
          {texto}
        </p>
        <button onClick={()=>setShowMessage(false)}>ok</button></div>
    </div>
  );
}

export default MensajeModal;