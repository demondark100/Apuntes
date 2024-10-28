import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"



// imagenes
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";

function InstallWpPlugin(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a instalar wordpress y a darle caracteristicas a nuestro primero plugin como el nombre y otros.`,
        "lenguage": "Php",
        "codigo": `<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/`
      },{
        "mensaje": `Ahora veremos como acceder al administrador de wordpress tanto en un entorno local como en un entorno donde ya se publico el proyecto.`,
        "lenguage": "Php",
        "codigo": `<?php
http://localhost/nombre_carpeta/wp-admin // entorno local
https://dominio.com/wp-admin // wordpress ya publicado`
      }]}/>
      <main>
        <h1>Instalacion de wordpress</h1>
        <Conseptos texto={`Para crear plugins para wordpress necesitaremos instalar wordpress de forma obligatoria, otros hacen tremendas configuraciones con bases de datos y todo un desastre pero aqui iremos por la opcion mas practica, rapida y facil de configurar.`}/>
        <h2>¿Que necesitamos?</h2>
        <ol>
          <li>Primero necesitamos instalar xampp</li>
          <li>Descargar wordpress para usar en entorno local</li>
        </ol>
        <Conseptos texto={`Y listo solo falta configurar que es tambien demasiado sensillo.`}/>
        <h2>Instalar XAMPP</h2>
        <Conseptos texto={`XAMPP sera nuestro servidor local este ya viene con bases de datos integradas para poder trabajar con wordpress.`}/>
        <Conseptos texto={`Para ver como instalar XAMPP vamos a php/capitulo 1/introduccion alli encontraremos la forma de instalar XAMPP.`}/>
        <h2>Instalar wordpress</h2>
        <Conseptos texto={`Ahora para instalar wordpress vamos a ir a la pagina web oficial de wordpress para descargar wordpress.`}/>
        <ImagenLink tipo={"link"} imagen={img1} titulo={"Descargar wordpress"} link={`https://wordpress.org/download/`}/>
        <Conseptos texto={`Luego copiamos el archivo y nos dirigimos a "XAMPP/htdocs" y creamos una nueva carpeta donde pegaremos el archivo.`}/>
        <Conseptos texto={`Listo ahora solo falta irnos al navegador y poner esta ruta.`}/>
        <Terminal codigo={`http://localhost/nombre_carpeta`}/>
        <Conseptos texto={`Y listo solo rellenamos todos los campos que indica para que cree el wordpress y podamos trabajar con eso.`}/>
        <Conseptos texto={`Ahora cuando creemos nuestro plugin vamos a tener que llevar la carpeta que creemos en la siguiente ruta "XAMPP/htdocs/nombre_carpeta/wp-content/plugins" y alli pegamos nuestra carpeta donde estara nuestro plugin osea deberia verse algo asi.`}/>
        <Terminal codigo={`XAMPP
|
|__XAMPP
|___htdocs
|____nmbre_carpeta
|_____wp-conent
|______plugins`}/>
        <Conseptos texto={`Justo en esa ruta debemos crear nuestro plugin para que se pueda reflejar todo lo que hacemos osea deberia quedar asi, en mi caso creare un plugin llamado curso y adentro su archivo llamado "curso.php".`}/>
        <Terminal codigo={`XAMPP
|
|__XAMPP
|___htdocs
|____nmbre_carpeta
|_____wp-conent
|______plugins
|_______curso
|________curso.php`}/>
        <Conseptos texto={`Ahora para empezar con nuestro plugin dentro de "curso.php" vamos a empezar a indicar a wordpress las caracteristicas de nuestro plugin.`}/>
        <Php codigo={`<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/`}/>
        <Conseptos texto={`Con esto estamos definiendo lo que el plugin mostrara en wordpress como el nombre del plugin una url del desarrollador, una descripcion y una version de nuestro plugin.`}/>
        <Conseptos texto={`Cuando terminesmo de hacer esto para ver que si se refleja vamos a wordpress y a la seccion de plugins.`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"plugin"}/>
        <Conseptos texto={`Para acceder al administrador del plugin solo accedemos a esta url`}/>
        <Terminal codigo={`http://localhost/nombre_carpeta/wp-admin`}/>
        <Conseptos texto={`En caso de que el wordpress ya este publicado en un dominio solo seria cuestion de poner.`}/>
        <Terminal codigo={`https://dominio.com/wp-admin`}/>
      </main>
      <Footer />
    </>
  )
}

export default InstallWpPlugin;