import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import MySql from "../../../../componentes/lenguajes/MySql";
import ShowOptions from "../../../../componentes/showOptions/show";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";

// imagenes
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";
import img6 from "./imgs/img6.png";
import img7 from "./imgs/img7.png";

function SubConsultasMySql(){
  return (
    <>
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
        <h1>Sub consultas</h1>
        <Conseptos texto={`Con las sub consultas vamos a relacionar las tablas, una sub consulta el una consulta dentro de otra consulta.`}/>
        <h2>Base de datos</h2>
        <Conseptos texto={`Ahora vamos a crear mas de una tabla para relacionarlas, para eso he reducido los datos en la tabla principal "estudiantes" para poder entender mejor las otras tablas.`}/>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"base de datos"}/>
        <Conseptos texto={`Todas las tablas se relacionan de una u otra forma, la cuestion es que estan separadas en distintas tablas para que los datos sean mas legibles.

Esta es la forma de usar una subconsulta:`}/>
        <Sintaxis codigo={`SELECT 
  dato,
  (
    # Aqui la subconsulta.
    SELECT dato FROM tabla
    WHERE tabla.dato = dato
  )
  FROM tabla`}/>
        <h2>nombre y curso</h2>
        <Conseptos texto={`Por ejemplo digamos que la universidad desea obtener el nombre del estudiante y desea saber que curso esta tomando, solo quiere ver 4 estudiantes.`}/>
        <MySql codigo={`SELECT 
  nombres,
  (
    SELECT curso FROM cursos
    WHERE estudiantes.curso_id = id
  ) as curso
FROM estudiantes
LIMIT 4`}/>
        <ImagenLink tipo={"imagen"} imagen={img5} titulo={"nombre y curso"}/>
        <h3>Explicacion</h3>
        <ol>
          <li>Seleccionamos los nombres de los estudiante.</li>
          <li>Hacemos una subconsulta donde seleccionamos el curso de la tabla cursos.</li>
          <li>Validamos que la referencia del curso_id de la tabla estudiantes sea igual al id de la tabla cursos para saber que cursos esta tomando cada estudiante.</li>
        </ol>
        <h2>Ejercicio 2</h2>
        <Conseptos texto={`Excelente ahora hagamos algo mas complejo.
Para este ejemplo:
La universidad desea saber que curso tiene el promedio mas alto, tambien desea saber cuantos estudiantes estan en ese curso.`}/>
        <MySql codigo={`SELECT count(curso_id) as cantidadCursos,
(
  SELECT curso FROM cursos
  WHERE estudiantes.curso_id = id
) as cursos,
round(avg(promedio)) as promedio_total
FROM estudiantes
WHERE cursos IS NOT NULL
GROUP BY curso_id
ORDER by promedio_total DESC
LIMIT 1`}/>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"promedio alto"}/>
        <h2>Ejercicio 3</h2>
        <Conseptos texto={`La universidad desea saber cual es el alumno con la mejor asistencia pero con el promedio mas bajo para poder hacerle una prueba de recuperacion, se debe mostrar el nombre del alumno, su asistencia, promedio, curso, departamento de curso.`}/>
        <MySql codigo={`SELECT 
  nombres,
  max(asistencias) as asistencias,
  promedio,
  (
    SELECT curso FROM cursos
    WHERE estudiantes.curso_id = id
  ) as curso,
  (
    SELECT nombre FROM departamentos
    WHERE estudiantes.departamento_id  = id
  ) as departamento
FROM estudiantes
WHERE promedio = (
  SELECT min(promedio) as promedio
  FROM estudiantes
);`}/>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"promedio bajo"}/>
      </main>
      <Footer />
    </>
  )
}

export default SubConsultasMySql;