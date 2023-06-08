import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Footer from "../../../../componentes/menus/Footer";

function VariablesPy() {
  return (  
    <>
      <main>
        <h1>Variables</h1>
        <Conseptos texto={`Como ya sabemos las variables guardan datos como numeros , strings , etc,
La diferencia de python con otros lenguajes es que es demasiado facil declarar variables.
Aqui en python no tienes que decirle que tipo de variable sera ni nada de eso en simples palabras es muy sencillo.
ejemplo:`}/>
        <Python codigo={`numero1 = 15;
numero2 = 15.2;
cadena = "una cadena";
caracter = "a";
print(numero1);
print(numero2);
print(cadena);
print(caracter);`}/>
        <Conseptos texto={`Como te das cuenta es demasiado sencillo declarar variables aqui , el sistema de python se dara cuenta de forma automatica que tipo de dato estas pasando a tu variable.`}/>
        <Consola codigo={`15
15.2
una cadena
a`}/>

      </main>
      <Footer/>
    </>
  );
}

export default VariablesPy;