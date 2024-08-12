import Conseptos from "../../../../componentes/conseptos/conseptos";
import Python from "../../../../componentes/lenguajes/Python";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";




export default function AbstralClassPy(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Con las clases abstractas vamos a crear plantillas que se pueden usar en varias clases, la clase abstracta no puede tener instancia.`,
        "lenguage": "Python",
        "codigo": `from abc import ABC,abstractclassmethod    # importar funciones para clases abstractas.

class Persona(ABC):
    @abstractclassmethod    # indicar que las propiedades seran abstractas
    def __init__(self,nombre,edad,actividad):
        self.nombre = nombre
        self.edad = edad
        self.actividad = actividad
    
    @abstractclassmethod    # crear metodo abstracto para ser reescrito y usado en otras clases
    def hacer_actividad(self):
        pass

    def presentacion(self):
        print(f"Mi nombre es {self.nombre}, tengo {self.edad} años.")


class Estudiante(Persona):
    def __init__(self,nombre,edad,actividad):
        super().__init__(nombre,edad,actividad)

    def hacer_actividad(self):    # agregar codigo al metodo abstracto
        print(f"Estudiando {self.actividad}")


class Trabajador(Persona):
    def __init__(self,nombre,edad,actividad):
        super().__init__(nombre,edad,actividad)

    def hacer_actividad(self):
        print(f"Trabajando en el rubro de {self.actividad}.")


# creacion de instancias
estudiante = Estudiante("Jorge",16,"programacion")
trabajador = Trabajador("Maryn",19,"enfermera")

# uso de los metodos heredados
estudiante.presentacion()
estudiante.hacer_actividad()
trabajador.presentacion()
trabajador.hacer_actividad()`
      }]}/>
      <main>
        <h1>clases abstractas</h1>
        <Conseptos texto={`Una clase abstracta es como crear una plantilla que se puede usar en distintas clases.
Primero debemos de importar "ABC" y "abstractclassmethod"`}/>
        <Python codigo={`from abc import ABC,abstractclassmethod`}/>
        <Conseptos texto={`"ABC" es la clase que vamos a heredar para poder usar los metodos abstractos.
"@abstractclassmethod" es una funcion decoradora para indicar que crearemos un metodo abstracto.`}/>
        <h2>crear plantilla</h2>
        <Python codigo={`from abc import ABC,abstractclassmethod

class Persona(ABC):
    @abstractclassmethod
    def __init__(self,nombre,edad,actividad):
        self.nombre = nombre
        self.edad = edad
        self.genero = actividad
    @abstractclassmethod    # hacer un metodo abstracto
    def hacer_actividad():
        pass`}/>
        <Conseptos texto={`Como nos damos cuente primero heredamos "ABC" para recien crear una plantilla y luego usamos "@abstractclassmethod" para crear nuestro metodo constructor. `}/>
        <Conseptos texto={`La clase "Persona" al ser una clase abstracta no va a permitir una instancia, pero si va a servir como una plantilla predeterminada para otras clases que hereden sus propiedades y metodos abstractos.`}/>
        <Python codigo={`from abc import ABC,abstractclassmethod

class Persona(ABC):
    @abstractclassmethod
    def __init__(self,nombre,edad,actividad):
        self.nombre = nombre
        self.edad = edad
        self.actividad = actividad
    
    @abstractclassmethod
    def hacer_actividad(self):
        pass

    def presentacion(self):
        print(f"Mi nombre es {self.nombre}, tengo {self.edad} años.")


class Estudiante(Persona):
    def __init__(self,nombre,edad,actividad):
        super().__init__(nombre,edad,actividad)

    def hacer_actividad(self):
        print(f"Estudiando {self.actividad}")


class Trabajador(Persona):
    def __init__(self,nombre,edad,actividad):
        super().__init__(nombre,edad,actividad)

    def hacer_actividad(self):
        print(f"Trabajando en el rubro de {self.actividad}.")


estudiante = Estudiante("Jorge",16,"programacion")
trabajador = Trabajador("Maryn",19,"enfermera")

estudiante.presentacion()
estudiante.hacer_actividad()
trabajador.presentacion()
trabajador.hacer_actividad()`}/>
        <Conseptos texto={`En este caso creamos nuestra clase Persona que servira de plantilla a las clases "Estudiante" y "Trabajador", el metodo "hacer_actividad" en la clase "Persona" no hace nada pero es abstracta, al momento de crear las clases "Estudiante" y "Trabajador" se usa y se implementa un codigo diferente al metodo "hacer_actividad".`}/>
      </main>
      <Footer />
    </>
  )
}