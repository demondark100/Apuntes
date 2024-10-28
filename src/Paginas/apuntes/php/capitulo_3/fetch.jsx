import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Php from "../../../../componentes/lenguajes/Php"


import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";


// react
import { useState } from "react";

function FetchPhp() {
  const [texto, setTexto] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);

  function enviar(e){
    e.preventDefault();
    if (edad >= 18) {
      setTexto(`${nombre} ya eres mayor de edad`)
    } else {
      setTexto(`${nombre} aun eres menor de edad`)
    }
  }
    return (  
      <>
        <MensajeModal texto={`Para entender esto es recomendable saber el lenguaje javaScript para continuar sin dificultades.`}/>
        <main>
          <h1>fetch</h1>
          <Conseptos texto={`fetch es una api de javaScript la cual sirve para enviar datos y recibir la respuesta del servidor, ahora usaremos esta api para poder enviar datos a php y mostrar el resultado que nos da el servidor en el lado del cliente.`}/>
          <Conseptos texto={`Para no explicar un lenguaje a parte de php en esta parte es recomendable ir en "javaScript/capitulo 9/fetch" para ver fetch con mas detalle por ahora solo haremos un ejercicio simple donde mandaremos dos datos al servidor y recibiremos una respuesta para mostrarlo en el cliente.`}/>
          <h2>estructura</h2>
          <Php codigo={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=fo, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="miform" action="action.php" method="POST" enctype="multipart/form-data">
        <input type="text" name="nombre">
        <input type="text" name="edad">
        <button class="enviar">Enviar</button>
    </form>
    <div class="informacion"></div>
    <script src="front.js"></script>
</body>
</html>`}/>
          <h2>servidor</h2>
          <Php codigo={`<?php
$nombre = $_POST["nombre"];
$edad = $_POST["edad"];

if ($edad >= 18) {
    echo "$nombre ya eres mayor de edad";
} else {
    echo "$nombre aun eres menor de edad";
}`}/>
          <h2>{"javaScript(front-end)"}</h2>
          <JavaScropt codigo={`const enviar = document.querySelector(".enviar");
const miform = document.getElementById("miform");
const informacion = document.querySelector(".informacion");

enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    const data = new FormData(miform);
    fetch("action.php",{
        method: "POST",
        body: data
    })
    .then(res=>res.text())
    .then(res=>{
        informacion.textContent = res;
    })
    .catch(()=>console.log("hubo un error"))
})`}/>
          <div className="website">
          <form id="miform">
              <input onChange={(e)=>setNombre(e.target.value)} type="text" name="nombre" />
              <input onChange={(e)=>setEdad(e.target.value)} type="text" name="edad" />
              <button onClick={enviar}>Enviar</button>
            </form>
            <div>{texto || "Envia datos al servidor porfavor"}</div>
          </div>
          <Conseptos texto={`Como nos damos cuenta estamos enviando los datos desde javaScript y mostramos la respuesta que da el servidor en el lado del cliente.`}/>
        </main>
        <Footer />
      </>
    );
}

export default FetchPhp;