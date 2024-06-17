import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img1 from "./imagenes/img1.png";
import img2 from "./imagenes/img2.png";
import img3 from "./imagenes/img3.png";
import img4 from "./imagenes/img4.png";
import img5 from "./imagenes/img5.png";
import img6 from "./imagenes/img6.png";
import img7 from "./imagenes/img7.png";
import img8 from "./imagenes/img8.png";
import img9 from "./imagenes/img9.png";
import img10 from "./imagenes/img10.png";
import img11 from "./imagenes/img11.png";


function InstallMySql(){
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Descargar el sqlite y luego mueves esos 3 archivos en una carpeta que se cree en el disco local de tu pc.`
      }]}/>
      <main>
        <h1>instalacion de sqlite 3</h1>
        <Conseptos texto={`En este caso usaremos sqlite 3 para poder ejecutar codigo mySql, osea que todo lo aprendido se podra aplicar en otras bases de datos distintas a esta.`}/>
        <ImagenLink tipo={"link"} imagen={img1} link={"https://www.sqlite.org/"} titulo={"descargar"}/>
        <Conseptos texto={`Cuando estemos en la pagina de "sqlite" hacemos click en download, una vez hecho eso aparecera esta pagina.`}/>
        <ImagenLink tipo={"imagen"} imagen={img2} titulo={"Descargar"}/>
        <Conseptos texto={`Ahora nos dirigimos a "sqlite-tools-win-x64-3450300.zip
(4.77 MiB)	" y hacemos click alli para descargarlo.`}/>
        <ImagenLink tipo={"imagen"} imagen={img3} titulo={"descargar"}/>
        <Conseptos texto={`Una vez descargado descomprimimos el archivo, luego copiamos o cortamos los 3 archivos que descomprimimos.`}/>
        <ImagenLink tipo={"imagen"} imagen={img4} titulo={"copiar"}/>
        <Conseptos texto={`Luego vamos a nuestro disco local C o D y creamos una carpeta con cualquier nombre en mi caso sera "sqlite 3".`}/>
        <ImagenLink tipo={"imagen"} imagen={img5} titulo={"Carpeta"}/>
        <Conseptos texto={`Dentro de ese archivo creado pegamos nuestro tres archivos copiados o cortados.`}/>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"Pegado"}/>
        <h2>Acceder a los archivos desde cualquier lugar</h2>
        <Conseptos texto={`Para acceder a esos archivos desde cualquier lugar en nuestro buscador de windows buscamos "Editar las variables del entorno del sistema", abrimos lo que salio y saldra una ventana como esta.`}/>
        <ImagenLink tipo={"imagen"} imagen={img7} titulo={"editar variable"}/>
        <Conseptos texto={`Luego hacemos click en "variables de entorno".`}/>
        <ImagenLink tipo={"imagen"} imagen={img8} titulo={"variable"}/>
        <Conseptos texto={`Despues en "Path"`}/>
        <ImagenLink tipo={"imagen"} imagen={img9} titulo={"path"}/>
        <Conseptos texto={`Luego copiamos la ruta que esta en la carpeta que creamos y pegamos los 3 archivos.`}/>
        <ImagenLink tipo={"imagen"} imagen={img10} titulo={"carpeta"}/>
        <Conseptos texto={`Luego en "Nuevo" y pegamos la ruta que copiamos y despues click en "Aceptar".`}/>
        <ImagenLink tipo={"imagen"} imagen={img11} titulo={"Finalizar"}/>
      </main>
      <Footer />
    </>
  )
}

export default InstallMySql;