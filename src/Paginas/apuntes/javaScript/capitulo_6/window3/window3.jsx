import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import "./window3.css";

function Window3Js() {
  return (  
    <>
      <main>
        <h1>window 3</h1>
        <h2>location</h2>
        <JavaScropt codigo={`console.log(window.location);`}/>
        <Conseptos texto={`Esto nos servira para saber la informacion de la pagina como el puerto , protocolo , etc.`}/>

        <div className="content_grafico">
          <div className="protocolo">
            <p className="protocolo_1">https://</p>
            <p className="protocolo_2">protocolo</p>
          </div>

          <div className="hostaname">
            <p className="hostaname_1">youtube.com</p>
            <p className="hostaname_2">hostname/</p>
            <p>dominio</p>
          </div>

          <div className="patname">
            <p className="patname_1">
              /canal/el_tio_dan
            </p>
            <p className="patname_2">
              pathname
            </p>
          </div>

          <div className="content_href">
            <p className="href_1">
              href
             </p>
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
}

export default Window3Js;