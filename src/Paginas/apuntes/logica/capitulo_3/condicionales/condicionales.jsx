import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScript from "../../../../../componentes/lenguajes/JavaScript";
import Python from "../../../../../componentes/lenguajes/Python";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import CondicionalesDiagrama from "./diagrama";
import { useRef, useState } from "react";

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
      <Menu2 />
      <Capitulos />
      <MensajeModal texto={`Aqui podras escribir el codigo en el navegador ya que escribiremos codigo javaScript.`}/>
      <main>
        <h1>Condicionales</h1>
        <Conseptos texto={`Las condicionales en programación son instrucciones que permiten tomar decisiones en función de si se cumple o no una determinada condición.`}/>
        <h2>pseudocodigo</h2>
        <Python codigo={`si "lavaste los platos" entonces:
  #ganas un premio
sino:
  #te castigan`}/>
        <Conseptos texto={`Tambien podemos hacer mas de una condicional por si tenemos mas opciones.

Ahora un pequeño ejemplo grafico para entender mejor.`}/>


        <p 
          onClick={mostrarOcultarCondicional}
          className="mostrar_ejemplo_grafico"
        >mostrar ejemplo grafico</p>
        <div
          ref={contenedor} 
          className={`diagramaContentCondicional ${mostrarCondicional ? "":"ocultarMostrarCondicional"}`}>
          <CondicionalesDiagrama cerrar={setMostrarCondicional}/>
        </div>

        <h2>pseudocodigo</h2>
        <Conseptos texto={`Hacer un programa que verifique si un numero es positivo o negativo.`}/>
        <Python codigo={`#no copiar
numero = pedirDato("introduce un numero.");

si numero > 0 entonces:
  mostrar("el numero es positivo");
sino si numero < 0 entonces:
  mostrar("el numero es negativo");
sino:
  mostrar("el numero es cero");`}/>
        <Conseptos texto={`Para verificar el resultado lo pasaremos a codigo javaScript para que lo puedas copiar en tu consola del navegador.`}/>
        <JavaScript codigo={`numero = prompt("introduce un numero");

if(numero > 0){
  alert("el numero es positivo");
} else if (numero < 0){
  alert("el numero es negativo");
} else {
  alert("el numero es cero");
}`}/>

        <Conseptos texto={`Aqui en las condicionales podemos evaluar todo tipo de cosas operaciones matematicas , operaciones logicas igualdades comparaciones lo que sea con tal de que se adapte a lo que necesites.`}/>
        <h2>ejemplo</h2>
        <Python codigo={`si 15 == 15 entonces:
  #hacer algo.

#otra condicion
si "hola" == "hola" entonces:
  #hacer algo

#otra condicion
si 5 + 5 == 15 entonces:
  #hacer algo

#otra condicion
si 5 * 5 == 25 o 4 - 4 > 2 entonces:
  #hacer algo

#otra condicion
si 8 - 8 == 0 y 3 + 3 == 1 entonces:
  #hacer algo

#otra condicion
si 10 + 10 != 8 ebtonces:
  #hacer algo
`}/>
      <h2>resultados</h2>
      <Conseptos texto={`1. se cumple porque 15 si es igual a 15
2. Si se cumple porque la string "hola" es igual a "hola"
3. No se cumple porque 5 + 5 no es igual a 15
4. Si se cumple porque 5 * 5 si es 25 por mas que en la otra condicion no se cumpla recuerda estamos usando o asi que no es necesario que se cumplan ambos.
5. No se cumple porque 3 + 3 no es igual a 1 recuerda ambos deben cumplirse para que la condicion se cumpla asi que no importa que 8 - 8 si sea iagual a 0 no se cumplen ambos.
6. Si se cumple porque la suma de 10 + 10 es distinto de 8`}/>
        <Conseptos texto={`En la mayoria de lenguajes el simbolo "y" , "o" , "not" se representan con:
y = &
o = |
not = !=
pero en algunos cambia la sintaxis.

En los lenguajes de programacion en vez de decir "si" podemos "if" y ya la sintaxis cambia.`}/>
        <h2>¡Para que sirve!</h2>
        <Conseptos texto={`Es demasiado util de hecho se usa todo el tiempo al igual que las variables , ya di demasiados ejemplos del uso de un if.
por ejemplo al desarrollar un juego:
si el jugador se aserca a un spawn aparecen zomvies
sino los zombies dejan de aparecer.`}/>
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Bueno aqui no dejare ningun proyecto debido a que te estaria forzando aprender un lenguaje pero puedes hacer los proyectos en los distintos lenguajes de programacion que estaran disponibles.`}/>
        
      </main>
      <Footer />
    </>
  );
}

export default CondicionalesLogica;