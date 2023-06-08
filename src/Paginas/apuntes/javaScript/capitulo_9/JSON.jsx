import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function JsonJs() {
  return (  
    <>
      <main>
        <h1>JSON</h1>
        <Conseptos texto={`Estos son como los (objetos/arreglos asociativos) solo que se le agregan comillas pronto veremos para que es.`}/>
        <JavaScropt codigo={`const objeto = {
    "nombre": "puerta",
    "forma": "cuadrada",
    "colo": "cafe"
}`}/>
        <Conseptos texto={`Podemos llamar al valor que queramos con los metodos que ya habiamos aprendido.`}/>
        <JavaScropt codigo={`const objeto = {
    "nombre": "puerta",
    "forma": "cuadrada",
    "colo": "cafe"
}
console.log(objeto.nombre);
console.log(objeto["nombre"]);`}/>
        <Conseptos texto={`A la hora de trabajar con apis necesitamos descerializar y serializar los datos JSON.`}/>
        
        <h2>serializar</h2>
        <JavaScropt codigo={`const objeto = {
    "nombre": "puerta",
    "forma": "cuadrada",
    "colo": "cafe"
} 
JSON.stringify(objeto) 
console.log(JSON.stringify(objeto)); 
//resultado:
//{
    //"nombre":"puerta",
    //"forma":"cuadrada",
    //"colo":"cafe"
//}`}/>
        <Conseptos texto={`Con "JSON.stringify()" podemos serializar osea convertir al objeto json en una string para que se puedan enviar los datos correctamente.`}/>

        <h2>descerializar</h2>
        <Conseptos texto={`A la hora de recibir datos del servido o apis recibimos los datos serializados osea.`}/>
        <JavaScropt codigo={`{
    "nombre":"puerta",
    "forma":"cuadrada",
    "colo":"cafe"
}`}/>
        <Conseptos texto={`Por eso podemos descerializar un objeto json de esta manera para poder trabajar con esos datos.`}/>
        <JavaScropt codigo={`const objeto = {
    "nombre": "a",
    "forma": "a",
    "colo": "cafe"
} 
let objetSerializado = JSON.stringify(objeto)
console.log(JSON.parse(objetSerializado));`}/>
        <Conseptos texto={`Con "JSON.parse()" podemos descerializar los objetos para tranajar con ellos.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default JsonJs;