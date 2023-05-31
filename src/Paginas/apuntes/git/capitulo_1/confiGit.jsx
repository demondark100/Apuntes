import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import Git from "../../../../componentes/lenguajes/Git";

function ConfiGit() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Configuracion de git</h1>
        <Conseptos texto={`Aqui te dejo el link para descargar git.

{git}`}
        enlaces={{git:{text: "descargar git aqui"},url:"https://git-scm.com/downloads"}}
        targetBlank={true}/>
        <Conseptos texto={`Consejo si se trabaja desde windows no es recomendable trabajar desde la terminal por defecto es mejor abrir 
"git bash".
y si es linux o mac debemos abrir:
"cmd" osea la terminal.
Aqui veremos comandos de git para la configuracion inicial.`}/>
        <h2>ver version de git</h2>
        <Git codigo={`git --version`}/>
        <Conseptos texto={`Con esto sabremos la version de git.`}/>

        <h2>configuracion global</h2>
        <Git codigo={`git config --global`}/>
        <Conseptos texto={`Con esto la configuracion que hagamos se aplicara en todos los proyectos que hagamos.`}/>
        <Git codigo={`git config --global user.name "nombre completo"`}/>
        <Conseptos texto={`Con name pondremos nuestro nombre de usuario.`}/>
        <Git codigo={`git config --global user.email "correo"`}/>
        <Conseptos texto={`Con esto configuraremos nuestro correo no es necesario el uso de comillas.`}/>
        <h2>poner nuestro editor de codigo a git</h2>
        <Git codigo={`git config --global core.editor "code --wait"`}/>
        <Conseptos texto={`Con esto le estamos asignando un editor de codigo a git.`}/>
        <Git codigo={`git config --global -e`}/>
        <Conseptos texto={`Con esto abriremos nuestra configuracion en visual studio code , debemos cerrar vsc.`}/>
        <h2>configuracion de saltos de linea</h2>
        <Git codigo={`git config --global core.autocrlf sistema operativo`}/>
        <Conseptos texto={`esto dependera del sistrma operativo ejemplo.
si es windows debes poner true
si es mac o linux input
con esto le diremos a git como debe tratar los saltos de linea.`}/>
        <h3>ejemplo windows</h3>
        <Git codigo={`git config --global core.autocrlf true`}/>
        <h3>ejemplo linux y mac</h3>
        <Git codigo={`git config --global core.autocrlf input`}/>
        <h2>help</h2>
        <Git codigo={`git config --global -h`}/>
        <Conseptos texto={`Con esto podremos jugar con la configuracion de git.`}/>
      </main> 
      <Footer/> 
    </>
  );
}

export default ConfiGit;