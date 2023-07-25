import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis.jsx"

function TipoDeDatos() {
  return (  
    <>
      <main>
        <h1>tipos de datos</h1>
        <Conseptos texto={`En la programacion tenemos 3 tipos de datos.

1: strings: Estas son las cadenas de texto en la programacion una cadena de texto siempre va dentro de ("") comillas.

2: numericos: Aqui en los datos numericos tenemos dos tipos de numeros:
  Enteros: Como su nombre lo dice son numeros enteros.
  Flotantes: Estos son numeros decimales.

3: Booleanos: Los Booleanos son solo verdadero o falso pero en la programacion se representan como (true / false).`}/>
        <h2>mostrar()</h2>
        <Conseptos 
          texto={`Antes de iniciar usaremos la funcion "mostrar()" esto sera para mostrar nuesto codigo en la consola,`}
        />

        <h3>pseudocodigo</h3>
        <Sintaxis 
          codigo={`mostrar(que deseamos mostrar);`}
          consola={`Error de sintaxis "que deseamos mostrar" no esta definido.`}
        />

        <h3>uso</h3>
        <Sintaxis 
          codigo={`mostrar(15)`}
          consola={`15`}
        />

        <Conseptos 
          texto={`En este codigo estamos mostrando el numero "15".`}
        />

        <h2>strings</h2>
        <Conseptos 
          texto={`Si nosotros escribimos solo una vocal o letra del alfabeto se le concidera como (un caracter).`}
        />
        <Sintaxis 
          codigo={`mostrar("a");
mostrar("b");`}
          consola={`a
b`}
        />

        <Conseptos 
          texto={`Pero si escribimos mas de un caracter se le considera como (cadena de caracteres).`}
        />

        <Sintaxis 
          codigo={`mostrar("Hola mundo");`}
          consola={`Hola mundo`}
        />

        <Conseptos 
          texto={`Dato curioso los espacios tambien cuentan como un caracter , bueno sea (un caracter) o (cadena de caracteres) a ambos se les llama strings.`}
        />

        <h2>numericos</h2>

        <Conseptos 
          texto={`A diferencia de las strings los datos numericos no necesitan de comillas("")`}
        />

        <h2>Enteros</h2>
        <Sintaxis 
          codigo={`mostrar(1);
mostrar(2);
mostrar(500);
mostrar(258);`}
          consola={`1
2
500
258`}
        />

        <h2>Flotantes</h2>

        <Conseptos 
          texto={`En la programacion un dato flotante siempre sera flotante con esto me refiero a que si en un lenguaje le pasamos un numero entero se convertira en flotante agregando ".0"`}
        />
        <h3>ejemplo</h3>

        <Sintaxis 
          codigo={`pasar dato entero                50
se convierte en flotante        50.0

pasar dato entero                257
se convierte en flotante        257.0`}
          consola={`No se escribio codigo aqui.`}
        />

        <h2>Booleanos</h2>

        <Conseptos 
          texto={`Los booleanos tampoco necesitan de comillas.
Estos indican verdadero o falso.
true = verdadero.
false = falso.
En este caso si usaremos true y false . esto porque se aplican para todos los lenguajes de programacion.`}
        />

        <Sintaxis 
          codigo={`mostrar(true);
mostrar(false);`}
          consola={`true
false`}
        />

        <h2>indefinido</h2>
        
        <Conseptos
          texto={`Este tipo de dato tampoco necesita de comillas , este tipo de dato aparecera cuando una variable no este definida o algo pase en el programa que no esta definido.`}
        />

        <Sintaxis 
          codigo={`mostrar(indefinido);`}
          consola={`indefinido`}
        />

        <h2>nulo</h2>
        
        <Conseptos 
          texto={`Este dato nos indicara si algo en nuestro progrma es nulo.`}
        />

        <Sintaxis 
          codigo={`mostrar(nulo);`}
          consola={`nulo`}
        />


        <h2>¿Y para que sirve?</h2>
        <Conseptos texto={`bueno estamos desarrollando un juego:
numeros enteros:
100 sera la vida del jugador
numeros flotantes:
los zombies comunes haran un daño de 2.5 de daño al jugador.
booleanos:
si el jugador esta cerca de un spawn de zombies spawn se pone en "true" y aparecen zombies.
si el jugador se aleja del spawn el spawn se pone en false y no aparecen zombies.
strings:
si el jugador gana dar el mensaje "ganaste"
si el jugador pierder dar el mensaje "perdiste"`}/>

      </main>
      <Footer />

    </>
  );
}

export default TipoDeDatos;