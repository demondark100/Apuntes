import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


function BuclesPhp(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Php tiene varias formas de recorrer un arreglo o ejecutar un bloque de codigo varias veces`,
        "lenguage": `Php`,
        "codigo": `$arr1 = ["valor 1","valor 2","valor 3","valor 4"];
$arr2 = [
    "clave1" => "valor1",
    "clave2" => "valor2"
];
$contador = 0;
while($contador < 5){
    echo $contador;
    $contador++;
}
do {
    echo $contador;
    $contador++;
} while($contador < 5);
 
for($i=0;$i<5;$i++){
    echo $i;
}

foreach($arr1 as $valor){
    echo $valor;
}

foreach($arr2 as $clave => $valor){
    echo "$clave - $valor";
}
    
foreach($arr1 as $valor){
    if($valor == "valor 1"){
        break;
    }
    if($valor == "valor 3"){
        continue;
    }
    echo $valor;
}`
      }]}/>
      <main>
        <h1>Bucles</h1>
        <Conseptos texto={`Con esto ejecutaremos un bloque de codigo varias veces, esto sirve para recorrer arreglos o para imprimir algo varias veces en pantalla.`}/>
        <h2>while</h2>
        <Conseptos texto={`Con el bucle muentras podremos ejecutar un bloque de codigo varias veces mientras una condicion se cumpla, la condicion puede ser indefinida pero tambien podemos ponerle una condicion que haga que el bucle mientras acabe.`}/>
        <Php codigo={`<?php
$limite = 5;
$inc = 0;

while ($inc < $limite) {
    echo "El numero actual es $inc". "<br>";
    $inc++;
};`}/>
        <div className="website">
          <p>
            El numero actual es 0 <br />
            El numero actual es 1 <br />
            El numero actual es 2 <br />
            El numero actual es 3 <br />
            El numero actual es 4
          </p>
        </div>
        <h2>do while</h2>
        <Conseptos texto={`A diferencia del bucle while normal el bucle while ejecuta el bloque de codigo antes que se cumpla la condicion.`}/>
        <Php codigo={`<?php
$limite = 5;
$inc = 0;

do {
    echo "El numero actual es: $inc" . "<br>";
    $inc++;
} while($inc < $limite);`}/>
        <div className="website">
          <p>
            El numero actual es: 0 <br />
            El numero actual es: 1 <br />
            El numero actual es: 2 <br />
            El numero actual es: 3 <br />
            El numero actual es: 4
          </p>
        </div>
        <h2>for</h2>
        <Conseptos texto={`Con el bucle for vamos a recorrer arreglos de forma mas sensilla o ejecutar un bloque de codigo en un rango especifico.`}/>
        <Php codigo={`<?php
for ($i=0; $i < 5; $i++) { 
    echo "El numero actual es: $i" . "<br>";
}`}/>
        <div className={`website`}>
          <p>
            El numero actual es: 0 <br />
            El numero actual es: 1 <br />
            El numero actual es: 2 <br />
            El numero actual es: 3 <br />
            El numero actual es: 4
          </p>
        </div>
        <h2>foreach</h2>
        <Conseptos texto={`Con el bucle foreach vamos a recorrer un arreglo o un arreglo asociativo.`}/>
        <h3>Recorrer arreglo normal</h3>
        <Sintaxis codigo={`$recorrerArreglo = ["valores"];
foreach($recorrerArreglo as $nombreClave){
  echo "$nombreClave";
}`}/>
        <Php codigo={`<?php
$juegos = ["left 4 dead","gta","mlbb","genshin impact"];

foreach ($juegos as $juego) {
    echo "$juego" . "<br>";
}`}/>
        <div className="website">
          <p>
            left 4 dead <br />
            gta <br />
            mlbb <br />
            genshin impact
          </p>
        </div>
        <h3>Recorrer arreglo asociativo</h3>
        <Sintaxis codigo={`$arregloAsociativo = [
    "clave" => "valor"
];
forach($arregloAsociativo as $clave => $valor){
    echo "$clave - $valor";
}`}/>
        <Php codigo={`<?php

$personaje = [
    "nombre" => "Mualani",
    "Elemento" => "Agua",
    "Ulti" => "Crear ola"
];

foreach ($personaje as $clave => $valor) {
    echo "$clave - $valor" . "<br>";
}`}/>
        <div className="website">
          <p>
            nombre - Mualani <br />
            Elemento - Agua <br />
            Ulti - Crear ola
          </p>
        </div>
        <h2>Detener bucle</h2>
        <Conseptos texto={`Podemos detener el bucle con la clausula "break", esto funciona para todos los bucles osea while, for, foreach.`}/>
        <Php codigo={`<?php

$frutas = [
    "manzana",
    "naranja",
    "pera",
    "sandia",
    "melon",
    "mango"
];

foreach ($frutas as $fruta) {
    if ($fruta == "sandia") {
        break;
    }
    echo "$fruta" . "<br>";
}`}/>
        <div className="website">
          <p>
            manzana <br />
            naranja <br />
            pera
          </p>
        </div>
        <h2>Evitar un valor</h2>
        <Conseptos texto={`Tambien podemos continuar recorriendo un arreglo evitando un valor en especifico, esto con la clausula "continue".`}/>
        <Php codigo={`<?php

$frutas = [
    "manzana",
    "naranja",
    "pera",
    "sandia",
    "melon",
    "mango"
];

foreach ($frutas as $fruta) {
    if ($fruta == "sandia") {
        continue;
    }
    echo "$fruta" . "<br>";
}`}/>
        <div className="website">
          <p>
            manzana <br />
            naranja <br />
            pera <br />
            melon <br />
            mango
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BuclesPhp;