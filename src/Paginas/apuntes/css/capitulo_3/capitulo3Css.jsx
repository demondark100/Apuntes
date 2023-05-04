import Capitulos from "../../../../componentes/capitulos/capitulos";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function Capitulo3Css() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>capitulo 3</h1>
        <Capitulos texto={`position`}/>
        <Capitulos texto={`display`}/>
        <Capitulos texto={`overflow`}/>
        <Capitulos texto={`float`}/>
        <Capitulos texto={`pseudoelementos`}/>
        <Capitulos texto={`pseudoclases`}/>
      </main>
      <Footer />
    </>
  );
}

export default Capitulo3Css;