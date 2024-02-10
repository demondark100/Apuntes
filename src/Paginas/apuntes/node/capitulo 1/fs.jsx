import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";

function FsNode() {
  return (  
    <>
      <main>
        <h1>fs (file system)</h1>
        <Conseptos texto={`Este modulo nos sirve para leer archivos del sistema , en este caso vamos a leer un archivo "html".`}/>
        
      </main>
      <Footer />
    </>
  );
}

export default FsNode;