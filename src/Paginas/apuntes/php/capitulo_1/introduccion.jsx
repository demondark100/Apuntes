import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";


// imagenes
import downloadXampp from "../imgs/downloadXAMPP.png";
import abiriXampp from "../imgs/XAMPPopen.png";
import img3 from "../imgs/img3.png";
import img4 from "../imgs/img4.png";
import img5 from "../imgs/img5.png";

function IntroPhp(){
  return (
    <>
      <Resumenes />
      <main>
        <h1>Introduccion</h1>
        <Conseptos texto={`Php es un lenguage usado principalmente para trabajar con el lado del servidoer, para poder usar este lenguaje necesitamos tener un servidor local en este caso usaremos XAMPP.`}/>
        <h3>¿Que es XAMPP?</h3>
        <Conseptos texto={`Xampp es una herramienta que configurara un servidor local por nosotros, esto significa que nos facilitara el proceso de configurar un servidor desde 0 para poder recien hacer pruebas con el lenguaje de programacion.`}/>
        <h3>¿Como instalar XAMPP?</h3>
        <Conseptos texto={`Primero nos dirigimos a la pagina oficial de Xampp.`}/>
        <ImagenLink imagen={downloadXampp} link={"https://www.apachefriends.org/"} titulo={"descargar XAMPP"}/>
        <Conseptos texto={`Una vez se haya descargado el archivo solo se da a ejecutar como administrador y hacer click en "next" hasta que se instale.`}/>
        <Conseptos texto={`Ahora que esta instalado abriremos la aplicacion de XAMPP ejecutando como administrador y activamos las primeras 2 casillas.`}/>
        <ImagenLink imagen={abiriXampp} titulo={"Abrir servidor"}/>
        <Conseptos texto={`Excelente ahora tenemos nuestro servidor local abierto ahora como ultimos paso debemos crear nuestro archivo php es recomendable crearlo dentro de una carpeta.
Pero el archivo no se debe de crear donde sea sino que debemos crearlo en el entorno de XAMPP para eso accedemos a la siguiente ruta.`}/>
        <Terminal codigo={`C:\\xampp\\htdocs`}/>
        <Conseptos texto={`Osea debemos entrar a disco local c luego en "xampp" y en "htdocs", una vez estemos en esa ruta crearemos nuestra carpeta con nuestro "archivo.php" adentro, en mi caso la carpeta se llamara "phpCurso"`}/>
        <ImagenLink imagen={img3} titulo={"archivo creado"}/>
        <Conseptos texto={`Dentro de esa carpeta crearemos nuestro archivo con la extencion .php en mi caso se llamara "curso.php"`}/>
        <Terminal codigo={`C:\\xampp\\htdocs\\phpCurso`}/>
        <ImagenLink imagen={img4} titulo={"archivo.php"}/>
        <Conseptos texto={`Excelente ahora que esta creado simplemente entramos a un navegador cualquiera y escribimos la ruta localhost y el nombre de la carpeta seguido del npombre del archivo.php.`}/>
        <Terminal codigo={`http://localhost/nombre de carpeta/archivo.php`}/>
        <Conseptos texto={`En mi caso como la carpeta se llama "phpCurso" y el archivo se llama "curso.php" entonces debo poner esta url en mi navegador.`}/>
        <Terminal codigo={`http://localhost/phpCurso/curso.php`}/>
        <ImagenLink imagen={img5} titulo={"url del servidor"}/>
        <Conseptos texto={`Listo con esto ya tenemos todo nuestro entorno de desarrollo configurado de forma correcta ahora solo falta aprender a programar con este lenguaje de programacion para crear servidores.`}/>
      </main>
      <Footer />
    </>
  )
}

export default IntroPhp;