import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";

// imagenes
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";
import img6 from "./imgs/img6.png";
import img7 from "./imgs/img7.png";

function CrearDbMySql(){
  return (
    <>
      <main>
        <h1>Crear base de datos</h1>
        <Conseptos texto={`Ahora crearemos nuestra primer base de datos , esto se hace a travez de las tablas.
        
Para esto usaremos el "archivo.exe" que instalamos esto escribira el codigo por nosotros.

1. Cuando se abras "DB Browser" has click en New Database.`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={`Nueva base de dato`}/>
        <Conseptos texto={`Despues tenemos que hacer click en "Create Table".`}/>
        <ImagenLink tipo={"imagen"} imagen={img3} titulo={"Crear tabla"}/>
        <Conseptos texto={`Ahora saldra una ventana donde crearemos nuestra primer base de datos.`}/>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"tabla"}/>
        <h2>nombrar tabla</h2>
        <ImagenLink tipo={"imagen"} imagen={img5} titulo={"Nombrar"}/>
        <h2>crear tabla</h2>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"agregar tabla"}/>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"tabla"}/>
      </main>
      <Footer />
    </>
  )
}

export default CrearDbMySql;