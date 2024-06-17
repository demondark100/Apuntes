import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img14 from "./imgs/img14.png"

function TablaCodeMySql(){
  return(
    <>
      <Resumenes contenido={[{
        mensaje: `Tambien se puede crear tablas sin la necesidad de la interfaz, esto solo usando codigo SQL.`,
        lenguage: `MySql`,
        codigo: `CREATE TABLE "nombre_tabla" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,   -- id autoincrementable
  "nombres" TEXT, 
  "apellidos" TEXT,
  "edad" INTEGER
)`
      }]}/>
      <main>
        <h1>Tabla con codigo</h1>
        <Conseptos texto={`Tambien podemos crear nuestras tablas con codigo sin necesidad de usar la interfaz grafica.
En este caso vamos a crear esta misma talba pero con codigo:`}/>
        <ImagenLink tipo={"imagen"} imagen={img14} titulo={"base de datos"}/>
        <Sintaxis codigo={`CREAR TABLA "nombre de la tabla" (
  "nombre del identificador" NUMERICO CLAVE PRIMARIA AUTOINCREMENTAR,
  "nombre columna 1" TEXTO,
  "nombre columna 2" TEXTO,
  "nombre columna 3" NUMERICO
)`}/>
        <Conseptos texto={`Ahora como ejercicio vamos a crear nuestra misma tabla con los valores "nombres","apellidos","edad":`}/>
        <MySql codigo={`CREATE TABLE "estudiantes" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
  "nombres" TEXT,
  "apellidos" TEXT,
  "edad" INTEGER
)`}/>
      </main>
    </>
  )
}

export default TablaCodeMySql; 