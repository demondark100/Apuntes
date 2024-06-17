import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";

// imagenes
import img1 from "./imgs/img1.png"

function DarkMySql(){
  return(
    <>
      <main>
        <h1>Poner en modo oscuro</h1>
        <Conseptos texto={`Ahora que instalamos el programa de "sqlite brwoser" abrimos el programa y vamos en "Edit" y "Preference".

Cuando estemos en ese apartado hacemos click en la opcion al lado de "application style" y elegimos "Dark style"."`}/>
        <ImagenLink tipo={"imagen"} imagen={img1} titulo={"dark"}/>
      </main>
      <Footer />
    </>
  )
}

export default DarkMySql;