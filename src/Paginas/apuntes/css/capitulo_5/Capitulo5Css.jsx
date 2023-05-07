import Capitulos from "../../../../componentes/capitulos/capitulos";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function Capitulo5Css() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>capitulo 5</h1>
        <Capitulos texto={"grid"}/>
        <Capitulos texto={`responsive design`}/>
        <Capitulos texto={"transition"} />
      </main>
      <Footer />
    </>
  );
}

export default Capitulo5Css;