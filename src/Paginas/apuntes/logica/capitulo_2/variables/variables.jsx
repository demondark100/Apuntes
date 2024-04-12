import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis"
import Resumenes from "../../../../../componentes/resumenes/resumenes"

function VariableLogica() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Una variable guarda cualquier dato para ser usado mas adelante, este puede cambiar su valor a medida que abanza el programa.",
        "lenguage": "Sintaxis",
        "codigo": `nombre = "Juanito Alcachofa";
edad = 15;
mayor = false;
genero = "M";
dinero = 34.05;`
      }]}/>
      <main>

        <h1>variables</h1>

        <Conseptos 
          texto={`Las variables nos sirven para guardar los distintos tipos de datos o cualquier cosa.
En simples palabras es como si fuesen cajitas que pueden guardar numeros , strings , flotantes.
De forma grafica se veria algo como esto:`}
        />
        
        <Sintaxis 
          codigo={`#Guardando numero
  ---------- 
  |        |
  |   15   |
  |        |
  ----------
#guardando string
  ----------
  |        |
  | "hola" |
  |        |
  ----------
#guardando flotante
  ----------
  |        |
  |  15.5  |
  |        |
  ----------
`}
          consola={`Error de sintaxis en la linea 2: ---------- no forman parte de la sintaxis del lenguaje.  
`}
        />

        <h2>pseudocodigo</h2>

        <Sintaxis 
          codigo={`nombre de la variable = dato que queremos guardar;`}
          consola={`Error de sintaxis en la linea 1: "nombre de la variable = dato que queremos guardar;" no son palabras clave de este lenguaje.`}
        />

        <Sintaxis 
          codigo={`string = "string";
entero = 25;
flotante = 3.8;
mostrar(string);
mostrar(entero);
mostrar(flotante);`}
          consola={`string
25
3.8`}
        />

        <h2>operaciones</h2>

        <Conseptos 
          texto={`Las variables pueden guardar los resultados de las operaciones matematicas.`}
        />

        <Sintaxis 
          codigo={`suma = 5 + 5; #el valor de la variable llamada suma es 10
multiplicar = 5 * 5; #el valor de la variable multiplicacion es 25
mostrar(suma);
mostrar(multiplicar);`}
          consola={`10
25`}
        />

        <h2>guardar</h2>

        <Conseptos 
          texto={`Podemos guardar una variable dentro de otra por ejemplo.`}
        />

        <Sintaxis 
          codigo={`a = 15; #la variable "a" es 15
b = a + 5; #la variable "b" es 20
mostrar(b);`}
          consola={`20`}
        />

        <h3>explicacion</h3>

        <Conseptos 
          texto={`La variable "b" es 20 porque estamos sumando 
15 + a 
y como te das cuenta "a" es igual a 5
lo que quiere decir que estamos sumando 
15 + 5`}
        />

        <h2>booleanos</h2>

        <Conseptos 
          texto={`Las variables tambien guardan booleanos por ejemplo.`}
        />

        <Sintaxis 
          codigo={`verdadero = true;
falso = false;
mostrar(verdadero);
mostrar(falso);`}
          consola={`true
false`}
        />

        <Sintaxis 
          codigo={`igualdad1 = 5 == 5;
igualdad2 = 10 == 57;
mostrar(igualdad1);
mostrar(igualdad2);`}
          consola={`true
false`}
        />

        <Sintaxis 
          codigo={`comparar1 = 15 < 2;
comparar2 = 25 < 8974;
mostrar(comparar1,comparar2);`}
          consola={`false
true`}
        />

        <Conseptos 
          texto={`Si ejecutaste los codigos en la consola veras como es que funciono y te mostrara los resultados correspodientes.`}
        />

        <h2>cambio de valor</h2>
        
        <Conseptos 
          texto={`Una variable puede ir cambiando su valor a medida que nuestro programa sea escrito por ejemplo.`}
        />

        <Sintaxis 
          codigo={`valor1 = 25;
valor2 = 15;
valor1 = valor2;
mostrar(valor1);`}
          consola={`15`}
        />

        <h2>¡Para que sirve!</h2>

        <Conseptos 
          texto={`Bueno una variable se usa para todo en la programacion.
Desarrollemos un juego:`}
        />

        <Sintaxis 
          codigo={`jugadorVida = 100;
enemigoDaño = 5;
# cada vez que usuario reciba daño jugadorVida
# se restara por "enemigoDaño".`}
          consola={`Consola limpia.`}
        />

        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer un programa que saque el area de un cuadrado.
formula:
L x L
lado x lado`}/>
        <Ejercicios 
          texto1={`no puedo 😒`}
          texto2={`ocultar resultado si puedo perra 😎`}
          codigo={<Sintaxis 
            codigo={`lado1 = 15;
lado2 = 15;
resultado = lado1 * lado2;
mostrar(resultado);`}
            consola={`225`}
          />}
        />
      </main>
      <Footer />
    </>
  );
}

export default VariableLogica;