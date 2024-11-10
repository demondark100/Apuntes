import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";


// imagenes
import img11 from "../imgs/img11.png";

function ServidoresWpPlugin(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Normalmente al crear un plugins se suele hacer un codigo espagueti mesclando el servidor con la estructura html cosa que es poco escalable y poco legible, por eso aqui vamos a modularizar archivos separados que hara que todo sea mas legible.

en la configuracion    php`,
        "lenguage": "Php",
        "codigo": `function encolar(){
// logica para encolar js y css.
  wp_localize_script('idArchivo', 'nombreObjeto', array(
    'url' => plugins_url('ruta/server.php', __FILE__)
  ));
}`
      },{
        "mensaje": `En el lado front-end    javaScript`,
        "lenguage": "JavaScropt",
        "codigo": `console.log(nombreObjeto.url);`
      },{
          "mensaje": `Obtener funciones de wordpress.
Archivo de servidor personalizado     php`,
          "lenguage": "Php",
          "codigo": `<?php
$path = dirname(__FILE__);

for ($i = 0; $i < 10; $i++) {
    if (file_exists($path . '/wp-load.php')) {
        require_once($path . '/wp-load.php');
        break;
    }
    $path = dirname($path);
}

if (!defined('ABSPATH')) {
    exit; // Salir si se accede directamente
}

global $wpdb;
// ahora si se puede usar funciones de wordpress.`
      },{
        "mensaje": "Configuracion completa hasta ahora.",
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
    $tabla = $wpdb->prefix . \'mi_tabla1\';
    $crearTabla1 = "CREATE TABLE IF NOT EXISTS $tabla (
        \`UserId\` INT(11) NOT NULL AUTO_INCREMENT,
        \`nombre\` VARCHAR(100) NOT NULL,
        \`apellido\` VARCHAR(100) NOT NULL,
        \`edad\` INT(11) DEFAULT NULL,
        \`trabajo\` TEXT DEFAULT NULL,
        PRIMARY KEY (○\`UserId\`)
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
    include_once plugin_dir_path(__FILE__) . 'admin/mainMenu/adminMenu.html';
}

function db() {
    include_once plugin_dir_path(__FILE__) . 'admin/db/db.html';
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

        wp_localize_script(\'dbAdminScript\', \'rutaServerDb\', array(
            \'url\' => plugins_url(\'admin/db/serverDb.php\', __FILE__)
        ));
    }
}`
      }]}/>
      <main>
        <h1>Entorno servidores</h1>
        <Conseptos texto={`Al renderizar la pagina de los plugins tanto de administrador como del frontEnd se suele usar una estructura espagueti debido a que se crea la logica del servidor y la estructura se suele mesclar en un solo archivo en el caso de los plugins seria que se mescla php y html.`}/>
        <Php codigo={`<?php
  // logica de servidor
?>
<div>
  <p>Pagina que se mostrara</p>
</div>`} />
        <Conseptos texto={`Como nos damos cuenta la logica del servidor y la logica de la estructura se ejecuta en el mismo archivo lo cual puede ser poco escalable a futuro, por eso vamos a modularizar todo en distintos archivos, uno sera especificamente para el servidor otro para las funciones js otro para los estilos y otro para la pagina..`}/>
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
|-----serverAdminMenu.php
|-----adminMenu.css
|--main.php`}/>
        <Conseptos texto={`En este caso la estructura de nuestro archivo se compone de estas dos formas, ahora vamos a trabajar con el sub menu base de datos, para eso simplemente configuramos en el "main.php" que se muestre la pagina, solo necesitamos la pagina principal, el js y por ultimo los estilos, el archivo que servira como servidor no es necesario que se encuele/importe debido a que ese archivo sera independiente y solo sera para recibir procesar y enviar datos al front-end.`}/>
        <h2>wp_localize_script</h2>
        <Conseptos texto={`Con esta funcion vamos a pasar datos de php a un archivo js, es demasiado util para poder trabajar con fetch ya que fetch necesita una ruta exacta para enviar y recibir datos de un servidor.`}/>
        <Sintaxis codigo={`wp_localize_script(
  $handle: El identificador del script JS al que quieres pasar los datos.
  $object_name: El nombre del objeto JS que contendrá los datos.
  $l10n: Un array asociativo con los datos que deseas pasar.
);`}/>
        <Conseptos texto={`Ahora veremos como se veria la funcion en un entorno real, esta funcion debe de ir en la misma funcion donde estamos encolando/importando los archivos necesarios para la pagina en la cual trabajaremos.`}/>
        <Sintaxis codigo={`wp_localize_script('JsArchivoName', 'NombreObjeto', array(
  \'claveObjeto\' => plugins_url('admin/db/serverDb.php', __FILE__)
));'));`}/>
        <Conseptos texto={`Asi es como se aplica en la configuracion de la pagina principal en mi caso "main.php".`}/>
        <Php codigo={`add_action('admin_enqueue_scripts', 'encolarSubMenu');
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

        wp_localize_script('dbAdminScript', 'rutaServerDb', array(
            'url' => plugins_url('admin/db/serverDb.php', __FILE__)
        ));
    }
}`}/>
        <Conseptos texto={`En este caso estamos pasando la ruta de nuestro archivo que actuara como servidor (serverDb) al archivo js que tiene el id de (dbAdminScript) que servira para poder interactuar el front-end con el back-end.`}/>
        <Conseptos texto={`Ahora que ya le pasamos la ruta al archivo js podemos interactuar con el servidor.`}/>
        <h2>ruta para fetch</h2>
        <Conseptos texto={`Ahora en nuestro archivo js podemos ver la ruta y posteriormente usarlo para fetch de la siguiente manera.`}/>
        <JavaScropt codigo={`console.log(rutaServerDb.url);`}/>
        <Conseptos texto={`Recordemos que ese objeto le pasamos a js con la funcion "wp_localize_script" asi que no es necesario andar declarando variables o construir la ruta para usarlo con fetch.`}/>
        <h2>funciones wordpress</h2>
        <Conseptos texto={`Como nuestro archivo que hara de servidor no tiene acceso directo con wordpress es necesario que nosotros mismo importemos todas las funcionalidades de wordpress a nuestro servidor para poder interactuar con la base de datos u hacer otras cosas, para eso debemos acceder al archivo "/wp-load.php", lo malo es que esta ruta puede ir cambiando su posision asi que en cada archivo de servidor que usemos sera necesario buscar ese archivo de wordpress para poder obtener las funcionalidades de wordpress y poder interactuar de forma correcta, en simples palabras el codigo siguiente siempre se debe poner en cada uno de los archivos de servidor que tengamos, con este codigo buscaremos las funciones de wordpress de forma dinamica y no importara en que entorno estemos siempre obtendremos las funciones de wordpress.`}/>
        <h2>serverDb.php</h2>
        <Php codigo={`<?php
// Intentar cargar wp-load.php desde la raíz del sitio de WordPress
$path = dirname(__FILE__);

// Subir niveles hasta encontrar wp-load.php
for ($i = 0; $i < 10; $i++) { // Intentar hasta 10 niveles, ajusta si es necesario
    if (file_exists($path . '/wp-load.php')) {
        require_once($path . '/wp-load.php');
        break;
    }
    $path = dirname($path);
}

// Verificar si se accede directamente
if (!defined('ABSPATH')) {
    exit; // Salir si se accede directamente
}

// Ahora puedes usar funciones de WordPress
global $wpdb;
// ahora si se puede usar funciones de wordpress.`}/>
        <Conseptos texto={`Siempre sera necesario buscar ese archivo para poder interactuar claro solo si tenemos archivos modularizados y separados que haran de servidor eso para evitar el codigo espagueti y poco escalable.`}/>
        <h2>Interactuando con servidor</h2>
        <Conseptos texto={`Perfecto ahora que nuestro servidor tiene acceso a todas las funciones de wordpress y esta modularizado simplemente nos queda interactuar con el servidor como cualquier entorno normal usando fetch para enviar y recibir respuestas.`}/>
        <h3>db.html</h3>
        <Html codigo={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=h1, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvenido a la base de datos</h1>
    <p class="serverRespuesta"></p>
</body>
</html>`}/>
        <h3>serverDb.php</h3>
        <Php codigo={`<?php
echo "Probando";`}/>
        <h3>db.js</h3>
        <JavaScropt codigo={`const ruta = rutaServerDb.url;
const parrafo = document.querySelector(".serverRespuesta");

fetch(ruta)
.then(res=>res.text())
.then(res=>{
    parrafo.textContent = res;
})`}/>
        <ImagenLink tipo={"imagen"} titulo={"servidor interaccion"} imagen={img11}/>
        <div className="website">
          <h1>Bienvenido a la base de datos</h1>
          <p>Probando</p>
        </div>
        <Conseptos texto={`Perfecto ahora si podemos interactuar con el servidor para manejar las bases de datos, todo esta modularizado, el codigo esta ordenado y escalable y todo,.`}/>
      </main>
      <Footer />
    </>
  )
}

export default ServidoresWpPlugin;