import React from 'react';
import "./Home.css"

// componentes
import Menu1 from '../../componentes/menus/Menu1';
import Conseptos from '../../componentes/conseptos/conseptos';
import Footer from '../../componentes/menus/Footer';
import Opciones from '../../componentes/conseptos/opciones';
import Capitulos from '../../aside';

function Home() {
  return (
    <>
      <Menu1 />
      <Capitulos />
      <main>
        <h1>Apuntes programacion</h1>
        <Conseptos texto={
          "Esta pagina contiene apuntes de todo lo que yo he ido aprendiendo a lo largo del tiempo como desarrollador , a medida que vaya abanzando agregare mas apuntes a todo este sitio web cosas como c# , python u otros lenguajes a parte de javaScript . etc."
        }/>

          <Conseptos texto={`Ahora para programar de forma sensilla necesitamos de un editor de codigo aqui te dejo algunos bien conocidos

Visual Studio Code: {vscode}
Sublime Text: {sublime}`}
enlaces={{
  vscode: {text: "vscode", url: "https://code.visualstudio.com/"},
  sublime: {text: "sublime" , url: "https://www.sublimetext.com/3"} 
}} 
targetBlank={true} />

        <div>
          <h2 className='title_home'>cursos</h2>
          <div className='linksGome-content'>
            <Opciones link={"/logica"} texto="logica"/>
            <Opciones link={"/html"} texto="html"/>
            <Opciones link={"/css"} texto="css"/>
            <Opciones link={"/javaScript"} texto="javaScript"/>
            <Opciones link={"/python"} texto="python"/>
            <Opciones link={"/react"} texto="react"/>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Home;
