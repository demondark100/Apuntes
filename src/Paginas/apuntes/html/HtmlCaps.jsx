import "./HomeCaps.css";


// componentes
import Capitulos from "../../../componentes/capitulos/capitulos";
import Footer from "../../../componentes/menus/Footer";
import Menu2 from "../../../componentes/menus/Menu2";

function HtmlCaps() {
  return (  
    <>
      <Menu2 />
      <main className="main__capitulos">
        <h1 className="html_title">html</h1>
        <Capitulos texto={"capitulo 1"} />
        <Capitulos texto={"capitulo 2"} />
        <Capitulos texto={"capitulo 3"} />
        <Capitulos texto={"capitulo 4"} />
      </main>
      <Footer />
    </>
  );
}

export default HtmlCaps;