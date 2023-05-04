import { Link } from "react-router-dom";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import Capitulos from "../../../../componentes/capitulos/capitulos";

function Capitulo2Css() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>capitulo 2</h1>
        <Capitulos texto={`background`}/>
        <Capitulos texto={`propiedades de texto`}/>
        <Capitulos texto={`normalize`}/>
        <Capitulos texto={`cajas`}/>
        <Capitulos texto={`padding`}/>
        <Capitulos texto={`margin`}/>
        <Capitulos texto={`border`}/>
        <Capitulos texto={`sombras`}/>
        <Capitulos texto={`outline`}/>
      </main>
      <Footer />
    </>
  );
}

export default Capitulo2Css;