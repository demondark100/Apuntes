import Capitulos from "../../../../componentes/capitulos/capitulos";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function Capitulo4Html() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>capitulo 4</h1>
        <Capitulos texto={`mav`} />
        <Capitulos texto={`section y article`} />
        <Capitulos texto={`aside`} />
        <Capitulos texto={`main`} />
        <Capitulos texto={`footer`} />
        <Capitulos texto={`tablas`} />
        <Capitulos texto={`extra`} />
      </main>
      <Footer />
    </>
  );
}

export default Capitulo4Html;