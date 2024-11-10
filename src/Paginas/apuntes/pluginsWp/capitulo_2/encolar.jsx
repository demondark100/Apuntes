import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";




// imagenes
import img8 from "../imgs/img8.png";
import img9 from "../imgs/img9.png";
import img10 from "../imgs/img10.png";


function EncolarArchivoWpPlugin(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a importar/encolar archivos css y js para poder dar estilos y funcionalidad a nuestro plugin.`,
        "lenguage": "Php",
        "codigo": `// 3. Encolar scripts en la administración
add_action('admin_enqueue_scripts', 'encolar'); // decir a wordpress que encolaremos archivos
function encolar() {
    $screen = get_current_screen();
    if ($screen->id === "plugin-curso_page_sp_submenu1") { // cargar archivos cuando sea necesario
        // encolar css
        wp_enqueue_style(
            "DbAdminEstyle",
            plugins_url('ruta/archivo.css', __FILE__)
        );
        // encolar js
        wp_enqueue_script(
            'dbAdminScript',
            plugins_url('ruta/archivo.js', __FILE__),
            array(),
            null,
            true
        );
    }
}`
      },{
        "mensaje": `Ahora veremos como se ve hasta ahora toda la configuracion de nuestro plugin.`,
        "lenguage": "Php",
        "codigo": `<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para WordPress.
Version: 0.0.1
*/

// 1. Funciones de activación, desactivación y desinstalación del plugin
function activarCurso() {
    global $wpdb;

    // Crear la tabla en la base de datos
    $tabla = $wpdb->prefix . 'mi_tabla1';
    $crearTabla1 = "CREATE TABLE IF NOT EXISTS $tabla (
        \`UserId\` INT(11) NOT NULL AUTO_INCREMENT,
        \`nombre\` VARCHAR(100) NOT NULL,
        \`apellido\` VARCHAR(100) NOT NULL,
        \`edad\` INT(11) DEFAULT NULL,
        \`trabajo\` TEXT DEFAULT NULL,
        PRIMARY KEY (\`UserId\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta($crearTabla1);
}

function DesactivarCurso() {
    global $wpdb;
    $tabla = $wpdb->prefix . 'mi_tabla1';
    $wpdb->query("DROP TABLE IF EXISTS $tabla");
}

// Registrar los hooks de activación, desactivación y desinstalación
register_activation_hook(__FILE__, 'activarCurso');
register_uninstall_hook(__FILE__, 'DesactivarCurso');

// 2. Menú de administración
add_action('admin_menu', 'menuAdmin');
function menuAdmin() {
    // Menú principal
    add_menu_page(
        'Curso Plugin',
        'Plugin Curso',
        'manage_options',
        'sp_menuCurso',
        'mostrar_pagina_admin',
        null,
        2
    );

    // Submenús
    add_submenu_page(
        'sp_menuCurso', // Corregido para vincularlo al menú principal
        'Base de datos',
        'Base de datos',
        'manage_options',
        'sp_submenu1',
        'db'
    );
}

// Función para cargar las páginas de administración desde un archivo externo
function mostrar_pagina_admin() {
    include_once plugin_dir_path(__FILE__) . 'admin/mainMenu/adminMenu.php';
}

function db() {
    include_once plugin_dir_path(__FILE__) . 'admin/db/db.php';
}



// 3. Encolar scripts en la administración
add_action('admin_enqueue_scripts', 'encolarSubMenu');
function encolarSubMenu() {
    $screen = get_current_screen();
    if ($screen->id === "plugin-curso_page_sp_submenu1") {
        wp_enqueue_style(
            "DbAdminEstyle",
            plugins_url('admin/db/db.css', __FILE__)
        );
        wp_enqueue_script(
            'dbAdminScript',
            plugins_url('admin/db/db.js', __FILE__),
            array(),
            null,
            true
        );   
    }
}`
      }]}/>
      <main>
        <h1>Encolar archivos</h1>
        <Conseptos texto={`Perfecto ahora que ya tenemos nuestra pagina para el menu o sub menu ahora debemos poder darles estilos o funcionalidades con js, normalmente se suele usar jquery en el lado de javaScript pero en mi caso yo no usare jquery sino que usare js nativo pero la implementacion es igual tanto para js como para jquery.`}/>
        <Terminal codigo={`CURSO
|--admin
|---db
|-----db.css
|-----db.js
|-----db.html
|-----serverDb.php
|---mainMenu
|-----adminMenu.js
|-----adminMenu.html
|--main.php`}/>
        <Conseptos texto={`En mi caso esta sera la estructura que tiene nuestro proyecto, como nos damos cuenta todo esta completamente modularizado, de esta manera vamos a poder trabajar sin un codigo espagueti mesclando js y css en un mismo archivo.`}/>
        <h2>admin_enqueue_scripts</h2>
        <Conseptos texto={`Este es el primer parametro que usremos en la funcion add_action, esto para indicar a wordpress que vamos a usar una funcion que encolara/importara un archivo en especifico para los menus del administrador y para el plugin que se mostrara en el fron-end.`}/>
        <Php codigo={`// logica de arriba
add_action('admin_enqueue_scripts', 'funcionEncolar');
functio funcionEncolar(){
  // logica para encolar archivos js o css.
}`}/>
        <h2>get_current_screen</h2>
        <Conseptos texto={`Con esta funcion vamos a poder saber en que menu del administrador de wordpress estamos, por ejemplo wordpress tiene varias opciones como la seccion de apariencia, plugins, inicio, etc, al momento de crear un plugin el nombre de nuestro plugin tambien aparece en el menu de wordpress.`}/>
        <ImagenLink tipo={"imagen"} titulo={"barra wordpress"} imagen={img8}/>
        <Conseptos texto={`Como nos damos cuenta en la barra izquierda de wordpress tambien aparece nuestro plugin, nosotros podemos tener el "id" de cada pagina de wordpress incluyendo nuestro plugin, esto evitara que los archivos css, js, etc se carguen antes de tiempo lo cual puede causar muchos problemas a futuro, esto funcion normalmente se suele usar en las funciones donde importaremos los archivos necesarios para el menu de nuestro plugin para que solo se haga la importacion de los archivos solo si el id de nuestro plugin coinside con el id en el que estamos ahora.`}/>
        <Conseptos texto={`En mi caso el plugin que estoy haciendo tiene dos secciones:`}/>
        <ol>
          <li>Plugin curso: Menu principal</li>
          <li>Base de datos: Sub menu</li>
        </ol>
        <Php codigo={`add_action('admin_enqueue_scripts', 'importarArchivosMenu');
function importarArchivosMenu(){
  $screen = get_current_screen();
  echo $screen->id;
}`}/>
        <Conseptos texto={`Ahora segun a cual pagina de nuestro plugin accedamos nos mostrara un id distinto.`}/>
        <ImagenLink tipo={"imagen"} imagen={img9} titulo={"menu principal id"}/>
        <ImagenLink tipo={"imagen"} imagen={img10} titulo={"submenu id"}/>
        <Conseptos texto={`Como nos damos cuenta segun la pagina que accedamos el id cambia, gracias a eso evitaremos que archivos se carguen cuando no deben y asi evitar problemas a futuro.`}/>
        <h2>wp_enqueue_style</h2>
        <Conseptos texto={`Esta funcion tiene 5 parametros en total, 2 de esos parametros son obligatorios los demas son opcionales por si queremos usar dependencias u otros,`}/>
        <Sintaxis codigo={`wp_enqueue_style(
  $handle (obligatorio): Nombre único para identificar el estilo.
  $src (obligatorio): URL del archivo CSS.
  $deps (opcional): Array de dependencias.
  $ver (opcional): Versión del archivo CSS.
  $media (opcional): Tipo de medio (por defecto, 'all').
);`}/>
        <Conseptos texto={`Ahora veremos como es que funciona con una sintaxis real.`}/>
        <Php codigo={`// 3. Encolar scripts en la administración
add_action('admin_enqueue_scripts', 'encolarSubMenu');
function encolarSubMenu() {
    $screen = get_current_screen();
    if ($screen->id === "plugin-curso_page_sp_submenu1") {
        wp_enqueue_style(
            "DbAdminEstyle",
            plugins_url('admin/db/db.css', __FILE__)
        );
        // encolar mas archivos aqui abajo
    }
}`}/>
        <h2>wp_enqueue_script</h2>
        <Conseptos texto={`Con esta funcion vamos a importar solo archivos js personalizados, tambien podemos importar dependencias que se basen solo en js como jquery u otros.`}/>
        <Sintaxis codigo={`wp_enqueue_script(
  $handle: (string) Un identificador único para tu script.
  $src: (string) La URL o ruta del archivo JavaScript.
  $deps: (array) Un array de identificadores de scripts de los que depende tu script (opcional).
  $ver: (string) La versión del script (opcional).
  $in_footer: (bool) Si se carga en el footer (true) o en el head (false, por defecto).
);`}/>
        <Php codigo={`// 3. Encolar scripts en la administración
add_action('admin_enqueue_scripts', 'encolarSubMenu');
function encolarSubMenu() {
    $screen = get_current_screen();
    if ($screen->id === "plugin-curso_page_sp_submenu1") {
        // encolar mas archivos css aqui arriba    
        wp_enqueue_script(
            'dbAdminScript',
            plugins_url('admin/db/db.js', __FILE__),
            array(),
            null,
            true
        );
        // encolar mas archivos aqui abajo
    }
}`}/>
        <Conseptos texto={`Tambien podemos hacer que el "archivo.js" dependa de alguna libreria como jQuery en mi caso no trabajare con JQuery pero solo debemos poner en el array la dependencia que necesitamos`}/>
        <Php codigo={`// 3. Encolar scripts en la administración
add_action('admin_enqueue_scripts', 'encolarSubMenu');
function encolarSubMenu() {
    $screen = get_current_screen();
    if ($screen->id === "plugin-curso_page_sp_submenu1") {
        // encolar mas archivos css aqui arriba    
        wp_enqueue_script(
            'dbAdminScript',
            plugins_url('admin/db/db.js', __FILE__),
            array('jquery'),
            null,
            true
        );
        // encolar mas archivos aqui abajo
    }
}`}/>
      </main>
      <Footer />
    </>
  )
}


export default EncolarArchivoWpPlugin;