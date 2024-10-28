import Conseptos from "../../../../componentes/conseptos/conseptos";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Html from "../../../../componentes/lenguajes/Html";


// componentes de react :v esto solo usare aqui
import { useState } from "react";

function SendFormPhp(){
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [year, setYear] = useState("");
  const [texto, setTexto] = useState("Puedes ver el resultado rellenando el formulario de arriba.");
  const [showMsg, setShowMsg] = useState(false);

  function verificar(e){
    e.preventDefault();

    const fecha = new Date();
    const getYear = fecha.getFullYear();
    const age = parseInt(edad);
    const actualYear = parseInt(getYear);

    const verificar = actualYear - edad;
    if (verificar == year) {
      setTexto(`${nombre} tu edad si coinside con el año que naciste.`);
    } else {
      setTexto(`${nombre} Tu edad no coinside con el año que naciste porfavor verifica los datos.`)
    }
    setShowMsg(true);
    setTimeout(() =>setShowMsg(false), 5000);
  }

  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora mandaremos datos de un formulario para procesarlos en php.

archivo principal formulario`,
        "lenguage": "Php",
        "codigo": `<?php
// method: POST o GET
// action: nombre del archivo a donde se enviaran los datos
// name: como identificar a los campos para recuperar datos
<form method="POST" action="EnviarHacia.php">
  <input type="text" name="nombre_campo1"/>
  <input type="text" name="nombre_campo2"/>
</form>`
      },{
        "mensaje": `archivo que recibe datos`,
        "lenguage": `Php`,
        "codigo": `<?php
$campo1 = $_POST["nombre_campo1"];
$campo2 = $_POST["nombre_campo2"];`
      }]}/>
      <main>
        <h1>Enviar formularios</h1>
        <Conseptos texto={`Nosotros podemos enviar los datos de un formulario a php para poder procesarlos y hacer algo con esos datos.`}/>
        <Conseptos texto={`Para empezar vamos crear una carpeta y dentro de esa carpeta crearemos 2 archivos uno llamado "index.php" y el otro llamado "action.php", los archivos podemos llamarlos como queramos pero en mi caso usare estos nombres.`}/>
        <Terminal codigo={`carpetaServidor
|
----index.php
|
----action.php`}/>
        <h2>action</h2>
        <Conseptos texto={`action es un atributo de la etiqueta form osea esta ubicada aqui.`}/>
        <Html codigo={`<form action="action.php">`}/>
        <Conseptos texto={`Con action vamos a indicar a donde queremos mandar los datos del formulario por ejemplo si estamos en "index.php" podemos indicar a action que enviaremos esos datos a "action.php", si a "form" no le pasamos el atributo "action" los datos se enviaran al mismo archivo osea que enviaremos los datos desde "index.php" hacia "index.php".`}/>
        <h2>name</h2>
        <Conseptos texto={`Este es un atributo de las etiquetas "input" que sirve para identificar que dato tiene cada campo.`}/>
        <Html codigo={`<input type="identificador">`}/>
        <h2>method</h2>
        <Conseptos texto={`Con method vamos a indicar con que metodo vamos a enviar los datos del formulario, tenemos varios metodos como GET o POST, method es un atributo de form.`}/>
        <Php codigo={`<form action="action.php" method="POST">`}/>
        <h2>$_POST y $_GET</h2>
        <Conseptos texto={`Con estas funciones vamos a acceder a cada uno de los campos de un formulario, se usara uno u otro segun el metodo con el que se manden los datos del formulario. `}/>
        <Php codigo={`<input name="nombre_del_campo"/>
$_POST["nombre_del_campo"];
$_GET["nombre_del_campo"];`}/>
        <h2>Enviar datos</h2>
        <Conseptos texto={`Ahora haremos un pequeño programa que verifique si el año de nacimiento que pone el usuario coinside con su edad o no, para esto sera necesario enviar los datos del formulario al servidor para procesar y dar una respuesta para saber si coinside o no.`}/>
        <h3>index.php</h3>
        <Php codigo={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>prueba servidor</title>
</head>
<body>
    <form action="action.php" method="POST">
        <input type="text" name="nombre" placeholder="nombre">
        <input type="number" name="edad" placeholder="edad">
        <input type="text" name="year" placeholder="año de nacimiento">
        <button type="submit">verificar</button>
    </form>
</body>
</html>`}/>
        <div className="website">
          <form>
            <input onChange={(e)=>setNombre(e.target.value)} type="text" placeholder="nombre"/>
            <input onChange={(e)=>setEdad(e.target.value)} type="text" placeholder="edad"/>
            <input onChange={(e)=>setYear(e.target.value)} type="text" placeholder="año de nacimiento"/>
            <button type="submit" onClick={verificar}>verificar</button>
            {
              showMsg && <p>Datos enviados por favor revisa mas abajo donde esta el servidor</p>
            }
          </form>
        </div>
        <h3>action.php</h3>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
$actualYear = (int) date("Y");

$nombre = $_POST["nombre"];
$edad = (int) $_POST["edad"];
$year = $_POST["year"];

$validarData = $actualYear - $edad;

if ($validarData == $year) {
    echo "$nombre tu edad si coinside con el año que naciste.";
} else {
    echo "$nombre Tu edad no coinside con el año que naciste porfavor verifica los datos.";
}`}/>
        <div className="website">
          <p>{texto}</p>
        </div>
        <Conseptos texto={`Nosotros al presionar el boton de "verificar" nos redireccionara al archivo que indicamos en el atributo "action" del formulario y el archivo "action.php" recibira todos los datos del formulario para procesarlos.`}/>
        <h2>Diferencias entre GET y POST</h2>
        <Conseptos texto={`Una diferencia clara es que POST es mas seguro que GET debido a que GET muestra los datos enviados en la misma URL por ejemplo.`}/>
        <Terminal codigo={`http://localhost/carpetaServidor/action.php?nombre=${nombre || "userName"}&edad=${edad || "userAge"}`}/>
        <Conseptos texto={`Como nos damos cuenta con el metodo GET los datos se reflejan en la URL cosa que el metodo GET no hace por eso es que POST es mas seguro que GET, pero GET es ampliamente usado en el tema de las apis pero eso ya es otro tema.`}/>
      </main>
      <Footer />
    </>
  )
}

export default SendFormPhp;