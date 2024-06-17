import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos"
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import MySql from "../../../../componentes/lenguajes/MySql";
import Resumenes from "../../../../componentes/resumenes/resumenes";


// imagenes 
import img14 from "./imgs/img14.png"
import img19 from "./imgs/img19.png"
import img20 from "./imgs/img20.png"
import img21 from "./imgs/img21.png"


function ClausulaSelectMySql() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esta clausula seleccionaremos los datos de una tabla, esto se hace con la clausula "SELECT".`,
        lenguage: `MySql`,
        codigo: `SELECT * FROM tabla  -- seleccionar todos los datos de una tabla
SELECT dato1 FROM tabla -- seleccionar solo una columna de la tabl
SELECT dato1,dato2 FROM tabla  -- seleccionar 2 o mas datos de la tabla.`
      }]}/>
      <main>
        <h1>Clausula select</h1>
        <Conseptos texto={`Hasta ahora solo habiamos aprendido a seleccionar toda la tabla pero ahora aprenderemos a seleccionar solo los datos que nosostros queremos de una tabla`}/>
        <ImagenLink tipo={"imagen"} imagen={img14} titulo={"tabla"}/>
        <Conseptos texto={`Ahora vamos a insertar los mismos datos de antes.`}/>
        <ImagenLink tipo={"imagen"} imagen={img19} titulo={"add datos"}/>
        <Conseptos texto={`Ahora si queremos solo seleccionar el nombre debemos hacer esto:`}/>
        <MySql codigo={`SELECT nombre FROM usuarios`}/>
        <ImagenLink tipo={"imagen"} imagen={img20} titulo={"Nombres"}/>
        <Conseptos texto={`Tambien podemos seleccionar mas de un dato.`}/>
        <MySql codigo={`SELECT nombre,edad FROM usuarios`}/>
        <ImagenLink tipo={"imagen"} imagen={img21} titulo={"datos"}/>
        <Conseptos texto={`"ELECT" Cada vez que es usado crea una tabla nueva basada en los datos que nosotros filtramos.`}/>
      </main>
      <Footer />
    </>
  );
}

export default ClausulaSelectMySql;