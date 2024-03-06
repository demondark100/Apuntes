import Footer from "../../../../../componentes/menus/Footer";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function IntroduccionCss() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Css es para estilizar nuestros elementos html y se estructuran como un objeto.`,
        lenguage: `Css`,
        codigo: `.nombre_elemento{
  propiedad: valor;
  propiedad: valor;
}`
        },
        {
          mensaje: "Para entrelazar css y html se usa <link>",
          lenguage: "Html",
          codigo: `<head>
  <link rel="stylesheet" href="style.css">
</head>`
        }]}/>
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
        <Conseptos texto={`la etiqueta "link" es para poder enlazar nuestros estilos css este lleva como atributo:`} />
        <ol>
          <li>"rel" que es para indicarle que daremos estilo css.</li>
          <li>"href" para indicarle la ruta de nuestro archivo css recuerdan los enlaces de los protocolos local y https donde si teniamos el archivo en una capeta teniamos que poner "/" bueno para enlazar css es igual.</li>
        </ol>
        <Html codigo={`<!-- poner en el head de nuestro html -->
<link rel="stylesheet" href="archivo.css">`}/>

        <h2>crear archivo</h2>
        <Conseptos texto={`Aqui vamos a crear un html y lo enlazaremos.`}/>
        <ol>
          <li>crear una carpeta llamada "primer proyecto css".</li>
          <li>crear un archivo llamado "estilos.html".</li>
          <li>crear un archivo llamado "style.css".</li>
        </ol>
        <Html codigo={`<head>
  <link rel="stylesheet" href="style.css">
</head>`}/>
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