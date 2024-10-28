import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"



function OperacionesPhp(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Esto es muy similar a otros lenguajes como js y py.`,
        "lenguage": "Php",
        "codigo": `// aritmetica
// + suma
// - resta
// / divicion
// * multiplicacion
// % resto

// comparacion de asignacion
// +=,-=,/=,*=,%=

// comparacion
// > mayor que   >= mayor igual que
// < menor que   <= menor igual que
// == igual que  === estrictamente igual que
// != distinto que    !== estrictamente distinto que

// operadores logicos
// y "and" o "&&" recomendado "&&"
// o "or" o "||" recomendado "||"
// not "!"

// incremento decremento
$incr++;
$decr--;`}]}/>
      <main>
        <h1>Operaciones</h1>
        <Conseptos texto={`Php es un lenguaje que permite distintos tipos de operaciones matematicas, estos van desde los mas basicos como suma, resta, etc.`}/>
        <Php codigo={`<?php
$sumar = 15 + 15;
$restar = 25 - 18;
$multiplicar = 5 * 5;
$dividir = 15 / 3;
$resto = 15 % 2;

echo "La suma es: $sumar,la resta es: $restar, la multiplicacion es: $multiplicar, la divicion es: $dividir, el resto es: $resto";`}/>
        <div className="website">
          <p>La suma es: 30,la resta es: 7, la multiplicacion es: 25, la divicion es: 5, el resto es: 1</p>
        </div>
        <h2>Operacion de asignacion</h2>
        <Conseptos texto={`Tambien podemos cambiar y asignar un nuevo valor al mismo tiempo esto se puede con cualquier operacion.`}/>
        <Php codigo={`<?php
$suma = 5;
$suma += 5;
echo $suma . " ";
$resta = 5;
$resta -= 5;
echo $resta . " ";
$dividicion = 5;
$dividicion /= 2;
echo $dividicion . " ";
$multiplicar = 5;
$multiplicar *= 5;
echo $multiplicar . " ";
$resto = 5;
$resto %= 5;
echo $resto;`}/>
        <div className="website">
          <p>10 0 2.5 25 0</p>
        </div>
        <h2>Comparacion</h2>
        <Conseptos texto={`En este apartado es muy similar a js en cuestion de "==","===","!=","!==".`}/>
        <Conseptos texto={`Cuando es "==" osea no es estricto osea que "15" es igual a 15.
Pero si es 3 "===" Tambien se considerara el tipo de dato osea que "15" === 15 no es igual.

Lo mismo ocurre con distinto de:
Por ejemplo 15 != "15" en este caso no es distinto porque es el mismo numero y no le importa el tipo de dato.
Pero con el estricto si es importante el tipo de dato osea que 15 !== "15" 15 si es distinto que "15" porque uno es dato numerico y el otro es string y no le importa si es el mismo numero.`}/>
        <Php codigo={`<?php
$mayor = 50 > 15;
$menor = 5 < 25;
$distinto = 15 != 25;
$distintoEstricto = 35 !== "35";
$igual = 15 == 15;
$igualEstricto = 23 === "23";
$mayorIgual = 55 >= 25;
$menorIgual = 15 <= 35;

var_dump($mayor);
var_dump($menor);
var_dump($distinto);
var_dump($distintoEstricto);
var_dump($igual);
var_dump($igualEstricto);
var_dump($mayorIgual);
var_dump($menorIgual);`}/>
        <div className="website">
          <p>{`bool(true) bool(true) bool(true) bool(true) bool(true) bool(false) bool(true) bool(true)`}</p>
        </div>
        <h2>Operadores logicos</h2>
        <Conseptos texto={`Esto comparte similitud con js y python ya que para and osea i e or osea o se puede usar "and" o "&&" o para or se puede usar "||" o "or", se puede usar el que mas prefieras.`}/>
        <Conseptos texto={`En php segun yo es mucho mas recomendable usar "&&" y "||" porque es el estandar hoy en dia por eso es el ejemplo se usara los simbolos ya mencionados.`}/>
        <Php codigo={`<?php
$or = 15 || 25 == 15;
$and = 15 && 15 == 15;
$not = !true;
var_dump($or,$and,$not);`}/>
        <div className="website">
          <p>{`bool(true) bool(true) bool(false)`}</p>
        </div>
        <h2>Incremento y decremento</h2>
        <Conseptos texto={`Php tiene tambien una forma de ir incrementando o decrementando las variables de forma mas sensilla.`}/>
        <Php codigo={`<?php
$numero1 = 15;
$numero1++;
echo $numero1 . ", ";
$numero2 = 15;
$numero2--;
echo $numero2;`}/>
        <div className="website">
          <p>16, 14</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default OperacionesPhp;