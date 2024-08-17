import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./background.css"
import Resumenes from "../../../../../componentes/resumenes/resumenes"

function Background() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Esto es para dar fondo a un elemento por ejemplo poner un fondo de color o imagen de fondo , etc.`,
        lenguage: "Css",
        codigo: `background-color: red; /*poner un color de fondo*/
background-image: url("link de la imagen");
/*ajustar imagenes*/
background-size: contain; /*ajusta la imagen a su escala real*/
background-size: cover: /*ajusta la imagen a su contenedor*/
/*repeticion de imagen*/
background-repeat: repat; /*esto es para que una imagen se repita varias veces en su escala original*/
background-repeat: norepeat; /*hace que la imagen no se repita en su escala original*/
/*ajustar para mostrar*/
background-clip: border-box; /*mostrar desde el borde*/
background-clip: padding-box; /*la imagen se ajustara al padding*/
background-clip: content-box; /*la imagen se ajusta al contenido*/
/*posisionar imagen*/
background-position: center center; /*posisiona la imagen donde desees*/
/*ajuste de imagen*/
background-attachment: fixed; /*esto hace que un fondo se fije en una posision , da un buen efecto*/
background-attachment: scroll; /*hace que la imagen se mueva con el contenido*/

`
      }]}/>
      <main>
        <h1>background</h1>
        <Conseptos texto={`Esta propiedad nos permite dar fondos a las cajas este tiene muchas proiedades que veremos a continuacion.`}/>
        <h2>background-color</h2>
        <Conseptos texto={`Esta propiedad ya la vimos anteriormente pero la veremos aqui tambien XD , esta propiedad cambia el color de fondo de las cajas.`}/>
        
        <Html codigo={`<div class="b_color_content">

</div>`}/>
        <Css codigo={`.b_color_content{
  width: 50%;
  height: 50%;
  background-color: red;
}`}/>
        <div className="website">
          <div className="b_color_content">

          </div>
        </div>

        <h2>background-image</h2>
        <Conseptos texto={`Esta propiedad nos permite poner imagenes como fondo.`}/>
        
        <Css codigo={`background-image: url("link de la imagen que queremos");`}/>
        
        <Html codigo={`<div class="image_content">

</div>`}/>
        <Css codigo={`.image_content{
  width: 75%;
  height: 75%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
}`}/>
        <div className="website">
          <div class="image_content">
          </div>
        </div>

        <h2>background-size</h2>
        <Conseptos texto={`Esta propiedad nos permite poner la imagen en su tamaño original o modificarlo para que se ajuste como deseemos.
esta tiene 2 propiedades:

cover: esta hace que la imagen se ajuste automaticamente.

contain: esta propiedad viene por defecto pero hace que se adapte a la resolucion de su contenedor.

a este tambien se le puede posisionar con porcentajes.
background-size: 100%;
pero en ese caso es mejor usar cover.`}/>
        
        <Html codigo={`<div class="size_content">

</div>`}/>
        
        <Css codigo={`.size_content{
  width: 75%;
  height: 75%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-size: cover;
}`}/>
        <div className="website">
          <div class="size_content">

          </div>
        </div>

        <h2>background-repeat</h2>
        <Conseptos texto={`Esta propiedad nos sirve para que una imagen no se repita.
como te habras dado cuenta la imagen por defecto se suele repetir pero gracias a esta propiedad evitamos eso.

background-repeat: no-repeat; es para que la imagen no se repita.

background-repeat: repeat; es para que la imagen se repita.`}/>
        
        <Html codigo={`<div class="repeat_content">

</div>`}/>
        
        <Css codigo={`.repeat_content{
  width: 75%;
  height: 75%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-repeat: repeat;
}`}/>
      
      <Css codigo={`.repeat_content{
  width: 75%;
  height: 75%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-repeat: no-repeat;
}`}/>
      
      <div className="website">
        <div class="repeat_content1">
        </div>
      </div>
      
      <div className="website">
        <div class="repeat_content2">
        </div>
      </div>

      <h2>background-clip</h2>
      <Conseptos texto={`Esta propiedad tiene varios valores y esta sirve para indicar desde que posision se va a mostrar la imagen , desde los bordes , desde el padding , desde el contenido.

border-box: es para que la imagen se ajuste a los bordes.

padding-box: es para que la imagen se ajuste al padding.

content-box: es para la imagen se ajuste al contenido.`}/>
        
        <Html codigo={`<div class="clip_content">

</div>`}/>
        
        <Css codigo={`.clip_content{
  width: 75%;
  height: 75%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-size: cover;
  background-clip: border-box;
}`}/>
        <h2>background-position</h2>
        <Conseptos texto={`Esta propiedad nos permite posisionar una imagen como queramos, esta propiedad recibira 2 parametros el primer parametro sera como queremos posisionar de (izquierda a derecha) y de (arriba a abajo).
estos son los parametros que tiene background position.
top , left , bottom , right , center.`}/>
        
        <Html codigo={`<div class="position_content">

</div>`}/>
        
        <Css codigo={`.position_content{
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  width: 75%;
  height: 45%;
  background-size: 65% 35%;
  background-repeat: no-repeat;
  background-color: #000;
  border: 4px solid #2eff55;
  background-position: center center;
}`}/>

        <h2>background-attachment</h2>
          <Conseptos texto={`background-attachment es una propiedad en CSS que determina si un fondo de imagen se fija o se desplaza con el resto del contenido de la página mientras se desplaza.

Puedes establecer background-attachment en "fixed" para que la imagen de fondo se quede fija en una posición específica, incluso cuando el usuario desplaza la página o puedes establecerlo en "scroll" para que la imagen de fondo se mueva junto con el contenido de la página mientras el usuario desplaza la página.`}/>
        
        <Html codigo={`<div class="attachment_content">

</div>`}/>
        
        
        <Css codigo={`.attachment_content{
  width: 75%;
  height: 75%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  background-attachment: fixed;
}`}/>
        <div className="website">
          <div class="attachment_content1">

          </div>
        </div>
        
        <Css codigo={`.attachment_content{
  width: 75%;
  height: 75%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  background-attachment: scroll;
}`}/>
        <div className="website">
          <div class="attachment_content2">

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Background;