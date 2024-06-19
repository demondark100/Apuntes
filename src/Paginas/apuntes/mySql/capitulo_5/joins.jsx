import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import MySql from "../../../../componentes/lenguajes/MySql";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import ShowOptions from "../../../../componentes/showOptions/show";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Txt from "../../../../componentes/lenguajes/Txt";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img4 from "./imgs/img4.png"
import img8 from "./imgs/img8.png"
import img9 from "./imgs/img9.png"
import img10 from "./imgs/img10.png"


function JoinMySql() {
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Con esta sintaxis facilitaremos la legibilidad de las subconsultas, esto tambien es mas optimo para sql.`,
        lenguage: "MySql",
        codigo: `SELECT dato1,dato2 FROM tabla1 t1
INNER JOIN tabla2 t2
ON t1.refId = t2.id`
      },{
        mensaje: `Con esto tambien podemos relacionar todos los datos de una tabla tanto en la tabla1(derecha) y la tabla2(izquierda).`,
        lenguage: `MySql`,
        codigo: `-- LEFT JOIN
SELECT dato1,dato2 FROM tabla1 t1
LEFT JOIN tabla2 t2
ON t1.refid = t2.id;

-- RIGHT JOIN
SELECT dato1,dato2 FROM tabla2 t2
LEFT JOIN tabla1 t1
ON t2.id = t1.refid;`
      }]}/>
      <ShowOptions 
        link={"../"}
        mySql={`-- departamentos
INSERT INTO departamentos (nombre) VALUES
('Ciencias Exactas'),
('Ciencias Sociales'),
('Ingeniería'),
('Humanidades'),
('Ciencias de la Salud'),
('Artes y Humanidades'),
('Administración y Negocios');

-- cursos
INSERT INTO cursos (curso, descripcion, departamento_id) VALUES
('Matemáticas', 'Curso de matemáticas avanzadas', 1),
('Historia', 'Curso de historia mundial', 2),
('Programación', 'Curso de introducción a la programación', 3),
('Filosofía', 'Curso de filosofía antigua', 4),
('Biología', 'Curso de biología general', 5),
('Química', 'Curso de química avanzada', 5),
('Economía', 'Curso de economía básica', 7),
('Marketing', 'Curso de marketing digital', 7),
('Literatura', 'Curso de literatura clásica', 6),
('Sociología', 'Curso de introducción a la sociología', 2),
('Arte', 'Curso de historia del arte', 6),
('Ingeniería Civil', 'Curso de introducción a la ingeniería civil', 3);

-- estudiantes
INSERT INTO estudiantes (nombres, apellidos, pais, curso_id, promedio, asistencias, departamento_id) VALUES
('Milim', 'Midorikawa', 'México', 1, 18.00, 95, 1),
('Jorge', 'Brows', 'EEUU', 2, 15.00, 98, 2),
('Utena', 'Hiiragi', 'Japón', 3, 18.00, 95, 3),
('Elza', 'Midorikawa', 'México', 1, 18.00, 95, 1),
('Jin', 'Kazama', 'Japón', 2, 16.50, 90, 2),
('Sara', 'OConnor', 'EEUU', 3, 17.75, 97, 3),
('Tina', 'Armstrong', 'México', 4, 19.50, 92, 4),
('Carlos', 'González', 'España', 5, 17.00, 90, 5),
('Laura', 'Martínez', 'Colombia', 6, 16.50, 88, 5),
('Pedro', 'Rodríguez', 'Chile', 7, 18.00, 92, 7),
('Ana', 'López', 'Argentina', 8, 19.00, 95, 7),
('Lucía', 'Fernández', 'Perú', 9, 15.50, 85, 6),
('Miguel', 'Hernández', 'México', 10, 16.75, 89, 2),
('María', 'García', 'Venezuela', 11, 18.25, 93, 6),
('Juan', 'Pérez', 'Uruguay', 12, 19.50, 97, 6),
('Jose', 'Santos', 'Brasil', 3, 17.75, 91, 3),
('Camila', 'Ramos', 'Ecuador', 3, 16.80, 90, 3),
('Andrés', 'Castillo', 'Paraguay', 1, 18.50, 94, 1),
('Valeria', 'Ruiz', 'Bolivia', 1, 1.60, 88, 1),
('Lucas', 'Mora', 'Costa Rica', 1, 16.90, 92, 1),
('Sofía', 'Ortiz', 'Panamá', 2, 18.40, 96, 2),
('Diego', 'Jiménez', 'Cuba', 3, 19.10, 95, 3),
('Daniel', 'Torres', 'Nicaragua', 4, 17.30, 89, 4),
('Martín', 'Rivera', 'Honduras', 5, 16.50, 90, 5),
('Clara', 'Vega', 'El Salvador', 6, 18.00, 94, 5),
('Adrián', 'Castro', 'Guatemala', 7, 19.00, 95, 7),
('Florencia', 'Ramírez', 'Puerto Rico', 8, 15.75, 87, 7),
('Marco', 'Gonzales', 'México', 1, 1, 95, 1);

-- maestros
INSERT INTO maestros (nombres, apellidos, curso_id, departamento_id) VALUES
('John', 'Doe', 1, 1),
('Jane', 'Smith', 2, 2),
('Alan', 'Turing', 3, 3),
('Marie', 'Curie', 1, 1),
('Laura', 'Johnson', 5, 5),
('Robert', 'Brown', 6, 5),
('Emily', 'Davis', 7, 7),
('James', 'Wilson', 8, 7),
('Sophia', 'Martínez', 9, 6),
('Daniel', 'Garcia', 10, 2),
('David', 'Lopez', 11, 6),
('Emma', 'Gonzalez', 12, 6),
('Oliver', 'Anderson', 13, 3),
('Liam', 'Thomas', 14, 3),
('Isabella', 'Taylor', 1, 1),
('Mia', 'Moore', 2, 2),
('Charlotte', 'Jackson', 3, 3),
('Amelia', 'White', 4, 1),
('Benjamin', 'Harris', 5, 5),
('Lucas', 'Martin', 6, 5),
('Henry', 'Thompson', 7, 7),
('Evelyn', 'Martinez', 8, 7),
('Aiden', 'Robinson', 9, 6),
('Ella', 'Clark', 10, 2);

`}
      />
      <main>
        <h1>Join</h1>
        <Conseptos texto={`Este operador se encarga de unir 2 o mas tablas, facilita hacer sub consultas.
Hay 5 Join que son principales y mas usados:`}/>
        <ol>
          <li>INNER Join</li>
          <li>LEFT Join</li>
          <li>RIGHT Join</li>
          <li>FULL Join</li>
          <li>CROSS Join</li>
        </ol>
        <h2>Base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"base de datos"}/>
        <h2>identificar</h2>
        <Conseptos texto={`Anteriormente en las subconsultas teniamos que poner el nombre completo de una tabla para poder acceder a la columna para relacionarlas:`}/>
        <MySql codigo={`SELECT 
  nombres,
  (
    SELECT curso FROM cursos
    WHERE estudiantes.curso_id = id
  )
FROM estudiantes`}/>
        <Txt codigo={`En especifico esta linea 

WHERE estudiantes.curso_id = id`}/>
        <Conseptos texto={`Como nos damos cuenta debemos poner estudiantes.curso_id, esto hace que el codigo sea menos legible pero podemos darle un alias/nombre temporal sin necesidad de usar la clausula "as".`}/>
        <MySql codigo={`SELECT 
  nombres,
  (
    SELECT curso FROM cursos
    WHERE e.curso_id = id
  ) curso

FROM estudiantes e`}/>
        <Conseptos texto={`En este caso a la tabla "estudiantes" le pusimos el alias "e" para no escribir el nombre largo de la tabla y sin necesidad de usar la clausula "as".`}/>
        <h2>INNER JOIN</h2>
        <Conseptos texto={`Con "inner join" vamos a relacionar tablas, nos facilita mucho el trabajo de andar haciendo subconsultas y hace el codigo mas legible y facil de entender.

Para entender mejor veamos las tablas como los "conjuntos" tema aprendido en matematicas, bueno INNER JOIN es la mescla entra la tabla "a" y "b".`}/>
        <ImagenLink tipo={"imagen"} imagen={"https://upload.wikimedia.org/wikipedia/commons/d/db/Intersecci%C3%B3n_entre_conjuntos.svg"} titulo={"imagen INNER JOIN"}/>
        <Sintaxis codigo={`SELECCIONAR * DE tabla1 t1
UNIR INTERNA tabla2 t2
EN t1.relacion_1 = t2.id`}/>
        <Conseptos texto={`Al usar INNER JOIN usamos la clausula "ON" para hacer la condicional que unira una tabla con otra.

Para este ejemplo:
La universidad desea saber el nombre del alumno y la carrera que esta estudiando.`}/>
        <MySql codigo={`SELECT nombres,curso FROM estudiantes e
INNER JOIN cursos c
ON e.curso_id = c.id`}/>
        <ImagenLink tipo={"imagen"} imagen={img8} titulo={"tablas relacionadas"}/>
        <h2>tabla nueva</h2>
        <Conseptos texto={`Para entender mejor el consepto de left join y right join vamos a crear una tabla.`}/>
        <MySql codigo={`CREATE TABLE "recompenzas" (
  "id"	INTEGER,
  "id_estudiante" INTEGER,
  "recompenza" TEXT,
  "curso_id" INTEGER,
  PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO recompenzas (id_estudiante,recompenza,curso_id) VALUES
(4,"pc para estudiar",2),
(8,"laptop para estudiar",7),
(9,"bonificacion de puntos en asignaturas",5),
(21,"beca para estudiar gratis",1),
(26,"pc para estudiar",8),
(27,"beca para estudiar gratis",3),
(9,"pc para estudiar",1)`}/>
        <h2>LEFT JOIN</h2>
        <Conseptos texto={`Esto es similar a "INNER JOIN" solo que toma todos los datos de la tabla "a" la cual esta en la izquierda y los mescla con los datos de la tabla "a" y "b".`}/>
        <ImagenLink tipo={"imagen"} imagen={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsCQq_EJUPjbKnoplQB6XBlZrazYrODCa-Q&s"} titulo={"left join"}/>
        <MySql codigo={`SELECT nombres,recompenza FROM estudiantes e
LEFT JOIN recompenzas r
on r.id_estudiante = e.idg`}/>
        <ImagenLink tipo={"imagen"} imagen={img9} titulo={"left join"}/>
        <Conseptos texto={`Nos damos cuenta que con "LEFT JOIN" esta poniendo todos los datos de la tabla estudiante osea la tabla "a" que esta a la inzquierda y esta poniendo solo los datos que coinciden de la tabla "b" y si no coinciden los datos le pone null.`}/>
        <h2>RIGHT JOIN</h2>
        <Conseptos texto={`Esto es igual que "LEFT JOIN" solo que para la derecha osea si esto fuera representado por los conjuntos se veria asi:`}/>
        <ImagenLink tipo={"imagen"} imagen={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhHPRcbVot6iuUPobDayFNRJFgZMUHiOUKw&s"} titulo={"rigt join"}/>
        <Conseptos texto={`SqlLite no permite usar "RIGHT JOIN" DE forma nativa pero podemos simular el comportamiento basandonos el codigo que se uso en "LEFT JOIN" solo que se invertiran la posision de los nombres.`}/>
        <MySql codigo={`-- simulando right join
SELECT nombres,recompenza FROM recompenzas r
LEFT JOIN estudiantes e
on r.id_estudiante = e.id`}/>
        <ImagenLink tipo={"imagen"} imagen={img10} titulo={"right join"}/>
        <Conseptos texto={`En este caso hicimos lo mismo que en right join pero cambiamos la posision de los nombres:
Nates:
estudiantes y despues recompenzas
ahora:
recompenzas y despues estudiantes`}/>
      </main>
      <Footer />
    </>
  );
}

export default JoinMySql;