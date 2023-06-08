import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function RecursividadJs() {
  return (  
    <>
      <main>
        <h1>Recursividad</h1>
        <Conseptos texto={`La Recursividad es una funcion que se llama asi misma.`}/>
        <h2>ejemplo</h2>
        <JavaScropt codigo={`const llamar=()=>{
    llamar()
}
//llamar()
//por favor no descomentar esta linea se hara un bucle infinito :v.`}/>
        <JavaScropt codigo={`const validarEdad = (err) => { 
    let edad;
    try { 
        if (err) edad = prompt("pon una edad valida");
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if(isNaN(edad)) throw "introduce tu edad";
        if(edad > 18) console.log("eres mayor de edad")
        else console.log("no eres mayor de edad")
    } catch (error) {
        validarEdad(error)
    }
}
validarEdad()`}/>
      </main>
      <Footer/>
    </>
  );
}

export default RecursividadJs;