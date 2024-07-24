import Conseptos from "../../../../componentes/conseptos/conseptos";
import Python from "../../../../componentes/lenguajes/Python";
import Consola from "../../../../componentes/consola/consola";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Footer from "../../../../componentes/menus/Footer";

export default function FuncIntegradasPython(){
  return (
    <>
      <Resumenes contenido={[{
        mensaje: "Python tiene sus propias funciones que son muy utiles.",
        lenguage: "Python",
        codigo: `arreglo = [247,15,34,15]
min(arreglo) # encontrar el numero menor de un iterable.
max(arreglo) # encontrar el numero mayor de un iterable.
round(15.879) # redondear un numero decimal/flotante.
bool([]) # si algun dato esta vacio dira false de lo contrario true.
all(arreglo) # es igual a "bool" pero comprueba los iterables.
sum(arreglo) # suma todos los numeros de un iterable.`
      }]}/>
      <main>
        <h1>Funciones integradas</h1>
        <Conseptos texto={`Estas funciones ya vienen integradas con este lenguaje de programacion(python).`}/>
        <h2>min y max</h2>
        <Conseptos texto={`Con estas funciones encontraremos cual es el numero mas grande y cual es el numero mas pequeño en una lista.

min() Encontrar el numero mas pequeño.
max() Encontrar el numero mas grande.`}/>
        <Python codigo={`numeros = [15,24,5,87,34,187]
numeroMenor = min(numeros) # encontrar el numero menor.
numeroMayor = max(numeros) # encontrar el numero mayor.
print(f"""El numero menor es: {numeroMenor}
El numero mayor es: {numeroMayor}""")`}/>
        <Consola codigo={`El numero menor es: 5
El numero mayor es: 187`}/>
        <h2>round</h2>
        <Conseptos texto={`Con esta funcion famos a redondear numeros decimales.`}/>
        <Python codigo={`decimal = 15.757814
redondear = round(decimal)
print(f"Numero redondeado: {redondear}")`}/>
        <Consola codigo={`Numero redondeado: 16`}/>
        <h2>bool</h2>
        <Conseptos texto={`Con esta funcion vamos a saber si un dato es "false", un ejemplo de esto seria una string vacia (""), un arreglo vacio([]), una tupla vacia (()), un conjunto vacio ({}) , etc.`}/>
        <Python codigo={`arregloVacio = bool([])
tuplaVacia = bool(())
conjutoVacio = bool({})
valorNone = bool(None)
stringVacia = bool("")
numero0 = bool(0)
print(f"""si el arreglo es vacio devolvera: {arregloVacio}
si la tupla es vacia devolvera: {tuplaVacia}
si el conjuto es vacio devolvera: {conjutoVacio}
si el valor es none devolvera: {valorNone}
si la string es vacia devolvera: {stringVacia}
si el numero es 0 devolvera: {numero0}""")`}/>
        <Consola codigo={`si el arreglo es vacio devolvera: False
si la tupla es vacia devolvera: False
si el conjuto es vacio devolvera: False
si el valor es none devolvera: False
si la string es vacia devolvera: False
si el numero es 0 devolvera: False`}/>
        <Conseptos texto={`Ahora si los datos no llegan a estar vacios la funcion boul devolvera true.`}/>
        <Python codigo={`arreglo = bool([15,24])
tupla = bool((15,25))
conjunto = bool({15,57,78})
string = bool("cadena de texto")
numero = bool(25)

print(f"""si un arreglo tiene datos devolvera: {arreglo}
si una tupla tiene datos devolvera: {tupla}
si el conjunto tiene datos devolvera: {conjunto}
si una string tiene caracteres devolvera: {string}
si un numero es distinto de 0 devolvera: {numero}""")`}/>
        <Consola codigo={`si un arreglo tiene datos devolvera: True
si una tupla tiene datos devolvera: True
si el conjunto tiene datos devolvera: True
si una string tiene caracteres devolvera: True
si un numero es distinto de 0 devolvera: True`}/>
        <h2>all</h2>
        <Conseptos texto={`Esto es similar a "bool" solo que comprobara si todos los datos son true pero dentro de una lista,tupla,conjunto, si alguno de los datos llega a estar vacio o ser false tomara a todo el arreglo como false.`}/>
        <Python codigo={`arregloTrue = all(["string",127,["qwe","zxc"],("as","zxc")])
arregloFalse = all(["string",0,2478,["dato1","dato2"]])
print(f"""si el arreglo es tiene los datos que se condideran true devolvera: {arregloTrue}
si el arreglo tiene algun dato que se considere false devolvera false: {arregloFalse}""")`}/>
        <Consola codigo={`si el arreglo es tiene los datos que se condideran true devolvera: True
si el arreglo tiene algun dato que se considere false devolvera false: False`}/>
        <h2>sum</h2>
        <Conseptos texto={`Con esa funcion vamos a sumar todos los elementos de un iterable osea de una lista o conjunto o tupla.`}/>
        <Python codigo={`numeros = [24,18,35,48]
sumaTotal = sum(numeros)
print(f"el resultado de la suma del iterable es: {sumaTotal}")`}/>
        <Consola codigo={`el resultado de la suma del iterable es: 125`}/>
      </main>
      <Footer />
    </>
  )
}