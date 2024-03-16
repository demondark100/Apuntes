import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function FuncionesPart2Js() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Ahora caracteristicas extra de las funciones.`,
        lenguage: `JavaScropt`,
        codigo: `// retornar valor
const funcion1=()=>{"valor"} // para retornar solo un valor no es necesario el cuerpo "{}".
const funcion2=()=>"valor" // solo se retornara un valor sin necesidad del cuerpo.
console.log(funcion1,funcion2); // undefined , "valor"

// no uses funciones flecha como algun metodo de objeto.
const objeto=()=>{
  nombre: "Michael",
  mostrar: ()=>{
    console.log(\`el nombre es ${"${this.nombre}"}\`); // el nombre es undefined  
  }
}
// si deseas usar una funcion como algun metodo usa "function".
const objeto=()=>{
  nombre: "Michael",
  mostrar: function()=>{
    console.log(\`el nombre es ${"${this.nombre}"}\`); // el nombre es Michael  
  }
  }`
      }]}/>
      <main>
        <h1>funciones parte 2 (la venganza :v)</h1>
        <h2>funcion flecha</h2>
        <Conseptos texto={`Podemos crear funciones sin necesidad del cuerpo "{}" solo cuando sea una sola expresion y solo funciona con las funciones flecha no con funciones clasicas.`}/>
        <h2>error</h2>
        <Sintaxis codigo={`const musica = () => {"riptide"} 
console.log(musica()) 

//esto nos retornara undefined.`}/>
        <h2>correcto</h2>
        <JavaScropt codigo={`const musica = () => "riptide";
console.log(musica())`}/>
        <Conseptos texto={`Como ya supondran nos retornara "riptide".

Los parentesis "()" son obsionales cuando solo es un parametro esto se puede con funciones flecha no con las funciones normales.`}/>
        <JavaScropt codigo={`const music = nombre =>{ 
    console.log(nombre)
} 
music("Rain Over Me")

const music = nombre => "Rain Over Me"
console.log(music())`}/>
        
        <h2>funcion flecha no recomendada en:</h2>
        <Conseptos texto={`Las funciones flecha no son recomendadas como metodos o como constructores de un objeto.`}/>
        <h3>no sirve como metodo</h3>
        <h3>error</h3>
        <Sintaxis codigo={`const objeto = {
    musica: "A Sky Full of Stars",
    artusta: "Coldplay",
    mostrar: ()=>{
        console.log(\`el artista es ${"${this.artusta}"} y la musica es ${"${this.musica}"}\`)
    }
}
objeto.mostrar()`}/>
        <Conseptos texto={`Esto nos mostrara "undefined"`}/>
        <h3>correcto</h3>
        <JavaScropt codigo={`const objeto = { 
    musica: "A Sky Full of Stars",
    artusta: "Coldplay",
    mostrar: function(){
        console.log(\`el artista es ${"${this.artusta}"} y la musica es ${"${this.musica}"}\`)
    }
} 
objeto.mostrar()`}/>
        <Conseptos texto={`No es recomendable la funcion flecha como metodo porque a la hora de trabajar con "this" la funcion flecha no reconoce al objeto si no que va a una escala superior.`}/>
        <h3>por ejemplo</h3>
        <JavaScropt codigo={`const objeto1 = {
    color: "verde",
    mostrar: function (){
        console.log(\`el color es ${"${this.color}"}\`)
    }
} 
objeto1.mostrar()`}/>
        <Conseptos texto={`Con "function" a la hora de usar "this" se va hacia el metodo y no hay ningun problema osea que muestra lo que queremos que muestre.`}/>
        <JavaScropt codigo={`const objeto2 = { 
    color: "verde",
    mostrar: ()=>{
        console.log(\`el color es ${"${this.color}"}\`)
    }
} 
window.color = "azul" 
objeto2.mostrar() 
//resultado: "el color es azul"`}/>
        <Conseptos texto={`Como hemos dicho con la funcion flecha accedemos al objeto que va a una escala mas arriba en este caso va hasta el objeto window.`}/>
        <h2>no sirve como constructor
</h2>
        <h3>incorrecto</h3>
        <Sintaxis codigo={`const constructor=(musica,artista)=>{ 
    this.musica = musica,
    this.artista = artista
} 
const musica = new constructor("Mary On A Cross","Ghost") 
console.log(musica)`}/>
        <Conseptos texto={`Esto directamente nos mandara un error ya que las funciones flecha no se pueden usar como un constructor.`}/>
        <h3>correcto</h3>
        <JavaScropt codigo={`function constructo(musica,artista){ 
    this.musica = musica,
    this.artista = artista
} 
const music = new constructo("Mary On A Cross","Ghost")
console.log(music)`}/>
        <Conseptos texto={`Con las funciones clasicas si nos permite crear un constructor para un objeto.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default FuncionesPart2Js;