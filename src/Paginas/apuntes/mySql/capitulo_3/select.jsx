import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import MySql from "../../../../componentes/lenguajes/MySql";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img8 from "./imgs/img8.png";

function Select2MySql(){
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Aprendimos cosas como elminar todo el contenido a una tabla y tambien a asicnar un nombre temporal a consultas.`,
        lenguage: "MySql",
        codigo: `DELETE FROM tabla; -- eliminar todo el contenido de una tabla.
SELECT datoTabla as dato FROM tabla -- asicnar nombre temporal a una consulta.`
      }]}/>
      <main>
        <h1>Cosas extra</h1>
        <Conseptos texto={`Ahora aprenderemos mas cosas de "SELECT" por ejemplo a eliminar el contenido  de una tabla, cambiar el nombre de un registro de forma temporal. `}/>
        <h2>Eliminar contenido</h2>
        <Conseptos texto={`Hemos creado una tabla llamada "tabla" este tiene estos datos.`}/>
        <ImagenLink tipo={"imagen"} imagen={img8} titulo={"tabla"}/>
        <MySql codigo={`INSERT INTO tabla (dato1,dato2,unDato)
VALUES 	("un dato xd","otro dato","algo"),
        ("un dato xd","otro dato","algo"),
        ("un dato xd","otro dato","algo"),
        ("un dato xd","otro dato","algo");
SELECT * FROM tabla`}/>
        <Conseptos texto={`Ahora para eliminar todo el contenido de una tabla necesitamos la sentencia "DELETE".`}/>
        <MySql codigo={`DELETE FROM tabla`}/>
        <h2>Nombres temporales.</h2>
        <Conseptos texto={`Nosotros podemos cambiar de forma temporal el nombre de un registro, en este caso nuestra tabla se llama "tabla" y tiene 3 registros "dato1","dato2","unDato", para nuestro ejemplo vamos a cambiar de forma temporal el registro "dato1" por "dato"`}/>
        <MySql codigo={`SELECT dato1 as dato FROM tabla`}/>
        <Conseptos texto={`Con esto podremos modificar "dato1" pero ahora podremos llamarlo solo "dato" en el codigo, los nombres no afectan el nombre que se puso en la tabla, si nuesro registro tiene como nombre "dato1" el nombre temporal no lo cambiara, solo funcionara para seleccionarlo en el codigo "SQL".`}/>
      </main>
      <Footer />
    </>
  )
}

export default Select2MySql;