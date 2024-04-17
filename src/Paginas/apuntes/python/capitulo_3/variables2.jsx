import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function Variables2Py() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora veremos cosas extra de las variables.`,
        "lenguage": "Python",
        "codigo": `colores = ("negro","rojo","verde");
color_1,color_2,color_3 = colores; # destructurar cada dato y guardar en variables distintas.
nombres = "Maryn","Itsuki" # encapsular tuplas`
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
      </main>
      <Footer/>
    </>
  );
}

export default Variables2Py;