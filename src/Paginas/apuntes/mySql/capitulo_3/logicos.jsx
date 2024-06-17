import Conseptos from "../../../../componentes/conseptos/conseptos"
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import MySql from "../../../../componentes/lenguajes/MySql";
import Footer from "../../../../componentes/menus/Footer";
import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal"
import ShowOptions from "../../../../componentes/showOptions/show";



// imagenes
import img23 from "./imgs/img23.png";
import img24 from "./imgs/img24.png";
import img25 from "./imgs/img25.png";
import img26 from "./imgs/img26.png";
import img27 from "./imgs/img27.png";
import img28 from "./imgs/img28.png";
import img29 from "./imgs/img29.png";
import img30 from "./imgs/img30.png";
import img31 from "./imgs/img31.png";
import img32 from "./imgs/img32.png";
import img33 from "./imgs/img33.png";
import CodigoFuenteSinInt from "../../../../componentes/codigoFuente/code";

function LogicosMySql() {
  return (  
    <>
      <MensajeModal texto={`Desde ahora en adelante se mostrara en una imagen la estructura de la tabla con la que trabajaremos y los datos que se rellenaran en esa tabla estara en el apartado de opciones como lenguaje sql para copiar y pegar y tener los mismos datos.`}/>
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
        <h1>Operadores logicos</h1>
        <Conseptos texto={`Los operadores logicos nos ayudan a mejorar las condiciones para hacer peticiones a la base de datos.`}/>
        <h2>Base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img23} titulo={"base de datos"}/>
        <Conseptos texto={`Estos al igual que un lenguaje de programacion tiene los operadores "AND", "OR", "NOT" para poder hacer condicionales logicas.`}/>
        <h2>AND</h2>
        <Conseptos texto={`"AND" hace que dos condiciones tengan que cumplirse de forma obligatoria para ejecutarse por ejemplo algo cotidiano debes de limpiar tu habitacion y la sala para ir a jugar, en este ejemplo debes de hacer ambas cosas para poder ir a jugar, esto tambien se aplica en "SQL" para entender mejor es tiempo de hacer unos ejercicions con los datos que tenemos.
        
Para este ejercicio:
La universidad premiara a los alumnos que tengan un promedio de 18 para arriba y las asistencias de un 97% para arriba.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE promedio >= 18 AND asistencias >= 97`}/>
        <ImagenLink tipo={"imagen"} imagen={img24} titulo={"base AND"}/>
        <Conseptos texto={`En este caso filtro a los alumnos que tienen un promedio mayor o igual a 18 y las asistencias de mayor o igual a 97%.`}/>
        <h2>OR</h2>
        <Conseptos texto={`Este operador a diferencia de "AND" no necesita que ambas condiciones se cumplan, si solo una condicion se cumple sera suficiente para hacer una consulta.

Para este ejercicio:
La universidad dara una beca a los estudiantes que sean de Japon o que su promedio sea perfecto osea de 20.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE pais = "Japon" OR promedio = 20`}/>
        <ImagenLink tipo={"imagen"} imagen={img25} titulo={"base Japon"}/>
        <Conseptos texto={`En este caso esta filtrando a todos los estudiantes de Japon o a los estudiantes que tengan un promedio perfecto de 20.`}/>
        <h2>NOT</h2>
        <Conseptos texto={`Este metodo hace lo contrario a lo que nosotros indiquemos por ejemplo si si una condicion no se cumple hara que se cumpla en simples palabras hace todo lo contrario.

Para este ejercicio:
La universidad hara un examen muy complicado sin embargo los estudiantes que tengan 18 y 19 seran excluidos debido a que no estan preparados para cosas muy complejas.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE 
  NOT edad = 18 AND
  NOT edad = 19`}/>
        <ImagenLink tipo={"imagen"} imagen={img26} titulo={"base con exclucion"}/>
        <Conseptos texto={`En este caso la universidad a excluido a los estudiantes de 18 y 19 años en el examen.`}/>
        <h2>Mesclar</h2>
        <Conseptos texto={`Tambien podemos mesclar los operadores logicos para hacer un filtro de datos mucho mas especifico.

Para este ejemplo:
La universidad desea hacer una excurcion al museo a los estudiantes que tenga 21 o 22 y que su prmedio sea mayor a 18.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE edad = 21 OR edad = 22 AND promedio >= 18`}/>
        <ImagenLink tipo={"imagen"} imagen={img27} titulo={"base incorrecta"}/>
        <Conseptos texto={`Tenemos un problema y esque no es lo que esperabamos ya que queriamos que tenga una edad de 21 o 22 años, eso si se cumplio pero el promedio queriamos que sea mayor a 18 y vemos promedios que es menor a 18 esto porque primero se ejecuta:
Si edad es igual a 21:
si edad es igual a 22 y promedio mayor a 18.

El error esque la regla del promedio mayor a 18 se esta ejecutando solo para los que tienen 22 y no para los que tienen 21, es como si se ejecutara de esta manera.`}/>
        <ImagenLink tipo={"imagen"} imagen={img28} titulo={"indicacion"}/>
        <Conseptos texto={`Como nos damos cuenta la condicion de "AND" no se aplica para ambas edades solo para los que tienen 22, esto se soluciona con "()" para indicar que condicional logica queremos que se evalue primero de esta manera:`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE (edad = 21 OR edad = 22) AND promedio >= 18`}/>
        <Conseptos texto={`Ahora que indicamos con "()" que las edades sean de 21 a 22 y que deben tener un promedio mayor o igual a 18 por fin tendremos los datos deseados.`}/>
        <ImagenLink tipo={"imagen"} imagen={img29} titulo={"base correcta"}/>
        <Conseptos texto={`Excelente ahora si tenemos el resultado deseado alumnos que tengan 21 o 22 años y su promedio mayor o igual a 18.`}/>
        <h2>Limit</h2>
        <Conseptos texto={`Esto sirve para limitar cuantos datos queremos recibir en nuestra consulta.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
LIMIT 3`}/>
        <ImagenLink tipo={"imagen"} imagen={img30} titulo={"Limite 3"}/>
        <Conseptos texto={`En este caso nos devolvio solo los 3 primeros registros nada mas, esto se puede usar para muchas cosas interesantes:

Para este ejercicio:
La universidad sorteara dos becas a los estudiantes que tienen una asistecia mayor o igual a 97% o que seaan de Japon y su promedio debe de ser mayor o igual a 18, seran seleccionados dos alumnos al azar.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE
  (asistencias >= 97 OR
  pais = "Japon") AND
  promedio >= 18
ORDER BY RANDOM()
LIMIT 2`}/>
        <ImagenLink tipo={"imagen"} imagen={img31} titulo={"aleatorio"}/>
        <Conseptos texto={`Genial esos dos alumnos ganaron la beca, ahora se sortearan otras dos becas veamos quienes ganaran ahora, hagamos otra consulta.`}/>
        <ImagenLink tipo={"imagen"} imagen={img32} titulo={"Aleatorio"}/>
        <h2>Distinto</h2>
        <Conseptos texto={`Este es otro metodo de comparacion que nos devuelve true o false, en el operador logico "NOT" si algo era true se convertia en false y asi sucesivamente pero distinto de es un operador de comparacion.

Por ejemplo:
Si 15 es distinto de 20 sera igual a verdadero.
Si 15 es dintinto de 15 sera falso porque 15 no es dintinto de 15.

Para este ejemplo: 
La universidad hara una prueba pero excluira a los alumnos de 18 años debio a que no tienen mucha experiencia.`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE edad != 18`}/>
        <ImagenLink tipo={"imagen"} imagen={img33} titulo={"mayor de 18"}/>
        <Conseptos texto={`En este caso se devolveran todos los resultados donde edad sea distinto a 18.`}/>
      </main>
      <Footer />
    </>
  );
}

export default LogicosMySql;