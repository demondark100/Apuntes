import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";





function EspecialMethodPy() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Tenemos algunos metodos especiales que son utiles en algunas situaciones.`,
        "lenguage": "Python",
        "codigo": `class Objeto:
    def __init__(self,valor):
        self.valor = valor

    def __str__(self):    # metodo para retornar una cadena de texto sin necesidad de llamar un metodo en la instancia
        return f"Clase Objeto/ {self.valor}."

    def __add__(self,otro):   # funcion para mesclar dos mismos objetos o mas
        newValor = self.valor + otro.valor
        return Objeto(newValor)
        
objeto1 = Objeto("primer valor")
print(objeto1)    # mostrar el texto retornado con el metodo "__str__".

objeto2 = Objeto("segundo valor")
resultado = objeto1 + objeto2   # mesclar dos objetos.
print(resultado.valor)`
      }]}/>
      <main>
        <h1>Metodos especiales</h1>
        <Conseptos texto={`Estos metodos se caracterizan por tener dos guiones bajos antes y despues del nombre del metdo, un ejempl claro y muy usado es "__init__".`}/>
        <h2>__str__</h2>
        <Conseptos texto={`Con este metodo vamos a retornar un valor como string sin necesidad de recurrir a la sintaxis de "instancia.metodo()", esto es util cuando queremos obtener valores de un objeto de forma rapida.`}/>
        <Python codigo={`class Persona:
    def __init__(self,nombre,edad):
        self.nombre = nombre
        self.edad = edad
    def __str__(self):
        return f"Clase Persona/ {self.nombre}, {self.edad}."
        
persona = Persona("Romina",25)
print(persona)`}/>
        <Consola codigo={`Clase Persona/ Romina, 25.`}/>
        <h2>__add__</h2>
        <Conseptos texto={`Con este metodo eespecial vamos a definir que pasara cuando nosotros unamos una clase con otra, o definamos que pasara cuando pongamos el signo "*" o el signo "+".`}/>
        <Python codigo={`class Persona:
    def __init__(self,nombre,edad):
        self.nombre = nombre
        self.edad = edad

    def __add__(self,otro):
        newValor = self.edad + otro.edad
        return Persona(self.nombre + otro.nombre,newValor)

bob = Persona("Bob",25)
patricio = Persona("Patricio",25)

resultado = bob + patricio
print(resultado.edad)`}/>
        <Consola codigo={`En este caso estamos definiendo que va a pasar cuando sumemos los valores de dos objetos en este caso ambos objetos se instancian con el objeto "Persona".`}/>
      </main>
      <Footer />
    </>
  );
}

export default EspecialMethodPy;