import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";

function DOMJavaScript() {
  return (  
    <>
      <MensajeModal texto={`Para trabajar con (Document Object Model/DOM) se necesita de forma obligatoria html y css.`}/>
      <main>
        <h1>DOM</h1>
        <Conseptos texto={`DOM imagina que estás creando una página web dedicada a tus animes favoritos.

En esta página web, cada anime tiene su propia habitación. Por ejemplo, la habitación de "Naruto" está llena de energía ninja, la habitación de "One Piece" está llena de piratas aventureros y la habitación de "Dragon Ball" está llena de poderosos guerreros Saiyajin.

El DOM actúa como una guía que te permite acceder y manipular estas habitaciones de anime desde el código de tu página web.

Imagina que tienes una herramienta especial llamada "Code Script" Con el Code Script, puedes explorar y modificar cada habitación de anime.

Por ejemplo, puedes usar el Code Script para buscar la habitación de "Naruto" y acceder a su contenido. Puedes cambiar el título del anime para hacerlo más llamativo o actualizar la sinopsis con nuevos detalles emocionantes de la historia. Incluso puedes agregar un reproductor de video para ver los episodios directamente en la página web.

El Code Script también te permite interactuar entre diferentes habitaciones de anime. Puedes hacer que los personajes de "One Piece" visiten la habitación de "Dragon Ball" para entrenar juntos o que Naruto haga una aparición especial en la habitación de "Bleach".

Además, puedes utilizar el Code Script para decorar las habitaciones de anime. Puedes cambiar el fondo de pantalla de la habitación de "Sailor Moon" con un diseño más lindo y femenino, o agregar efectos especiales a la habitación de "Attack on Titan" para que parezca que estás dentro de la ciudad amurallada.

En resumen, el DOM en el mundo del anime es como tu Code Script, que te permite explorar y modificar las habitaciones de anime en tu página web. Puedes actualizar la información, agregar reproductores de video, hacer que los personajes interactúen entre sí y personalizar las habitaciones con elementos temáticos.

Con el poder del DOM y tu Code Script, puedes crear una página web llena de energía y emoción anime. ¡Así que adelante, crea tu propio universo anime.`}/>
        <img 
          src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Schaubilder/representacion-grafica-de-un-dom-tree.png" 
          alt="DOMImg" 
          style={{width: "60%",marginTop: "4%"}}
        />
      </main>
      <Footer/>
    </>
  );
}

export default DOMJavaScript;