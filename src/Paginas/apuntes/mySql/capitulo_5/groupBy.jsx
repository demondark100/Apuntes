import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Txt from "../../../../componentes/lenguajes/Txt";
import Footer from "../../../../componentes/menus/Footer";
import ShowOptions from "../../../../componentes/showOptions/show";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img23 from "../capitulo_3/imgs/img23.png";
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";


function GroupByMySql(){

  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto agruparemos los datos que sean iguales para trabajar con ellos, por ejemplo si tenemos estudiantes que coinciden con el dato del pais por ejemplo "EEUU".`,
        lenguage: "MySql",
        codigo: `GROUP BY pais    -- agrupar todos los datos similares.
HAVING dato1 > 18   -- hacer condicionales pero con datos agrupados.`
      }]}/>
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
        <h1>GROUP BY y HAVING</h1>
        <Conseptos texto={`Con esto vamos a agrupar datos que sean repetidos por ejemplo:`}/>
        <Txt codigo={`producto  cantidad
_______________
platanos  15
manzanas  25
peras     13
platanos  12
naranjas  45
peras     18
manzanas  87
naranjas  97
mqnzanas  73`}/>
        <Conseptos texto={`Como nos damos cuenta en la columna de producto tenemos frutas que se repiten, al lado tienen otra columna llamada cantidad y con esa cantidad podemos agrupar todos los datos con el producto repetido y sacar un promedio o hacer otro tipo de cosas de algun producto en especifico por ejemplo:`}/>
        <Txt codigo={`si usamos group by en productos SQL hara esto:

platanos 15
platanos 12


manzanas 25
manzanas 25
mqnzanas 73

peras    13
peras    18

naranjas 45
naranjas 97`}/>
        <Conseptos texto={`Como nos damos cuenta agrupo todas las frutas, pero los diferencia la cantidad y claro su id, con la cantidad podemos sumar cuantas manzanas hay en total o hacer cualquier tipo de operacion que queramos.`}/>
        <MySql codigo={`SELECT producto,sum(cantidad) FROM frutas
WHERE producto = "manzanas"
GROUP BY producto`}/>
        <Conseptos texto={`Resultado:
Lo que hizo SQL es:`}/>
        <Txt codigo={`platanos  15 + 12 = 27
manzanas  25 + 25 + 73 = 123
peras     13 + 18 = 31
naranjas  45 + 97 = 142`}/>
        <h2>Base de datos</h2>
        <Conseptos texto={`Ahora para entender mejor vamos a hacer ejercicios con una base de datos mas grande y practicar lo aprendido.`}/>
        <ImagenLink tipo={"imagen"} imagen={img23} titulo={"base de datos"}/>
        <h3>Sacar promedio</h3>
        <Conseptos texto={`Para este ejercicio:
La universidad desea sacar el promedio de los estudiantes segun su pais para saber que pais tiene el promedio mas alto en cuestion de notas.`}/>
        <MySql codigo={`SELECT 
  pais,
  round(avg(promedio)) as promedio 
  FROM estudiantes
WHERE pais IS NOT NULL
GROUP BY pais `}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"promedio paises"}/>
        <h2>Contar</h2>
        <Conseptos texto={`Para este ejercicio:
La universidad desea contar cuantos alumnos tiene en cada pais.`}/>
        <MySql codigo={`SELECT pais,count(pais) FROM estudiantes
WHERE pais IS NOT NULL
GROUP BY pais`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"cantidad de estudiantes"}/>
        <h2>HAVING</h2>
        <Conseptos texto={`Excelente aprendimos a agrupar y a usar funciones en los datos agrupados, pero que pasa si en esos datos agrupados queremos filtrar algo especifico por ejemplo en los promedios de los paises queremos que los paises que tengan un promedio mayor a 17 sean los mejores.

Podriamos pensar que la clausula WHERE podria filtar esos datos, si lo intentamos con WHERE hara la condicional antes de que se agrupen los datos y ese no es nuestro objetivo, pero esto podria ser util para quitar los valores NULL.`}/>
        <MySql codigo={`SELECT pais,round(avg(promedio)) FROM estudiantes
WHERE pais IS NOT NULL
GROUP BY pais`}/>
        <Conseptos texto={`Pero para trabajar y hacer condicionales con datos que estan agrupados necesitamos la clausula "HAVING", esta clausula funciona igual que "WHERE", por ejemplo:

La universidad desea tener los paises que tengan un promedio mayor o igual a 18.`}/>
        <MySql codigo={`SELECT pais,round(AVG(promedio)) FROM estudiantes
WHERE pais IS NOT NULL
GROUP BY pais
HAVING promedio > 18`}/>
        <ImagenLink tipo={"imagen"} imagen={img3} titulo={"promedio pais filtrado"}/>
      </main>
      <Footer />
    </>
  )
}

export default GroupByMySql;