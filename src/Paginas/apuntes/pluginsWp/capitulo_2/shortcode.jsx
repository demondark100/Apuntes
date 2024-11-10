import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Css from "../../../../componentes/lenguajes/Css";


function ShortCodeWpPlugin() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `El shortcode es la pagina que vera el cliente final osea se reflejara en la pagina de wordpress`,
        "lenguage": "Php",
        "codigo": `// funcion para reenderizar el shortcode.
function shortCodeCurso(){
    wp_enqueue_style(
        "frontCursoStyle",
        plugins_url('admin/frontEnd/front.css', __FILE__)
    );
    wp_enqueue_script(
        'frontCursoJs',
        plugins_url('admin/frontEnd/front.js', __FILE__),
        array(),
        null,
        true
    );

    wp_localize_script('frontCursoJs', 'server', array(
        'url' => plugins_url('admin/frontEnd/db.php', __FILE__)
    ));

    ob_start();
    include(plugin_dir_path(__FILE__) . 'admin/frontEnd/front.html');
    return ob_get_clean();
}
add_shortcode('curso', 'shortCodeCurso');`
      }]}/>
      <main>
        <h1>shortcode</h1>
        <Conseptos texto={`Con los shortcodes vamos a crear tanto la estructura del frontend, los estilos y los servidores pero esta vez en el lado del cliente.`}/>
        <h2>Estructura</h2>
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
|---frontEnd
|-----front.html
|-----front.css
|-----front.js
|-----db.php
|--main.php`}/>
        <h2>add_shortcode</h2>
        <Conseptos texto={`Con esta funcion vamos a encolar una pagina que sera el frontend osea lo que vera el usuario.`}/>
        <Sintaxis codigo={`add_shortcode('nombre_shortcode', 'nombre_funcion');`}/>
        <Php codigo={`<?php
// resto de la configuracion
function encolarShortcode(){
  ob_start();
  // incluir la plantilla externa (pagina)
  include(plugin_dir_path(__FILE__) . 'admin/frontEnd/front.html');
    
  // Devuelve el contenido de la plantilla como resultado del shortcode
  return ob_get_clean();
}
add_shortcode('curso', 'encolarShortcode');
// resto de la configuracion`}/>
        <Conseptos texto={`Esta configuracion de shortcode se debe hacer en el archivo principal de nuestro plugin osea "main.php", ahora vamos a explicar cada linea de codigo que se uso en la funcion.`}/>
        <ol>
          <li>ob_start: Sirve para guardar contenido temporalmente en vez de enviarlo al navegador de inmediato, permitiendo devolverlo o modificarlo antes de mostrarlo.</li>
          <li>{`include(plugin_dir_path(__FILE__) . \'ruta\');`} incluye el archivo frontEnd para que el usuario final pueda ver su contenido.</li>
          <li>{`return ob_get_clean()`}: detiene el almacenamiento temporal del contenido y devuelve todo lo que se había guardado en el buffer como una cadena, eliminando el contenido del buffer.</li>
        </ol>
        <Conseptos texto={`Ahora para poder mostrar el contenido de la pagina solo debemos agregar el nombre del shortcode en wordpress de esta manera.`}/>
        <Terminal codigo={`[curso]`}/>
        <Conseptos texto={`En todos los entornos de wordpress el shortcode se agrega de esa forma, auque puede variar el como agregar el shortcode ya que si usamos un constructor de pagina tendremos que buscar la opcion "shortcode" o "codigo" u otro para recien poder agregar nuestro shortcode.`}/>
        <h2>Encolar</h2>
        <Conseptos texto={`El shortcode al igual que los menus de administracion tambien permiten el uso de js, css y pasarle rutas de un archivo que sera el servidor esto para consumir los datos de la db u otro, solo que a diferencia de los menus para encolar los archivos necesarios de un shortcode debemos de encolar los archivos en la misma funcion en la que estamos pasando la plantilla de nuestra pagina en mi caso seria "encolarShortcode".`}/>
        <Php codigo={`// funcion para reenderizar el shortcode.
function shortCodeCurso(){
    wp_enqueue_style(
        "frontCursoStyle",
        plugins_url('admin/frontEnd/front.css', __FILE__)
    );
    wp_enqueue_script(
        'frontCursoJs',
        plugins_url('admin/frontEnd/front.js', __FILE__),
        array(),
        null,
        true
    );

    wp_localize_script('frontCursoJs', 'server', array(
        'url' => plugins_url('admin/frontEnd/db.php', __FILE__)
    ));

    ob_start();
    include(plugin_dir_path(__FILE__) . 'admin/frontEnd/front.html');
    return ob_get_clean();
}
add_shortcode('curso', 'shortCodeCurso');`}/>
        <Conseptos texto={`Como nos damos cuenta en la misma funcion en la que pasamos la pagina para el shortcode tambien estamos pasando los archivos css js e incluso rutas para hacer peticiones al servidor.`}/>
      </main>
      <Footer />
    </>
  );
}

export default ShortCodeWpPlugin;