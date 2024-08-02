import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Csv from "../../../../componentes/lenguajes/Csv";
import Python from "../../../../componentes/lenguajes/Python";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis"

export default function CsvFilePy() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Podemos trabajar con los datos que hay en un archivo.csv.`,
        "lenguage": "Python",
        "codigo": `# instalacion de csv
# py -m ensurepip --upgrade   # actualizar pip
# py -m pip install pandas    # instalar el modulo pandas

# uso del modulo
import csv      # importar modulo
df = pd.read_csv("archivo.csv")   # leer archivo csv
renombrar = pd.read_csv("archivo.csv",names=["name","lastname","age"])    # renombrar una columna
print(renombrar["name"])    # acceder a una columna
ordenar1 = df.sort_values("columna")    # ordenar de forma asendente
ordenar2 = df.sort_values("columna",ascending=False)    # ordenar de forma desendente.
juntar = pd.concat([ordenar1,ordenar2])   # juntar los datos de dos tablas.
filasInicio = df.head(2)  # mostrar una cantidad de filas desde el inicio
filasFinal = df.tail(2)   # mostrar una cantidad de filas desde el final
longitud = df.shape   # mostrar la longitud de filas y columnas
estadistica = df.describe()   # ver la estaditica de una tabla
obtener1 = df.loc[2,"columna"]    # acceder a un dato en especifico
obtener2 = df.iloc[2,0]   # acceder a un dato en especifico con solo indices de fila y columna
columna = df.iloc[:,0]    # acceder a una columna
fila = df.iloc[0,:]   # acceder a una fila
condicion = df.loc[df["edad"]>20,:]   # obtener un dato a travez de una condicion
topoCadena = df["columna"].astype(str)    # cambiar el tipo de dato de una columna a string
tipoNumero = df["columna"].astype(int)    # cambiar el tipo de dato de una columna a entero
df["columna"].replace("antiguo","nuevo",inplace=True)   # reemplazar uno o varios datos de una columna
faltaFila df.dropna()   # eliminar filas con datos faltantes
faltaColumna = df.dropna(axis=1)   # eliminar columnas con datos faltantes
sinDuplicados = df.drop_duplicates()   # eliminar filas con datos duplicados
df.to_csv("nombreArchivo.csv")   # crear nuevo archivo.csv modificado`}]}/>
      <main>
        <h1>archivo csv</h1>
        <Conseptos texto={`Antes que nada vamos a necesitar un modulo de terceros para poder trabajar con archivos csv de forma profesional.`}/>
        <h2>modulo pandas</h2>
        <Conseptos texto={`Antes de continuar debemos instalar pandas, abriendo la terminal con cmd o buscamos power shell mientras sea windows, dentro de la terminal debemos de ejecutar:`}/>
        <Terminal codigo={`py -m ensurepip --upgrade`}/>
        <Terminal codigo={`py -m pip install pandas`}/>
        <Conseptos texto={`Listo ahora si podemos importar el modulo "pandas"`}/>
        <Python codigo={`import padas as pd
# normalmente se suele poner un aleas al modulo que seria "pd"`}/>
        <h2>Archivo csv</h2>
        <Conseptos texto={`Los archivos csv sirven para guardar datos e intercambiarlos entre aplicaciones, asi es como se ve realmente una hoja de calculo de excel.`}/>
        <Python codigo={`"nombre","apellido","edad"
"Marco","Bot",17
"Vanessa","Melrromarc",22
"Patricio","Perez", 24`}/>
        <h2>read_csv</h2>
        <Conseptos texto={`Con esta funcion vamos a leer un archivo csv.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
print(df)`}/>
        <Consola codigo={`     nombre    apellido  edad
0     Marco         Bot    17
1   Vanessa  Melrromarc    22
2  Patricio       Perez    24`}/>
        <Conseptos texto={`En este caso nosotros llamamos a la variable "df" porque son las siglas de "data frame".`}/>
        <Conseptos texto={`Podemos acceder a una columna de la tabla indicando a que columna deseamos acceder en este caso vamos a acceder a los nombres.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
print(df["nombre"])`}/>
        <Consola codigo={`0       Marco
1     Vanessa
2    Patricio
Name: nombre, dtype: object`}/>
        <h2>renombrar columnas</h2>
        <Conseptos texto={`Tambien podemos renombrar las columnas por si los nombres que vienen en las tablas son muy largos u otras razones.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv",names=["name","lastname","age"])
print(df["name"])`}/>
        <Consola codigo={`0      nombre
1       Marco
2     Vanessa
3    Patricio
Name: name, dtype: object`}/>
        <h2>sort_values</h2>
        <Conseptos texto={`Con esta funcion vamos a poder ordenar los datos segun la columna que pasemos, funciona igual que el metodo sort de los arreglos solo que lo hace con los datos de un archivo csv en este caso vamos a ordenar los datos usando las edades poniendo de menor a mayor osea de forma asendente.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
ordenar = df.sort_values("edad")
print(ordenar)`}/>
        <Conseptos texto={`Tambien podemos configurar los datos para que se ordenen de forma desendente osea de mayor a menor, esto agregando el parametro "ascending", este parametro viene por defecto con true que hace que se ordene de forma asendente pero si le ponemos false ordena de forma desendente.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
ordenar = df.sort_values("edad",ascending=False)
print(ordenar)`}/>
        <h2>concat</h2>
        <Conseptos texto={`Con esta funcion vamos a unir dos registros(tablas) por ejemplo vamos a unir la tabla que esta ordenada con la tabla que viene por defecto.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
ordenar = df.sort_values("edad",ascending=False)
juntar = pd.concat([df,ordenar])
print(juntar)`}/>
        <Consola codigo={`     nombre    apellido  edad
0     Marco         Bot    17
1   Vanessa  Melrromarc    22
2  Patricio       Perez    24
2  Patricio       Perez    24
1   Vanessa  Melrromarc    22
0     Marco         Bot    17`}/>
        <h2>head</h2>
        <Conseptos texto={`Con esto vamos a obtener los datos de las filas que indiquemos por ejemplo si queremos tener solo la primer fila ponemos 1 si queremos las dos primeras filas ponemos 2 y asi sucesivamente, nosotros vamos a indicar que fila deseamos obtener.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
fila = df.head(2)
print(fila)`}/>
        <Consola codigo={`    nombre    apellido  edad
0    Marco         Bot    17
1  Vanessa  Melrromarc    22`}/>
        <h2>tail</h2>
        <Conseptos texto={`Esto es similar que head solo que empezara a mostrar desde la ultima fila que seria lo contrario de head que inicia desde la primer fila.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
fila = df.tail(2)
print(fila)`}/>
        <Consola codigo={`     nombre    apellido  edad
1   Vanessa  Melrromarc    22
2  Patricio       Perez    24`}/>
        <h2>shape</h2>
        <Conseptos texto={`Con esta funcion vamos a tener la cantidad de filas y columnas que tiene una tabla.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
longitud = df.shape
print(longitud)`}/>
        <Consola codigo={`(3, 3)`}/>
        <Conseptos texto={`El primer valor muestra la cantidad de filas que tiene la tabla y el segundo dato muestra la cantidad de columnas que tiene la tabla.`}/>
        <h2>describe</h2>
        <Conseptos texto={`Con esta funcion vamos a tener las estadisticas de una tabla en este caso tomara los datos numericos de la columna edad y nos mostrara una estaditica como el minimo, el maximo, etc.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
estadistica = df.describe()
print(estadistica)`}/>
        <Consola codigo={`            edad
count   3.000000
mean   21.000000
std     3.605551
min    17.000000
25%    19.500000
50%    22.000000
75%    23.000000
max    24.000000`}/>
        <h2>loc</h2>
        <Conseptos texto={`Con esta funcion vamos a obtener un dato en especifico de nuestra tabla para este ejemplo vamos a acceder al nombre "Vanessa".`}/>
        <Sintaxis codigo={`variable = df.loc[indice de la fila,"nombre de la columna"]
variable = df.loc[1,"edad"]`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
obtener = df.loc[1,"nombre"]
print(obtener)`}/>
        <Consola codigo={`Vanessa`}/>
        <Conseptos texto={`En este caso le ponemos 1 porque las filas de una tabla inician desde 0 como un arreglo.`}/>
        <h2>iloc</h2>
        <Conseptos texto={`Esto es muy similar a loc solo que accederemos a un dato en especifico usando solo los indices, para este ejemplo tambien accederemos al nombre "Vanessa".`}/>
        <Sintaxis codigo={`variable = df.iloc[indice de la fila,indice de la columna]`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
obtener = df.iloc[1,0]
print(obtener)`} />
        <Consola codigo={`Vanessa`}/>
        <h2>Una columna</h2>
        <Conseptos texto={`Nosotros podemos acceder a todos los datos de una columna usando slicing junto con iloc para poder recorrer toda la fila y especificar en que columna hacer el recorrido,`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
columna = df.iloc[:,0]
print(columna)`}/>
        <Consola codigo={`0       Marco
1     Vanessa
2    Patricio
Name: nombre, dtype: object`}/>
        <h2>Una fila</h2>
        <Conseptos texto={`Tambien podemos acceder a una fila en especifico, esto tambien usando slicing para recorrer toda la fila y luego indicar que columna recorrer.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
obtener = df.iloc[0,:]
print(obtener)`}/>
        <Consola codigo={`nombre      Marco
apellido      Bot
edad           17
Name: 0, dtype: object`}/>
        <h2>Condicionales</h2>
        <Conseptos texto={`Con la funcion loc podemos hacer condicionales para obtener datos especificos que nosotros queramos en este caso vamos a hacer una validacion para obtener solo a los usuarios que tengan una edad mayor a 20.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
obtener = df.loc[df["edad"]>20,:]
print(obtener)`}/>
        <Consola codigo={`     nombre    apellido  edad
1   Vanessa  Melrromarc    22
2  Patricio       Perez    24`}/>
        <Conseptos texto={`Para entender esto recordemos que en el primer parametro de loc recorremos todas las filas asi que al recorrer todas las filas python se pregunta "edad" es mayor a 20 si es true devolveran los datos correspondientes.`}/>
        <h2>astype</h2>
        <Conseptos texto={`Nosotros podemos cambiar el tipo de dato de una columna entera.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")

normal = df["edad"]
cadena = df["edad"].astype(str)
volver = cadena.astype(int)

print(type(normal[0]))
print(type(cadena[0]))

print(type(volver[0]))`}/>
        <Consola codigo={`<class 'numpy.int64'>
<class 'str'>
<class 'numpy.int64'>`}/>
        <Conseptos texto={`Como nos damos cuenta hemos convertido toda la columna de edad a una cadena de texto y biseversa.`}/>
        <h2>replace</h2>
        <Conseptos texto={`Con esta funcion podemos reemplazar todos los datos de una columna por otro dato, por ejemplo digamos que tenemos en una columna 2 filas donde el nombre sea "Pepe" entonces con esta funcion reeplazariamos las dos filas con el nombre que nosotros deseemos.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")

df["nombre"].replace("Marco","Jean",inplace=True)
# primero va el dato que deseamos reemplazar y luego el dato que reemplazara.
# inplace=True es para que los cambios se implementen 

print(df["nombre"])`}/>
        <h2>dropna</h2>
        <Conseptos texto={`Con esta funcion vamos a eliminar a filas las cuales les falten algun.`}/>
        <Csv codigo={`"nombre","apellido","edad"
"Marco","Bot",17
"Vanessa","Melrromarc",22
"Patricio","Perez", 24
"Sistine"`}/>
        <Conseptos texto={`Como nos damos cuenta a la fila con la posision [3] le faltan dos datos que seria el apellido y la edad, dropna detectara eso y removera a la fila con la posision [3]`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")

print(df)
print("---------------")
df = df.dropna()
print(df)`}/>
        <Consola codigo={`     nombre    apellido  edad
0     Marco         Bot  17.0
1   Vanessa  Melrromarc  22.0
2  Patricio       Perez  24.0
3   Sistine         NaN   NaN
---------------
     nombre    apellido  edad
0     Marco         Bot  17.0
1   Vanessa  Melrromarc  22.0
2  Patricio       Perez  24.0`}/>
        <Conseptos texto={`Tambien podemos eliminar columnas las cuales tengan datos faltantes, esto seria con el parametro "axis=1".`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")

print(df)
print("---------------")
df = df.dropna(axis=1)
print(df)`}/>
        <Consola codigo={`     nombre    apellido  edad
0     Marco         Bot  17.0
1   Vanessa  Melrromarc  22.0
2  Patricio       Perez  24.0
3   Sistine         NaN   NaN
---------------
     nombre
0     Marco
1   Vanessa
2  Patricio
3   Sistine`}/>
        <h2>drop_duplicates</h2>
        <Conseptos texto={`Con esta funcion vamos a eliminar a las filas que sean duplicadas.`}/>
        <Csv codigo={`"nombre","apellido","edad"
"Marco","Bot",17
"Vanessa","Melrromarc",22
"Patricio","Perez", 24
"Vanessa","Melrromarc",22`}/>
        <Conseptos texto={`Como nos damos cuenta la fila de la posision [1] se esta duplicando, ahora vamos a remover la fila con la posision [3] para que no existan duplicados.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")

print(df)
print("---------------")
df = df.drop_duplicates()
print(df)`}/>
        <Consola codigo={`    nombre    apellido  edad
0     Marco         Bot    17
1   Vanessa  Melrromarc    22
2  Patricio       Perez    24
3   Vanessa  Melrromarc    22
---------------
     nombre    apellido  edad
0     Marco         Bot    17
1   Vanessa  Melrromarc    22
2  Patricio       Perez    24`}/>
        <h2>to_csv</h2>
        <Conseptos texto={`Con esta funcion podemos crear un nuevo "archivo.csv" que ya no tenga errores o que ya se ha procesado.`}/>
        <Conseptos texto={`Para este ejemplo tenemos un "archivo.csv" el cual tiene una fila duplicada, vamos a quitar el duplicado y vamos a guardar el archivo sin duplicado.`}/>
        <Sintaxis codigo={`variable.to_csv("ruta y nombre del nuevo archivo")`}/>
        <Csv codigo={`"nombre","apellido","edad"
"Marco","Bot",17
"Vanessa","Melrromarc",22
"Patricio","Perez", 24
"Vanessa","Melrromarc",22`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")

print(df)
print("---------------")
df = df.drop_duplicates()
print(df)

df.to_csv("limpio.csv")`}/>
        <Conseptos texto={`Ahora que quitamos el duplicado recien podemos guardar el arhivo csv sin las filas duplicadas, asi quedo el nuevo "archivo.csv".`}/>
        <Csv codigo={`,nombre,apellido,edad
0,Marco,Bot,17
1,Vanessa,Melrromarc,22
2,Patricio,Perez,24`}/>
      </main>
      <Footer />
    </>
  );
}