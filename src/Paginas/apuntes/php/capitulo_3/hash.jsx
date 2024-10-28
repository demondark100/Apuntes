import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


function HashearPswPhp() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a encriptar contraseñas para guardarlas de forma segura.`,
        "lenguage": "Php",
        "codigo": `<?php
$paswword = "Encriptando contraseña.";
$hashMd5 = hash("md5",$paswword); // encriptar contraseña con md5
foreach (hash_algos() as $tipo) { // mostrar todos los algoritmos de encriptacion
    echo $tipo . ", ";
}
$hashPaswword = password_hash($password,PASSWORD_DEFAULT); // (recomendado) encriptar contraseñas de forma mas segura.
var_dump(password_verify($password,$hashPaswword)); // verificar si una contraseña esta hasheada.`
      }]}/>
      <main>
        <h1>Encriptar contraseña</h1>
        <Conseptos texto={`Con esto vamos a manejar contraseñas para que sean seguras con una funcion que internamente se encarga de procesar una string osea una posible contraseña y encriptara esa contraseña para que sea segura.`}/>
        <h2>hash</h2>
        <Conseptos texto={`Con esta funcion vamos a encriptar una cadena de texto, la longitud de la encriptacion tendra la misma cantidad por mas que la contraseña sea demasiado larga por ejemplo la encriptacion tiene 32 caracteres y por mas que la string que le pasemos tenga 50 o 100 caracteres la longitud de la encriptacion seguira siendo de 32.`}/>
        <Conseptos texto={`Hay varios algoritmos para encriptar una contraseña pero en este ejemplo usaremos la encriptacion "md5".`}/>
        <Sintaxis codigo={`hash("algoritmo que usaremos",$contraseña);`}/>
        <Php codigo={`<?php
$password = "hola";
$hasheo = hash("md5",$password);

echo $hasheo;`}/>
        <div className="website">
          <p>4d186321c1a7f0f354b297e8914ab240</p>
        </div>
        <h2>hash_algos</h2>
        <Conseptos texto={`Con esta funcion vamos a ver todos los algoritmos que podemos usar para encriptar contraseñas, esta funcion nos devolvera un arreglo asi que vamos a recorrer ese arreglo que retorna para ver todos los algoritmos que hay para encriptar contraseñas.`}/>
        <Php codigo={`<?php 

foreach (hash_algos() as $tipo) {
    echo $tipo . ", ";
}`}/>
        <div className="website">
          <p>md2, md4, md5, sha1, sha224, sha256, sha384, sha512/224, sha512/256, sha512, sha3-224, sha3-256, sha3-384, sha3-512, ripemd128, ripemd160, ripemd256, ripemd320, whirlpool, tiger128,3, tiger160,3, tiger192,3, tiger128,4, tiger160,4, tiger192,4, snefru, snefru256, gost, gost-crypto, adler32, crc32, crc32b, crc32c, fnv132, fnv1a32, fnv164, fnv1a64, joaat, murmur3a, murmur3c, murmur3f, xxh32, xxh64, xxh3, xxh128, haval128,3, haval160,3, haval192,3, haval224,3, haval256,3, haval128,4, haval160,4, haval192,4, haval224,4, haval256,4, haval128,5, haval160,5, haval192,5, haval224,5, haval256,5,</p>
        </div>
        <h2>password_hash</h2>
        <Conseptos texto={`La funcion "bash" es bastante buena para encriptar contraseñas y tiene varios algoritmos para encriptar contraseñas pero hay un defecto lo cual no hace recomendable su uso y esque siempre encripta las contraseñas de forma fija cosa que "password_hash" no hace ya que encripta la contraseña de distintas formas.`}/>
        <Sintaxis codigo={`password_hash($contraseña,TIPO_DE_ALGORITMO);`}/>
        <Php codigo={`<?php 

$password = "hola";

echo password_hash($password,PASSWORD_DEFAULT);`}/>
        <div className="website">
          <p>$2y$10$XyA7fVe3/1uLAylCMaYVU.dCUS2vkB.dnaG1YH2DmTqBRb7gBZa76</p>
        </div>
        <h2>password_verify</h2>
        <Conseptos texto={`Con esta funcion vamos a verificar si una contraseña a sido hasheada correctamente, el valor del hash siempre sera el mismo que el de la contraseña riginal.`}/>
        <Sintaxis codigo={`password_verify($contraseña,$contraseña_hasheada);`}/>
        <Php codigo={`<?php 

$password = "hola";
$hashear = password_hash($password,PASSWORD_DEFAULT);

var_dump(password_verify($password,$hashear));`}/>
        <div className="website">
          <p>{`bool(true)`}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HashearPswPhp;