import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";

function FuncionesLogica() {
  return (  
    <>
      <main>
        <h1>Funciones</h1>

        <Conseptos 
          texto={`Las funciones son un bloque de codigo que podemos reutulizar cuantas veces queramos por ejemplo una funcion nos puede ahorrar muchas lineas de codigo , evita que escribamos el codigo una y otra y otra vez.`}
        />

        <h2>ejercicio</h2>
        
        <Conseptos 
          texto={`Hacer un programa que haga sumas.`}
        />

        <h2>sin funciones</h2>

        <Sintaxis 
          codigo={`suma1 = 5 + 4;
suma2 = 8 + 5;
suma3 = 3 + 2;
mostrar(suma1,suma2,suma3);`}
          consola={`9
13
5`}
        />

        <Conseptos 
          texto={`Como te das cuenta tenemos que crear una variable para cada suma y ademas debemos cambiar los numeros que queremos sumar en cada variable bueno las funciones vienen a evitar eso de escribir el mismo codigo muchas veces.`}
        />

        <h3>pseudocodigo</h3>

        <Sintaxis 
          codigo={`funcion nombre de la funcion (parametro):
  # escribir codigo`}
          consola={`Error: "nombre de la funcion" no es un nombre valido para una funcion.`}
        />
        
        <h2>parametros</h2>

        <Conseptos 
          texto={`Los parametros son una especie de variable que guarda el dato que le pasemos a la funcion.`}/>
        <Sintaxis 
          codigo={`funcion Parametro(dato1,dato2,dato3):
  # hacer algo con los parametros.`}
        />

        <h2>llamar funcion</h2>

        <Conseptos 
          texto={`Podemos llamar a las funciones de esta manera.`}
        />
        
        <Sintaxis 
          codigo={`nombre de la funcion(parametros)`}
          consola={`Error: "nombre de la funcion" no es un nombre valido para una funcion.`}
        />

        <Conseptos 
          texto={`Si la funcion no recibe parametros simplemente en la parte de los parametros "()" se deja vacio.`}
        />

        <h2>ejercicio</h2>

        <Conseptos 
          texto={`Hacer una funcion que haga una suma.`}
        />

        <h3>pseudocodigo</h3>
        
        <Sintaxis 
          codigo={`funcion sumar(n1,n2):
  sumar = n1 + n2;
  mostrar(sumar);

sumar(5,8);
sumar(20,854);
sumar(357,247);
sumar(8794,2);`}
          consola={`13
274
904
8796`}
        />

        <Conseptos 
          texto={`Dentro de una funcion podemos escribir lo que sea.`}
        />

        <h2>ejercicio</h2>

        <Conseptos 
          texto={`Hacer una funcion que multiplique cualquier numero por 5.`}
        />

        <h3>pseudocodigo</h3>

        <Sintaxis codigo={`funcion multiplicar(number):
  multiplicar = number * 5;
  mostrar(multiplicar);

multiplicar(5);
multiplicar(8);
multiplicar(4);
multiplicar(2);
multiplicar(3);`}
          consola={`25
40
20
10
15`}
        />

        <h2>¡Proyecto!</h2>
        <Conseptos 
          texto={`Hacer una funcion que de una licensia de conducir a un usuario sie el usuario es menor de 18 años no se le da la licensia pero si es mayor o igual de 18 años si se le da la licensia.`}
        />

        <h3>pseudocodigo</h3>
        <Sintaxis 
          codigo={`funcion licensiaedad():
  si edad < 18 entonces:
    mostrar("Eres menor aun no puedes recibir una lisencia.");
  sino:
    mostrar("Ya eres mayor de edad puedes recibir una lisencia.");

licensia(15);
licensia(25);`}
          consola={`Eres menor aun no puedes recibir una lisencia.
Ya eres mayor de edad puedes recibir una lisencia.`}
        />

        <h2>¡Para que sirve!</h2>

        <Conseptos 
          texto={`Las funciones nos sirven como ya mensione antes para evitar escribir el mismo codigo varias veces.
Por ejemplo estamos desarrollando un juego bueno podemos hacer una funcion que sea el daño que hace un enemigo a esa funcion le podemos pasar un parametro el cual seria cuanto daño queremos que haga un enemigo.`}
        />
        
      </main>
      <Footer />
    </>
  );
}

export default FuncionesLogica;