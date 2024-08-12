import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function Poo2Py() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora veremos distintos temas, algunos de estos los maneja solo python y otros lenguajes de programacion.`,
        "lenguage": "Python",
        "codigo": `# orden de herencia en los metodos
class A:
    pass
class B:
    def usar(self):
        print("uso de B")
class C(A,B):
    def usar(self):
        print("uso de C")
c = C()
c.usar()
C.mro()   # ver el orden en el que se heredara un metodo entre clases.
B.usar(c)   # elegir usar un metodo heredado.`
      },{
        "mensaje": `Cosas de encapsulamiento y acceso a propiedades encapsuladas.`,
        "lenguage": "Python",
        "codigo": `class Persona:
    def __init__(self,seguro,superSeguro):
        self._seguro = seguro     # encapsular dato de forma segura
        self.__superSeguro = superSeguro    # encapsular dato de forma super segura(recomendado)
    def get_nombre(self):   # metodo para acceder a una propiedad encapsulada
        return self.__nombre
    def set_nombre(self, nombre):   # metodo para modificar una propiedad encapsulada
        self.__nombre = nombre
persona = Persona("Noelle")
persona.get_nombre()   # acceder a una propiedad encapsulada con el metodo creado
persona.set_nombre("Vanessa")   # modificar una propiedad encapsulada con el metodo creado`
      },{
        "mensaje": `Funcion decoradora para ejecutar codigo antes y despues de otra funcion sin afectar su funcionamiento.`,
        "lenguage": "Python",
        "codigo": `def decorador(funcion):
    def decorar():
        print("codigo antes")
        funcion()
        print("codigo despues")
    return decorar
@decorador    # usar la funcion que decorara la funcion principal.
def saludo():
    print("hola esta es una funcion.")
saludo()`
      },{
        "mensaje": `Ahora usaremos funciones decoradoras especialmente usadas para las clases, estos vienen integrados en python.`,
        "lenguage": `Python`,
        "codigo": `class Persona:
    def __init__(self,nombre):
        self.__nombre = nombre
    @property   # evitar los () al acceder a una propiedad encapsulada
    def nombre(self):
        return self.__nombre
    @nombre.setter    # evitar los () al cambiar una propiedad encapsulada
    def set_nombre(self,nombre):
        self.__nombre = nombre
    def del_nombre(self):
        del self.__nombre   # eliminar una propiedad

persona = Persona("Noelle")
print(persona.nombre)   # acceder a una propiedad encapsulada con ayuda de @propery
persona.set_nombre = "Vanessa"    # cambiar valor de una propiedad encapsulada con ayuda de @propery.setter.
persona.del_nombre    # eliminar una propiedad encapsulada.`
      }]}/>
      <main>
        <h2>P.O.O parte 2</h2>
        <Conseptos texto={`Ahora veremos conseptos mas abanzados de "P.O.O" en este lenguaje.`}/>
        <h2>MRO</h2>
        <Conseptos texto={`En este caso MRO es un consepto que solo se aplica en lenguajes de programacion que permiten el uso de herencia multiple.
MRO permite que python busque el orden en los atributos y clases
Antes de iniciar "pass" evita que no hayan errores en el codigo al no poner nada en una clase.`}/>
        <Python codigo={`class A:
    pass
class B:
    def usar(self):
        print("uso de B")
class C(A,B):
    pass
c = C()
c.usar()`}/>
        <Consola codigo={`uso de B`}/>
        <Conseptos texto={`En este caso la clase "C" esta heredando las clases "A" y "B", al momento de crear la instacia y usar el metodo "usar" y detectar que la clase "C" no tiene el metodo entonces buscara en la clase "A" y si no tiene el metodo buscara el metodo en la clase "B" y si lo detecta heredara ese metodo a la clase "C" por eso sale como resultado "uso de B" `}/>
        <h2>mro</h2>
        <Conseptos texto={`Con esta funcion vamos a saber cual sera el orden de la herencia que usa mro, esto por si no llegamos a entender cual es el orden de la herencia o por si tenemos un programa muy grande y no tenemos muy claro cual sera el orden de la herencia de los metodos en caso que se sobreescriban.`}/>
        <Sintaxis codigo={`Objeto.mro()`}/>
        <Python codigo={`class A:
    pass
class B:
    def usar(self):
        pass
class C(A,B):
    pass

print(C.mro())`}/>
        <Consola codigo={`[<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>]`}/>
        <Conseptos texto={`Este metodo no necesita que se cree una instancia sino que necesita el objeto para saber que objeto le esta heredando, como resultado vemos el orden en el que se estan heredando los metodos.`}/>
        <h2>metodo cualquiera</h2>
        <Conseptos texto={`MRO nos permite usar el metodo que ha sido sobreescrito en una clase heredada o tambien usar el metodo de una de las clases que esta heredando,.`}/>
        <Sintaxis codigo={`instancia = ObjetoA()
ObjetoB.metodo(instancia)`}/>
        <Python codigo={`class A:
    def usar(self):
        print("uso de A")
class B:
    def usar(self):
        print("uso de B")
class C(A,B):
    def usar(self):
        print("uso de C")

c = C()
B.usar(c)`}/>
        <Consola codigo={`uso de B`}/>
        <Conseptos texto={`En este caso estamos usando el metodo de la clase "b", nosotros hemos podido elegir el metodo de una clase que esta heredando.`}/>
        <h2>Encapsular datos</h2>
        <Conseptos texto={`Python tiene 2 formas de encapsular datos para que no sean accesibles nisiquiera por el programador.`}/>
        <ol>
          <li>
            <Conseptos texto={`encapsulamiento normal: Con este tipo de encapsulamiento aun podemos acceder de esta forma "instacia.propiedad", para crear una propiedad con un encapsulamiento normal se debe de poner un guien bajo antes del nombre de la propiedad`}/>
            <Python codigo={`class Normal:
    def __init__(self,nombre):
        self._nombre = nombre`}/>
          </li>
          <li>
            <Conseptos texto={`encapsulamiento seguro: Con este tipo de encapsulamiento ya no se puede acceder a una propiedad de esta forma "instacia.propiedad", para crear este encapsulamiento se necesita poner dos guiones bajos antes de poner el nombre de la propiedad.`}/>
            <Python codigo={`class Normal:
    def __init__(self,nombre):
        self.__nombre = nombre`}/>
          </li>
        </ol>
        <h2>setters y getters</h2>
        <Conseptos texto={`Con los setters y getters vamos a poder acceder a propiedades que han sido encapsuladas.
Con los getters vamos a obtener las propiedades que estan encapsuladas.
Con los setters vamos a modificar las propiedades que estan encapsuladas.`}/>
        <Python codigo={`class Persona:
    def __init__(self,nombre):
        self.__nombre = nombre
        
    def get_nombre(self):
        return self.__nombre
    def set_nombre(self, nombre):
        self.__nombre = nombre


persona = Persona("Noelle")
print(persona.get_nombre())
persona.set_nombre("Vanessa")
print(persona.get_nombre())`}/>
        <Conseptos texto={`Los setters u getters son metodos que sirven para obtener y modificar algunas propiedades que en teoria no se deberian de modificar u obtener.`}/>
        <Consola codigo={`Noelle
Vanessa`}/>
        <h2>decoradores</h2>
        <Conseptos texto={`Con los decoradores vamos a poder ejecutar codigo antes o despues de una funcion sin necesidad de afectar la funcion principal, esto es util cuando queremos decorar una o varias funciones muchas veces.`}/>
        <Python codigo={`def decorador(funcion):
    def decorar():
        print("codigo antes")
        funcion()
        print("codigo despues")
    return decorar

@decorador
def saludo():
    print("hola esta es una funcion.")

saludo()`}/>
        <Conseptos texto={`con @decorador estamos indicando a python que usaremos una funcion decoradora y que la funcion de abajo sera la funcion que sera para decorar.`}/>
        <h2>@property</h2>
        <Conseptos texto={`Esta es una funcion decoradora integrada de python que sirve para las clases, en este caso sirve para los getters.`}/>
        <Python codigo={`class Persona:
    def __init__(self,nombre):
        self.__nombre = nombre
    @property
    def nombre(self):
        return self.__nombre

persona = Persona("Noelle")
print(persona.nombre)`}/>
        <Consola codigo={`Noelle`}/>
        <Conseptos texto={`Con este decorador evitaremos llamar al metodo que accede a la propiedad "set_nombre" y cambiarlo solo por nombre, tambien hace que ya no sea necesario llamar al metodo para acceder de esta manera "instancia.metodo()" sino que ahora es posible hacer esto "instancia.metodo".`}/>
        <h2>setter</h2>
        <Conseptos texto={`Con esta funcion decoradora vamos a poder modificar metodos encapsulados de forma mas sensilla.`}/>
        <Python codigo={`class Persona:
    def __init__(self,nombre):
        self.__nombre = nombre
    @property
    def nombre(self):
        return self.__nombre
    @nombre.setter
    def set_nombre(self,nombre):
        self.__nombre = nombre

persona = Persona("Noelle")
print(persona.nombre)

persona.set_nombre = "Vanessa"
print(persona.nombre)`}/>
        <Consola codigo={`Noelle
Vanessa`}/>
        <Conseptos texto={`En este caso al usar la funcion "setter" ahora vamos a poder modificar una propiedad encapsulada de mejor forma pasando de esto "instancia.metodo("valor") a esto "instancia.propiedad = "valor"".`}/>
        <h2>deleter</h2>
        <Conseptos texto={`Con esta funcion decoradora vamos a eliminar una propiedad que este encapsulada.`}/>
        <Python codigo={`class Persona:
    def __init__(self,nombre):
        self.__nombre = nombre

    def del_nombre(self):
        del self.__nombre

persona = Persona("Noelle")
persona.del_nombre`}/>
        <Conseptos texto={`En este caso estamos eliminando la propiedad "__nombre", como se elimino esa propiedad ya no sera posible acceder o modificar esa propiedad.`}/>
      </main>
      <Footer />
    </>
  );
}

export default Poo2Py;