import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import "./objectFit.css";
import { useEffect } from "react";
import Capitulos from "../../../../../componentes/capitulos/aside";




function ObjetFit() {

  useEffect(()=>{

    const imagen1 = document.querySelector(".imagen1");
    const imagen2 = document.querySelector(".imagen2");
    const imagen3 = document.querySelector(".imagen3");
    const imagen4 = document.querySelector(".imagen4");
    const imagen5 = document.querySelector(".imagen5");
    const mostrar_img = document.querySelectorAll(".mostrar_img");

    let guardarImagenes = []
    function seleccionarImagenes(imagen) {
        for (let i = 0; i < mostrar_img.length; i++) {
            guardarImagenes[i] = document.querySelector(`.${imagen}${i}`);
        }
    }
    function ponerImagen(link,alt,title){
        seleccionarImagenes("imagen__");
        for (let i = 0; i < mostrar_img.length; i++) {
            guardarImagenes[i].setAttribute("src",link);
            guardarImagenes[i].setAttribute("alt",alt);
            guardarImagenes[i].setAttribute("title",title);
        }
    }

    imagen1.addEventListener("click",()=>{
        ponerImagen("https://i.pinimg.com/originals/55/d0/29/55d02905b888ffbf8967484aa7875e34.jpg");
    })
    imagen2.addEventListener("click",()=>{
        ponerImagen("https://pm1.narvii.com/7858/b1ce484056913bc7484e401d0ce7c1e4ee727a81r1-736-736v2_uhq.jpg","Miku","Miku");
    })
    imagen3.addEventListener("click",()=>{
        ponerImagen("https://i.pinimg.com/originals/53/9e/7d/539e7deaa1c884043b565b2cf529b042.jpg","Nino","Nino");
    })
    imagen4.addEventListener("click",()=>{
      ponerImagen("https://th.bing.com/th/id/OIP.JYIJGC-vsM49MkzE3CDRwwHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7","Ichika","Ichika");
    })
    imagen5.addEventListener("click",()=>{
      ponerImagen("https://th.bing.com/th/id/OIP.aPMgguAIRbUOtSAg7md24QHaEK?w=186&h=104&c=7&r=0&o=5&dpr=1.1&pid=1.7","Itsuki","Itsuki");
    })


    const img_over1 = document.querySelector(".img_over1");
    const img_over2 = document.querySelector(".img_over2");
    const img_over3 = document.querySelector(".img_over3");
    const img_over4 = document.querySelector(".img_over4");
    const img_over5 = document.querySelector(".img_over5");

    imagen1.addEventListener("mouseover",()=>{
        img_over1.classList.add("mostrar_imgss");
    })
    imagen1.addEventListener("mouseout",()=>{
        img_over1.classList.remove("mostrar_imgss");
    })

    imagen2.addEventListener("mouseover",()=>{
        img_over2.classList.add("mostrar_imgss");
    })
    imagen2.addEventListener("mouseout",()=>{
        img_over2.classList.remove("mostrar_imgss");
    })

    imagen3.addEventListener("mouseover",()=>{
        img_over3.classList.add("mostrar_imgss");
    })
    imagen3.addEventListener("mouseout",()=>{
        img_over3.classList.remove("mostrar_imgss");
    })

    imagen4.addEventListener("mouseover",()=>{
      img_over4.classList.add("mostrar_imgss");
    })
    imagen4.addEventListener("mouseout",()=>{
      img_over4.classList.remove("mostrar_imgss");
    })

    imagen5.addEventListener("mouseover",()=>{
      img_over5.classList.add("mostrar_imgss");
    })
    imagen5.addEventListener("mouseout",()=>{
      img_over5.classList.remove("mostrar_imgss");
    })

  })



  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>object fit</h1>
        <Conseptos texto={`Esta propiedade nos permitira controlar los estilos de las imagenes para centrarlas , ajustarlas bien , etc.`}/>
        
        <h2>elige una imagen</h2>

        <div className="content_imgs">
          <div className="elegir_imagen">
            <button 
              className="btn_img imagen1"
            >Yotsuba</button>

            <button 
              className="btn_img imagen2"
            >Miku</button>

            <button 
              className="btn_img imagen3"
            >Nino</button>

            <button 
              className="btn_img imagen4"
            >Ichika</button>

            <button 
              className="btn_img imagen5"
            >Itsuki</button>
          </div>

          <div className="imagenes">
            <img
              src="https://i.pinimg.com/originals/55/d0/29/55d02905b888ffbf8967484aa7875e34.jpg"
              alt=""
              className="img_over img_over1"
            />

            <img 
              src="https://pm1.narvii.com/7858/b1ce484056913bc7484e401d0ce7c1e4ee727a81r1-736-736v2_uhq.jpg"
              alt=""
              className="img_over img_over2"
            />

            <img 
              src="https://i.pinimg.com/originals/53/9e/7d/539e7deaa1c884043b565b2cf529b042.jpg"
              alt=""
              className="img_over img_over3"
            />


            <img 
              src="https://th.bing.com/th/id/OIP.JYIJGC-vsM49MkzE3CDRwwHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt=""
              className="img_over img_over4" 
            />

            <img 
              src="https://th.bing.com/th/id/OIP.aPMgguAIRbUOtSAg7md24QHaEK?w=186&h=104&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt=""
              className="img_over img_over5" 
            />

          </div>
        </div>




        <h2>contain</h2>
        <Conseptos texto={`"contain" hace que la imagen se ponga a su resolucion real por mas que el contenedor sea demasiado grande.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="contain">
  <img src="https://i.pinimg.com/originals/55/d0/29/55d02905b888ffbf8967484aa7875e34.jpg" alt="imagen">
</div>`}/>
        <h3>css</h3>
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
        <h3>sin contain</h3>
        <div className="website">
          <div className="contain_">
            <img alt="escoje una imagen" className="mostrar_img imagen__0" />
          </div>
        </div>
        <h3>con contain</h3>
        <div className="website">
        <div className="contain_">
            <img alt="escoje una imagen" className="mostrar_img imagen__1" />
          </div>
        </div>

        <h2>cover</h2>
        <Conseptos texto={`"cover" ajuata a la imagen al tamaño de su contenedor recortandola para que se pueda ver bien.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="cover">
  <img src="https://pm1.narvii.com/7858/b1ce484056913bc7484e401d0ce7c1e4ee727a81r1-736-736v2_uhq.jpg" alt="imagen">
</div>`}/>
        <h3>css</h3>
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
        <h3>sin cover</h3>
        <div className="website">
          <div className="cover_">
            <img alt="escoje una imagen" className="mostrar_img imagen__2" />
          </div>
        </div>
        <h3>con cover</h3>
        <div className="website">
          <div className="cover">
            <img alt="escoje una imagen" className="mostrar_img imagen__3" />
          </div>
        </div>

        <h2>none</h2>
        <Conseptos texto={`"none" ajusta a la imagen pero con su resolucion a escala real osea que si la imagen mide 200x400 se ajustara a su resolucion real.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="none">
  <img src="https://i.pinimg.com/originals/53/9e/7d/539e7deaa1c884043b565b2cf529b042.jpg" alt="imagen">
</div>`}/>
        <h3>css</h3>
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
        <h3>sin none</h3>
        <div className="website">
          <div className="none_">
            <img alt="escoje una imagen" className="mostrar_img imagen__4" />
          </div>
        </div>
        <h3>con none</h3>
        <div className="website">
          <div className="none">
            <img alt="escoje una imagen" className="mostrar_img imagen__5" />
          </div>
        </div>

        <h2>object-position</h2>
        <Conseptos texto={`Esto es para posisionar una imagen de arriba,abajo,derecha,izquierda.

Puedes ponerle cualquier propiedad.
top , right , bottom , left tambien puedes usar los em ejemplo "-15em" etc.

escoje una imagen`}/>
        <h3>html</h3>
        <Html codigo={`<div class="position">
  <img src="https://i.pinimg.com/originals/55/d0/29/55d02905b888ffbf8967484aa7875e34.jpg" alt="imagen">
</div>`}/>
        <h3>css</h3>
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
            <img alt="escoje una imagen" className="mostrar_img imagen__6" />
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default ObjetFit;