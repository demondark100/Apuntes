import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./outline.css";
import Resumenes from "../../../..//../componentes/resumenes/resumenes";

function Outline() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `El outline es similar que border pero este no ocupa escio como tal.`,
        lenguage: `Css`,
        codigo: `outline: 10px solid orange; /*es identico a border*/`
      }]}/>
      <main>
        <h1>outline</h1>
        <Conseptos texto={`El outline es un borde que no afecta al espacio de las cajas como si pasa con los bordes en simples palabras el outline no ocupara espacio real en el sitio web.`}/>
        <h2>border</h2>
        
        <Html codigo={`<div class="borde_1">
  cajita
</div>
<div class="borde_2">
  cajita
</div>`}/>
        
        <Css codigo={`.borde_1{
  background-color: green;
  border: 8px solid orangered;
  margin: auto;
  width: 35%;
  height: 150px;
  color: whitesmoke;
}
.borde_2{
  background-color: blue;
  margin: auto;
  width: 35%;
  height: 150px;
  color: whitesmoke;
}`}/>
        <div className="website">
          <div className="borde_1">
            cajita
          </div>
          <div className="borde_2">
            cajita
          </div>
        </div>
        <h2>outline</h2>
        
        <Html codigo={`<div class="outline_1">
  cajita
</div>
<div class="outline_2">
  cajita
</div>`}/>
        
        <Css codigo={`.outline_1{
  background-color: green;
  outline: 10px solid orangered;
  margin: auto;
  width: 35%;
  height: 150px;
  color: whitesmoke;
}
.outline_2{
  background-color: blue;
  margin: auto;
  width: 35%;
  height: 150px;
  color: whitesmoke;
}`}/>
        <div className="website">
          <div className="outline_1">
            cajita
          </div>
          <div className="outline_2">
            cajita
          </div>
        </div>
        <Conseptos texto={`ahora si te fijas el borde del outline no empuja a la caja de abajo debido a que no ocupa un espacio como tal en el sitio web para fijarte mejor fijate en la palabra "cajita" en la propiedad border de arriba empuja a la caja y se puede ver la palabra "cajita" por completo pero con el outline si te fijas la palabra "cajita" no sale por completo ya que no esta empujando a la cajita.`}/>
        <Conseptos texto={`Para terminar de entender el outline solo es para resaltar algo y no ocupara espacio real un ejemplo del uso del outline son los input.`}/>
        
        
        <Html codigo={`<div class="input_content">
  <input type="text">
  <input class="sin_outline" type="text">
</div>`}/>
        
        <Css codigo={`.sin_outline{
  outline: none;
}`}/>
        <Conseptos texto={`Para notar la diferencia has click primero en el primer input que dice "con outline" y notaras como es que aparece un borde pero que no ocupa espacio , luego has click en el input que dice "sin outline" y veras como esque ya no sale ese pequeño borde para resaltar los inputs que es el outline.`}/>
        <div className="website">
          <div className="input_content_outline">
            <input type="text" />
            <input className="sin_outline" type="text" />
          </div>
        </div>


      </main>
      <Footer />
    </>
  );
}

export default Outline;