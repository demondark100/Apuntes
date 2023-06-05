import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function MetCadPy() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Metodos de cadenas</h1>
        <Conseptos texto={`Los metodos de cadena nos sirven mucho porque nos permite modificar o comprobar muchas cosas de los caracteres.
Ahora empecemos con los metodos.`}/>
        <h2>dir</h2>
        <Conseptos texto={`Primero tenemos dir que nos sirve para ver los metodos de una cadena , listas . etc esto se mostrara segun sea.`}/>
        <Sintaxis codigo={`dir(variable);

# dir reconocera de forma automatica que
# tipo de dato tiene la variable y segun
# eso nos mostrara los metodos correspondientes.`}/>
        <Python codigo={`cadena = "metodos";
# print(dir(cadena));

lista = ["cadena1","cadena2"];
# print(dir(lista));

diccionario = {
  "nombre": "diccionario",
  "funcion": "guardar datos",
  "metodos": "dir"
}

# print(dir(diccionario))`}/>
        
        <h2>upper y lower</h2>
        <Conseptos texto={`upper: pone todas las letras en mayuscula.
lower: pone todas las letras en minuscula.`}/>
        <Python codigo={`cambio_mayuscula = "esto cambiara a mayuscula";
cambio_minuscula = "ESTO CAMBIARA A MINUSCULA";

print(cambio_mayuscula.upper());
print(cambio_minuscula.lower());`}/>
        <Consola codigo={`ESTO CAMBIARA A MAYUSCULA
esto cambiara a minuscula`}/>
        <h2>capitalize</h2>
        <Conseptos texto={`Este metodo nos servira para cambiar la primera letra en mayuscula nada mas.`}/>
        <Python codigo={`letra_mayus = "emilia es buena waifu";
print(letra_mayus.capitalize());`}/>
        <Consola codigo={`Emilia es buena waifu`}/>
        <h2>find</h2>
        <Conseptos texto={`find recibe un parametro el cual es que caracter o caracteres queremos encontrar y si lo encuentra nos mostrara su posision y si no la encuentra nos mostrara "-1" indicando que no encontro lo que buscamos , el conteo de posisiones inicia desde cero.`}/>
        <Sintaxis codigo={`variable.find("que caracter o caracteres queremos buscar");`}/>
        <Python codigo={`inicio = "mira como inicia desde 0";
print(inicio.find("mira"));
print(inicio.find("m"));

encontro = "ahora a buscar posision cualquiera";
print(encontro.find("buscar"));
print(encontro.find("b"));

no_encontro = "no encontrara nada";
print(no_encontro.find("Sasha"));
print(no_encontro.find("z"));`}/>
        <Consola codigo={`0
0
8
8
-1
-1`}/>
        <h2>index</h2>
        <Conseptos texto={`Es lo mismo que find solo que si no encuentra la palabra que le indiquemos detendra la ejecucion del programa.`}/>
        <Python codigo={`encontro = "hola mundo";
print(encontro.index("a"));

no_encontro = "mundo";
# print(no_encontro.index("l"));`}/>
        <Consola codigo={`3`}/>
        <h2>isnumeric</h2>
        <Conseptos texto={`isnumeric detectara si una string tiene un numero por ejemplo "15" nos dira true porque la cadena es numerica sin embargo si esa cadena tiene "hola 15" dira false porque hay caracteres no solo un numero.`}/>
        <Python codigo={`numero = "15";
print(numero.isnumeric());

cadena_con_numero = "hola 15";
print(cadena_con_numero.isnumeric());`}/>
        <Consola codigo={`true
false`}/>
        <h2>isalpha</h2>
        <Conseptos texto={`Detectara que una string solo tenga caracteres de la "a" hasta la "z" si encuentra espacios o numeros o cualquier otra cosa que no sea parte del alfabeto dira false.`}/>
        <Python codigo={`alphanumerico = "holaMundo";
print(alphanumerico.isalpha());

falso_1 = "esto tiene espacios";
print(falso_1.isalpha());

falso_2 = "esto tien . dos . xd";
print(falso_2.isalpha());`}/>
        <Consola codigo={`true
false
false`}/>
        <h2>count</h2>
        <Conseptos texto={`Buscara cuantas coincidencias hay en una cadena en el parametro debemos indicar que palabra o caracter queremos saber cuantas coincidencias tiene.
En simples palabras la funcion se preguntara ¿cuantas "a" hay en esta cadena de texto?`}/>
        <Sintaxis codigo={`variable.count("palabra para saber cuantas coincidencias tiene");`}/>
        <Python codigo={`concidencias_1 = "la vida es para soñar en grande pero la vida es cruel";
print(concidencias_1.count("vida"));

concidencias_2 = "hola Maryn";
print(concidencias_2.count("a"));

sin_coincidir = "manos frias";
print(sin_coincidir.count("hielo"));`}/>
        <Consola codigo={`2
2
0`}/>
        <h2>len</h2>
        <Conseptos texto={`len nos mostrara la cantidad de caracteres que tiene una string este contara tambien los espacios en simples palabras nos dira la longitud de una cadena de texto.
Esta propiedad tiene dos formas de uso.`}/>
        <Sintaxis codigo={`sintaxis 1:
variable.__len__();

variable 2:
len(variable)`}/>
        <Python codigo={`forma_1 = "Ram y Rem son gemelas";
print(forma_1.__len__());

forma_2 = "Mitsuri es una pilar";
print(len(forma_2));`}/>
        <Consola codigo={`21
20`}/>
        <h2>startswith / endswith</h2>
        <Conseptos texto={`Estos dos metodos haran una busqueda y diran true o false true si encontro y false si no encontro.

1. startswith: dira si la letra o palabra que indiquemos esta al principio de la cadena de texto.
2. endswith: dira si la letra o palabra que indiquemos esta al final de la cadena de texto.`}/>
        <Sintaxis codigo={`variable.startswith("caracter o caracteres");

variable.endswith("caracter o caracteres");`}/>
        <Python codigo={`inicia_con_1 = "las papas son deliciosas";
inicia_con_2 = "las papas son deliciosas";
inicia_con_3 = "las papas son deliciosas";
print(inicia_con_1.startswith("las"));
print(inicia_con_2.startswith("l"));
print(inicia_con_3.startswith("el"));


finaliza_con_1 = "las waifus son lo mejor del anime";
finaliza_con_2 = "las waifus son lo mejor del anime";
finaliza_con_3 = "las waifus son lo mejor del anime";
print(finaliza_con_1.endswith("anime"));
print(finaliza_con_2.endswith("e"));
print(finaliza_con_3.endswith("manga"));`}/>
        <Consola codigo={`true
true
false
true
true
false`}/>
        <h2>replace</h2>
        <Conseptos texto={`Esta propiedad nos sirve para reemplazar un caractes o caracteres por otro este metodo recibe dos parametros.`}/>
        <Sintaxis codigo={`variable.replace(
  "palabra de la cadena que quieres reemplazar",
  "con que quieres reemplazar esa palabra"
);`}/>
        <Python codigo={`reemplazo_1 = "el mesa es negra";
reemplazo_2 = "lo mesa es negra";
reemplazo_3 = "la sillo es negra";

print(reemplazo_1.replace("el","la"));
print(reemplazo_2.replace("o","a"));
print(reemplazo_3.replace("sillo","silla"));`}/>
        <Consola codigo={`la mesa es negra
la mesa es negra
la silla es negra`}/>
        <h2>split</h2>
        <Conseptos texto={`Esto hara que las cadenas se separen y se conviertan en arreglos , en el parametro debemos poner cual de los caracteres queremos que haga la separacion.`}/>
        <Sintaxis codigo={`cadena = "hola mundo";
nuevo_arreglo = cadena.split(" ");

cadena = "hola,mundo";
nuevo_arreglo = cadena.split(",")`}/>
        <Python codigo={`cadena = "hola mundo";
nuevo_arreglo = cadena.split(" ");
print(nuevo_arreglo);`}/>
        <Consola codigo={`['hola', 'mundo']`}/>
      </main>
      <Footer/>
    </>
  );
}

export default MetCadPy;