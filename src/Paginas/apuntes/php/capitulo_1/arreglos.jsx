import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"


function ArrPhp(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Tenemos 2 tipos de arreglos los normales y los asociativos, los normales se acceden por indices, los asociativos por nombre y hay una funcion que muestra la longitud de un arreglo.`,
        "lenguage": "Php",
        "codigo": `<?php
$character = [    // arreglo asociativo
    "nombre"=>"Kafka",
    "edad"=>32
];

$valores = ["valor 1","valor 2","valor 3"]; // arreglo normal

echo $character["nombre"]; // acceder por nombre en arr asociativo
echo $valores[0]; // acceder por indice en arr normal

echo count($character); // obtener longitud
echo count($valores); // obtener longitud`
      }]}/>
      <main>
        <h1>Arreglos</h1>
        <Conseptos texto={`Los arreglos son igual que las variables solo que los arreglos pueden guardar mas datos, en php hay varias formas pero aqui vamos a aprender la sintaxis mas usada y estandar que se usa.`}/>
        <Php codigo={`<?php
$arreglo = ["valor 1","valor 2","valor 3"];`}/>
        <h2>print_r</h2>
        <Conseptos texto={`Con esta funcion vamos a previsualizar un arreglo sin necesidad de acceder a un indice del arreglo.`}/>
        <Php codigo={`<?php
$arreglo = ["valor 1","valor 2","valor 3"]; 
print_r($arreglo);`}/>
        <div className="website">
          <p>{"Array ( [0] => valor 1 [1] => valor 2 [2] => valor 3 )"}</p>
        </div>
        <h2>Indices</h2>
        <Conseptos texto={`Nosotros podemos acceder a un arreglo a travez de su indice que nicia de sde 0, la sintaxis para acceder a un indice es usar los corchetes "[]".`}/>
        <Php codigo={`<?php
$arreglo = ["valor 1","valor 2","valor 3"];
echo $arreglo[0];
echo $arreglo[1];
echo $arreglo[2];`}/>
        <div className="website">
          <p>valor 1valor 2valor 3</p>
        </div>
        <h2>arreglos asociativos</h2>
        <Conseptos texto={`Con los arreglos asociativos vamos a identificar a un valor por un nombre y ya no por un indice como era antes, por ejemplpo.`}/>
        <h2>Antes</h2>
        <Php codigo={`<?php
echo $arr[0]`}/>
        <h2>Ahora</h2>
        <Conseptos texto={`Ahora vamos a poner un nombre y ya no un numero, para crear un arreglo asociativo debemos usar "=>" para indicar a php que sera un arreglo asociativo.`}/>
        <Php codigo={`<?php
$character = [
    "nombre"=>"Kafka",
    "apellido"=>"Hibino",
    "edad"=>32,
    "poder"=>"Kaiju"
];

print_r($character);`}/>
        <div className="website">
          <p>{`Array ( [nombre] => Kafka [apellido] => Hibino [edad] => 32 [poder] => Kiju )`}</p>
        </div>
        <Conseptos texto={`Como nos damos cuenta para asociar un valor con otro usamos "=>", ahora para llamar un valor en especifico no es necesario usar un numero osea "[0]","[1]",etc sino que usaremos el nombre que le pusimos para encontrar el valor.`}/>
        <Php codigo={`<?php
$character = [
    "nombre"=>"Kafka",
    "apellido"=>"Hibino",
    "edad"=>32,
    "poder"=>"Kaiju"
];

echo $character["nombre"];
echo $character["apellido"];
echo $character["edad"];
echo $character["poder"];`}/>
        <div className="website">
          <p>KafkaHibino32Kaiju</p>
        </div>
        <Conseptos texto={`Un arreglo asociativo tambien puede guardar otro arreglo como un valor, y para acceder a ese arreglo tambien necesitaremos los indices en caso de guardar solo un arreglo pero si se guarda otro arreglo asociativo tambien se necesitara acceder por el nombre del valor, en este ejemplo veremos lo mas comun poner un arreglo dentro de un arreglo asociativo.`}/>
        <Php codigo={`<?php
$character = [
    "nombre"=>"Kafka",
    "apellido"=>"Hibino",
    "edad"=>32,
    "poder"=>"Kaiju",
    "peleas"=>["kaiju no9","kaiju no10"]
];

echo $character["peleas"][0];
echo $character["peleas"][1];`}/>
        <div className="website">
          <p>kaiju no9kaiju no10</p>
        </div>
        <h2>count</h2>
        <Conseptos texto={`Con esta funcion vamos a saber cuantos valores tiene un arreglo, en simples palabras con esta funcion veremos la longitud del arreglo.`}/>
        <Php codigo={`<?php
$arreglo = ["valor 1","valor 2","valor 3"];
echo count($arreglo);`}/>
        <div className="website">
          <p>3</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ArrPhp;