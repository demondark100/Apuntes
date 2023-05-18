import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function EnlazarJavaScript() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>enlazar javaScript</h1>
        <Conseptos texto={`Para poder usar javaScript es necesario enlazar javaScript a html.

Para enlazar necesitamos la etiqueta script con el atributo src.`}/>
        <Html codigo={`<script src="enlace de nuestro archivo"></script>`}/>
        <Conseptos texto={`Para crear un archivo javaScript siempre debe tener la extencion ".js"`}/>
        <h2>ejemplo enlazar</h2>
        <Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>pagina con javaScript</title>
  </head>
  <body>
    <script src="codigo.js"></script>
  </body>
</html>`}/>
        <Conseptos texto={`La etiqueta script debe de ir dentro de body para evitar errores.

Para entender como enlazar bien dentro de carpetas puedes aprender eso {enlazar} en la parte de ejercicios veremos como se hacen las rutas , en la etiqueta script "src" funcionara igual que "href" para enlazar nuestro archivo javaScript.`}
enlaces={{
  enlazar: {text: "aqui",url: "../html/enlaces"}
}}/>
      </main>
      <Footer />
    </>
  );
}

export default EnlazarJavaScript;