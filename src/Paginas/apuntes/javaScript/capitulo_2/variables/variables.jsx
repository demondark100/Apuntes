import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function VariablesJavaScript() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Las variables guardan cualquier tipo de datos para ser reusados cuando queramos.`,
        lenguage: "JavaScropt",
        codigo: `var saludo1 = "hola mundo"; // variable global que no respeta los bloques de codigo.
let saludo2 = "hola mundo"; // variable que respeta los bloques de codigo
const saludo3 = "hola mundo"; // variable que no puede cambiar su valor y respeta los bloques de codigo`
      }]}/>
      <main>
        <h1>variables</h1>
        <Conseptos texto={`Aqui tenemos distintas formas de declarar variables no es solo poner.`}/>
        <JavaScropt codigo={`variable = "string";`}/>
        <Conseptos texto={`Aqui hay distintas palabras claves para declarar variables.

var: No es recomendable usar "var".

let: es la forma correcta de declarar variables.

const: si declaramos variables con const el valor de la variable no podra cambiar.`}/>
        <JavaScropt codigo={`var number1 = 15;
let number2 = 15; 
const number3 = 15;`}/>
        <h2>var</h2>
        <Conseptos texto={`Como indique var no es recomendable usarlo esto es porque trae probemas en bloques de codigo esto lo explicare de forma mas detallada.

Si usamos var es como si estuvieramos haciendo esto.`}/>
        <JavaScropt codigo={`// al usar var es como si hicieramos esto.
string1 = "una cadena";
// usando var
var string2 = "una cadena pero con var";`}/>
        <Conseptos texto={`Es lo mismo por eso y por los bloques de codigo no es recomendable usar var.`}/>
        <h2>let</h2>
        <Conseptos texto={`Si deseas declarar variables de forma correcta debes usar "let" debido a que al declarar las variables con "let" solucionaras los problemas de los bloques de codigo.`}/>
        <JavaScropt codigo={`let numero = 15;`}/>
        <h2>cambiar valor de variables</h2>
        <Conseptos texto={`Nosotros podemos cambiar el valor de las variables , al momento de cambiar el valor de una variables no es necesario volver a poner una palabra clave.`}/>
        <h2>ejemplo</h2>
        <h3>error</h3>
        <JavaScropt codigo={`let number = 20;
let number = 10;`}/>
        <h3>correcto</h3>
        <JavaScropt codigo={`let number = 20;
number = 10;
console.log(number);`}/>
        <h2>const</h2>
        <Conseptos texto={`Cuando declaramos variables con "const" el valor de las variables no podra cambiar.`}/>
        <h3>error</h3>
        <Conseptos texto={`Si ejecutas este codigo veras como te indica que hay un error te dira algo como no puedes cambiar el valor de una variable constante.`}/>
        <JavaScropt codigo={`const nombre = "German";
nombre = "Mario";`}/>
          <div className="siguiente__parte">
            <Link to={"bloqueDeCodigo"}>bloques de codigo</Link>
          </div>

      </main>
      <Footer />
    </>
  );
}

export default VariablesJavaScript;