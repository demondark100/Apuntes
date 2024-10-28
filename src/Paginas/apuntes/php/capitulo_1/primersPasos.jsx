import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";



function PrimerosPasosPhp(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Php tiene una etiqueta especial para poder usarlo de forma correcta y poder incrustar codigo php en html.`,
        "lenguage": "Php",
        "codigo": `<?php
    echo "Mostrar algo en pantalla"; // funcion para mostrar algo en pantalla
    // comentando una sola linea de codigo
    /*comentando lineas de codigo que tienen
    saltos en lines.*/
    // Este lenguaje necesita ";" al final de cada linea de codigo`
      },
      {
        "mensaje": `Mesclando codigo html con codigo php.`,
        "lenguage": `Php`,
        "codigo": `<p>
    <?php 
        echo "Mesclando php con html";
    ?>
</p>`
      }]}/>
      <main>
        <h1>Primeros pasos</h1>
        <Conseptos texto={`Una vez ya configurado nuestro entorno de desarrollo ya podemos iniciar a programar con este lenguaje, ahora veremos como crear un entorno de php.`}/>
        <h2>Usar entorno</h2>
        <Conseptos texto={`Para usar php necesitamos abrir y cerrar una etiqueta especial que indicara que usaremos codigo php, dentro de ese entorno se ejecutara toda la logica que usemos con este lenguaje.`}/>
        <Php codigo={`<?php
    // codigo aqui dentro
?>`}/>
        <h2>Comentarios</h2>
        <Conseptos texto={`Al comentar una linea o varias lineas evitaremos que se ejecute esa linea de codigo osea que el lenguaje ignorara la linea de codigo que sea comentada.`}/>
        <Php codigo={`<?php
    // comentando una sola linea de codigo
    /*
        comentando varias lineas de codigo
        osea lineas de codigo con saltos
        en linea para documentar las cosas
        de forma mas detallada.
    */
?>`}/>
        <h2>Punto y coma</h2>
        <Conseptos texto={`Este lenguaje de programacion siempre va a necesitar un punto y coma al final de cada linea de codigo por ejemplo en esta linea.`}/>
        <Sintaxis codigo={`<?php 
    linea de codigo;
?>`}/>
        <h2>echo</h2>
        <Conseptos texto={`Esta es una funcion para mostar en pantalla que hace nuestro codigo, esta funcion siempre la estaremos usando debido a que gracias a esta funcion vamos a saber que esta pasando con nuestro codigo.`}/>
        <Conseptos texto={`Para entender la funcion echo vamos a mostrar un simple "hola mundo" en la pantalla.`}/>
        <Php codigo={`<?php
    echo "Hola mundo";
?>`}/>
        <div className="website">
          <p>Hola mundo</p>
        </div>
        <h2>¿Cuando usar el cierre de php?</h2>
        <Conseptos texto={`Si en un archivo php solo escribiremos codigo php no va a ser necesario usar la etiqueta de cierre "?>" pero en caso de que mesclemos codigo html con codigo php si va a ser estrictamente necesario cerrar la etiqueta de php "?>" para indicar hasta donde finaliza sierta logica.`}/>
        <h3>Ejemplo sin html</h3>
        <Php codigo={`<?php 
    echo "Usando solo archivos.php";
    echo "Si solo es codigo php no es necesario cerrar etiqueta";
    echo "Si ejecutamos esto no hay error";
`}/>
        <div className="website">
            Usando solo archivos.phpSi solo es codigo php no es necesario cerrar etiquetaSi ejecutamos esto no hay error
        </div>
        <h2>Incrustar codigo html</h2>
        <Conseptos texto={`Php al ser un lenguaje web puede incrustarse con html pero si se hara eso se necesitara si o si cerrar la etiqueta de php "?>".`}/>
        <Php codigo={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=Probando, initial-scale=1.0">
    <title>probando php</title>
</head>
<body>
    <h1>Titulo</h1>
    <p>
        <?php 
            echo "Incrustando codigo php en un parrafo.";
        ?>
    </p>
</body>
</html>`}/>
        <div className="website">
            <h1>Titulo</h1>
            <p>Incrustando codigo php en un parrafo.</p>
        </div>
        <Conseptos texto={`En caso de no entender html ya hay un curso que explica como usar html, lo unico que estamos haciendo es mesclar codigo html con codigo php para mostrar en un parrafo un mensaje, como nos damos cuenta en caso de incrustar php en html si es necesario poner "?>" porque si no lo hacemos dara error porque el programa no detectara cuando acabo la logica de php y tomara el codigo de abajo como codigo php y lo vera como un error de sintaxis.`}/>
      </main>
      <Footer />
    </>
  )
}


export default  PrimerosPasosPhp;