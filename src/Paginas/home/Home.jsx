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
      <MensajeModal texto={`Animes pendientes

Reborn As A Vending Machine, Now I Wander The Dungeon
jujutsu kaisen temporada 2
soul eater
mushoku tensei temporada 2 o 3 no recuerdo`}/>
      <main>
        <article className='contenedorHome'>
          <section ref={contenedor1} className='contenedorHome__contenido'>
            <div className='title_consepto1'>
              <h1>Apuntes programacion</h1>
              <p>
                Esta página contiene apuntes de todo lo que yo he ido aprendiendo a lo largo del tiempo como desarrollador. A medida que vaya avanzando, agregaré más apuntes a todo este sitio web, cosas como C#, Python u otros lenguajes aparte de JavaScript, etc.
              </p>
            </div>
          </section>
          <section ref={contenedor2} className='contenedorHome__contenido'>
            <div className='editoresCodigoContent'>
              <h1>¡Comenzar!</h1>
                <p>
                  Ahora para programar de forma sensilla necesitamos de un editor de codigo aqui te dejo algunos bien conocidos.
                  <br /> <br />
                  Visual Studio Code: <Link target='_blank' to={"https://code.visualstudio.com/"}>vscode</Link> <br />
                  Sublime Text: <Link target='_blank' to={"https://www.sublimetext.com/3"}>sublime</Link>
                </p>
              </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Home;