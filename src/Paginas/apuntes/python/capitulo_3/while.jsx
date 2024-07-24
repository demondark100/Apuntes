import Conseptos from "../../../../componentes/conseptos/conseptos";
import Python from "../../../../componentes/lenguajes/Python";
import Consola from "../../../../componentes/consola/consola";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Footer from "../../../../componentes/menus/Footer";

function WhilePython() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Ejecuta un bucle de codigo mientras no se cumpla la condicion.`,
        lenguage: "Python",
        codigo: `num = 0
while num <= 5:
  print(num)
  num += 1`
      }]}/>
      <main>
        <h1>bucle while</h1>
        <Conseptos texto={`Un bucle whole es parecido al bucle for, la diferencia es que el bucle "while" necesita de una condicional para seguir ejecutando un bloque de codigo.`}/>
        <Python codigo={`numero = 1
while numero <= 5:
  print(f"contando: {numero}")
  numero += 1`}/>
        <Consola codigo={`contando: 1
contando: 2
contando: 3
contando: 4
contando: 5`}/>
        <Conseptos texto={`Ahora vamos a explicar paso a paso este codigo, si se llega a entender esto sera facil entender todo.`}/>
        <Python codigo={`numero = 1 # variable que sera contada y fundamental para la condicional.
while numero <= 5: # condicion que ejecutara el bloque de codigo hata que se cumpla la condicion.
  print(f"contando: {numero}") # bloque de codigo.
  numero += 1 # # incrementar la variable "numero" para evitar bucle infinito.`}/>
        <Conseptos texto={`Su uso puede variar porque podemos usarlo en distintas ocaciones por ejemplo preguntar algo al usuario y si no da la respuesta correcta seguir preguntando hata que de la respuesta correcta.`}/>
        <Python codigo={`resultado = input("¿Cuanto es 1099 + 1?: ")
while resultado != "1100":
  print("incorrecto")
  resultado = input("¿Cuanto es 1099 + 1?: ")`}/>
      </main>
      <Footer />
    </>
  );
}

export default WhilePython;