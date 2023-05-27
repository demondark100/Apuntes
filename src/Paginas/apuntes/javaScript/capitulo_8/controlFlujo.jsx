import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function ControlFlujoJs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>control de flujo</h1>
        <Sintaxis codigo={`{ 
    esto es un bloque de codigo 
}
{
    esto es otro bloque de codigo
}`}/>
        <Conseptos texto={`Si declaramos una variable en un bloque podemos volver a declararlo otra variable con el mismo nombre en otro bloque de codigo.`}/>
        <JavaScropt codigo={`let numero = 55;
{
    let numero = 25;
    console.log(numero);
    //resultado: 25
}
console.log(numero);
//resultado 55`}/>
          <Conseptos texto={`Aqui declaramos la misma variable con distinto valor pero no traera errores ya que estan es distintos bloques de codigo.

Si declaramos las variables en el mismo bloque si nos traeria problemas ya que estamos en un mismo bloque.

Los if while for tambien son bloques de codigo ejemplo.`}/>
      <JavaScropt codigo={`let numero = 15;
for(let i = 0;i < 2;i++){
    let numero = 12;
    console.log(numero)
    //resultado: 
    //2 veces 12
}
console.log(numero)
//resultado: 15`}/>
      </main>
      <Footer />
    </>
  );
}

export default ControlFlujoJs;