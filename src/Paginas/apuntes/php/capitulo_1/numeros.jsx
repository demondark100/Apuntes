import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Php from "../../../../componentes/lenguajes/Php";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";


function NumerosPhp(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Tenemos varias formas de manejar numeros en php ahora veremos los mas usados.`,
        "lenguage": `Php`,
        "codigo": `<?php
$string = "15";
$flotante = 25.48;
$entero = 84;
$saludo = "hola mundo";

echo (int) $string; // convertir cadena de texto numerico en entero.
echo (int) $flotante; // convertir flotante en entero.
echo (float) $entero; // convertir a flotante un entero.
var_dump(is_numeric($saludo)); // detectar si un dato es un numero o no`
      }]}/>
      <main>
        <h1>Numeros</h1>
        <Conseptos texto={`Como sabemos php tiene numeros enteros y flotantes para ello tambien podemos convertir datos que sean cadenas de texto en numeros.`}/>
        <h2>int</h2>
        <Conseptos texto={`Con esta funcion vamos a convertir un numeros un numeros flotante a entero o tambien un numero que este enserrado por comillas a un numero entero.`}/>
        <Conseptos texto={`Para usar esta funcion usamos (int) y luego el dato el cual convertir a decimal.`}/>
        <Sintaxis codigo={`$decimal = (int) "dato";`}/>
        <h3>Convertir flotante</h3>
        <Php codigo={`<?php
$decimal = (int) 18.57;
echo $decimal;`}/>
        <div className="website">
          <p>18 <br />
          {`int(18)`}</p>
        </div>
        <h3>Convertir string</h3>
        <Conseptos texto={`Tambien podemos convertir numeros que esten rodeados de comillas como "15" pero que son considerados entrings y no numerosdebido a que el numero esta enserrado con "".`}/>
        <Php codigo={`<?php
$string = (int) "15";
echo $string . "<br>";
var_dump($string);`}/>
        <div className="website">
          <p>
            15 <br />
            {`int(15)`}
          </p>
        </div>
        <h3>Convertir entero</h3>
        <Conseptos texto={`Con la funcion float vamos a convertir un numero entero a un numnero flotante.`}/>
        <Php codigo={`<?php
$entero = (float) 18;
echo $entero . "<br>";
var_dump($entero);`}/>
        <div className="website">
          <p>
            18 <br />
            {`float(18)`}
          </p>
        </div>
        <h2>is_numeric</h2>
        <Conseptos texto={`Con esta funcion vamos a comprobar si un dato es un numero o no, para entender este ejemplo crearemos una string y un numero donde validaremos si es un numero o una string.`}/>
        <Php codigo={`<?php
$string = "Hola mundo";
$entero = 25;
var_dump(is_numeric($string));
var_dump(is_numeric($entero));`}/>
        <div className="website">
          <p>
            {`bool(false) bool(true)`}
          </p>
        </div>
      </main>
    </>
  )
}

export default NumerosPhp;