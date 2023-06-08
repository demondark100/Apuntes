import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";

function FunFlecha() {
  return (  
    <>
      <main>
        <h1>funcion flecha</h1>
        <Conseptos texto={`La funcion flecha es para poder escribir codigo mas simple dentro de la funcion a parte de que su sintaxis no necesita de ninguna palabra clave como "function"`}/>

        <Sintaxis codigo={`crear variable = (parametros) => {
  // aqui va el codigo de la funcion.
}`}/>

        <JavaScropt codigo={`const sumar=(n1)=>{
  // aqui va el codigo.
}`}/>
        <Conseptos texto={`Se le llama funcion flecha por este simbolo "=>".

Como dije antes la funcion flecha nos evita lineas de codigo imnecesarias.`}/>
        <h3>antes</h3>
        <JavaScropt codigo={`function sumarNormal(n1,n2){
  return n1 + n2;
}
sumarNormal(5,5);`}/>
        <h3>ahora</h3>
        <JavaScropt codigo={`const sumarFlecha=(n1,n2)=>n1 + n2;
sumarFlecha(7,7);`}/>
        <Conseptos texto={`Las funciones flecha se utilizan demasiado en javaScript pronto veran a mas detalle su utilidad.`}/>
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer un cajero automatico a base de funciones.`}/>
        <Ejercicios 
          texto1={"Muestrame las pistas perra."}
          texto2={"Soy tan crack que no vere las pistas."}
          codigo={<JavaScropt codigo={`// esto lleva variable.
// lleva funciones.
// lleva funciones de javaScript.
// lleva bucles.
// lleva condicionales.
// lleva prompt y alert.
// lleva opeaciones matematicas.`}/>}
        />
        <Ejercicios 
          texto1={"Noo eso si es pasarse de pinche lanza (mostrar solucion)"}
          texto2={"Demasiado facil mi estimado (ocultar solucion)"}
          codigo={<JavaScropt codigo={`let dineroUsuario = 100;
let depositar = 0;
let retirar = 0;
const restar=(n1,n2)=>dineroUsuario = n1 - n2;
const sumar=(n1,n2)=>dineroUsuario = n1 + n2;

function comprobar(accion,texto1,funcion,texto2){
  accion = parseInt(prompt(texto1));
  let i = 0;
  while(isNaN(accion)){
    alert("Por favor ingrese un numero.");
    accion = parseInt(prompt(texto1));
  };
  if(isFinite(accion)) {
    funcion(dineroUsuario,accion);
    alert(\`${"${texto2}"}${"${dineroUsuario}"}\`);
  }
}
function cajero(){
  let preguntar = prompt(\`¿Que desea hacer?
1. depositar dinero.
2. retirar dinero.
3. ver mi cuenta.\`);
  if(parseInt(preguntar) === 1){
    comprobar(
      depositar,
      "¿Cuanto dinero desea depositar?",
      sumar,
      "¡Deposito exitoso! , Su saldo es de: "
    );
  } else if(parseInt(preguntar) === 2){
    comprobar(
      retirar,
      "¿Cuanto dinero desea retirar?",
      restar,
      "retiro exitoso! , Su saldo es de: "
    )
  } else if(parseInt(preguntar) === 3){
    alert(\`Su cuenta actualmente cuenta con: ${"${dineroUsuario}"}\`);
  } else {
    alert("Accion no valida.");
  }
}
cajero();

// solo debes llamar la funcion cajero de verdad funciona como cajero xd
// puedes llamar a esta funcion cuantas veces quieras siempre
// guardara cuanto dinero depositaste y cuanto dinero retiraste
// pondria mas detalle al codigo como si el numero es negativo te endeudas
// y asi pero soy un vago de mrd a parte de que el codigo seria mas 
// grande y te marearias.`}/>}
        />
      </main>
      <Footer/>
    </>
  );
}

export default FunFlecha;