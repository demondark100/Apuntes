import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Consola from "../../../../componentes/consola/consola";

function ProcessNode() {
  return (  
    <>
      <main>
        <h1>process</h1>
        <Conseptos texto={`Este objeto es muy extenso y nos sirve para ver nuestro entorno de desarrollo.`}/>
        <h2>env</h2>
        <Conseptos texto={`Este es el objeto que nos permitira trabajar con nuestro sistema.`}/>
        <JavaScropt codigo={`console.log(process.env)`}/>
        <h2>argv</h2>
        <Conseptos texto={`Esto nos permitira recibir parametros en nuestro programa al momento de escribir en la terminal "node archivo.js" a este podemos pasarle argunmentos en caso de que el programa lo necesite.`}/>
        <Consola codigo={`> node app.js "argumentos"`}/>
        <Conseptos texto={`Ahora veremos un ejemplo.`}/>
        <JavaScropt codigo={`const argumentos = process.argv;
function Suma(n1,n2){
  return n1 + n2;
}
console.log(\`
  El resultado de tu suma es ${"${Suma(parseInt(argumentos[2]),parseInt(argumentos[3]))}"}
\`)`}/>
        <Consola codigo={`> node app.js 5 5`}/>
        <Conseptos texto={`argv realmente es un arreglo el cual recibe los argumentos que pasamos desde la posision 2.`}/>
        <JavaScropt codigo={`console.log(process.argv);
// resultado
// ["ruta de nuestro node","ruta del proyecto","argumentos"]`}/>
        <Conseptos texto={`A argv podemos pasarle cuantos argumentos queramos argumentos infinitos y se iran agregando al arreglo de argv.`}/>
      </main>
      <Footer />
    </>
  );
}

export default ProcessNode;