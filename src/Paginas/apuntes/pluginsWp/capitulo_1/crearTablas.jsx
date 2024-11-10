import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"




function CrearTablasWpPlugin() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Las bases de datos siempre se deben de crear al momento de activar el plugin, osea siempre debemos crear todas nuestras tablas en la funcion que usaremos para activar.`,
        "lenguage": `Php`,
        "codigo": `function activar(){
    global $wpdb;

    // Importar el archivo necesario para utilizar dbDelta
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';

    // Nombre de la tabla con prefijo
    $tabla1 = $wpdb->prefix . 'mi_tabla1';
    $tabla2 = $wpdb->prefix . 'mi_tabla2';

    // Consulta para crear la primera tabla
    $crearTabla1 = "CREATE TABLE IF NOT EXISTS $tabla1 (
        \`id\` INT(11) NOT NULL AUTO_INCREMENT,
        \`nombre\` VARCHAR(100) NOT NULL,
        \`precio\` DECIMAL(10, 2) DEFAULT NULL,
        \`cantidad\` INT(11) DEFAULT NULL,
        \`descripcion\` TEXT DEFAULT NULL,
        \`fecha_creacion\` DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

    // Consulta para crear la segunda tabla
    $crearTabla2 = "CREATE TABLE IF NOT EXISTS $tabla2 (
        \`id\` INT(11) NOT NULL AUTO_INCREMENT,
        \`nombre\` VARCHAR(100) NOT NULL,
        \`precio\` DECIMAL(10, 2) DEFAULT NULL,
        \`cantidad\` INT(11) DEFAULT NULL,
        \`descripcion\` TEXT DEFAULT NULL,
        \`fecha_creacion\` DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

    // Ejecutar las consultas con dbDelta para crear las tablas
    dbDelta($crearTabla1);
    dbDelta($crearTabla2);
}`
      },{
        "mensaje": `Ahora veremos como se ve la creacion de tablas en el codigo completo.`,
        "lenguage": `Php`,
        "codigo": `<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/

function activar(){
    global $wpdb;
    // Importar el archivo necesario para utilizar dbDelta
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';

    // Nombre de la tabla con prefijo
    $tabla1 = $wpdb->prefix . 'mi_tabla1';

    // Consulta para crear la primera tabla
    $crearTabla1 = "CREATE TABLE IF NOT EXISTS $tabla1 (
        \`id\` INT(11) NOT NULL AUTO_INCREMENT,
        \`nombre\` VARCHAR(100) NOT NULL,
        \`precio\` DECIMAL(10, 2) DEFAULT NULL,
        \`cantidad\` INT(11) DEFAULT NULL,
        \`descripcion\` TEXT DEFAULT NULL,
        \`fecha_creacion\` DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

    // Ejecutar las consultas con dbDelta para crear las tablas
    dbDelta($crearTabla1);
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
}

function paginaAdmin(){
    include_once plugin_dir_path(__FILE__) . 'admin/adminMenu.php';
}
function submenu1(){
    include_once plugin_dir_path(__FILE__) . 'admin/submenu1.php';
}`
      }]}/>
      <main>
        <h1>Crear tabla</h1>
        <Conseptos texto={`Ahora vamos a crear una base de datos relacional que lo usaremos para almacenar datos o lo que tengamos que hacer.`}/>
        <Php codigo={`La creacion de tablas se hace en la funcion de la activacion del plugin osea  que se hace en esta parte.`}/>
        <Php codigo={`<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/

function activar(){
    // crear tabla aqui
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
  // crear menus aqui
}`}/>
        <h2>$wpdb</h2>
        <Conseptos texto={`Esta es una variable global que nos da wordpress que sirve para trabajar con todas las funcionalidades de las bases de datos de wordpress.`}/>
        <Conseptos texto={`Para poder usar correctamente las funciones de bases de datos debemos usar la clausula global, ahora vamos a crear una base de datos, para esto es recomendable ya saber SQL y claro para entender mejor(no tan necesario) saber "MySQL".`}/>
        <Php codigo={`function activar() {
    global $wpdb;

    // Importar el archivo necesario para utilizar dbDelta
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';

    // Nombre de la tabla con prefijo
    $tabla1 = $wpdb->prefix . 'mi_tabla1';
    $tabla2 = $wpdb->prefix . 'mi_tabla2';

    // Consulta para crear la primera tabla
    $crearTabla1 = "CREATE TABLE IF NOT EXISTS $tabla1 (
        \`id\` INT(11) NOT NULL AUTO_INCREMENT,
        \`nombre\` VARCHAR(100) NOT NULL,
        \`precio\` DECIMAL(10, 2) DEFAULT NULL,
        \`cantidad\` INT(11) DEFAULT NULL,
        \`descripcion\` TEXT DEFAULT NULL,
        \`fecha_creacion\` DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

    // Consulta para crear la segunda tabla
    $crearTabla2 = "CREATE TABLE IF NOT EXISTS $tabla2 (
        \`id\` INT(11) NOT NULL AUTO_INCREMENT,
        \`nombre\` VARCHAR(100) NOT NULL,
        \`precio\` DECIMAL(10, 2) DEFAULT NULL,
        \`cantidad\` INT(11) DEFAULT NULL,
        \`descripcion\` TEXT DEFAULT NULL,
        \`fecha_creacion\` DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

    // Ejecutar las consultas con dbDelta para crear las tablas
    dbDelta($crearTabla1);
    dbDelta($crearTabla2);
}`}/>
        <Conseptos texto={`Ahora vamos a explicar esto paso por paso:`}/>
        <ol>
          <li>
            global $wpdb: Obtener funciones de wordpress para el manejo de las bases de datos u otros.
          </li>
          <li>
            require_once ABSPATH: importamos funciones necesarias de wordpress como dbDelta para poder modificar y hacer cambios en la estructura de tablas, para importar esas funciones siempre se usa la ruta "wp-admin/includes/upgrade.php".
          </li>
          <li>
            {`"$wpdb->prefix"`}: Funcion para usar un prefijo que proporciona wordpress para la creacion de tablas, siempre que llamemos a una tabla es necesario usar la funcion {`"$wpdb->prefix"`}.
          </li>
          <li>
            ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;: Define el motor InnoDB y la codificación UTF-8 para la tabla, osea que permite el uso de emojis y multilenguaje.
          </li>
          <li>
            dbDelta: Crea o actualiza tablas en la base de datos de WordPress de forma segura.
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default CrearTablasWpPlugin;