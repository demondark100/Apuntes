import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./input.css";

function InpuLogica() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>inputs y outputs</h1>
        <Conseptos texto={`La programacion se basa en pedir procesar y dar un dato al usuario por ejemplo un sitio web que te pide tu nombre , ese dato lo procesa y hace algo con ese dato dandole un mensaje al usuario que es correcto o incorrecto.`}/>

        
      </main>
      <Footer />
    </>
  );
}

export default InpuLogica;