import Conseptos from "../../../../componentes/conseptos/conseptos";
import Csv from "../../../../componentes/lenguajes/Csv";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Python from "../../../../componentes/lenguajes/Python"
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis"

// imagenes
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";


function GraficosPy() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Tenemos una libreria que representa datos con distintos graficos, aqui veremos algunos, primero instalamos las librerias necesarias.`,
        "lenguage": "Terminal",
        "codigo": `pip install matplotlib`
      },
      {
        "lenguage": "Terminal",
        "codigo": `pip install seaborn`
      },
      {
        "lenguage": "Python",
        "codigo": `import pandas as pd               # archivo.csv
import matplotlib.pyplot as plt   # mostrar el grafico
import seaborn as sns             # poner datos en grafico

sns.lineplot(x="fechas",y="capitulos",data=df)  # crear un grafico lineal
plt.plot("04-15",8,"o")    # marcar un punto en un grafico
sns.barplot(x="fechas",y="capitulos",data=df)   # crear grafico de barras
sns.scatterplot(x="fechas",y="capitulos",data=df)   # crear grafico de dispercion
sns.boxplot(x="fechas",y="capitulos",data=df)   # crear un grafico de caja
plt.show()    # mostrar grafico`
      }]}/>
      <main>
        <h1>Graficos</h1>
        <Conseptos texto={`Ahora vamos a representar los datos con graficos, esto instalando 2 modulos que se encargan de crear graficos en base a los datos que brindemos.`}/>
        <Conseptos texto={`Para este ejemplo vamos a registrar cuantos capitulos de un anime o serie se ha visto en cada dia, esto se hara en un "archivo.csv".`}/>
        <Csv codigo={`"fechas","capitulos"
01-15,3
02-15,5
03-15,2
04-15,8
05-15,7
06-15,4
07-15,1`}/>
        <Conseptos texto={`Antes de iniciar debemos de importar los siguientes modulos.`} />
        <ol>
          <li><Conseptos texto={`matplotlib: Libreria para visualizar datos en un grafico.`}/></li>
          <li><Conseptos texto={`seaborn: Libreria para crear los graficos usando datos.`}/></li>
        </ol>
        <Conseptos texto={`Ahora debemos de instalar estos paquetes usando la terminal de tu preferencia.`}/>
        <Terminal codigo={`pip install matplotlib`}/>
        <Terminal codigo={`pip install seaborn`}/>
        <Conseptos texto={`Ahora vamos a importar los modulos y les asignaremos estos alias para trabajar de mejor manera.`}/>
        <Python codigo={`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns`}/>
        <Sintaxis codigo={`import pandas as pd               # archivo.csv
import matplotlib.pyplot as plt   # mostrar el grafico
import seaborn as sns             # poner datos en grafico

df = pd.read_csv("animes.csv")

# en la coordena x va la primer columna de un archivo csv
# en la coordenada y va la segunda columna de un archivo csv
# en el tercer parametro ira el archivo csv donde se sacaran los datos

sns.grafico(x="fechas",y="capitulos",data=df)


# con esto marcamos un punto en un lugar especifico del grafico,
# esto funciona en graficos de linea. 

plt.punto("04-15",8,"o")


# mostrar el grafico
plt.show()`}/>
        <h2>lineplot</h2>
        <Conseptos texto={`Con esto vamos a crear un grafico de lineas basandose en los datos de un "archivo.csv".`}/>
        <Python codigo={`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
df = pd.read_csv("animes.csv")
sns.lineplot(x="fechas",y="capitulos",data=df)
plt.plot("04-15",8,"o")
plt.show()`}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"grafico lineal"}/>
        <h2>barplot</h2>
        <Conseptos texto={`Con esto vamos a crear un grafico de barras.`}/>
        <Python codigo={`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("animes.csv")

sns.barplot(x="fechas",y="capitulos",data=df)
plt.show()`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"Grafico de barras"}/>
        <h2>scatterplot</h2>
        <Conseptos texto={`Con esta funcion vamos a crear un grafico de dispercion, muy usado en inteligencia artificial para preveer deciciones.`}/>
        <Python codigo={`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("animes.csv")

sns.scatterplot(x="fechas",y="capitulos",data=df)
plt.show()`}/>
        <ImagenLink tipo={"imagen"} imagen={img3} titulo={"grafico de dispercion"}/>
        <h2>boxplot</h2>
        <Conseptos texto={`Con esta funcion vamos a crear un grafico de cajas.`}/>
        <Python codigo={`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("animes.csv")

sns.boxplot(x="fechas",y="capitulos",data=df)
plt.show()`}/>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"grafico de cajas"}/>
      </main>
      <Footer />
    </>
  );
}

export default GraficosPy;