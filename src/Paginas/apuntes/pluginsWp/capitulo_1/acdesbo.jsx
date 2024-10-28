import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


// imagenes
import img2 from "../imgs/img2.png";

function AcDesBoWpPlugin(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": "Ahora vamos a asignar funciones al plugin en caso de que se activen se desactiven y se eliminen.",
        "lenguage": `Php`,
        "codigo": `<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/

function activar(){
    echo "logica";
}
function desactivar(){
    echo "logica";
}
function borrar(){
    echo "logica";
}

register_activation_hook(__FILE__,"activar");  // cuando se active el plugin
register_deactivation_hook(__FILE__,"desactivar");  // cuando se desactive el plugin
register_uninstall_hook(__FILE__,"borrar");  // cuando se elimine el plugin`
      }]}/>
      <main>
        <h1>Activar desactivar y borrar un plugin</h1>
        <Conseptos texto={`Nosotros podemos crear varias funciones para cada accion que haga el plugin por ejemplo cuando el plugin se active creamos una funcion, cuando el plugin se desactive creamos otra funcion y cuando el plugin se elimine creamos otra funcion osea algo como esto.`}/>
        <Php codigo={`<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/

function activar(){
    // logica
}
function desactivar(){
    // logica
}
function borrar(){
    // logica
}`}/>
        <Conseptos texto={`Genial ya tenemos nuestras funciones para activar desactivar y borrar pero falta poder pasar esas funciones a los botones que nos da el plugin osea en esta parte.`}/>
        <ImagenLink imagen={img2} titulo={"plugin"} tipo={"imagen"}/>
        <Conseptos texto={`Como nos damos cuenta el plugin tiene 3 botones uno que es para activar otro que es para desactivar y otro que es para borrar ahora debemos enlazar esa funcion para que se ejecute cada que se haga click en alguno de esos botones.`}/>
        <Conseptos texto={`Para enlazar una funcion a cada boton del plugin tenemos una sintaxis similar en cada funcion que se encargara de enlazar las funciones con los botones`}/>
        <Sintaxis codigo={`register_activation_hook("direccion_del_archivo","nombre _funcion")`}/>
        <h2>register_activation_hook</h2>
        <Conseptos texto={`Con esta funcion vamos enlazar una funcion con el boton activar de los plugins.`}/>
        <Php codigo={`<?php
/*
Plugin Name: Curso plugins
Plugin URI: https://apuntesdan.netlify.app
Description: Con el plugin que vamos a crear aprenderemos el desarrollo de plugins para wordpress.
Version: 0.0.1
*/

function activar(){
    // logica de activacion aqui.
}

register_activation_hook(__FILE__,"activar");`}/>
        <h2>register_deactivation_hook</h2>
        <Conseptos texto={`Con esta funcion vamos a poder enlazar una funcion para el boton de desactivar en los plugins.`}/>
        <Php codigo={`<?php
function desactivar(){
  // logica
}
register_deactivation_hook(__FILE__,"desactivar")`}/>
        <h2>register_uninstall_hook</h2>
        <Conseptos texto={`Con este gancho o funcion vamos a poder entrelazar una funcion que se ejecutara cuando se haga click en el boton de borrar de los plugins.`}/>
        <Php codigo={`<?php
function borrar(){
  // logica
}
register_uninstall_hook(__FILE__,"borrar");`}/>
      </main>
      <Footer />
    </>
  )
}

export default AcDesBoWpPlugin;