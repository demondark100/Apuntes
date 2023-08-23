import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function CallbacksJs() {
  return (  
    <>
      <main>
        <h1>callbacks</h1>
        <Conseptos texto={`Los callbacks sirven para llamar a otra funcion dentro de una funcion.`}/>
        <h2>ejemplo</h2>
        <JavaScropt codigo={`function music(cb) {
    cb("Devil eyes");
}
       
function llamar(nombre){
    console.log(nombre)
}
music(llamar)`}/>
        <JavaScropt codigo={`const music_2=(cb)=>{
    cb("Murder in my mind");
}
const llamar_2=(nombre)=>{
    console.log(nombre);
}
music_2(llamar_2)`}/>
        <h2>resumir</h2>
        <Conseptos texto={`Podemos resumir un poco mas los callbacks.`}/>
        <JavaScropt codigo={`let music=(nombre)=>{
    nombre("hasta que pase el temblor");
}
music(nombre=>console.log(nombre))`}/>

        <Conseptos texto={`Para ver un poco mas su funcionalidad haremos un pequeño programa usando callbacks y cuando entiendas el codigo te daras cuenta lo utiles y lo flexible que se vuelve el codigo usando callbacks.`}/>
        <JavaScropt codigo={`function operacionMatematica(a, b, operacion) {
  return operacion(a, b);
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function multiplicacion(x, y) {
  return x * y;
}

function division(x, y) {
  if (y !== 0) {
    return x / y;
  } else {
    return "No se puede dividir por cero";
  }
}

function mostrarResultado(operacion, a, b, callback) {
  const resultado = operacionMatematica(a, b, operacion);
  callback(resultado);
}

function mostrarEnConsola(resultado) {
  console.log("El resultado es:", resultado);
}

function mostrarEnAlerta(resultado) {
  alert("El resultado es: " + resultado);
}

mostrarResultado(suma, 5, 3, mostrarEnConsola);
mostrarResultado(resta, 5, 3, mostrarEnAlerta);
mostrarResultado(multiplicacion, 4, 6, mostrarEnConsola);
mostrarResultado(division, 10, 2, mostrarEnAlerta);
`}/>
        
      </main>
      <Footer/>
    </>
  );
}

export default CallbacksJs;