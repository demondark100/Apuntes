import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";



// imagenes
import img4 from "../imgs/img4.png";


function SubmenuWpPlugin(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Un sub menu o sub menus debe de ir en la misma funcion deonde va el menu principal porque ambos usan "add_action" con el gancho "admin_menu".`,
        "lenguage": "Php",
        "codigo": `// codigo de arriba
add_action("admin_menu","menus");
function menus(){
  // creacion del menu de principal.
  add_submenu_page(
    "sp_menu",  // slug
    "titulo pagina",  // titulo de la pagina
    "submenu 1",  // titulo del sub menu
    "manage_options",  // persimos de administracion
    "sp_menu_submenu1", // slug del sub menu
    "submenu1" // funcion que renderiza la pagina del submenu.
  );
  // se pueden crear varios sub menus
}
function submenu1(){
  echo "Pagina del submenu";
}`
      }]}/>
      <main>
        <h1>Sub menu</h1>
        <Conseptos texto={`Tambien podemos configurar un sub menu en nuestro plugin con el mismo gancho que usamos para el menu osea usaremos la funcion "add_action" con el gancho "admin_menu".`}/>
        <h2>add_submenu_page</h2>
        <Conseptos texto={`Esta funcion al igual que la funcion para configurar el menu tambien recibe varios parametros.`}/>
        <ol>
          <li>slug: Aqui ponemos el slug del submenu.</li>
          <li>Titulo pagina: Aqui ponemos el titulo de la pagina.</li>
          <li>Titulo submenu: Aqui ponemos el titulo de nuestro submenu.</li>
          <li>Permisos: Aqui damos los permisos al administrador.</li>
          <li>Slug propio: Aqui usaremos un slug especifico para el sub menu.</li>
          <li>Pagina: Aqui ponemos la pagina que se mostrara en ese sub menu.</li>
        </ol>
        <Sintaxis codigo={`add_submenu_page(
    "sp_menu", // slug
    "titulo pagina",  // titulo de la pagina
    "titulo submenu",  // titulo del submenu
    "manage_options",  // permiso para administrador
    "sp_menu_titulo",  // slug propio del submenu
    "paginaSubmenu"  // pagina para el sub menu
);

function paginaSubmenu(){
  echo "pagina de sub menu";
}`}/>
        <Conseptos texto={`Ahora que sabemos que parametros necesita esta funcion ahora vamos a configurar un submenu con el menu para poder entender bien a que me refiero a que se usa el mismo gancho tanto para el menu como para el submenu.`}/>
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

    add_submenu_page(
        "sp_menu",
        "titulo pagina",
        "submenu 1",
        "manage_options",
        "sp_menu_submenu1",
        "submenu1"
    );

    add_submenu_page(
        "sp_menu",
        "titulo pagina",
        "submenu 2",
        "manage_options",
        "sp_menu_submenu2",
        "submenu2"
    );
}

function paginaAdmin(){
    echo "Pagina de administracion";
}
function submenu1(){
    echo "Sub menu 1";
}
function submenu2(){
    echo "Sub menu 2";
}`}/>
        <Conseptos texto={`En mi caso yo estoy configurando dos sub menus, y como nos damos cuenta usamos el hook "admin_menu" de la funcion add_action, en la misma funcion que configuramos el menu tambien se configuran los sub menus.`}/>
        <ImagenLink tipo={"imagen"} titulo={"sub menus"} imagen={img4}/>
      </main>
      <Footer />
    </>
  )
}

export default SubmenuWpPlugin;