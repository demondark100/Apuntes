import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Conseptos from "../../../../../componentes/conseptos/conseptos";

function IntroduccionCss() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>introduccion a css</h1>
        <Conseptos texto={`css es una tecnologia / lenguaje que nos sirve para dar estilos a las cagitas que creamos con html.

ahora veremos como es la estructura de css para poder entender mejor a este lenguaje y poder usarlo con facilidad.`}/>

        <h2>pseudocodigo</h2>

        <Conseptos texto={`esta es la sintaxis del lenguaje siempre debes poner 
"{}"
":" y 
";" 
de lo contrario el lenguaje no reconocera lo que escribimos.`}/>

        <h3>correcto</h3>
        <Css codigo={`elemento html / selector {
  propiedad: valor del estilo;
  propiedad: valor del estilo;
  propiedad: valor del estilo;
}`}/>

        <Conseptos texto={`para crear un archivo css simepre debemos terminar con ".css"; de esta manera estamos indicando que crearemos un archivo css.

ejemplo:

crear archivo css
archivo.css`}/>

        <h2>enlazar html y css</h2>
        <h3>html</h3>
        <Conseptos texto={`la etiqueta "link" es para poder enlazar nuestros estilos css este lleva como atributo:
1: "rel" que es para indicarle que daremos estilo css.
2: "href" para indicarle la ruta de nuestro archivo css recuerdan los enlaces de los protocolos local y https donde si teniamos el archivo en una capeta teniamos que poner "/" bueno para enlazar css es igual.`} />
        <Html codigo={`<!-- poner en el head de nuestro html -->
<link rel="stylesheet" href="archivo.css">`}/>

        <h2>crear archivo</h2>
        <Conseptos texto={`Aqui vamos a crear un html y lo enlazaremos.
  1: crear una carpeta llamada "primer proyecto css".
  2: crear un archivo llamado "estilos.html".
  3: crear un archivo llamado "style.css".`}/>

        <h2>html</h2>
        <Html codigo={`<head>
  <link rel="stylesheet" href="style.css">
</head>`}/>
        <h3>css</h3>
        <Css codigo={`body{
  background-color: #000;
}
/* aqui simplemente estamos dando 
un fondo al body por ahora no prestes
 atencion a este codigo. */`}/>

        <Conseptos texto={`y listo ya podemos trabajar con html y css cabe aclarar que a los archivos tanto html y css les puedes poner cualquier nombre mientras terminen en ".html" y ".css" no habra ningun problema.`} />

      </main>
      <Footer />
    </>
  );
}

export default IntroduccionCss;