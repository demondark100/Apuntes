import Conseptos from "../../../../componentes/conseptos/conseptos";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";



function SesionesPhp() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a crear variables globales que guardan informacion en el servidor a travez de cookies.`,
        "lenguage": `Php`,
        "codigo": `<?php
session_name("nombre"); // crear un nombre para la session
session_id("incId"); // poner id a un session
session_start(); // iniciar session
$_SESION["nombre"] = "valor"; // crear variable global
session_destroy(); // eliminar la sesion`
      }]}/>
      <main>
        <h1>Sesiones</h1>
        <Conseptos texto={`Con esto vamos a guardar informacion del usuario en el servidor mientras el usuario este en nuestro sitio web.`}/>

        <h2>session_start</h2>
        <Conseptos texto={`Con esto vamos a crear nuestra sesion, esto se reflejara en una cookie, esta funcion se debe de usar antes de que la pagina html se cargue.`}/>
        <Php codigo={`<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`}/>
        <Conseptos texto={`Ahora en la seccion de cookies se creara de forma automatica una cookie llamada "PHPSESSID".`}/>
        <h2>session_name</h2>
        <Conseptos texto={`Con esto vamos a poner un nombre a la sesion, por defecto el nombre de la sesion es "PHPSESSID" pero podemos cambiarla con esta funcion.`}/>
        <Conseptos texto={`Con esta funcion tambien vamos a obtener el valor de la sesion po ejemplo si mostramos el nombre de la sesion usariamos "session_name" pero sin pasarle algun parametro.`}/>
        <Php codigo={`<?php
session_name("Increment");
session_start();
echo session_name();
?>
<!-- codigo html -->`}/>
        <div className="website">
          <p>Increment</p>
        </div>
        <Conseptos texto={`En este caso estamos llamando a nuestra sesion "increment" pero le podemos poner cualquier nombre y se creara de igual forma como una cookie.`}/>
        <h2>session_id</h2>
        <Conseptos texto={`Con esta funcion vamos a asignar un id a una sesion para poder identificarla y trabajar con esa sesion, si la llamamos sin poner un parametro simplemente nos mostrara el id que tiene o el id que le pusimos a la sesion.`}/>
        <Php codigo={`<?php
session_id("incId");
session_start();
echo session_id();;
?>
<!-- codigo html -->`}/>
        <div className="website">
          <p>incId</p>
        </div>
        <h2>Variables de sesion</h2>
        <Conseptos texto={`Con esto vamos a recuperar el valor de una sesion para poder usarlo en cualquier parte, en este caso vamos a incrementar la variable de sesion cada que se recargue la pagina.`}/>
        <Conseptos texto={`Para usar una variable de sesion usaremos la variable global $_SESION[]`}/>
        <Sintaxis codigo={`<?php
$_SESION["nombre_sesion"] = "balor";`}/>
        <Conseptos texto={`Antes de contiuar vamos a ver cual es la estructura de este proyecto ya que vamos a recuperar el valor de esa variable de sesion en otra seccion de la pagina.`}/>
        <Terminal codigo={`carpeta
|
|____index.php
|
♀____recuperar.php`}/>
        <h2>index.php</h2>
        <Conseptos texto={`Aqui vamos a crear nuestra variable sesion y nuestra variable de sesion e implementaremos la logica para que nuestra variable se incremente cada que recargan la pagina.`}/>
        <Php codigo={`<?php
session_name("Increment");
session_id("incId");
session_start();

if (isset($_SESSION["inc"])) {
    $_SESSION["inc"]++;
} else {
    $_SESSION["inc"] = 1;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
        bienvenido/a entraste <?php echo $_SESSION["inc"]?> veces a la pagina :D
    </p>
    <a href="./recuperar.php">ver recarga en otra pagina</a>   
</body>
</html>`}/>
        <Conseptos texto={`Cada que el usuario recargue la pagina el numero ira incrementando para indicarle que entro sierta cantidad de veces a la pagina.`}/>
        <h2>recuperar.php</h2>
        <Conseptos texto={`Ahora si queremos recuperar ese dato de cuantas veces actualizo la pagina para usarla en otra pagina debemos recuperar ese dato en "recuperar.php", esto se hace de esta forma.`}/>
        <Php codigo={`<?php
session_name("Increment");
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
        bienvenido/a entraste <?php echo $_SESSION["inc"]?> veces a la pagina :D
    </p>
</body>
</html>`}/>
        <Conseptos texto={`Si queremos recuperar una variable de sesion solo debemos trar el nombre de la sesion e iniciar la sesion y luego usar la misma variable en este caso del otro archivo solo estamos traendo:`}/>
        <Php codigo={`session_name("Increment");
session_start();
$_SESSION["inc"];`}/>
        <h2>Login</h2>
        <Conseptos texto={`Ahora vamos a hacer un pequeño login donde validaremos si el usuario ya inicio sesion o no, para esto usaremos "$_SESSION".`}/>
        <Terminal codigo={`carpeta
|
|___index.php
|
|___login.php`}/>
        <Conseptos texto={`Esta es nuestra estructura de nuestro proyecto para poder hacer una simulacion de login.`}/>
        <h2>index.php</h2>
        <Php codigo={`<?php
    session_name("login");
    session_start();
    $isSesion = isset($_SESSION["nombre"]) && isset($_SESSION["contraseña"]);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        if($isSesion){
            echo "bienvenido " . $_SESSION["nombre"];
        } else {
            echo '<form action="login.php" method="POST">
                    <input name="nombre" type="text" placeholder="nombre">
                    <input name="contraseña" type="text" placeholder="contraseña">
                    <button>Enviar</button>
                </form>';
        }
    ?>

</body>
</html>`}/>
        <h2>login.php</h2>
        <Php codigo={`<?php
    session_name("login");
    session_start();
    
    if ($_POST["nombre"] == "Un usuario" && $_POST["contraseña"] == "123") {
        $_SESSION["nombre"] = "Un usuario";
        $_SESSION["contraseña"] = "123";
        echo "sesion iniciada";
    } else {
        echo "nombre o contraseña incorrectos";
    }
?>`}/>
        <Conseptos texto={`En este caso enviamos los datos a un servidor y validamos que sea igual a otros datos, si es igual entonces crea las variables globales para poder que cuando el usuario vuelva a la pagina no le vuelva a pedir los datos al usuario.`}/>
        <h2>session_destroy</h2>
        <Conseptos texto={`Con esta funcion vamos a eliminar las variables session osea las variables globales.`}/>
        <Php codigo={`<?php
    session_name("login");
    session_start();
    session_destroy();`}/>
      </main>
      <Footer />
    </>
  );
}

export default SesionesPhp;