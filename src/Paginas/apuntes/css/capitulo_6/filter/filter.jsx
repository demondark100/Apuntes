import { useEffect } from "react";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import "./filter.css";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Filter() {

  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Filter pone filtros a las imagenes.`,
        lenguage: "Css",
        codigo: `filter: blur(5px); /*la imagen se desenfoca*/
filter: brightness(2); /*ajusta el brollo de la imagen*/
filter: contrast(1); /*ajusta el contraste de la imagen*/
filter: drop-shadow(2px 5px 15px #000); /*da sombra a imagenes transparentes*/
filter: grayscale(1); /*ajusta cuanto gris tendra la imagen*/
filter: invert(50%); /*invierte los colores de una imagen*/
filter: saturate(.5); /*la imagen se saturara sus colores*/`
      }]}/>
      <main>
        <h1>filter</h1>
        <Conseptos texto={`Como bien dice el nombre esta propiedad nos permitira dar filtros a nuestros elementos html mayormente se notas mas en imagenes.
Este tiene muchas propiedades.`}/>

        <Conseptos texto={`none: esta viene por defecto.

blur(cuanto quieres desenfocar): esta propiedad nos sirve para desenfocar una imagen.

brightness(0 o 1): esto sera cuanto brillo va a tener la imagen (0 nada de brillo) (1 brillo normal) y puede ir escalando por ejemplo hasta el 10.

contrast(0 o 1): esto se comporta de forma similar al brillo pero esta vez es con el contraste.

drop-shadow(2px 5px 15px #000): esto es para darle sombras a una imagen transparente.

grayscale(1 defecto): esto es para que la imagen se ponga de color gris.

invert(0% o 100%): es para invertir los colores de una imagen.

saturate(0 o 1): esta propiedad hace que los colores se saturen osea que los colores vaya a sus colores mas fuertes 0 es que la imagen ira a colores grises y uno la saturacion este puede ir aumentando.`}/>

        <h2>blur</h2>
        
        <Html codigo={`<div class="blur_content">
    <img src="https://th.bing.com/th/id/OIP.PeIrlf8uwonQqvSKjskUTQHaNK?w=236&h=419&c=7&o=5&dpr=1.1&pid=1.7" alt="imagen">
</div>`}/>
        
        <Css codigo={`.blur_content img{
    width: 40%;
    filter: blur(5px);
}`}/>
        <div className="w_body">
        <div className="blur_content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__0" />
          </div>
        </div>

        <h2>brightness</h2>
        
        <Html codigo={`<div class="brightness_content">
    <img src="https://pa1.narvii.com/7689/8844d706d0dc93113f83bb22c379355562a6b5f6r1-566-630_hq.gif" alt="imagen">
</div>
<div class="brightness_content2">
    <img src="https://pa1.narvii.com/7689/8844d706d0dc93113f83bb22c379355562a6b5f6r1-566-630_hq.gif" alt="imagen">
</div>`}/>
      
      <Css codigo={`.brightness_content img{
    width: 40%;
    filter: brightness(2);
}
.brightness_content2 img{
    display: block;
    margin-top: 8px;
    width: 40%;
    filter: brightness(.7);
}`}/>
      <div className="w_body">
        <div className="brightness_content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__1" />
        </div>
        <div className="brightness_content2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__2" />
        </div>
      </div>

      <h2>contrast</h2>
      
      <Html codigo={`<div class="contrast_content">
    <img src="https://th.bing.com/th/id/OIP.Fa79isF1mooXTEQJDBAwbgAAAA?w=186&h=257&c=7&r=0&o=5&pid=1.7" alt="imagen">
</div>
<div class="contrast_content2">
    <img src="https://th.bing.com/th/id/OIP.Fa79isF1mooXTEQJDBAwbgAAAA?w=186&h=257&c=7&r=0&o=5&pid=1.7" alt="imagen">
</div>`}/>
        
        <Css codigo={`.contrast_content img{
    width: 40%;
    filter: contrast(2);
}
.contrast_content2 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: contrast(.5);
}`}/>
        <div className="w_body">
          <div class="contrast_content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" class="mostrar_img imagen__3" />
          </div>
          <div class="contrast_content2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" class="mostrar_img imagen__4" />
          </div>
        </div>

        <h2>grayscale</h2>
        
        <Html codigo={`<div class="grayscale_content1">
    <img src="https://th.bing.com/th?id=OIP.OKhMuJ3DQ9SahO8aVjgzmQHaKd&w=210&h=297&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="imagen">
</div>
<div class="grayscale_content2">
    <img src="https://th.bing.com/th?id=OIP.OKhMuJ3DQ9SahO8aVjgzmQHaKd&w=210&h=297&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="imagen">
</div>`}/>
        
        <Css codigo={`.grayscale_content1 img{
    width: 40%;
    filter: grayscale(.4);
}
.grayscale_content2 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: grayscale(2);
}`}/>
        <div className="w_body">
              <div className="grayscale_content1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__5" />
              </div>
              <div className="grayscale_content2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__6" />
              </div>
        </div>

        <h2>invert</h2>
        
        <Html codigo={`<div class="invert_content1">
    <img src="https://www.bing.com/th?id=OIP.pVbwrZkDHJuqAuiYaQKzCAHaKl&w=150&h=214&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="imagen">
</div>
<div class="invert_content2">
    <img src="https://www.bing.com/th?id=OIP.pVbwrZkDHJuqAuiYaQKzCAHaKl&w=150&h=214&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="imagen">
</div>`}/>
        
        <Css codigo={`.invert_content1 img{
    width: 40%;
    filter: invert(15%);
}
.invert_content2 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: invert(100%);
}`}/>
        <div className="webside w_body">
                <div className="invert_content1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__7" />
                </div>
                <div className="invert_content2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__8" />
                </div>
        </div>


i       <h2>saturate</h2>
        
        <Html codigo={`<div class="saturate_content1">
    <img src="https://th.bing.com/th/id/OIP.RHG3PL8XBQjk5YrY8tVpcQAAAA?w=186&h=257&c=7&r=0&o=5&pid=1.7" alt="imagen">
</div>
<div class="saturate_content2">
    <img src="https://th.bing.com/th/id/OIP.RHG3PL8XBQjk5YrY8tVpcQAAAA?w=186&h=257&c=7&r=0&o=5&pid=1.7" alt="imagen">
</div>
<div class="saturate_content3">
    <img src="https://th.bing.com/th/id/OIP.RHG3PL8XBQjk5YrY8tVpcQAAAA?w=186&h=257&c=7&r=0&o=5&pid=1.7" alt="imagen">
</div>`}/>
        
        <Css codigo={`.saturate_content1 img{
    width: 40%;
    filter: saturate(0);
}
.saturate_content2 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: saturate(1);
}
.saturate_content3 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: saturate(2);
}`}/>
      
        <div className="webside w_body">
                <div className="saturate_content1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__9" />
                </div>
                <div className="saturate_content2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__10" />
                </div>
                <div className="saturate_content3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__11" />
                </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Filter;