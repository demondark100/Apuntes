import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Txt from "../../../../componentes/lenguajes/Txt";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";


// imagenes
import img8 from "../imgs/img8.png"

export default function TxtFilePy(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Podemos leer, agregar o reescribir archivos.txt con python.`,
        "lenguage": "Python",
        "codigo": `archivo = open("ruta",encoding="UTF-8") # abrir archivo con lectura universal
archivo.read() # leer todo el archivo
archivo.readline() # leer la primer linea del archivo
archivo.readline(7) # leer los primeros 7 caracteres de un archivo
archivo.readlines() # leer cada linea del archivo y devolver un arreglo con cada lines del archivo
archivo.close() # cerrar el proceso del archivo.`
      },{
        "mensaje": `Tenemos una forma mas optima de lograr esto sin necesidad de usar la clausula close y esto servira para sobrescribir un archivo o para agregar mas contenido a un archivo.`,
        "lenguage": "Python",
        "codigo": `# si el segundo parametro de open es "w" sobrescribiremos todo el archivo.txt 
with open("archivo.txt","w",encoding="UTF-8") as archivo:
    archivo.writelines([ # sobrescribir linea por linea del archivo
        "Esta es la primer lines\\n",
        "Esta es la segunda linea\\n"
        # con "\\n" decimos que deje un espacio en linea
    ])`
      },{
        "lenguage": "Python",
        "codigo": `# Si agregamos "a" en vez de "w" agregaremos mas contenido a u archivo.txt
with open("archivo.txt","a",encoding="UTF-8") as archivo:
    archivo.write("\\n")
    for i in range(5): archivo.write(f"Lines {i+1} escrita...\\n")`
      }]}/>
      <main>
        <h1>Archivos txt</h1>
        <Conseptos texto={`Ahora vamos a leer, manipular y escribir archivos txt con python, esto es una de las cosas mas comunes que se suele hacer.`}/>
        <Conseptos texto={`Primero vamos a crear nuestro archivo.txt en mi caso se llamara "archivo.txt".`}/>
        <ImagenLink tipo={"imagen"} imagen={img8} titulo={"Estructura"}/>
        <Txt codigo={`leyendo archivo con la extencion
.txt con la funcion open de python`}/>
        <h2>open</h2>
        <Conseptos texto={`Con esta funcion vamos a obtener el archivo txt que deseemos, este se debe de guardar dentro de una variable para acceder a sus metodos.`}/>
        <Sintaxis codigo={`variable = open("ruta.txt")
variable.metodo()`}/>
        <Python codigo={`archivo = open("archivo.txt")`}/>
        <h2>read</h2>
        <Conseptos texto={`Ahora vamos a leer el contenido de nuestro archivo.txt con el metodo read().`}/>
        <Python codigo={`archivo = open("archivo.txt")

print(archivo.read()) # leer contenido`}/>
        <Consola codigo={`leyendo archivo con la extencion
.txt con modulo de python`}/>
        <h2>encoding</h2>
        <Conseptos texto={`Con este parametro evitaremos que al momento de leer un archivo aparezcan caracteres inesperados, o evitara errores en los caracteres del archivo leido.`}/>
        <Python codigo={`archivo = open("archivo.txt",encoding="UTF-8")
# siempre usar "UTF-8" para leer bien los archivos.`}/>
        <h2>readline y readlines</h2>
        <Conseptos texto={`Con "readline" vamos a leer solo la primer linea de un archivo.txt`}/>
        <Conseptos texto={`Con "readlines" vamos a obtener un arreglo con cada linea del "archivo.txt".`}/>
        <h3>readline</h3>
        <Python codigo={`archivo = open("archivo.txt",encoding="UTF-8")
readFirstLine = archivo.readline()

print(readFirstLine)`}/>
        <Consola codigo={`leyendo archivo con la extencion`}/>
        <Conseptos texto={`A la funcion readline podemos pasarle un parametro, esto es para indicarle cuantos caracteres deseas que se muestren del "archivo.txt" en este caso indicare que se muestre la palabra "leyendo" que tiene una longitud de 7 caracteres.`}/>
        <Python codigo={`archivo = open("archivo.txt",encoding="UTF-8")
readWord = archivo.readline(7)

print(readWord)`}/>
        <Consola codigo={`leyendo`}/>
        <h3>readlines</h3>
        <Python codigo={`archivo = open("archivo.txt",encoding="UTF-8")
readLinesTxt = archivo.readlines()

print(readLinesTxt)`}/>
        <Python codigo={`['leyendo archivo con la extencion\n', '.txt con la funcion open de python']`}/>
        <h2>close</h2>
        <Conseptos texto={`Con esta funcion vamos a cerrar el proceso que hayamos hecho con nuestro "archivo.txt" y asi python sabra cuando termino un proceso para guardar la informacion correctamente.`}/>
        <Python codigo={`archivo = open("archivo.txt",encoding="UTF-8")
readWord = archivo.readlines()

print(readWord)

archivo.close()`}/>
        <h2>with open</h2>
        <Conseptos texto={`Con esto haremos el proceso de abrir y cerrar el proceso de lectura de nuestro "archivo.txt".`}/>
        <Sintaxis codigo={`con abrir("ruta",encodigo="UTF-8") como archivo:
    # proceso de lectura de archivo`}/>
        <Python codigo={`with open("archivo.txt",encoding="UTF-8") as archivo:
    leer = archivo.readlines()
    print(leer)`}/>
        <h3>Explicacion</h3>
        <ol>
          <li><Conseptos texto={`Abrimos el "archivo.txt" y le damos la lectura "UTF-8" como normalmente se hace solo que antes se le agrega la clausula with.`}/></li>
          <li>
            <Conseptos texto={`Asignamos un alias al archivo que abrimos con la clausula "as" para poder trabajar con el archivo que estamos abriendo.`}/>
          </li>
          <li>
            <Conseptos texto={`Por ultimo leemos el archivo como normalmente hacemos.`}/>
          </li>
        </ol>
        <h2>reescribir "archiv.txt"</h2>
        <Conseptos texto={`Ahora vamos a reescribir un archivo txt que tengamos, para esto debemos pasarle a la funcion "open" el parametro "w"(write) esto debe de ir como segundo parameto.`}/>
        <Python codigo={`with open("archivo.txt","w",encoding="UTF-8") as archivo:
`}/>
        <h2>writelines</h2>
        <Conseptos texto={`Con esta funcion vamos a abrir reescribir un "archivo.txt", esta funcion recibira un arreglo donde cada elemento del arreglo sera una linea, es necesario que en la funcion open se pase el parametro "w".`}/>
        <Python codigo={`with open("archivo.txt","w",encoding="UTF-8") as archivo:
    archivo.writelines([
        "Esto sera la primer linea\\n",
        "y esta sera la segunda linea"
    ])`}/>
        <Conseptos texto={`Con "\\n" le indicamos a python que hasta alli termina una linea y que siga en otra linea, es necesario que "\\n" se ponga al final de cada linea.`}/>
        <h2>Agregar</h2>
        <Conseptos texto={`Tambien podemos agregar mas contenido a un "archivo.txt" esto cambiando el segundo parametro de open poniendo la letra "a"(append) en vez de la letra "w"(write).`}/>
        <Python codigo={`with open("archivo.txt","a",encoding="UTF-8") as archivo:
`}/>
        <Conseptos texto={`Como nos damos cuenta el segundo parametro ahora lleva "a" de append y no la "w" de write.`}/>
        <Python codigo={`with open("archivo.txt","a",encoding="UTF-8") as archivo:
    archivo.write("\\n")
    for i in range(5): archivo.write(f"Lines {i+1} escrita...\\n")`}/>
        <Consola codigo={`Esto sera la primer linea
y esta sera la segunda linea
Lines 1 escrita...
Lines 2 escrita...
Lines 3 escrita...
Lines 4 escrita...
Lines 5 escrita...`}/>
      </main>
      <Footer />
    </>
  )
}