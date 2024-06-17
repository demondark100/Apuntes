import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import CodigoFuenteSinInt from "../../../../componentes/codigoFuente/code";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Footer from "../../../../componentes/menus/Footer";
import ShowOptions from "../../../../componentes/showOptions/show";

// imagenes
import img23 from "../capitulo_3/imgs/img23.png";
import img5 from "./imgs/img5.png";
import img6 from "./imgs/img6.png";


function NullMySql(){
  return (
    <>
      <ShowOptions mySql={`INSERT INTO estudiantes (nombres, apellidos, edad, pais, promedio, asistencias)
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
    ("Mia", "Martinez", 21, "España", 18, 9
    1),
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
        <h1>Null</h1>
        <Conseptos texto={`Al momento de hacer consultas podemos mostrar todos los datos null que tenga la tabla, tambien podemos quitarlos con otro metodo.`}/>
        <h2>Base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img23} titulo={"base de datos"}/>
        <Conseptos texto={`Con nuestros datos ya establecidos vamos a insertar mas datos pero estos tendran un valor null.`}/>
        <MySql codigo={`INSERT INTO estudiantes (nombres, apellidos, edad, pais, promedio, asistencias)
VALUES
    (null, null, null, null, null, null),
    (null, null, null, null, null, null),
    (null, null, null, null, null, null),
    (null, null, null, null, null, null),
    (null, null, null, null, null, null);`}/>
        <h2>IS NULL</h2>
        <Conseptos texto={`Con esto vamos a tener todos los datos null de una tabla.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres IS NULL`}/>
        <ImagenLink tipo={"imagen"} imagen={img5} titulo={"solo null"}/>
        <Conseptos texto={`Hemos obtenido solo los datos que son null`}/>
        <h2>IS NOT NULL</h2>
        <Conseptos texto={`Con esto vamos a seleccionar a todos los datos que no sean null.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres IS NOT NULL`}/>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"base sin null"}/>
      </main>
      <Footer />
    </>
  )
}

export default NullMySql;