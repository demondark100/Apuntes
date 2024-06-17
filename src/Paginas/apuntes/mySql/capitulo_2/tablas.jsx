import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes//conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import MySql from "../../../../componentes/lenguajes/MySql";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img6 from "./imgs/img6.png";
import img7 from "./imgs/img7.png";
import img8 from "./imgs/img8.png";
import img9 from "./imgs/img9.png";
import img10 from "./imgs/img10.png";
import img11 from "./imgs/img11.png";
import img12 from "./imgs/img12.png";
import img13 from "./imgs/img13.png";
import img14 from "./imgs/img14.png";


export default function TablasMySql(){
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Las tablas tienen distintas operaciones:
1. Crear
2. Leer
3. Actualizar
4. Eliminar`
      },
      {
        mensaje: `Las tablas al momento de crearse pueden guardar todo tipo de datos.
1. Numericos(INTEGER)
2. texto(TEXT)
3. imagenes, videos, otros(BLOB)
4. decimales(REAL)
5. matematicas precisas(NUMERIC)`
      }]}/>
      <main>
        <h1>tablas</h1>
        <Conseptos texto={`Anteriormente aprendimos a agregar una tabla.`}/>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"agregar tabla"}/>
        <Conseptos texto={`Las tablas tienen filas y columnas.`}/>
        <ImagenLink tipo={"imagen"} imagen={"https://www.wextensible.com/temas/xlsx/ejemplos/wxtable-3columns.png"} titulo={"tabla"}/>
        <Conseptos texto={"Las tablas facilitan mucho obtener informacion para hacer cualquier tipo de consuta por ejemplo:"}/>
        <ol>
          <li>crear</li>
          <li>Leer</li>
          <li>editar</li>
          <li>eliminar</li>
        </ol>
        <h2>Table</h2>
        <Conseptos texto={`Con esto nombraremos a nuestra tabla.`}/>
        <ImagenLink tipo={"imagen"} imagen={img12} titulo={"Titulo"}/>
        <h2>Crear tabla</h2>
        <Conseptos texto={`Anteriormete vimos como crear una tabla, esto se hacia con "add" una vez creada veremos como se estructura cada cosa.`}/>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"crear"}/>
        <h2>Name</h2>
        <Conseptos texto={`En "Name" tenemos que nombrar a nuestro valor.`}/>
        <ImagenLink tipo={"imagen"} imagen={img8} titulo={"Nombre"}/>
        <h2>Type</h2>
        <Conseptos texto={`Luego debemos de elegir que tipo de dato guardara.`}/>
        <ImagenLink tipo={"imagen"} imagen={img9} titulo={"type"}/>
        <ol>
          <li>INTEGER: Numeros enteros</li>
          <li>TEXT: Textos/strings</li>
          <li>BLOB: Imagenes , videos , etc</li>
          <li>REAL: guardar decimales</li>
          <li>NUMERIC: Matematicas precisa</li>
        </ol>
        <Conseptos texto={`Ahora nos daremos cuenta que el codigo mySql se esta escribiendo a medida que creamos nuestra base de datos.`}/>
        <ImagenLink tipo={"imagen"} imagen={img10} titulo={"codigo"}/>
        <MySql codigo={`CREATE TABLE "usuarios" (
  "usuarios" TEXT
);`}/>
        <h2>default</h2>
        <Conseptos texto={`Con esto pondremos datos por defecto en caso de que el usuario no proporcione ningun tipo de dato.`}/>
        <ImagenLink tipo={"imagen"} imagen={img11} titulo={"defecto"}/>
        <h2>Tabla completa</h2>
        <Conseptos texto={`Ahora crearemos una tabla llamada "usuarios", esta tendra 3 campos "nombres","apellidos" y "edad", luego guardaremos nuestra tabla haciendo click en Ok.`}/>
        <ImagenLink tipo={"imagen"} imagen={img13} titulo={"tabla"}/>
      </main>
      <Footer />
    </>
  )
}