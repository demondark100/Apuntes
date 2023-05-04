import Capitulos from "../../../../componentes/capitulos/capitulos";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function Capitulo_3Html() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>Capitulo 3</h1>
        <Capitulos texto={"enlaces"} />
        <Capitulos texto={"br"} />
        <Capitulos texto={"listas"} />
        <Capitulos texto={"multimedia"} />
        <Capitulos texto={`divs`} />
        <Capitulos texto={`formularios`} />
        <Capitulos texto={`Metadatos`} />
      </main>
      <Footer />
    </>
  );
}

export default Capitulo_3Html;