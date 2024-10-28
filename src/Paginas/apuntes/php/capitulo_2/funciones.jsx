import Conseptos from "../../../../componentes/conseptos/conseptos";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"


function FuncionesPhp(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": "Ahora crearemos funciones personalizadas, tambien podemos importar funciones desde otro archivo.",
        "lenguage": `Php`,
        "codigo": `<?php
function saludar($nombre){
    echo "hola $nombre";
}
saludar("Lumine");

// incluir de otro archivo

require_once "ruta";
saludar("Amber");`
      }]}/>
      <main>
        <h1>Funciones</h1>
        <Conseptos texto={`Ahora vamos a crear nuestras propias funciones para poder usarlas cuantas veces queramos.`}/>
        <Php codigo={`<?php

function sumar($n1,$n2){
    $resultado = $n1 + $n2;
    return "El resultado de tu suma es: $resultado"."<br>";
}

echo sumar(15,15);
echo sumar(10,12);
echo sumar(87,13);`}/>
        <div className="website">
          <p>
            El resultado de tu suma es: 30 <br />
            El resultado de tu suma es: 22 <br />
            El resultado de tu suma es: 100
          </p>
        </div>
        <Conseptos texto={`En este caso solo estamos retornando un valor para poder usarlo en cualquier parte del programa.`}/>
        <h2>Importar funcion</h2>
        <Conseptos texto={`Tambien podemos obtener funciones desde otro archivo, en mi caso sera tendre un archivo principal llamado "curso.php" y un archivo secundario que tendra la funcion llamada "other.php".`}/>
        <Terminal codigo={`phpCurso
  curso.php
  other.php`}/>
        <h3>other.php</h3>
        <Php codigo={`<?php
function sumar($n1,$n2){
    $resultado = $n1 + $n2;
    echo "El resultado es: $resultado";
}`}/>
        <h3>curso.php</h3>
        <Php codigo={`<?php

include_once "./other.php";

sumar(15,15);`}/>
        <dir className="website">
          <p>El resultado es: 30</p>
        </dir>
      </main>
      <Footer />
    </>
  )
}

export default FuncionesPhp;