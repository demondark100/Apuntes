import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis"
import Resumenes from "../../../../../componentes/resumenes/resumenes"

function OperadoresLogica() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Tenemos operaciones matematicas basicas y otros exclusivos que se usan en la programacion.",
        "lenguage": "Sintaxis",
        "codigo": `+,-,*,/  # operaciones matematicas 
# multiplicar se representa con *
# dividir se representa con /


# operaciones de comparacion
<,>,<=,>=,== # todo es igual a matematica basica
# pero para representar si algo es igual a otra
# cosa se reemplaza "=" por "==".


# operadores logicos
and,or,not.
# and es si se cimplen dos cosas obligatorias.
# or es si se cumple una cosa obligatoria.
# !not es si algo es verdadero cambia a falso y biseversa 
# es como decir distinto de`


      }]}/>
      <main>

        <h1>operadores</h1>

        <h2>comentar codigo</h2>

        <Conseptos 
          texto={`Antes de empezar aprenderemos a comentar el codigo.
El comentar nuestro codigo nos sirve para que el lenguaje de programacion no detecte el codigo que escribamos esto nos puede servir para explicar nuestro codigo.

En este caso comentar codigo sera reresentado por "#".`}
        />

        <h2>uso</h2>

        <h3>error</h3>
        <Sintaxis 
          codigo={`mostrar("hola mundo"); esto nos sirve para mostrar hola mundo.`}
          consola={`Error de sintaxis: "esto nos sirve para mostrar hola mundo." es invalido.`}
        />

        <h2>correcto</h2>
        <Sintaxis 
          codigo={`mostrar("hola mundo"); # esto nos sirve para mostrar "hola mundo".`}
          consola={`hola mundo`}
        />

        <h2>Comenzar con las operaciones</h2>
        
        <Conseptos 
          texto={`Aqui tenemos las mismas operaciones basicas de las matematicas osea: 
+ ,
- ,
x , 
/`}
        />

        <Sintaxis 
          codigo={`mostrar(5 + 5);         #suma
mostrar(30 - 8);        #resta
mostrar(5 x 5);         #multiplicacion
mostrar(25 / 5);        #division`}
          consola={`10
22
Error en la linea 3: "x" no esta definido.
5`}
        />

        <Conseptos 
          texto={`En la programacion multiplicar(x) no se representa con una (x) se representa con:`} 
        />

        <Sintaxis 
          codigo={`# *
# 5 * 5 = 25
mostrar(5 * 5);`}
          consola={`25`}
        />

        <Conseptos 
          texto={`Y los demas simbolos se representan tal como estan en el ejemplo anterior: 
+,
-, 
/,
*

Tambien tenemos a los operadores de mayor menor`}
        />

        <Sintaxis 
          codigo={`# <
# >
# <=
# >=
mostrar(5 < 15);
mostrar(2 > 0);
mostrar(78 >= 78);
mostrar(85 > 152);`}
          consola={`true
true
true
false`}
        />

        <h2>operadores logicos</h2>

        <Conseptos 
          texto={`Los operadores logicos son los siguientes.
and: y
or: o
not: distinto`}
        />

        <h2>AND</h2>

        <Conseptos 
          texto={`AND es para que se ejecute una u otra cosa ejemplo.`}
        />

        <Sintaxis 
          codigo={`#para salir lava los platos y limpia la casa`}
          consola={`Consola limpia.`}
        />

        <Conseptos 
          texto={`si no lavas los platos pero si limpias la casa no sales.
si limpias la casa pero no lavas los platos no sales.
si lavas los platos y limpias la casa si sales.
si no lavas los platos y no limpias la casa no sales.

Como te das cuenta tienen que cumplirse ambos para que puedas salir.`}
        />

        <h2>OR</h2>

        <Conseptos 
          texto={`Esto es similar a "AND" solo que aqui solo necesitas hacer una actividad para salir`}
        />

        <Sintaxis 
          codigo={`#limpia la casa o lava los platos para salir.`}
          consola={`Consola limpia.`}
        />

        <Conseptos 
          texto={`si lavas los platos pero no limpias la casa sales.
si limpias la casa pero no lavas los platos sales.
si no lavas los platos y no limpias la casa no sales.
si lavas los platos y limpias la casa sales.

Como te das cuenta solo necesitas hacer una actividad para salir.`}
        />

        <h2>NOT</h2>
        
        <Conseptos 
          texto={`Esto es el distinto osea que si te dicen:`}
        />

        <Sintaxis 
          codigo={"#puedes salir."}
          consola={`Consola limpia.`}
        />

        <Conseptos 
          texto={`Al usar not es como si dijeram:`}
        />

        <Sintaxis 
          codigo={`#no puedes salir.`}
          consola={`Consola limpia.`}
        />

        <h2>booleanos</h2>

        <Conseptos 
          texto={`todos estos operadores tanto aritmeticos como logicos se complementan con los valores booleanos.`}
        />

        <h3>aritmeticos</h3>
        
        <Sintaxis 
          codigo={`mostrar(5 + 5 > 10 - 8);
mostrar(8 > 1);
mostrar(38 < 1);  
mostrar(5 - 5 distinto 38 * 8);
mostrar(15 >= 15);`}
          consola={`true
true
false
true
true`}
        />

        <h3>logicos</h3>

        <Sintaxis 
          codigo={`#simplemente hice una actividad:
# limpie y ordene para salir    false
# limpie o ordene para salir    true`}
          consola={`Consola limpia.`}
        />

        <h2>igualdad</h2>

        <Conseptos 
          texto={`Y que pasa si queremos comparar si un numero es igual al otro?
probablemente pienses en hacer algo como esto:`}
        />
        <Sintaxis 
          codigo={`mostrar(25 = 25);`}
          consola={`Error de sintaxis en la linea 1: "=" no es un operador de comparacion.`}
        />

        <Conseptos 
          texto={`Si pensaste en algo como eso estas muy mal para poder hacer una comparacion de igualdad en la programacion se usa:`} 
        />

        <Sintaxis 
          codigo={`# ==`}
          consola={`Consola limpia.`}
        />

        <h3>ejemplo</h3>

        <Sintaxis 
          codigo={`mostrar(25 == 15);
mostrar(15 == 15);`}
          consola={`false
true`}
        />

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