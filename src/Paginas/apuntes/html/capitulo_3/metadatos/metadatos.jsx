import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Metadatos() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Describen recursos en nuestra web , esto solo se usa dentro de la etiqueta <head> `,
        lenguage: `Html`,
        codigo: `<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="programacion,desarrollo web,aprendizaje"> <!-- palabras clave de la web -->
  <meta name="descripcion" content="aqui aprenderas desarrollo web front-end y backend tambien otras cosas extras como linux"> <!-- descripcion de la web -->
  <meta name="autor" content="@el_tio_dan"> <!-- poner quien es el autor -->
  <meta name="copyright" content="empresa @el_tio_dan"> <!-- derechos de autor -->
  <meta name="robots content="index"> <!-- indexacion de para el motor de busqueda -->
</head>`}]}/>
      <main>
        <h1>Metadatos</h1>
        <Conseptos texto={`Los metadatos describen recursos tomemos como ejemplo un video.
        un video es informacion es un recurso puede considerarse un objeto que a su vez viene acompañado de un titulo y descripcion de etiquetas.
        posdata los meta datos se trabajan solamente en el head del sitio web.`}/>

        <h1>ejemplo</h1>
        <Conseptos texto={`los metadatos se trabajan con la etiqueta meta.`}/>
        
        <Html codigo={`<head>
  <meta charset="UTF-8">
</head>
`}/>

        <h2>tipos de meta</h2>
        <Conseptos texto={`Estos se estructuran de la siguiente manera.`} />
        <Html codigo={`<head>
  <meta nombre="nombre de meta" contenido="poner el contenido">
</head>`}/>
        <ol>
          <li>keywords es para poner palabras clave del sitio web por ejemplo si en la pagina hablamos de comida podriamos poner imgredientes como "arina" , "azucas", "sal" , etc.</li>
          <li>description es para describir el sitio web solo se permiten hasta 70 caracteres para poder poner en la descripcion.</li>
          <li>autor con esto estamos indicando quien es el autor del sitio web.</li>
          <li>copyright esto se usa en caso de que el sitio tenga derechos de una empresa aqui debemos poner el nombre de la empresa.</li>
          <li>robots esto es para indicar que pagina sera indexada osea si la pagina es el indice si esta indexada debemos poner "index" si no lo esta "noindex".</li>
        </ol>
        <Html codigo={`<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="programacion,desarrollo web,aprendizaje">
  <meta name="descripcion" content="aqui aprenderas desarrollo web front-end y backend tambien otras cosas extras como linux">
  <meta name="autor" content="@el_tio_dan">
  <meta name="copyright" content="empresa @el_tio_dan">
  <meta name="robots content="index">
</head>
`}/>

      </main>
      <Footer />
    </>
  );
}

export default Metadatos;