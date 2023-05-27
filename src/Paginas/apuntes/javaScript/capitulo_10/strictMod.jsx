import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function StrictModJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Strict Mode</h1>
        <h2>teorico</h2>
        <Conseptos texto={`El modo estricto no permite usar la sintaxis de E5 para abajo solo de E6 para arriba ya que gracias a esto la sintaxis es mejor que las versiones anteriores por ejempo.`}/>
        <Sintaxis codigo={`artista = "Coldplay";`}/>
        <Conseptos texto={`javaScript lo admite y el navegador le pone por defecto la palabra clave "var". En el modo estricto esto no es permitido ya que el desarrollador debe elegir con que crear la variable con "var", "let" o "const".

Para usar el modo estricto debemos poner "use strict"; al principio de todo el codigo`}/>
        <h2>ejemplo</h2>
        <Sintaxis codigo={`"use strict";
todo el codigo que se escribira.`}/>

        <h2>variable</h2>
        <h3>sin "use strict"</h3>
        <JavaScropt codigo={`fruta = "naranja";
console.log(fruta);`}/>
        <Conseptos texto={`La variable fruta no la declaramos pero javaScript lo admite y el navegador le pone "var" por defecto.`}/>
        <h3>con "use strict"</h3>
        <h3>error</h3>
        <JavaScropt codigo={`"use strict";
fruta = "naranja";
console.log(fruta)`}/>
        <Conseptos texto={`Esto nos dira "la variable fruta no ha sido declarada",
por eso el desarrolador debe usar las palabras clave de las variables.`}/>
        <h3>correcto</h3>
        <JavaScropt codigo={`"use strict";
let fruta = "naranja";
console.log(fruta)`}/>
        <Conseptos texto={`Esto ya no dira que hay errores porque nosotros elegimos con que pañabra clave inicializamos la variable.`}/>

        <h2>objetos</h2>
        <h2>objeto 1</h2>
        <h3>sin "use strict"</h3>
        <JavaScropt codigo={`const objeto = {
    color: "verde"
};
Object.defineProperty(objeto,"color" , {value: "verde", writable: false});
objeto.color = "azul" 
console.log(objeto)`}/>
        <Conseptos texto={`Esto no cambiara su valor pero tampoco nos notificara que hubo un error ya que no se puede reescribir esa propiedad.`}/>
        <h3>con "use strict"</h3>
        <JavaScropt codigo={`"use strict";
const objeto = {
    color: "verde"
};
Object.defineProperty(objeto,"color" , {value: "verde",writable:false});
objeto.color = "azul"
console.log(objeto)`}/>
        <Conseptos texto={`Esto aparte de no cambiar la propiedad nos notificara con un error que esa propiedad del objeto no se puede cambiar.`}/>

        <h2>objeto 2</h2>
        <h3>sin "use strict"</h3>
        <JavaScropt codigo={`const obj = {
    juego: "left 4 dead 2"
}
Object.preventExtensions(obj)
obj.desarrollador =  "valve"`}/>
        <Conseptos texto={`Sin "use strict" si tratamos de acceder a la propiedad "desarrolador" solo nos dira undefined pero no notificara el error ya que "preventExtensions" no permite agregar mas propiedades al objeto.`}/>
        <h3>con "use strict"</h3>
        <JavaScropt codigo={`"use strict
const obj = 
    juego: "left 4 dead 2"
}
Object.preventExtensions(obj)
obj.desarrollador =  "valve"`}/>
        <Conseptos texto={`Con "use strict" si nos notificara que no se pueden agregar mas propiedades a un objeto.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default StrictModJs;