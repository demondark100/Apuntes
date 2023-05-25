import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis"

function OperadoresLogica() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>operadores</h1>
        <Conseptos texto={`Aqui tenemos las mismas operaciones basicas de las matematicas osea + , - , x , /`}/>
        <Sintaxis codigo={`5 + 5         #suma
30 - 8        #resta
5 x 5         #multiplicacion
25 / 5        #division`}/>
        <Conseptos texto={`En la programacion multiplicar(x) no se representa con una (x) se representa con:`} />
        <Sintaxis codigo={`*
5 * 5 = 25      true`}/>
        <Conseptos texto={`Y los demas simbolos se representan tal como estan en el ejemplo anterior (+ - / *)

Tambien tenemos a los operadores de mayor menor`}/>
        <Sintaxis codigo={`<
>
<=
>=`}/>
        <h2>operadores logicos</h2>
        <Conseptos texto={`Los operadores logicos son los siguientes.
and: y
or: o
not: contrario`}/>
        <h2>AND</h2>
        <Conseptos texto={`AND es para que se ejecute una u otra cosa ejemplo.`}/>
        <Sintaxis codigo={`#para salir lava los platos y limpia la casa`}/>
        <Conseptos texto={`si no lavas los platos pero si limpias la casa no sales.
si limpias la casa pero no lavas los platos no sales.
si lavas los platos y limpias la casa si sales.
si no lavas los platos y no limpias la casa no sales.

Como te das cuenta tienen que cumplirse ambos para que puedas salir.`}/>
        <h2>OR</h2>
        <Conseptos texto={`Esto es similar a "AND" solo que aqui solo necesitas hacer una actividad para salir`}/>
        <Sintaxis codigo={`#limpia la casa o lava los platos`}/>
        <Conseptos texto={`si lavas los platos pero no limpias la casa sales.
si limpias la casa pero no lavas los platos sales.
si no lavas los platos y no limpias la casa no sales.
si lavas los platos y limpias la casa sales.

Como te das cuenta solo necesitas hacer una actividad para salir.`}/>
        <h2>NOT</h2>
        <Conseptos texto={`Esto es lo contrario osea que si te dicen:`}/>
        <Sintaxis codigo={"#puedes salir."}/>
        <Conseptos texto={`Tu al usar not es como si te dijera:`}/>
        <Sintaxis codigo={`#no puedes salir.`}/>
        <h2>booleanos</h2>
        <Conseptos texto={`todos estos operadores tanto aritmeticos como logicos se complementan con los valores booleanos.`}/>
        <h3>aritmeticos</h3>
        <Sintaxis codigo={`5 + 5 = 10       true
8 > 1            true
38 < 1           false
5 - 5 = 38       false
15 >= 15         true`}/>
        <h3>logicos</h3>
        <Sintaxis codigo={`#simplemente hice una actividad:
limpie y ordene para salir    false
limpie o ordene para salir    true`}/>

        <h2>igualdad</h2>
        <Conseptos texto={`Y que pasa si queremos comparar si un numero es igual al otro?
probablemente pienses en hacer algo como esto:`}/>
        <Sintaxis codigo={`25 = 25`}/>
        <Conseptos texto={`Si pensaste en algo como eso estas muy mal para poder hacer una comparacion de igualdad en la programacion se usa:`} />
        <Sintaxis codigo={`==`}/>
        <h3>ejemplo</h3>
        <Sintaxis codigo={`25 == 15     false
15 == 15     true`}/>
        <h2>¿Y para que sirve?</h2>
        <Conseptos texto={`Desarrollemos un juego:

Operadores aritmeticos:
jugador tiene 100 de vida
jugador recibe 2 de daño
vida del jugador se resta 100 - 2
la vida del jugador es 98

Operadores logicos
AND
si el jugador salta una vez y presiona la flecha de abajo hacer un combo.
OR
si el jugador se cura o se refujia recupera vida.
NOT
bueno esto se puede usar mas con los booleanos me refiero a que si 15 > 2 true pero podemos modificarlo en una parte del codigo para que sea false gracias a not.`}/>

      </main>
      <Footer />
    </>
  );
}

export default OperadoresLogica;