import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";



export default function ExpRegularPy(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora veremos todas las expreciones regulares mas usadas.`,
        "lenguage": "Python",
        "codigo": `import re    # importar libreria para usar expreciones regulares
string = """Este texto tendra todo para esta prueba
por ejemplo saltos en linea,
espacios y tambien numeros
como el 12, el 248, el 6874, etc.

Esta cadena tiene simbolos especiales
como el %, el &, el #, etc.

Esto sin contar las mayusculas y los puntos
finales donde se buscaran los
funales en todas las lineas."""


re.search("texto",string)   # buscar una coincidencia 
re.findall("como",string)   # buscar una o mas coincidencias que devolveran un arreglo
re.findall("como",string,flags=re.IGNORECASE)   # ignorar si la cadena tiene mayusculas y minusculas
re.findall(r"\\expecion",string)   # usar expreciones regulares y buscar coincidencias
re.findall(r"\\d",string)   # buscar numeros en la cadena
re.findall(r"\\D",string)   # quitar numeros en la cadena
re.findall(r"\\w",string)   # quitar simbolos especiales
re.findall(r"\\W",string)   # obtener simbolos especiales
re.findall(r"\\s",string)    # buscar saltos en lunea y espacios
re.findall(r"\\S",string)    # quitar saltos en linea y espacios
re.findall(r"\\.",string)    # buscar puntos
re.findall(r"\\n",string)    # buscar los saltos en linea
re.findall(r"\\.\\n",string)   # usar un patron con expreciones regulares 
re.findall("^\\.",string,flags=re.M)   # considerar cada salto de linea como nueva linea
re.findall("^\\^Esto",string)   # buscar coinsidencia al principio
re.findall(".$",string)  # buscar el final en un texto
re.findall(r"\\d{4}s",string)    # buscar sierta cantidad de caracteres
re.findall(r"\\d{3,5}\\s",string)   # buscar sierta cantidad de caracteres con un minimo y un maximo de caracteres
re.findall(r"(Esto){1,4}",string)   # buscar una string y devolver todas las coinsidencias`
      }]}/>
      <main>
        <h1>Expreciones regulares</h1>
        <Conseptos texto={`Con las expreciones regulares podremos hacer muchas cosas con las cadenas de texto como por ejemplo buscar coincidencias, buscar cosas especificas, etc.`}/>
        <h2>re</h2>
        <Conseptos texto={`Antes de trabajar con expreciones regulares debemos de importar "re" que nos servira para trabajar con expreciones regulares.`}/>
        <Python codigo={`import re`}/>
        <h2>search</h2>
        <Conseptos texto={`Con este metodo vamos a buscar coincidencias en una cadena de texto.`}/>
        <Python codigo={`import re

texto = """Esto es una cadena de texto para probar codigo usando expreciones
regulares, este codigo sera util para saber como funcionan las expreciones
regulares, el codigo tambien muestra como se dejan espacios en linea.
Codigo python es compatible con las expreciones regulares."""

buscar = re.search("codigo",texto)
print(buscar)`}/>
        <Consola codigo={`<re.Match object; span=(40, 46), match='codigo'>`}/>
        <Conseptos texto={`En este caso buscara la palabra "codigo" en la variable que guarda la cadena de texto.`}/>
        <h2>findall</h2>
        <Conseptos texto={`Con este metodo vamos a buscar todas las coincidencias que hay en una cadena de texto y nos devolvera un arreglo donde se encontraran todas las coincidencias.`}/>
        <Python codigo={`import re

texto = """Esto es una cadena de texto para probar codigo usando expreciones
regulares, este codigo sera util para saber como funcionan las expreciones
regulares, el codigo tambien muestra como se dejan espacios en linea.
Codigo python es compatible con las expreciones regulares."""

buscarTodo = re.findall("codigo",texto)
print(buscarTodo)`}/>
        <Consola codigo={`['codigo', 'codigo', 'codigo']`}/>
        <Conseptos texto={`Tambien podemos ignorar si las coincidencias llevan mayusculas o no, esto con un parametro extra "flgs=IGNORECASE".`}/>
        <Python codigo={`import re

texto = """Esto es una cadena de texto para probar codigo usando expreciones
regulares, este codigo sera util para saber como funcionan las expreciones
regulares, el codigo tambien muestra como se dejan espacios en linea.
Codigo python es compatible con las expreciones regulares."""

buscarTodo = re.findall("codigo",texto,flags=re.IGNORECASE)
print(buscarTodo)`}/>
        <Consola codigo={`['codigo', 'codigo', 'codigo', 'Codigo']`}/>
        <h2>buscar numeros</h2>
        <Conseptos texto={`Ahora vamos a buscar numeros en una cadena de texto, si encuentra 1 o mas numeros creara un arreglo donde se almacenaran los numeros que se han encontrado en la cadena de texto.
Antes de continuar vamos a mezclar findall para buscar todas las coincidencias y para usar expreciones regulares cambiaremos las "f string"(f"cadena") por una "e"(r"exprecion regular")`}/>
        <Python codigo={`exprecion = r"exprecion regular"`}/>
        <Conseptos texto={`Para encontrar numeros en una cadena de texto debemos de usar la exprecion "\d" para indicar a python que busque numeros en la cadena de texto.`}/>
        <Python codigo={`import re

texto = """Ahora buscaremos numeros del 1 al 9, para esto se usara una exprecion regular."""

numbers = re.findall(r"\\d",texto)
print(numbers)`}/>
        <Consola codigo={`['1', '9']`}/>
        <h2>Evitar numeros</h2>
        <Conseptos texto={`Tambien podemos evitar que se encuentren numeros en una cadena de texto, esto tambien con la misma exprecion regular solo que en vez de la "\d" mayuscula usaremos una "\D" mayuscula.`}/>
        <Python codigo={`import re

texto = """Ahora buscaremos numeros del 1 al 9, para esto se usara una exprecion regular."""

numbers = re.findall(r"\\D",texto)
print(numbers)`}/>
        <Consola codigo={`['A', 'h', 'o', 'r', 'a', ' ', 'b', 'u', 's', 'c', 'a', 'r', 'e', 'm', 'o', 's', ' ', 'n', 'u', 'm', 'e', 'r', 'o', 's', ' ', 'd', 'e', 'l', ' ', ' ', 'a', 'l', ' ', ',', ' ', 'p', 'a', 'r', 'a', ' ', 'e', 's', 't', 'o', ' ', 's', 'e', ' ', 'u', 's', 'a', 'r', 'a', ' ', 'u', 'n', 'a', ' ', 'e', 'x', 'p', 
'r', 'e', 'c', 'i', 'o', 'n', ' ', 'r', 'e', 'g', 'u', 'l', 'a', 'r', '.']`}/>
        <h2>Alphanumericos</h2>
        <Conseptos texto={`Con esta exprecion regular vamos a obtener digitos entre la "a" a la "z" y tambien entre el "0" y  el "9", osea que con esto vamos a omitir los caracteres especiales como @,%,$,etc, esto cambiando la "d" por "w".
Un dato curioso es que python considera a "_" como un caracter alphanumerico y no como un caracter especial.`}/>
        <Python codigo={`import re

texto = "hola aqui no se permiten @&%/ solo caracteres alphanumericos"

numbers = re.findall(r"\\w",texto)
print(numbers)`} />
        <Consola codigo={`['h', 'o', 'l', 'a', 'a', 'q', 'u', 'i', 'n', 'o', 's', 'e', 'p', 'e', 'r', 'm', 'i', 't', 'e', 'n', 's', 'o', 'l', 'o', 'c', 'a', 'r', 'a', 'c', 't', 'e', 'r', 'e', 's', 'a', 'l', 'p', 'h', 'a', 'n', 'u', 'm', 'e', 'r', 'i', 'c', 'o', 's']`}/>
        <Conseptos texto={`Como nos damos cuenta omite los caracteres especiales pero si usamos la "w" pero mayuscula solo buscara los caracteres especiales.`}/>
        <Python codigo={`import re

texto = "hola aqui no se permiten @&%/ solo caracteres alphanumericos"

numbers = re.findall(r"\\W",texto)
print(numbers)`}/>
        <Consola codigo={`' ', ' ', ' ', ' ', ' ', '@', '&', '%', '/', ' ', ' ', ' ']`}/>
        <h2>saltos en linea</h2>
        <Conseptos texto={`Con esta exprecion regular vamos a hacer saltos en linea osea que el tento que usemos despues de "\n" se ira para abajo, esto es util si queremos dejar espacion en linea sin necesidad de usar """""".`}/>
        <Python codigo={`import re

texto = "Ahora vamos a hacer \\n saltos en linea \\n para escribir como solo dos \\n comillas."

print(texto)`}/>
        <Consola codigo={`Ahora vamos a hacer 
 saltos en linea
 para escribir como solo dos
 comillas.`}/>
        <h2>buscar espacios</h2>
        <Conseptos texto={`Con esta exprecion regular vamos a buscar los espacios " " y tambien los saltos en linea "\\n".`}/>
        <Python codigo={`import re

texto = "Ahora vamos a buscar los espacios y \\nlos saltos en linea."

saltos = re.findall(r"\\s",texto)
print(saltos)`}/>
        <Consola codigo={`[' ', ' ', ' ', ' ', ' ', ' ', ' ', '\\n', ' ', ' ', ' ']`}/>
        <Conseptos texto={`Ahora si usamos la "\S" mayuscula vamos a omitir todos los espacios en linea y tambien los saltos en linea.`}/>
        <Python codigo={`import re

texto = "Ahora vamos a buscar los espacios y \\nlos saltos en linea."

saltos = re.findall(r"\\S",texto)
print(saltos)`}/>
        <Consola codigo={`['A', 'h', 'o', 'r', 'a', 'v', 'a', 'm', 'o', 's', 'a', 'b', 'u', 's', 'c', 'a', 'r', 'l', 'o', 's', 'e', 's', 'p', 'a', 'c', 'i', 'o', 's', 'y', 'l', 'o', 's', 's', 'a', 'l', 't', 'o', 's', 'e', 'n', 'l', 'i', 'n', 'e', 'a', '.']`}/>
        <h2>saltos en linea</h2>
        <Conseptos texto={`Ahora vamos a buscar solo los saltos en linea para mostrarlos o solo omitirlos, si usamos "\." vamos a omitir los saltos en linea.`}/>
        <Python codigo={`import re

texto = "Es hora de buscar \\nlos saltos en linea para \\nomitirlos o mostrarlos."

saltos = re.findall(r"\\.",texto)
print(saltos)`}/>
        <Consola codigo={`['.']`}/>
        <Conseptos texto={`Per si dentro de findall usamos "\\n" buscaremos y mostraremos los espacios en linea.`}/>
        <Python codigo={`import re

texto = "Es hora de buscar \\nlos saltos en linea para \\nomitirlos o mostrarlos."

saltos = re.findall(r"\\n",texto)
print(saltos)`}/>
        <Consola codigo={`['\\n', '\\n']`}/>
        <h2>primer patron</h2>
        <Conseptos texto={`Ahora vamos a ver que pasa si mesclamos mas de una exprecion regular, en este caso vamos a usar un patron para encontrar en la cadena de texto estas caracteristicas.`}/>
        <ol>
          <li><Conseptos texto={`Que sea un numero.`}/></li>
          <li><Conseptos texto={`Que despues del numero busque un punto.`}/></li>
          <li><Conseptos texto={`Que despues del punto haya un espacio.`}/></li>
        </ol>
        <Python codigo={`import re 

texto = "Esto es una cadena para encontrar un patron 1234. Donde se buscara numero . y espacio."

patron = re.findall(r"\\d\\.\\s",texto)

print(patron)`}/>
        <Conseptos texto={`En este caso mesclamos 3 expreciones regulares para buscar el patron requerido que era un numero , un punto y un espacio.`}/>
        <h2>M</h2>
        <Conseptos texto={`Con este parametro vamos a indicar que cada salto de linea se tome como una linea nueva.`}/>
        <Python codigo={`newLine = re.findall(r"\esprecion regular",variable,flags=re.M)`}/>
        <h2>Inicio</h2>
        <Conseptos texto={`Ahora vamos a verificar con expreciones regulares si un texto coincide con el inicio de otra cadena de texto, esto normalmente funciona en conjuntos, para usar esta exprecion necesitamos de este simbolo " ^ ".`}/>
        <Python codigo={`import re
texto = "Esto es un texto."
inicioEncontro = re.findall("^Esto",texto)
inicioNoEncontro = re.findall("^hola",texto)
print(inicioEncontro)
print(inicioNoEncontro)`}/>
        <Consola codigo={`['Esto']
[]`}/>
        <Conseptos texto={`En este caso si el inicio si coinside nos devolver una lista con la cadena que encontro al inicio y si no lo encuentra simplemente devolvera un arreglo vacio.`}/>
        <Python codigo={`import re
texto = """Esto es un texto.
Esto es otro texto."""
inicio = re.findall("^Esto",texto,flags=re.M)
print(inicio)`}/>
        <Consola codigo={`['Esto', 'Esto']`}/>
        <Conseptos texto={`En este ejemplo devuelve 2 "Esto" debido a que encontro la palabra "Esto" al inicio de cada linea, recordemos que "re.M" hace que cada salto de linea se interprete como una linea nueva.`}/>
        <h2>final</h2>
        <Conseptos texto={`Tambien podemos buscar coincidencial al final de un teto, a esto tambien se le puede aplicar los saltos en linea para que busque el final en cada salto de linea.`}/>
        <Python codigo={`import re
texto = """Esto es un texto.
Esto es otro texto."""
inicio = re.findall(".$",texto)
print(inicio)`}/>
        <Consola codigo={`['.']`}/>
        <Conseptos texto={`En este caso al final de todo el texto si finaliza con un "." por eso nos devuelve un arreglo con el ".".`}/>
        <Python codigo={`import re
texto = """Esto es un texto.
Esto es otro texto."""
inicio = re.findall(".$",texto,flags=re.M)
print(inicio)
`}/>
        <Consola codigo={`['.', '.']`}/>
        <Conseptos texto={`En este caso tambien coincide debido a que al usar "re.M" considera cada salto de linea como una nueva linea asi que busca el final de cada linea.`}/>
        <h2>grupos</h2>
        <Conseptos texto={`Con esto vamos a buscar cuantos datos queremos tener en este caso vamos a buscar que hayan 4 digitos de un numero o mas, luego indicaremos que tengan un espacio para ser considerados.`}/>
        <Sintaxis codigo={`grupos = re.findall(r"\esprecion{cantidad}")`}/>
        <Python codigo={`import re
texto = """probando distintos numeros en esta cadena de texto
1278 se mostrara en el patron
1547897 tambien se mostrara
12 no se mostrar
14798+ no se mostrara
1478+ no se mostrara"""
grupos = re.findall(r"\\d{4}\s",texto)
print(grupos)`}/>
        <Consola codigo={`['1278 ', '7897 ']`}/>
        <Conseptos texto={`En este caso se estan mostrando solo los numeros que tengan 4 digitos o mas y que despues de eso tengan un espacio, en este caso solo 2 numeros cumplen con ese requisito.`}/>
        <Conseptos texto={`tambien podemos indicar un rango para la cantidad de digitos que queremos buscar.`}/>
        <Sintaxis codigo={`r"\\exprecion{minimo,maximo}"`}/>
        <Python codigo={`import re
texto = """probando distintos numeros en esta cadena de texto
1278 se mostrara en el patron
15478974189 tambien se mostrara
12 no se mostrar
14798+ no se mostrara
1478+ no se mostrara"""
grupos = re.findall(r"\\d{3,5}\\s",texto)
print(grupos)`}/>
        <Consola codigo={`['1278 ', '74189 ']`}/>
        <Conseptos texto={`Esto tambien se puede aplicar a las cadenas de texto por ejemplo si deseamos encontrar palabras en concreto o caracteres en concreto, en este ejemplo encontraremos ab.`}/>
        <Sintaxis codigo={`cadena = re.findall(r"(grupo de caracteres){rango minimo,rango maximo}")`}/>
        <Python codigo={`import re
texto = """buscando patrones en grupos
abc
abqw
abbbb
abcde
aaaab"""

grupo = re.findall(r"(ab){1,2}",texto)
print(grupo)`}/>
        <Consola codigo={`['ab', 'ab', 'ab', 'ab', 'ab']`}/>
        <Conseptos texto={`Dentro de los parentesis indicamos que cadenas deseamos encontrar, dentro de las llaves indicamos el minimo de caracteres y el maximo de caracteres para buscar.`}/>
      </main>
      <Footer />
    </>
  )
}