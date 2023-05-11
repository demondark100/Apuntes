import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./input.css";
import JavaScript from "../../../../../componentes/lenguajes/JavaScript";

function InpuLogica() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>inputs y outputs</h1>
        <Conseptos texto={`La programacion se basa en pedir procesar y dar un dato al usuario por ejemplo un sitio web que te pide tu nombre , ese dato lo procesa y hace algo con ese dato dandole un mensaje al usuario que es correcto o incorrecto.`}/>
        
        <h2>input</h2>
        <Conseptos texto={`El input se encargara de pedir un dato al usuario por ejemplo.`}/>
        <JavaScript codigo={`nombre = pedirDato("escribe tu nombre")`}/>
        <h2>proceso</h2>
        <Conseptos texto={`Aqui procesamos el nombre del usuario.`}/>
        <JavaScript />
        
      </main>
      <Footer />
    </>
  );
}

export default InpuLogica;