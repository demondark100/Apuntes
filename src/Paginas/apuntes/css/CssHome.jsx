import Capitulos from "../../../componentes/capitulos/capitulos";
import Footer from "../../../componentes/menus/Footer";
import Menu2 from "../../../componentes/menus/Menu2";

function CssHome() {
  return (  
    <>
      <Menu2 />
        <main>
          <h1>css</h1>
          <Capitulos texto={`capitulo 1`} />
          <Capitulos texto={"capitulo 2"}  />
          <Capitulos texto={`capitulo 3`} />
          <Capitulos texto={`capitulo 4`} />
          <Capitulos texto={"capitulo 5"} />
        </main>
      <Footer />
    </>
  );
}

export default CssHome;