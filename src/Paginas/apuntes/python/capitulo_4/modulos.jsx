import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes"

// imagenes
import img1 from "../imgs/img1.png";

export default function ModulosPy(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Con los modulos podremos usar funciones clases o cualquier otra cosa de un archivo a otro`,
        "lenguage": `Python`,
        "codigo": `import NameModulo1 # importar modulo
from NameModulo2 import Funcion2,Funcion3 # importar algo en especifico
import NameModulo3 as modulo3 # usar un alias para un modulo
from NameModule4 import Funcion1 as funcion # usar un alias en una funcion en especifico de un modulo. 

# uso de objetos de modulo
NameModulo.Funcion1() # usar una funcion importando todo el modulo
Funcion2() # usar una funcion especifica de un modulo`
      }]}/>
      <main>
        <h1>Modulos</h1>
        <Conseptos texto={`Python tiene modulos que nos sirven para conectar un archivo python con otro archivo python para moder mezclar una o varias funciones con otra, existen 3 tipos de modulos:`}/>
        <ol>
          <li><Conseptos texto={`Modulos propios: Estos modulos los creamos nosotros mismo, osea nostros podemos crear una o varias funciones que nos ayudaran a nosotros mismos en un programa.`}/></li>
          <li><Conseptos texto={`Modulos integrados: Estos modulos son nativos de python osea no es necesario que nosotros los creemos.`}/></li>
          <li><Conseptos texto={`modulos de terceros: Estos son modulos creados por otras personas y que nosotros podemos usar para crear proyectos mas eficientes sin necesidad de crear funciones desde 0.`}/></li>
        </ol>

        <h2>Modulos propios</h2>
        <Conseptos texto={`Para usar un modulo propio necesitamos tener dos archivos uno que sera el principal y otro donde crearemos nuestras funciones.`}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"Archivos"}/>
        <Conseptos texto={`En este caso Hemos creado un archivo llamado "main" que sera el principal y otro archivo llamado "modulo" que sera el modulo donde crearemos nuestras propias funciones para usarlas cuando queramos.`}/>
        <Sintaxis codigo={`# solo necesitamos importar el archivo que tendra nuestras funciones
importar nombreDelArcivo

# usar funciones de nuestro modulo importado
nombreDelArcivo.funcion1()
nombreDelArcivo.funcion2("paametros")`}/>
        <Python codigo={`import modulo`}/>
        <h3>Ejemplo</h3>
        <Conseptos texto={`Seguiremos el archivo main y modulo.`}/>
        <h3>archivo modulo</h3>
        <Python codigo={`def saludoEstatico():
  return "hola como te va"

def saludoDinamico(nombre):
  return f"hola {nombre} como te va"`}/>
        <h3>archivo main</h3>
        <Python codigo={`import modulo # en este caso el archivo se llama modulo, no es necesario poner la extencion ".py"

saludo1 = modulo.saludoEstatico()
saludo2 = modulo.saludoDinamico("Alex")
print(saludo1)
print(saludo2)`}/>
        <h2>Alisas</h2>
        <Conseptos texto={`Nosotros podemos renombrar un modulo en nuestro archivo principal, esto en caso de que el nombre del modulo sea demasiado largo y sea tedioso andar escribiendo ese nombre largo.`}/>
        <Python codigo={`import modulo as mod

saludo1 = mod.saludoEstatico()
saludo2 = mod.saludoDinamico("Alex")
print(saludo1)
print(saludo2)`}/>
        <Conseptos texto={`Como nos damos cuenta ya no usamos el nombre "modulo" para poder usar las funciones de ese modulo sino que solo ponemos "mod" para usar las funciones del modulo.`}/>
        <h2>Unica funcion</h2>
        <Conseptos texto={`Tambien podemos obtener solo una funcion especifica de un modulo.`}/>
        <Sintaxis codigo={`de nombreModulo importar nombreFuncion
# usar funcion
nombreFuncion()`}/>
        <Conseptos texto={`Como nos damos cuenta ahora podemos usar la funcion de forma directa si necesidad de llamarla como metodo modulo.funcion() sino que ahora se llama a la funcion directamente funcion().

Tambien podemos importar mas de una funcion en especifico, esto usando la , y el nombre de la otra funcion.`}/>
        <Sintaxis codigo={`de nombreModulo importar nombreFuncion1,nombreFuncion2`}/>
        <h3>Archivo principal(main)</h3>
        <Python codigo={`from modulo import saludoEstatico
print(saludoEstatico())`}/>
        <Python codigo={`from modulo import saludoEstatico,saludoDinamico
nombre = "Steve"
print(saludoDinamico(nombre))
print(saludoEstatico())`}/>
        <h3>Alias</h3>
        <Conseptos texto={`A cada funcion que importemos podemos ponerle un alias para poder acortar sus nombres o solo cambiarles el nombre y poder usarlos con esos nombres.`}/>
        <Python codigo={`from modulo import saludoEstatico as saludo1,saludoDinamico as saludo2
nombre = "Steve"
print(saludo2(nombre))
print(saludo1())`}/>
      </main>
      <Footer />
    </>
  )
}