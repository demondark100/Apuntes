import Conseptos from "../../../../componentes/conseptos/conseptos"
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink"
import ShowOptions from "../../../../componentes/showOptions/show"
import Footer from "../../../../componentes/menus/Footer";
import MySql from "../../../../componentes/lenguajes/MySql";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Videos from "../../../../componentes/videos/video";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img4 from "../capitulo_5/imgs/img4.png";
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.mp4";
import img3 from "./imgs/img3.mp4";
import img4Here from "./imgs/img3.png";
import img5 from "./imgs/img4.mp4";


export default function IndicesMySql(){
  return(
    <>
      <Resumenes contenido={[{
        mensaje: `Con los indices guardaremos consultas que hacemos de forma repetida, estos ocupan espacio en el disco asi que no se debe abusar de los indices.`,
        lenguage: "MySql",
        codigo: `CREATE INDEX name ON tabla (columna);   -- crear indice en una columna con datos repetidos.
CREATE UNIQUE INDEX name2 ON tabla (columna);    -- crear indice en una columna con datos no repetidos.
DROP INDEX nombres;    -- eliminar un indice`
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
        <h1>Indices</h1>
        <Conseptos texto={`Los indices obtimizan el proceso de busqueda de los datos, hacen que las consultas sean mas rapidas y esto sirve cuando tenemos una base de datos enorme donde las consultas puedes tardar en finalizar.:`}/>
        <h2>Tenemos dos tipos de indice</h2>
        <ol>
          <li><Conseptos texto={`indices unicos: Estos son los indices primeraios osea los primary key, estos no permiten valores null, permiten que las busquedas de datos sean mas rapidas.`}/></li>
          <li><Conseptos texto={`indices no unicos: Estos si permiten valores null y permiten que varios datos se repitan en los indices.`}/></li>
        </ol>
        <h2>Base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"base de datos"}/>
        
        <h2>indices unicos</h2>
        <Conseptos texto={`Normalmente si queremos obtener un dato hacemos esto:`}/>
        <MySql codigo={`SELECT * FROM estudiantes
WHERE nombres = "Utena"`}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"consulta"}/>
        <Conseptos texto={`Como nos damos cuenta tarda 23ms porque esta recorriendo todas las filas y columnas para encontrar el dato que pedimos.
Ahora si creamos un indice en el campo nombres el tiempo de ejecucion sera menor.`}/>
        <Sintaxis codigo={`CREAR INDEX nombre_del_indice EN tabla (campo_donde_se_hara_el_indice)`}/>
        <MySql codigo={`CREATE INDEX names ON estudiantes (nombres)`}/>
        <Videos tipo={"video"} video={img2} />
        <Conseptos texto={`Como nos damos cuenta al ejecutar nbuevamente la consulta llega a tardar solo 19ms.`}/>
        <h2>No repetidos</h2>
        <Conseptos texto={`Con esto haremos que los indices solo tengan datos que no sean repetidos, por ejemplo en el primero y segundo nombre del usuario, para esto debemos usar la clausula "UNIQUE".`}/>
        <MySql codigo={`CREATE UNIQUE INDEX students ON estudiantes (nombres)`}/>
        <Conseptos texto={`Con esto el indice no permtira que dos nombres se repitan, pero de esta forma no es muy util, esto sera util en las convinaciones por ejemplo podemos no permitir que se agreguen los mismos nombres y apellidos pero si hacer una convinacion entre los nombres y apellidos, osea que pueden haber dos personas llamadas "Utena" pero no pueden repetirse sus apellidos, puede haber dos apellidos "Hiiragi" pero no se puede repetir el mismo nombre.
Para hacer esta convinacion solo debemos agregar una coma y poner los campos de la tabla que queremos hacer las convinaciones.`}/>
        <MySql codigo={`CREATE UNIQUE INDEX convinacion ON index (nombres,apellidos)`}/>
        <Conseptos texto={`Ahora que creamos un indice unico combinado intentaremos agregar otro estudiante con el nombre: "Utena" y el apellido: "Hiiragi".`}/>
        <MySql codigo={`INSERT INTO estudiantes (nombres,apellidos) VALUES
("Utena","Hiiragi")`}/>
        <Videos tipo={"gif"} video={img3}/>
        <Conseptos texto={`Como nos damos cuenta no nos deja agregar el mismo nombre y el mismo apellido de un estudiante, pero si ponemos el mismo nombre pero otro apellido si nos permitira agregar el dato.`}/>
        <MySql codigo={`INSERT INTO estudiantes (nombres,apellidos) VALUES
("Utena","Arago")`}/>
        <ImagenLink tipo={"imagen"} imagen={img4Here} titulo={"insercion de datos"}/>
        <Conseptos texto={`Ahora si nos deja agregar otro estudiante llamado "Utena" pero se diferencian en el apellido, esto funciona el biseversa osea que podemos poner el mismo apellido pero el nombre debe cambiar.`}/>
        <h2>Eliminar indices</h2>
        <Conseptos texto={`Los indices pueden obtimizar mucho las consultas pero estos pueden ocupar mucho espacio en el disco y a veces relentizar los procesos en vez de beneficiarnos, los indices deben de ser usados estrategicamente en campos donde sabemos que se haran muchas consultas y asi obtimizar mucho el proceso de las consultas.
Para eliminar un indice debemos usar la clausula "DROP".`}/>
        <Sintaxis codigo={`DROP INDICE nombre_del_indice`}/>
        <MySql codigo={`DROP INDEX nombres`}/>
        <Videos tipo={"gif"} video={img5}/>
        <Conseptos texto={`En este caso creamos un indice llamado "nombres" en el campo "nombres" de la tabla estudiantes, luego la eliminamos con exito con la clausula "DROP".`}/>
      </main>
      <Footer />
    </>
  )
}