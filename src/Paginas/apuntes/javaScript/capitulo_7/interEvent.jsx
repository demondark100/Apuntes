import Html from "../../../../componentes/lenguajes/Html";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function InterEventJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>eventos de la interfaz</h1>
        <h2>error</h2>
        
        <Html codigo={`<p class="parrafo">hola mundo</p>`}/>
        

        {/* <input type="text" className="input_tecla"/> */}
      </main>
      <Footer/>
    </>
  );
}

export default InterEventJs;