import Conseptos from "../../../../componentes/conseptos/conseptos";
import Git from "../../../../componentes/lenguajes/Git";
import Footer from "../../../../componentes/menus/Footer";

function UseGit() {
  return (  
    <>
      <main>
        <h1>comandos git</h1>
        <h2>ls</h2>
        <Git codigo={`la`}/>
        <Conseptos texto={`Con esto veremos los archivos que tenemos.`}/>
        <h2>ls -a</h2>
        <Git codigo={`ls -a`}/>
        <Conseptos texto={`Con esto veremos los archivos ocultos.`}/>
        <h2>pwd</h2>
        <Git codigo={`pwd`}/>
        <Conseptos texto={`Con esto sabremos en que carpeta o directorio nos encontramos osea nuestra ubicacion exacta.`}/>
        <h2>cd</h2>
        <Git codigo={`cd nombre de la carpeta`}/>
        <Conseptos texto={`ejemplo`}/>
        <Git codigo={`cd Downloads`}/>
        <Conseptos texto={`Con esto nos moveremos de carpeta en carpeta.`}/>
        <Conseptos texto={`cd
Con esto retrocederemos hasta el inicio de todo.`}/>
        <Git codigo={`cd`}/>
        <Conseptos texto={`cd ..
Con esto retrocederemos solo una carpeta atras.`}/>
        <Git codigo={`cd ..`}/>
        <h2>mkdir</h2>
        <Git codigo={`mkdir nombre del archivo`}/>
        <Conseptos texto={`Con esto crearemos un nuevo archivo por ejemplo.`}/>
        <Git codigo={`mkdir proyecto_1`}/>
        <h2>git init</h2>
        <Git codigo={`git init`}/>
        <Conseptos texto={`Con esto vamos a inicializar un nuevo repositorio de git.`}/>
        <h2>code .</h2>
        <Git codigo={`code .`}/>
        <Conseptos texto={`Con esto abriremos el editor en el lusgar que nos encontremos.`}/>
        <h2>git status</h2>
        <Git codigo={`git status`}/>
        <Conseptos texto={`Con esto veremos el estado de nuestro repositorio.`}/>
        <h2>git add</h2>
        <Git codigo={`git add nombre`}/>
        <Conseptos texto={`con esto seleccionaremos un archivo`}/>
        <h3>variantes</h3>
        <Git codigo={`git add *archivo`}/>
        <Conseptos texto={`ejemplo:
txt , js , py , html , etc.`}/>
        <Git codigo={`git add .`}/>
        <Conseptos texto={`Con esto seleccionaremos a todos los archivos que esten en ese enlistado.`}/>
        <h2>git commit</h2>
        <Git codigo={`git commit -m "mensaje"`}/>
        <Conseptos texto={`ejemplo:`}/>
        <Git codigo={`git commit -m "arregle un bug XD"`}/>
        <Conseptos texto={`Esto nos servira para poner un mensaje a nuestro repositorio.`}/>
        <h2>rm</h2>
        <Git codigo={`rm nombre`}/>
        <Conseptos texto={`ejemplo`}/>
        <Git codigo={`rm archivo.txt`}/>
        <Conseptos texto={`Con esto removeremos/eliminaremos un archivo.`}/>
        <h2>restore</h2>
        <Git codigo={`git restore --staged nombre de archivo`}/>
        <Conseptos texto={`ejemplo`}/>
        <Git codigo={`git restore --staged algo.txt`}/>
        <Conseptos texto={`Con esto quitaremos algun cambio que hagamos en simples palabras es como un ctr-z.`}/>
        <h2>mv</h2>
        <Git codigo={`mv nombre de archivo nuevo nombre`}/>
        <Conseptos texto={`ejemplo`}/>
        <Git codigo={`mv archivo.txt archivo_1.txt`}/>
        <Conseptos texto={`Con esto cambiaremos el nombre de un archivo.`}/>
        <Git codigo={`git mv nombre de archivo , nuevo nombre`}/>
        <Conseptos texto={`Con esto lo haremos de forma mas rapida ya que se guardaran los cambios.`}/>
        <h2>gitignore</h2>
        <Conseptos texto={`Con esto estaremos ignorando un archivo esto nos puede servir para que solo nosotros podamos trabajar con ese archivo y que no se suba al repositorio.

.gitignore debemos crearlo en un archivo nuevo y luego dentro de ese archivo poner la carpeta o archivo que queremos ignorar.`}/>
        <h2>git status -s</h2>
        <Git codigo={`git status -s`}/>
        <Conseptos texto={`Con esto nos mostrara el estatus de nuestros repositorios pero de forma mas elegante 😎😎😎`}/>
        <h2>git diff</h2>
        <Git codigo={`git diff`}/>
        <Conseptos texto={`Cos esto veremos de forma mas visual los cambios que hicimos en nuestro archivo.`}/>
        <h2>git log</h2>
        <Git codigo={`git log`}/>
        <Conseptos texto={`Con esto veremos el historial de cambios y ademas el usuario que los hizo.`}/>
        <h2>git log --oneline</h2>
        <Git codigo={`git log --oneline`}/>
        <Conseptos texto={`Con esto veremos lo mismo pero de forma mas elegante.`}/>
        <h2>git branch</h2>
        <Git codigo={`git branch`}/>
        <Conseptos texto={`Con esto veremos en que rama del proyecto estamos trabajando.`}/>
        <h2>git checkout -b</h2>
        <Git codigo={`git checkout -b nombre de la rama`}/>
        <Conseptos texto={`ejemplo`}/>
        <Git codigo={`git checkout -b nueva_rama`}/>
        <Conseptos texto={`Con esto crearemos una nueva rama para desarrollar.`}/>
        <h2>git checkout</h2>
        <Git codigo={`git checkout nombre`}/>
        <Conseptos texto={`ejemplo`}/>
        <Git codigo={`git checkout rama_b`}/>
        <Conseptos texto={`Con esto nos moveremos a otra rama.`}/>
        <h2>cat</h2>
        <Git codigo={`cat`}/>
        <Conseptos texto={`Con esto veremos el contenido de nuestro archivo.`}/>
        <h2>git merge</h2>
        <Git codigo={`git merge nombre`}/>
        <Conseptos texto={`ejemplo`}/>
        <Git codigo={`git merge rama_b`}/>
        <Conseptos texto={`Esto nos seevira para traer los cambios de una rama a otra.
posdata debemos estar en la rama que queramos traer los cambios.`}/>
        <h2>git push</h2>
        <Git codigo={`git push`}/>
        <Conseptos texto={`Con esto estaremos subiendo los cambios que hagamos al github.`}/>
        <h2>git push -u</h2>
        <Git codigo={`git push -u origin nombre`}/>
        <Conseptos texto={`ejemplo`}/>
        <Git codigo={`git push -u origin nuevaRama`}/>
        <Conseptos texto={`Con esto subiremos una nueva rama al github.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default UseGit;