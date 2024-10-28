import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"


function IssetPhp() {
  return (  
    <>
      <Resumenes  contenido={[{
        "mensaje": `Ahora veremos funciones utiles para procesar datos de un formulario.`,
        "lenguage": `Php`,
        "codigo": `<?php
is_null($variable); // saber si una variable es nula
unset($variable); // eliminar una variable
empty($variable); // verificar si una variable tiene un valor vacio
isset($variable); // verificar si una variable esta definida o no`
      }]}/>
      <main>
        <h1>funciones de verificacion</h1>
        <Conseptos texto={`Con estas funciones vamos a saber si una variable esta vacia es nula o esta indefinida.`}/>
        <h2>is_null</h2>
        <Conseptos texto={`Con esta funcion vamos a saber si una funcion es nula o no, esta funcion devolvera true o false, true si la variable es nula y false si la variable no es nula.`}/>
        <Php codigo={`<?php
$variableNula = null;
$variableNoNula = "esto no es null";

var_dump(is_null($variableNula));
var_dump(is_null($variableNoNula));`}/>
        <div className="website">
          <p>{`bool(true) bool(false)`}</p>
        </div>
        <h2>unset</h2>
        <Conseptos texto={`Con esta funcion vamos a eliminar una variable que ha sido creada anteriormente, al eliminar la variable ya no se podra usar y se convertira en una variable nula osea que no existe.`}/>
        <Php codigo={`<?php
$variableNoNula = "esto no es null";
unset($variableNoNula);

if (is_null($variableNoNula)) {
    echo "La variable es nula";
} else {
    echo "La variable no es nula";
}`}/>
        <div className="website">
          <p>{`Warning: Undefined variable $variableNoNula in C:\\xampp\\htdocs\\phpCurso\\index.php on line 5
La variable es nula`}</p>
        </div>
        <Conseptos texto={`php tambien nos da una advertencia debido a que al borrar la variable e intentar usarla php no encuentra la variable para hacer la validacion y al no encontrarla nos advierte y toma la variable eliminada como nula.`}/>
        <h2>empty</h2>
        <Conseptos texto={`Con esta funcion vamos a saber si una variable esta vacia, a una variable se le considerara vacia cuando.`}/>
        <ol>
          <li><Conseptos texto={`La variable sea nula.`}/></li>
          <li><Conseptos texto={`La variable tenga una string vacia.`}/></li>
          <li><Conseptos texto={`La variable tenga un arreglo vacio.`}/></li>
          <li><Conseptos texto={`La variable no tenga ningun valor.`}/></li>
          <li><Conseptos texto={`La variable sea 0 o 0.0`}/></li>
        </ol>
        <Php codigo={`<?php
$string = "";
$arreglo = [];
$nulo = null;
$sinValor;
$entero = 0;
$flotante = 0.0;

var_dump(empty($string));
var_dump(empty($arreglo));
var_dump(empty($nulo));
var_dump(empty($sinValor));
var_dump(empty($entero));
var_dump(empty($flotante));`}/>
        <div className="website">
          <p>{`bool(true) bool(true) bool(true) bool(true) bool(true) bool(true)`}</p>
        </div>
        <h2>isset</h2>
        <Conseptos texto={`Esta funcion se encargara de verificar si una variable esta definida o no y que una variable no sea nula, con esta funcion php no mostrara una advertencia sino que esa funcion directamente procesara a la variable si esta definida o no, esta funcion es muy usada para recoger datos de un formulario y evitar errores.`}/>
        <Php codigo={`<?php
$string = "hola mundo";
unset($string);

var_dump(isset($string));`}/>
        <div className="website">
          <p>{`bool(false)`}</p>
        </div>
        <Conseptos texto={`En este caso nos dice que es falso porque la variable $string a sido eliminada por unset.`}/>
        <Conseptos texto={`Ahora veremos que pasa si intentamos recoger datos de un formulario inexistente.`}/>
        <Php codigo={`<?php
$dato = isset($_POST["dato"]);
if ($dato == null) echo "dato no existente";`}/>
        <div className="website">
          <p>dato no existente</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default IssetPhp;