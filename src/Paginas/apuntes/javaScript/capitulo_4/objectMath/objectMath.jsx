import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";

function ObjectMathJavaScript() {
  return (  
    <>
      <main>
        <h1>object Math</h1>
        <h2>sqet</h2>
        <JavaScropt codigo={`let numero = Math.sqrt(25);   
console.log(numero)
//resultado: 5`}/>
        <Conseptos texto={`Esto metodo nos devolvera la raiz cuadrada de un numero.`}/>
        <h2>cbrt</h2>
        <JavaScropt codigo={`let numero = Math.cbrt(25);
console.log(numero)
//resultado: 2.924017738212866`}/>
        <Conseptos texto={`Esto nos devolvera la raiz cubica de un numero.`}/>
        <h2>spread operator</h2>
        <JavaScropt codigo={`let numero1 = [123,8456,12];
Math.max(...numero1); 
//resultado max: 8456 

let numero2 = [123,8456,12];
Math.min(...numero2); 
//resultado min: 12`}/>
        <Conseptos texto={`Esto nos servira para saber el numero maximo y minimo de unos datos numericos.`}/>
        <h2>Math.random</h2>
        <JavaScropt codigo={`let numero = Math.random();
console.log(numero)
//resultado: numero aleatorio no redondeado.`}/>
        <Conseptos texto={`Esto nos servira para crear un numero aleatorio no redondeado.`}/>
        <h2>Math.round</h2>
        <JavaScropt codigo={`let numero = 5.888;  
console.log(Math.round(numero))
//resultado: 6`}/>
        <Conseptos texto={`Esto nos servira para redondear un numero.`}/>
        <Conseptos texto={`Hay mas metodos pero si los escribimos aqui nunca terminaremos :v`}/>
      </main>
      <Footer />
    </>
  );
}

export default ObjectMathJavaScript;