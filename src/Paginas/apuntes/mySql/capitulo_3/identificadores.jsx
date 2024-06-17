import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Footer from "../../../../componentes/menus/Footer";
import MySql from "../../../../componentes/lenguajes/MySql";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";

function IdMySql(){
  return(
    <>
      <Resumenes contenido={[{
        mensaje: `Un id(identificador) hace que cada registro sea unico por mas que existan datos que sean iguales, para poner un id se puede crear una columna llamada "id" u otro nombre y luego asignarle un valor autoincrementable, osea que a medida que se agreguen mas datos se vaya asignando un dato a cada nuevo registro.

Esto se puede lograr haciendo click en PK(Primary Key) y en AI(AutoIncrement).

O tambien podemos crear id autoincrementable usando codigo SQL.`,
        lenguage: `MySql`,
        codigo: `CREATE TABLE "tabla" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT
)`
      }]}/>
      <main>
        <h1>Identificadores</h1>
        <Conseptos texto={`Al momento de crear un registro puede que dos o mas datos se repitan de esta manera.`}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"tabla"}/>
        <Conseptos texto={`En este caso se repite.
nombres: Utena
apellidos: Hiiragi
edad: 18

En ese tipo de casos no tendriamos como identificar un dato con otro, para eso estan los identificadores los cuales ayudaran que cada dato sea unico por mas que uno sea muy parecido al otro.`}/>
        <h2>AutoIncrement</h2>
        <Conseptos texto={`Esto sirve para asignar un id de a cada dato de forma automatica, esto iniciara desde el numero "1" osea que el primer dato estara identificaado con el uno el segundo con el "2" y asi sucesivamente.

Debemos crear una nueva tabla, puedes eliminar la tabla creada anteriormente, ahora debemos crear un nuevo campo llamado "id" o "identificador", es recomendable usar esos nombres pero se puede poner el nombre que deseemos.

Ahora que se creo el nuevo registro "id" debemos marcar las casillas de "PK" y "AI", esto asignara un identificador unico a cada dato.`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"id"}/>
        <Conseptos texto={`Ahora insertaremos datos en nuestra tabla.`}/>
        <MySql codigo={`INSERT INTO usuarios (nombres,apellidos,edad)
VALUES	("Utena","Hiiragi",18),
        ("Subaru","natsuki",19),
        ("Mina","Ashiro",28),
        ("Naufumi","Iwatani",20),
        ("Utena","Hiiragi",18)`}/>
        <ImagenLink tipo={"imagen"} imagen={img3} titulo={"tabla"}/>
        <Conseptos texto={`Ahora al ejecutar nuestro codigo y ver nuestra tabla nos datemos cuenta que hay dos registros con:
nombres: Utena
apellidos: Hiiragi
edad: 18

Pero los diferencia algo y es el identificador, uno tiene el id 1 y el otro tiene el id 5, esto hace que por mas parecido sea un registro a otro no seran los mismos ya que el identificador los cambia y los vuelve unicos.`}/>
      </main>
      <Footer />
    </>
  )
}

export default IdMySql;