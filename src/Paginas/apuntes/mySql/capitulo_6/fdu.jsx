import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import MySql from "../../../../componentes/lenguajes/MySql";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import ShowOptions from "../../../../componentes/showOptions/show";
import Consola from "../../../../componentes/consola/consola"
import Resumenes from "../../../../componentes/resumenes/resumenes"

// imagenes
import img4 from "../capitulo_5/imgs/img4.png";


export default function FduMySql(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a usar python para manejar sqlite3.`,
        "lenguage": "Python",
        "codigo": `import sqlite3   # importar funciones de sqlite3
import pandas as pd   # importar pandas para visulizar datos
quinto = lambda n:n*5   # funcion que usaremos en qlite

with sqlite3.connect("base.db") as base:    # conectar con nuestra base de datos
    base.create_function("quinto",1,quinto)   # crear una funcion para sql
    cursor = base.cursor()    # abrir cursor
    cursor.execute("""  
        SELECT promedio,quinto(promedio) FROM estudiantes
    """)    # hacer consultas a sql
    resultado = cursor.fetchall()   # usar el cursor para enviar la consulta
    df = pd.DataFrame(resultado)    # mostrar los datos de mejor forma
print(df)   # mostrar los datos`
      },{
        "mensaje": `Ahora aplicaremos lo mismo pero de forma optima`,
        "lenguage": `Python`,
        "codigo": `import sqlite3
import pandas as pd
triple = lambda x:x*3
with sqlite3.connect("base.db") as db:
    base.create_function("triple",1,triple)
    query = """SELECT * FROM estudiantes"""
    resultado = pd.read_sql_query(query,db)
print(resultado)`
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
        <h1>funciones definidas por el usuario</h1>
        <Conseptos texto={`Ahora vamos a conectar un lenguaje de programacion para poder definir funciones y usarlas en una base de datos relacional.
Para comprender mejor esto usaremos "Python" debido a que es un lenguaje muy facil de entender y de manipular.`}/>
        <h2>base de datos</h2>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"base de datos"}/>
        <Conseptos texto={`antes que nada ya debemos tener nuestra base de datos en una carpeta, en esa misma carpeta crearemos nuestro archivo python donde vamos a importar "sqlite3".`}/>
        <Python codigo={`import sqlite3`}/>
        <h2>connect</h2>
        <Conseptos texto={`Ahora vamos a conectar nuestra base de datos con python para poder trabajar con ella.`}/>
        <Sintaxis codigo={`variable = sqlite3.conectar("nombre.extencio")`}/>
        <Python codigo={`import sqlite3
base = sqlite3.connect("base.db")`}/>
        <h2>create_functiom</h2>
        <Conseptos texto={`Con esto vamos a pasarle a sqlite3 la funcion de python que nosotros creemos.`}/>
        <Sintaxis codigo={`base_conectada.crear_funcion("nombre de funcion",cantidad de parametro,funcion de python)`}/>
        <Conseptos texto={`Antes de conectarnos con la base debemos de crear nuestras funciones previamente, en este caso crearemos una funcion que multiplique por 5 algun numero que pasemos.`}/>
        <Python codigo={`import sqlite3

quinto = lambda n:n*5   # nuestra funcion

base = sqlite3.connect("base.db")   # conectar base de datos
base.create_function("quinto",1,quinto)`}/>
        <h2>Cursores</h2>
        <Conseptos texto={`Con los cursores vamos a devolver retornar datos cuando hagamos consultas a la base de datos.`}/>
        <Sintaxis codigo={`cursor.cursor()`}/>
        <Python codigo={`import sqlite3

quinto = lambda n:n*5
print(quinto(5))

base = sqlite3.connect("base.db")
base.create_function("quinto",1,quinto)

cursor = base.cursor()`}/>
        <h2>execute</h2>
        <Conseptos texto={`Con este metodo vamos a poner la consulta que queramos hacer a la base de datos.`}/>
        <Sintaxis codigo={`base.execute("""consultas a la base de datos""")`}/>
        <Python codigo={`import sqlite3

quinto = lambda n:n*5
print(quinto(5))

base = sqlite3.connect("base.db")
base.create_function("quinto",1,quinto)

cursor = base.cursor()

cursor.execute("""
    SELECT * FROM estudiantes
    WHERE id = 15 
""")`}/>
        <Conseptos texto={`Como nos damos cuenta dentro de execute podemos ejecutar codigo Sql y encima poder hacer validaciones como siempre, toda esta consulta se guardara en nuestro cursor el cual creamos anteriormente.`}/>
        <h2>fetchall</h2>
        <Conseptos texto={`Con esto vamos a hacer la consulta sql que le pasamos a execute, lo malo es que al mostrar el resultado de nuestra consulta nos mostrara la informacion desordenada osea una lista con varias tuplas donde esta nuestra informacion.`}/>
        <Python codigo={`import sqlite3
quinto = lambda n:n*5
print(quinto(5))
base = sqlite3.connect("base.db")
base.create_function("quinto",1,quinto)
cursor = base.cursor()
cursor.execute("""
    SELECT * FROM departamentos
""")
resultado = cursor.fetchall()
print(resultado)`}/>
        <Consola codigo={`[(1, 'Ciencias Exactas'), (2, 'Ciencias Sociales'), (3, 'Ingeniería'), (4, 'Humanidades'), (5, 'Ciencias de la Salud'), (6, 'Artes y Humanidades'), (7, 'Administración y Negocios')]`}/>
        <Conseptos texto={`Como nos damos cuenta la informacion nos la devuelve demasiado desordenada, para eso necesitamos de la libreria pandas, con esta libreria vamos a poder mostrar la informacion de forma mas ordenada y leguble, para mostrar de forma mas ordenada solo necesitamos la funcion "DataFrame" de la libreria pandas.`}/>
        <Python codigo={`import sqlite3
import pandas as pd
quinto = lambda n:n*5
base = sqlite3.connect("base.db")
base.create_function("quinto",1,quinto)
cursor = base.cursor()
cursor.execute("""
    SELECT * FROM departamentos
""")
resultado = cursor.fetchall()
df = pd.DataFrame(resultado)
print(df)`}/>
        <Consola codigo={`   0                          1
0  1           Ciencias Exactas
1  2          Ciencias Sociales
2  3                 Ingeniería
3  4                Humanidades
4  5       Ciencias de la Salud
5  6        Artes y Humanidades
6  7  Administración y Negocios`}/>
        <h2>crerrar consultas</h2>
        <Conseptos texto={`Despues de terminar nuestra consulta y haberlo procesado con nuestro cursor debemos de cerrar nuestra consulta a la base de datos tanto para la coneccion a la base de datos como a al cursor.`}/>
        <Python codigo={`import sqlite3
import pandas as pd
quinto = lambda n:n*5
base = sqlite3.connect("base.db")
base.create_function("quinto",1,quinto)
cursor = base.cursor()
cursor.execute("""
    SELECT * FROM departamentos
""")
resultado = cursor.fetchall()
df = pd.DataFrame(resultado)
print(df)
cursor.close()
base.close()`}/>
        <Conseptos texto={`close hace que una vez se termine la consulta la pc deje de consumir recursos de forma imnecesaria.`}/>
        <h2>commit</h2>
        <Conseptos texto={`Con este metodo vamos a asegurar que los cambios que hagamos en la consulta se apliquen en la base de datos.`}/>
        <h2>obtimizar</h2>
        <Conseptos texto={`Como nos damos cuenta tenemos que abrir y cerrar la consulta en un solo contexto, pero esto se puede obtimizar con la funcion with de python.`}/>
        <Python codigo={`import sqlite3
import pandas as pd
quinto = lambda n:n*5

with sqlite3.connect("base.db") as base:
    base.create_function("quinto",1,quinto)
    cursor = base.cursor()
    cursor.execute(""" 
        SELECT * FROM departamentos
    """)
    resultado = cursor.fetchall()
    df = pd.DataFrame(resultado)
print(df)`}/>
        <Conseptos texto={`Ahora ya no sera necesario usar close para poder cerrar la consulta y el codigo es mas legible`}/>
        <h2>Usar funcion</h2>
        <Conseptos texto={`Ahora vamos a usar la funcion que creamos en este caso "quuinto" y la vamos a implementar en nuestra base de datos.`}/>
        <Python codigo={`import sqlite3
import pandas as pd
quinto = lambda n:n*5

with sqlite3.connect("base.db") as base:
    base.create_function("quinto",1,quinto)
    cursor = base.cursor()
    cursor.execute(""" 
        SELECT promedio,quinto(promedio) FROM estudiantes
    """)
    resultado = cursor.fetchall()
    df = pd.DataFrame(resultado)
print(df)`}/>
        <Consola codigo={`        0      1
0   18.00  90.00
1   15.00  75.00
2   18.00  90.00
3   18.00  90.00
4   16.50  82.50
5   17.75  88.75
6   19.50  97.50
7   17.00  85.00
8   16.50  82.50
9   18.00  90.00
10  19.00  95.00
11  15.50  77.50
12  16.75  83.75
13  18.25  91.25
14  19.50  97.50
15  17.75  88.75
16  16.80  84.00
17  18.50  92.50
18   1.60   8.00
19  16.90  84.50
20  18.40  92.00
21  19.10  95.50
22  17.30  86.50
23  16.50  82.50
24  18.00  90.00
25  19.00  95.00
26  15.75  78.75
27   1.00   5.00`}/>
        <Conseptos texto={`En este caso estamos quintuplicando el promedio de todos los alumnos`}/>
        <h2>read_sql_query</h2>
        <Conseptos texto={`Con este metodo vamos a evitar varios procesos que se hacian con el cursor osea abrir el cursor poner la consulta a la db y enviar la consulta a la db.`}/>
        <h3>Antes</h3>
        <Python codigo={`cursor = base.cursor()    # abrir cursor
cursor.execute("""  
    SELECT promedio,quinto(promedio) FROM estudiantes
""")    # hacer consultas a sql
resultado = cursor.fetchall()   # usar el cursor para enviar la consulta`}/>
        <h3>Ahora</h3>
        <Conseptos texto={`Solo debemos pasar la consulta a la base de datos y lo demas lo hara por si mismo.`}/>
        <Sintaxis codigo={`pd.read_sql_query(consulta,coneccion a la db)`}/>
        <Python codigo={`import sqlite3
import pandas as pd

with sqlite3.connect("base.db") as db:
    query = """
        SELECT nombres,promedio FROM estuadiantes;
        LIMIT 10;
    """
    leer = pd.read_sql_query(query,db)`}/>
      </main>
      <Footer />
    </>
  )
}