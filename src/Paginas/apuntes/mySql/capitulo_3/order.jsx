import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import MySql from "../../../../componentes/lenguajes/MySql";
import Txt from "../../../../componentes/lenguajes/Txt";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img9 from "./imgs/img9.png";
import img10 from "./imgs/img10.png";
import img11 from "./imgs/img11.png";
import img12 from "./imgs/img12.png";
import img13 from "./imgs/img13.png";
import img14 from "./imgs/img14.png";


function OrderByMySql() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con la clausula "ORDER BY" podemos ordenar los datos de distintas formas.`,
        lenguage: "MySql",
        codigo: `ORDER BY tabla ASC;   -- ordenar de forma ascendente(de menor a mayor).
ORDER BY tabla DESC;   -- ordenar de forma descendente(de mayor a menor).
ORDER BY numeros DESC NULLS FIRST;   -- poner en los primeros lugares los datos null.
ORDER BY numeros DESC NULLS LAST;  -- poner en ultimo lugar los datos null.
ORDER BY RANDOM();   -- ordenar los datos de forma aleatoria.
SELECT DISTINCT numeros FROM ordenar;    -- evitar que los datos se repitan`
      }]}/>
      <main>
        <h1>Order By</h1>
        <Conseptos texto={`Esto es parecido a a "SELECT", solo que se encarga de ordenar los datos como nostros indiquemos.

Primero crearemos una tabla llamada "ordenar"`}/>
        <ImagenLink tipo={"imagen"} imagen={img9} titulo={"tabla ordenar"}/>
        <Conseptos texto={`Ahora vamos a insertar algunos numeros en nuestra tabla.`}/>
        <MySql codigo={`INSERT INTO ordenar (numeros)
VALUES 	(15),
        (8),
        (35),
        (12),
        (78),
        (1)`}/>
        <ImagenLink tipo={"imagen"} imagen={img10} titulo={"numeros"}/>
        <h2>Ascendiente</h2>
        <Conseptos texto={`Con esto ordenaremos los datos de menor a mayor, para eso debemos usar "ASC".`}/>
        <MySql codigo={`SELECT * FROM ordenar   /*seleccionar toda la tabla*/
ORDER by numeros ASC    /*que registro deseamos ordenar*/`}/>
        <ImagenLink tipo={"imagen"} imagen={img11} titulo={"order ascendente"}/>
        <h2>descendiente</h2>
        <Conseptos texto={`cond esto ordenaremos los datos de mayor a menor, para eso debemos usar "DESC"`}/>
        <MySql codigo={`SELECT * FROM ordenar   /*seleccionar toda la tabla*/
ORDER by numeros DESC    /*que registro deseamos ordenar*/`}/>
        <ImagenLink tipo={"imagen"} imagen={img12} titulo={"orden descendente"}/>
        <Conseptos texto={`Esto tiene una gerarquia para poder ordenar de forma ascendente o descendente.`}/>
        <Txt codigo={`de forma ascendente

null
numeros
caracteres especiales
letras


de forma descendente

letrras
caracteres especiales
numeros
null`}/>
        <Conseptos texto={`Esto ordena los datos de esta manera ya sea descendente o ascendente.`}/>
        <h2>NULLS</h2>
        <Conseptos texto={`Nosotros podemos controlar donde queremos que aparezcan los datos "null", por ejemplo si queremos que aparezcan al principio o al final de la tabla, esto sin depender de la gerarquia que tiene ordenar de forma ascendente o descendente.`}/>
        <h3>primero null</h3>
        <MySql codigo={`ORDER BY numeros DESC NULLS FIRST`}/>
        <h3>ultimo null</h3>
        <MySql codigo={`ORDER BY numeros DESC NULLS LAST`}/>
        <Conseptos texto={`NULLS FIRST y NULLS LAST son las sentencias que permiten ubicar los datos null en primero o ultimo lugar de nuestra tabla.`}/>
        <h2>Aleatorio</h2>
        <Conseptos texto={`SQL tambien nos permite ordenar los datos de forma aleatoria, esto se logra con la funcion random.`}/>
        <MySql codigo={`SELECT * FROM ordenar
ORDER BY RANDOM()`}/>
        <h2>DISTINCT</h2>
        <Conseptos texto={`Esto hace que los datos que estan repetidos  no se repitan mas de una vez.

Para empezar vamos a modificar nuestra tabla ordenar para que numeros tenga 4 datos null.`}/>
        <ImagenLink tipo={"imagen"} imagen={img13} titulo={"tabla modificada"}/>
        <Conseptos texto={`Ahora tenemos 4 veces repetido el dato null, para evitar esto se usara "DISTINCT", este va acompañado de "SELECT".`}/>
        <MySql codigo={`SELECT DISTINCT numeros FROM ordenar`}/>
        <ImagenLink tipo={"imagen"} imagen={img14} titulo={"tabla unica"}/>
        <Conseptos texto={`Como nos damos cuenta el dato null no se repite mas de una vez.`}/>
        
      </main>
      <Footer />
    </>
  );
}

export default OrderByMySql;