import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./position.css"
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function PositionSticky() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Esto es similar a "position-relative" pero se queda fija en un lugar al igual que fixed.`,
        lenguage: "Css",
        codigo: `position: sticky; /*posisionar en sticky*/`
      }]}/>
      <main>
        <h1>position-sticky</h1>
        <Conseptos texto={`Esto es igual a Position Fixed pero la diferencia esque se asimila mas a position relative asi como Fixed se parecia a position absolute en simples palabras sticky ocupa un espacio real en el sitio web.`}/>
        <img className="StickyEmilia" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="Emilia" />
        
        
        <Html codigo={`<div class="content">
  <div class="pagina">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.


      <div class="menu">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
      </div>


      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
        
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consecteturrferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
    </p>
  </div>
 </div>`}/>
        
        <Css codigo={`.menu{
  background-color: blue;
  color: wheat;
  opacity: 0.5;
  width: 100%;
  position: sticky;
  top: 5px;
}`}/>
        <Conseptos texto={`sticky se usa para poner algo estatico pero desde que parte de la pagina quieres que sea estatico siempre debes ponerle una propiedad a sticky ya sea top o left para que funcione.
        
ejemplo:
position: sticky;
tio: 15px;
left: 50px`}/>
        <div className="siguiente__parte">
          <Link to={`/css/position/position absolute/z-index/position-fixed/position-sticky/resultado`}>resultado</Link>
        </div>

        <Conseptos texto={`Para terminar de entender sticky fijate en la imagen de Emilia que baja a medida que tu bajas en la pagina.`}/>


      </main>
      <Footer />
    </>
  );
}

export default PositionSticky;