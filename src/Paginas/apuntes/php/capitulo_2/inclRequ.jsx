import Conseptos from "../../../../componentes/conseptos/conseptos";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


function InclRequPhp(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `include y require sirve para usar archivos php en otro, la diferencia es que include solo advierte pero sigue ejecutando el programa y que require detiene el programa en caso de que no encuentre el archivo.`,
        "lenguage": "Php",
        "codigo": `<?php

// sintaxis de include
include("ruta de archiv");
include "ruta de archiv";
include_once("ruta de archiv");
include_once "ruta de archiv";


// sintaxis de require
require("ruta de archiv");
require "ruta de archiv";
require_once("ruta de archiv");
require_once "ruta de archiv";

// con include o require _once solo permite importar un archivo solo una vez.`
      }]}/>
      <main>
        <h1>Include y Require</h1>
        <Conseptos texto={`Con esto vamos a poder importar archivos php de otros lugares, osea que el codigo que este en otro archivo se podra usar en un archivo principal, esto es util para modularizar un proyecto que sea grande.`}/>
        <h2>Antes de avanzar</h2>
        <Conseptos texto={`Esta es la estructura de archivos que usare.`}/>
        <Terminal codigo={`phpCurso
  curso.php
  other.php`}/>
        <Conseptos texto={`Ambos estan en la misma carpeta.`}/>
        <h2>Include</h2>
        <Conseptos texto={`Con esto vamos a importar todo el codigo de un archivo php, este tiene dos sintaxis para ser usado, ambas sintaxis funcionan igual, puedes usar cualquier sintaxis y no pasara nada.`}/>
        <Sintaxis codigo={`include "Ruta del archivo";
include("Ruta del archivo");`}/>
        <h2>Archivo secundario "other.php"</h2>
        <Php codigo={`<?php
echo "Incluyendo archivo desde otro lugar"."<br>";`}/>
        <h2>Archivo principal "curso.php"</h2>
        <Php codigo={`<?php

include "./other.php";
include("./other.php");`}/>
        <div className="website">
          <p>
            Incluyendo archivo desde otro lugar <br />
            Incluyendo archivo desde otro lugar
          </p>
        </div>
        <Conseptos texto={`En este caso estamos incluyendo el mismo archivo 2 veces por eso se ejecuta el archivo 2 veces.`}/>
        <h3>No incluye</h3>
        <Conseptos texto={`En caso de que el archivo no se encuentre php solo nos dara una advertencia pero seguira ejecutando el resto del programa.`}/>
        <Php codigo={`<?php

include "./desconocido.php";
include("./other.php");`}/>
        <div className="website">
          <p>
            {`Warning: include(./desconocido.php): Failed to open stream: No such file or directory in C:\\xampp\\htdocs\\phpCurso\\curso.php on line 3
            Warning: include(): Failed opening \'./desconocido.php\' for inclusion (include_path=\'C:\\xampp\\php\\PEAR\') in C:\\xampp\\htdocs\\phpCurso\\curso.php on line 3`}
          </p>
          <p>Incluyendo archivo desde otro lugar</p>
        </div>
        <h2>require</h2>
        <Conseptos texto={`Con esta funcion tambien vamos a incluir archivos php desde otro lugar, este tambien tiene dos sintaxis es igual que "include", osea que se puede usar con () o  con "".`}/>
        <Sintaxis codigo={`require "Ruta del archivo";
require("Ruta del archivo");`}/>
        <Php codigo={`<?php

require("./other.php");
require "./other.php";`}/>
        <div className="website">
          <p>Incluyendo archivo desde otro lugar <br />
          Incluyendo archivo desde otro lugar</p>
        </div>
        <Conseptos texto={`En caso de que require no encuentre el archivo a diferencia de include este hara que el programa se detenga por completo.`}/>
        <h2>include_once y require_once</h2>
        <Conseptos texto={`Estos dos son igual que require e include solo que al llevar "_once" solo podremos importar un archivo una sola vez, si usamos include_once o require_once evitaremos muchos probemas por ejemplo sobreescribir funciones o crear una variable contante varias veces.`}/>
        <Conseptos texto={`Con "require_once" o "include_once" tamvien podemos usar la sintaxis de corchetes () y comillas "".`}/>
        <Php codigo={`<?php
include_once "./other.php";`}/>
        <div className="website">
          <p>Incluyendo archivo desde otro lugar</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default InclRequPhp;






// capitulo 32 ya lo vimos
// https://www.youtube.com/watch?v=9TZtr-D0Hwc&t=236s