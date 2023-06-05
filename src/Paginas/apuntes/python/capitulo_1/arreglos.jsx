import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function ArreglosPy() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Datos Compuestos</h1>
        <Conseptos texto={`Estos son los arreglos solo que en este lenguaje hay distintos tipos de arreglos por asi decirlo.`}/>
        <Sintaxis codigo={`lista = ["valor","valor","valor"];
tupla = ("valor","valor","valor");
conjunto = {"valor","valor","valor"};
diccionario = {
  "identificador": "valor",
  "identificador": "valor"
}`}/>
        <Conseptos texto={`Como te habras dado cuenta en el pseudocodigo tenemos 3 formas de guardar los datos que se representan de esta manera.
[] , () , {}.

El comportamiento de las posisiones es igual al de la logica osea que empiezan desde 0`}/>
        <Python codigo={`lista = ["valor1","valor2"];
print(lista[0]);
tupla = ("valor1","valow2");
print(tupla[0]);
conjunto = {"valor1","valow2"};
print(tupla[0]);`}/>
        <Consola codigo={`"valor1"
"valor1"
"valor1"`}/>
        <h2>Listas</h2>
        <Conseptos texto={`Estos son los arreglos de toda la vida osea se pueden modificar y otras cosas.
Para entender mejor crearemos un arreglo y cambiaremos el valor de una posision del arreglo`}/>
        <Python codigo={`waifus = ["Mikasa","Akari","Uraraka","Megumin","Kirito","Mitsuri"];
waifus[4] = "Sumi";
print(waifus);`}/>
        <Consola codigo={`["Mikasa","Akari","Uraraka","Megumin","Sumi","Mitsuri"]`}/>
        <h2>Tupla</h2>
        <Conseptos texto={`Estos son demasiado similares a los arreglos/Listas pero estos no se pueden modificar de forma dinamica no puedes cambiar ningun valor si lo intentas habra error de sintaxis.`}/>
        <h3>error</h3>
        <Conseptos texto={`Esto nos dara error porque no podemos modificarlo al igual que un arrego.`}/>
        <Python codigo={`colores = ("rojo","blanco","verde","negro","azul");
colores[0] = "amarillo";
print(colores);`}/>
        <Consola codigo={`Syntax error:`}/>
        <h3>correcto</h3>
        <Python codigo={`juegos = ("Left 4 Dead","gta","half life","mobile legends","God of War");
print(juegos[0]);
print(juegos);`}/>
        <Consola codigo={`Left 4 Dead
("Left 4 Dead","gta","half life","mobile legends","God of War") `}/>
        <h2>Conjunto</h2>
        <Conseptos texto={`Un conjunto es un tipo de datos de colección desordenada que es iterable, mutable y no tiene elementos duplicados.`}/>
        <Python codigo={`frutas = {"manzana","pera","durazno","naranja","uva"};
print(frutas[3]);
print(frutas);`}/>
        <Consola codigo={`naranja
{"manzana","pera","durazno","naranja","uva"}`}/>
        <h2>Diccionario</h2>
        <Conseptos texto={`De esta manera podremos guardar datos de una forma mas dinamica ahora un ejemplo del como usar el diccionario.`}/>
        <h3>crear diccionario</h3>
        <Sintaxis codigo={`variable = {
  "identificador": "valor",
  "identificador": "valor"
}`}/>
        <h3>llamar diccionario</h3>
        <Sintaxis codigo={`variable["identificador"]`}/>
        <Python codigo={`waifu = {
  "nombre": "Akame",
  "edad": 18,
  "estatura": 1.65,
  "rol": "asesina",
  "cabello": "negro"
};

print(waifu["nombre"]);
print(waifu["edad"]);
print(waifu["estatura"]);
print(waifu["rol"]);
print(waifu["cabello"]);`}/>
        <Consola codigo={`Akame
18
1.65
asesina
negro`}/>

      </main>
      <Footer/>
    </>
  );
}

export default ArreglosPy;