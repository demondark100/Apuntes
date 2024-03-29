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
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0uzC4VqkW2TrOxNezNxAMyDmfiT1eh08MA&usqp=CAU");
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
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRX5PzBvLyyVyd--jP44hUElF24VuuVXofhA&usqp=CAU");
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
  background-image: url("data:image/jpeg;base64,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");
  background-repeat: repeat;
}`}/>
      
      <Css codigo={`.repeat_content{
  width: 75%;
  height: 75%;
  background-image: url("data:image/jpeg;base64,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");
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
  background-image: url("https://static.zerochan.net/Kitagawa.Marin.full.3592375.jpg");
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
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVJSGrx1UmAQAh32prB3cOEENl0lIGRA72A&usqp=CAU");
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
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxF23smkQ6DhywFxs2fgbOpk3uU1gZZXktQ&usqp=CAU");
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
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxF23smkQ6DhywFxs2fgbOpk3uU1gZZXktQ&usqp=CAU");
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