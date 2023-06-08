import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";

function FuncionesJavaScript() {
  return (  
    <>
      <main>
        <h1>funciones</h1>
        <Conseptos texto={`En este lenguaje la sintaxis de las funciones cambian en:
"funcion" se cambia por "function".
"()" se queda como "()".
y por ultimos todo el codigo de la funcion se pone dentro de "{}".

Y para llamar la funcion se mantiene de la misma forma de logica osea:
"nombreDeFuncion(parametros)".`}/>

        <Sintaxis codigo={`funcion nombreDeFuncion(parametros){
  // aqui todo el codigo de la funcion.
}
nombreDeFuncion(parametros);`}/>

        <JavaScropt codigo={`function saludar(nombre){
  // codigo para la funcion
};
saludar("Gumbal");`}/>
        <h3>usemoslo</h3>
        <JavaScropt codigo={`function saludar(nombre){
  return \`hola ${"${nombre}"} tu caricatura es demasiado buena\`;
};
saludar("Gumbal");`}/>
        <div className="siguiente__parte">
          <Link to={"funcionFlecha"}>funcion flecha</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FuncionesJavaScript;