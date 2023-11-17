import React from 'react';
import "./Home.css"

// componentes
import Footer from '../../componentes/menus/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import MensajeModal from '../../componentes/MensajeModal/mensajeModal';




function Home({active}) {

  const contenedor1 = useRef();
  const contenedor2 = useRef();

  useEffect(()=>{
    if(active == true){
      contenedor1.current.classList.add("contenedorHomeDark")
      contenedor2.current.classList.add("contenedorHomeDark")
    } else if(active == false){
      contenedor1.current.classList.remove("contenedorHomeDark")
      contenedor2.current.classList.remove("contenedorHomeDark")
    }
  })

  return (
    <>
      <MensajeModal texto={`ㅤㅤㅤㅤㅤㅤㅤ`}/>
      <main>
        
      </main>
      <Footer />
    </>
  );
}

export default Home;