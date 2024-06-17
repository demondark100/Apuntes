import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import ShowOptions from "../../../../componentes/showOptions/show";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";

// imagenes
import img23 from "../capitulo_3/imgs/img23.png";
import img9 from "./imgs/img9.png";
import img10 from "./imgs/img10.png";
import img11 from "./imgs/img11.png";
import img12 from "./imgs/img12.png";
import img13 from "./imgs/img13.png";


function FuncionesAddMySql(){
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
        <h1>Funciones de agregacion</h1>
        <Conseptos texto={`Con estas funciones podremos obtener distintos tipos de datos de una tbla por ejemplo ver la cantidad de datos que tiene una tabla, sacar un promedio, etc.

Estos trabajan junto con la clausula "SELECT" para obtener y procesar los datos de una tabla.`}/>
        <h2>Base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img23} titulo={"Base de datos"}/>
        <h2>como usar</h2>
        <Conseptos texto={`Las funciones en sql pueden recibir parametros como tambien hay funciones que no necesitan de parametros para funcionar, los parametros mas que nada son para especificar con que parte de la tabla deseamos trabajar.`}/>
        <h3>Sin parametros</h3>
        <Sintaxis codigo={`SELECCIONAR funcion() DE tabla`}/>
        <h3>Con parametros</h3>
        <Sintaxis codigo={`SELECCIONAR funcion(parametro) DE tabla`}/>
        <h2>count</h2>
        <Conseptos texto={`Con esta funcion obtendremos cuantos datos tiene una tabla en total.`}/>
        <MySql codigo={`SELECT count() from estudiantes`}/>
        <Conseptos texto={`Tambien podemos pasar que columna queremos tener la cantidd de datos que tiene.`}/>
        <MySql codigo={`SELECT count(nombres) FROM estudiantes`}/>
        <ImagenLink tipo={"imagen"} imagen={img9} titulo={"cantidad"}/>
        <Conseptos texto={`En este caso nuestra tabla tiene un registro de 50 estudiantes/datos.`}/>
        <h2>sum</h2>
        <Conseptos texto={`Con esta funcion vamos a sumar todos los datos de una tabla especificamente de la columna que nosotros deseemos.

Para este ejemplo:
La universidad solicita sumar el "promedio" de todos los estudiantes.`}/>
        <MySql codigo={`SELECT sum(promedio) FROM estudiantes`}/>
        <ImagenLink tipo={"imagen"} imagen={img10} titulo={"sumar"}/>
        <h2>avg</h2>
        <Conseptos texto={`Con esta funcion vamos a sacar el promedio de los datos que nosotros deseemos.

Para este ejemplo la universidad desea sacar el promedio de las notas de los estudiantes.`}/>
        <MySql codigo={`SELECT avg(promedio) FROM estudiantes`}/>
        <ImagenLink tipo={"imagen"} imagen={img11} titulo={"promedio"}/>
        <h2>round</h2>
        <Conseptos texto={`Con esta funcion vamos a redondear numeros decimales.`}/>
        <MySql codigo={`SELECT round(sum(promedio)) FROM estudiantes`}/>
        <ImagenLink tipo={"imagen"} imagen={img12} titulo={"redondeo"}/>
        <Conseptos texto={`Esta funcion puede recibir 2 parametros el primero que seria redondear osea lo que vimos y el segundo cuantos decimales queremos que nos muestre.`}/>
        <MySql codigo={`SELECT round(avg(promedio),2) FROM estudiantes`}/>
        <h2>min y max</h2>
        <Conseptos texto={`Tambien podemos encontrar cual es el valor minimo y el valor maximo en una tabla.
Para este ejemplo: 
La universidad desea encontrar al alumno con menos edad y al alumno con mas edad.`}/>
        <MySql codigo={`SELECT 
  min(edad) as menor,
  max(edad) as mayor
  FROM estudiantes`}/>
        <Conseptos texto={`En este caso estamos seleccionando la edad tanto la menor como la mayor y les estamos poniendo nombres de forma temporal con "as" el cual ya vimos anteriormente.`}/>
        <ImagenLink tipo={"imagen"} imagen={img13} titulo={"menor y mayor"}/>
      </main>
    </>
  )
}

export default FuncionesAddMySql;