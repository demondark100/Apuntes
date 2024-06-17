import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import MySql from "../../../../componentes/lenguajes/MySql";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img14 from "./imgs/img14.png"
import img17 from "./imgs/img17.png"
import img18 from "./imgs/img18.png"
import img19 from "./imgs/img19.png"

function InsertMySql() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Podemos insertar datos en las tablas que seleccionemos esto usando la clausula "INSERT".`,
        lenguage: "MySql",
        codigo: `INSERT INTO tabla (columna1,columna2,columna3) VALUES
("dato1",2,8),
("dato2",8,2),
("dato3",9,4),
("dato4",1,7)`
      }]}/>
      <main>
        <h1>Insertar datos</h1>
        <ImagenLink tipo={"imagen"} imagen={img14} titulo={"Base de datos."}/>
        <Conseptos texto={`Anteriormente vimos como consultar a la base de datos para solicitarle que nos de informacion, ahora vamos a enviar a la base de datos informacion.`}/>
        <MySql codigo={`INSERT INTO usuarios (nombre,apellidos,edad)
VALUES ("Juanito","Alcachofa","23")

/*1mer linea: Indicamos la tabla y los campos de la tabla que vamos a insertar datos. */
/*2da linea:  Indicamos que datos vamos a enviar a la tabla.*/`}/>
        <Conseptos texto={`Una vez que ejecutemos nuestro codigo SQL debemos borrar todo.`}/>
        <ImagenLink tipo={"imagen"} imagen={img17} titulo={"clear"}/>
        <Conseptos texto={`Para verificar que se enviaron los datos seleccionaremos toda la tabla y mostraremos que conteiene ahora.`}/>
        <MySql codigo={`SELECT * FROM usuarios`}/>
        <ImagenLink tipo={"imagen"} imagen={img18} titulo={"Tabla"}/>
        <h2>Insertar mas de un dato</h2>
        <Conseptos texto={`Ahora si queremos insertar mas datos en la tabla debemos hacer esto:`}/>
        <MySql codigo={`INSERT INTO usuarios (nombre,apellidos,edad)
VALUES 	("Matama","Akoya","18"),
	("Utena","Hiiragi","18"),
	("Eren","Jeager","22")`}/>
        <ImagenLink tipo={"imagen"} imagen={img19} titulo={"tabla"}/>
      </main>
      <Footer />
    </>
  );
}

export default InsertMySql;