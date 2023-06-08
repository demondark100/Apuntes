import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./CubicBezier.css";

function CubicBezier() {
  return (  
    <>
      <main>
        <h1>Cubic Bezier</h1>
        <Conseptos texto={`Esta es una propiedad que se trabaja en el "transition-timing-function" y el "animation-timing-function" esto nos sirve para cambiar la velociadad de las animaciones y transisiones que tiene el elemento a travez de curvas.

Esta propiedad tiene cuatro parametros.`}/>
        <Css codigo={`Cubic-beszier(cooderana x y de arriba , coordenada del otro punto);
Cubic-beszier(cooderana x y de arriba , cooderana x y de arriba , coordenada del otro punto ,coordenada del otro punto);
Cubic-beszier(0.25,0.8,0.9,0.7);`}/>
        <Conseptos texto={`Ahora una imagen para entender mejor como funciona "Cubic-beszier".`}/>
        <img className="cubicContent" src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00531-020-01945-2/MediaObjects/531_2020_1945_Fig1_HTML.png" alt="Cubic Bezier" />

        <h2>Cubic beszier transisition</h2>
        <h2>con cubic</h2>
        
        <Html codigo={`<div class="cubic_content">
    <div class="cubic_div">

    </div>
</div>`}/>
        
        <Css codigo={`.cubic_content{
    background-color: #9eb6ff;
    width: 100%;
    height: 50%;
}
.cubic_div{
    width: 25%;
    height: 45%;
    background-color: #87d10f;
    border: 2px #000 solid;
    transition-property: left background;
    transition-duration: 1s;
    position: relative;
    left: 0;

    transition-timing-function: cubic-bezier(0.4,0.23,0.36,0.1);
}

.cubic_content:hover .cubic_div{
    background-color: #000;
    left: 50%;
}`}/>
        <div className="website">
          <div className="cubic_content">
              <div className="cubic_div">

              </div>
          </div>
        </div>

        <h2>sin cubic</h2>
        
        <Html codigo={`<div class="sin_cubic_content">
    <div class="sin_cubic_div">

    </div>
</div>`}/>
        
        <Css codigo={`.sin_cubic_content{
    background-color: #9eb6ff;
    width: 100%;
    height: 50%;
}
.sin_cubic_div{
    width: 25%;
    height: 45%;
    background-color: #87d10f;
    border: 2px #000 solid;
    transition-property: left background;
    transition-duration: 1s;
    position: relative;
    left: 0;
}

.sin_cubic_content:hover .sin_cubic_div{
    background-color: #000;
    left: 50%;
}`}/>
        <div className="website">
          <div className="sin_cubic_content">
              <div className="sin_cubic_div">

              </div>
          </div>
        </div>

        <h2>Cubic beszier animation</h2>
        <h2>con cubic bezier</h2>
        
        <Html codigo={`<div class="animation_cubic">
    <div class="animation_cubic_div">

    </div>
</div>`}/>
        
        <Css codigo={`.animation_cubic{
    background-color: #9eb6ff;
    width: 100%;
    height: 50%;
}
.animation_cubic_div{
    width: 25%;
    height: 45%;
    background-color: #87d10f;
    border: 2px #000 solid;
    position: relative;
    left: 0;
    animation-name: con_cubic;
    animation-duration: 1s;
    animation-iteration-count: 3;
    
    animation-timing-function:  cubic-bezier(0.4,0.23,0.36,0.1);
}

@keyframes con_cubic {
    0%{
        left: 0;
        background-color: #87d10f;
    }
    100%{
        left: 100%;
        background-color: #000;
    }
}`}/>
        <div className="website">
          <div className="animation_cubic">
              <div className="animation_cubic_div">

              </div>
          </div>
        </div>

        <h2>sin cubic bezier</h2>
        
        <Html codigo={`<div class="sin_animation_cubic">
    <div class="sin_animation_cubic_div">

    </div>
</div>`}/>
        
        <Css codigo={`.sin_animation_cubic{
    background-color: #9eb6ff;
    width: 100%;
    height: 50%;
}
.sin_animation_cubic_div{
    width: 25%;
    height: 45%;
    background-color: #87d10f;
    border: 2px #000 solid;
    position: relative;
    left: 0;
    animation-name: con_cubic;
    animation-duration: 1s;
    animation-iteration-count: 3;
}

@keyframes con_cubic {
    0%{
        left: 0;
        background-color: #87d10f;
    }
    100%{
        left: 100%;
        background-color: #000;
    }
}`}/>
        <div className="website">
          <div className="sin_animation_cubic">
              <div className="sin_animation_cubic_div">

              </div>
          </div>
        </div>

        <Conseptos 
          texto={`{cubicEnlace}`}
          enlaces={{cubicEnlace: {url: "https://cubic-bezier.com/#.42,0,.58,1",text: "aqui una herramienta que te ayudara a crear de forma mas sensilla los cubic bezier"}}}  
          targetBlank={true}
        />

      </main>
      <Footer />
    </>
  );
}

export default CubicBezier;