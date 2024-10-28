import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";




function CrearTablasWpPlugin() {
  return (  
    <>
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
        <Php codigo={`function activar(){
  global $wpdb;
  $crearTabla1 = "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}mi_tabla1(
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`nombre\` VARCHAR(100) NOT NULL,
      \`precio\` DECIMAL(10, 2) NULL,
      \`cantidad\` INT NULL,
      \`descripcion\` TEXT NULL,
      \`fecha_creacion\` DATETIME DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
  )";
  $wpdb->query($crearTabla1);

    $crearTabla2 = "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}mi_tabla2(
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`nombre\` VARCHAR(100) NOT NULL,
      \`precio\` DECIMAL(10, 2) NULL,
      \`cantidad\` INT NULL,
      \`descripcion\` TEXT NULL,
      \`fecha_creacion\` DATETIME DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
  )";
  $wpdb->query($crearTabla2);

  // podemos crear muchas tablas, las que necesitemos
}`}/>
        <Conseptos texto={`Ahora vamos a explicar esto paso por paso:`}/>
        <ol>
          <li>CREATE TABLE IF NOT EXISTS: Se encarga de crear la tabla solo en caso de que la base de datos no exista.</li>
          <li>{`$wpdb->prefix`}: Se encarga de poner un prefijo al nombre de la tabla que creamos, esto es obligatorio porque wordpress puede cambiar el prefijo segun la persona que instale el plugin, es recomendable siempre usar "{`$wpdb->prefix`}"</li>
          <li>query: Con esta funcion de $wpdb podemos agregar tablas nuevas cada que necesitemos.</li>
          
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default CrearTablasWpPlugin;