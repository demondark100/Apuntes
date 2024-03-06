import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./float.css";
import Resumenes from "../../../../../componentes/resumenes/resumenes"

function Float() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: "Cambia los contenedores de posision de derecha a izquierda y vuseberza , flex es la tecnologia que lo reemplazo pero bueno.",
        lenguage: "Css",
        codigo: `.contenedor1{
  float: left;
}
.contenedor2{
  float: right;
}`
      }]}/>
      <main>
        <h1>float</h1>
        <Conseptos texto={`Esta propiedad nos sirve para cambiar a los contenedores de posision de derecha a izquierda y visebersa.`}/>
        <h2>float</h2>
        <Conseptos texto={`Tenemos:
float: right; posisionara un contenedor a la derecha.

float: left; posisionara un contenedor a la izquierda.`}/>
        
        <Html codigo={`<div class="content_float1">
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias aut atque odit iure mollitia ipsum dolores maiores, sed ex natus exercitationem recusandae laudantium facilis fuga sunt nam asperiores ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus eaque ipsum nesciunt doloremque facilis temporibus quae odit dolore dicta aut totam culpa harum dignissimos, quod cupiditate ipsam, asperiores quasi?
  </p>
</div>
<div class="content_float2">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab labore tenetur est. Sint nostrum amet animi impedit repellat enim quos ipsam! Exercitationem iure explicabo vero temporibus cumque delectus! Nisi.
  </p>
</div>`}/>
        
        <Css codigo={`.content_float1{
  background-color: yellow;
  width: 50%;
  float: left;
}
.content_float2{
  background-color: red;
  width: 50%;
  float: right;
}`}/>
        <div className="website">
          <div className="content_float1">
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias aut atque odit iure mollitia ipsum dolores maiores, sed ex natus exercitationem recusandae laudantium facilis fuga sunt nam asperiores ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus eaque ipsum nesciunt doloremque facilis temporibus quae odit dolore dicta aut totam culpa harum dignissimos, quod cupiditate ipsam, asperiores quasi?
              </p>
          </div>
          <div className="content_float2">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab labore tenetur est. Sint nostrum amet animi impedit repellat enim quos ipsam! Exercitationem iure explicabo vero temporibus cumque delectus! Nisi.
              </p>
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta estamos cambiando de posision a los contenedores uno de derecha a izquierda y otro de izquierda a derecha lo malo de esto esque trae problemas de altura.`}/>

        <Conseptos texto={`Un ejemplo mas del como usar float de una buena forma.`}/>
        
        <Html codigo={`<div class="content_float_ejemplo">
  <img class="imagen_Akame" src="https://i.pinimg.com/originals/e0/fa/76/e0fa76944eea642158cc9b071cf7d3ee.jpg" alt="akame" title="akame">
  <h2>Akame</h2>
  <p>
    abc q we atque quibusdam laboriosam ab perspiciatis! Cumque, tempora. Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. Minus pariatur quos in. Quis vitae voluptas unde iusto voluptates nesciunt, labore incidunt repel
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dignissimos quia placeat ullam dolor deserunt ipsum ex, nemo nostrum ad qui nisi, odio atque quibusdam laboriosam ab perspiciatis! Cumque, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quos
  </p>
</div>`}/>
        
        <Css codigo={`.content_float_ejemplo{
  border: 2px solid gray;
  width: 85%;
  margin: auto;
  padding: 8px;
}
.imagen_Akame{
  width: 50%;
  float: right;
  margin-right: 5px;
  margin-top: 8px;
}`}/>

      <div className="website">
        <div className="content_float_ejemplo">
            <img className="imagen_Akame" src="https://i.pinimg.com/originals/e0/fa/76/e0fa76944eea642158cc9b071cf7d3ee.jpg" alt="akame" title="akame" />
            <h2>Akame</h2>
            <p>
                abc q we atque quibusdam laboriosam ab perspiciatis! Cumque, tempora. Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Minus pariatur quos in. Quis vitae voluptas unde iusto voluptates nesciunt, labore incidunt repel
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dignissimos quia placeat ullam dolor deserunt ipsum ex, nemo nostrum ad qui nisi, odio atque quibusdam laboriosam ab perspiciatis! Cumque, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quos
            </p>
        </div>
      </div>
        <Conseptos texto={`A poco no es un efecto bueno? puedes ir jugando con los estilos por tu propia cuenta.`}/>



      </main>
      <Footer />
    </>
  );
}

export default Float;