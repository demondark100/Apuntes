import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function BuclesJavaScript() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>bucles</h1>
        <Conseptos texto={`En este lenguaje se cambia la sintaxis para poder usar los bucles.`}/>
        <h2>bucle mientras(while)</h2>
        <Conseptos texto={`La sintaxis del bucle while es la siguiente:
"mientras" se cambia por "while".
la condicional se pone dentro de "()".
"hacer" se cambia por "{}".
el simbolo "++" se mantiene.`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`while(aqui va la condicional){
  // aqui el codigo que escribiremos
}`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`let i = 0;
while(i < 5){
  i++;
  alert(\`el valor de i es: ${"${i}"}\`)
}`}/>
        <h2>bucle para(for)</h2>
        <Conseptos texto={`Aqui se reemplaza:
"para" por "for".
la declaracion de la variable , la condicional y la actualizacion van dentro de ().
"hacer" se cambia por "{}"`}/>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`for(aqui va la inicializacion; aqui la condicional ; aqui la actualizacion de la variable){
  // aqui dentro el codigo a escribir.
}`}/>
        <h3>javaScript</h3>
        <JavaScropt codigo={`for(let i = 0;i < 5;i++){
  alert(\`el valor de i es: ${"${i}"}\`);
}`}/>
        <h2>bucle in</h2>
        
        <h2>bucle of</h2>
      </main>
      <Footer/>
    </>
  );
}

export default BuclesJavaScript;