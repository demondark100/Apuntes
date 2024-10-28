import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


import Img8 from "../imgs/img8.png";

function CookiesPhp() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a manejar las cookies del navegador para guardar datos simples del usuario.`,
        "lenguage": "Php",
        "codigo": `<?php
setcookie("clave","valor",time()+60*60*24*30,"/",false,true);
// 1. clave de la cookie
// 2. valor de la cookie
// 3. cuando expira la cookie
// 4. donde se alojara la cookie
// 5. true crear solo en http, false crear en http o https
// 6. true crear solo en http, false crear en cualquier protocolo
setcookie("idioma","es",time()-60); // eliminar cookie`
      }]}/>
      <main>
        <h1>Cookies</h1>
        <Conseptos texto={`Con las cookies guardaremos informacion en el navegador de forma local, es recomendable no guardar nada de datos sensibles como contraseñas en cookies devido a que es facil acceder a esos datos.`}/>
        <Conseptos texto={`Las cookies se deben ejecutar antes que el archivo php se cargue.`}/>
        <h2>setcookie</h2>
        <Conseptos texto={`Con esta funcion vamos a crear una cookie.`}/>
        <Sintaxis codigo={`setcookie("clave","valor");`}/>
        <Php  codigo={`<?php
    setcookie("idioma","es");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=fo, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>`}/>
        <Conseptos texto={`Para ver los resultados de las cookies debemos dirigirnos a:`}/>
        <Terminal codigo={`Application
|
|__Cookies
|__dominio`}/>
        <ImagenLink imagen={Img8} tipo={"imagen"} titulo={"cookies"}/>
        <h2>$_COOKIE</h2>
        <Conseptos texto={`Con esta funcion vamos a obtener el valor de una cookie para poder trabajar con esa cookie o poder mostrarlo.`}/>
        <Sintaxis codigo={`$_COOKIE["nombre_clave"];`}/>
        <Conseptos texto={`En este caso el nombre de la clave de la cookie es "idioma"`}/>
        <Php codigo={`<?php
    setcookie("idioma","es");
?>
<div><?php echo $_COOKIE["idioma"]?></div>`}/>
        <div className="website">
          <p>es</p>
        </div>
        <h2>time</h2>
        <Conseptos texto={`Este es el segundo parametro que le vamos a pasar a "setcookie", este va a servir para poder indicar el tiempo de expiracion de la cookie.
En este caso le vamos a indicar que la cookie expirara en un mes.`}/>
        <Php codigo={`<?php
    setcookie("idioma","es",time()+60*60*24*30);
?>
<div><?php echo $_COOKIE["idioma"]?></div>`}/>
        <Conseptos texto={`Tambien podemos indicar que expire en un año cambiando el ultimo numero que es "30" que representa un mes por "365" para que tome 1 año completo.`}/>
        <Php codigo={`<?php
    setcookie("idioma","es",time()+60*60*24*360);
?>
<div><?php echo $_COOKIE["idioma"]?></div>`}/>
        <h2>path</h2>
        <Conseptos texto={`Este es el tercer parametro que debemos pasar a "setcookie", con esto vamos a indicar en donde se guardaran las cookies, en este caso se guardara en este mismo archivo.`}/>
        <Php codigo={`<?php
    setcookie("idioma","es",time()+60*60*24*30,"/");
?>
<div><?php echo $_COOKIE["idioma"]?></div>`}/>
        <h2>secure</h2>
        <Conseptos texto={`Este es el cuarto parametro que pasaremos a la funcion "setcookie", este solo recibe un true o false.
Si es true entonces la cookie se creara solo en conecciones seguras https.
Si es false entonces la cookie se creara en cualquier coneccion ya sea http o https.`}/>
        <Php codigo={`<?php
    setcookie("idioma","es",time()+60*60*24*30,"/",false);
?>
<div><?php echo $_COOKIE["idioma"]?></div>`}/>
        <h2>HTTPOnly</h2>
        <Conseptos texto={`Este es el quinto y ultimo parametro donde indicaremos si sera necesario que la cookie se cree en el protocolo http o no.
Si es true entonces la cookie se creara solo en el protocolo http
Si es false entonces la cookie se creara en cualquier protocolo`}/>
        <Php codigo={`<?php
    setcookie("idioma","es",time()+60*60*24*30,"/",false,true);
?>
<div><?php echo $_COOKIE["idioma"]?></div>`}/>
        <h2>setcookie final</h2>
        <Conseptos texto={`Entonces setcookie al final se vera asi si agregamos todos sus parametros.`}/>
        <Php codigo={`setcookie("idioma","es",time()+60*60*24*30,"/",false,true);`}/>
        <h2>Eliminar cookie</h2>
        <Conseptos texto={`Ahora podemos eliminar las cookies cambiando el parametro de tiempo de expiracion poniendo una fecha la cual ya ah expirado por ejemplo podriamos usar "time()-60" para indicar que la cookie expiro hace 60 segundos.`}/>
        <Php codigo={`<?php
setcookie("idioma","es",time()-60,"/",false,true);`}/>
      </main>
      <Footer />
    </>
  );
}

export default CookiesPhp;