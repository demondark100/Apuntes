import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import ShowOptions from "../../../../componentes/showOptions/show";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Video from "../../../../componentes/videos/video";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img4 from "../capitulo_5/imgs/img4.png";
import MySql from "../../../../componentes/lenguajes/MySql";
import img5 from "./imgs/img5.mp4";
import img6 from "./imgs/img6.mp4";
import img7 from "./imgs/img7.mp4";


export default function BloqTansaccMySql(){
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Los bloqueos evitan problemas al momento de hacer cambios en las tablas, las transacciones son los cambios que se hacen en las tablas.`,
        lenguage: `MySql`,
        coedigo: `BEGIN TRANSACTION;  -- iniciar transaccion
UPDATE tabla SET columna1 = 'dato'
WHERE id = 27
COMMIT;  -- guardar los cambios
ROLLBACK;   -- volver a los cambios anteriores, no funcionara si ya se guardaron los cambios con "COOMIT"`
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
        <h1>Bloqueo y transacciones</h1>
        <Conseptos texto={`Los bloqueos t transacciones normalmente se trabajan con un lenguaje de programacion, pero para entender mejor los cambios se haran en sqlite.`}/>
        <h2>Base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"base de datos"}/>
        <h2>Bloqueos</h2>
        <Conseptos texto={`Los bloqueos no permiten que los usuarios no puedan hacer cambios en la base de datos al mismo tiempo. 
Por ejemplo:
Una cuenta bancaria la cual 2 personas tienen acceso, y las dos personas deciden depositar $50 al mismo tiempo, eso haria que la cuenta primero reste 50 y luego reste otro 50 t quedaria en numero negativo -50.
tenemos 3 tipos de bloqueo:`}/>
        <h3>Bloqueo compartido</h3>
        <Conseptos texto={`Estos solo permiten leer la base de datos pero no permite modificar la base de datos.`}/>
        <h3>Bloqueo reservado</h3>
        <Conseptos texto={`Estos si permiten modificar la base de datos pero no permite leer.`}/>
        <h3>Bloque exclusivo</h3>
        <Conseptos texto={`Este bloqueo no permite leer y tampoco modificar la base de datos.`}/>
        <h2>Transacciones</h2>
        <Conseptos texto={`Con las transacciones vamos a poder modificar las tablas y guardar esos cambios, con estos vamos a actualizar o eliminar algun dato en especifico.`}/>
        <h2>Hacer transacciones</h2>
        <Conseptos texto={`Con la clausula "BEGIN" podemos iniciar transacciones en nuestra base de datos, por ejemplo actualizar algun dato o eliminar algun dato.`}/>
        <Sintaxis codigo={`INICIAR TRANSACCION;
# que transaccion haremos
# guardar cambios o retroceder a los cambios`}/>
        <Conseptos texto={`En este caso vamos a actualizar el nombre del ultimo alumno y vamos a guardar ese cambio.`}/>
        <MySql codigo={`BEGIN TRANSACTION;
UPDATE estudiantes SET nombres = 'Eren'
WHERE id = 27
COMMIT;`}/>
        <Conseptos texto={`En este caso hemos hecho un cambio en la base de datos y lo hemos guardado, ahora explicaremos para que sirve COMMIT y ROLLBACK.`}/>
        <h2>COMMIT</h2>
        <Conseptos texto={`Esta clausula hace que cualquier cambio que hicimos en la base de datos se guarde de forma permanente y no se pueda recuperar los cambios antiguos que se hicieron en la base de datos.
En este caso modificaremos el nombre del estudiante con el id 27.`}/>
        <Video tipo={"gif"} video={img5}/>
        <Conseptos texto={`En este caso cambiamos el nombre del estudiante con el id 27 por Lucy.`}/>
        <h2>ROLLBACK</h2>
        <Conseptos texto={`Esta clausula puede recuperar cambios que hicimos anteriormente siempre y cuando no se hayan concretado los cambios con la clausula "COMMIT".
En este caso vamos a realizar un cambio, este cambiara el nombre del primer estudiante.`}/>
        <MySql codigo={`BEGIN TRANSACTION;
UPDATE estudiantes SET nombres = "Grey"
WHERE id = 1;`}/>
        <Video tipo={"video"} video={img6}/>
        <Conseptos texto={`Como nos damos cuenta hemos cambiado el nombre del primer estudiante por "Grey" pero tambien fijemonos que no pusimos la clausula "COMMIT" asi que aun no se han asentuado los cambios y podemos recuperar nuestra base de datos.`}/>
        <MySql codigo={`ROLLBACK;`}/>
        <Video tipo={"gif"} video={img7}/>
        <Conseptos texto={`Gracias a "ROLLBACK" recuperamos nuestro dato anterior, esto puede servir por ejemplo cuando se quiere depositar dinero a una cuenta pero despues el usuario se arrepiente y quiere que todo este como antes.`}/>
      </main>
      <Footer />
    </>
  )
}