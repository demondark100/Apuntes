import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Footer from "../../../../componentes/menus/Footer";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img15 from "./imgs/img15.png";
import img16 from "./imgs/img16.png";
import img17 from "./imgs/img17.png";
import img18 from "./imgs/img18.png";
import img19 from "./imgs/img19.png";
import img20 from "./imgs/img20.png";
import img21 from "./imgs/img21.png";
import img22 from "./imgs/img22.png";


function WhereMySql(){
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Con esta clausula podemos hacer condiciones con sql, con esto podremos indicar a travez de una condicion que datos deseamos que se muestren o tambien podemos indicar que dato deseamos eliminar o editar.`,
        lenguage: `MySql`,
        codigo: `WHERE numeros > 15   -- condicional
DELETE FROM tabla WHERE id = 8    -- eliminar un dato en especifico
UPDATE tabla SET columna1 = 35 WHERE id = 6   -- editar un dato en especifico`
      }]}/>
      <main>
        <h1>clausula WHERE</h1>
        <Conseptos texto={`Con esta clausula vamos a hacer condicionales, antes que nada vamos a crear una nueva base de datos.`}/>
        <ImagenLink tipo={"imagen"} imagen={img15} titulo={"base de datos"}/>
        <ImagenLink tipo={"imagen"} imagen={img16} titulo={"base de datos"}/>
        <Conseptos texto={`Para hacer una condicional debemos selecionar la base de datos a la que le pediremos un dato o datos a travez de una condicion.

Cuando este seleccionada podremos hacer las condiciones que deseemos por ejemplo en esta base de datos solo queremos los datos de los trabajadores que tienen 23 años`}/>
        <MySql codigo={`SELECT * FROM trabajadores /*seleccionar toda la base de datoss*/
WHERE edad = 23 /*si edad es igual a 23 devolver todos los datos de los trabjadores con 23 años*/`}/>
        <ImagenLink tipo={"imagen"} imagen={img17} titulo={"resultado tabla"}/>
        <Conseptos texto={`Como ya sabemos "SELECT" puede seleccionar todo " * " como tambien puede seleccionar solo una columna de la tabla, bueno si nosostros seleccionamos solo los nombres de la tabla o cualquier otro dato la condicional funcionara y nos devolvera el dato que solicitemos.`}/>
        <MySql codigo={`SELECT nombres FROM tabajadores
WHERE edad = 25`}/>
        <ImagenLink tipo={"imagen"} imagen={img18} titulo={"nombres"}/>
        <Conseptos texto={`En este caso solo estamos seleccionando la columna nombres de la tabla trabajadores , luego hacemos una condicion de que si la edad del trabajador es 25 nos devolvera solo sus nombres.`}/>
        <Conseptos texto={`Esto funciona igual a un lenguaje de programacion osea que se puede hacer todo tipo de condicionales por ejemplo mayor o menor que mayor o igual que menor o igual que, se pueden ir probando todo tipo de condiciones para las consultas.
        
Por ejemplo si deseamos mostrar los datos todos los trabajadores que tengas mas de 23 años.`}/>
        <MySql codigo={`SELECT * FROM trabajadores
WHERE edad > 23`}/>
        <ImagenLink tipo={"imagen"} imagen={img19} titulo={"nueva tabla"}/>
        <h2>Eliminar</h2>
        <Conseptos texto={`Recordemos que "DELETE" elimina toda la tabla, pero si nosotros usamos una condicional con "WHERE" podemos eliminar un dato en especifico.
        
Por ejemplo digamos que el trabajador Juan es despedido por alguna razon desconocida, bueno Juantido ya no deberia estar en la base de datos porque ya no forma parte de la empresa y podemos eliminarlo de la base de datos.`}/>
        <MySql codigo={`DELETE FROM trabajadores
WHERE nombres = "Juan";
SELECT * FROM trabajadores`}/>
        <ImagenLink tipo={"imagen"} imagen={img20} titulo={"base con delete"}/>
        <Conseptos texto={`Si "nombres" es igual a "Juan" eliminara ese dato.`}/>
        <h2>Modificar</h2>
        <Conseptos texto={`Ahora imaginemos que nos hemos equivocado en un registro por ejemplo un nombre.
        
En este caso "Juanito" solo era un nombre que el trabajador se lo puso por accidente pero de verdad se llama "Alfred".

Para empezar debemos usar la clausula "UPDATE" y usar "WHERE" para hacer la condicional.`}/>
        <Sintaxis codigo={`ACTUALIZAR tabla ACCEDER columna = "dato"`} consola={`Sin resultados`}/>
        <MySql codigo={`UPDATE trabajadores SET nombres = "Alfred"
WHERE id = 3;
SELECT * FROM trabajadores`}/>
        <ImagenLink tipo={"imagen"} imagen={img21} titulo={"Actualizado"}/>
        <Conseptos texto={`Tambien podemos modificar mas de un dato.

Por ejemplo digamos que "Alfredo" no era un trabajador y se habia rquivocado, ahora recien llega el verdadero trabajador que casualmente tiene la misma edad que "Alfredo" asi que solo nos queda modificar el nombre y el apellido.`}/>
        <MySql codigo={`UPDATE trabajadores 
SET nombres = "Alfred",
apellidos = "Morgan"
WHERE id = 3;
SELECT * FROM trabajadores`}/>
        <ImagenLink tipo={"imagen"} imagen={img22} titulo={"tabla modificada"}/>
        <Conseptos texto={`En este caso modificamos el nombre "Alfred" y el apellido "Alcachofa" por "Pedro Pascal".`}/>
      </main>
      <Footer />
    </>
  )
}

export default WhereMySql;