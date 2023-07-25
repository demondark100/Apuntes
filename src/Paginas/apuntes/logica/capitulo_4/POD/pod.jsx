import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";

function PodLogica() {
  return (  
    <>
      <main>
        <h1>programacion orientada a objetos (POD)</h1>

        <Conseptos 
          texto={`La programación orientada a objetos (POO) es como organizar tu código de forma más amigable. En lugar de tener un montón de líneas de código sueltas, la POO te permite agruparlas en objetos que representan cosas del mundo real. Imagina que estás construyendo un juego y tienes un objeto para el jugador, otro para los enemigos y otro para los objetos que se pueden recolectar. Cada objeto tiene sus propias características (como la vida del jugador) y acciones (como el movimiento de los enemigos). La POO te ayuda a mantener todo ordenado y a reutilizar el código fácilmente. Es como tener piezas de Lego que puedes combinar y reutilizar para construir cosas geniales.`}
        />

        <h2>objetos</h2>

        <Conseptos 
          texto={`Objetos: En POO, los objetos son como los protagonistas de nuestro código. Puedes imaginarlos como cosas o personas del mundo real. Por ejemplo, si estamos haciendo un juego, podemos tener objetos como "jugador", "enemigo" o "poción". Cada objeto tiene características (como color de cabello o nivel de energía) y puede hacer cosas (como moverse o atacar).`}
        />

        <Sintaxis 
          codigo={`objeto jugador:
  vida: cantidad de vida
objeto enemigo:
  vida: cantidad de vida,
  daño: cantidad de daño`}
          consola={`Error: "cantidad de vida" no esta definido.`}
        />

        <h2>Clases</h2>

        <Conseptos 
          texto={`Las clases son como las plantillas o moldes para crear objetos. Imagínalas como un diseño o un plano que define cómo se verá y cómo se comportará un objeto. Por ejemplo, si la clase es "Perro", los objetos creados a partir de esa clase podrían ser diferentes razas de perros. La clase define qué propiedades (como nombre o edad) y qué acciones (como ladrar o saltar) tendrá el objeto.`}
        />

        <Sintaxis 
          codigo={`Clase Perro:
  # caracteristicas del objeto perro.
Clase Gato:
  # caracteristicas del objeto gato.`}
        />

        <Conseptos 
          texto={`En el ejemplo de objetos se debe cambiar la palabra Objeto por clases osea asi`}
        />

        <h3>antes</h3>

        <Sintaxis 
          codigo={`objeto jugador:
  vida: cantidad de vida
objeto enemigo:
  vida: cantidad de vida,
  daño: cantidad de daño`}
          consola={`Error: "cantidad de vida" no esta definido.`}
        />

        <h3>ahora</h3>

        <Sintaxis 
          codigo={`Clase Jugador:
  vida: cantidad de vida

Clase Enemigo:
  vida: cantidad de vida,
  daño: cantidad de daño`}
          consola={`Error: "cantidad de vida" no esta definido.`}
        />

        <h2>Propiedades</h2>

        <Conseptos 
          texto={` Las propiedades son características o datos que tienen los objetos. Pueden ser cosas como el color, el tamaño, el nombre o cualquier información relevante del objeto. Por ejemplo, un objeto "coche" podría tener propiedades como "marca", "modelo" y "año".`}
        />

        <Sintaxis 
          codigo={`Clase Persona:
    Propiedad: nombre
    Propiedad: edad
    Propiedad: direccion`}
        />

        <h2>Metodos</h2>

        <Conseptos 
          texto={`Los métodos son las acciones o comportamientos que pueden realizar los objetos. Son como las habilidades o funciones que el objeto puede llevar a cabo. Por ejemplo, un objeto "coche" podría tener métodos como "acelerar", "frenar" o "girar".`}
        />

        <Sintaxis 
          codigo={`Clase Coche:
  Propiedad: valor
  Propiedad: valor
  
  Metodo acelerar():
    # escribir codigo
  Metodo Frenar():
    # escribir codigo`}
          consola={`Error: "Metodo acelerar" no son caracteres vañodps para un metodo.`}
        />

        <Conseptos 
          texto={`Los metodos son igual que las funciones solo que estos van dentro de un objeto , un metodo tiene las mismas propiedades que una funcion osea que puedes nombrarlo , puedes ponerle parametros.`}
        />

        <h3>funcion</h3>
        
        <Sintaxis 
          codigo={`funcion Acelerar(cantidad):
  # escribir contenido`}
        />

        <h3>metodos</h3>
        
        <Sintaxis 
          codigo={`Clase Coche:
  Metodo Acelerar(cantidad):
    # escribir codigo`}
          consola={`Error: "Metodo Acelerar" no son caracteres validos para el nombre de un metodo.`}
        />

        <h2>Usar un objeto</h2>

        <Conseptos 
          texto={`Para usar un objeto debemos crear una variable donde llamaremos al objeto con el metodo que queremos que se llame el objeto`}
        />

        <Sintaxis 
          codigo={`Clase Persona:
  Propiedad: edad
  MostrarEdad(edad):
    mostrar(edad)

edadPersona = nueva Persona.MostrarEdad(15);`}
        />

        <h2>Encapsulamiento</h2>

        <Conseptos 
          texto={`La encapsulación es un concepto que nos ayuda a organizar y proteger nuestros objetos. Significa que los datos y las acciones relacionadas se mantienen juntas dentro del objeto y no pueden ser accedidos o modificados desde fuera de él, a menos que se permita expresamente. Es como una cajita que guarda sus secretos y solo muestra lo que queremos que se vea.`}
        />

        <Sintaxis 
          codigo={`# Definición de la clase "Persona"
Clase Persona:
    Propiedad: nombre
    Propiedad: edad
    Propiedad: direccion

    Persona(nombre, edad, direccion):
        EstablecerNombre(nombre)
        EstablecerEdad(edad)
        EstablecerDireccion(direccion)

    EstablecerNombre(nuevoNombre):
        nombre = nuevoNombre

    ObtenerNombre():
        retornar nombre

    EstablecerEdad(nuevaEdad):
        edad = nuevaEdad

    ObtenerEdad():
        Devolver edad

    EstablecerDireccion(nuevaDireccion):
        direccion = nuevaDireccion

    ObtenerDireccion():
        retornar direccion

# Creación de un objeto de la clase "Persona"
persona1 = nuevo Persona()

# Establecer los datos de la persona utilizando los métodos de encapsulamiento
persona1.EstablecerNombre("Juan Perez")
persona1.EstablecerEdad(30)
persona1.EstablecerDireccion("Calle Principal, 123")

# Obtener y mostrar los datos de la persona utilizando los métodos de encapsulamiento
nombre = persona1.ObtenerNombre()
edad = persona1.ObtenerEdad()
direccion = persona1.ObtenerDireccion()

mostrar ("Nombre: " + nombre)
mostrar ("Edad: " + edad)
mostrar ("Dirección: " + direccion)`}
          consola={`Nombre: Juan Perez
Edad: 30
Dirección: Calle Principal, 123`}
        />

        <h2>Herencia</h2>

        <Conseptos 
          texto={`La herencia es como el compartir características entre las clases. Si tenemos una clase "Animal" y otra clase "Perro", podemos decir que la clase "Perro" hereda de la clase "Animal". Esto significa que la clase "Perro" obtendrá todas las propiedades y métodos de la clase "Animal" y también podrá agregar sus propias características específicas de perro.`}
        />

        <Sintaxis 
          codigo={`# Definición de la clase "Vehiculo"
Clase Vehiculo:
    Propiedad: marca
    Propiedad: modelo

    Vehiculo(marca, modelo):
        marca = marca
        modelo = modelo

    obtenerInformacion():
        mostrar("Marca: " + marca)
        mostrar("Modelo: "+ modelo)

#Definición de la clase "Coche" que hereda de la clase "Vehiculo"
Clase Coche heredar de Vehiculo:
    Propiedad color

    Coche(marca, modelo, color):
        Vehiculo(marca, modelo)  # Llamada al constructor de la clase base
        color = color

    obtenerInformacion():
        heredar.obtenerInformacion()  # Llamada al método de la clase base
        mostrar("Color: ", color)

# Creación de un objeto de la clase "Coche"
coche1 = nuevo Coche("Ford", "Mustang", "Rojo")

# Uso del método para obtener información del coche
coche1.obtenerInformacion()`}
          consola={`Marca: Ford
Modelo: Mustang
Color: Rojo`}
        />

        <h2>Polimorfismo</h2>
        
        <Conseptos 
          texto={`El polimorfismo es un concepto divertido que significa que los objetos pueden comportarse de diferentes maneras según el contexto. Imagina que tienes una clase "Animal" con un método llamado "hacerSonido". Cuando creas un objeto "Perro" y llamas a ese método, el perro ladra. Pero si creas un objeto "Gato" y llamas al mismo método, el gato maulla. Aunque están usando el mismo método, cada objeto lo implementa de una forma diferente.`}
        />

        <Sintaxis 
          codigo={`# Definición de la clase "Coche"
Clase Coche:
    Propiedad: marca
    Propiedad: modelo
    Propiedad: color
    Propiedad: velocidad

    Coche(marca, modelo, color):
        marca = marca
        modelo = modelo
        color = color
        velocidad = 0

    acelerar(velocidadIncremento):
        velocidad = velocidad + velocidadIncremento

    frenar(velocidadDecremento):
        Si velocidad >= velocidadDecremento:
            velocidad = velocidad - velocidadDecremento
        Sino:
            velocidad = 0

    obtenerInformacion():
        mostrar("Marca: " + marca)
        mostrar("Modelo: " + modelo)
        mostrar("Color: " + color)
        mostrar("Velocidad: " + velocidad)

# Creación de un objeto de la clase "Coche"

coche1 = nuevo Coche("Ford", "Mustang", "Rojo")

# Uso de los métodos del coche

coche1.acelerar(50)
coche1.obtenerInformacion()

coche1.frenar(20)
coche1.obtenerInformacion()`}
          consola={`Marca: Ford
Modelo: Mustang
Color: Rojo
Velocidad: 50

Marca: Ford
Modelo: Mustang
Color: Rojo
Velocidad: 20`}
        />

      </main>
      <Footer />
    </>
  );
}

export default PodLogica;