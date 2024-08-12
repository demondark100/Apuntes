import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

export default function Poo1Py(){
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora veremos la sintaxis de P.O.O en el lenguaje python.`,
        "lenguage": "Python",
        "codigo": `class Cubo:         # crear clase
    def __init__(self,material, textura, vida):      # definir constructor
        self.material = material       # propiedades del opbjeto 
        self.textura = textura
        self.vida = vida
    def metodo(self):   # crear un metodo
        print("Esto es un metodo")

    def referencia(self):
        print("referencia original")

class Bloque:
    def __init__(self,bloque,funcion):
        self.funcion = funcion
        self.bloque = bloque
        
class Tierra(Cubo):   # de que clase se hara la herencia
    def __init__(self,material, textura, vida, durabulidad)
        super().__init__(material, textura, vida)   # heredar propiedades de una clase
        self.durabulidad = durabulidad

class Horno(Cubo,Bloque):   # heredar dos clases distintas
    def __init__(self, material, textura, vida, bloque,funcion):
        Cubo.__init__(self,material, textura, vida)   # heredar propiedades de la clase Cubo
        Bloque.__init__(self,bloque,funcion)    # heredar propiedades de la clase Bloque
    
    def referencia(self):
        print("referencia reescrita.")
    
    def hacerReferencia(self):
        self.referencia()   # hacer referencia al metodo reescrito
        super().referencia()    # hacer referencia al metodo de la clase padre

horno = Horno("piedra","ruta",65,"horno","cocinar")   # crear una instancia
subclase = issubclass(Tierra,Cubo)    # saber si una clase es herencia de otra clase
instancia = isinstance(horno,Horno)   # saber si una variable es instncia de un objeto
horno.hacerReferencia()   # usar un metodo de un objeto.`
      }]}/>
      <main>
        <h1>P.O.O parte 1</h1>
        <Conseptos texto={`Python tiene el paradicma de programacion orientada a objetos al igual que otros lenguages, ahora veremos su sintaxis.

Ahora para empezar vamos a crear un cubo de minecraft.`}/>
        <h2>clases</h2>
        <Conseptos texto={`Con esto vamos a definir nuestro objeto en este caso un cubo.`}/>
        <Python codigo={`class Cubo():
  material = "tierra"
  textura = "ruta de imagen"
  durabilidad = 25`}/>
        <Conseptos texto={`En este caso estamos creando un objeto con una clase estatica, ahora vamos a llamar a una propiedad del objeto.`}/>
        <Python codigo={`tierra = Cubo()
piedra = Cubo()
print(tierra.material)
print(piedra.material)`}/>
        <Consola codigo={`tierra
tierra`}/>
        <h2>clase dinamica</h2>
        <Conseptos texto={`Lo malo de las clases estaticas es que su valor no va a cambiar de forma estatica osea que cada que llamemos al objeto cubo siempre seria "tierra", esto se puede cambiar pero seria muy tedioso, por eso esque las clases dinamicas solucionaran esto.`}/>
        <Python codigo={`class Cubo:
  def __init__(self,material,textura,durabilidad):
    self.material = material
    self.textura = textura
    self.durabilidad = durabilidad

tierra = Cubo("tierra","ruta",25)
piedra = Cubo("piedra","ruta",83)

print(tierra.material)
print(piedra.material)`}/>
        <Consola codigo={`tierra
piedra`}/>
        <Conseptos texto={`def __init__(self,"parametros") esto es para crear un constructor que reciba parametros de forma dinamica, al principio es obligatorio que lleve self porque con eso se hace referencia a si mismo en su propio bloque de codigo.`}/>
        <h2>Metodos</h2>
        <Conseptos texto={`Los metodos son funciones dentro de un objeto, estos deben llevar de forma obligatoria el parametro "self" para que se haga referencia a si mismo.`}/>
        <Python codigo={`class Cubo:
    def __init__(self,material,textura,durabilidad):
        self.material = material
    
    def recoger(self):
        print(f"Recogiste un bloque de {self.material}")
    def usar(self):
        print(f"Usaste un bloque de {self.material}")

tierra = Cubo("tierra")
piedra = Cubo("piedra")

tierra.recoger()
piedra.recoger()
tierra.usar()
piedra.usar()`}/>
        <Consola codigo={`Recogiste un bloque de tierra
Recogiste un bloque de piedra
Usaste un bloque de tierra
Usaste un bloque de piedra`}/>
        <Conseptos texto={`Si deseamos usar el algun atributo del objeto debemos usar "self.atributo" en este caso fue "self.material".`}/>
        <h2>Herencia</h2>
        <Conseptos texto={`Con la herencia podemos heredar atributos y metodos.`}/>
        <Python codigo={`class Cubo:
    def __init__(self,material):
        self.material = material
    
    def recoger(self):
        print(f"Recogiste un bloque de {self.material}")

class Piedra(Cubo):
    def __init__(self, material,textura,durabilidad):
        super().__init__(material)
        self.textura = textura
        self.durabilidad = durabilidad
        

piedra = Piedra("Piedra","ruta",25)
piedra.recoger()`}/>
        <Conseptos texto={`En este caso estamos heredando la propiedad "material", luego podemos agregar mas propiedades al objeto y usar los metodos de la primer clase.`}/>
        <h2>Herencia multiple</h2>
        <Conseptos texto={`Tambien podemos heredar metodos y propiedades de distintas clases y poder crear una clase que tenga varias propiedades o metodos ya hechos.`}/>
        <Python codigo={`class Cubo:
    def __init__(self,material, textura, vida):
        self.material = material
        self.textura = textura
        self.vida = vida
    
    def recoger(self):
        print(f"Recogiste un bloque de {self.material}")

class Bloque:
    def __init__(self,bloque,funcion):
        self.funcion = funcion
        self.bloque = bloque

    def crear(self):
        print(f"Se ha creado un {self.bloque} con {self.material} para {self.funcion}")
        
        
class Horno(Cubo,Bloque):
    def __init__(self, material, textura, vida, bloque,funcion):
        Cubo.__init__(self,material, textura, vida)
        Bloque.__init__(self,bloque,funcion)
        
    def usar(self):
        print("Cocinando...")
         

horno = Horno("piedra","ruta",65,"horno","cocinar")
horno.crear()
horno.usar()`}/>
        <Consola codigo={`Se ha creado un horno con piedra para cocinar
Cocinando...`}/>
        <Conseptos texto={`En este caso tenemos dos clases que son el cubo que tiene el material la textura y la vida, tambien el bloque que tiene nuevas propiedades como la funcion y que bloque es, por ultimo tenemos una clase que hereda las 2 clases Cubo y Bloque, despues usamos el metodo que esta en la clase bloque que es para crear el bloque y luego usamos el metodo que esta en la clase Horno para usar..`}/>
        <h2>self y super</h2>
        <Conseptos texto={`Al sobreescribir y usar un metodo en una clase que hereda dos clases pueden surgir problemas, debido a que haras referencia al metodo sobreescrito y no al original, con self hacemos referencia al metodo sobreescrito de nuestra clase heredada, con super hacemos referencia al metodo original de la clase que esta heredando.`}/>
        <Python codigo={`class Cubo:
    def __init__(self,material, textura, vida):
        self.material = material
        self.textura = textura
        self.vida = vida
    
    def recoger(self):
        print(f"Recogiste un bloque de {self.material}")

class Bloque:
    def __init__(self,bloque,funcion):
        self.funcion = funcion
        self.bloque = bloque

    def crear(self):
        print(f"Se ha creado un {self.bloque} con {self.material} para {self.funcion}")
        
        
class Horno(Cubo,Bloque):
    def __init__(self, material, textura, vida, bloque,funcion):
        Cubo.__init__(self,material, textura, vida)
        Bloque.__init__(self,bloque,funcion)
    
    def crear(self):
        print("No se ha creado el bloque")
    def usar(self):
        self.crear()
        super().crear()
        
         

horno = Horno("piedra","ruta",65,"horno","cocinar")
horno.usar()`}/>
        <Consola codigo={`No se ha creado el bloque
Se ha creado un horno con piedra para cocinar`}/>
        <Conseptos texto={`Como nos damos cuenta reescrubimos el mismo metodo osea "crear" pero al usar "self.crear()" y llamar al metodo hace referencia al metodo sobreescrito, y al usar "super().crear()" llama al metodo de la clase que esta heredando el metodo.`}/>
        <h2>issubclass</h2>
        <Conseptos texto={`Con esta funcion vamos a saber si una clase hereda / es sub clase de otra clase.`}/>
        <Sintaxis codigo={`hereda = esSubClase(objeto que recibe herencia,objeto que pasa herencia)`}/>
        <Python codigo={`class Cubo:
    def __init__(self,material, textura, vida):
        self.material = material
        self.textura = textura
        self.vida = vida

class Bloque:
    def __init__(self,bloque,funcion):
        self.funcion = funcion
        self.bloque = bloque
        
        
class Horno(Cubo,Bloque):
    def __init__(self, material, textura, vida, bloque,funcion):
        Cubo.__init__(self,material, textura, vida)
        Bloque.__init__(self,bloque,funcion)
    

hereda = issubclass(Horno,Cubo)
print(hereda)`}/>
        <Consola codigo={`True`}/>
        <h2>isinstance</h2>
        <Conseptos texto={`Con esta funcion vamos a saber si una variable es instancia de un objeto, con esto me refiero a que si una variable esta usando un objeto.`}/>
        <Sintaxis codigo={`instancia = esInstancia(variable,objeto)`}/>
        <Python codigo={`class Cubo:
    def __init__(self,material, textura, vida):
        self.material = material
        self.textura = textura
        self.vida = vida

class Bloque:
    def __init__(self,bloque,funcion):
        self.funcion = funcion
        self.bloque = bloque
        
        
class Horno(Cubo,Bloque):
    def __init__(self, material, textura, vida, bloque,funcion):
        Cubo.__init__(self,material, textura, vida)
        Bloque.__init__(self,bloque,funcion)
    

horno = Horno("piedra","ruta",65,"horno","cocinar")
instancia = isinstance(horno,Horno)
print(instancia)`}/>
        <Consola codigo={`True`}/>
        <Conseptos texto={`En este caso estamos comprobando si la variable horno esta usando el objeto Horno.`}/>
      </main>
      <Footer />
    </>
  )
}