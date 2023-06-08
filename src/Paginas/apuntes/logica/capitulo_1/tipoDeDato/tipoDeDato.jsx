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

        <h2>strings</h2>
        <Conseptos texto={`Si nosotros escribimos solo una vocal o letra del alfabeto se le concidera como (un caracter).`}/>
        <Sintaxis codigo={`"a"
"b"`}/>
        <Conseptos texto={`Pero si escribimos mas de un caracter se le considera como (cadena de caracteres).`}/>
        <Sintaxis codigo={`"Hola mundo"`}/>
        <Conseptos texto={`Dato curioso los espacios tambien cuentan como un caracter , bueno sea (un caracter) o (cadena de caracteres) a ambos se les llama strings.`}/>

        <h2>numericos</h2>
        <Conseptos texto={`A diferencia de las strings los datos numericos no necesitan de comillas("")`}/>
        <h2>Enteros</h2>
        <Sintaxis codigo={`1
8
500
258`}/>
        <h2>Flotantes</h2>
        <Conseptos texto={`En la programacion un dato flotante siempre sera flotante con esto me refiero a que si en un lenguaje le pasamos un numero entero se convertira en flotante agregando ".0"`}/>
        <h3>ejemplo</h3>
        <Sintaxis codigo={`pasar dato entero                50
se convierte en flotante        50.0

pasar dato entero                257
se convierte en flotante        257.0`}/>
        <h2>Booleanos</h2>
        <Sintaxis codigo={`true
false`}/>
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