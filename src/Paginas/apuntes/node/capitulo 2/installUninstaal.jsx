import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Json from "../../../../componentes/lenguajes/Json";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";


import imagenCarpetas from "./imagenes/installNpmArchivos.png";

function InstallUninstallNode() {
  return (  
    <>
      <main>
        <h1>instalar y desinstalar paquetes con node.js</h1>
        <Conseptos texto={`Nosotros al desarrollar una aplicacion normalmente usaremos muchos paquetes que nos facilitaran mucho las cosas en este ejemplo trabajaremos con express que nos ayuda a trabajar con servidores.`}/>
        <h2>Dependencias</h2>
        <Conseptos texto={`Muchos paquetes tienen dependencias de otros paquetes y asi sucesivamente por ejemplo si tu instalas un paquete en tu proyecto , tu proyecto se volvera dependiente de ese paquete ya que estas trabajando con ese paquete.`}/>
        <h2>instalar paquetes</h2>
        <Sintaxis codigo={`> npm install nombre_del_paquete`}/>
        <Consola codigo={`> npm install express`}/>
        <Conseptos texto={`Tambien podemos instalar una version en especifico de algun paquete , esto es util al momento de trabajar con proyectos que usaron algun paquete en una version anterior a la actual , si no especificamos una version del paquete el paquete se instalara de forma automatica en la version mas actual.`}/>
        <Sintaxis codigo={`> npm install nombre_del_paquete@version`}/>
        <Consola codigo={`> npm install express@1.15.1`}/>
        <Conseptos texto={`Cuando usemos uno de los dos comandos de npm por primera vez se creara una carpeta llamada node_modules y un archivo llamado package-lock.json.`}/>
        <ImagenLink tipo={"imagen"} imagen={imagenCarpetas} titulo={"carpetas node"}/>
        <Conseptos texto={`Cuando vayamos a package.json notaremos que se creo un nuevo valor llamado "dependencies" dentro de ese valor podremos ver todos los paquetes/dependencias que se instalaron en nuestro proyecto.`}/>
        <Json codigo={`{
  "name": "paquetes",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}`}/>
        <h2>desinstalar paquetes</h2>
        <Sintaxis codigo={`> npm uninstall nombre_del_paquete`}/>
        <Consola codigo={`> npm uninstall express`}/>
      </main>
      <Footer />
    </>
  );
}

export default InstallUninstallNode;