import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function FuncionesPython() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Las funciones son bloques de codigo que se pueden reutilizar muchas veces.`,
        lenguage: "Python",
        codigo: `def saludo(nombre): # funcion normal
  print(f"hola {nombre}")
saludo("Steve")

def retornar():
  return "Hola mundo" # retornar un dato para trabajar con el
saludar = retornar()

def infinito(*parametro): # recibir cualquier cantidad de parametros.
  print(parametro)
infinito()

def defecto(nombre = "Langris"): # parametros por defecto
  print(nombre)
defecto("Finrral")
defecto()`
      }]}/>
       <main>
        <h1>Funciones</h1>
        <Conseptos texto={`Al igual que python tiene funciones integradas nosotros tambien podemos crear nuestras propias funciones esto con la clausula def.

Las funciones sirven para crear un bloque de codigo que puede ser reutilizado muchas veces para evitar repetir codigo, en este caso digamos que necesitamos sumar solo 2 numeros y que no sea necesario pasar como parametro una lista sino que solo reciba 2 parametros.`}/>
        <Python codigo={`def sumar(n1,n2):
  resultado = n1 + n2
  print(f"el resultado de tu suma es {resultado}")
sumar(25,15)`}/>
        <Consola codigo={`El resultado de tu suma es: 40`}/>
        <h2>return</h2>
        <Conseptos texto={`Con esto podremos trabajar con las funciones fuera del bloque osea que si retornamos algo con una funcion el resultado se podra guardar por ejemplo esta funcion.`}/>
        <Python codigo={`def perimetro(lados,medida):
 resultado = medida * lados
 return resultado
triangulo = perimetro(3,15)
cuadrado = perimetro(4,8)
rombo = perimetro(4,35)

print(f"""El perimetro del triangulo es: {triangulo}
El perimetro del cuadrado es: {cuadrado}
El perimetro del rombo es: {rombo}""")`}/>
        <Consola codigo={`El perimetro del triangulo es: 45
El perimetro del cuadrado es: 32 
El perimetro del rombo es: 140`}/>
        <Conseptos texto={`Como nos damos cuenta la funcion nos devuelve un dato el cual podemos trabajar con ese dato varias veces y tener la posibilidad de guardarlo, al usar "return" debajo de la linea que indique return ya no se podra ejecutar nada mas por ejemplo esta funcion que nos dira error.`}/>
        <h3>Error</h3>
        <Python codigo={`def saludar(nombre,genero):
  return f"hola {nombre} bienvenido"
  if genero == "hombre":
    return (f"hola {nombre} bienvenido")
  else:
    return (f"hola {nombre} bienvenida")

maestro = saludar("Marcos","hombre")
maestra = saludar("Maryn","mujer")

print(maestro)
print(maestra)`}/>
          <Consola codigo={`hola Marcos bienvenido
hola Maryn bienvenido`}/>
          <Conseptos texto={`Como nos damos cuenta ignora las lineas de abajo despues del primer return, esto debido a que las funciones solo pueden retornar un solo dato.`}/>
          <h2>Correcto</h2>
          <Python codigo={`def saludar(nombre,genero):
  if genero == "hombre":
    return (f"hola {nombre} bienvenido")
  else:
    return (f"hola {nombre} bienvenida")

maestro = saludar("Marcos","hombre")
maestra = saludar("Maryn","mujer")

print(maestro)
print(maestra)`}/>
          <Consola codigo={`hola Marcos bienvenido
hola Maryn bienvenida`}/>
          <Conseptos texto={`Ahora si la funcion esta correcta ya que retorna un dato segun la condicion.`}/>
          <h2>parametro arrs</h2>
          <Conseptos texto={`Nosotros podemos recibir parametros indefinidos, osea que podemos recibir una cantidad de parametros que no sabemos, al recibir parametros sin saber cuantos seran se creara una tupla con la que podremos trabajar.`}/>
          <Python codigo={`def sacarPromedio(*notas):
  getNotas = sum(notas) / len(notas)
  promediar = round(getNotas)
  return promediar

alumno1 = sacarPromedio(5,15,10,15,12)
alumno2 = sacarPromedio(12,11,17)
alumno3 = sacarPromedio(15,4,12,14)

print(f"""La nota del primer alumno es: {alumno1}
La nota del segundo alumno es: {alumno2}
La nota del tercer alumno es: {alumno3}""")`}/>
        <Consola codigo={`La nota del primer alumno es: 11
La nota del segundo alumno es: 13
La nota del tercer alumno es: 11`}/>
        <Conseptos texto={`Como nos damos cuenta al llamar a la funcion la cantidad de parametros varia pero aun asi saca el promedio, no supimos cuantos parametros iban a pasar sin embargo logramos sacar los promedios.

Este tipo de parametros siempre debe de ir al final de los parametros de las funciones, no pueden ir al principio.`}/>
          <h3>Error</h3>
          <Python codigo={`def promedios(*notas,nombre):
  print(notas,nombre)
promedios(15,24,"asd")`}/>
          <Consola codigo={`Error`}/>
          <h3>Correcto</h3>
          <Python codigo={`def registro(nombre,*notas):
  promedio = sum(notas) / len(notas)
  resultado = round(promedio)
  return f"El alumno {nombre} tiene un promedio de {resultado}"
print(
  registro("Steve",15,10,13),
  registro("Julia",13,19,11),
  registro("Marta",12,18,18),
  registro("Lisa",17,10,8)
)`}/>
        <Consola codigo={`El alumno Steve tiene un promedio de 13 El alumno Julia tiene un promedio de 14 El alumno Marta tiene un promedio de 16 El alumno Lisa tiene un promedio de 12`}/>
        <h2>Parametros por defecto</h2>
        <Conseptos texto={`Con esto podremos hacer que una funcion tenga parametros por defecto osea que no sea necesario pasar un parametro de forma obligatoria.`}/>
        <Python codigo={`def licensia(nombre,edad,pais = "El Salvador"):
  if edad < 18:
    print(f"{nombre} aun no puede sacar una licensia de conducir.")
  else:
    print(f"Felicidades {nombre} ahora tienen una licensia en el pais de {pais}.")

licensia("Roberto",17,"Argentina")
licensia("Martin",19)
licensia("Alejandro",23,"Peru")
licensia("Alfonso",24)
licensia("Alfonso",27,"Argentina")`}/>
        <Consola codigo={`Roberto aun no puede sacar una licensia de conducir.
Felicidades Martin ahora tienen una licensia en el pais de El Salvador.
Felicidades Alejandro ahora tienen una licensia en el pais de Peru.
Felicidades Alfonso ahora tienen una licensia en el pais de El Salvador.
Felicidades Alfonso ahora tienen una licensia en el pais de Argentina.`}/>
        <Conseptos texto={`Como nos damos cuenta en algunas llamadas de la funcion le pasamos el pais pero en los que no le pasamos el pais se puso por defecto el pais de "El Salvador".`}/>
       </main>
       <Footer />
    </>
  );
}

export default FuncionesPython;