import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";

function Multimedia() {
  return (  
    <>
    <main>
      <h1>Multimedia</h1>
      <Conseptos texto={`Aqui pondremos videos , audios , imagenes osea se viene lo bueno lo ricolino.`}/>
      <h2>img</h2>
      <Conseptos texto={`Esta etiqueta tiene un atributo parecido a "href" el cual es "scr" solo que aqui debemos de poner la ruta de la imagen que queremos poner esto puede ser de forma local y de protocolo https recuerda que de forma local debes moverte de carpeta en carpeta "../" o "/".

Luego el atributo "alt" es para poner un mensaje por si acaso laimagen se borra.`} />

      <Html codigo={`<img src="enlace de imagen" alt="texto por si acaso se borra">`}/>

      <Html codigo={`<img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="javaScript">

<!-- es este caso hemos puesto la imagen de un sitio externo.  -->

<!-- no copiar la parte de abajo -->

<!-- <img src="carpeta/imagen.png" alt="imagen local"> -->

<!-- aqui estariamos poniendo una imagen de forma local osea una imagen que nosotro tenemos en nuestra pc -->`}/>
      <div className="website">
        <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="javaScript" />
      </div>

      <h2>video</h2>
      <Conseptos texto={`Esta etiqueta es para poner videos y que a diferencia de "img" esta si necesita un sierre.
<video></video>`} />
      <Html codigo={`<iframe  src="https://www.youtube.com/embed/TX_YDR_6_yo">

</iframe>

<!-- con iframe estamos agregando videos de youtube para poder pomer un video de youtube 
debemos dar donde dice compartir y habra una opcion que dice incorporar
copiaras todo ese iframe. -->

<!-- no copiar el de abajo -->

<video src="carpeta/video.mp4" controls>

</video>

<!-- con video agregaremos videos de nuestros archivos locales 
siempre deben tener el atributo controls para poder controlar el video. -->
`}/>
      <div className="website">
        <iframe  src="https://www.youtube.com/embed/TX_YDR_6_yo">

        </iframe>
      </div>

      <h2>audio</h2>
      <Conseptos texto={`Es igual que video solo que ponemos audio.`}/>
      <Html codigo={`<audio src="carpeta/video.mp3" controls>
</audio>`}/>
      <div className="website">
        <audio src="carpeta/video.mp3" controls>
        </audio>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default Multimedia;