import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";

function EstructuraHtml() {
  return (  
    <>
      <main>
        <h1>Estructura de html</h1>
        <Conseptos texto={`Html tiene una estructura basica aqui las explicaremos de forma detallada para que es cada cosa no te asustes :v.`}/>

        <Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
  </head>
  <body>
    Contenido de la página
  </body>
</html>`.trim()}/>

        <Conseptos texto={`Empezamos con "<!DOCTYPE html>" esto se encarga de indicarle al navegador que esto esta escrito en HTML.`}
        />
        <Html codigo={`<!DOCTYPE html>`.trim()} />

        <Conseptos texto={`<html></html> es la etiqueta raiz en las cuales tiene dos etiquetas muy importantes <head> <body> `}/>
        <Html codigo={`<html>
  <head>

  </head>
  <body>

  </body>
</html>`.trim()} />

        <Conseptos texto={`La etiqueta <head> contiene información sobre el documento, como el título y la descripción del mismo.`} />
        <Html codigo={`<html>
  <head>
    <title>titulo de la pagina<title>
  </head>
  <body>

  </body>
</html>`}/>

        <Conseptos texto={`la etiqueta <body> contiene el contenido visible en la página web, como el texto, las imágenes y los enlaces.`}/>
        <Html codigo={`<html>
  <head>
    <title>titulo de la pagina<title>
  </head>
  <body>
    contenido de este sitio web como imagenes , videos , enlaces , juegos , etc.
  </body>
</html>`}/>

        <Conseptos texto={`probablemente digas mucho texto pero los editores de codigo te brindan atajos para que la estructura se cree de forma rapida.
  1: En visual studio code escribe "!" y presiona TAB. 
  2: En sublime text escribe "html" y preciona TAB.`} />

      </main>
      <Footer />
    </>
  );
}

export default EstructuraHtml;