import Conseptos from "../../../../componentes/conseptos/conseptos";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";


function DeleteDbWpPlugin(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a eliminar una fila de nuestra base de datos, y tambien enviaremos en la configuracion un nonce para poder enviar solo nosotros la solicitud y no otras personas externas.

Configuracion`,
        "lenguage": "Php",
        "codigo": `// resto de la configuracion.
wp_localize_script('adminMenuJsScript', 'rutaServerDb', array(
  'urlDel' => plugins_url('admin/mainMenu/delDb.php', __FILE__),
  'nonceDel' => wp_create_nonce('delete_nonce_action')
));
// resto de la configuracion`
      },{
        "mensaje": `Cliente front-end javaScript`,
        "lenguage": `JavaScropt`,
        "codigo": `fetch(rutaDel, {
  method: "POST",
  body: JSON.stringify({
    action: "delete_data_action", // Esto es importante para que WordPress sepa qué hacer
    indexDel: parseInt(index),
    nonce: nonceDel // Aquí estás enviando el nonce correspondiente
  }),
  headers: {
    "Content-type": "application/json"
  }
})
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(error => console.error("Error:", error));`
      },{
        "mensaje": `Servidor para eliminar php.`,
        "lenguage": `Php`,
        "codigo": `// resto de logica
global $wpdb;
$tabla = $wpdb->prefix . "mi_tabla1";
$query = "SELECT * FROM $tabla";
$datos = $wpdb->get_results($query);

// Leer y decodificar el cuerpo JSON de la solicitud
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['nonce']) || !wp_verify_nonce($data['nonce'], 'delete_nonce_action')) {
  wp_send_json_error("Nonce inválido o expirado", 403);
  exit;
}
$where = ['UserId'=>$datos[$index]->UserId];
$resultado = $wpdb->delete(
  $tabla,
  $where
);

// resto de logica`
      }]}/>
      <main>
        <h1>Eliminar</h1>
        <Conseptos texto={`Ahora vamos a eliminar datos en una en nuestra base de datos, para esto vamos a crear un nuevo archivo en nuestra estructura que sera "delDb.php".`}/>
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
|--main.php`}/>
        <h2>delete</h2>
        <Conseptos texto={`Este es un metodo de wpdb que sirve para eliminar una fila especifica de la base de datos.`}/>
        <Sintaxis codigo={`$wpdb->delete($nombre_tabla,$consulta_db);`}/>
        <Conseptos texto={`Perfecto esto parece muy sensillo ya que solo accedemos a la fila y buscamos el id, pero hay un problema y es que cualquier persdona que sepa sobre la estructura del servidor podria mandar peticiones para eliminar sin nuestro permiso y eso no es la idea, para eso wordpress nos ofrece los nonces.`}/>
        <h2>nonce</h2>
        <Conseptos texto={`Esta funcion es un petueño identificador que nos ofrece wordpress para autenticar que solo nosotros podemos enviar peticiones a nuestro servidor, osea gracias a esta funcion evitamos que cualquier otra persona externa pueda enviar peticiones al servidor.`}/>
        <h2>main.php</h2>
        <Conseptos texto={`Al momento de nosotros pasarle las rutas a nuestro archivo js tambien debemos pasarle el nonce que sera unico y despues en el archivo js pasar nonce como un parametro mas del cuerpo para poder hacer la verificacion en el servidor.`}/>
        <Php codigo={`// resto de la comfiguracion
wp_localize_script('adminMenuJsScript', 'rutaServerDb', array(
  'url' => plugins_url('admin/mainMenu/serverMenu.php', __FILE__),
  'urlDel' => plugins_url('admin/mainMenu/delDb.php', __FILE__),
  'nonceDel' => wp_create_nonce('delete_nonce_action')
));
// resto de la configuracion`}/>
        <Conseptos texto={`"wp_create_nonce" Se encarga de crear un nonce unico para una accion en el servidor, el unico parametro que recibe es el nombre del action que servira para identificar el nonce porporcionado por wordpress en el servidor.`}/>
        <h2>adminMenu.js</h2>
        <Conseptos texto={`Ahora estamos recibiendo la ruta del servidor al cual enviaremos el indice para eliminar una fila y tambien recibimos el nonce que nos permitira solo a nosotros hacer la peticion.`}/>
        <JavaScropt codigo={`// resto de rutas
const nonceDel = rutaServerDb.nonceDel;
// resto de la logica
// dentro de una funcion
    fetch(rutaDel, {
        method: "POST",
        body: JSON.stringify({
            action: "delete_data_action", // nombre del nonce el cual configuramos en main.php que seria el action
            indexDel: parseInt(index),
            nonce: nonceDel // Aquí estás enviando el nonce correspondiente
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(error => console.error("Error:", error));`}/>
        <Conseptos texto={`Al enviar los datos a wordpress es necesario enviarle tanto el action como el nonce, en el caso de action devemos ponerle el mismo nombre que le pusimos como parametro a "wp_create_nonce".`}/>
        <h2>delDb.php</h2>
        <Conseptos texto={`Ahora a parte de solo hacer la solicitud al servidor tambien debemos validar que seamos nosotros los que hacen la peticion y no una persona externa a nuestro proyecto.`}/>
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

// Verificar nonce para seguridad
if (!isset($data['nonce']) || !wp_verify_nonce($data['nonce'], 'delete_nonce_action')) {
    wp_send_json_error("Nonce inválido o expirado", 403);
    exit;
}

    $index = $data['indexDel'];

    // Aquí puedes implementar la lógica de eliminación con el valor de $index.
    // Suponiendo que tienes un campo "id" como clave primaria en la tabla para la eliminación.
    
    // Ejemplo de eliminación usando $wpdb:

    $where = ['UserId'=>$datos[$index]->UserId];
    $resultado = $wpdb->delete(
        $tabla,
        $where
    );

    
    if ($resultado) {
        wp_send_json_success("Dato eliminado correctamente");
    } else {
        wp_send_json_error("Error al eliminar el dato", 500);
    }
`}/>
        <ol>
          <li>{`json_decode(file_get_contents('php://input'), true);: Aqui estamos convirtiendo el objeto jason que envia el cliente a un arreglo asociativo para poder trabajar con los datos.`}</li>
          <li>{`wp_verify_nonce: Verifica que el nonce recibido sea válido y no haya expirado, ayudando a proteger tu sitio contra solicitudes no autorizadas (CSRF).`}</li>
          <li>{`wp_send_json_success: Envia una respuesta json al cliente en este caso js.`}</li>
          <li>{`wp_send_json_error: Envia una respuesta de error al cliente js.`}</li>
        </ol>
      </main>
      <Footer />
    </>
  )
}

export default DeleteDbWpPlugin;