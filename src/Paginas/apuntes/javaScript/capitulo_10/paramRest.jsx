import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function ParamRestJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>parametro rest</h1>
        <Conseptos texto={`Los parametros rest son parametros que son indefinidos los cuales se convertiran en arreglos.`}/>
        <h2>ejemplo</h2>
        <JavaScropt codigo={`const funcionIndefinida = (...rest) =>{
    console.log(rest)
}
funcionIndefinida(5,8,3,"mas parametros")`}/>
        <JavaScropt codigo={`function masParametros(...rest){ 
    console.log(rest)
} 
masParametros(5,8,12,25,"muchos parametros indefinidos")`}/>
        <Conseptos texto={`Aqui un ejemplo de como nos puede servir los parametros rest.`}/>
        <JavaScropt codigo={`const numeros = (...num) =>{
    let resultado = 0;
    for (let i = 0; i < num.length; i++){
        resultado += num[i]
    }
    console.log(resultado)
} 
numeros(5,25)
//esta funcion sumara todos los parametros que pongamos puedes poner los parametros que quieras en esta funcion.`}/>
        <Conseptos texto={`Los parametros rest siempre deben ser el ultimo parametro de todos.`}/>
        <h2>ejemplo</h2>
        <h2>error</h2>
        <h3>funcion tradicional</h3>
        <Sintaxis codigo={`function error_1(...rst,a){
    console.log(\`${"${rst}"} ${"${a}"}\`)
}
error_1(8,10)`}/>
        <h3>funcion flecha</h3>
        <Sintaxis codigo={`const error_2 =(...rst,a) =>{ 
    console.log(\`${"${rst}"} ${"${a}"}\`)
}
error_1(8,10)`}/>
        <h2>correcto</h2>
        <JavaScropt codigo={`function correcto_1(a,...rst){ 
    console.log(\`${"${a}"} - ${"${rst}"}\`)
} 
correcto_1(8,10)

const correcto_2 = (a,...rst) =>{ 
    console.log(\`${"${a}"} - ${"${rst}"}\`)
} 
correcto_2(8,10)`}/>
        <Conseptos texto={`Esto pasa proque los parametros rest son ilimitados/indefinidos por eso siempre deben ir al final.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ParamRestJs;