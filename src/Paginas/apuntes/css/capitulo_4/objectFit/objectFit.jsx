import Footer from "../../../../../componentes/menus/Footer";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import "./objectFit.css";
import { useEffect } from "react";
import Resumenes from "../../../../../componentes/resumenes/resumenes";



function ObjetFit() {

  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Estilizar las imagenes`,
        lenguage: "Css",
        codigo: `/*contain*/
.contain img{ /*imagen en escala real*/
  width: 100%;
  object-fit: contain;
}
/*cover*/
.cover img{ /*ajusta la imagen al tamaño de su contenedor*/
  width: 100%;
  object-fit: cover;
}
/*none*/
.none img{  /*ajusta la imagen a su escala real*/
  width: 100%;
  object-fit: none;
}
/*object-position*/
.position img{  /*posisiona una imagen donde deseemos*/
  width: 100%;
  object-fit: cover;
  object-position: right;
}
`
      }]}/>
      <main>
        <h1>object fit</h1>
        <Conseptos texto={`Esta propiedade nos permitira controlar los estilos de las imagenes para centrarlas , ajustarlas bien , etc.`}/>

        <h2>contain</h2>
        <Conseptos texto={`"contain" hace que la imagen se ponga a su resolucion real por mas que el contenedor sea demasiado grande.`}/>
        
        <Html codigo={`<div class="contain">
  <img src="https://i.pinimg.com/originals/55/d0/29/55d02905b888ffbf8967484aa7875e34.jpg" alt="imagen">
</div>`}/>
        
        <Css codigo={`.contain{
  margin: auto;
  width: 85%;
  height: 400px;
  border: 2px solid blue;
  display: flex;
}
.contain img{
  width: 100%;
  object-fit: contain;
}`}/>
        
        <div className="website">
          <div className="contain_">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__0" />
          </div>
        </div>
        
        <div className="website">
        <div className="contain_">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__1" />
          </div>
        </div>

        <h2>cover</h2>
        <Conseptos texto={`"cover" ajuata a la imagen al tamaño de su contenedor recortandola para que se pueda ver bien.`}/>
        
        <Html codigo={`<div class="cover">
  <img src="https://pm1.narvii.com/7858/b1ce484056913bc7484e401d0ce7c1e4ee727a81r1-736-736v2_uhq.jpg" alt="imagen">
</div>`}/>
        
        <Css codigo={`.cover{
  margin: auto;
  width: 85%;
  height: 400px;
  border: 2px solid blue;
  display: flex;
}
.cover img{
  width: 100%;
  object-fit: cover;
}`}/>
        
        <div className="website">
          <div className="cover_">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__2" />
          </div>
        </div>
        
        <div className="website">
          <div className="cover">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__3" />
          </div>
        </div>

        <h2>none</h2>
        <Conseptos texto={`"none" ajusta a la imagen pero con su resolucion a escala real osea que si la imagen mide 200x400 se ajustara a su resolucion real.`}/>
        
        <Html codigo={`<div class="none">
  <img src="https://i.pinimg.com/originals/53/9e/7d/539e7deaa1c884043b565b2cf529b042.jpg" alt="imagen">
</div>`}/>
        
        <Css codigo={`.none{
  margin: auto;
  width: 85%;
  height: 400px;
  border: 2px solid blue;
  display: flex;
}
.none img{
  width: 100%;
  object-fit: none;
}`}/>
        
        <div className="website">
          <div className="none_">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__4" />
          </div>
        </div>
        
        <div className="website">
          <div className="none">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__5" />
          </div>
        </div>

        <h2>object-position</h2>
        <Conseptos texto={`Esto es para posisionar una imagen de arriba,abajo,derecha,izquierda.

Puedes ponerle cualquier propiedad.
top , right , bottom , left tambien puedes usar los em ejemplo "-15em" etc.

escoje una imagen`}/>
        
        <Html codigo={`<div class="position">
  <img src="https://i.pinimg.com/originals/55/d0/29/55d02905b888ffbf8967484aa7875e34.jpg" alt="imagen">
</div>`}/>
        
        <Css codigo={`.position{
  margin: auto;
  width: 85%;
  height: 400px;
  border: 2px solid blue;
  display: flex;
}
.position img{
  width: 100%;
  object-fit: cover;
  object-position: right;
}`}/>
        <div className="website">
          <div className="position">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="escoje una imagen" className="mostrar_img imagen__6" />
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default ObjetFit;