import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function CarProtoJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>caracteristicas de prototipos</h1>
        <h2>cadena</h2>
        <JavaScropt codigo={`let cadena = "hola mundo";
console.log(cadena.__proto__)`}/>
        <h2>arreglo</h2>
        <JavaScropt codigo={`let arreglo = [
    "number",
    55,
    false
];
console.log(arreglo)`}/>
        <Conseptos texto={`La unica propiedad de el arreglo es "length", las demas propiedades es lo que eredara del prototipo.`}/>
        <h2>objeto</h2>
        <JavaScropt codigo={`class Objeto {
    constructor(){}
    saludar(){
        console.log("hola")
    }
} 

const objeto = new Objeto() 
console.log(objeto.__proto__.__proto__);`}/>
        <Sintaxis codigo={`"__proto__" es la erencia del "prototype" solamente que lo estamos modificando.`}/>

        <h2>diferencias</h2>
        <Conseptos texto={`Diferencias entre sobreescribir proto y sobreescribir un metodo.`}/>
        
        <h2>agregar</h2>
        <JavaScropt codigo={`class Objeto { 
    constructor(){}
    saludar(){
        console.log("hola")
    }
}

const objeto = new Objeto()
objeto.saludar = () =>{
    console.log("hola desde afuera")
}
objeto.saludar()
// resultado: "hola desde afuera"`}/>
        <Conseptos texto={`Esto pasa porque se ejecuta primero la parte de adentro y luego los metodos de afuera , no estamos modificando el prototipo solo estamos agregando.`}/>
        
        <h2>modificar</h2>
        <JavaScropt codigo={`class Objeto {
    constructor(){}
        saludar(){
        console.log("hola")
    }
}
const objeto = new Objeto;
objeto.__proto__.saludar = ()=>{
    console.log("hola desde afuera")
}
console.log(objeto)`}/>
        <Conseptos texto={`Aqui si estamos modificando el prototipo del metodo "saludar".`}/>
        
        <h2>heredar</h2>
        <JavaScropt codigo={`//objeto
class Objeto {
        constructor(){}
        saludar(){
        console.log("hola")
    }
}
const objeto = new Objeto;
let arr = [];
arr.__proto__ = objeto
arr.saludar()`}/>
        <Conseptos texto={`Con esto estamos heredando un prototipo al arreglo.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default CarProtoJs;