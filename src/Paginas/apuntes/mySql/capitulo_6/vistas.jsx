import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import ShowOptions from "../../../../componentes/showOptions/show";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img4 from "../capitulo_5/imgs/img4.png";
import img1 from "./imgs/img4.png";
import img2 from "./imgs/img5.png";

export default function VistasMySql(){
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto guardaremos una consulta para usarla cuantas veces queramos, al igual que los indices no es recomendable abusar de esta funcion.`,
        lenguage: `MySql`,
        codigo: `CREATE VIEW vista as   -- crear una vierw que guardara la consulta de abajo.
SELECT dato1,dato2 FROM tabla
WHERE promedio >= 18;

-- usar una vista
SELECT * FROM vista;

-- eliminar una vista
DROP VIEW mejores;    -- eliminar vista directamente 
DROP VIEW IF EXISTS mejores   -- verificar una vista pero verificando si existe o no`
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

-- recompenzas
INSERT INTO recompenzas (id_estudiante,recompenza,curso_id) VALUES
(4,"pc para estudiar",2),
(8,"laptop para estudiar",7),
(9,"bonificacion de puntos en asignaturas",5),
(21,"beca para estudiar gratis",1),
(26,"pc para estudiar",8),
(27,"beca para estudiar gratis",3),
(9,"pc para estudiar",1);`}
      />
      <main>
        <h1>Vistas</h1>
        <Conseptos texto={`Las vistas son tablas virtuales, estos pueden servir para trabajar con consultas muy complejas o grandes.
En este caso queremos solo los mejores alumnos.`}/>
        <h2>Base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"base de datos"}/>
        <Conseptos texto={`Bueno normalmente hariamos esto:`}/>
        <MySql codigo={`SELECT nombres,apellidos,promedio FROM estudiantes
WHERE promedio >= 18`}/>
        <Conseptos texto={`Genial funciona ¿Pero que tal si queremos volver a hacer esa misma consulta? tendriamos que reescribir ese mismo codigo y seria mas complicado, para eso estan las vistas, estos guardaran por asi decirlo esa consulta.`}/>
        <Sintaxis codigo={`CREAR VISTA nombre_de_vista as -- consulta`}/>
        <MySql codigo={`CREATE VIEW mejores as
SELECT nombres,apellidos,promedio FROM estudiantes
WHERE promedio >= 18`}/>
        <Conseptos texto={`Con esto ya creamos nuestra vista llamada "mejores".`}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"vierws"}/>
        <Conseptos texto={`Ahora cada que llamemos a "mejores" aparecera nuestra consulta relacionada con esa vista.`}/>
        <h2>Seleccionar una vista</h2>
        <MySql codigo={`SELECT * FROM mejores`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"tabla view"}/>
        <Conseptos texto={`Como nos damos cuenta volvio a hacer la consulta a la cual relacionamos esa vista.`}/>
        <h2>Dato curioso</h2>
        <Conseptos texto={`No es recomendable llamar a una vista con el nombre de una tabla principal debido a que sql dara prioridad a la vista y no a la tabla al momento de hacer consultas.`}/>
        <h2>Eliminar vista</h2>
        <Conseptos texto={`Para eliminar una vista se usa la clausula "DROP".`}/>
        <MySql codigo={`DROP VIEW mejores`}/>
        <h2>IF EXISTS</h2>
        <Conseptos texto={`Esto es otra forma de borrar una vista, esto consumira mas recursos debido a que verificara si la vista que deseamos eliminar existe o no cosa que no pasa solo con eliminarla directamente.`}/>
        <MySql codigo={`DROP VIEW IF EXISTS mejores`}/>
      </main>
      <Footer />
    </>
  )
}