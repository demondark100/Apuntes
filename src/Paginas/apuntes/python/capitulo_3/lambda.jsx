import Conseptos from "../../../../componentes/conseptos/conseptos";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function Lambda() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto crearemos funciones simples y mas legibles en una sola linea.`,
        lenguage: "Python",
        codigo: `sumar = lambda n1,n2:n1+n2
print(f"El resultado de tu suma es: {sumar(15,15)}")`
      }]}/>
      <main>
        <h1>funciones lambda</h1>
        <Conseptos texto={`Las funciones lambda sirven para hacer funciones cortas y de una sola linea, son muy utiles cuando queremos hacer una funcion simple pero queremos que el codigo sea mas legible.`}/>
        <Sintaxis codigo={`nombre_de_la_funcion = lambda parametros: # hacer funcion
print(nombre_de_la_funcion())`}/>
        <Conseptos texto={`Estas funciones retornan un valor por defecto osea que no es necesario usar la clausula return  al momento de trabajar con estas funciones.
En este caso vamos a hacer una funcion que multiplique dos numeros.`}/>
        <Python codigo={`multiplicar = lambda n1,n2: n1*n2
print(multiplicar(5,5))`}/>
        <Conseptos texto={`Como nos damos cuenta es facil de leer ua que esta en una sola linea de codigo, las funciones lambda son optimas para este tipo de casos evita que hagamos esto.`}/>
        <Python codigo={`def multiplicar(n1,n2):
  return n1 * n2
print(multiplicar(5,5))`}/>
        <Conseptos texto={`Nos ahorro una linea de codigo imnecesaria.`}/>
      </main>
    </>
  );
}

export default Lambda;