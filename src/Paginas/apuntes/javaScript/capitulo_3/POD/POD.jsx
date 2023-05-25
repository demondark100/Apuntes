import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function PODJavaScript() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>programacion orientada a objetos(POD)</h1>
        <Conseptos texto={`En este lenguaje la sintaxis de POD cambia en esto:
"clase" se cambia por "class".
":" se cambia por "{}".
aqui se agrega "descripcion/constructor" para poder poder llamar un valor del objeto.
en metodos se agregan "()" para los parametros y "{}" para poner el codigo.
"nuevo" se cambia por "new".
"eredar" se cambia por "extends".`}/>

        <Sintaxis codigo={`clase nombre { 
    descripcion(objeto) { 
        este.objeto = objeto,
        este.objeto = objeto
    } 
}`}/>

        <JavaScropt codigo={`class Puerta { 
    constructor(color,material){ 
        this.color = color;
        this.material = material;
    } 
}`}/>
        <Conseptos texto={`Para poder llamar a un objeto debemos hacer una variable de respaldo`}/>

        <Sintaxis codigo={`variable = nuevo objeto(poner la descripcion del objeto)`}/>

        <JavaScropt codigo={`const puerta = new Puerta("negro","madera");`}/>
        <Conseptos texto={`Ahora podemos llamar al objeto puerta de esta manera.`}/>
        <JavaScropt codigo={`console.log(puerta);`}/>
        <Conseptos texto={`Y si queremos algun dato en especifico podemos hacer esto:`}/>
        <JavaScropt codigo={`console.log(puerta.color);
//resultado: "negro"`}/>
        <JavaScropt codigo={`console.log(puerta.material);
//resultado: "madera"`}/>
        <h2>metodos</h2>

        <Sintaxis codigo={`class Puerta { 
    constructor(color,material){ 
        this.color = color;
        this.material = material;
    } 
    nombre(parametros){ 
        hacer algo
    } 
}`}/>

        <JavaScropt codigo={`class Puerta { 
    constructor(color,material){ 
        this.color = color;
        this.material = material;
    } 
    describir(){ 
        console.log(\`
            la puerta es de color ${"${this.color}"} y esta hecho de ${"${this.material}"}
        \`)
    } 
}`}/>
        <h2>llamar metodos</h2>

        <Sintaxis codigo={`objeto.metodo();`}/>

        <JavaScropt codigo={`const puerta = new Puerta("negro","madera")
puerta.describir();
//resultado: 
//"la puerta es de color negro y esta hecho de madera"`}/>
        <Conseptos texto={`De esta manera llamamos a un metodo recuerda siempre debe de ir acompañado de un objeto previamente creado.`}/>
        <h2>herencia</h2>

        <Sintaxis codigo={`clase objeto eredar objeto anterior { 
    descripcion(eredar objeto anterior y agregar cosas nuevas) { 
        erencia(cosas que eredara),
        hacer algo
    } 
}`}/>

        <JavaScropt codigo={`class Puerta { 
    constructor(color,material){ 
        this.color = color;
        this.material = material;
    } 
    describir(){ 
        console.log(\`
            la puerta es de color ${"${this.color}"} y esta hecho de ${"${this.material}"}
        \`)
    } 
}
class ventana extends Puerta { 
    constructor(color,material,forma){ 
        super(color,material),
        this.forma = forma
    } 
}`}/>
        <h2>metodos estaticos</h2>

        <Sintaxis codigo={`class objeto{ 
    constructor(color){
        this.color = color
    } 
    metodo estatico descripcion(){ 
        hacer algo
    } 
}`}/>

      <JavaScropt codigo={`class Objeto{ 
    constructor(color){
        this.color = color
    } 
    static describir(){ 
        console.log("este es un objeto de color verde")
    } 
} 
Objeto.describir();`}/>
        <h2>Metodos accesores</h2>

        <Sintaxis codigo={`class objeto { 
    constructor(material){ 
        this.material = material
    } 
    cambiar nombre(parametro){ 
        this.material = parametro
    } 
    acceder nombre(){ 
        retornar this.material
    } 
}  `}/>

        <JavaScropt codigo={`class Objeto{ 
    constructor(forma,material){ 
        this.forma = forma
        this.material = material
    } 
    set cambio(material) { 
        this.material = material
    } 
    get acceder(){ 
        return this.material
    } 
} `}/>
        <h3>llamar metodos accesores</h3>

        <Sintaxis codigo={`objeto.metodo = "nuevo valor";
console.log(objeto.metodo);`}/>

        <JavaScropt codigo={`const pared = new Objeto("cuadrada","madera");
pared.cambio = "hierro";
console.log(pared.acceder);`}/>
        <h2>Juntemos lo aprendido</h2>
        <JavaScropt codigo={`class Objeto {
    constructor(color,material){ 
        this.color = color
        this.material = material
    } 
} 
class Mesa extends Objeto{
    constructor(material,forma){
        super(material)
        this.forma = forma
    }
    static algo(){
        console.log("xd")
    }
    set cambio(objeto){
        this.forma = objeto
    }
    get acceder(){
        return this.forma
    }
}
Mesa.algo()
const mesa = new Mesa("madera","rectangular")
mesa.cambio = "cuadrada" 
console.log(mesa.acceder)`}/>
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Mejorar la calculadora pero ahora con la programacion orientada a objetos.`}/>
        <Ejercicios 
          texto1={"Que mamada como se supone que se puede hacer eso? (mostrar pistas)"}
          texto2={"No son necesarias las pistas soy mas listo que Kira(ocultar pistas)"}
          codigo={<JavaScropt codigo={`// Se isa POD.
// se usa bucles.
// se usa variables.
// se usa operadores matematicos.`}/>}
        />
        <Ejercicios 
          texto1={"No pude ni con la calculadora 1 :v(mostrar solucion)"}
          texto2={"Si puedo con cualquier mamada xd(ocultar solucion)"}
          codigo={<JavaScropt codigo={`class Calculadora{
  constructor(){
    this.dato = 0;
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
  }
  operacion(n1,n2){
    if(this.dato === 1) this.resultado = n1 + n2;
    else if(this.dato === 2) this.resultado = n1 - n2;
    else if(this.dato === 2) this.resultado = n1 / n2;
    else if(this.dato === 4) this.resultado = n1 * n2;
  }
  calcular(){
    this.dato = parseInt(prompt(\`¿Que operacion deseas hacer?
    1. sumar
    2. restar
    3. dividir
    4. multiplicar\`));
    if(this.dato > 4){
        alert("Te di cuatro pinches opciones no mas >:v.")
    } else {
        this.num1 = parseInt(prompt("¿Cual es el primer numero?"));
        this.num2 = parseInt(prompt("¿Cual es el segundo numero?"));
        this.operacion(this.num1,this.num2);
        alert(\`El resultado es: ${"${this.resultado}"}\`)
    }
    while(isNaN(this.num1 && this.num2)){
        this.num1 = parseInt(prompt("¿Cual es el primer numero?"));
        this.num2 = parseInt(prompt("¿Cual es el segundo numero?"));
        this.operacion(this.num1,this.num2);
        if(isNaN(this.resultado)){
            alert("Proporciona un dato numerico.");
        } else {
            alert(\`El resultado es: ${"${this.resultado}"}\`)
        }
    }
  }
}
const calculadora = new Calculadora("+");
calculadora.calcular();`}/>}
        />
      </main>
      <Footer/>
    </>
  );
}

export default PODJavaScript;