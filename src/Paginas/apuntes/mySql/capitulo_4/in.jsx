import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Footer from "../../../../componentes/menus/Footer";
import ShowOptions from "../../../../componentes/showOptions/show";

// imagenes
import img23 from "../capitulo_3/imgs/img23.png"
import img7 from "./imgs/img7.png"
import img8 from "./imgs/img8.png"


function OperadorInMySql(){
  return (
    <>
      <ShowOptions 
        link={"../"}
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
    ("Ella", "Mitchell", 22, "Canada", 18, 94);`}
      />
      <main>
        <h1>Operador IN</h1>
        <Conseptos texto={`Con este operador vamos a indicar que dato queremos obtener en especifico, con esto me refiero a que si en nuestra tabla queremos solo personas cuya edad sea de 18,19,20 o si queremos a todas las personas que se llaman "Juan" y asi:`}/>
        <h2>base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img23} titulo={"base de datos"}/>
        <h2>Antes</h2>
        <Conseptos texto={`Antes si queriamos tener especificamente a usuarios que se llamen "Juan" , "Daniel", "Milim", "Hiro" teniamos que hacer esto:`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE 
  nombres = "Juan" OR
  nombres = "Daniel" OR
  nombres = "Milim" OR
  nombres = "Hiro"`}/>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"tabla especifica"}/>
        <h2>Ahora</h2>
        <h3>IN</h3>
        <Conseptos texto={`Con el operador "IN" facilitamos la legibilidad y la cantidad de codigo para hacer consultas especificas:

Para este ejemplo haremos lo mismo que en la otra consulta solo que usando el operador "IN" para obtener los nombres "Juan" , "Daniel", "Milim", "Hiro".`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres IN ("Juan","Daniel","Milim","Hiro")`}/>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"tabla especifica"}/>
        <h3>NOT IN</h3>
        <Conseptos texto={`Tambien podemos excluir los nombres mencionados del registro usando "NOT IN".`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres NOT IN ("Juan","Daniel","Milim","Hiro")`}/>
        <ImagenLink tipo={"imagen"} imagen={img8} titulo={"tabla excluyente"}/>

      </main>
      <Footer />
    </>
  )
}

export default OperadorInMySql;