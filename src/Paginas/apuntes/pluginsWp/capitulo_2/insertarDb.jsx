import Conseptos from "../../../../componentes/conseptos/conseptos";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";


// react
import { useState } from "react";


function InsertarDbWpPlugin(){
  const [showMsg, setShowMsg] = useState(false);
  function show(){
    setShowMsg(true)
  }

  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Para insertar datos a la base de datos las columnas deben de coinsidir con las columnas con las que se creo la base de datos, por ejemplo si al crear la db tiene un campo "name" al insertar debemos especificar que insertaremos para el campo "name", para insertar se usan las funciones de wordpress especificamente "insert".`,
        "lenguage": "Php",
        "codigo": `$tabla = $wpdb->prefix . "nombre_tabla";
$datos = [
    \'clave1\' => "valor",
    \'clave2\' => "valor",
    \'clave3\' => 247,
    \'clave4\' => "valor"
];

$wpdb->insert($tabla, $datos);`
      }]}/>
      <main>
        <h1>Insertar datos a la base de datos</h1>
        <Conseptos texto={`Ahora vamos a insertar datos en nuestra base de datos de wordpress, recordemos que esa base de datos se crea al momento de activar el plugin que creamos.`}/>
        <h2>Estructura proyecto</h2>
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
        <Conseptos texto={`En esta ocacion vamos a insertar datos desde el archivo "serverDb.php" y luego enviaremos como respuesta si se pudo o no guardar los datos en la base de datos, esa respuesta la recibiremos con fetch y lo reenderizaremos para que el cliente vea.`}/>
        <h2>insert</h2>
        <Conseptos texto={`Con esta funcion vamos a agregar datos a nuestra base de datos, para hacer un ejemplo muy sensillo vamos a insertar datos a una base de datos que se uso en capitulos anteriores.`}/>
        <Sintaxis codigo={`$wpdb->insert($nombre_tabla,$query_para_insertar_datos);`}/>
        <Conseptos texto={`Ahora que vimos como es su sintaxis vamos a insertar datos a nuestra tabla, recordemos que nuestra tabla es esta:`}/>
        <Php codigo={`function activarCurso() {
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
}`}/>
        <Conseptos texto={`Para rellenar la tabla es obligatorio que pasemos todos los datos en las columnas correspondientes en este caso las columnas son:`}/>
        <ol>
          <li>nombre</li>
          <li>apellido</li>
          <li>edad</li>
          <li>trabajo</li>
        </ol>
        <Conseptos texto={`Nunca debemos usar rellenar la columna "UserId" debido a que esa columna es un id para cada fila y se rellena de forma automatica. `}/>
        <Php codigo={`$tabla = $wpdb->prefix . "mi_tabla1";
$datos = [
    'nombre' => "Kazuma",
    'apellido' => "Satou",
    'edad' => 19,
    'trabajo' => "ninguno"
];

$wpdb->insert($tabla, $datos);`}/>
        <Conseptos texto={`Primero obtenemos el nombre de la tabla siempre con su prefijo, despues creamos un arreglo asociativo el cual contiene las columnas de nuestra base de datos junto con los datos que queremos pasar a la base de datos, y por ultimo insertamos esos datos con "insert" pasando primero el nombre de la tabla y luego los datos que insertaremos.`}/>
        <h2>Interaccion</h2>
        <Conseptos texto={`Como nos damos cuenta antes habiamos pasado datos estaticos a la base de datos, pero eso no sirve por eso crearemos un formulario en "db.hyml" y los datos que se rellenen en ese formulario los pasaremos a la ase de datos.`}/>
        <h3>db.html</h3>
        <Html codigo={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=h1, initial-scale=1.0">
    <title>db</title>
</head>
<body>
    <h1>Bienvenido a la base de datos</h1>
    <form id="formUser">
        <input type="text" placeholder="nombre" name="nombre">
        <input type="text" placeholder="apellido" name="apellido">
        <input type="number" placeholder="edad" name="edad">
        <input type="text" placeholder="trabajo" name="trabajo">
        <input type="submit" value="Guardar datos">
    </form>
    <p class="aviso"></p>
</body>
</html>`}/>
        <h3>db.js</h3>
        <JavaScropt codigo={`const ruta = rutaServerDb.url;
const formUser = document.getElementById("formUser"); // formulario
const aviso = document.querySelector(".aviso"); // aviso de respuesta

formUser.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = new FormData(formUser);
    fetch(ruta,{
        method: "POST",
        body: data
    })
    .then(res=>res.text())
    .then(res=>{
        aviso.textContent = res;
    })
})`}/>
        <h3>serverDb.php</h3>
        <Php codigo={`<?php
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

$tabla = $wpdb->prefix . "mi_tabla1";
$datos = [
    'nombre' => $_POST["nombre"],
    'apellido' => $_POST["apellido"],
    'edad' => $_POST["edad"],
    'trabajo' => $_POST["trabajo"]
];

$enviado = $wpdb->insert($tabla, $datos);

if ($enviado) {
    echo "Datos guardados exitosamente";
} else {
    echo "No se han podido guardar los datos.";
}`}/>
        <div className="website">
          <input type="text" placeholder="nombre"/>
          <input type="text" placeholder="apellido"/>
          <input type="text" placeholder="edad"/>
          <input type="text" placeholder="trabajo"/>
          <input onClick={show} type="submit" value={"Guardar datos"}/>
          {
            showMsg && <p>Datos guardados exitosamente</p>
          }
        </div>
        <Conseptos texto={`Centremosnos en la variable respuesta, si se han podido guardar los datos devolvera true y si no entonces devolvera false, por eso se puede hacer la condicional de si se guardaron los datos o no, en cuestion de logica nosotros podemos hacer muchas validaciones tanto en el front-end como en el back-end para hacer que los datos lleguen de forma correcta a la base de datos.`}/>
      </main>
      <Footer />
    </>
  )
}

export default InsertarDbWpPlugin;