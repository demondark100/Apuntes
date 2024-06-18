import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Footer from "../../../../componentes/menus/Footer";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink"
import ShowOptions from "../../../../componentes/showOptions/show"
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img23 from "../capitulo_3/imgs/img23.png";
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";

function OperadorLikeMySql() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con este operador vamos a filtrar resultados mucho mas precisos.`,
        lenguage: "MySql",
        codigo: `WHERE nombre LIKE 'A%'   -- inicia con
WHERE nombre LIKE '%A'    -- finaliza con
WHERE nombre LIKE '___'   -- buscar por longitud
WHERE nombre LIKE '_a___'   -- buscar por longitud y caracteres`
      }]}/>
      <ShowOptions link={"../"} mySql={`INSERT INTO estudiantes (nombres, apellidos, edad, pais, promedio, asistencias)
VALUES
    ("Milim", "Midorikawa", 19, "Mexico", 18, 95),
    ("Jorge", "Brows", 19, "EEUU", 15, 98),
    ("Utena", "Hiiragi", 18, "Japon", 18, 95),
    ("Elza", "Midorikawa", 19, "Mexico", 18, 95),
    ("Ana", "Gomez", 20, "Argentina", 17, 90),
    ("Carlos", "Santana", 21, "España", 16, 85),
    ("Maria", "Lopez", 22, "Chile", 19, 92),
    ("Juan", "Perez", 23, "Colombia", 14, 80),
    ("Kenta", "Sato", 18, "Japon", 20, 99),
    ("Sophia", "Smith", 19, "EEUU", 18, 97),
    ("Lucas", "Miller", 20, "Australia", 17, 93),
    ("Emma", "Wilson", 21, "Canada", 19, 96),
    ("Hiro", "Tanaka", 22, "Japon", 16, 88),
    ("Liam", "Jones", 23, "UK", 14, 82),
    ("Olivia", "Brown", 18, "EEUU", 20, 100),
    ("Noah", "Garcia", 19, "Mexico", 17, 89),
    ("Aiko", "Yamamoto", 20, "Japon", 15, 84),
    ("Mia", "Martinez", 21, "España", 18, 91),
    ("Ethan", "Davis", 22, "EEUU", 16, 87),
    ("Chloe", "Clark", 20, "Australia", 19, 95),
    ("Daniel", "Rodriguez", 21, "Mexico", 17, 88),
    ("Isabella", "Lee", 18, "Canada", 18, 92),
    ("Matthew", "Kim", 22, "Corea", 16, 86),
    ("Sofia", "Hernandez", 23, "España", 15, 83),
    ("Jackson", "Martinez", 19, "Colombia", 18, 94),
    ("Emily", "Nguyen", 20, "Vietnam", 19, 97),
    ("David", "Brown", 21, "Australia", 17, 90),
    ("Grace", "Johnson", 22, "EEUU", 18, 94),
    ("Aiden", "White", 23, "UK", 16, 85),
    ("Mason", "Harris", 19, "Canada", 17, 89),
    ("Lily", "Martin", 20, "France", 19, 92),
    ("James", "Thompson", 21, "EEUU", 15, 84),
    ("Charlotte", "Garcia", 22, "Mexico", 18, 96),
    ("Benjamin", "Martinez", 23, "Spain", 16, 88),
    ("Ava", "Robinson", 18, "Australia", 20, 98),
    ("Logan", "Clark", 19, "Canada", 17, 87),
    ("Harper", "Lewis", 20, "UK", 19, 93),
    ("Alexander", "Walker", 21, "EEUU", 14, 80),
    ("Ella", "Young", 22, "Australia", 18, 94),
    ("Elijah", "King", 23, "UK", 16, 86),
    ("Abigail", "Wright", 19, "Canada", 17, 90),
    ("Henry", "Hill", 20, "France", 18, 91),
    ("Scarlett", "Scott", 21, "EEUU", 15, 83),
    ("Sebastian", "Green", 22, "Australia", 17, 87),
    ("Zoe", "Adams", 23, "Canada", 18, 95),
    ("Jack", "Baker", 18, "UK", 19, 92),
    ("Amelia", "Gonzalez", 19, "Spain", 16, 84),
    ("Evelyn", "Nelson", 20, "EEUU", 20, 99),
    ("Daniel", "Carter", 21, "Australia", 17, 88),
    ("Ella", "Mitchell", 22, "Canada", 18, 94);`}/>
      <main>
        <h1>Operador like</h1>
        <Conseptos texto={`Este operador de comparacion es similar a una exprecion regular que facilita obtener consultas mas especificas,

Con Like podemos filtrar los resultados especificando con que letra o letras empezara o terminara algun dato para encontrarlo o pasando la longitud de caracteres que tendra nuestro resultado en simples palabras es como un buscador que facilita filtrar resultados.,`}/>
        <h2>Base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img23} titulo={"base de datos"}/>
        <h2>%</h2>
        <Conseptos texto={`Con este simbolo indicaremos como es que iniciara o terminara un dato para poder filtrarlo por ejemplo:
Si queremos tener solo un registro donde los nombres de los usuarios inicien con U.
Si queremos tener solo un registro donde los nombres de los usuarios terminen con a.`}/>
        <h2>Inicia con:</h2>
        <Conseptos texto={`Si deseamos filtrar nombres o cualquier otro dato en base del como inicia debemos poner el simbolo "%" despues del caracter o caracteres por ejemplo:
Queremos buscar personas que su nombre inicien con "A", al ser nombres es recomendable poner una mayuscula para evitar problemas pero si son otro tipo de datos se debe poner minuscula segun sea el caso.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres LIKE "U%"`}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"Nombres con u"}/>
        <Conseptos texto={`En este caso estamos pidiendo que se filtren estudiantes los cuales su nombre inicien con U.`}/>
        <h2>finaliza con:</h2>
        <Conseptos texto={`Tambien podemos especificar con que queremos que finalice para hacer una busqueda mas exacta en este caso queremos a estudiantes los cuales su nombre finalice con "e" para ello debemos poner primero el simbolo "%" y despues el caracter o caracteres.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres LIKE "%e"`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"terminan con e"}/>
        <Conseptos texto={`En este caso estamos pidiendo que se filtren estudiantes los cuales su nombre terminen con "e".`}/>
        <h2>buscar cualquier posicion</h2>
        <Conseptos texto={`Tambien podemos buscar datos desde cualquier posision, esto se hace con el simbolo "_".

En este caso "_" puede significar cualquier caracter, para usar esto debemos tomas en cuenta la longitud del dato que queremos buscar por ejemplo si queremos buscar todos los nombres que solo tengan 3 caracteres podemos hacer esto:`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres LIKES "___"`}/>
        <ImagenLink tipo={"imagen"} imagen={img3} titulo={"3 caracteres nombre"}/>
        <Conseptos texto={`En este caso solo nos devuelve los datos donde la longitud de los nombres sea de 3.

Tambien en medio de "_" podemos poner un caracter para que busque algun dato en base a la longitud y al caracter que le especificamos por ejemplo:`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres LIKE "_t___"`}/>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"nobre personalizado"}/>
        <Conseptos texto={`En este caso buscamos un nombre que tenga una longitud de 5 y que tenga el caracter "t" en la segunda posicion.`}/>
      </main>
      <Footer />
    </>
  );
}

export default OperadorLikeMySql;