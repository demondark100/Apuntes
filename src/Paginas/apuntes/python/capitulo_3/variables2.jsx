import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Txt from "../../../../componentes/lenguajes/Txt";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function Variables2Py() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Aprendimos cosas que pueden ser utiles como desencapsular, crear tuplas sin "()", la teoria de conjuntos.`,
        lenguage: "Python",
        codigo: `# desencapsular.
colores = ("negro","rojo","verde")
color_1,color_2,color_3 = colores

# crear/encapsular tuplas
tupla1 = "dato1","dato2","dato3";
tupla2 = "dato1", # crear tupla con un solo dato.

# mesclar conjuntos
conjunto1 = frozenset({"dato1","dato2"}) # congelar conjunto para mesclarlo con otro
conjunto2 = {conjunto1,"dato3"} # mesclar el conjunto congelado

# conjuntos
firstSet = {1,2,3,4,5}
secondSet = {4,5}

secondSet.issubset(firstSet) # saber si un conjunto es subconjunto de otro
secondSet <= firstSet # otra forma de saber si es subconjunto
firstSet.issuperset(secondSet) # saber si es superconjunto
firstSet > secondSet # otra forma de saber si es superconjunto
secondSet.isdisjoint(firstSet) # saber si un conjunto es distinto de otro

#convertir
list(("dato1","dato2")) # convertir a arreglo
tuple(["dato1","dato2"]) # convertir a tupla
set(["dato1","dato2"]) # convertir a conjunto`
      }]}/>
      <main>
        <h1>variables 2.0 (la venganza)</h1>
        <Conseptos texto={`Nosotros podemos desencapsular las variables por ejemplo tenemos un arreglo , tupla , conjunto ahora veremos como hacerlo.`}/>
        <Sintaxis codigo={`arreglo = ["dato1","dato2","dato3"];

cantidad de variables separadas por "," = de donde queremos sacar el valor.

con cada variable que creamos le asignamos un valor del arreglo , lista , etc.`}/>
        <Conseptos texto={`Antes de continuar segun sea la cantidad de los elementos del arreglo debes crear las variable.`}/>
        <Python codigo={`colores = ("negro","rojo","verde");

color_1,color_2,color_3 = colores;

print(color_1);
print(color_2);
print(color_3);`}/>
        <Consola codigo={`negro
rojo
verde`}/>
          <h2>encapsular tuplas</h2>
          <Conseptos texto={`las tuplas son la forma mas obtima de guardar datos debido a que solo ocupan un espacio en memoria cosa que un arreglo no debido a que el arreglo ocupa 2 espacios en memoria , la tupla no se puede modificar es inmutable ahora que sabemos eso veamos como encapsular/crear tuplas sin parentesis.`}/>
          <Sintaxis codigo={`ejemplo1 = "cantidad de datos","siempre se deben separar por comas";

ejemplo2 = "si solo ponemos un dato debemos ponerle una coma al final de lo contrario solo sera una string";`}/>
        <Python codigo={`ejemplo1 = "dato1","dato2","dato3";
ejemplo2 = "dato1",

print(type(ejemplo1));
print(type(ejemplo2));`}/>
        <Consola codigo={`class 'tuple'
class 'tuple'`}/>
        <h2>Mesclar conjuntos</h2>
        <Conseptos texto={`Tenemos una forma de mezclar conjuntos esto con la funcion "frozenset".`}/>
        <Python codigo={`conjunto1 = frozenset({"dato1","dato2"})
conjunto2 = {conjunto1,"dato3"}
print(conjunto2)`}/>
        <Consola codigo={`{frozenset({'dato1', 'dato2'}), 'dato3'}`}/>
        <h2>subConjuntos</h2>
        <Conseptos texto={`Un subconjunto es agarrar datos de un conjunto y crear un conjunto aparte.`}/>
        <Txt codigo={` conjunto     subconjunto
-----------   ----------
| 1  2  3 |   |  2  4  |
| 4  5  6 |   |    8   |
| 7  8  9 |   ----------   
-----------`}/>
        <Python codigo={`conjunto1 = {1,2,3,4,5,6}
conjunto2 = {1,3}
print(conjunto2.issubset(conjunto1))`}/>
        <Consola codigo={`True`}/>
        <Conseptos texto={`"issubset" devuelve un dato booleano dependendiendo si un conjunto es subconjunto de otro en este caso es true porque "conjunto2" si es un subconjunto de "conjunto1" porque "conjunto2" tiene datos de "conjunto1" osea {1,3}.

Tambien podemos llegar a saber si un un conjunto es subconjunto de un conjunto esto se logra con el simbolo de menor o igual "<=".`}/>
        <Python codigo={`conjunto1 = {1,2,3,4,5,6}
conjunto2 = {1,3}
print(conjunto2 <= conjunto1)`}/>
        <Consola codigo={`True`}/>
        <h2>superConjunto</h2>
        <Conseptos texto={`Esto es similar a los subconjuntos solo que es desde otra perspectiva.`}/>
        <Txt codigo={`superconjunto    conjunto
-----------     ----------
| 1  2  3 |     |  2  4  |
| 4  5  6 |     |    8   |
| 7  8  9 |     ----------   
-----------`}/>
        <Python codigo={`conjunto1 = {1,2,3,4,5,6}
conjunto2 = {1,3}
print(conjunto1.issuperset(conjunto2))`}/>
        <Consola codigo={`True`}/>
        <Conseptos texto={`"issuperset" devolvera true o false, verifica si un conjunto es un superconjunto de otro conjunto, en este caso es "true" porque "conjunto1" tiene mas elementos que "conjunto2", pero no solo verfica eso sino que tambien verifica que "conjunto2" sea un subconjunto de "conjunto1" y de alli recien verfica si "conjunto1" es un superconjunto de "conjunto2".
Al igual que en subconjuntos tambien podemos verficar si un conjunto es un superconjunto de otro usando el simbolo de mayor ">".`}/>
        <Python codigo={`conjunto1 = {1,2,3,4,5,6}
conjunto2 = {1,3}
print(conjunto1 > conjunto2)`}/>
        <Consola codigo={`True`}/>
        <h2>distinto</h2>
        <Conseptos texto={`Con "isdisjoint" verificaremos si un conjunto es completamente distinto a otro conjunto, osea que si existe aunque sea un elemento que sea igaul al otro dira false pero si verifica que es distinto dira true.`}/>
        <Python codigo={`conjunto1 = {1,2,3,4,5,6}
conjunto2 = {25,14}
print(conjunto2.isdisjoint(conjunto1))`}/>
        <Consola codigo={`True`}/>
        <h2>Convercion</h2>
        <Conseptos texto={`Existen funciones para convertir un tipo de dato a otro por ejemplo convertir de arreglo a tupla o de tupla a arreglo o de conjunto a tupla, segun necesitemos.`}/>
        <Python codigo={`string = "string"
arreglo = ["arr1","arr2"]
tupla = ("tupla1","tupla2")
conjunto = {"conjunto1","conjunto2"}

# convertir a arreglo:
arr1 = list(string)
arr2 = list(tupla)
arr3 = list(conjunto)

# convertir a tupla:
tupla1 = tuple(string)
tupla2 = tuple(arreglo)
tupla3 = tuple(conjunto)

# convertir a conjunto
conjunto1 = set(string)
conjunto2 = set(arreglo)
conjunto3 = set(tupla)


print(f"""converciones a arreglo:
string:     {arr1}
tupla:      {arr2}
conjunto:   {arr3}

converciones a tupla:
string:     {tupla1}
arreglo:    {tupla2}
conjunto:   {tupla3}

converciones a conjunto:
string:     {conjunto1}
arreglo:    {conjunto2}
tupla:      {conjunto3}""")`}/>
        <Consola codigo={`converciones a arreglo:
string:     ['s', 't', 'r', 'i', 'n', 'g']
tupla:      ['tupla1', 'tupla2']
conjunto:   ['conjunto1', 'conjunto2']

converciones a tupla:
string:     ('s', 't', 'r', 'i', 'n', 'g')
arreglo:    ('arr1', 'arr2')
conjunto:   ('conjunto1', 'conjunto2')

converciones a conjunto:
string:     {'i', 'g', 'r', 's', 't', 'n'}
arreglo:    {'arr1', 'arr2'}
tupla:      {'tupla2', 'tupla1'}`}/>
      </main>
      <Footer/>
    </>
  );
}

export default Variables2Py;