import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Consola from "../../../../componentes/consola/consola"

// imagenes
import img1 from "../imgs/img1.png"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"
import img4 from "../imgs/img4.png"

export default function EnrruModulePy(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Podemos importar modulos desde cualquier ruta.`,
        "lenguage": "Python",
        "codigo": `import modulo1 # esto si esta en nuestro misma carpeta
import carpeta.modulo # esto si esta en nuestra misma carpeta pero
# el modulo se encuentra dentro de otra carpeta

import sys # importar modulo nativo de python para manejar rutas
sys.path.append("ruta") # agregar la ruta de nuestro modulo para acceder al modulo
import moduloExterno

# sys siempre devuelve una lista con diferentes listas, la ruta
# con nuestra ubicacion es la primera.`}]}/>
      <main>
        <h1>Enrrutamiento de modulos</h1>
        <Conseptos texto={`No siempre tenemos los modulos en la misma ruta que nuestro archivo principal como en este caso.`}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"Modulos"}/>
        <h2>archivo modulo</h2>
        <Python codigo={`def funcion1():
  print("imprimiendo funcion 1...")
def funcion2():
  print("imprimiendo funcion 2...")`}/>
        <h2>archivo principal</h2>
        <Python codigo={`import modulo
modulo.funcion1()`}/>
        <Conseptos texto={`Pero en caso de que el archivo modulo se mueva dentro de una carpeta no funcionara debido a que al momento de importar de esta manera.`}/>
        <Python codigo={`import modulo`}/>
        <Conseptos texto={`No encontrara el archivo .py que queremos usar como modulo y en consecuencia nos dara error.`}/>
        <h2>Modulo dentro de otro archivo</h2>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"Modulo en archivo"}/>
        <Conseptos texto={`En este caso creamos una carpeta llamada modulos y alli dentro tenemos nuestro archivo modulo, ahora para poder acceder a nuestro modulo debemos:`}/>
        <Sintaxis codigo={`importar nombreCarpeta.nombreArchivo
# primero ponemos el nombre de la carpeta
# luego ". y el nombre del archivo modulo"

# llamar a una funcion del modulo
nombreCarpeta.nombreArchivo.funcion()`}/>
        <Python codigo={`import modulos.modulo
# en este caso la carpeta se llama modulos
# y el archivo se llama modulo

modulos.modulo.funcion1()`}/>
        <h2>sys</h2>
        <Conseptos texto={`Con este modulo de python podremos optener nuestros modulos desde cualquier ruta donde este el modulo que queremos importar para usarlo.`}/>
        <h3>Ver todos los metodos de sys</h3>
        <Python codigo={`import sys
print(sys.builtin_module_names)`}/>
        <Conseptos texto={`Con esto veremos todos los metodos que tiene el modulo sys.`}/>
        <Conseptos texto={`Ahora tenemos este caso donde nuestro modulo esta en una carpeta atras de nuestra ubicacion.`}/>
        <ImagenLink tipo={"imagen"} imagen={img3} titulo={"modulos separados"}/>
        <Conseptos texto={`En este caso tenemos dos carpetas una donde iran los archivos principales y otro donde iran los modulos, pero para acceder a los modulos debemos retroceder una carpeta para recien acceder al modulo., esto se hace con el modulo sys

Para esto primero debemos tener la ruta del modulo con el metodo path.`}/>
        <Python codigo={`import sys
print(sys.path)`}/>
        <Consola codigo={`['C:\\Users\\user\\OneDrive\\Escritorio\\Desk\\python\\mains', 'c:\\Users\\user\\AppData\\Local\\Programs\\Python\\Python311\\python311.zip', 'c:\\Users\\user\\AppData\\Local\\Programs\\Python\\Python311\\Lib', 'c:\\Users\\user\\AppData\\Local\\Programs\\Python\\Python311\\DLLs', 'c:\\Users\\user\\AppData\\Local\\Programs\\Python\\Python311', 'c:\\Users\\user\\AppData\\Local\\Programs\\Python\\Python311\\Lib\\site-packages']`}/>
        <Conseptos texto={`Al usar este metodo recibimos una lista con distintas rutas, la que nos interesa es la primera ruta de la lista ya que es nuestra ubicacion actual.`}/>
        <h2>append</h2>
        <Conseptos texto={`Con este metodo vamos a agregar al arreglo nuestra ruta del modulo al que queremos acceder, en este caso debemos acceder a la carpeta de modulos, para eso copiamos la primer ruta y en vez de la carpeta "mains" accedemos a la carpeta modulos.`}/>
        <Python codigo={`import sys
# aqui pegar la primer ruta pero en vez de poner mains 
# ponemos modulos que es la carpeta a la que deseamos acceder
sys.path.append("C:\\Users\\user\\OneDrive\\Escritorio\\Desk\\python\\modulos")

# ahora que agregamos la ruta donde estan los modulos
# podemos importar el modulo deseado

import modulo

modulo.funcion1()`}/>
        <Conseptos texto={`Yba vez agregada nuestra ruta donde esta el modulo recien podemos importar nuestro modulo como siempre lo hacemos.`}/>
        <h2>Ejercicio</h2>
        <Conseptos texto={`Ahora vamos con un ejercicio para entender mejor el uso de los modulos, en este caso haremos una simple calculadora.`}/>
        <h3>Estructura</h3>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"estructura"}/>
        <Conseptos texto={`En este caso tenemos dos carpetas uno donde ira nuestro archivo principal y otro donde iran nuestros modulos.`}/>
        <h3>modulo 1 (operacions)</h3> 
        <Python codigo={`def suma(n1,n2):
  return int(n1) + int(n2)

def resta(n1,n2):
  return int(n1) - int(n2)

def multiplicacion(n1,n2):
  return int(n1) * int(n2)

def divicion(n1,n2):
  return int(n1) / int(n2)

def resto(n1,n2):
  return int(n1) % int(n2)`}/>
        <h3>modulo 2 (getNum)</h3>
        <Python codigo={`def getNumber(operacion):
    num1 = int(input(f"Dime el primer numero para {operacion} "))
    num2 = int(input(f"Dime el segundo numero para {operacion} "))
    return (num1,num2)`}/>
        <h3>archivo principal (main)</h3>
        <Python codigo={`import sys
sys.path.append("C:\\Users\\user\\OneDrive\\Escritorio\\Desk\\python\\modulos")
import operaciones
import getNum

operacion = int(input("¿Que operacion deseas hacer?: "))

if(operacion == 1):
    numeros = getNum.getNumber("sumar")
    resultado = operaciones.suma(numeros[0],numeros[1])
    print(f"El resultado de tu suma es {resultado}")
elif operacion == 2:
    numeros = getNum.getNumber("restar")
    resultado = operaciones.resta(numeros[0],numeros[1])
    print(f"El resultado de tu resta es {resultado}")
elif operacion == 3:
    numeros = getNum.getNumber("multiplicar")
    resultado = operaciones.multiplicacion(numeros[0],numeros[1])
    print(f"El resultado de tu multiplicacion es {resultado}")
elif operacion == 4:
    numeros = getNum.getNumber("dividir")
    resultado = operaciones.divicion(numeros[0],numeros[1])
    print(f"El resultado de tu divicion es {resultado}")
elif operacion == 5:
    numeros = getNum.getNumber("resto")
    resultado = operaciones.resto(numeros[0],numeros[1])
    print(f"El resultado de tu resto es {resultado}")
else:
    print("Opcion no valida.")`}/>
      </main>
      <Footer />
    </>
  )
}