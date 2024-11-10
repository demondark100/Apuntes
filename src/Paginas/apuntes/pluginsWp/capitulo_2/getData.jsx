import Conseptos from "../../../../componentes/conseptos/conseptos";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Css from "../../../../componentes/lenguajes/Css";

function GetDataWpPlugin(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a enviar los datos de la base de datos para poder verlos en el lado del cliente.`,
        "lenguage": "Php",
        "codigo": `global $wpdb;
$tabla = $wpdb->prefix . "mi_tabla1";
$query = "SELECT * FROM $tabla";
$datos = $wpdb->get_results($query,ARRAY_A);

header('Content-Type: application/json');
echo json_encode($datos);`
      }]}/>
      <main>
        <h1>Obtener datos de la base de datos</h1>
        <Conseptos texto={`ahora vamos a obtener todos los datos que se hayan guardado en la base de datos, esto sera util para visualizar que hemos guardado y para poder hacer otros procesos como editar y eliminar.`}/>
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
        <Conseptos texto={`En este caso nuestro proyecto esta estruturado asi, vamos a reflejar los datos de nuestra base de datos en la pagina "adminMenu.html", para eso nosotros enviaremos los datos de la base de datos al archivo "serverAdminMenu.php".`}/>
        <h2>get_results</h2>
        <Conseptos texto={`Con esta funcion vamos a obtener los datos de nuestra base de datos, esta funcion recibe dos parametros, la seleccion de los datos "query", y opcional si deseamos que nos devuelva un arreglo asociativo.`}/>
        <Php codigo={`$datos = $wpdb->get_results($query,ARRAY_A);`}/>
        <h2>header</h2>
        <Conseptos texto={`Con esta funcion le estamos indicando al cliente osea al front-end que va a recibir datos en forma de "json" que es la forma global de comunicarse entre el front-end y el back-end.`}/>
        <Php codigo={`header('Content-Type: application/json');`}/>
        <Conseptos texto={`Como nos damos cuenta simplemente estamos indicando al front-end que recibira datos en formato json.`}/>
        <h2>json_encode</h2>
        <Conseptos texto={`Con esta funcion vamos a convertir los datos que esten en el arreglo asociativo a formato json a travez de una cadena de texto.`}/>
        <Php codigo={`echo json_encode($datos);`}/>
        <h2>Interaccion</h2>
        <Conseptos texto={`Ahora vamos a enviar los datos de nuestra base de datos a nuestro archivo js y luego vamos a plasmarlos en el front-end con ayuda de javaScript.
Para esto vamos a trabajar con los siguientes archivos.`}/>
        <ol>
          <li>serverAdminMenu.php: Para enviar los datos al front-end.</li>
          <li>adminMenu.html: Que sera la estructura html para reflejar los datos.</li>
          <li>adminMenu.js: El lenguaje front-end que recibira y trabajara con esos datos.</li>
          <li>adminMenu.css: El lenguaje que estilizara y ordenara los datos.</li>
        </ol>
        <h2>adminMenu.html</h2>
        <Html codigo={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>adminDb</title>
</head>
<body>
    <h2>Datos</h2>
    <div id="BaseDeDatos"></div>
</body>
</html>`}/>
        <h2>serverAdminMenu.php</h2>
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
    exit; 
}

global $wpdb;
$tabla = $wpdb->prefix . "mi_tabla1";
$query = "SELECT * FROM $tabla";
$datos = $wpdb->get_results($query,ARRAY_A);

header('Content-Type: application/json');
echo json_encode($datos);`}/>
        <h2>adminMenu.js</h2>
        <JavaScropt codigo={`const ruta = rutaServerDb.url;
const BaseDeDatos = document.getElementById("BaseDeDatos"); 

fetch(ruta)
.then(res=>res.json())
.then(res=>{
    renderDom(res);
});


function renderDom(res) {
    for(let i in res){
        const fragment = document.createDocumentFragment();
        const div = document.createElement("div");
        const nombre = document.createElement("p");
        const apellido = document.createElement("p");
        const edad = document.createElement("p");
        const trabajo = document.createElement("p");
        
        nombre.textContent = res[i].nombre;
        apellido.textContent = res[i].apellido;
        edad.textContent = res[i].edad;
        trabajo.textContent = res[i].trabajo;

        div.appendChild(nombre);
        div.appendChild(apellido);
        div.appendChild(edad);
        div.appendChild(trabajo);

        div.classList.add("ContentDbRow");

        fragment.appendChild(div);
        BaseDeDatos.appendChild(fragment);
    }
}`}/>
        <h2>adminMenu.css</h2>
        <Css codigo={`.ContentDbRow{
    display: flex;
    justify-content: space-around;
}`}/>
      </main>
      <Footer />
    </>
  )
}

export default GetDataWpPlugin;


//https://www.youtube.com/watch?v=LuwF3WOzJS8&list=PLIbWwxXce3Vopq7cfmNGZ340aJL3d4128&index=10