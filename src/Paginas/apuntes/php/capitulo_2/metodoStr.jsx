import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";

function MetodosCadenaPhp(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora veremos algunas funciones que tiene php para manejar las cadenas de texto.`,
        "lenguage": "Php",
        "codigo": `<?php
$string = "Una cadena de texto Normal";
strtolower($string); // minuscula
strtoupper($string); // mayuscula
ucfirst($string); // primer caracter mayusculo
ucwords($string); // primer caracter mayusculo en cada palabra
strlen($string); // ver longitud de cadena de texto
str_word_count($string); // cuantas palabras tiene una string
explode(" ",$string); // convertir string en arreglo
explode(" ",$string,-1); // convertir string en arreglo y quitar el ultimo valor
explode(" ",$string,2); convertir string en arreglo y separarlo en 2 partes`
      }]}/>
      <main>
        <h1>Metodos de cadena</h1>
        <Conseptos texto={`Ahora veremos algunas funciones que tiene php ya integradas para poder trabajar de mejor forma con las cadenas de texto.`}/>
        <h2>strtolower</h2>
        <Conseptos texto={`Con esta funcion vamos a convertir una cadena de texto que tenga mayusculas a que todo pase a ser minusculas.`}/>
        <Php codigo={`<?php

$cadena = "Perro no Debe LLevar Mayusculas.";
$minuscula = strtolower($cadena);
echo $minuscula;`}/>
        <div className="website">
          <p>perro no debe llevar mayusculas.</p>
        </div>
        <h2>strtoupper</h2>
        <Conseptos texto={`Con esta funcion vamos a convertir todos los caracteres de una cadena de texto en mayuscula.`}/>
        <Php codigo={`<?php

$cadena = "toda esta cadena sera mayuscula.";
$minuscula = strtoupper($cadena);
echo $minuscula;`}/>
        <div className="website">
          <p>TODA ESTA CADENA SERA MAYUSCULA.</p>
        </div>
        <h2>ucfirst</h2>
        <Conseptos texto={`Con esta funcion vamos a convertir solo la primera letra de una cadena de texto en mayusculas.`}/>
        <Php codigo={`<?php

$cadena = "hola mundo.";
$minuscula = ucfirst($cadena);
echo $minuscula;`}/>
        <div className="website">
          <p>Hola mundo.</p>
        </div>
        <h2>ucwords</h2>
        <Conseptos texto={`Con esta funcion vamos a convertir la primera letra en mayuscula de cada palabra en una cadena de texto.`}/>
        <Php codigo={`<?php

$cadena = "hola mundo.";
$minuscula = ucwords($cadena);
echo $minuscula;`}/>
        <div className="website">
          <p>Hola Mundo.</p>
        </div>
        <h2>strlen</h2>
        <Conseptos texto={`Con esta funcion vamos a saber cuantos caracteres de longitud tiene una cadena de texto.`}/>
        <Php codigo={`<?php

$cadena = "hola mundo.";
$longitud = strlen($cadena);
echo $longitud;`}/>
        <div className="website">
          <p>11</p>
        </div>
        <h3>str_word_count</h3>
        <Conseptos texto={`Con esta funcion vamos a saber cuantas palabras tiene una cadena de texto.`}/>
        <Php codigo={`<?php

$cadena = "hola mundo.";
$palabras = str_word_count($cadena);
echo $palabras;`}/>
        <h2>explode</h2>
        <Conseptos texto={`Con esta funcion vamos una string en un arreglo.`}/>
        <Sintaxis codigo={`$cadena = "hola mundo";
$arreglo = explode("caracter para separar",cadena de texto);
# ejemplo si en el primer parametro ponemos espacio " "
# la cadena de texto se separara por cada espacio.
$separar = explode(" ",$arreglo);`}/>
        <Php codigo={`<?php

$cadena = "hola mundo.";
$arreglo = explode(" ",$cadena);
print_r($arreglo);`}/>
        <div className="website">
          <p>{`Array ( [0] => hola [1] => mundo. )`}</p>
        </div>
        <Conseptos texto={`En este caso estamos separando una cadena de texto por cada espacio que hay " ".`}/>
        <Conseptos texto={`Este metodo tiene un tercer parametro, con este indicaremos en cuantas partes se separara la cadena de texto para formar el arreglo.`}/>
        <Sintaxis codigo={`explode(" separar por ",$variable,cuantas partes)`}/>
        <Php codigo={`<?php

$cadena = "uno dos tres cuatro cinco seis siete";
$arreglo = explode(" ",$cadena,2);
print_r($arreglo);
?>`}/>
        <div className="website">
          <p>{`Array ( [0] => uno [1] => dos tres cuatro cinco seis siete )`}</p>
        </div>
        <Conseptos texto={`Como nos damos cuenta la cadena se a separado solo en 2 partes, si al tercer parametro de la funcion "explode" le ponemos un numero negativo quitara los ultilos elementos de la separacion por ejemplo si ponemos -2 quitara los ultimos 2 elementos y asi segun el numero negativo que se ponga.`}/>
        <Php codigo={`<?php

$cadena = "uno dos tres cuatro cinco seis siete";
$arreglo = explode(" ",$cadena,-2);
print_r($arreglo);
?>`}/>
        <div className="website">
          <p>{`Array ( [0] => uno [1] => dos [2] => tres [3] => cuatro [4] => cinco )`}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default MetodosCadenaPhp;