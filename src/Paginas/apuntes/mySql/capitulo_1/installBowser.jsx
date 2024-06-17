import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Resumenes from "../../../../componentes/resumenes/resumenes";


// imagen
import img12 from "./imagenes/img12.png";
import img13 from "./imagenes/img13.png";
import img14 from "./imagenes/img14.png";

function InstallBrowserMySql() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Descargamos el instalador y luego damos a siguiente y finalizar.`
      }]}/>
      <main>
        <h1>Instalar db en el navegador</h1>
        <Conseptos texto={`Ahora instalaremos la db en el navegador.`}/>
        <ImagenLink tipo={`link`} imagen={img12} link={"https://sqlitebrowser.org/"} titulo={"browser"}/>
        <Conseptos texto={`Primero hacemos click en "Download".`}/>
        <ImagenLink tipo={"imagen"} imagen={img13} titulo={"Download"}/>
        <Conseptos texto={`Instalamos la version de "64" o "32" bits segun sea tu pc, en la version standard`}/>
        <ImagenLink tipo={"imagen"} imagen={img14} titulo={"Download"}/>
        <Conseptos texto={`Una vez descargado abren el archivo.exe e instalan el programa, solo es dar siguiente e instalar.`}/>
      </main>
      <Footer />
    </>
  );
}

export default InstallBrowserMySql;