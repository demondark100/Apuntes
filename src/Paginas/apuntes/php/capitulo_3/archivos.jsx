import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";



// react
import { useState } from "react";
import Html from "../../../../componentes/lenguajes/Html";

// imagenes
import img6 from "../imgs/img6.png";
import img7 from "../imgs/img7.png";
import LinkPersonalizado from "../../../../componentes/links/link";



function ArchivosPhp(){
  const [archivo, setArchivo] = useState("");
  const [fileInfo, setFileInfo] = useState({
    name: "",
    tmp_name: "",
    type: "",
    error: "",
    size: 0,
  });
  const [hayArchivo, setHayArchivo] = useState(false);
  function enviarArchivo(e){
    e.preventDefault();
    if (archivo) {
      const tmpName = `tmp_${Date.now()}_${archivo.name}`;

      setFileInfo({
        name: archivo.name,
        tmp_name: tmpName, // No hay tmp_name en JS, pero puedes simularlo
        type: archivo.type,
        error: archivo.error || 0, // No existe error en JS, pero puedes gestionarlo según tus reglas
        size: archivo.size,
      });
      setHayArchivo(true);
    }
  }

  return (
    <>
      <Resumenes contenido={[{
        "mensaje":  `Ahora vamo a manipular archivos desde el lado del servidor.`,
        "lenguage": "Php",
        "codigo": `<form enctype="multipart/form-data" method="POST">
</form>`
      },{
        "lenguage": "Php",
        "codigo": `<?php
echo $_FILES["archivo"]["name"];  // nombre del archivo
echo $_FILES["archivo"]["tmp_name"];  // nombre temporal(ruta)
echo $_FILES["archivo"]["type"];  // formato de archivo
echo $_FILES["archivo"]["error"];  // ver si hay error
echo $_FILES["archivo"]["size"];  // peso de archivo

file_exists("carpeta");  // verificar si una carpeta existe
mkdir("carpeta");  // crear una carpeta
chmod("carpeta",0777);  // dar todos los permisos posibles a un archivo
move_uploaded_file($_FILES["archivo"]["tmp_name"],"carpeta/".$_FILES["archivo"]["name"]); // mover un archivo dentro de una carpeta
mime_content_type($_FILES["archivo"]["tmp_name"]);  // ver formato de un archivo
// pagina para formatos de archivos 
// https://www.lifewire.com/file-extensions-and-mime-types-3469109
exit();  // finalizar ejecucion de script`}]}/>
      <main>
        <h1>Archivos</h1>
        <Conseptos texto={`Ahora vamos a enviar archivos a un servidor con php.
Primero vamos a crear un archivo que hara como el lado del cliente para enviar un archivo al servidor y asi poder procesarlo en el servidor.`}/>
        <Terminal codigo={`archivo
|
|_____front.php
|
|_____servidor.php`}/>
        <h2>cliente.php</h2>
        <Conseptos texto={`Antes de aanzar debemos uar el atributo "enctype" con la propiedad "multipart/form-data" para poder enviar archivos al servidor de forma correcta.`}/>
        <Html codigo={`<form enctype="multipart/form-data">`}/>
        <Conseptos texto={`Para enviar archivos al servidor solo se puede usar el metodo "POST".`}/>
        <Html codigo={`<form method="POST">`}/>
        <Php codigo={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=fo, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="servidor.php" method="POST" enctype="multipart/form-data">
        <input type="file" name="archivo">
        <button>Enviar</button>
    </form>
</body>
</html>`}/>
        <div className="website">
          <form>
            <input
              type="file" 
              onChange={(e)=>setArchivo(e.target.files[0])}
            />
            <button onClick={enviarArchivo}>Enviar</button>
          </form>
        </div>
        <h2>servidor.php</h2>
        <Php codigo={`<?php
$archivo = $_POST["archivo"];

echo $archivo;`}/>
        <div className="website">
          <p>
            {hayArchivo ? fileInfo.name:"Selecciona un archivo para ver resultados"}
          </p>
        </div>
        <h2>$_FILES</h2>
        <Conseptos texto={`Aunque podemos mostrar el nombre del archivo con solo $_POST y echo no es la forma correcta de trabajar con archivos, la forma correcta es usar la variable reservada "$_FILES" con esto accederemos al archivo y tambien a su informacion.`}/>
        <Sintaxis codigo={`$_FILES["nombre_del_archivo"]["informacion_del_archivo"];`}/>
        <Conseptos texto={`Hay varios parametros para acceder a la informacion de los archivos aqui te muestro algunos.`}/>
        <ol>
          <li>name: Obtener nombre del archivo</li>
          <li>tmp_name: Obtener una ruta temporal</li>
          <li>type: Obtener el tipo de archivo que es</li>
          <li>error: Saber si existe algun error al obtener archivo</li>
          <li>size: Obtener tamaño de archivo</li>
        </ol>
        <Php codigo={`<?php
echo $_FILES["archivo"]["name"] . "<br>";
echo $_FILES["archivo"]["tmp_name"] . "<br>";
echo $_FILES["archivo"]["type"] . "<br>";
echo $_FILES["archivo"]["error"] . "<br>";
echo $_FILES["archivo"]["size"];`}/>
        <div className="website">
          {
            hayArchivo ? <p>
              {fileInfo.name} <br />
              {fileInfo.tmp_name} <br />
              {fileInfo.type} <br />
              {fileInfo.error || 0} <br />
              {fileInfo.size}
            </p>: "Selecciona un archivo para ver resultados"
          }
        </div>
        <h2>file_exists</h2>
        <Conseptos texto={`Con esta funcion vamos a verificar su una carpeta existe o no.`}/>
        <Sintaxis codigo={`file_exists("nombre_de_carpet");`}/>
        <Php codigo={`<?php
if (file_exists("prueba")) {
    echo "la carpeta existe";
} else {
    echo "la carpeta no existe";
}`}/>
        <div className="website">
          <p>la carpeta no existe</p>
        </div>
        <h2>mkdir</h2>
        <Conseptos texto={`Con esta funcion vamos a crear una carpeta nueva, esto lo podemos mesclar con la funcion file_exists para verificar si una carpeta existe o no para crear una carpeta.`}/>
        <Sintaxis codigo={`mkdir("nombre_de_carpeta_para_crear");`}/>
        <Php codigo={`<?php
mkdir("prueba");`}/>
        <Conseptos texto={`Esta funcion tambien retornara verdadero o falso segun si pudo o no crear una carpeta.`}/>
        <Php codigo={`if (mkdir("prueba")) echo "Archivo creado con exito"; 
else echo "No se ha creado el archivo";`}/>
        <div className="website">
          <p>Archivo creado con exito</p>
        </div>
        <h2>exit</h2>
        <Conseptos texto={`Con esta funcion vamos a detender el script de php entero, esto es util para evitar que se ejecute el resto de codigo en caso de que pase algo inesperado o si simplemente deseamos detener todo el script.`}/>
        <Php codigo={`<?php
if (!file_exists("prueba")) {
    if (!mkdir("prueba")) {
        echo "No se ha podido crear la carpeta";
        exit();
    }
} 

echo "Resto del script";`}/>
        <Conseptos texto={`En este caso si la carpeta no existe y mkdir no ha podido crear la carpeta entonces dara un mensaje de error y detendra la ejecucion del script por completo para evitar que se siga ejecutando de forma imnecesaria.`}/>
        <h2>chmod</h2>
        <Conseptos texto={`Con esta funcion vamos a darle permisos de lectura y escritura a una carpeta.`}/>
        <Sintaxis codigo={`chmod("nombre_de_carpeta",permiso)`}/>
        <Php codigo={`<?php
if (!file_exists("prueba")) {
    if (!mkdir("prueba")) {
        echo "No se ha podido crear la carpeta";
        exit();
    }
} 

chmod("prueba",0777);`}/>
        <Conseptos texto={`Con "0777" le estamos otorgando todos los permisos posibles a una carpeta.`}/>
        <h2>move_uploaded_file</h2>
        <Conseptos texto={`Con esta funcion vamos a mover un archivo de un lugar a otro, esta funcion recibe 2 parametros:`}/>
        <ol>
          <li>ruta temporal del archivo.</li>
          <li>nombre de la carpeta y el nombre del archivo.</li>
        </ol>
        <Sintaxis codigo={`move_uploaded_file("ruta temporal del archivo","carpeta/nombre del archiv")`}/>
        <Conseptos texto={`Antes de continuar actualmente nuestro proyecto esta estructurado de esta manera.`}/>
        <Terminal codigo={`archivo
|
|_____prueba
|
|_____front.php
|
|_____servidor.php`}/>
        <Conseptos texto={`Entonces vamos a mover el archivo que el usuario suba en el front a una carpeta.`}/>
        <Php codigo={`move_uploaded_file($_FILES["archivo"]["tmp_name"],"prueba/".$_FILES["archivo"]["name"]);`}/>
        <Conseptos texto={`Primero le pasamos la ruta temporal del archivo y luego le pasamos el nombre del archivo con las funciones que nos otorga $_Files.`}/>
        <Conseptos texto={`Ahora nuestro proyecto se deberia ver asi.`}/>
        <Terminal codigo={`archivo
|
|_____prueba
|
|________${fileInfo.name || "Selecciona_un_archivo.txt"}
|
|_____front.php
|
|_____servidor.php`}/>
        <Conseptos texto={`Esta funcion a parte de mover un archivo a una carpeta especificada tambien devolvera true si pudo mover correctamente el archivo y false si no pudo mover de forma correcta el archivo`}/>
        <Php codigo={`if(move_uploaded_file($_FILES["archivo"]["tmp_name"],"prueba/".$_FILES["archivo"]["name"])){
    echo "Archivo movido con exito.";
} else {
    echo "No se ha podido mover el archivo";
}`}/>
        <div className="website">
          <p>Archivo movido con exito.</p>
        </div>
        <h2>mime_content_type</h2>
        <Conseptos texto={`Con esta funcion vamos a aceptar solo un tipo de archivo osea si queremos que solo se pueda subir imagenes entonces indicaremos que solo queremos ".png" o ".jpg".`}/>
        <Conseptos texto={`Esto tambien se puede hacer desde el lado del cliente con el atributo "accept" pero el usuario podria saltarse eso con inspeccionar y sacar ese atributo, con "mime_content_type" evitaremos que pueda subir cualquier cosa al servidor.`}/>
        <Sintaxis codigo={`mime_content_type("ruta temporar archivo");`}/>
        <Conseptos texto={`Antes de abanzar en esta pagina encontraremos todos los formatos que permite usar "mime_content_type", alli debemos buscar que formato queremos:`}/>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"tipo"}/>
        <Conseptos texto={`En "File Extension" encontraremos el formato, esta columna es util para encontrar mas rapido el formato que deseamos usar, luego debemos fijarnos en "MIME Type" que sera la columna de donde sacaremos el parametro para el uso de la funcion, en este caso solo aceptaremos imagenes ".jpg" entonces nos fijamos aqui.`}/>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"mime type"}/>
        <Conseptos texto={`Luego podemos copiar lo que hay en "MIME Type".`}/>
        <Php codigo={`<?php

echo mime_content_type($_FILES["archivo"]["tmp_name"]);`}/>
        <div className="website">
          <p>{fileInfo.type || "application/formato"}</p>
        </div>
        <Conseptos texto={`Como nos damos cuenta la funcion nos devuelve el tipo de archivo que es.
Con esto podemos validar si el archivo que el usuario subio coinside con el archivo que necesitamos.`}/>
        <Php codigo={`<?php

if(mime_content_type($_FILES["archivo"]["tmp_name"]) != "image/jpeg"){
    echo "Esta no es una imagen .jpg, porfavor sube una imagen .jpg";
    exit();
}`}/>
        <div className="website">
          <p>Esta no es una imagen .jpg, porfavor sube una imagen .jpg</p>
        </div>
        <Conseptos texto={`Aqui esta el link de la pagina donde podremos sacar el formato para cada tipo de archivo que queramos procesar.`}/>
        
        <LinkPersonalizado link={"https://www.lifewire.com/file-extensions-and-mime-types-3469109"} texto={`Formatos aqui`}/>
      </main>
      <Footer />
    </>
  )
}

export default ArchivosPhp;