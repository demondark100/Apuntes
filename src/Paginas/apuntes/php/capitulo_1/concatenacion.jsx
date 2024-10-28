import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"


function ConcatenacionPhp(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Aqui se concatena con punto(".").`,
        "lenguage": "Php",
        "codigo": `<?php
$nombre = "Lumine";
$poder = "viento";
$unir = $nombre.$poder;
$descripcion = "El personaje es: $nombre, el poder de $nombre es: $poder";
echo $unir;
echo $descripcion;`
      }]}/>
      <main>
        <h1>Concatenacion</h1>
        <Conseptos texto={`Con la concatenacion vamos a unir una o mas strings, tambien podemos interpolar variables en una cadena de texto.`}/>
        <Conseptos texto={`Para concatenar aqui se usa un punto("."), si usamos esto estaremos concatenando strings.`}/>
        <Php codigo={`<?php
echo "hola"." mundo"." con concateniacion";`}/>
        <div className="website">
          <p>hola mundo con concateniacion</p>
        </div>
        <h2>Uniendo variables</h2>
        <Conseptos texto={`Tambien podemos unir dos o mas variables.`}/>
        <Php codigo={`<?php
$variable1 = "Valor 1 ";
$variable2 = "valor 2";
$resultado = $variable1 . $variable2;
echo $resultado;`}/>
        <div className="website">
          <p>Valor 1 valor 2</p>
        </div>
        <h2>Interpolando variables</h2>
        <Conseptos texto={`Ahora en una cadena de texto vamos a poner 1 o varias variables para formar un texto que tenga sentido.`}/>
        <Php codigo={`<?php
$nombre = "Lumine";
$poder = "viento";
$descripcion = "El personaje es: $nombre, el poder de $nombre es: $poder";
echo $descripcion;`}/>
        <div className="website">
          <p>El personaje es: Lumine, el poder de Lumine es: viento</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ConcatenacionPhp;