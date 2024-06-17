import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img2 from "./imgs/img2.png";
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";
import img6 from "./imgs/img6.png";
import img7 from "./imgs/img7.png";


function ClavesMySql() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Las claves primarias son unicas, nunca se repiten.
Las claves foraneas si se pueden repetir porque hacen referencia a una clave primaria.`
      }]}/>
      <main>
        <h1>Claves primareas y foraneas</h1>
        <Conseptos texto={`Las claves primarias nunca se pueden repetir osea son los identificadores que se autoincrementan.`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"id"}/>
        <Conseptos texto={`"PK" significa clave primaria/primary key y "AI" significa auto increment/incremento automatico.

Las claves foraneas son id que hacen referencia a una clave primaria esto para poder relacionar una tabla con otra por ejemplo en una universidad.

Para nuestro ejemplo crearemos 2 tablas una que sera la primaria(usuarios) y la otra que seran las asistencias.`}/>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"tabla 1"}/>
        <ImagenLink tipo={"imagen"} imagen={img5} titulo={"tabla 2"}/>
        <Conseptos texto={`Ahora que ambas tablas estan creadas la tabla "asistencia" va a hacer referencia a la tabla "usuarios".`}/>
        <h3>Usuarios</h3>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"tabla principal"}/>
        <h3>asistencia</h3>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"tabla asistencia"}/>
        <Conseptos texto={`Al comparar la tabla 1 con la dos nos daremos cuenta que la tabla 2 tiene un regustro llamado "idAlumno", en este se se marca el id del alumno numero 2 y el alumno numero 4 de la tabla principal, esta tabla guarda la asistencia del alumno con el id "2" y "4", que maestro tuvo, a que hora asistio,que curso tomo, en simples palabras la tabla 2"asistencia" esta haciendo referencial a la tabla principal"usuarios" a travez del registro "idAlumno".
        +`}/>
      </main>
      <Footer />
    </>
  );
}

export default ClavesMySql;