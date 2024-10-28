import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";



function CondicionalesPhp(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Php tiene distintas estructuras para hacer condicionales.`,
        "lenguage": "Php",
        "codigo": `<?php
// condicional if
if(condicion){
    // codigo
} elseif(condicion){
    // codigo
} else{
    // codigo
}

// condicion ternaria
$variable = condicion ? codigo si es verdadero : codigo si es falso;

// condicion con switch
switch(variable a comparar){
    case condicion:
      // codigo
      break;
    case condicion:
      // codigo
      break;
    default:
      // codigo
      break;
}
      
// condicion con match

$variable match(variable si se hara una condicion de igualdad o true si se hara otras condiciones){
    variable o condicion => "retornar valor",
    variable o condicion => "retornar valor",
    variable o condicion => "retornar valor",
    default => "retornar valor"
};`
      }]}/>
      <main>
        <h1>Condicionales</h1>
        <Conseptos texto={`Aqui la sintaxis de las condicionales es igual a la de gran parte de lenguajes de programacion osea que se usan llaves, tambien hay una sintaxis antigua pero es mejor ir con lo estandar y lo mas usado.`}/>
        <Php codigo={`<?php
$curso = "Mtematica";

if ($curso == "Mtematica") {
    echo "Estar estudiando matematica";
} elseif ($curso == "Comunicacion"){
    echo "Estas estudiando comunicacion";
} else {
    echo "El curso no es valido";
}`}/>
        <div className={`website`}>
          <p>Estar estudiando matematica</p>
        </div>
        <h2>Operador ternario</h2>
        <Conseptos texto={`Con el operador ternario vamos a simplificar mucho las condicionales cuando sean casos simples.`}/>
        <Sintaxis codigo={`condicion ? codigo en caso de cumplir condicion:codigo en caso de no cumplir condicion;`}/>
        <Php codigo={`<?php
$numero = 15;

$condicion = $numero == 15 ? "El numero es 15":"El numero no es 15";

echo $condicion;`}/>
        <div className="website">
          <p>El numero es 15</p>
        </div>
        <Conseptos texto={`Para trabajar con una condicion ternaria es necesario guardar el posible resultado de la condicion en una variable para poder mostrarla mas adelante.`}/>
        <Conseptos texto={`Ahora haremos algo un poco mas complicado y esque verificaremos si el numero es 15, si es asi el numero se incrementara de lo contrario dara un mensaje.`}/>
        <Php codigo={`<?php
$numero = 15;

$condicion = $numero == 15 ? $numero = $numero + 1:"El numero no se incremento";

echo $condicion;`}/>
        <div className="website">
          <p>16</p>
        </div>
        <h2>switch</h2>
        <Conseptos texto={`Esta es otra estructura para hacer condiciones, es muy similar a otros lenguajes de programacion.`}/>
        <Php codigo={`<?php
$fruta = "manzana";

switch ($fruta) {
    case 'naranjs':
        echo "Te has comido una naranja";
        break;
    case "manzana":
        echo "Te has comido una manzana";
        break;
    default:
        echo "La fruta no esta regitrara";
        break;
}`}/>
        <div className="website">
          <p>Te has comido una manzana</p>
        </div>
        <h2>match</h2>
        <Conseptos texto={`Con esta estructura vamos a comparar si una o varias variables son iguales a una variable, en caso de no ser igual se podra retornar un valor por defecto como switch o como un else en una condicional.`}/>
        <Conseptos texto={`La funcion match necesita ser alamacenada en una nueva variable debido a que esta funcion retornara un valor segun la fcondicion que se cumpla.`}/>
        <Sintaxis codigo={`$variable = match($variable a comparar){
    $variable de condicional => "retornar un valor",
    $variable de condicional => "retornar un valor",
    $variable de condicional => "retornar un valor",
    default "Retornar un valor si ninguna variable es igual a la variable que se hace la comparacion."
};
echo $variable;`}/>
        <Php codigo={`<?php
$n1 = 15;

$n2 = 35;
$n3 = 68;
$n4 = 15;

$esIgual = match ($n1) {
    $n2 => "n2 Si conside",
    $n3 => "n3 Si conside",
    $n4 => "n4 Si conside",
    default => "Ninguna variable coinside con la variable mencionada"
};

echo $esIgual;`}/>
        <div className="website">
          <p>n4 Si conside</p>
        </div>
        <Conseptos texto={`Con match tambien podemos hacer mas validaciones a parte de solo hacer una condicion para saber si una variable es igual a otra.`}/>
        <Php codigo={`<?php
$edad = 25;

$edades = match (true) {
    $edad >= 60 => "Eres de la tercera edad",
    $edad >= 30 => "Eres adulto",
    $edad >= 18 => "Aun eres joven",
    default => "Aun eres menor de edad"
};
echo $edades;`}/>
        <div className="website">
          <p>Aun eres joven</p>
        </div>
        <Conseptos texto={`En el parametro de match en vez de poner una variable a la cual se hara la comparacion se le pone true para que ese bloque de codigo se ejecute y asi se pueda hacer las otras validaciones, en este caso para retornar un valor segun sea la edad de una persona.`}/>
      </main>
      <Footer />
    </>
  )
}

export default CondicionalesPhp;