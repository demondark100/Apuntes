import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function CamelCaseJavaScript() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `"camelCase" es una forma muy comun de crear variables , esto sirve para poder nombrar y leer de forma mas sensilla a una variable.`,
        lenguage: "JavaScropt",
        codigo: `let camelCase;
let unaPalabra;`
      }]}/>
      <main>
        <h1>camelCase</h1>
        <Conseptos texto={`Para usar camelCase debemos empezar escribiendo con minuscula y se debe de reemplazar los espacios por mayusculas.`}/>
        <h2>ejemplo</h2>
        <h3>sin camelCase</h3>
        <JavaScropt codigo={`let primer numero = 15;
console.log(primer numero);
// resultado: error`}/>
        <h3>con camelCase</h3>
        <JavaScropt codigo={`let primerNumero = 15;
console.log(primerNumero);
// resultado: 15`}/>
        <Conseptos texto={`Esto nos sirve principalmente para declarar mejor las variables y para hacer mas legible una variable con un nombre que lleva dos palabras arreglando la falta de espacios y cambiandolo por mayusculas.`}/>
      </main>
      <Footer />
    </>
  );
}

export default CamelCaseJavaScript;