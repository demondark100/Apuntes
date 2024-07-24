import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Python from "../../../../componentes/lenguajes/Python";
import Consola from "../../../../componentes/consola/consola";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";

function BuclesPython() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Los bucles sirven para ejecutar una linea de codigo varias veces y para recorrer arreglos, tuplas, conjuntos, strings y diccionarios.`,
        lenguage: "Python",
        codigo: `frutas = ["manzana","pera","naranja","sandia","durazno"]
numeros = [10,5,8,24,15]
diccionario = {
  "dato1": "valor1",
  "dato2": "valor2",
  "dato3": "valor3"
}

for fruta in frutas: # recorrer un arreglo
  print(fruta) 

for fruta,precio in zip(frutas,numeros): # recorrer dos arreglos
  print(f"fruta: {fruta} precio: {precio}")
  
# especificar cuantas veces se ejecutara un bloque de codigo
# o tambien de donde iniciara un recorrido y en donde finalizara.
for num in range(5): # o tambien range(3,6)
  print(num)

for fruta in enumerate(frutas): # obtener indice y valor de una lista
  print(f"indice: {fruta[0]} valor: {fruta[1]}")

for fruta in frutas:
  print(fruta)
else: # ejecutar un bloque de codigo cuando el bucle termine.
  print("bucle finalizado")

for dato in diccionario: # recorrer diccionario solo con clave.
  print(dato)

for dato in diccionario.items(): # recorrer diccionario con clave y valor.
  print(f"clave: {dato[0]} valor: {dato[1]}")

for fruta in frutas:
  if fruta == "naranja":
    continue # continuar un recorrido sin un elemento en especifico.

for fruta in frutas:
  if fruta == "sandia":
    break # detener un bucle en algun punto en especifico

doble = [x*2 for numero in numeros] # hacer operacion sensillan en una sola linea.`}]}/>
      <main>
        <h1>Bucles</h1>
        <Conseptos texto={`Python tiene una sintaxis muy sensilla para recorrer bucles, sino se entiene algo es recomendable ir al apartado de logica de programacion para entender como funciona un bucle.

Python facilita mucho recorrer bucles debido a que a diferencia de otros lenguajes este no necesita crear la variables luego compararla y luego incrementarla sino que usa una forma mas sensilla y legible que otros lenguajes con el "for in".`}/>
        <Python codigo={`frutas = ["manzana","pera","naranja","sandia","durazno"]
for fruta in frutas:
  print(fruta)`}/>
        <Consola codigo={`manzana
pera
naranja
sandia
durazno`}/>
        <h2>Recorrer dos arreglos</h2>
        <Conseptos texto={`Tambien podemos recorrer dos arreglos al mismo tiempo, es una sintaxis similar a la anterior pero se le agrega la funcion "zup".`}/>
        <Sintaxis codigo={`arreglo1 = ["dato1","dato2"]
arreglo2 = ["dato1","dato2"]
    # crear     | # arreglos que 
    # variables | # deseamos
    # para usar | # recorrer
    # en el      
    # bucle.      
for arr1,arr2 in zip(arreglo1,arreglo2):
  print(arr1)
  print(arr2)`}/>
        <Conseptos texto={`Los 2 arreglos que se vayan a recorrer deben de tener la misma cantidad de longitud/cantidad de datos, en caso de no se asi seguira funcionando pero solo recorrer hasta la longitud mas menor de ambos arreglos.`}/>
        <Python codigo={`frutas = ["manzana","pera","naranja","sandia","durazno"]
precios = [15,12,13,11,14]
for fruta,precio in zip(frutas,precios):
  print(f"fruta: {fruta}")
  print(f"precio: {precio}")`}/>
        <Consola codigo={`fruta: manzana
precio: 15
fruta: pera
precio: 12
fruta: naranja
precio: 13
fruta: sandia
precio: 11
fruta: durazno
precio: 14`}/>
        <h2>range</h2>
        <Conseptos texto={`Con la funcion "range" tambien haremos recorridos para cualquier tipo de elementos.
En este caso queremos contar hasta el 5.`}/>
        <Python codigo={`for num in range(5):
  print(num + 1)`}/>
        <Consola codigo={`1
2
3
4
5`}/>
        <Conseptos texto={`Si pasamos 2 parametros a "range" recorrera desde el primer parametro hata el segundo parametro por ejemplo "range(4,9)" en este caso contara desde el numero 4 hasta el numero 9.`}/>
        <Python codigo={`for num in range(4,9):
  print(num)`}/>
        <Consola codigo={`4
5
6
7
8`}/>
        <Conseptos texto={`La funcion "range()" inicia su conteo desde el numero 0 por eso en el ejemplo 1 hice que el numero se sume "+1".`}/>
        <h2>enumerate</h2>
        <Conseptos texto={`Con esta funcion vamos a tener el indice y el valor de una lista/arreglo puestos en una tupla.`}/>
        <Python codigo={`numeros = [24,15,74,15,35]
for num in enumerate(numeros):
  print(num)`}/>
        <Consola codigo={`(0, 24)
(1, 15)
(2, 74)
(3, 15)
(4, 35)`}/>
        <Conseptos texto={`Como nos damos cuenta nos devuelve una tupla con el indice y el valor recorriendo cada valor del arreglo.
En este caso si deseamos obtener el indice de un arreglo o tambien el valor es tan simple como esto:`}/>
        <Python codigo={`numeros = [24,15,74,15,35]
for num in enumerate(numeros):
  print(f"""Este es el indice: {num[0]}
Este es el valor: {num[1]}""")`}/>
        <Consola codigo={`Este es el indice: 0
Este es el valor: 24
Este es el indice: 1
Este es el valor: 15
Este es el indice: 2
Este es el valor: 74
Este es el indice: 3
Este es el valor: 15
Este es el indice: 4
Este es el valor: 35`}/>
        <h2>else</h2>
        <Conseptos texto={`Esto es similar a las condicionales, el bloque de codigo que este dentro de "else" se ejecutara siempre.`}/>
        <Python codigo={`numeros = [124,48,14,74]
for num in numeros:
  print(f"El numero es: {num}")
else:
  print("El bucle a finalizado")`}/>
        <Consola codigo={`El numero es: 124
El numero es: 48
El numero es: 14
El numero es: 74
El bucle a finalizado`}/>
        <Conseptos texto={`la sentencia "else" en los bucles se ejecutaran por mas que el arreglo no tenga datos.`}/>
        <Python codigo={`numeros = []
for num in numeros:
  print(f"El numero es: {num}")
else:
  print("El bucle a finalizado")`}/>
        <Consola codigo={`El bucle a finalizado`}/>
        <h2>Recorrer diccionarios</h2>
        <Conseptos texto={`Tambien podemos recorrer diccionarios usando los bucles for.`}/>
        <Python codigo={`diccionario = {
  "dato1": "valor1",
  "dato2": "valor2",
  "dato3": "valor3"
}

for dato in diccionario:
  print(dato)`}/>
        <Consola codigo={`dato1
dato2
dato3`}/>
        <Conseptos texto={`En este caso al recorrer el diccionario nos da como resultado todos los valores claves del diccionario que estamos recorriendo, tenemos una forma de recorrer los valores de los diccionarios esto con la funcion "items()":`}/>
        <Python codigo={`diccionario = {
  "dato1": "valor1",
  "dato2": "valor2",
  "dato3": "valor3"
}

for dato in diccionario.items():
  print(dato)`}/>
        <Consola codigo={`('dato1', 'valor1')
('dato2', 'valor2')
('dato3', 'valor3')`}/>
        <Conseptos texto={`Como nos damos cuenta ahora recorrera el diccionario devolviendonos en tuplas la clave y el valor de cada elemento, ahora para acceder elemento del diccionario es tan sensillo como esto:`}/>
        <Python codigo={`diccionario = {
  "dato1": "valor1",
  "dato2": "valor2",
  "dato3": "valor3"
}

for dato in diccionario.items():
  print(f"""clave: {dato[0]}
valor: {dato[1]}""")`}/>
        <Consola codigo={`clave: dato1
valor: valor1
clave: dato2
valor: valor2
clave: dato3
valor: valor3`}/>
        <h2>continue</h2>
        <Conseptos texto={`Con la clausula "continue" vamos a saltar un dato de un arreglo y continuar recorriendo el arreglo por ejemplo en este arreglo.`}/>
        <Sintaxis codigo={`# em este caso no queremos mostrar "dato4",
# con continue es posible esto.
arr = ["dato1","dato2","dato3","dato4","dato5","dato6"]
       # show    show   show    hide     show   show
                              # no se
                              # muestra`}/>
        <Conseptos texto={`En este caso vamos a usar videojuegos y uno de esos yo no he jugado asi que no lo mostrare.`}/>
        <Python codigo={`juegos = ["left 4 dead","gta5","resident evil","minecraft","mobile legends"]

# no mostrar el juego
print("""
quitar el juego que no jugue
----------------------------------""")
for juego in juegos:
  if juego == "resident evil":
    continue
  print(f"he jugado: {juego}")

# con mensaje
print("""
mostrar el juego que no jugue
-----------------------------------""")
for juego in juegos:
  if juego == "resident evil":
    print(f"pero aun no he jugado: {juego}")
    continue
  print(f"he jugado: {juego}") `}/>
        <Consola codigo={`quitar el juego que no jugue
----------------------------------
he jugado: left 4 dead
he jugado: gta5
he jugado: minecraft
he jugado: mobile legends

mostrar el juego que no jugue
-----------------------------------
he jugado: left 4 dead
he jugado: gta5
pero aun no he jugado: resident evil
he jugado: minecraft
he jugado: mobile legends`}/>
        <Conseptos texto={`Como nos damos cuenta "continue" hizo que el bucle se recorra que que obvie el dato "resident evil", pero tambien podemos mostrar el dato que "continue" ha obviado.`}/>
        <h2>break</h2>
        <Conseptos texto={`Con esta sentencia vamos a detener un bucle cuando nosotros queramos, esto tambien evita que "else" en el bucle no se ejecute.`}/>
        <Python codigo={`frutas = ["naranja","piña","mandarina","fresa","durazno","granadilla"]
for fruta in frutas:
  if(fruta == "fresa"):
    print(f"He comido {fruta} y ya no puedo comer mas.")
    break
  print(f"He comido {fruta}")
else:
  print("bucle terminado")`}/>
        <Consola codigo={`He comido naranja
He comido piña
He comido mandarina
He comido fresa y ya no puedo comer mas.`}/>
        <Conseptos texto={`Como nos damos cuenta ignoro la centensia else por completo, esto debido a que terminamos de recorrer el bucle antes de tiempo.`}/>
        <h2>bucle en una linea</h2>
        <Conseptos texto={`Tambien podemos recorrer un arreglo y hacer una operacion en una sola linea cosa que hace que el codigo sea legible, pero su uso es ocacional osea que no siempre se usa, pero si es recomendable usar en algunos casos.`}/>
        <Python codigo={`numeros = [10,5,8,24,15]
numerosDuplicados = [x*2 for x in numeros]
print(numerosDuplicados)`}/>
        <Conseptos texto={`numeros = [10,5,8,24,15]

numerosDuplicados = [x*2 for x in numeros]
print(numerosDuplicados)`}/>
        <Consola codigo={`[20, 10, 16, 48, 30]`}/>
        <Conseptos texto={`En este caso "x" sera la variable que recorrera todo el bucle, en este caso se hara una operacion muy sensilla que sera duplicar cada numero del arreglo, asi que x se ira multiplicando "*2" para lograr ese resultado.`}/>
      </main>
      <Footer />
    </>
  );
}

export default BuclesPython;