import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";
import Resumenes from "../../../../../componentes/resumenes/resumenes"

function ConcatenarLogica() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Con esto podemos unir dos cadenas de caracteres, esto es muy util en varios tipos de aplicaciones.",
        "lenguage": "Sintaxis",
        "codigo": `nombre = "Arthur";
mostrar("hola" + nombre + "bienvenido.");`
      }]}/>
      <main>

        <h1>Concatenacion</h1>

        <Conseptos  
          texto={`La concatenacion es para unir cadenas de texto(strings).`}
        />

        <h2>ejemplo</h2>

        <Sintaxis 
          codigo={`cadena1 = "hola ";
cadena2 = "mundo";`}
          consola={`Consola limpia.`}
        />

        <h2>¿Como se concatena?</h2>

        <Conseptos 
          texto={`Para concatenar strings se usa el simbolo "+"`}
        />
        
        <h3>ejemplo</h3>

        <Sintaxis 
          codigo={`cadena1 = "Hola ";
cadena2 = "soy Goku";
concatenar = cadena1 + cadena2;
mostrar(concatenar);`} 
          consola={`Hola soy Goku`}
        />
        
        <Conseptos 
          texto={`y que pasa si ponemos numeros dentro de comillas?`}
        />

        <Sintaxis 
          codigo={`numero1 = "15";
numero2 = "5";`}
          consola={`Consola limpia.`}
        />

        <Conseptos 
          texto={`Probablemente pienses que se sumaran ya que son numeros pero no es asi porque a esos numeros los estamos encerrando en comillas lo que los convierte en cadenas de texto.`}
        />

        <Sintaxis 
          codigo={`numero1 = "15";
numero2 = "5";
resultado = numero1 + numero2;
mostrar(resultado);`}
          consola={`155`}
        />

        <h2>ejercicio</h2>

        <Conseptos 
          texto={`Hagamos una oracion gracias a la concatenacion.`}
        />

        <Sintaxis 
          codigo={`musica = "Come a Little Closer";
resultado = "la musica " + musica + " es un temazo.";
mostrar(resultado);`}
          consola={`la musica Come a Little Closer es un temazo.`}
        />

        <h2>explicacion</h2>

        <Conseptos 
          texto={`El resultado es "la musica Come a Little Closer es un temazo."

          Esto es debido a que: `}
        />
        <ol>
          <li>Creamos una variable llamada musica con el valor "Come a Little Closer".</li>
          <li>Creamos una variable llamada resultado.</li>
          <li>{`En la variable resultado nos encargamos de concatenar distintas strings.
          string 1: "la musica ".
          string 2: "Come a Little Closer".
          string 3: " es un temazo."`}</li>
        </ol>
        <Conseptos texto={`Recuerda la variable musica tiene el valor "Come a Little Closer" por eso sale esa cadena texto.
        En conclucion es como si estuvieramos haciendo esto.`}/>

        <Sintaxis 
          codigo={`"la musica " + "Come a Little Closer" + " es un temazo."
                   variable musica`}
          consola={`Error de sintaxis en la linea 1: ""la musica " + "Come a Little Closer" + " es un temazo." " no son palabras claves de este lenguaje.`}
        />
        
        <h2>¡Para que sirve!</h2>
        
        <Conseptos 
          texto={`La concatenacion nos sirve para muchas cosas por ejemplo.

          desarrollamos una IA
          el usuario dice su nombre
          la IA lo procesa y saluda al usuario con el nombre que el usuario le proporicono.
          ejemplo:
          usuarui: hola soy Martis.
          IA: saludar = "hola " + UserName = " mucho gusto".
          el usuario veria algo asi.
          "hola Martis mucho gusto"`}
        />

        <h2>¡ejercicio!</h2>

        <Conseptos 
          texto={`Hacer un programa que salude al usuario.`}
        />
        <ol>
          <li>Una variable debe guardar el nombre del usuario.</li>
          <li>Otra variable debe hacer la oracion donde se saluda al usuario.</li>
        </ol>

        <Ejercicios 
          texto1={`Esta dificil pendejo >:v`}
          texto2={"Awevo si puedo oculta la respuesta"}
          codigo={<Sintaxis 
            codigo={`nombre = "Rapthalia";
saludar = "Hola " + nombre;
mostrar(saludar);`}
            consola={`Hola Rapthalia`}
          />}
        />

      </main>
      <Footer />
    </>
  );
}

export default ConcatenarLogica;