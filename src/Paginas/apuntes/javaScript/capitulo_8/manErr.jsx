import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function ManErrJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Ahora manejaremos errores que nosotros esperamos que puedan pasar manejarlos.`,
        lenguage: "JavaScropt",
        codigo: `try{
  alert(saludo); // la variable saludo no existe.
  throw "error en la aplicacion." // ejecuta un error por defecto.
} catch(error){
  console.log(error); // muestra el error.
} finally {
  console.log("manejp"); // siempre me ejecutare haya o no errores.
}`
      }]}/>
      <main>
        <h1>Manejo de errores</h1>
        <h2>try catch</h2>
        <Conseptos texto={`Nosotros podemos manejar los posibles errores que haya en nuestro codigo , pero no podemos manejar errores de sintaxis.`}/>
        <Sintaxis codigo={`error{ 
    pasa un error
}
atraparError(error){
    manejar el error
}`}/>
        <JavaScropt codigo={`try { 
    console.log(respuesta)
} catch (error) {
    console.log("esta variable no esta declarada")
}`}/>
        <Conseptos texto={`En este caso la variable "respuesta" no esta declarada y podemos manejarla mandando un mensaje.`}/>
        <h2>finally</h2>
        <Conseptos texto={`"finally" siempre se ejecutara si hay errores o no.`}/>
        <JavaScropt codigo={`try {
    console.log("hola mundo")
} catch (error) {
    console.log("esto es un error")
} finally {
    console.log("siempre me ejecutare haya o no errores.")
}`}/>
      <h2>throw</h2>
      <Conseptos texto={`"throw" sera para tirar errores directamente.

Pequeño dato "throw" puede contener objetos , arreglos , etc.`}/>
        <JavaScropt codigo={`try {
    throw "tiraremos un error"
} catch (error) {
    console.log(error)
}`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ManErrJs;