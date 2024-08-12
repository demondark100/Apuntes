import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";


export default function ExcepcionesPy(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Con las excepciones manejamos errores y evitamos que el programa se detenga en caso de error`,
        "lenguage": `Python`,
        "codigo": `try:   # detectar si hay algun error
    # bloque de codigo
except:   # manejar el error
    # bloque de codigo
else:   # ejecutar en caso de no haber error
    # bloque de codigo
finally:    # siempre ejecutar un bloque de codigo sin importar nada
    # bloque de codigo
    
    
    
try:
    print("manejando excepcion")
except Exception as e:    # obtener cual fue el error
    print(e)`
      }]}/>
      <main>
        <h1>Excepciones</h1>
        <Conseptos texto={`Con las excepciones vamos a manejar algun error en nuestro programa para que el programa no finalice cuando pase ese error y nosotros digamos al programa que hara cuando pase ese error.`}/>
        <Sintaxis codigo={`try:
    # aqui el codigo donde puede haber una excepcion y detener el programa
except:
    # aqui un aviso o la logica de que hacer en caso de error.`}/>
        <Conseptos texto={`Ahora para entender mejor vamos a crear una funcion que tendra una excepcion osea un error, pero vamos a manejar ese error.`}/>
        <Python codigo={`def number(num):
    try:
        resultado = int(num)
    except:
        return f"No has puesto un numero sino que has puesto un caracter: \\"{num}\\""
    return resultado

print(number(15))
print(number("25"))
print(number("Hola"))`}/>
        <Consola codigo={`15
25
No has puesto un numero sino que has puesto un caracter: "Hola"`}/>
        <Conseptos texto={`En este caso creamos una funcion que recibe un numero, este convertira el numero que pasemos en un numero entero, si al momento de pasar el parametro a la funcion y detecta que no es un numero sino que es un caracter entonces devolvera un error y alli es donde entra "except" para manejar ese error.`}/>
        <h2>funcion sumar</h2>
        <Conseptos texto={`Ahora vamos a crear una funcion para sumar 2 valores, manejaremos una excepcion en caso de que el usuario pase algun caracter y no un numero para sumar, gracias a esta funcion vamos a entender otras clausulas para manejar las excepciones.`}/>
        <h2>else</h2>
        <Conseptos texto={`Con esta sentencia vamos a ejecutar un bloque de codigo cuando la clausula "except" no se ejecute, "else" solo se ejecutara si no hay alguna excepcion al momento de usar el bloque de codigo de "try".`}/>
        <Python codigo={`def sum():
    while True:
        n1 = input("numero 1: ")
        n2 = input("numero 2: ")
        try:
            resultado = int(n1) + int(n2)
        except:
            print("Un parametro no es un numero intentalo de nuevo")
        else:
            break
    return resultado

print(sum())`}/>
        <Conseptos texto={`En este caso creamos una funcion para sumar 2 numeros, le indicamos al usuario que nos pase 2 numero, si por alguna razon nos pasa un caracter entonces manejamos el error sin embargo si pasa los dos parametros correctamente entonces retornamos el resultado de su suma y detenemos el bucle.`}/>
        <h2>finally</h2>
        <Conseptos texto={`Esta sentencia se ejecutara siempre no importa si hubo una excepcion o no.`}/>
        <Python codigo={`def sum():
    while True:
        n1 = input("numero 1: ")
        n2 = input("numero 2: ")
        try:
            resultado = int(n1) + int(n2)
        except:
            print("Un parametro no es un numero intentalo de nuevo")
        else:
            break
        finally:
            print(f"concatenacion: {n1 + n2}")
    return resultado

print(sum())`}/>
        <Conseptos texto={`En este caso usamos finally para devolver los numeros concatenados, ya no iportara si puso caracteres o no siempre devolvera la concatenacion de las 2 cadenas de texto.`}/>
        <h2>Exception</h2>
        <Conseptos texto={`Esto es unsa clase de la clausula "except", con esta clase vamos a ver en especifico cual fue el error se ha producido, esto es util si deseamos indicar al usuario que error a cometido al usar el programa.`}/>
        <Sintaxis codigo={`except Exception as e:
    print(e)`}/>
        <Conseptos texto={`A la clase "Exception" se le suele asignar el alias "e" para que el codigo sea mas legible.`}/>
        <Python codigo={`def sum():
    while True:
        n1 = input("numero 1: ")
        n2 = input("numero 2: ")
        try:
            resultado = int(n1) + int(n2)
        except Exception as e:
            print("Un parametro no es un numero intentalo de nuevo")
            print(e)
        else:
            break
        finally:
            print(f"concatenacion: {n1 + n2}")
    return resultado

print(sum())`}/>
      </main>
      <Footer />
    </>
  )
}