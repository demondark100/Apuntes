import Capitulos from "../../../../componentes/capitulos/capitulos";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function Capitulo_2Html() {
  return (  
    <>
      <Menu2 />
      <main className="capitulo_2Html_main">
        <h1>Capitulo 2</h1>
        <Capitulos texto={"Etiquetas"} />
        <Capitulos texto={"estructura html"}  />
        <Capitulos texto={`html semantico`} />
      </main>
      <Footer />
    </>
  );
}

export default Capitulo_2Html;