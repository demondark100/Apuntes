import Capitulos from "../../../../componentes/capitulos/capitulos";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function Capitulo4Css() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>capitulo 4</h1>
        <Capitulos texto={`object fit`}/>
        <Capitulos texto={"cursor"} />
        <Capitulos texto={`colorizacion`}/>
        <Capitulos texto={"responsive(basico)"} />
        <Capitulos texto={`flexbox`} />
        <Capitulos texto={"order"}/>
      </main>
      <Footer />
    </>
  );
}

export default Capitulo4Css;