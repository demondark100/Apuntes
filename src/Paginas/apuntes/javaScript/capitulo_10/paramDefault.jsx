import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function ParamDefaultJs() {
  return (  
    <>
      <main>
        <h1>Parametros por defecto</h1>
        <Conseptos texto={`Esto nos sirve para poner un parametro por defecto en una funcion esto en el caso de que no se pase ningun parametro para la funcion por ejemplo.`}/>
        <JavaScropt codigo={`const sumar = (a = 0 , b = 0) =>{
    return a + b;
}
console.log(sumar(10,5))`}/>
        <Conseptos texto={`Si la persona/usuario no pasa ningun parametro el valor de la suma sera de 0 ya que los pusimos como parametro de defecto ejemplo.`}/>
        <JavaScropt codigo={`const sumar = (a = 0 , b = 0) =>{
    return a + b;
}
console.log(sumar())`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ParamDefaultJs;