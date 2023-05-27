import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function CallbacksJs() {
  return (  
    <>
      <Menu2/>
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
        
      </main>
      <Footer/>
    </>
  );
}

export default CallbacksJs;