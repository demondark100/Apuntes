import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScript from "../../../../../componentes/lenguajes/JavaScript";
import Python from "../../../../../componentes/lenguajes/Python";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";

function VariableLogica() {
  return (  
    <>
      <Menu2 />
      <MensajeModal texto={`Todo el codigo escrito en esta parte lo puedes ejecutar en tu consola del navegador para comprobar los resultados.

Para eso presiona F12 y pega los codigos que aparecen o puedes escribirlo tu mism@.`}/>
      <main>
        <h1>variables</h1>
        <Conseptos texto={`Las variables nos sirven para guardar los distintos tipos de datos o cualquier cosa.`}/>
        <h3>pseudocodigo</h3>
        <Python codigo={`nombre de la variable = dato que queremos guardar;`}/>
        <h3>codigo</h3>
        <Python codigo={`string = "string";
entero = 25;
flotante = 3.8;`}/>
        <h2>operaciones</h2>
        <Conseptos texto={`Las variables pueden guardar operaciones matematicas.`}/>
        <h3>ejemplo</h3>
        <JavaScript codigo={`suma = 5 + 5; //el valor de la variable llamada suma es 10
multiplicar = 5 * 5; //el valor de la variable multiplicacion es 25`}/>

        <h2>guardar</h2>
        <Conseptos texto={`Podemos guardar una variable dentro de otra por ejemplo.`}/>
        <JavaScript codigo={`a = 15; //la variable "a" es 15
b = a + 5; //la variable "b" es 20`}/>
        <h3>explicacion</h3>
        <Conseptos texto={`La variable "b" es 20 porque estamos sumando 
15 + a 
y como te das cuenta "a" es igual a 5
lo que quiere decir que estamos sumando 
15 + 5`}/>
        <h2>booleanos</h2>
        <Conseptos texto={`Las variables tambien guardan booleanos por ejemplo.`}/>
        <JavaScript codigo={`verdadero = true;
falso = false`}/>
        <JavaScript codigo={`igualdad1 = 5 == 5;`}/>
        <JavaScript codigo={`comparar = 15 < 2;`}/>
        <Conseptos texto={`Si ejecutaste los codigos en la consola veras como es que funciono y te mostrara los resultados correspodientes correspondientes.`}/>

        <h2>¡Para que sirve!</h2>
        <Conseptos texto={`Bueno una variable se usa para todo en la programacion.
Desarrollemos un juego:`}/>
        <JavaScript codigo={`jugadorVida = 100;
enemigoDaño = 5;
//cada vez que usuario reciba daño jugadorVida
//se restara por "enemigoDaño".`}/>

        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer un programa que saque el area de un cuadrado.
formula:
L x L
lado x lado`}/>
        <Ejercicios 
          texto1={`no puedo 😒`}
          texto2={`ocultar resultado si puedo perra 😎`}
          codigo={<JavaScript codigo={`lado1 = 15;
lado2 = 15;
resultado = lado1 * lado2;`}/>}
        />
      </main>
      <Footer />
    </>
  );
}

export default VariableLogica;