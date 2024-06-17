import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Footer from "../../../../componentes/menus/Footer";
import ShowOptions from "../../../../componentes/showOptions/show"

// imagenes
import img23 from "./imgs/img23.png";
import img34 from "./imgs/img34.png";
import img35 from "./imgs/img35.png";


function OperadorBetweenMySql(){
  return(
    <>
      <ShowOptions 
        link={`../`} 
        mySql={`INSERT INTO estudiantes (nombres, apellidos, edad, pais, promedio, asistencias)
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
        <h2>Operador between</h2>
        <Conseptos texto={`Para empezar reutilizaremos la tabla anterior.`}/>
        <ImagenLink tipo={"imagen"} imagen={img23} titulo={"base de datos"}/>
        <Conseptos texto={`Este operador facilita mucho al momento de optener un rango de valores deseados.

Anteriormente si queriamos algo de un rango deseado debiamos hacer esto:`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE edad >= 18 AND edad <= 23`}/>
        <Conseptos texto={`En este caso deseamos tener a estudiantes que tengan un rango entre 18 y 23 años.

Pero con "BETWEEN" se facilitara mucho mas esta tarea.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE edad BETWEEN 18 AND 23`}/>
        <ImagenLink tipo={"imagen"} imagen={img34} titulo={"between"}/>
        <h2>¡Por que usarlo?</h2>
        <Conseptos texto={`Esta clausula hace que el codigo sea mas legible que andas haciendo validaciones para rangos, y hace que al momento de hacer mas de una condicional sea mas legible.

Por ejemplo: 
Supongamos que la universidad pagara un viaje a los estudiantes que tengan entre 18 y 23 años y sera solo para los estudiantes de Japon.`}/>
        <h3>Antes</h3>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE edad >= 18 AND edad <= 23 AND pais = "Japon"`}/>
        <h3>Ahora con BETWEEM</h3>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE edad BETWEEN 18 AND 23 AND pais = "Japon"`}/>
        <ImagenLink tipo={"imagen"} imagen={img35} titulo={"base BETWEEN"}/>
      </main>
      <Footer />
    </>
  )
}

export default OperadorBetweenMySql;