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
      <Resumenes />
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
df = pd.reader_csv("archivo.csv")
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
        <Conseptos texto={`Con esta funcion vamos a poder ordenar los datos segun la columna que pasemos, funciona igual que el metodo sort de los arreglos solo que lo hace con los datos de un archivo csv en este caso vamos a ordenar los datos usando las edades poniendo de menor a mayor.`}/>
        <Python codigo={`import pandas as pd
df = pd.read_csv("archivo.csv")
ordenar = df.sort_values("edad")
print(ordenar)`}/>
      </main>
      <Footer />
    </>
  );
}