import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import CondicionalesDiagrama from "./diagrama";
import { useRef, useState } from "react";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios"

function CondicionalesLogica() {
  const [mostrarCondicional, setMostrarCondicional] = useState(false);
  const contenedor = useRef(null);
  const mostrarOcultarCondicional=()=>{
    contenedor.current.style.top = `${window.scrollY}px`;
    setMostrarCondicional(true)
    document.body.classList.add("condicionalBody")
  } 
  return (  
    <>
      <main>
        <h1>Condicionales</h1>
        
        <Conseptos 
          texto={`Las condicionales en programación son instrucciones que permiten tomar decisiones en función de si se cumple o no una determinada condición.`}
        />

        <h2>pseudocodigo</h2>

        <Sintaxis 
          codigo={`si "lavaste los platos" entonces:
  #ganas un premio
sino:
  #te castigan`}
          consola={`Error en la linea 1: "lavaste los platos" no se esta comparando con nada.`}
        />

        <Conseptos 
          texto={`Tambien podemos hacer mas de una condicional por si tenemos mas opciones.

          Ahora un pequeño ejemplo grafico para entender mejor.`}
        />

        <p 
          onClick={mostrarOcultarCondicional}
          className="mostrar_ejemplo_grafico"
        >
          mostrar ejemplo grafico
        </p>

        <div
          ref={contenedor} 
          className={`diagramaContentCondicional ${mostrarCondicional ? "":"ocultarMostrarCondicional"}`}>
          <CondicionalesDiagrama cerrar={setMostrarCondicional}/>
        </div>

        <h2>pseudocodigo</h2>

        <Conseptos 
          texto={`Hacer un programa que verifique si un numero es positivo o negativo.`}
        />

        <Sintaxis 
          codigo={`numero = pedirDato("introduce un numero.");

si numero > 0 entonces:
  mostrar("el numero es positivo");
sino si numero < 0 entonces:
  mostrar("el numero es negativo");
sino:
  mostrar("el numero es cero");`}
          consola={`el numero es cero`}
        />

        <Conseptos 
          texto={`Aqui en las condicionales podemos evaluar todo tipo de cosas operaciones matematicas , operaciones logicas igualdades comparaciones lo que sea con tal de que se adapte a lo que necesites.`}
        />

        <h2>ejemplo</h2>

        <Sintaxis 
          codigo={`si 15 == 15 entonces:
  mostrar("15 si es igual a 15.");

#otra condicion
si "hola" == "hola" entonces:
  mostrar("hola si es igual a hola");

#otra condicion
si 5 + 5 == 15 entonces:
  mostrar("el resultado de 5 + 5 si es igual a 15");

#otra condicion
si 5 * 5 == 25 o 4 - 4 > 2 entonces:
  mostrar("uno de esos dos si se cumplio puede que 5 * 5 si sea igual a 25 o que 4 - 4 sea mayor a 2.");

#otra condicion
si 8 - 8 == 0 y 3 + 3 == 1 entonces:
  mostrar("solo aparecera si ambos se cumplen.");

#otra condicion
si 10 + 10 != 8 ebtonces:
  mostrar("el resultado de 10 + 10 si es distinto a 8.");
`}
        consola={`15 si es igual a 15.
hola si es igual a hola
uno de esos dos si se cumplio puede que 5 * 5 si sea igual a 25 o que 4 - 4 sea mayor a 2.
el resultado de 10 + 10 si es distinto a 8.
`}
      />

      <h2>resultados</h2>
        <ol>
          <li>se cumple porque 15 si es igual a 15</li>
          <li>Si se cumple porque la string "hola" es igual a "hola"</li>
          <li>No se cumple porque 5 + 5 no es igual a 15</li>
          <li>Si se cumple porque 5 * 5 si es 25 por mas que en la otra condicion no se cumpla recuerda estamos usando o asi que no es necesario que se cumplan ambos.</li>
          <li>No se cumple porque 3 + 3 no es igual a 1 recuerda ambos deben cumplirse para que la condicion se cumpla asi que no importa que 8 - 8 si sea iagual a 0 no se cumplen ambos.</li>
          <li>Si se cumple porque la suma de 10 + 10 es distinto de 8</li>
        </ol>

        <h2>¡Para que sirve!</h2>
        
        <Conseptos 
          texto={`Es demasiado util de hecho se usa todo el tiempo al igual que las variables , ya di demasiados ejemplos del uso de un if.
por ejemplo al desarrollar un juego:
si el jugador se aserca a un spawn aparecen zomvies
sino los zombies dejan de aparecer.`}
        />

        <h2>¡Proyecto!</h2>

        <Conseptos 
          texto={`Hacer un programa que verifique si un numero es mayor o menor que otro numero (El usuario debe poder poner los numeros para compararlos.)`}
        />

        <Ejercicios 
          texto1={"No man esto esta dificil mejor hago otro ejercicion mas facil."}
          texto2={"Quien dijo dificil? esta re facil."}
          codigo={<Sintaxis 
            codigo={`numero1 = pedirDato("Introduce el primer numero");
numero2 = pedirDato("Introduce el segundo numero");

si numero1 > numero2 entonces:
  mostrar("El numero 1 es mayor al numero 2");
sino si numero2 > numero1 entonces:
  mostrar("El numero 2 es mayor al numero 1");
sino entonces:
  mostrar("Ambos numeros son iguales.");`}
            consola={"Ambos numeros son iguales."}
          />}
        />
        

        
      </main>
      <Footer />
    </>
  );
}

export default CondicionalesLogica;