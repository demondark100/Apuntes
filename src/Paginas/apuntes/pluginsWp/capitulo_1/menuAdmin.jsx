import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


// imagenes
import img3 from "../imgs/img3.png";

function AdminWpPlugin() {
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": "Ahora vamos a configurar el menu del administracion.",
        "lenguage": "Php",
        "codigo": `<?php
add_action("admin_menu","menuAdmin"); // agregar funcion al menu de wordpress
add_menu_page(
  "nombre_pagina",
  "nombre_plugin_menu",
  "permisos_administracion",
  "slug_identificador_wordpress",
  "pagina",
  plugin_dir_url(__FILE__)."ruta/imagen.png", // icono
  "1" // posision del plugin en menu
)`
      },{
        "mensaje": "Configuracion menu administracion",
        "lenguage": "Php",
        "codigo": `<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/

function activar(){
    echo "logica";
}
function desactivar(){
    echo "logica";
}
function borrar(){
    echo "logica";
}

register_activation_hook(__FILE__,"activar");
register_deactivation_hook(__FILE__,"desactivar");
register_uninstall_hook(__FILE__,"borrar");


add_action("admin_menu","menuAdmin");

function menuAdmin(){
    add_menu_page(
        "cursoPlugin",
        "plugin curso",
        "manage_options",
        "sp_menu",
        "paginaAdmin",
        plugin_dir_url(__FILE__)."ruta/imagen.jpg",
        "1"
    );
}

function paginaAdmin(){
    echo "Pagina de administracion";
}`
      }]}/>
      <main>
        <h1>Menu admin</h1>
        <Conseptos texto={`Como nos damos cuenta wordpress tiene una barra lateral a la izquierda, ahora vamos a configurar nuestro plugin para que aparezca en esa barra lateral para darle opciones al usuario en nuestro plugin.`}/>
        <h2>add_action</h2>
        <Conseptos texto={`Con esta funcion podemos agregar una funcion personalizada para que se ejecute en algun (hook/gancho) especifico osea en simples palabras aqui podemos crear una funcion para que se ejecute cuando ya cargo la pagina, para poner en la cabecera de la pagina, etc.`}/>
        <Sintaxis codigo={`add_action("hook/gancho","nombre_funcion")`}/>
        <Conseptos texto={`Como nos damos cuenta esta funcion recibe 2 parametros.`}/>
        <ol>
          <li>hook o gancho: Aqui le indicaremos que la funcion se ejecute cuando pase algun evento en wordpress</li>
          <li>funcion: Aqui le pasaremos la funcion que se ejecutara cuando el evento pase.</li>
        </ol>
        <Conseptos texto={`La funcion add_action tiene demasiados eventos osea demasiados ganchos pero en este caso usaremos el gancho "admin_menu" para poder agregar una funcion para configurar la barra lateral izquierda de wordpress para que nuestro plugin aparezca.`}/>
        <Php codigo={`<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/

// resto de codigo para activar desactivar y eliminar el plugin

add_action("admin_menu","menuAdmin");
function menuAdmin(){
    echo "Funcion para el menu";
}`}/>
        <Conseptos texto={`Como nos damos cuenta al primer parametro le pasamos "admin_menu" para indicarle a wordpress que le pasaremos una funcion para el menu lateral de nuestro plugin.`}/>
        <h2></h2>
        <h2>add_menu_page</h2>
        <Conseptos texto={`add_menu_page crea un nuevo ítem en el menú de administración de WordPress para el plugin, donde podemos agregar contenido personalizado o configuraciones de nuestro plugin, en simples palabras con esta funcion vamos a hacer que nuestro plugin se muestre en la barra lateral de wordpress y alli podemos crear una pagina personalizada para que el usuario pueda hacer configuraciones en el plugin o cualquier otra cosa.`}/>
        <ol>
          <li>Titulo de la pagina</li>
          <li>Titulo que se mostrara en el menu de wordpress</li>
          <li>A quien daremos permisos de las opciones</li>
          <li>Slug en simples palabras esto sirve para identificar a nuestro plugin en el menu de administracion de wordpress, no hay que darle mucha importancia aunque si es crucial ponerlo porque eso sirve mucho a wordpress pero no a nosotros.</li>
          <li>Funcion que renderizara una pagina cuando se haga click en nuestroe plugin en la barra lateral del menu de wordpress.</li>
          <li>Imagen que se mostrara en el menu lateral del plugin.</li>
          <li>En que posision pondremos el plugin en la barra lateral del menu de wordpress.</li>
        </ol>
        <Sintaxis codigo={`add_menu_page(
  "nombre de la pagina",
  "nombre del plugin menu",
  "permisos de administracion",
  "slug identificador para wordpress",
  "funcion de pagina",
  "imagen/icono de plugin",
  "posision donde se mostrara el plugin en el menu"
)`}/>
        <Conseptos texto={`Ahora que sabemos como funcionan estas dos funciones podemos configurar nuestro panel del menu del administracion de nuestro plugin.`}/>
        <Php codigo={`<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/

function activar(){
    echo "logica";
}
function desactivar(){
    echo "logica";
}
function borrar(){
    echo "logica";
}

register_activation_hook(__FILE__,"activar");
register_deactivation_hook(__FILE__,"desactivar");
register_uninstall_hook(__FILE__,"borrar");


add_action("admin_menu","menuAdmin");

function menuAdmin(){
    add_menu_page(
        "cursoPlugin",
        "plugin curso",
        "manage_options",
        "sp_menu",
        "paginaAdmin",
        plugin_dir_url(__FILE__)."ruta/imagen.jpg",
        "1"
    );
}

function paginaAdmin(){
    echo "Pagina de administracion";
}`}/>
        <ImagenLink tipo={"imagen"} titulo={"menu plugin"} imagen={img3}/>
        <Conseptos texto={`Como nos damos cuenta si se ha configurado el plugin en el menu lateral de la izquierda en wordpress, se puso el titulo que le indicamos, se agrego la pagina que le indicamos en administracion en este caso solo un mensaje "Pagina de administracion" y tambien la imagen aunque yo no puse ninguna imagen.`}/>
      </main>
      <Footer />
    </>
  );
}

export default AdminWpPlugin;