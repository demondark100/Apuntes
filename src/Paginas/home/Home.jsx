import React from 'react';
import "./Home.css"

// componentes
import Footer from '../../componentes/menus/Footer';
import { Link } from 'react-router-dom';
import MensajeModal from '../../componentes/MensajeModal/mensajeModal';


function Home() {

  

  return (
    <>
      <MensajeModal texto={"https://www.000webhost.com/members/website/list"}/>
      <main className='mainHome'>

        <article>
          <section>
            <div className='title_consepto1'>
              <h1 className='titleHome'>Apuntes programacion</h1>
              <p className='conseptoHome'>
                Esta página contiene apuntes de todo lo que yo he ido aprendiendo a lo largo del tiempo como desarrollador. A medida que vaya avanzando, agregaré más apuntes a todo este sitio web, cosas como C#, Python u otros lenguajes aparte de JavaScript, etc.
              </p>
            </div>
          </section>
          <section>
            <div className='editoresCodigoContent'>
              <h1 className='titleHome'>¡Comenzar!</h1>
                <p className='edioresParrafo'>
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