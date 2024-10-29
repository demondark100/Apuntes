import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";



// imagenes
import img5 from "../imgs/img5.png";
import img6 from "../imgs/img6.png";
import img7 from "../imgs/img7.png";


function PageAdminWpPlugin(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Para importar paginas para cada seccion usaremos distintas funciones que nos ayudaran a obtener las rutass de cada archivo de forma dinamica para que se reendericen en cada seccion del plugin.`,
        "lenguage": "Php",
        "codigo": `add_action('admin_menu', 'menuAdmin');
function menuAdmin(){
    // Menú principal
    add_menu_page(
        'Curso Plugin',
        'Plugin Curso',
        'manage_options',
        'sp_menu',
        'mostrar_pagina_admin',
        plugin_dir_url(__FILE__).'ruta/imagen.jpg',
        1
    );

    // Submenús
    add_submenu_page(
        'sp_menu',
        'Título Submenú 1',
        'Submenú 1',
        'manage_options',
        'sp_menu_submenu1',
        'submenu1'
    );
}

// Función para cargar las páginas de administración desde un archivo externo
function mostrar_pagina_admin() {
    include_once plugin_dir_path(__FILE__) . 'admin/adminMenu.php';
}
function submenu1(){
    include_once plugin_dir_path(__FILE__) . 'admin/submenu1.php';
}`
      },{
        "lenguage": "Php",
        "codigo": `<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para WordPress.
Version: 0.0.1
*/

// 1. Funciones de activación, desactivación y desinstalación del plugin
function activar(){
    global $wpdb;
    $crearTabla1 = "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}mi_tabla1(
        \`UserId\` INT NOT NULL AUTO_INCREMENT,
        \`nombre\` VARCHAR(100) NOT NULL,
        \`apellido\` VARCHAR(100) NOT NULL,
        \`edad\` INT NULL,
        \`trabajo\` TEXT NULL,
        PRIMARY KEY (\`UserId\`)
    )";
    $wpdb->query($crearTabla1);
}
function desactivar(){
    echo "Lógica de desactivación";
}
function borrar(){
    echo "Lógica de desinstalación";
}

register_activation_hook(__FILE__, 'activar');
register_deactivation_hook(__FILE__, 'desactivar');
register_uninstall_hook(__FILE__, 'borrar');

// 2. Menú de administración
add_action('admin_menu', 'menuAdmin');
function menuAdmin(){
    // Menú principal
    add_menu_page(
        'Curso Plugin',
        'Plugin Curso',
        'manage_options',
        'sp_menu',
        'mostrar_pagina_admin',
        plugin_dir_url(__FILE__).'ruta/imagen.jpg',
        1
    );

    // Submenús
    add_submenu_page(
        'sp_menu',
        'Título Submenú 1',
        'Submenú 1',
        'manage_options',
        'sp_menu_submenu1',
        'submenu1'
    );
    add_submenu_page(
        'sp_menu',
        'Título Submenú 2',
        'Submenú 2',
        'manage_options',
        'sp_menu_submenu2',
        'submenu2'
    );
}

// Función para cargar las páginas de administración desde un archivo externo
function mostrar_pagina_admin() {
    include_once plugin_dir_path(__FILE__) . 'admin/adminMenu.php';
}
function submenu1(){
    include_once plugin_dir_path(__FILE__) . 'admin/submenu1.php';
}
function submenu2(){
    include_once plugin_dir_path(__FILE__) . 'admin/submenu2.php';
}`
      }]}/>
      <main>
        <h1>Importar pagina de administracion</h1>
        <Conseptos texto={`Anteriormente vimos que para la pagina del administrador necesitabamos crear una funcion para mostrar algo en esa pagina.`}/>
        <Php codigo={`// resto del codigo
function menus(){
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
      <Conseptos texto={`Por ahora esa funcion solo muestra una simple cadena de texto pero para poder importar una pagina desde otro archivo debemos usar funciones que reconstruiran la ruta para poder usar archivos desde otro lado.`}/>
      <Conseptos texto={`En mi caso mi proyecto esta estructurado asi.`}/>
      <Terminal codigo={`CURSO
|__admin
|_____adminMenu.php
|_____submenu1.php
|_____submenu2.php
|__main.php`}/>
        <Conseptos texto={`En este caso usaremos el archivo "adminMenu.php" para que sea la pagina principal de nuestro administrador.`}/>
        <Conseptos texto={`Entonces en la funcion "paginaAdmin" vamos a reemplazar ese simple echo por la ruta del archivo que sea la pagina del administrador.`}/>
        <Php codigo={`function paginaAdmin(){
    include_once plugin_dir_path(__FILE__) . 'admin/adminMenu.php';
}`}/>
        <Conseptos texto={`Ahora en vez de usar un echo estamos creando un camino donde wordpress buscara la ruta de nuestro archivo que servira para ser la pagina de nuestro administrador, ahora explicaremos para que sirve cada funcion que se uso en esta parte.`}/>
        <ol>
          <li>include_once: Es para que un archivo solo se pueda importar una sola vez no es tan cesario si estamos seguros que solo importaremos un archivo solo una vez pero puede ser util para evitar conflictos en el pryecto a futuro.</li>
          <li>plugin_dir_path: Devuelve la ruta absoluta del directorio del plugin, permitiendo acceder a archivos internos de manera segura y consistente.</li>
          <li>__FILE__: es una constante de PHP que devuelve la ruta completa y el nombre del archivo actual, útil para obtener la ubicación del archivo en el que se usa.</li>
        </ol>
        <Conseptos texto={`Con esa estructura tambien podemos importar paginas distintas para los submenus, ahora importaremos 3 paginas uno para el menu principal y otro para los sub menus.`}/>
        <h2>Solo la funcion</h2>
        <Php codigo={`add_action('admin_menu', 'menuAdmin');
function menuAdmin(){
    // Menú principal
    add_menu_page(
        'Curso Plugin',
        'Plugin Curso',
        'manage_options',
        'sp_menu',
        'mostrar_pagina_admin',
        plugin_dir_url(__FILE__).'ruta/imagen.jpg',
        1
    );

    // Submenús
    add_submenu_page(
        'sp_menu',
        'Título Submenú 1',
        'Submenú 1',
        'manage_options',
        'sp_menu_submenu1',
        'submenu1'
    );
    add_submenu_page(
        'sp_menu',
        'Título Submenú 2',
        'Submenú 2',
        'manage_options',
        'sp_menu_submenu2',
        'submenu2'
    );
}

// Función para cargar las páginas de administración desde un archivo externo
function mostrar_pagina_admin() {
    include_once plugin_dir_path(__FILE__) . 'admin/adminMenu.php';
}
function submenu1(){
    include_once plugin_dir_path(__FILE__) . 'admin/submenu1.php';
}
function submenu2(){
    include_once plugin_dir_path(__FILE__) . 'admin/submenu2.php';
}`}/>
        <Conseptos texto={`En este caso estamos importando 3 paginas 1 que seria el menu de administracion principal y otro que serian los dos sub menus.`}/>
        <h2>adminMenu.php</h2>
        <Php codigo={`<h1>Probando pagina</h1>
<p>Estamos usando html puro junto con php</p>`}/>
        <ImagenLink tipo={"imagen"} imagen={img5} titulo={"menu principal"}/>
        <h2>submenu1</h2>
        <Php codigo={`<h1>Sub menu 1</h1>
<p>esto es el sub menu 1</p>`}/>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"sub menu 1"}/>
        <h2>submenu2</h2>
        <Php codigo={`<h1>sub menu 2</h1>
<p>este es el submenu 2</p>`}/>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"sub menu 2"}/>
        <Conseptos texto={`Como nos damos cuenta los archivos separados si se importan de forma correcta en cada seccion de nuestro plugin.`}/>
      </main>
      <Footer />
    </>
  )
}

export default PageAdminWpPlugin;