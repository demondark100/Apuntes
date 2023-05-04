import Capitulos from "../../../../componentes/capitulos/capitulos";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function Capiulo1Css() {
  return (  
    <>
      <Menu2 />
      <main className="capitulo1Css">
        <h1>capitulo 1</h1>
        <Capitulos texto={`introduccion a css`} />
        <Capitulos texto={`selectores`} />
        <Capitulos texto={`especificidad`} />
        <Capitulos texto={`metodologia BEM`} />
        <Capitulos texto={`unidades`} />
      </main>
      <Footer />
    </>
  );
}

export default Capiulo1Css;