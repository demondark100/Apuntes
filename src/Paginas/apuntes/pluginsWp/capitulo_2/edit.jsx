import Conseptos from "../../../../componentes/conseptos/conseptos";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";


function EditWpPlugin(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a editar nuestra base de datos con la funcion update.`,
        "lenguage": "Php",
        "codigo": `<?php
global $wpdb;
$tabla = $wpdb->prefix . "mi_tabla1";
$query = "SELECT * FROM $tabla";
$datos = $wpdb->get_results($query);
// Leer y decodificar el cuerpo JSON de la solicitud
$data = json_decode(file_get_contents('php://input'), true);
$index = $data['index'];

$datosEdit = [
  "nombre" => $data["nombre"],
  "apellido" => $data["apellido"],
  "edad" => $data["edad"],
  "trabajo" => $data["trabajo"]
];

$where = ['UserId' => $datos[$index]->UserId];

$resultado = $wpdb->update(
  $tabla,
  $datosEdit,
  $where
);`
      },{
        "mensaje": "Codigo completo",
        "lenguage": "Php",
        "codigo": `<?php
// Cargar WordPress de manera correcta (ajustar según la estructura de tu proyecto)
$path = dirname(__FILE__);
for ($i = 0; $i < 10; $i++) {
    if (file_exists($path . '/wp-load.php')) {
        require_once($path . '/wp-load.php');
        break;
    }
    $path = dirname($path);
}

if (!defined('ABSPATH')) {
    exit; // Si no se define ABSPATH, salir
}

global $wpdb;
$tabla = $wpdb->prefix . "mi_tabla1";
$query = "SELECT * FROM $tabla";
$datos = $wpdb->get_results($query);

// Leer y decodificar el cuerpo JSON de la solicitud
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['nonce']) || !wp_verify_nonce($data['nonce'], 'edit_nonce_action')) {
    wp_send_json_error("Nonce inválido o expirado", 403);
    exit;
}
    

    $index = $data['index'];

    $datosEdit = [
        "nombre" => $data["nombre"],
        "apellido" => $data["apellido"],
        "edad" => $data["edad"],
        "trabajo" => $data["trabajo"]
    ];

    $where = ['UserId' => $datos[$index]->UserId];

    $resultado = $wpdb->update(
        $tabla,
        $datosEdit,
        $where
    );

    
    if ($resultado) {
        wp_send_json_success("Dato editado correctamente");
    } else {
        wp_send_json_error("Error al editar el dato", 500);
    }`
      }]}/>
      <main>
        <h1>Editar base de datos</h1>
        <Conseptos texto={`Al igual que delete tambien debemos pasarle un nonce al servidor para cuestiones de seguridad osea para que solo nosotros podamos editar la base de datos.`}/>
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
|-----delDb.php
|-----editDb.php
|--main.php`}/>
        <h2>main.php</h2>
        <Php codigo={`// resto de la configuracion        
wp_localize_script('adminMenuJsScript', 'rutaServerDb', array(
  'url' => plugins_url('admin/mainMenu/serverMenu.php', __FILE__),
  'urlDel' => plugins_url('admin/mainMenu/delDb.php', __FILE__),
  'urlEdit' => plugins_url('admin/mainMenu/editDb.php', __FILE__),
  'nonceDel' => wp_create_nonce('del_nonce_action'),
  "nonceEdit" => wp_create_nonce('edit_nonce_action'), 
));
// resto de la configuracion`}/>
        <Conseptos texto={`Para mas seguridad aun nosotros estamos pasando 2 parametros "nonce" a nuestro archivo js uno que seria para eliminar y otro que seria para editar.`}/>
        <h2>adminMenu.js</h2>
        <JavaScropt codigo={`// resto de la logica
function guardarEdit(index,datos) {
    fetch(rutaEdit,{
        method: "POST",
        body: JSON.stringify({
            "nombre": datos[0].textContent,
            "apellido": datos[1].textContent,
            "edad": datos[2].textContent,
            "trabajo": datos[3].textContent,
            "index": index,
            "action": "edit_nonce_action",
            "nonce": nonce
        }),
        headers: {"Content-type": "application/json"}
    }).then(res=>res.json())
    .then(res=>console.log(res))
}
// resto de la logica`}/>
        <Conseptos texto={`En este caso estamos editando todos los datos segun el usuario haga la edicion, lo pasamos como un json para que el servidor pueda encontrar los datos de forma sensilla.`}/>
        <h2>update</h2>
        <Conseptos texto={`Con esta funcion estamos pasando datos y editando la base de datos con los datos que pase el cliente.`}/>
        <Php codigo={`$index = $data['index'];

$datosEdit = [
    "nombre" => $data["nombre"],
    "apellido" => $data["apellido"],
    "edad" => $data["edad"],
    "trabajo" => $data["trabajo"]
];

$where = ['UserId' => $datos[$index]->UserId];

$resultado = $wpdb->update(
    $tabla,
    $datosEdit,
    $where
);`}/>
        <h2>editDb.php</h2>
        <Php codigo={`<?php
// Cargar WordPress de manera correcta (ajustar según la estructura de tu proyecto)
$path = dirname(__FILE__);
for ($i = 0; $i < 10; $i++) {
    if (file_exists($path . '/wp-load.php')) {
        require_once($path . '/wp-load.php');
        break;
    }
    $path = dirname($path);
}

if (!defined('ABSPATH')) {
    exit; // Si no se define ABSPATH, salir
}

global $wpdb;
$tabla = $wpdb->prefix . "mi_tabla1";
$query = "SELECT * FROM $tabla";
$datos = $wpdb->get_results($query);

// Leer y decodificar el cuerpo JSON de la solicitud
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['nonce']) || !wp_verify_nonce($data['nonce'], 'edit_nonce_action')) {
    wp_send_json_error("Nonce inválido o expirado", 403);
    exit;
}
    

    $index = $data['index'];

    $datosEdit = [
        "nombre" => $data["nombre"],
        "apellido" => $data["apellido"],
        "edad" => $data["edad"],
        "trabajo" => $data["trabajo"]
    ];

    $where = ['UserId' => $datos[$index]->UserId];

    $resultado = $wpdb->update(
        $tabla,
        $datosEdit,
        $where
    );

    
    if ($resultado) {
        wp_send_json_success("Dato editado correctamente");
    } else {
        wp_send_json_error("Error al editar el dato", 500);
    }`}/>
        <Conseptos texto={`En este caso nuestra base de datos solo tiene 4 campos para editar, tamben estamos verificando que solo nosotros podamos modificar la tabla con la ayuda de nonce.`}/>
      </main>
      <Footer />
    </>
  )
}

export default EditWpPlugin;