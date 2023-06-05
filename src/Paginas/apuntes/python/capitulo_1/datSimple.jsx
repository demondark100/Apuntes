import Conseptos from "../../../../componentes/conseptos/conseptos";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import Consola from "../../../../componentes/consola/consola";

function DatSimplePy() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Datos simples</h1>
        <Conseptos texto={`python al igual que los conseptos basicos de progranacion tiene tipos de datos por ejemplo:
1. caracter
2. cadena de caracteres
3. numericos
4. flotantes`}/>
        <h2>print</h2>
        <Conseptos texto={`Antes de continuar debemos saber usar la funcion print , esta funcion nos sirve para mostrar nuestros resultados en la consola y para actualizar la consola debemos apretar f5 en el caso de que estemos en vscode , si estamos en la terminal de python se mostrara el resultado de forma automatica.`}/>
        <Sintaxis codigo={`print( que queremos mostrar en consola )`}/>
        <Python codigo={`print("hola mundo");
print(15);
print(false);
print(20.8);`}/>
        <h2>cadenas</h2>
        <Conseptos texto={`Este lenguaje tiene dos formas para escribir una cadena.`}/>
        <Python codigo={`"aqui la cadena"
"""aqui la otra forma de escribir la cadena"""`}/>
        <Conseptos texto={`La diferencia entre estos dos esque con "" no podemos escribir hacia abajo osea no podemos dar saltos en linea.
Pero con """ """ si podemos dar saltos en linea.`}/>
        <Python codigo={`print("de esta manera no se puede saltar lineas");
print("""de esta manera
si es posible saltar
las lineas ¿genial no?""");`}/>
        <h2>numeros</h2>
        <Conseptos texto={`Bueno en los datos numericos es lo mismo de siempre.`}/>
        <Python codigo={`print(15);
print(15.5);`}/>
        <h2>booleanos</h2>
        <Conseptos texto={`Los booleanos se representan por true y false al igual que la logica.`}/>
        <Python codigo={`print(true);
print(false);`}/>
        <Consola codigo={`true
false`}/>

      </main>
      <Footer/>
    </>
  );
}

export default DatSimplePy;