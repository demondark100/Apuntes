import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import Capitulos from "../../../../componentes/capitulos/capitulos";

function CapitulosHtml() {
  return (  
    <>
      <Menu2 />
      <main style={{height: "60vh"}}>
        <h1>Temas html</h1>
        <Capitulos texto={"importante leer esto"}/>
        <Capitulos texto={"conseptos basicos"}/>
      </main>
      <Footer />
    </>
  );
}

export default CapitulosHtml;