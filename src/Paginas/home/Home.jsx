import "./Home.css";
import PresentacionHome from './componentes/presentacion/Presentacion';
import React, { useState, useEffect, useRef } from 'react';


function Home() {
  // funcion de presentacion.
  const [tutorial, setTutorial] = useState();
  const presentacion = useRef();
  const quitarTutorial=()=>{
    setTutorial(false);
    localStorage.setItem("tutorial",JSON.stringify(false));
  }
  useEffect(()=>{
    let cambio = JSON.parse(localStorage.getItem("tutorial"));
    if (cambio === false) {
      setTutorial(cambio)
    } else if(cambio === null){
      setTutorial(true)
    }
  },[tutorial])

  return (
    <div className='Home'>
      <div className={`Home__presentacion ${tutorial ? "":"Home__presentacionHide"}`}>
        <PresentacionHome funcion={quitarTutorial}/>
      </div>
    </div>
  );
}

export default Home;