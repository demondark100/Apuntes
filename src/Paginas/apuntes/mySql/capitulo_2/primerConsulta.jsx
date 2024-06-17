import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Videos from "../../../../componentes/videos/video";
import MySql from "../../../../componentes/lenguajes/MySql";
import Txt from "../../../../componentes/lenguajes/Txt";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img14 from "./imgs/img14.png";
import img15 from "./imgs/img15.mp4";
import img16 from "./imgs/img16.png";

export default function PrimerConsultaMySql(){
  return(
    <>
      <Resumenes contenido={[{
        mensaje: `Para hacer consultas en una base de datos se usa la clausula "SELECT".`,
        lenguage: "MySql",
        codigo: `SELECT columna1 FROM tabla;   -- seleccionar una columna de una tabla.
SELECT * from tabla;    -- seleccionar todo de una tabla.
SELECT columna1,columna2 FROM tabla;  -- seleccionar dos columnas o mas de una tabla.`
      }]}/>
      <main>
        <h1>primer consulta</h1>
        <Conseptos texto={`Ahora vamos a hacer nuestra primer consulta a nuestra base de datos.

Primero debemos de hacer click "Execute SQL".`}/>
        <ImagenLink tipo={"imagen"} imagen={img14} titulo={"execute"}/>
        <h2>SELECT</h2>
        <Conseptos texto={`Con esta sentencia haremos una consulta a la base de datos.`}/>
        <Videos tipo={"gif"} video={img15}/>
        <Conseptos texto={`Ahora explicare como funciona.`}/>
        <MySql codigo={`SELECT * FROM usuarios
/* SELECT: sentencia seleccion. */
/* *: Seeleccionar toda la tabla. */
/* FROM: Sentencia para saber de que tabla seleccionaremos. */
/* usuarios: De que tabla sacaremos los datos. */`}/>
        <Conseptos texto={`Cuando seleccionemos toda nuestra tabla podremos ejecutar nuestro codigo SQL de la siguiente forma.`}/>
        <ImagenLink tipo={"imagen"} imagen={img16} titulo={"Ejecutar codigo"}/>
        <Conseptos texto={`Ahora al ejecutar nuestro codigo SQL nos mostrara esto.`}/>
        <Txt codigo={`Execution finished without errors.
Result: 0 rows returned in 549ms
At line 1:
SELECT * FROM usuarios`}/>
        <Conseptos texto={`Esto nos esta indicando que se hizo la consulta en la tabla "usuarios" pero no ha encontrado filas y columnas, esto debido a que no hay datos insertados, pero ahora aprenderemos a insertar datos a una tabla.`}/>
      </main>
      <Footer />
    </>
  )
}